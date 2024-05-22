import { DNA, Puff } from "react-loader-spinner";

export const ButtonLoader1 = ({ height, width, color }) => {
  return (
    <DNA
      visible={true}
      height={height}
      width={width}
      radius="9"
      color={color}
      ariaLabel="loading"
    />
  );
};
export const ButtonLoader2 = ({ height, width, color }) => {
  return (
    <Puff
      visible={true}
      height={height}
      width={width}
      radius="9"
      color={color}
      ariaLabel="loading"
    />
  );
};
