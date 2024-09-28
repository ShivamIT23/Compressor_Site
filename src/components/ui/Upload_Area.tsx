
export default function Upload_Area() {
  return (
    <div className="h-full w-full min-h-fit flex justify-center pt-10">
      <div className="h-5/6 w-5/6 min-h-fit bg-[#EFE5E5] rounded-[35px] flex justify-center pt-16">
        <div className="h-4/6 w-5/6 min-h-fit flex flex-col justify-center text-center bg-[#D9D9D9]">
          <div style={{
              fontVariationSettings: "'slnt' -7",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
            }} className="h-2/6 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#514D4D]">
            Upload File Here
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
