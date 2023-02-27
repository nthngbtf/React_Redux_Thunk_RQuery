export default function MainSkeleton({ outClassNames, innerClassNames }) {
  return (
    <div>
      <div className="flex mt-10">
        <div className={`${outClassNames}  w-screen h-16`}>
          <div className={innerClassNames}></div>
        </div>
      </div>
      <div className={`flex  justify-center my-9 `}>
        <div className="flex flex-col">
          <div className={`${outClassNames} w-96 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-80 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-96 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-96 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-80 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-72 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-32 h-4`}>
            <div className={innerClassNames}></div>
          </div>
          <div className={`${outClassNames} w-96 h-4`}>
            <div className={innerClassNames}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
