import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethLogo from "../../../../public/images/eth.png";
import uniswapLogo from "../../../../public/images/uniswap.png";
import { TransactionContext } from "../../../../context/TransactionContext";

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
};

const UniHeader = () => {
  const [selectedNav, setSelectedNav] = useState("swap");
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [userName, setUserName] = useState();

  useEffect(() => {
    if(!currentAccount) return
    setUserName(`${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`);
  }, [currentAccount]);

  console.log({ connectWallet, currentAccount });

  return (
    <div className="wrapper">
      <div className="headerLogo">
        <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>
      <div className="blockchainnav">
        <div className="navItemsContainer">
          <div
            onClick={() => setSelectedNav("swap")}
            className={`${"navItem"} ${
              selectedNav === "swap" && "activeNavItem"
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav("pool")}
            className={`${"navItem"} ${
              selectedNav === "pool" && "activeNavItem"
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav("vote")}
            className={`${"navItem"} ${
              selectedNav === "vote" && "activeNavItem"
            }`}
          >
            Vote
          </div>
          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={"navItem"}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className="buttonsContainer">
        <div className={`${"blockchainbutton"} ${"buttonPadding"}`}>
          <div className="buttonIconContainer">
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className="buttonIconContainer">
            <AiOutlineDown />
          </div>
        </div>

        {currentAccount ? (
          <div className={`${"blockchainbutton"} ${"buttonPadding"}`}>
            <div className={"buttonTextContainer"}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${"blockchainbutton"} ${"buttonPadding"}`}
          >
            <div className={`${"buttonAccent"} ${"buttonPadding"}`}>
              Connect Wallet
            </div>
          </div>
        )}

        <div className={`${"blockchainbutton"} ${"buttonPadding"}`}>
          <div className={`${"buttonIconContainer"} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniHeader;
