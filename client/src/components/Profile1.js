import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Profile1 (props) {
	
	let style ={
		margin:'10px'
	}
    return(

    <div>
        <Navbar currUser={props.currUser} allHotSpringData={props.allHotSpringData}/>
        <div className="container mt-5" >
		<div className="row">
			<div className="col-md-8 span-fixed-sidebar">
				<div className="hero-unit">
					<h1>Log In or Sign Up To Access Profile</h1>
					
					<p>
						<img src="https://res.cloudinary.com/djp4vd3uw/image/upload/v1663206333/hot-spring-imgs/agua-caliente/AguaCaliente1_cum4pe.jpg" className="pull-left paddingright" alt="" style={style}/> 
					</p>
					<p>
						<a className="btn btn-primary btn-large"></a>
					</p>
				</div>
				<div className="row">
				<div className="col-md-6">
						<div className="boxblog">
							<h5>This Is Where Your Recent Reviews Will Go</h5>
							<p className="small datepost">
							</p>
							<div className="innerblogboxtwo">
								<p>
									<img width="150" height="150" src="https://res.cloudinary.com/djp4vd3uw/image/upload/v1664342881/hot-spring-imgs/Cougar%20Hot%20Springs%20Terwilliger%20Hot%20Springs/Terwilliger_Hot_Springs_2016-04-04_jmm79i.jpg" className="attachment-thumbnail" alt=""/> 
									Your Review Description
								</p>
							</div>
							<p className="continueread readmorebox">
							Click Here To Visit Hot Spring
							</p>
						</div>
					</div>
				</div>		
			</div>
			
			<div className=" col-md-4">
				<ul id="myTab" className="nav nav-tabs">
					<li className="active"><a href="#home" data-toggle="tab">Your Saved Locations</a></li>
				</ul>
				<div id="myTabContent" className="tab-content multi-sidebar">
					<div className="tab-pane fade active in" id="home">
						<ul className="sidebar-latest">
							<li className="clearfix">
							<a href="#">Android 4.3 to hit Sony Xperia smartphones, tablet</a><br/>
							<small><a href="#"><span className="entry-date">July 25, 2013</span></a></small>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
        <Footer/>
    </div>
    )
}