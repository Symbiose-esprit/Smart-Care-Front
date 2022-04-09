import React from "react";
import Chart from "../../../components/Admin/chart/Chart";
import { doctorData } from "../../../dummyData";

export default function Analytics() {
  return (
    <div>
      <div className="analytics">
        <div className="chart">
          <Chart data={doctorData} dataKey="ActiveDoc" title="Active doctors" />
        </div>
      </div>
    </div>
  );
}
