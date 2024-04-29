import Navbar from "@/components/navbar";
import Hero from "../../components/officielSuite/hero";
import Companies from "@/components/officielSuite/companies";
import FeaturedApps from "@/components/officielSuite/featuredApps";
import Values from "@/components/officielSuite/values";
import AllInOneSuite from "@/components/officielSuite/allInOneSuite";
import Privacy from "@/components/officielSuite/privacy";
import Footer from "@/components/officielSuite/footer";
import Cta from "@/components/officielSuite/cta";
export default function Page() {
  return (
    <>
      <div className="mx-auto mt-12 flex w-[94%] flex-col gap-12 lg:w-[90%]">
        <Hero />
        <Companies />
      </div>
      <div className="gradient-violet-logo w-full">
        <AllInOneSuite />
      </div>
      <div className="w-full bg-[#1D1D1D]">
        <FeaturedApps />
      </div>
      <div className="w-full bg-[#F6F6F6] py-16">
        <Values />
      </div>
      <Privacy />
      <div className="gradient-violet-logo w-full py-16">
        <Cta />
      </div>
      <div className=" w-full bg-[#1D1D1D]">
        <Footer />
      </div>
    </>
  );
}
