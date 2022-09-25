import React from "react";
import { Link, Navigate } from "react-router-dom";

// NOTES
// on specific media quesry style out a state that adds a hamburger menu
// will need onclick event to open and close hamburger for list of nav items



export default function Navbar (props) {
	const [getLogoutRes, setGetLogOutRes] = React.useState('')
    const [isLoggedOut, setIsloggedOut] = React.useState(false)

	const getLogOut = async () => {
		console.log('post LogOut acheived ');
			let response = await Promise.resolve(fetch ('http://localhost:5000/logOut', {}).then((res) => res.json()))
			let data = response
		if(data.msg == 'ERROR'){
		  setGetLogOutRes('ERROR LOGGING OUT')
		  return data //should be msg:'strng'
		}
		else{ 
			
			setIsloggedOut(true)
		  return data
		}
	  }


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
							<li><a href='https://twitter.com/JordanMoldovan'><i className="icon-twitter"></i></a></li>
							<li><a href='https://www.linkedin.com/in/jordan-moldovan/'><i className="icon-linkedin"></i></a></li>
							<li><a href='https://github.com/jmoldyvan'><i className="icon-google-plus"></i></a></li>
							<li><a href={'https://jordan-moldovan.netlify.app/'}><i className=""></i></a></li>
							</ul>
							<div class="infophone">
							<span ><Link className="signuploginNav2" to={'/Login'}>Login</Link></span>
							<span className="signuploginNav"> |</span>
							<span ><Link className="signuploginNav2" to={'/Signup'}>Signup</Link></span>
							<span className="signuploginNav"> |</span>
							{isLoggedOut ? <Navigate to="/" replace/> : <span className="signuploginNav2" onClick={getLogOut} >LogOut</span>}
							</div>
							
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