export default function Appbar() {
  return (
    <div className="h-16 w-full grid grid-cols-12 font-semibold bg-[#E4DDDD]">
      <div className="pl-6 text-3xl col-span-6 lg:col-span-8 flex flex-col justify-center items-start">
        <div>Compressor0.1</div>
      </div>
      <div className="text-xl col-span-6 lg:col-span-4 flex justify-around items-center relative">
        <button className="hidden hover:underline hover:font-bold sm:flex flex-col justify-center ">Pricing</button>
        <button className="hidden hover:underline hover:font-bold sm:flex flex-col justify-center ">Support</button>
        <button className="hidden hover:underline hover:font-bold sm:flex flex-col justify-center ">Register</button>
        <button className="hidden hover:underline hover:font-bold sm:flex flex-col justify-center ">Signin</button>
        <button className="block sm:hidden absolute right-4">
          {" "}
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="14px"
            height="14px"
            viewBox="0 0 24.75 24.75"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
              />
            </g>
          </svg>{" "}
        </button>
      </div>
    </div>
  );
}
