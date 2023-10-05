import Sidebar from "../components/sidebar";
import Chat from "../components/Chat";
function Home() {
  
  return (
    <>
 <div className="home">
     <div className="container">
        <Sidebar/>
         <Chat/>
     </div>
 </div>
   
 
       
    </>
  )
}

export default Home;
