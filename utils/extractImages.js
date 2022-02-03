import { size } from "lodash";
import { BASE_PATH } from "./env";

export const getProductImages = (product) => {
  let imagesArray = [];

  const { images } = product;

  if (size(images) > 0) {
    if (images.main_image) imagesArray.push(`${BASE_PATH}${images.main_image}`);
    if (images.image_1 && images.image_1 !== "/uploads/no_image.png")
      imagesArray.push(`${BASE_PATH}${images.image_1}`);
    if (images.image_2 && images.image_2 !== "/uploads/no_image.png")
      imagesArray.push(`${BASE_PATH}${images.image_2}`);
    if (images.image_3 && images.image_3 !== "/uploads/no_image.png")
      imagesArray.push(`${BASE_PATH}${images.image_3}`);
    if (images.image_4 && images.image_4 !== "/uploads/no_image.png")
      imagesArray.push(`${BASE_PATH}${images.image_4}`);
  }

  return imagesArray;
};
