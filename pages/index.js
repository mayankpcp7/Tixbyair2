import Header from "@/components/common/Header";
import Service from "@/components/common/Service";
import FaqSec from "@/components/FaqSec";
import Footer from "@/components/Footer";
import Brand from "@/components/common/Brand";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Header />

        <FaqSec />
        {/* <Brand/> */}
        <Service/>
        <Footer />
      </div>
    </>
  );
}
