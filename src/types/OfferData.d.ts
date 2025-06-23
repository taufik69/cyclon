import type { fullApiType } from "./productapidata";

export type queryType = {
  data: fullApiType | undefined;
  refetch: Function;
  isPending: boolean;
  isError: boolean;
  error: any;
};
