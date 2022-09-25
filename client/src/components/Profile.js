import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile (props) {
    return(
        
    <div>
        <Navbar/>
        <div className="container">
		<div className="row">
			<div className="col-md-8 span-fixed-sidebar">
				<div className="hero-unit">
					<h1>New Nexus 7 display may offer preview of iPad Mini to come</h1>
					<p>
						{/* <img src="img/demo/news.jpg" className="pull-left paddingright" alt="" style="margin-top:10px;"/> This is a template for the featured blog post or any other highlighted text you'd like to insert in your template. This page includes a main column with right sidebar, suitable for blog layouts. You can use it as a starting point as well. Biscaya Template comes with top notch customer support to help you get your business online fast. */}
					</p>
					<p>
						<a className="btn btn-primary btn-large">Read more »</a>
					</p>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="boxblog">
							<h5><a href="#">Nokia Lumia 520 now available through AT&amp;T's GoPhone</a></h5>
							<p className="small datepost">
								 {/* Posted on 2013-12-11 <span className="floatright" title="3 responses"><a href="#"><img src="img/comments.png" alt=""/></a></span> */}
							</p>
							<div className="innerblogboxtwo">
								<p>
									{/* <img width="150" height="150" src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/> */}
									AT&amp;T subscribers looking for a prepaid, contract-free Windows Phone handset now have a shot at the Lumia 520. On Monday, the carrier announced that it would begin selling the 520 on Friday...
								</p>
							</div>
							<p className="continueread readmorebox">
								<a href="#">Continue reading</a>
							</p>
						</div>
					</div>
					
					<div className="col-md-6">
						<div className="boxblog">
							<h5><a href="#">Apple seeks patent to beef up mobile-device battery life</a></h5>
							<p className="small datepost">
								 {/* Posted on 2013-12-11 <span className="floatright" title="3 responses"><a href="#"><img src="img/comments.png" alt=""/></a></span> */}
							</p>
							<div className="innerblogboxtwo">
								<p>
									{/* <img width="150" height="150" src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/> Those of us craving better battery life from our mobile devices could see help from an Apple invention proposed in a patent filing. Published Thursday by the U.S. Patent and Trademark Office... */}
								</p>
							</div>
							<p className="continueread readmorebox">
								<a href="#">Continue reading</a>
							</p>
						</div>
					</div>
					
				</div>
				
				<div className="row">
					<div className="col-md-6">
						<div className="boxblog">
							<h5><a href="#">After a death, Apple tells Chinese to only use official chargers</a></h5>
							<p className="small datepost">
								 {/* Posted on 2013-12-11 <span className="floatright" title="3 responses"><a href="#"><img src="img/comments.png" alt=""/></a></span> */}
							</p>
							<div className="innerblogboxtwo">
								<p>
									{/* <img width="150" height="150" src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/> Apple has a warning for Chinese customers: don't use the fake stuff. Apple has posted the warning on its Chinese Web site, urging customers to only use its official chargers with any of its products... */}
								</p>
							</div>
							<p className="continueread readmorebox">
								<a href="#">Continue reading</a>
							</p>
						</div>
					</div>
					
					<div className="col-md-6">
						<div className="boxblog">
							<h5><a href="#">Android 4.3 to hit Sony Xperia smartphones, tablet</a></h5>
							<p className="small datepost">
								 {/* Posted on 2013-12-11 <span className="floatright" title="3 responses"><a href="#"><img src="img/comments.png" alt=""/></a></span> */}
							</p>
							<div className="innerblogboxtwo">
								<p>
									{/* <img width="150" height="150" src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/> Android 4.3 Jelly Bean just spilled out Wednesday, but Sony has already lined up the devices slated to receive Google's latest update. Sony's Xperia Z, Xperia ZL, Xperia ZR, Xperia Tablet Z, Xperia SP... */}
								</p>
							</div>
							<p className="continueread readmorebox">
								<a href="#">Continue reading</a>
							</p>
						</div>
					</div>
					
				</div>
				
			</div>
			
			<div className="col-md-4">
				<ul id="myTab" className="nav nav-tabs">
					<li className="active"><a href="#home" data-toggle="tab">Recent Posts</a></li>
				</ul>
				<div id="myTabContent" className="tab-content multi-sidebar">
					<div className="tab-pane fade active in" id="home">
						<ul className="sidebar-latest">
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">Android 4.3 to hit Sony Xperia smartphones, tablet</a><br/>
							<small><a href="#"><span className="entry-date">July 25, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">Geeksphone now selling Firefox OS to consumers with Peak+</a><br/>
							<small><a href="#"><span className="entry-date">June 14, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">Google goes after Apple in tablet education</a><br/>
							<small><a href="#"><span className="entry-date">May 7, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">Apple now EA's biggest retail partner, thanks to iOS</a><br/>
							<small><a href="#"><span className="entry-date">April 3, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/300x200.png" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">New video compares leaked iPhone plastic case to previous models</a><br/>
							<small><a href="#"><span className="entry-date">February 16, 2013</span></a></small>
							</li>
						</ul>
					</div>
					<div className="tab-pane fade" id="profile">
						<ul className="sidebar-latest">
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/avatar.jpg" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">"The apple- pickers on the ladders raised a hum..."</a><br/>
							<small><a href="#"><span className="entry-date">July 25, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/avatar.jpg" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">"Alice was beginning to get very tired of sitting..."</a><br/>
							<small><a href="#"><span className="entry-date">June 14, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/avatar.jpg" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">"Let us begin at the simplest point, what is a comic..."</a><br/>
							<small><a href="#"><span className="entry-date">May 7, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/avatar.jpg" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">"I assume it as self-evident that those who, at any given..."</a><br/>
							<small><a href="#"><span className="entry-date">April 3, 2013</span></a></small>
							</li>
							<li className="clearfix">
							{/* <a href="#"><img src="img/demo/avatar.jpg" className="attachment-thumbnail" alt=""/></a> */}
							<a href="#">"The greatest length or breadth of a full grown..."</a><br/>
							<small><a href="#"><span className="entry-date">February 16, 2013</span></a></small>
							</li>
						</ul>
					</div>
					<div className="tab-pane fade" id="something">
						<div className="tagcloud">
							<a href="#">mobile</a>
							<a href="#">google</a>
							<a href="#">apple</a>
							<a href="#">phones</a>
							<a href="#">ipads</a>
							<a href="#">tablets</a>
							<a href="#">desktops</a>
						</div>
					</div>
				</div>
				{/* <!-- END Tabs --> */}
				<div className="sidebarBox widget-container widget_text">
					<h4 className="widget-title">Another Widget</h4>
					<div className="textwidget">
						 Aenean enim urna, luctus vel sollicitudin eu, lobortis et sapien. Duis justo purus, scelerisque sed iaculis vitae, dignissim a est. Pellentesque congu. Nulla dictum auctor dui, a sagittis arcu mattis eu.
					</div>
				</div>
				<div className="sidebarBox widget-container widget_text">
					<h4 className="widget-title">Apple's Suppliers</h4>
					<div className="textwidget">

					</div>
				</div>
			</div>
			
		</div>
		
	</div>
        <Footer/>
    </div>
    )
}