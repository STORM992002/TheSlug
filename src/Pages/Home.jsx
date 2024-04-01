import Dashboard from "./Dashboard";
import Cookies from 'cookies-js';
import UserDashboard from "./UserDashboard";

const Home=()=>{
  const userToken = Cookies.get("token");
    return(
      <>
    <div className=" w-screen h-screen bg-[#0B101B]">
      {
        userToken ? (<UserDashboard/>)
        :
          <Dashboard/>
      }
       
    </div>
    
      </>
  )
}
export default Home ;