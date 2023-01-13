
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//to make notification to any component
 const notify = (msg, type) => {
     if(type === "warm")
         toast.error(msg);
     else if(type === "sucess")
         toast.success(msg)
     else if(type === "error")
         toast.error(msg)
 } 

 export default notify