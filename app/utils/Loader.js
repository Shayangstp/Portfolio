import { ThreeDots } from "react-loader-spinner";

export const ButtonLoader = ({ height, width, color }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
    />
  );
};
