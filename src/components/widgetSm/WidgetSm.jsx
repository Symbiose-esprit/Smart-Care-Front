import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import aziz from './aziz.jpg';
import amine from './amine.jpg';
import ouss from './ouss.jpg';
import yasmine from './yasmine.jpg';
import maryeem from './maryeem.jpg';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Patients</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
             src={ouss}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Oussema Mestiri </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={amine}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Med Amine Laajimi </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
           src={yasmine}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Yasmine Baoueb</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={maryeem}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Maryem Bessrour</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={aziz}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aziz Bannour</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
