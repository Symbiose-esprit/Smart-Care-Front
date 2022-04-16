import React from "react";
import PageBanner from "../../../components/Client/Common/PageBanner";
import UniHeader from "../../../components/Client/Common/UniHeader";

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

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

      <div className={style.wrapper}>
        <UniHeader />
        <h2>main</h2>
        <h2>transaction history</h2>
      </div>
    </>
  );
};

export default ETHswap;
