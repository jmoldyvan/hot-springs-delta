import React from "react";
import { Link, Navigate } from "react-router-dom";
import {Col} from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import {useNavigate} from 'react-router-dom';
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function Navbar (props) {

	const [searchString, setSearchString] = React.useState("");
	const [getLogoutRes, setGetLogOutRes] = React.useState('')
    const [isLoggedOut, setIsloggedOut] = React.useState(false)
    const [matchedHotSpring, setMatchedHotSpring] = React.useState()
    const [allhotSpringDataForAutoComplete, setAllhotSpringDataForAutoComplete] = React.useState([])
	const [formData, setFormData] = React.useState(
        {searchHS: ""}
    )
	
	const getLogOut = async () => {
		if(!localStorage.getItem('currUser')){
			return undefined
        }
			let response = await Promise.resolve(fetch ('https://west-coast-hot-springs-api-5czk.onrender.com/logOut', {}).then((res) => res.json()))
			let data = response
		if(data.msg == 'ERROR'){
		  setGetLogOutRes('ERROR LOGGING OUT')
		  return data //should be msg:'strng'
		}
		else{ 
			setIsloggedOut(true)
			localStorage.removeItem('currUser');
		  return data
		}
	  }
	  function mapAllHSDataWithID(){
		let hotSpringWithIDArr= props.allHotSpringData.map((obj,index) => ({...obj, id:index}))
		setAllhotSpringDataForAutoComplete(hotSpringWithIDArr)
	  }
	  function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })}
		function handleSubmit(event) {
			event.preventDefault()
		}

const handleOnSearch = (string, results) => {
	setSearchString(string);
  };
const handleOnSelect = (string) => {
	setSearchString(string.name);
  };


const navigate = useNavigate();
function getIndHSPage(searchString){
	if(!allhotSpringDataForAutoComplete.some(e => e.name == (searchString))){
		alert(`Cannot Find ${searchString}`)
	}
	else{
		let matchedHotSpring = allhotSpringDataForAutoComplete.filter((x) => x.name == searchString)
		navigate(`/sitedetail/${matchedHotSpring[0]._id}`, {replace: true})
	}
}


React.useEffect(() => {
    mapAllHSDataWithID()
     },[]);

    return(
		<header>
			<div className="container clearfix">
				<div className="row">
					<div className="col-md-12">
						<h1 className="brandlogo col-md-offset-4">
								<p className="footerlogo ">
								West Coast Hot Springs
								</p>
							</h1>
						<div className="">
							<ul className="social-icons list-soc">
							</ul>
							<div class="infophone">
							<span ><Link className="signuploginNavleft" to={'/Login'}>Login</Link></span>
							<span ><Link className="signuploginNav2" to={'/Signup'}>Signup</Link></span>
							{isLoggedOut && !localStorage.getItem('currUser') ? <Navigate to="/profile1" /> : <span className="signuploginNavleft" onClick={getLogOut} >LogOut</span>}
							</div>
							
						</div>
						<div className="clearfix">
						</div>
						<Col sm={12}  className='d-md-none d-sm-block d-lg-none' ><Menu burgerButtonClassName={ "" } right >							
									<ul  id="" className="">
										<li className="menu-item"><Link className="signuploginNav3" to={'/'}>Home</Link></li><br></br>
										<li className="menu-item"><Link className="signuploginNav3" to ='/gallery'>Gallery</Link></li><br></br>
										<li className="menu-item">{props.currUser===null || props.currUser==undefined || !localStorage.getItem('currUser') ? <Link className="signuploginNav3" to={`/profile1`}>Profile</Link> : <Link className="signuploginNav3" to={`/profile/${props.currUser._id}`}>Profile</Link> }</li>
										<br></br><li className="menu-item"><Link className="signuploginNav3" to={'/contact'}>Contact</Link></li>
										<br></br><li className="menu-item"><Link className="signuploginNav3" to={'/RestAPI'}>API</Link></li>
									</ul><br></br><br></br>

									<form onSubmit={handleSubmit} id="search" action="#" method="GET">	
								<div className="autocompletediv2" style={{ width: 250, margin: 0, height: "400px", background: "#373a47" }}>					
								<ReactSearchAutocomplete
											showIcon={false}
											styling={{
												margin:"5px",
												height: "70px",
												border: "0px solid #e7402f",
												borderRadius: "4px",
												backgroundColor: "#373a47",
												color:"white",
												boxShadow: "none",
												fontSize: "16px",
												placeholderColor: "white",
												hoverBackgroundColor: "#e7402f",
												textAlign: "center",
												clearIconMargin: "3px 8px 0 0",
												zIndex: 2,
											  }}
											items={allhotSpringDataForAutoComplete}
											onSearch={handleOnSearch}
											onSelect={handleOnSelect}
											inputSearchString={searchString}
											autoFocus
											placeholder="Search here..." 
											onChange={handleChange}
											name="searchHS"
											value={formData.searchHS}
											/>
											<button className="searchbutton" onClick={()=> getIndHSPage(searchString)}><i class="icon-search"></i></button>	
										</div>								
									</form>
									</Menu></Col>
						
						
						<Col  lg={12} className='d-none d-sm-none d-md-block d-lg-block'>
						<div className="row-nav navbar">
							
							<div className="navbar-inner">
								
								<ul  id="nav" className="nav">
									<li className="active selected"><Link to={'/'}>Home</Link></li>
									<li><Link to ='/gallery'>Gallery</Link></li>
									<li>{props.currUser===null || props.currUser==undefined || !localStorage.getItem('currUser') ? <Link to={`/profile1`}>Profile</Link> : <Link to={`/profile/${props.currUser._id}`}>Profile</Link> }</li>
									<li><Link to={'/contact'}>Contact</Link></li>
									<li><Link to={'/RestAPI'}>API</Link></li>
								</ul>
								<form onSubmit={handleSubmit} id="search" action="#" method="GET">	
								<div className="autocompletediv" style={{ width: 150, height: "200px" }}>					
								<ReactSearchAutocomplete className="autoinput"
											showIcon={false}
											styling={{
												margin:"5px",
												height: "50px",
												border: "0px solid #e7402f",
												borderRadius: "4px",
												backgroundColor: "black",
												color: "white",
												boxShadow: "none",
												fontSize: "14px",
												placeholderColor: "white",
												hoverBackgroundColor: "#e7402f",
												textAlign: "center",
												clearIconMargin: "3px 8px 0 0",
												zIndex: 2,
											  }}
											items={allhotSpringDataForAutoComplete}
											onSearch={handleOnSearch}
											onSelect={handleOnSelect}
											inputSearchString={searchString}
											autoFocus
											placeholder="Search here..." 
											onChange={handleChange}
											name="searchHS"
											value={formData.searchHS}
											/>
											
										</div>	
										<button className="searchbutton" onClick={()=> getIndHSPage(searchString)}><i class="icon-search"></i></button>								
									</form>
									
							</div>
						</div></Col>
					</div>
				</div>
			</div>
			</header>
        )
}