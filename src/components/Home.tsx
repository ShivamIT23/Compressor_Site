import Appbar from "./ui/Appbar";
import Footer from "./ui/Footer";
import Home_Main from "./ui/Home_Main";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#D9D9D9]">
        <div className="h-1/6 w-full">
            <Appbar />
        </div>
        <div className="h-4/6">
          <Home_Main />
        </div>
        <div className="h-1/6 relative w-full">
          <Footer />
        </div>
    </div>
  )
}
