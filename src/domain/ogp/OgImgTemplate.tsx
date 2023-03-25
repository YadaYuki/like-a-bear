import { SITE_URL } from "~/consts/url";

interface Props {
  title: string;
}

export const OgImgTemplate = ({ title }: Props) => {
  return (
    <div style={{ backgroundColor: "#fff", display: "flex" }}>
      <div
        style={{
          width: "688px",
          height: "432px",
          fontSize: "40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "16px", marginRight: "16px" }}>{title}</div>
      </div>
      <div
        style={{
          width: "208px",
          height: "432px",
          backgroundColor: "#f2f2f2",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "8px",
            marginTop: "376px",
          }}
        >
          <img
            src={`${SITE_URL}/bear.png`}
            style={{ borderRadius: "24px" }}
            width={48}
            height={48}
          />
          <div
            style={{ fontSize: "24px", marginTop: "8px", marginLeft: "8px" }}
          >
            Like a Bear
          </div>
        </div>
      </div>
    </div>
  );
};
