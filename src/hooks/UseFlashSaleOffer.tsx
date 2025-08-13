import { useQuery } from "@tanstack/react-query";
import { GetFlashSaleOfferData } from "../api/OfferApi";
import { GetFeaturesProduct } from "../api/FeaturesProduct";
import type { queryType, singleProductType } from "../types/OfferData";
import { GetSingleProduct } from "../api/GetSingleProduct";

export const useFlashSaleOffer = (): queryType => {
  const {
    data: FlashSaleData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["flashSaleOffer"],
    queryFn: () => GetFlashSaleOfferData({ limit: 3, skip: 0 }),
  });
  return { data: FlashSaleData, refetch, isPending, isError, error };
};

export const useBestSellerOffer = (): queryType => {
  const {
    data: BestSellerData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["bestSellerOffer"],
    queryFn: () => GetFlashSaleOfferData({ limit: 3, skip: 3 }),
  });
  return { data: BestSellerData, refetch, isPending, isError, error };
};

export const useTopRatted = (): queryType => {
  const {
    data: topRattedData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["topRatted"],
    queryFn: () => GetFlashSaleOfferData({ limit: 3, skip: 6 }),
  });
  return { data: topRattedData, refetch, isPending, isError, error };
};

export const useNewArrival = (): queryType => {
  const {
    data: newArrivalData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["newArrival"],
    queryFn: () => GetFlashSaleOfferData({ limit: 3, skip: 9 }),
  });
  return { data: newArrivalData, refetch, isPending, isError, error };
};

// get a all product
export const useGetAllProduct = (): queryType => {
  const {
    data: newArrivalData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => GetFeaturesProduct(),
  });
  return { data: newArrivalData, refetch, isPending, isError, error };
};

// get single product
export const useGetSingleProduct = (productId: number): singleProductType => {
  const {
    data: newArrivalData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => GetSingleProduct(productId),
  });
  return { data: newArrivalData, refetch, isPending, isError, error };
};
