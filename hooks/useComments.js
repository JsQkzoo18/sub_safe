import { size } from "lodash";
import { useEffect, useState } from "react";
import { getCommentsByProductAPI } from "../api/comments";

export function useGetComments(token, id) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getCommentsByProductAPI(token, id);
      if (size(response) > 0) setComments(response);
      else setComments([]);
    })();
  }, []);
  return { comments };
}
