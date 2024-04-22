import { breakpoints, type ScreenSize } from "@plat/styles";
import clsx from "clsx";

interface Props {
  size: ScreenSize;
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ size, className, children }: Props) => {
  return (
    <div
      className={clsx(`max-w-[${breakpoints[size]}px] mx-auto`, { className })}
    >
      {children}
    </div>
  );
};

export default Container;
