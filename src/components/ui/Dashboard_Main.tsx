import Image from "next/image";
import image from "../../public/Image.png";
import pdf from "../../public/pdf.png";
import excel from "../../public/excel.png";
import text from "../../public/text.png";

export default function Dashboard_Main() {
  return (
    <div className="h-full min-h-fit">
      <div className="h-2/6 flex flex-col justify-center text-center text-[#FC6969] font-semibold text-3xl sm:text-4xl md:text-5xl min-h-fit">
        One Of The Best Available Compressor Tools In the Market..<br /> Over 50K Good
        Feedback From Our Users.
      </div>
      <div className="h-4/6 px-2 md:px-24 pt-6 grid grid-cols-12 min-h-fit">
        <div className="flex justify-start w-full col-span-full md:col-span-6 p-10">
          <Image
            src={image}
            alt="Image File"
            width={80}
            height={80}
            className="w-1/6 p-1 xl:p-10"
          />
          <div
            style={{
              fontVariationSettings: "'slnt' -7",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-[#971313] italic underline leading-[29px] pl-10 flex flex-col justify-center text-2xl"
          >
            We Can Compress Your Image File
          </div>
        </div>
        <div className="flex justify-start  w-full col-span-full md:col-span-6 p-10">
          <Image
            src={pdf}
            alt="Image File"
            width={80}
            height={80}
            className="w-1/6 p-1 xl:p-10"
          />
          <div
            style={{
              fontVariationSettings: "'slnt' -7",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-[#971313] italic underline leading-[29px] pl-10 flex flex-col justify-center text-2xl"
          >
            We Can Compress Your PDF File
          </div>
        </div>
        <div className="flex justify-start  w-full col-span-full md:col-span-6 p-10">
          <Image
            src={excel}
            alt="Image File"
            width={80}
            height={80}
            className="w-1/6 p-1 xl:p-10"
          />
          <div
            style={{
              fontVariationSettings: "'slnt' -7",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-[#971313] italic underline leading-[29px] pl-10 flex flex-col justify-center text-2xl"
          >
            We Can Compress Your Excel/CSV File
          </div>
        </div>
        <div className="flex justify-start  w-full col-span-full md:col-span-6 p-10">
          <Image
            src={text}
            alt="Image File"
            width={80}
            height={80}
            className="w-1/6 p-1 xl:p-10"
          />
          <div
            style={{
              fontVariationSettings: "'slnt' -7",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-[#971313] italic underline leading-[29px] pl-10 flex flex-col justify-center text-2xl"
          >
            We Can Compress Your Text File
          </div>
        </div>
      </div>
    </div>
  );
}
