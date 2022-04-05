import "./analytics.css"
import Chart from "../../components/chart/Chart"
import {doctorData} from "../../dummyData"


        import React from 'react'
        
        export default function Analytics() {
          return (
            <div><div className="analytics">
            <div className="chart">
            <Chart data={doctorData} dataKey="ActiveDoc" title="Active doctors" />
            </div>
            </div>
    </div>
          )
        }
        