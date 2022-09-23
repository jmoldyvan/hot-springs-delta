import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Footer () {
    return(
        <div>
	<div className="footer footerdark">
		<div className="text-center wraptotop">
            {/* needs link to top? */}
			<Link  to={'/'} className="totop"><i className="icon-home 2x"></i></Link >
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<h1 className="title"><i className="icon-heart"></i></h1>
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
				<div className="col-md-4">
					<h1 className="title">Questions?</h1>
					<div className="done">
						<div className="alert alert-success">
							<button type="button" className="close" data-dismiss="alert">×</button>
							Your message has been sent. Thank you!
						</div>
					</div>
					<form method="post" action="contact.php" id="contactform">
						<div className="form">
							<div className="controls controls-row">
								<input className="col-md-6" type="text" name="name" placeholder="Name"/>
								<input className="col-md-6" type="text" name="email" placeholder="E-mail"/>
							</div>
							<div className="controls">
								<textarea className="col-md-12" name="comment" rows="4" placeholder="Message"></textarea>
							</div>
							<input type="submit" id="submit" className="btn" value="Send"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div className="footerbottom footerbottomdark">
		<div className="container">
			<div className="row">
				{/* <!-- left --> */}
				<div className="col-md-4 smallspacetop">
					<p className="smaller">
						
					</p>
				</div>
				{/* <!-- right --> */}
				<div className="col-md-8 smallspacetop">
					<div className="pull-right smaller">
						<ul className="footermenu">
									<li><Link to={'/'}>Home</Link></li>
									<li><Link to ='/gallery'>Gallery
									</Link></li>	
									<li><Link to={'#'}>Elements</Link></li>
									<li><Link to={'#'}>Elements</Link></li>
									<li><Link to={'#'}>Elements</Link></li>
						</ul>
					</div>
					<div className="clearfix">
					</div>
				</div>
				{/* <!-- end right --> */}
			</div>
		</div>
	</div>
    </div>
    )
}