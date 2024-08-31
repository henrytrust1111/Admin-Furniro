import Routers from "./Router/Routers";
import "./assets/css/animate.min.css";
// import '../public/assets/css/tailwind-built.css'
import "./assets/css/tailwind-built.css";
import "swiper/css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routers />
    </>
  );
}

export default App;
