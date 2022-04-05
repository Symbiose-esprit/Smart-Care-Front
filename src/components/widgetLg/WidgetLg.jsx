import "./widgetLg.css";
import amine from './amine.jpg';
import ouss from './ouss.jpg';
import yasmine from './yasmine.jpg';
import maryeem from './maryeem.jpg';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Confirmed Appoinments</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Patient</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ouss}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Oussema mestiri </span>
          </td>
          <td className="widgetLgDate">4 March 2022</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={maryeem}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maryem bessrour</span>
          </td>
          <td className="widgetLgDate">3 March 2022</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={amine}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mohamed Amine Laajimi </span>
          </td>
          <td className="widgetLgDate">2 March 2022</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={yasmine}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Yesmine Baoueb </span>
          </td>
          <td className="widgetLgDate">1 March 2022</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
