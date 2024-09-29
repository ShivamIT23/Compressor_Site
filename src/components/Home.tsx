import Appbar from "./ui/Appbar";
import Footer from "./ui/Footer";
import Home_Main from "./ui/Home_Main";

export default function Home() {
  return (
    <div className="h-screen min-w-fit bg-[#D9D9D9] min-h-fit overflow-hidden">
        <div className="h-1/6 w-full min-h-fit">
            <Appbar />
        </div>
        <div className="h-4/6 min-h-fit">
          <Home_Main />
        </div>
        <div className="h-1/6 relative w-full min-h-fit">
          <Footer />
        </div>
    </div>
  )
}
