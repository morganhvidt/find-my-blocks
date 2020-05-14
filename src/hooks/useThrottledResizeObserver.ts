import { useState, useMemo } from "react";
import useResizeObserver from "use-resize-observer";
import { throttle } from "lodash";

export const useThrottledResizeObserver: any = (wait: number = 300) => {
  const [size, setSize] = useState({});
  const onResize = useMemo(() => throttle(setSize, wait), [wait]);
  const { ref } = useResizeObserver({ onResize });

  return { ref, ...size };
};
