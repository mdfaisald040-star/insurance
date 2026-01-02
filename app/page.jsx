"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const pdfList = [
    { id: 1, name: "PDF One", file: "/cv.pdf" },
    { id: 2, name: "PDF Two", file: "/AdmitCard_ACC_ALQJD94V.pdf" },
    { id: 0, name: "PDF Two", file: "/simple.pdf" }
  ];

  // ✅ page load হতেই প্রথম PDF দেখাবে
  useEffect(() => {
    setPdfUrl(pdfList[0]); // object set
  }, []);
const pdf = pdfList.find(data => data.id === 0);


  return (
    <>
      <h3>Insurance</h3>



      {pdf && (
        <div className="mx-[440px]">

          <iframe
          src={pdf.file}
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc", marginTop: "15px" }}
        />
        </div>
      )}



    </>
  );
}
