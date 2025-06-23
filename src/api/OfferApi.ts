import type { fullApiType } from "../types/productapidata";

type propType = {
  limit: number;
  skip: number;
};
export const GetFlashSaleOfferData = async ({
  limit,
  skip,
}: propType): Promise<fullApiType> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log("error from features product function", error);
    throw error; // rethrow the error to ensure a value is always returned or an error is thrown
  }
};
