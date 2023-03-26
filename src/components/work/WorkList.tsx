import { useEffect, useRef } from "react";
import styles from "./WorkList.module.css";
import type { WorkType } from "~/schemas/work";

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
  return (
    <div className={styles.grid} style={GRID_STYLE}>
      {workList.map((work) => (
        <WorkItem work={work} key={work.wordId} />
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
  useEffect(() => {
    const { current: contentCurrent } = contentRef;
    const { current: itemCurrent } = itemRef;
    if (!contentCurrent || !itemCurrent) {
      return;
    }
    const rowSpan = Math.ceil(
      (contentCurrent.getBoundingClientRect().height + GRID_STYLE.gridGap) /
        (GRID_STYLE.gridAutoRows + GRID_STYLE.gridGap)
    );
    itemCurrent.style.gridRowEnd = `span ${rowSpan}`;
  }, []);
  return (
    <div ref={itemRef} key={work.wordId}>
      <a>
        <div ref={contentRef} className={styles.item_content}>
          <img
            alt={work.title}
            width="100%"
            src={`/works/${work.wordId}.png`}
          />
        </div>
      </a>
    </div>
  );
};
