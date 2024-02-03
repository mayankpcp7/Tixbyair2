import Accordion from "@/components/Accordion";
import FaqSec from "@/components/FaqSec";
import Footer from "@/components/Footer";
import NavBar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        {/* <NavBar /> */}
        <FaqSec />
        <Footer />
      </div>
    </>
  );
}
