import {MdOutlineAddAPhoto} from "react-icons/md"
import {GrAttachment} from "react-icons/gr"
function Input(){
  return(
   <>
   <div className="input"> 
    <input type="text" placeholder="Type Something "/>
    <div className="send">
     <GrAttachment className="icon"/>
     <input type="file" style={{display:"none"}} id="file"/>
     <label htmlFor="file"></label>
     <MdOutlineAddAPhoto className="icon"/>
     <button>Send</button>
    </div>
   </div>
   
   
   
   </>
  




  )



}
export default Input;