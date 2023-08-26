import { useCallback, useState, useEffect } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoad = useCallback(() => {
    setLoading(true);
  }, []);

  const finishLoad = useCallback(() => {
    setLoading(false);
  }, []);
    
  return { loading, startLoad, finishLoad };
}
