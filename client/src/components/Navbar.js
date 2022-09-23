import React from "react";
import { Link } from "react-router-dom";

// NOTES
// on specific media quesry style out a state that adds a hamburger menu
// will need onclick event to open and close hamburger for list of nav items



export default function Navbar (props) {


    return(
		<header>
			<div className="container clearfix">
				<div className="row">
					<div className="col-md-12">
						<h1 className="brandlogo">
								<p className="footerlogo">
								West Coast Hot Springs
								</p>
							</h1>
						<div className="topinfo">
							<ul className="social-icons list-soc">
							<li><a href='https://twitter.com/JordanMoldovan' target="_blank"><i className="icon-twitter"></i></a></li>
							<li><a href='https://www.linkedin.com/in/jordan-moldovan/'><i className="icon-linkedin"></i></a></li>
							<li><a href='https://github.com/jmoldyvan'><i className="icon-google-plus"></i></a></li>
							<li><a href={'https://jordan-moldovan.netlify.app/'}><i className=""></i></a></li>
							</ul>
						</div>
						<div className="clearfix">
						</div>
						<div className="row-nav navbar">
							<div className="navbar-inner">
								<ul id="nav" className="nav">
									<li className="active selected"><Link to={'/'}>Home</Link></li>
									{/* <li className="divider-vertical"></li> */}
									<li><Link to ='/gallery'>Gallery
									</Link></li>
									<li><Link to={'#'}>Map</Link></li>
									<li><Link to='/profile'>Profile</Link></li>
									<li><Link to={'#'}>Contact</Link></li>
									<li><Link to={'#'}>Elements</Link></li>
								</ul>
								<form id="search" action="#" method="GET">							
										<input type="text" 
										// onfocus="if(this.value =='Search here...' ) this.value=''" onblur="if(this.value=='') this.value='Search here...'" 
										placeholder="Search here..." 
										name="s"/>
										<Link to={'#'}></Link>							
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			</header>
        )
}