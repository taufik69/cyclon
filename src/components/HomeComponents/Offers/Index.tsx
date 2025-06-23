import React from "react";
import Container from "../../CommonComponets/Container";
import OfferItem from "../../CommonComponets/OfferItem";
import {
  useBestSellerOffer,
  useFlashSaleOffer,
  useNewArrival,
  useTopRatted,
} from "../../../hooks/UseFlashSaleOffer";
import FeatrureProductError from "../../../Error/FeatrureProductError";

const Offers: React.FC = () => {
  const flashSale = useFlashSaleOffer();
  const bestSeller = useBestSellerOffer();
  const topRatted = useTopRatted();
  const newArrival = useNewArrival();
  if (
    flashSale.isError ||
    bestSeller.isError ||
    topRatted.isError ||
    newArrival.isError
  )
    return (
      <div>
        <FeatrureProductError
          message={flashSale.error?.message}
          onRetry={flashSale.refetch()}
        />
      </div>
    );

  return (
    <div>
      <Container>
        <div className="grid grid-cols-4 gap-x-6">
          <OfferItem title="FLASH SALE TODAY" wholeData={flashSale} />
          <OfferItem title="BEST SELLERS" wholeData={bestSeller} />
          <OfferItem title="TOP RATED" wholeData={topRatted} />
          <OfferItem title="NEW ARRIVAL" wholeData={newArrival} />
        </div>
      </Container>
    </div>
  );
};

export default Offers;
