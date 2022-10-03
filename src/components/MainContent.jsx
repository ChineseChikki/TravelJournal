import React from "react";
import data from "../utils/data";
import Nav from "./Nav";
import "./MainContent.css";
import Card from "./Card";

const MainContent = () => {
  const dataSet = data.map((x, index) => {
    x.key = index;
    // using the ... makes things easy for you .
    return <Card {...x} />;
  });

  return (
    <>
      <Nav />
      <div className="main">{dataSet}</div>
    </>
  );
};

export default MainContent;

// key={x.title}
// title={x.title}
// location={x.location}
// googleMapUrl={x.googleMapsUrl}
// startDate={x.startDate}
// endDate={x.endDate}
// description={x.description}
// imageUrl={x.imageUrl}
