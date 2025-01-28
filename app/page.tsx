import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Featured />
      <Footer />
    </div>
  );
}
