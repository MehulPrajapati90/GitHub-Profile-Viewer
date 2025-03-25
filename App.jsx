import React from "react";
import ReactDom from "react-dom/client";
import { useCallback, useEffect, useState } from "react";

export default function App(){

    const [Profile, setProfile] = useState([]);
    const [numberProfile, setnumbeProfile] = useState("");

    async function generate(val){
        const rand = Math.floor(Math.random()*10000);
        const api = await fetch(`https://api.github.com/users?since=${rand}&per_page=${val}`);
        const data = await api.json();

        if(val !== 0){
            setProfile(data);
        }
    }

    useEffect(()=>{
        generate(0);
    }, [])

    return(
        <div className="app">
        <div className="app-main">
            <div className="inp">
            <input style={{color : "black"}} type="text" value={numberProfile} placeholder="Write Number of Profile."  onChange={(e)=>{setnumbeProfile(e.target.value)}}/>
            <button onClick={()=>{
                if(Number(numberProfile) === 0){
                    alert("No Such Profile with id : '0'.")
                }else{
                    generate(Number(numberProfile))}
                    // setnumbeProfile("Number of Profile.");
                }  
                }>Get.</button>
            </div>
           
          <div className="profile">
            {
                Profile.map((value)=>{
                    return(
                        <div key = {value.id} className="cards">
                            <img height={200} width={200} src={value.avatar_url} alt="Oops"/>
                            <h2>{value.login}.</h2>
                            <a href={value.html_url} target="_blank">Profile.</a>
                        </div>
                    )
                })
            }
          </div>
          </div>
          </div>
    )
}