import react from "react"
import {BsCameraFill} from "react-icons/bs"
import {BsPersonFillAdd} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import Messages from "./Messages"
import Input from "./Input"
function Chat(){
  return(
     <>
    
    <div className="chat">
      <div className="chatinfo">
           <span>
            Jane
           </span>
           <div className="chaticons">
                  <BsCameraFill/>
                  <BsPersonFillAdd/>
                  <AiOutlineMenu/>
           </div>
          
      </div>
      <Messages/>
      <Input/>
    
    </div>
    
    
    
    
    
    </>
 



  )


}
export default Chat;