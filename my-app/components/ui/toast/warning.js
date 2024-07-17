import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Warning_Toast({ message }) {
  toast.warn(`${message}`, {
    position: "bottom-right",
  });

  return <ToastContainer />;
}

export default Warning_Toast;
