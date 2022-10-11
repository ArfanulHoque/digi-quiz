import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h2>Statistics page</h2>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart width={1000} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#00aaff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
