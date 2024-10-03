import Appbar from "./ui/Appbar";
import Dashboard_Main from "./ui/Dashboard_Main";
import FileGetter from "./ui/FileGetter";
import Footer from "./ui/Footer";
// import Upload_Area from "./ui/Upload_Area";

export default function Dashboard() {
  return (
    <div className="h-screen min-h-fit w-full bg-[#D9D9D9]">
        <div className="h-1/6 w-full min-h-fit">
            <Appbar />
        </div>
        <div className="h-4/6 min-h-fit">
          <Dashboard_Main />
        </div>
        <div className="h-5/6 min-h-fit">
            <FileGetter />
        </div>
        <div className="h-1/6 relative w-full min-h-fit">
          <Footer />
        </div>
    </div>
  )
}