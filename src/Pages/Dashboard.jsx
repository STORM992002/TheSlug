import { useEffect, useState } from "react";
import Cookies from 'cookies-js';
import axios from "axios";
import Listloader from "../Components/Loaders/Listloader";
import { IonIcon } from "@ionic/react";
import { linkOutline } from "ionicons/icons";
import Navbar from "../Components/Navbar";
import Alertmessage from "../Components/Alertmessage";
import History from "./History";


const Dashboard = () => {

  const [ip, setIp] = useState();
  const [link, setLink] = useState();
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState(null);



  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        Cookies.set("ip_address", response.data.ip, { 
          expires: 365, 
          path: '/', 
          sameSite: 'strict' // or 'lax' or 'none', depending on your requirements
      });
        console.log(response.data.ip);
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error); 
      });
  }, []);


  const shortLink = async ()=>{
    setMessageType('info');
    setMessage("Loading...");
  if (link) {
    try {
      const response = await axios.post('https://theslugproject.onrender.com/url_shorten',
       {
         redirectURL: link 
        },{
          withCredentials: true // this will add the XSRF token to the request header
        });
        if(response.status==200){
          setMessageType("success");
          setMessage("URL Shortened Successfully!");
        }
        else{
          setMessageType("error");
          setMessage("Error Occurred! Please Try Again.");
        }
    } catch (error) {
      setMessageType('error');
      setMessage(error);
    }
  }else{
    setMessageType('warning');
    setMessage("Please Enter a URL to Proceed.");
  }

}

// Prevent the default form submission behavior
function handleSubmit(e) {
e.preventDefault(); 
shortLink()
}
  return (
    <>
    <Alertmessage message={message} type={messageType} />
      <div
        className="w-full h-screen  bg-cover bg-center"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/theslugproject-bca3f.appspot.com/o/Frontend%2Fbadal.png?alt=media&token=7259fc0b-1846-4cae-ba8c-d249aecca6b9')" }}
      >
        <Navbar />
        <div className="flex flex-col  items-center w-full mt-40">
          <div className="w-full sm:w-4/5 md:w-2/4 flex flex-col items-center gap-10">
            <h1
              className="text-2xl md:text-5xl text-center font-bold bg-clip-text bg-cover text-transparent bg-center"
              style={{ backgroundImage: "url('src/assets/image/mesh.png')" }}
            >
              Shorten Your Loooong Links :)
            </h1>
            <p className="text-center  md:w-8/12 text-white text-lg">
              Slug is an efficient and easy-to-use URL shortening service that
              streamlines your online experience.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex w-full me-5 ms-5 sm:w-8/12 text-white items-center relative"
            >
              <input
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                className=" border-4 bg-[#353c4a5f] border-[#353C4A] rounded-full ps-10 py-3 w-full backdrop-blur  text-white placeholder:text-white placeholder:font-extralight focus:outline-none"
                type="url"
                placeholder="Enter the Link"
              />
              <IonIcon
                icon={linkOutline}
                className=" absolute start-3 text-2xl "
              />
              <button
                onClick={() => {
                  
                }}
                className="absolute rounded-full bg-blue-700 px-2 py-3 end-[1px] "
              >
                Shorten Now!
              </button>
            </form>
          </div>
            <div className=" h-56 overflow-hidden w-full flex justify-center">
             {
              ip?(
                <History reload={message}/>
              ):null
             }
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
