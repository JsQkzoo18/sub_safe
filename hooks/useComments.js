import { size } from "lodash";
import { useEffect, useState } from "react";
import { getCommentsByProductAPI } from "../api/comments";

export function useGetComments(id, reload, setReloadComments) {
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
    setReloadComments(false);
  }, [id, reload]);
  return { comments, loading };
}

export function useAddComment(toke, formData) {
  const [responde, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getCommentsByProductAPI(id);
      if (size(response) > 0) setResponse(response);
      else setResponse([]);
      setLoading(false);
    })();
  }, []);
  return { comments, loading };
}
