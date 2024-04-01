import { useState } from "react"
import Alertmessage from "../../Components/Alertmessage";
import axios from "axios";
import './Register.css'
import { useNavigate } from "react-router-dom";

const Register=()=>{
    const navigate = useNavigate();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [mobile,setMobile]=useState();
    const [gender,setGender]=useState();
    const [password,setPassword]=useState();
    // const [rememberme,setRememberme]=useState();
    const [message,setMessage] = useState();
    const [messageType, setMessageType] = useState(null);
    const userLogin= async ()=>{
        setMessage("Loading...")
        setMessageType('info')
        try {
            const response = await axios.post("https://theslugproject.onrender.com/register",{
                name: name,
                email: email,
                mobile: mobile,
                gender:gender,
                password: password,
            },{
                withCredentials: true
            })
            console.log(response);
            if (response.status==200){
                console.log(response);
                setMessage("User Registered Successfully")
                setMessageType("success")
                setTimeout(() => {
                    navigate("/login");
                }, 3500);
            }else{
                
                setMessage("Error Occured while registering User.")
                setMessageType("warning")
            }
        } catch (error) {
            setMessage(error.message)
            setMessageType("error")
        }
    }
// Prevent the default form submission behavior
function handleSubmit(e) {
    e.preventDefault(); 
  }

    return(
        <>
        <Alertmessage message={message} type={messageType} />
        <div className="background w-full h-screen flex flex-row ">
            <div className="flex w-full sm:w-1/2 h-full items-center justify-center ">
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3 w-9/12 px-10 py-5 text-[#edf2f4] text-xl">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} className="inputfield" type="text"placeholder="User Name" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className="inputfield" type="text" placeholder="user@slug.com"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="mobile">Contact Number</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} className="inputfield" type="number" placeholder="877000087"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="gender">Gender</label>
                    <select onChange={(e)=>{setGender(e.target.value)}} className="inputfield" id="Gender" name="Gender">
                        <option className="inputfield text-[#6c757d]" >Gender</option>
                        <option className="inputfield" value="male">Male</option>
                        <option className="inputfield" value="female">Female</option>
                        <option className="inputfield" value="other">Other</option>
                    </select>
                    </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password">Password</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} className="inputfield" type="password" placeholder="******" />
                        </div>
                    <button onClick={userLogin} className="px-4 py-2 bg-[#343a40] rounded mt-5">Sign Up</button>
                    <div className="flex flex-row gap-1 text-base">
                        <p>Already a User ?</p> <button onClick={()=>{navigate('/login')}} >sign in</button>
                    </div>
                </form>

            </div>
            <div className="hidden sm:flex sm:w-1/2 justify-center items-center text-[#C9CED6]">
                    
  <svg className="img" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39" xmlnsXlink="http://www.w3.org/1999/xlink">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
  <g id="_1421394342400">
   <g>
    <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"></polygon>
    <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"></polygon>
    <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"></polygon>
    <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89"></polygon>
    <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33"></polygon>
    <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33"></polygon>
   </g>
  </g>
 </g>
</svg>
  


            </div>
        </div>
        
        </>
    )
}
 export default Register