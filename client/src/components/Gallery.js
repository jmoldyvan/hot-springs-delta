import React from "react";
import ByState from "./Gallerycomponents/ByState"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery (props) {
    return(
        
    <div>
        <Navbar currUser={props.currUser}/>
        <ByState
		allHotSpringData = {props.allHotSpringData}
		/>
        <Footer/>
    </div>
    )
}