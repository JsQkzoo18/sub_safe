import { size } from "lodash";
import { useEffect, useState } from "react";
import { getCommentsByProductAPI } from "../api/comments";

export function useGetComments(id) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getCommentsByProductAPI(id);
      if (size(response) > 0) setComments(response);
      else setComments([]);
      setLoading(false);
    })();
  }, []);
  return { comments, loading };
}
