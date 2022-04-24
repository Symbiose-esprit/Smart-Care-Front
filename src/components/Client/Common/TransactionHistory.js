import { useEffect, useState, useContext } from "react";
import { TransactionContext } from "../../../../context/TransactionContext";
import { client } from "../../../../lib/sanityClient";
import Image from "next/image";
import ethLogo from "../../../../public/images/eth.png";
import { FiArrowUpRight } from 'react-icons/fi'

const TransactionHistory = () => {
  const { isLoading, currentAccount } = useContext(TransactionContext)
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(() => {
    ;(async () => {
      if (!isLoading && currentAccount) {
        const query = `
          *[_type=="users" && _id == "${currentAccount}"] {
            "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
          }
        `

        const clientRes = await client.fetch(query)

        setTransactionHistory(clientRes[0].transactionList)
      }
    })()
  }, [isLoading, currentAccount])

  return (
    <div className={"HistoryWrapper"}>
      <div>
        {transactionHistory &&
          transactionHistory?.map((transaction, index) => (
            <div className={"txHistoryItem"} key={index}>
              <div className={"txDetails"}>
                <Image src={ethLogo} height={20} width={15} alt='eth' />
                {transaction.amount} Ξ sent to{' '}
                <span className={"toAddress"}>
                  {transaction.toAddress.substring(0, 6)}...
                </span>
              </div>{' '}
              on{' '}
              <div className={"txTimestamp"}>
                {new Date(transaction.timestamp).toLocaleString('en-US', {
                  timeZone: 'PST',
                  hour12: true,
                  timeStyle: 'short',
                  dateStyle: 'long',
                })}
              </div>
              <div className={"etherscanLink"}>
                <a
                  href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
                  target='_blank'
                  rel='noreferrer'
                  className={"etherscanLink"}
                >
                  View on Etherscan
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TransactionHistory