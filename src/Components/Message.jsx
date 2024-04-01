import { useNavigate } from "react-router-dom";

const Message=({userstate})=>{
    const navigate =useNavigate();
    return(
        <>
        {
          userstate===true ? null:(
          <div className=" flex items-center justify-center absolute h-16 backdrop-blur-[2px] w-9/12 bg-[#18182744] bottom-0"> 
          <div className="flex flex-row gap-2">
            <button onClick={navigate('/Signup')}  className="text-[#144EE3]">Register Now </button>
            <p className="text-[#C9CED6]"> to enjoy Unlimited History</p>
          </div>
        </div>)
        }
        </>
    )
}
export default Message