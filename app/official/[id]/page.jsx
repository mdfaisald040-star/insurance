"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/Footer/Footer";

export default function PdfPage() {
  const { id } = useParams();
  const [pdf, setPdf] = useState(null);

  const pdfList = [
     { id: "0", name: "PDF Two", file: "/simple.pdf" },
   { id: "1", name: "PDF Two", file: "/simple.pdf" },
    { id: "2", name: "PDF Two", file: "/AdmitCard_ACC_ALQJD94V.pdf" },
  ];

  useEffect(() => {
    const selectedPdf = pdfList.find((p) => p.id === id);
    setPdf(selectedPdf);
  }, [id]);

  return (
    <>
    <div className="bg-white">

   
<div className="xl:mx-[240px] lg:mx-[240px] md:mx-[50px] mx-[10px] my-[50px]">
<div className="text-center">
        <h2 className="bg-[linear-gradient(45deg,#e43a6c_25%,#faa82f_70%)] bg-clip-text text-transparent text-3xl font-bold">
  OUR CERTIFICATE OF INSURANCE
</h2>

      <div className="text-[#272727b4] my-4 text-[14px]">
        <p>Thank you for your purchase! Please verify your details in the Certificate of Insurance below and ensure that it is valid before your travel / cover dates.</p>
      </div>

<div className="text-[#252525]">
        <h2 className="font-bold">Any discrepancy should be brought to our attention before commencement of the trip and no claims will be accepted if the policy details are incorrect after departure.</h2>
</div>


</div>
 <div className="xl:mx-[140px] lg:mx-[140px] mx-[8px]">
      {pdf ? (
        <iframe
          src={pdf.file}
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
        />
      ) : (
        <p>PDF not found</p>
      )}
</div>

<div className="my-[100px]">
 <Image className="w-[50%] mx-auto"
      src="https://i.ibb.co/DHDyN7qr/footer-downloadapp-with-qr.png"
      alt="Download App QR"
      width={300}       // pixel value, adjust as needed
      height={300}      // pixel value, adjust as needed
    />
</div>


</div>


<div className="mx-[240px] my-6 ">

<h2 className="font-extrabold text-center text-[#2C2D31] text-[28px] my-6">Emergency Assistance</h2>



<div className="text-black grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">

<div className="text-center">
   <h2 className="text-[#E4170E] font-semibold my-4 ">Middle East</h2>
<h2 className="font-bold text-[#2c2c2c] text-[26px]">+9714 420 3920</h2>
<p className="italic text-[9px]">(English & Arabic)
US & Canada</p>
</div>

<div className="text-center">
   <h2 className="text-[#E4170E] font-semibold my-4">US & Canada</h2>
<h2 className="font-bold text-[#2c2c2c] text-[21px]">+178 6472 7700</h2>
<p className="italic text-[9px]">(English, French & Arabic)</p>
</div>

<div className="text-center">
   <h2 className="text-[#E4170E] font-semibold my-4">Europe/North Africa</h2>
<h2 className="font-bold text-[#2c2c2c] text-[21px]">+441 786 310 605</h2>
<p className="italic text-[9px]">(English, French & Arabic)</p>
</div>


<div className="text-center">
   <h2 className="text-[#E4170E] font-semibold my-4">Indian Subcontinent</h2>
<h2 className="font-bold text-[#2c2c2c] text-[21px]">+911 244 688 488 </h2>
<p className="italic text-[9px]">(English & Arabic)</p>
</div>








</div>



</div>


{/* section... */}




<div className="mx-[240px] my-[50px] text-[#ff0a12] grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-baseline">

  <div className="text-center">
<div>
    <h2 className="font-semibold my-6 text-[17px]">ID for general enquiries</h2>
</div>
<div>
    <p className="font-extrabold text-[20px]">enquiry.emeia@tuneprotect.com</p>
</div>
</div>

  <div className="text-center">
<div>
    <h2 className="font-semibold my-6 text-[17px]">For claims related enquiries</h2>
</div>
<div>
    <p className="font-extrabold text-[20px]">travelassurance@tuneprotect.com</p>
</div>
</div>



</div>

 </div>

<Footer></Footer>
    </>
  );
}
