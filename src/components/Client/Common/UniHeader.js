import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethLogo from "../../../../public/images/eth.png";
import uniswapLogo from "../../../../public/images/uniswap.png";
import { TransactionContext } from "../../../../context/TransactionContext";

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
