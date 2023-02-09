import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import "./App.scss";

function App() {
  return (
    <>
      <RouterPage />
      <ToastContainer />
    </>
  );
}
export default App;
