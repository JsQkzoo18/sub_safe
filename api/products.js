import { size } from "lodash";
import { BASE_PATH } from "../utils/env";

export async function getAllProductsAPI() {
  try {
    const compositeUrl = `${BASE_PATH}/articulos`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getProductsByIDAPI(id) {
  try {
    let imagesArray = [];
    const compositeUrl = `${BASE_PATH}/articulos/${id}`;
    const response = await fetch(compositeUrl);
    const data = await response.json();
    const { images } = data;

    if (size(images) > 0) {
      if (images.main_image)
        imagesArray.push(`${BASE_PATH}${images.main_image}`);
      if (images.image_1) imagesArray.push(`${BASE_PATH}${images.image_1}`);
      if (images.image_2) imagesArray.push(`${BASE_PATH}${images.image_2}`);
      if (images.image_3) imagesArray.push(`${BASE_PATH}${images.image_3}`);
      if (images.image_4) imagesArray.push(`${BASE_PATH}${images.image_4}`);
    }

    return { data, imagesArray };
  } catch (error) {
    return null;
  }
}
