import Header from "@/components/common/Header";
import FaqSec from "@/components/FaqSec";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <FaqSec />
        <Footer />
      </div>
    </>
  );
}
