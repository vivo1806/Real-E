import { toast } from "react-toastify";
 
const onSubmit = async (event,message,setResult,sendingmessage) => {
  event.preventDefault();
   if(setResult)
  setResult(sendingmessage);
  const formData = new FormData(event.target);
  formData.delete("password");
   formData.append("access_key", process.env.REACT_APP_API_KEY);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    
       toast.success(message);
    event.target.reset();
   } else {
    console.log("Error", data);
          toast.error(data.message);
    
  }
    if (setResult) setResult("");
};
export default onSubmit;
