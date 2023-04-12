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
      <div className="md:px-[15%] px-[5%] my-10">
        <h4 className="text-2xl underline font-semibold mb-3">
          Statistics by Assignment Marks:
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#6366f1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="linear"
              dataKey="Marks"
              stroke="#4338ca"
              fill="#ddd6fe"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="mt-4">
          <strong className="underline">N. B.</strong> I have full marks in all
          my assignments but I have reduced the marks To look like a chart [In
          my opinion].
        </p>
      </div>
    </div>
  );
};
export default Statistics;
