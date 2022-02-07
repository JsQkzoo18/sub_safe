import { useEffect, useState } from "react";
import convertURLtoFile from "../utils/imagetoFile";

export function useConvertImage(img, name) {
  const [convertImage, setConvertImages] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await convertURLtoFile(img, name);
      console.log(response);
      if (response) {
        setConvertImages(response);
      }
    })();
  }, [img, name]);

  return { convertImage };
}
