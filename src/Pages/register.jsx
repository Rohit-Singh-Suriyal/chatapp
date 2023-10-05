import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Add from "../image/png.png"

const Register = () => {
  const [err, setErr] = useState(false);
 


  const submithandler= async (e) => {

 
    e.preventDefault();
    console.log("start");
    const displayName = e.target[0].value;
    console.log(displayName);
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(file);
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });

      //Create user
      console.log("jack");
      try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      //Create a unique image name
     
      const storageRef = ref(storage, 'images/rivers.jpg');
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log(uploadTask);
      console.log("one");

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on( 
 console.log("raftaar"),
  (error) => {
    console.log(error)
    setErr(true);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    console.log("yes");
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
         console.log(downloadURL);
    });
  }
);

      }catch(error){
            setErr(false);
      } 
      
      
  }
  return (
    <>
   <div className="form-container">
    <div className="form-wrapper">
        <span className='logo'>Lama Chat</span>
        <span className='title chat'>Register</span>
        <form onSubmit={submithandler}>
            <input type='text' placeholder='display name'/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
           
            <input style={{display:"none"}} type="file" id="file"/>
            <label htmlFor='file'>
              <img src={Add}></img>
              <span>Add an Avatar</span>
            </label>
           
            <button>Sign Up</button>
        </form>
        <p>You do have a account LOGIN</p>
    </div>
   </div>
    </>
  )
}

export default Register;
