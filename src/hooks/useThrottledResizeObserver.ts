import { useState, useMemo } from "react";
import useResizeObserver from "use-resize-observer";
import _ from "lodash-es";

export const useThrottledResizeObserver: any = (wait: number = 300) => {
  const [size, setSize] = useState({});
  const onResize = useMemo(() => _.throttle(setSize, wait), [wait]);
  const { ref } = useResizeObserver({ onResize });

  return { ref, ...size };
};
