import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
