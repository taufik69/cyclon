import { useQuery } from "@tanstack/react-query";
import { GetFlashSaleOfferData } from "../api/OfferApi";
import type { queryType } from "../types/OfferData";

export const useFlashSaleOffer = (): queryType => {
  const {
    data: FlashSaleData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["flashSaleOffer"],
    queryFn: GetFlashSaleOfferData,
  });
  return { data: FlashSaleData, refetch, isPending, isError, error };
};
