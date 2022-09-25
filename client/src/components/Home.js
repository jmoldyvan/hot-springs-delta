import React from "react";
import MainCarousel from "./homeComponents/MainCarousel"
import HSNear from "./homeComponents/HSNear"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from './Loading'
import {Link} from "react-router-dom"


export default function Home (props) {
	


  // console.log(hotSpringDataObject);
    return(
	<div>

	<Navbar
		allHotSpringData={props.classNameallHotSpringData}
	/>
	<div className="container">
			<div className="row text-center intro">
				<div className="col-md-12">
				<div className="titleborder">
						<div>
						</div>
					</div>
					<h1>Welcome to <span className="primarycolor">West Coast Hot Springs</span></h1>
					<p className="featured lead bottom10"><br/>
						Information of hot springs locations in the Pacific Northwest for your next refreashing getaway.
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
			<div className="row top25">
				<div className="panel1">
					<div className="col-md-9">
						<h4 className="top0">Click Here To View Our Interactive Map</h4>
					</div>
					<div className="col-md-3 text-center top15">
						<Link to={'/'} className="btn btn-primary btn-large">
						<i className="icon icon-download-alt"></i> TO MAP </Link>
					</div>
					<div className="clearfix">
					</div>
				</div>
			</div>
			<div className="titleborder">
						<div>
						</div>
					</div>

			<HSNear 
				fiveCloseHS = {props.fiveCloseHS}
			/>
			
		
			<div className="row graysection">
				<div className="col-md-3">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
							<i className="fontawesome-icon medium circle-white center icon-cogs"></i>
						</div>
						<h4>Sign Up/Log In</h4>
						<p>
							Lorem ipsum dolor sit adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus.
						</p>
						<p>
							<Link to={'/Signup'} className="btn btn-primary btn-large"> Signup → </Link></p>
							<p><Link to={'/Login'} className="btn btn-primary btn-large"> Login → </Link></p>
						
					</div>
				</div>
				{/* <!--/col-md-3--> */}
				<div className="col-md-3">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
							<i className="fontawesome-icon medium circle-white center icon-pencil"></i>
						</div>
						{/* <!--icon box top --> */}
						<h4>View Map</h4>
						<p>
							Lorem ipsum dolor sit adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus.
						</p>
						<p>
							<Link to={'/'} >Read more →</Link>
						</p>
					</div>
					{/* <!--grey box --> */}
				</div>
				{/* <!--/col-md-3--> */}
				<div className="col-md-3">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
							<i className="fontawesome-icon medium circle-white center icon-magic"></i>
						</div>
						{/* <!--icon box top --> */}
						<h4>Contact</h4>
						<p>
							Lorem ipsum dolor sit adipiscing elit. Praesent tempus eleifend risus ut congue eset nec lacus.
						</p>
						<p>
							<Link to={'/'} >Read more →</Link>
						</p>
					</div>
					{/* <!--grey box --> */}
				</div>
			</div>
			
			
	</div>
		<Footer /> 
	</div>
    )
}