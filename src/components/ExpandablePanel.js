import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="mb-2 border rounded mx-2.5 md:mx-0 ">
      <div className="flex p-2 justify-between items-center   ">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div
          onClick={handleClick}
          className="cursor-pointer ease-in-out duration-300"
        >
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
