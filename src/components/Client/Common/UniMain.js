import { useContext } from "react";
import Image from "next/image";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from "../../../../public/images/eth.png";
import { TransactionContext } from "../../../../context/TransactionContext";
import Modal from "react-modal";
import { Router, useRouter } from "next/router";
import {TransactionLoader} from './TransactionLoader'

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const UniMain = () => {
  const { formData, handleChange, sendTransaction } =
    useContext(TransactionContext);


  const router = useRouter()  
    
  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData;
    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction();
  };
  return (
    <div className="UniMainwrapper">
      <div className="UniMaincontent">
        <div className="UniMainformHeader">
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className="transferPropContainer">
          <input
            type="text"
            className="transferPropInput"
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, "amount")}
          />
          <div className="currencySelector">
            <div className="currencySelectorContent">
              <div className="currencySelectorIcon">
                <Image src={ethLogo} alt="eth logo" height={20} width={20} />
              </div>
              <div className="currencySelectorTicker">ETH</div>
              <AiOutlineDown className="currencySelectorArrow" />
            </div>
          </div>
        </div>
        <div className="transferPropContainer">
          <input
            type="text"
            className="transferPropInput"
            placeholder="0x..."
            onChange={(e) => handleChange(e, "addressTo")}
          />
          <div className="currencySelector"></div>
        </div>
        <div onClick={(e) => handleSubmit(e)} className="confirmButton">
          Confirm
        </div>
      </div>
      {/* <Modal isOpen={!!router.query.loading} style={customStyles}>
        <TransactionLoader />
      </Modal> */}
    </div>
  );
};

export default UniMain;
