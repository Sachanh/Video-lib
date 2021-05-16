import React from 'react'
import "./landingPage.css"
import profit from "./Asset/crypto.mp4"
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/footer"
// import {Link} from "react-router-dom";

export default function LandingPage(){
    return(
        <>
        <Navbar/>
        <section className="landing">
            <video autoPlay loop muted>
                <source src={profit} type="video/mp4"/>
            </video>
        </section>
        <Footer/>
        </>
    )
}