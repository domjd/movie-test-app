import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function LoadMore() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) console.log("IN VIEW");
  });

  return (
    <>
      <div className="flex justify-center align-center m-8">
        <span ref={ref} className="loading loading-spinner loading-lg"></span>
      </div>
    </>
  );
}

export default LoadMore;
