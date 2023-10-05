import react from "react"
function Message(){
  return(
    <>
    <div className="message owner">
       <div className="messageinfo">
        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"></img>
        <span>just Now</span>
       </div>
       <div className="messagecontent">
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"></img>
       </div>
    </div> 
    </>
  )


}
export default Message;