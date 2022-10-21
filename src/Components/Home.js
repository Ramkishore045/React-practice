import React from "react"; 
import Logo from "../Images/logo192.png"
   
function Home(){
    //js
    return (
        <div className="bg-primary">
          <div>
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div>
            <h1>Hello team react batch number 8</h1>
          </div>
        </div>
      );
}
export default Home
