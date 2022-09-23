import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccordionInfo from "./IndSpringDetailcomponents/AccordionInfo";
import SpringCarousel from "./IndSpringDetailcomponents/SpringCarousel";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function IndSpringDetail (props) {
    
    let currentHotSpringSite;
    const id = useParams();
    console.log(typeof id.id);
    console.log(props.allHotSpringData);
    props.allHotSpringData.forEach(e => {
        if(e._id === id.id){
            currentHotSpringSite = e
        }
    });
    console.log(currentHotSpringSite);

    return(
        
    <div>
        <Navbar/>
        <div className="container">
		<div className="page-header">
        <div className="headerdivider">
			</div>
            
			<h1>{currentHotSpringSite.name}</h1>
			<div className="headerdivider">
			</div>
		</div>
		<div className="row">
			<div className="col-md-6">
				<p>
					<b>State</b> : {currentHotSpringSite.state} | <b>Area</b> : {currentHotSpringSite.area} | <b>Day Use Fee</b> : {currentHotSpringSite.dayUseFee}<br/>
					<b>Resort</b> : {currentHotSpringSite.resort} | <b>Open Season</b> : {currentHotSpringSite.open}
				</p>
				<p>
                {currentHotSpringSite.description}
				</p>
                      
                {/* <ul className="icons-ul"> */}
				    <AccordionInfo currentHotSpringSite={currentHotSpringSite}/>    
				{/* </ul> */}
				<br/>

			</div>
			{/* <!-- end description area --> */}
			{/* <!-- begin slider area --> */}

            <SpringCarousel currentHotSpringSite={currentHotSpringSite}/>
		</div>
	</div>
        <Footer/>
    </div>
    )
}