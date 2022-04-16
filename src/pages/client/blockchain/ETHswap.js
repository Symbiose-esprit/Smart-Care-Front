import React from "react";
import PageBanner from "../../../components/Client/Common/PageBanner";
import UniHeader from "../../../components/Client/Common/UniHeader";
import UniMain from "../../../components/Client/Common/UniMain";

const ETHswap = () => {
  return (
    <>
      <PageBanner
        pageTitle="ETHswap"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ETHswap"
        bgImage="page-title-one"
      />

      <div className="ETHwrapper">
        <UniHeader />
        <UniMain />
        <h2>transaction history</h2>
      </div>
    </>
  );
};

export default ETHswap;
