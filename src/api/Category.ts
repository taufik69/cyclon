import type { categoryTypes } from "../types/Categorydata";
import type { fullApiType } from "../types/productapidata";

export const getCategoryData = async (): Promise<categoryTypes> => {
  try {
    return await fetch("https://dummyjson.com/products/category-list").then(
      (res) => res.json()
    );
  } catch (error) {
    console.log("error from category function", error);
    // Return a default value or throw to satisfy the return type
    throw error;
  }
};

export const categoryWiseData = async (
  categorySlug: string
): Promise<fullApiType> => {
  try {
    return await fetch(
      `https://dummyjson.com/products/category/${categorySlug}`
    ).then((res) => res.json());
  } catch (error) {
    console.log("error from category function", error);
    // Return a default value or throw to satisfy the return type
    throw error;
  }
};
