import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Footer () {
    return(
        <div>
	<div className="footer footerdark">
		<div className="text-center wraptotop">
			<Link  to={'/'} className="totop"><i className="icon-home 2x"></i></Link >
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-4">
							<ul className="social-icons list-soc">
							<li><a href='https://twitter.com/JordanMoldovan'><i className="icon-twitter"></i></a></li>
							<li><a href='https://www.linkedin.com/in/jordan-moldovan/'><i className="icon-linkedin"></i></a></li>
							<li><a href='https://github.com/jmoldyvan'><i class="icon-github"></i></a></li>
							<li><a href={'https://jordan-moldovan.netlify.app/'}><i className="icon-male"></i></a></li>
							</ul>
					<p>
						 This site was built, designed, and is maintained by a single developer.
					</p>
					<p>
						To find out more click <a href="https://jordan-moldovan.netlify.app/">HERE</a>
					</p>
					<p className="footerlogo">
						 West Coast Hot Springs
					</p>
				</div>
				<div className="col-md-4">
					<h1 className="title"></h1>
				</div>
			</div>
		</div>
	</div>

	<div className="footerbottom footerbottomdark">
		<div className="container">
			<div className="row">
				<div className="col-md-4 smallspacetop">
					<p className="smaller">
						
					</p>
				</div>
				<div className="col-md-8 smallspacetop">
					<div className="pull-right smaller">
						<ul className="footermenu">
									<li><Link to={'/'}>Home</Link></li>
									<li><Link to ='/gallery'>Gallery
									</Link></li>	
									<li><Link to={'/contact'}>Contact</Link></li>
						</ul>
					</div>
					<div className="clearfix">
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    )
}