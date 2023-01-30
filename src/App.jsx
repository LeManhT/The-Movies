import { ToastContainer } from "react-toastify";
import RouterPage from "./routers/RouterPage";
import Loading from "./components/ui/loading/Loading"
import "./App.scss";

function App() {
  return (
    <>
      <RouterPage />
      <ToastContainer />
      <Loading />
    </>
  );
}

export default App;
