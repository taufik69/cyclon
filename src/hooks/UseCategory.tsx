import { useQuery } from "@tanstack/react-query";
import { getCategoryData } from "../api/Category";

interface categoryTypes<T> {
  data: T | undefined;
  refetch: Function;
  isPending: boolean;
  isError: boolean;
  error: any;
}

export const useCategoryData = (): categoryTypes<string[]> => {
  const { data, refetch, isPending, isError, error } = useQuery({
    queryKey: ["categoryData"],
    queryFn: getCategoryData,
  });

  return { data, refetch, isPending, isError, error };
};
