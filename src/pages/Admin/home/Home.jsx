import Chart from "../../../components/Admin/chart/Chart";
import FeaturedInfo from "../../../components/Admin/featuredInfo/FeaturedInfo";
import WidgetLg from "../../../components/Admin/widgetLg/WidgetLg";
import WidgetSm from "../../../components/Admin/widgetSm/WidgetSm";
import { userData } from "../../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
