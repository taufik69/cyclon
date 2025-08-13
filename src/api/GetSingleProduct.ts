import type { productDataType } from "../types/productapidata";

/**
 * Fetches data for a single product from the dummyjson.com API and returns it.
 * Returns a Promise that resolves with the API response data or rejects with an error.
 * The API response data is of type `fullApiType`.
 *
 * If an error occurs, logs the error and rethrows it.
 */

export const GetSingleProduct = async (
  productId: number
): Promise<productDataType> => {
  try {
    const data = await fetch(
      "https://dummyjson.com/products/" + productId
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log("error from features product function", error);
    throw error; // rethrow the error to ensure a value is always returned or an error is thrown
  }
};
