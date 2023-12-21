import React from "react";
import header from "../assets/header.png";
import Companyies from "../assets/Companyies.png";

function Header() {
  return (
    <>
    <div style={{height:"40vh"}}>
      <div className="pt-2 border-b-2 border-black w-full">
        <img
          src={header}
          alt="Header Image"
          style={{ width: "1000px", height: "auto" }}
        />
      </div>

      <div className="pt-4 border-b-2 border-black w-full">
        <img src={Companyies} alt="Header Image" />
      </div>
      <h1 className="pt-3 pb-4 text-3xl font-bold underline">Quotation</h1>

      <p className="text-left text-lg pt-2">
        Dear Sir,
        <br />
        We thank you very much for your valuable enquiry and we are pleased to
        give you the best price for supply of the DG.
      </p>
      </div>
    </>
  );
}

export default Header;
