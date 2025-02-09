import { useEffect, useRef, useCallback, useState } from "react";
import styles from "./WorkList.module.css";
import type { WorkType } from "~/schemas/work";
import { WORK_CATEGORY_TO_COLOR_CODE } from "~/consts/color";

type Props = {
  workList: WorkType[];
};

const GRID_STYLE = {
  display: "grid",
  gridGap: 8,
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gridAutoRows: 4,
} as const;

export const WorkList = ({ workList }: Props) => {
  const [isAllImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const promises = workList.map((work) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = `/works/${work.workId}.png`;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });
    Promise.all(promises).then(() => {
      setAllImagesLoaded(true);
    });
  }, [workList]);

  if (!isAllImagesLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.grid} style={GRID_STYLE}>
      {workList.map((work) => (
        <WorkItem work={work} key={work.workId} />
      ))}
    </div>
  );
};

type WorkItemProps = {
  work: WorkType;
};

const WorkItem = ({ work }: WorkItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const recalcRowSpan = useCallback(() => {
    if (!contentRef.current || !itemRef.current) return;
    const gridGap = GRID_STYLE.gridGap;
    const rowHeight = GRID_STYLE.gridAutoRows;
    const height = contentRef.current.getBoundingClientRect().height;
    const rowSpan = Math.ceil((height + gridGap) / (rowHeight + gridGap));
    itemRef.current.style.gridRowEnd = `span ${rowSpan}`;
  }, [contentRef, itemRef]);

  useEffect(() => {
    window.addEventListener("resize", recalcRowSpan);
    return () => {
      window.removeEventListener("resize", recalcRowSpan);
    };
  }, [recalcRowSpan]);

  return (
    <div ref={itemRef}>
      <a href={`/works/${work.workId}`}>
        <div ref={contentRef} className={styles.item_content}>
          <img
            alt={work.title}
            width="100%"
            src={`/works/${work.workId}.png`}
            onLoad={recalcRowSpan}
          />
          <p
            style={{ background: WORK_CATEGORY_TO_COLOR_CODE[work.category] }}
            className={styles.work_tag}
          >
            {work.category}
          </p>
        </div>
      </a>
    </div>
  );
};
