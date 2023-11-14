import { useState } from "react";
import "./App.css";
import header from "./assets/header.png";
import Companyies from "./assets/Companyies.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Page 1*/}
      <div className="w-210 h-297 border border-solid border-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="pt-6 border-b-2 border-black">
            <img
              src={header}
              alt="Header Image"
              style={{ width: "1000px", height: "auto" }}
            />
          </div>

          <div className="pt-4 border-b-2 border-black">
            <img src={Companyies} alt="Header Image" />
          </div>

          <div>
            <h1 className="pt-6 pb-10 text-4xl font-bold underline">
              Quotation
            </h1>

            <p className="text-left text-lg pt-2">
              Dear Sir,
              <br />
              We thank you very much for your valuable enquiry and we are
              pleased to give you the best price for supply of the DG.
            </p>
            <h1 className="text-left pt-6 pb-10 italic text-4xl font-bold underline">
              ASHOK LEYLAND Make:
            </h1>
            <div className="border border-black p-4 max-w-5xl">
              <p className="text-left text-lg italic">
                <strong>OL125D:</strong>{" "}
                <strong className="text-blue-500">125 KVA </strong> Diesel
                Generating Set comprising Liquid Cooled Engine Type{" "}
                <strong>AL6DTIDG2</strong> ELECTRIC START, 6 Cylinder, 155 BHP,
                1500 rpm Engine Coupled to{" "}
                <strong>LEYROY SOMER / CROMPTON GREAVES</strong> Make 125 kVA
                100 KW, 3 Phase, 50Hz, 4 Wire, 4 Pole - Brushless Alternator
                supplied along with <strong>SEDEMAC Digital Controller,</strong>{" "}
                Acoustic enclosure, Standard control panel, diesel tank, inbuilt
                AVM Pads & Battery with leads.
                <p>
                  <strong>Dimensions (LXWXH):</strong> 3300 X 1250 X 1565 in mm
                  (Silencer Outside)
                </p>
                <p>
                  <strong>Weight:</strong> 1874 KG
                </p>
              </p>

              <div className="flex justify-between mt-4 text-right">
                <div></div>
                <div>
                  <p>
                    <strong>Basic Price:</strong> Rs. 6,80,000=00
                  </p>
                  <p>
                    <strong>Add GST@18%:</strong> Rs. 1,22,400=00
                  </p>
                  <p>
                    <strong>Total Value:</strong> Rs. 8,02,400=00
                  </p>
                </div>
              </div>
            </div>

            <p className="text-left text-2xl text-red-500 italic mt-4 pb-20">
              <strong>Transportation from factory, Extra at Actuals:</strong>{" "}
              Approx. Rs. 5,000 - 7,000
            </p>
          </div>
        </div>
      </div>
      <br />
      {/* Page 2 */}
      <div className="w-210 h-297 border border-solid border-black">
        <div className="flex flex-col items-center space-y-4">
          <div>
            <h1 className="text-left pt-6 pb-10 italic text-4xl font-bold underline">
              VOLVO-EICHER Make:
            </h1>
            <div className="border border-black p-4 max-w-5xl">
              <p className="text-left text-lg italic">
                <strong>VE125:</strong>{" "}
                <strong className="text-blue-500">125 KVA </strong> Diesel
                Generating Set comprising Liquid Cooled Engine Type{" "}
                <strong>AL6DTIDG2</strong> ELECTRIC START, 6 Cylinder, 155 BHP,
                1500 rpm Engine Coupled to{" "}
                <strong>LEYROY SOMER / CROMPTON GREAVES</strong> Make 125 kVA
                100 KW, 3 Phase, 50Hz, 4 Wire, 4 Pole - Brushless Alternator
                supplied along with <strong>SEDEMAC Digital Controller,</strong>{" "}
                Acoustic enclosure, Standard control panel, diesel tank, inbuilt
                AVM Pads & Battery with leads.
                <p>
                  <strong>Dimensions (LXWXH):</strong> 3300 X 1250 X 1565 in mm
                  (Silencer Outside)
                </p>
                <p>
                  <strong>Weight:</strong> 1874 KG
                </p>
              </p>

              <div className="flex justify-between mt-4 text-right">
                <div></div>
                <div>
                  <p>
                    <strong>Basic Price:</strong> Rs. 6,80,000=00
                  </p>
                  <p>
                    <strong>Add GST@18%:</strong> Rs. 1,22,400=00
                  </p>
                  <p>
                    <strong>Total Value:</strong> Rs. 8,02,400=00
                  </p>
                </div>
              </div>
            </div>

            <p className="text-left text-2xl text-red-500 italic mt-4 pb-20">
              <strong>Transportation from factory, Extra at Actuals:</strong>{" "}
              Approx. Rs. 5,000 - 7,000
            </p>

            <div>
              <h1 className="text-left pt-6 italic text-2xl font-bold underline">
                Note:
              </h1>
              <div className="border border-black p-4 max-w-5xl text-left pl-11">
                <ul className="list-disc list-outside">
                  <li>
                    The acoustic DG set comes with Factory Tested- Ready to use
                    (RTU) condition and is supplied with built in Standard
                    control panel. Hence no separate installation work needed.
                  </li>
                  <li>
                    However, the Cabling from control panel to change over
                    switch, or 4 earthing (for 3 Phase) does not include in the
                    above DG price.
                  </li>
                  <li>
                    Also, Civil Work, digging of earthing pit and additional
                    exhaust piping is not in our scope of work and supply and
                    has to be done at your site.
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-left">
              <h1 className="text-4xl font-bold underline mb-4 pt-8 text-center">
                ABOUT US
              </h1>
              <div className="border border-white p-4 max-w-5xl">
                <p>
                  Over the past{" "}
                  <strong className="text-red-500">40 years,</strong>{" "}
                  Progressive Traders has powered the lives and businesses of
                  thousands of people across Karnataka, Goa, and Maharashtra
                  with a wide range of Diesel generators ranging from{" "}
                  <strong className="text-blue-500">
                    3.5 kVA to 4600 kVA,
                  </strong>{" "}
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
                    <strong className="text-blue-500">
                      single point contact{" "}
                    </strong>{" "}
                    for SALES, SERVICE, WARRANTY, and SPARES for all KOHLER
                    POWER Products.
                  </li>
                  <li>
                    Unlike all other brands where the Service for your DG,s are
                    offered by third parties, we give the{" "}
                    <strong className="text-blue-500">Best & Priority </strong>
                    service for all our customers.
                  </li>
                  <li>
                    We are one of the{" "}
                    <strong className="text-blue-500">Oldest </strong> (40 +
                    Years) Generator dealer based in Belagavi.
                  </li>
                  <li>
                    We are the{" "}
                    <strong className="text-blue-500">most ethical </strong>{" "}
                    dealer in Belagavi.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Page 3 */}
      <div className="w-210 h-297 border border-solid border-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="ml-12">
            <h1 className="text-3xl font-bold underline mb-4 pt-8 text-center">
              OUR OFFER IS SUBJECT TO THE FOLLOWING TERMS & CONDITIONS:
            </h1>
            <div className="text-left m-3">
              <div className="flex text-black">
                {/* Left Section */}
                <div className="w-1/2 pr-4">
                  <p className="mb-2">Taxes</p>
                  <p className="mb-2">Supply</p>
                  <p className="mb-2">Delivery</p>
                  <p>Payment</p>
                </div>

                {/* Right Section */}
                <div className="w-1/2">
                  <p className="mb-2">: inclusive of GST@18% as mentioned</p>
                  <p className="mb-2">: 7 to 10 Days Time</p>
                  <p className="mb-2">
                    : Ex. Factory. (Transportation & unloading extra).
                  </p>
                  <div>
                    <p className="mb-2">
                      : 100% payment along with the order by RTGS to our
                    </p>
                    <p className="font-bold underline text-2xl mb-4">
                      Progressive Traders
                    </p>
                    <p className="font-bold">A/c. No. : 471505040000135</p>
                    <p>Union Bank of India, Kadolkar Galli, Belagavi.</p>
                    <p>IFSC: UBIN 0547158</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left m-3">
              <div className="flex text-black">
                {/* Left Section */}
                <div className="w-1/2 pr-4">
                  <p className="mb-2">Validity</p>
                  <p className="mb-2">DG Warranty </p>
                </div>

                {/* Right Section */}
                <div className="w-1/2">
                  <p className="mb-2">
                    : 07 days & is subject to our confirmation their after.
                  </p>
                  <p className="mb-2">
                    : 24 Months as per standard terms of the manufacturer.
                  </p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <p className="ml-10 text-left text-lg pt-4">
                We trust our offer is in line with your requirement and we await
                receipt of your valued order, which will receive our careful
                attention & prompt action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
