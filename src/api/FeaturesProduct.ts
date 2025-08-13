import type { fullApiType } from "../types/productapidata";

export const GetFeaturesProduct = async (): Promise<fullApiType> => {
  try {
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log("error from features product function", error);
    throw error; // rethrow the error to ensure a value is always returned or an error is thrown
  }
};
