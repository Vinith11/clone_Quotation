import React from "react";

function About() {
  return (
    <>
      <div className="text-left">
        <h1 className="text-4xl font-bold underline mb-4 pt-8 text-center">
          ABOUT US
        </h1>
        <div className="border border-white p-4 max-w-5xl">
          <p>
            Over the past <strong className="text-red-500">40 years,</strong>{" "}
            Progressive Traders has powered the lives and businesses of
            thousands of people across Karnataka, Goa, and Maharashtra with a
            wide range of Diesel generators ranging from{" "}
            <strong className="text-blue-500">3.5 kVA to 4600 kVA,</strong>{" "}
            known for the{" "}
            <strong className="text-lightBlue-500">
              Reliable and Professional after-sales support and products.
            </strong>{" "}
            We are committed to giving our customers the{" "}
            <strong className="text-purple-500">
              Best, Prompt & On-Time service
            </strong>{" "}
            for all their DG’s.
          </p>
          <br />
          <p>
            <strong className="text-orange-500">
              In the last 40+ years, we have sold{" "}
            </strong>{" "}
            <strong className="text-red-500">7000+</strong>
            <strong className="text-orange-500">
              Diesel Generators ranging from 1 kVA to 1000 kVA.
            </strong>
          </p>
        </div>
      </div>

      <div className="text-left">
        <h1 className="text-4xl font-bold underline mb-4 pt-8 text-center">
          The PROGRESSIVE ADVANTAGE
        </h1>
        <div className="border border-white p-4 max-w-5xl p">
          <ul className="list-disc list-outside">
            <li>
              Progressive Traders is the{" "}
              <strong className="text-blue-500">single point contact </strong>{" "}
              for SALES, SERVICE, WARRANTY, and SPARES for all KOHLER POWER
              Products.
            </li>
            <li>
              Unlike all other brands where the Service for your DG,s are
              offered by third parties, we give the{" "}
              <strong className="text-blue-500">Best & Priority </strong>
              service for all our customers.
            </li>
            <li>
              We are one of the{" "}
              <strong className="text-blue-500">Oldest </strong> (40 + Years)
              Generator dealer based in Belagavi.
            </li>
            <li>
              We are the{" "}
              <strong className="text-blue-500">most ethical </strong> dealer in
              Belagavi.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
