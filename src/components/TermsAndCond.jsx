import React from 'react'

function TermsAndCond() {
  return (
    <>
    <div className="border border-black" style={{height:"95vh"}}>
            <h1 className="text-2xl font-bold underline mb-4 text-center pt-8">
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
                    <p className="font-bold underline text-xl mb-4">
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
    </>
  )
}

export default TermsAndCond