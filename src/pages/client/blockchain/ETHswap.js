import React from "react";
import PageBanner from "../../../components/Client/Common/PageBanner";
import TransactionHistory from "../../../components/Client/Common/TransactionHistory";
import UniHeader from "../../../components/Client/Common/UniHeader";
import UniMain from "../../../components/Client/Common/UniMain";

const ETHswap = () => {
  return (
    <>
      

      <div className="ETHwrapper">
        <UniHeader />
        <UniMain />
        <TransactionHistory />
      </div>
    </>
  );
};

export default ETHswap;
