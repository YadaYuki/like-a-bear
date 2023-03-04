type IconProps = {
  fill?: string;
};

export const ArrowIcon = ({ fill }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron_left_24px">
        <path
          id="icon/navigation/chevron_left_24px"
          d="M7.41 8.29499L6 9.70499L12 15.705L18 9.70499L16.59 8.29499L12 12.875L7.41 8.29499Z"
          fill={fill ?? "#000"}
        ></path>
      </g>
    </svg>
  );
};
