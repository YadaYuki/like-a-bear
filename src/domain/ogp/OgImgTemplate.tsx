import { SITE_URL } from "~/consts/url";

interface Props {
  title: string;
}

export const OgImgTemplate = ({ title }: Props) => {
  return (
    <div style={{ backgroundColor: "#fff", display: "flex" }}>
      <div
        style={{
          width: "920px",
          height: "630px",
          fontSize: "56px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "16px", marginRight: "16px" }}>{title}</div>
      </div>
      <div
        style={{
          width: "280px",
          height: "630px",
          backgroundColor: "#f2f2f2",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "16px",
            marginTop: "558px",
          }}
        >
          <img
            src={`${SITE_URL}/bear.png`}
            style={{ borderRadius: "32px" }}
            width={64}
            height={64}
          />
          <div
            style={{ fontSize: "32px", marginTop: "8px", marginLeft: "8px" }}
          >
            Like a Bear
          </div>
        </div>
      </div>
    </div>
  );
};
