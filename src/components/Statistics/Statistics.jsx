import React from "react";
import { useLoaderData } from "react-router-dom";
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

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <SectionHeader>Statistics</SectionHeader>
      <div className="px-[20%]">
        <h4>Statistics by Assignment Marks</h4>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={10000}
            data={data}
            syncId="anyId"
            className="bg-[url('./assets/Images/common-bg.png')]"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Statistics;
