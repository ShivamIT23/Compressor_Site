// import Size from "./Size";

export default function Upload_Area({onClick}) {
  return (
    <div className="h-full w-full min-h-fit flex justify-center pt-10">
      <div className="h-5/6 w-5/6 min-h-fit bg-[#EFE5E5] rounded-[35px] flex flex-col items-center pt-16">
        <div className="h-4/6 w-5/6 min-h-fit flex flex-col justify-center text-center bg-[#D9D9D9] rounded-[20px]" onClick={onClick}>
          <div
            style={{
              fontVariationSettings: "'slnt' -7",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
            }}
            className="h-2/6 w-full text-2xl sm:text-3xl flex flex-col justify-end lg:text-4xl font-bold text-[#514D4D]"
          >
            Upload File Here
          </div>
          <div className="text-9xl w-full text-[#3a3737] font-light flex flex-col justify-start text-center">
            &#43;
          </div>
        </div>

        <div className="h-2/6 w-5/6 mt-6 min-h-fit grid grid-cols-12">
          <div className="col-span-8">
            {/* <Size /> */}
          </div>
          <div className="col-span-4 flex flex-col justify-center text-3xl bg-green-500 m-10 font-semibold">
              <button>Download Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
          
          



