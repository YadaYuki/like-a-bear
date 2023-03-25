interface Props {
  title: string;
}

export const OgImgTemplate = ({ title }: Props) => {
  return (
    <div
      style={{
        fontSize: "40px",
      }}
    >
      {title}
    </div>
  );
};
