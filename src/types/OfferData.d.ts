import type { fullApiType, productDataType } from "./productapidata";

export type queryType = {
  data: fullApiType | undefined;
  refetch: Function;
  isPending: boolean;
  isError: boolean;
  error: any;
};

export type singleProductType = {
  data: productDataType | undefined;
  refetch: Function;
  isPending: boolean;
  isError: boolean;
  error: any;
};
