import CustomersSection from "../components/home/CustomersSection";
import HomeOpen from "../components/home/HomeOpen";
import HowItsWork from "../components/home/HowItsWork";
import SectionInfo from "../components/home/SectionInfo";
import UploadVideo from "../components/home/UploadVideo";
import "../css/home.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
<HomeOpen/>
<HowItsWork/>
<UploadVideo/>
<SectionInfo/>
<CustomersSection/>
 
    </div>
  );
}

export default HomeScreen;