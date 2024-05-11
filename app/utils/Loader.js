import { ThreeDots } from "react-loader-spinner";

export const ButtonLoader = ({ height, width }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
    />
  );
};
