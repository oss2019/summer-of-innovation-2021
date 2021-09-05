import React from "react";
import Header from "../header";
import Bottom from "../Bottom";
import GetCertificate from "./getCertificate";

const Certificate_main = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#0072ff", width: "100%" }}>
        <Header />
      </div>

      <GetCertificate />

      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
};

export default Certificate_main;
