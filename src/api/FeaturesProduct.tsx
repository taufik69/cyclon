export const GetFeaturesProduct = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log("error from features product function", error);
  }
};
