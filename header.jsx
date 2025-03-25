import React from "react";
import ReactDom from "react-dom/client"


export default function Header(){
    return(
        <>
           <div className="head">
             <h1>Github Profiles.</h1>
             <div className="head-lower">
                <h3>Login</h3>
                <h3>SignUp</h3>
             </div>
           </div>
           <div className="section-1">
            <h1>View Github Profile.</h1>
            <p>Making Viewing Profile Easier.</p>
           </div>
        </>
    )
}