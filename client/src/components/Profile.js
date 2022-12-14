import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Profile (props) {
	const id = useParams();
	let style ={
		margin:'10px'
	}
	function handleSubmit(event) {
		event.preventDefault()
	}
		const [allUserHotSpringReviews, setAllUserHotSpringReviews] = React.useState([])
		const [hotSpringReviewInfo, setHotSpringReviewInfo] = React.useState([])
		const [isLoggedIn, setIsloggedIn] = React.useState(false)

		const [fav, setFav] = React.useState([])

		const getAllReviews = async () => {
			const allReviewData = await Promise.resolve(
				fetch('https://west-coast-hot-springs-api-5czk.onrender.com/reviews/reviewInfo').then((res) => res.json()))
				let currHotSpringReviews = allReviewData.filter((x) => x.user === props.currUser._id) 
				const currSpringReviews = 
				currHotSpringReviews.map((thing) => (thing))                           
                setAllUserHotSpringReviews(currSpringReviews);
				const result = props.allHotSpringData.filter(c => allUserHotSpringReviews.some(s => s.allHotSpringData._id === c.hotSpring));
				setHotSpringReviewInfo(result)  
            }

		const deleteReview = async (isOfHotSpring) => {
				localStorage.getItem("currUser")
					let response = await Promise.resolve(fetch ('https://west-coast-hot-springs-api-5czk.onrender.com/reviews/deleteReview/:id', {
					method: 'delete', body: JSON.stringify(isOfHotSpring), //put your state from inputs/text area//),
					headers: { 'Content-Type': 'application/json' }
					}).then((res) => res.json()))
					setIsloggedIn(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true )
			}
			
		React.useEffect(() => {
			getAllReviews()
			doesUserIsLiked()
			// getProfilePost()
			},[])

			React.useEffect(() => {
				if(isLoggedIn!==false){
					window.location.reload()
				}
				 },[isLoggedIn]);

function doesUserIsLiked() {
	let saved = props.allHotSpringData.filter(x => (
	x.usersWhoLiked.includes(props.currUser._id)))
		setFav(saved)
}

    return(
    <div>
        <Navbar currUser={props.currUser} allHotSpringData={props.allHotSpringData}/>
        <div className="container mt-5">
		<div className="row">
			<div className="col-md-8 span-fixed-sidebar">
				<div className="hero-unit">
					<h1>Welcome, {props.currUser.userName}</h1>
					<p>
						{<img src="https://res.cloudinary.com/djp4vd3uw/image/upload/v1663206333/hot-spring-imgs/agua-caliente/AguaCaliente1_cum4pe.jpg" className="pull-left paddingright" alt="" style={style}/>}
					</p>
					<p>

					{/* ******************************** */}

					<form className="">
                            <input id='invi'/>
                    </form>
					{/* <form className="loginformstyle" onSubmit={handleSubmit} encType='multipart/form-data'>
                            <input
                                type="file"
                                placeholder="userName"
                                onChange={(e) => setFormData(e.target.files[0])}
                                name="formData"
                                // value={formData}
                            />
                            <button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12" onClick={()=> {postProfilePost(); }}  >Login</button>
                    </form> */}
					{/* ******************************* */}
					</p>
				</div>
				<div id="comments">
				</div>
				<div className="row">
				<div className="titleborder">
                        <div>
                            Your Reviews
                        </div>
                    </div>
				{
				allUserHotSpringReviews.map((elem) => {
					const { title, review, hotSpring, image,  } = elem;
					return ( 
						
					<div className="col-md-6">
						<div className="boxblog">
							<h5>{title}</h5>
							<p className="small datepost">
							</p>
							<div className="innerblogboxtwo">
								<p>
									<img width="150" height="150" src={image} className="attachment-thumbnail" alt=""/> 
									{review}
								</p>
							</div>
							<p className="continueread readmorebox">
							<Link to={`/sitedetail/${hotSpring}`}>Click Here To Visit Hot Spring</Link>
							</p>
							<p className="continueread readmorebox" onClick={()=> {deleteReview(elem)}}>
							<Link to='#'>Click Here To Delete This Review</Link>
							</p>
						</div>
					</div>
				
					)
				})
			}
			</div>	
			</div>
			
			<div className="col-md-4">
				<ul id="myTab" className="nav nav-tabs">
					<li className="active"><a href="#home" data-toggle="tab">Your Liked Hot Springs</a></li>
				</ul>
				{
				fav.map((elem) => {
					const { image, name, area, _id } = elem;
					return ( 

					<div className="tab-pane  active in" id="home">
						<ul className="sidebar-latest">
							<li className="clearfix">
							<Link to={`/sitedetail/${_id}`}><img src={image} className="attachment-thumbnail" alt=""/></Link>
							<Link to={`/sitedetail/${_id}`}>{name}</Link>                          <br/>
							<small><span className="entry-date">{area}</span></small>
							</li>
						</ul>
					</div>
						)
				})
			}
			</div>
		</div>
	</div>
        <Footer/>
    </div>
    )
}