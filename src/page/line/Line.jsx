import React from "react";

import LineChart from "./LineChart";
import Header from "../../components/Header";

const Line = () => {
  return (
    <>
      {" "}
      <Header title={"LINE CHART"} subtitle={"line chart"} />
      <LineChart isDashBord={false} />{" "}
    </>
  );
};

export default Line;
