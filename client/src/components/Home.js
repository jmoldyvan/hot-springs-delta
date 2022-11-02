import React from "react";
import MainCarousel from "./homeComponents/MainCarousel"
import HSNear from "./homeComponents/HSNear"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom"


export default function Home (props) {
	
    return(
	<div>

	<Navbar
		currUser={props.currUser}
		allHotSpringData={props.allHotSpringData}
	/>
	<div className="container mt-5">
			<div className="row text-center intro">
				<div className="col-md-12">
				<div className="titleborder">
						<div>
						</div>
					</div>
					<h1>Welcome to <span className="primarycolor">West Coast Hot Springs</span></h1>
					<p className="featured lead bottom10"><br/>
						Information of hot springs locations in the Pacific Northwest for your next refreshing getaway.
					</p>
					<div className="titleborder">
						<div>
						</div>
					</div>
				</div>
			</div>
			<MainCarousel
				hotSpringDataObject = {props.hotSpringDataObject}
			/>	
			
	<div className="titleborder">
						<div>
						</div>
					</div>
			<div className="titleborder">
						<div>
						</div>
					</div>
			
			<HSNear allHotSpringData ={props.allHotSpringData}/> 
			
			
			
		
			<div className="row graysection">
				<div className="col-md-4 my-4">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
							<i className="fontawesome-icon medium circle-white center icon-user"></i>
						</div>
						<h4>Sign Up/Log In</h4>
						<p>
							Create an account to leave reviews and like hot spring locations. Track your liked hot springs for on your profile page!
						</p>
						<p>
							<Link to={'/Signup'} id='homesignupbutton' className=" homesignupbutton btn btn-primary btn-large "> Signup → </Link>
							<Link to={'/Login'} id='homeloginbutton' className="homeloginbutton btn btn-primary btn-large"> Login → </Link></p>
					</div>
				</div>
				<div className="col-md-4 my-4">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
							<i className="fontawesome-icon medium circle-white center icon-envelope"></i>
						</div>
						<h4>Contact</h4>
						<p>
							Send over new hot spring reccomendations or updates on any information. A real human is on the other end.
						</p>
						<p>
						<p><Link to={'/contact'} className="btn btn-primary btn-large"> Contact → </Link></p>
						</p>
					</div>
				</div>
			</div>
	</div>
		<Footer /> 
	</div>
    )
}