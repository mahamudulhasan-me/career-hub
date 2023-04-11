import React, { PureComponent } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionHeader from "../SectionHeader/SectionHeader";
const data = [
  {
    name: "Assignment-1",
    marks: 60,
    pv: 2400,
  },
  {
    name: "Assignment-2",
    marks: 60,
  },
  {
    name: "Assignment-3",
    marks: 60,
  },
  {
    name: "Assignment-4",
    marks: 60,
  },
  {
    name: "Assignment-5",
    marks: 60,
  },
  {
    name: "Assignment-6",
    marks: 60,
  },
  {
    name: "Assignment-7",
    marks: 60,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div>
        <SectionHeader>Statistics</SectionHeader>
        <div className="px-[20%]">
          <h4>Statistics by Assignment Marks</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="marks"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
