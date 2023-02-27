import classNames from "classnames";
import MainSkeleton from "./MainSkeleton";

function Skeleton({ times, className, type }) {
  const outClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  let viewSkeleton;
  viewSkeleton = type ? (
    <MainSkeleton
      outClassNames={outClassNames}
      innerClassNames={innerClassNames}
    />
  ) : (
    <div className={outClassNames}>
      <div className={innerClassNames}></div>
    </div>
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => <div key={i}>{viewSkeleton}</div>);

  return boxes;
}

export default Skeleton;
