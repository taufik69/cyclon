import React from "react";
import Container from "../../CommonComponets/Container";
import OfferItem from "../../CommonComponets/OfferItem";
import { useFlashSaleOffer } from "../../../hooks/UseFlashSaleOffer";

const Offers: React.FC = () => {
  const flashSale = useFlashSaleOffer();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-4 gap-x-6">
          <OfferItem title="FLASH SALE TODAY" wholeData={flashSale} />
          <OfferItem title="BEST SELLERS" wholeData={flashSale} />
          <OfferItem title="TOP RATED" wholeData={flashSale} />
          <OfferItem title="NEW ARRIVAL" wholeData={flashSale} />
        </div>
      </Container>
    </div>
  );
};

export default Offers;
