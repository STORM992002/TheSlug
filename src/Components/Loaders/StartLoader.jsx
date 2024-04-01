import { motion } from "framer-motion"

const StartLoader=()=>{
    return(
        <>
        <div className="flex justify-center items-center">
        <motion.img
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:1}}
        className="w-56" src="../image/slugblack.png" alt="" />
        </div>
        </>
    )
}
export default StartLoader;