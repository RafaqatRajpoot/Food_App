import Menu from "@/components/menu";
import LandingPage from "@/components/LandingPage";
import Chef from "@/components/Chef";
import Booking from "@/components/Booking";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <LandingPage />
      <Menu />
      <Booking />
      <Customers />
      <Chef />
      <Contact />
      <Footer />
    </>

  )
}
