import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccordionInfo from "./IndSpringDetailcomponents/AccordionInfo";
import SpringCarousel from "./IndSpringDetailcomponents/SpringCarousel";
import { useParams } from 'react-router-dom';
import notLiked from '../img/notLiked.png'
import liked from '../img/liked.png'


export default function IndSpringDetail (props) {
    
    let currentHotSpringSite;
    const id = useParams();
	let user = props.currUser
    props.allHotSpringData.forEach(e => {
        if(e._id === id.id){
            currentHotSpringSite = e
        }
    });

	const [handleData, setHandleData] = React.useState(false)
	const [allHotSpringReviews, setAllHotSpringReviews] = React.useState([])

		const [fav, setFav] = React.useState({isFavorite: false})
		
		let starIcon = fav.isFavorite ? liked : notLiked
		
		function toggleFavorite() {
			setFav(prevContact => ({
				...prevContact,
				isFavorite: !prevContact.isFavorite
			}))
		}

	const [formData, setFormData] = React.useState(
        {title: "",
        review: "",
		id: id.id,
		user: user._id,
		userName: user.userName,
		image: currentHotSpringSite.image
		}
    )
        function handleChange(event) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                }
            })
        }
        function handleSubmit(event) {
            event.preventDefault()
        }
    
        const getAllReviews = async () => {
			const allReviewData = await Promise.resolve(
				fetch('https://west-coast-hot-springs-api-5czk.onrender.com/reviews/reviewInfo').then((res) => res.json()))
				let currHotSpringReviews = allReviewData.filter((x) => x.hotSpring === id.id) 
				const currSpringReviews = 
				currHotSpringReviews.map((thing) => (thing))                           
                setAllHotSpringReviews(currSpringReviews); 		           
            }
        const postReview = async () => {
                let response = await Promise.resolve(fetch (`https://west-coast-hot-springs-api-5czk.onrender.com/reviews/createReview/:id`, {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                let data = response
				setAllHotSpringReviews(prevVal => {
					return prevVal.map((guessSquare) => {
						return {...guessSquare, formData}
					})
				})
				setHandleData(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true )
            }  

			const likeHotSpring = async () => {
					let response = await Promise.resolve(fetch (`https://west-coast-hot-springs-api-5czk.onrender.com/hotspringdbinfo/like/${id.id}`, {
					method: 'put', body: JSON.stringify({user: user._id}) ,//put your state from inputs/text area//),
					headers: { 'Content-Type': 'application/json' }
					}).then((res) => res.json()))
					let data = response
					setHandleData(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true )
				}  
			function doesUserIsLiked() {
				if(currentHotSpringSite.usersWhoLiked.includes(props.currUser._id)){
						return setFav(prevContact => ({
							...prevContact,
							isFavorite: true
						}))	
				}
			}
			const styles = {
				pointerEvents : !(localStorage.getItem('currUser')) ? "none" : "all",
			}

    React.useEffect(() => {
        getAllReviews()
		doesUserIsLiked()
	},[]);
	React.useEffect(() => {
		if(handleData != false){
			window.location.reload()
		}
		 },[handleData]);
    return(
        
<div>
        <Navbar allHotSpringData ={props.allHotSpringData} currUser={props.currUser}/>
    <div className="container ">
		
		<div className="page-header mt-5">
			<div className="headerdivider my-5">
				</div>
				
				<h1 className="col-md-offset-4">{currentHotSpringSite.name}</h1>
				<div className="headerdivider">
				</div>
			</div>

			<div className="row mt-5">

				<div className="col-md-6 mt-3">
					
					<p>
						<b>State</b> : {currentHotSpringSite.state} | <b>Area</b> : {currentHotSpringSite.area} | <b>Day Use Fee</b> : {currentHotSpringSite.dayUseFee}<br/>
						<b>Resort</b> : {currentHotSpringSite.resort} | <b>Open Season</b> : {currentHotSpringSite.open}
					</p>
					
					<p>
					{currentHotSpringSite.description}
					</p>

						<AccordionInfo currentHotSpringSite={currentHotSpringSite}/>    
					<br/>
			
				</div>
				
				<SpringCarousel currentHotSpringSite={currentHotSpringSite}/>

		</div>
		<div className="likeContainer mt-5"><h6 className=" mt-1" style={styles}> <img src={starIcon} 
			onClick={()=> {likeHotSpring(); toggleFavorite()}}/></h6></div>
		<div className="likeContainer">
			<h6>
			Click This Heart To Save This Hot Spring</h6>
			</div>
		<div className="likeContainer">
			<h6>
			To Your Profile Liked List For Later</h6>
			</div>
			<div className="likeContainer ">
			<h6 className="my-5">{currentHotSpringSite.likes} People Have Liked {currentHotSpringSite.name}</h6>
				</div>
		

	
	<div className="container2 col-md-offset-2 my-5">
		{ allHotSpringReviews.length < 1 || allHotSpringReviews==undefined ? <div></div>:
		<div id="content" class="top30">
			{
				allHotSpringReviews.map((elem) => {
					const { title, review, userName } = elem;
					return ( 
						<div class="boxportfolio3">
							<div class="testimonial">
								<h4>{title}</h4>
								{review}
							</div>
							<div class="author-wrapper">
								<div class="arrow">
								</div>
								<div class="testimonial-name">
									{userName}
								</div>
							</div>
						</div>
					)
				})
			}
		</div>}
		
	</div>
	<div className=" loginbox boxblog col-md-offset-2 col-md-8 col-sm-12 my-5">
			{!(localStorage.getItem('currUser')) ? <h1 className="my-5">You Must Be Logged In To Leave A Review</h1> :
			<form className="loginformstyle col-md-offset-3 col-sm-offset-3 col-md-6 col-sm-12" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Title"
							onChange={handleChange}
							name="title"
							value={formData.title}
						/>
						<textarea
							placeholder="Leave Review Here"
							onChange={handleChange}
							name="review"
							value={formData.review}
						/>
						<button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-8 col-md-offset-2 col-sm-12" onClick={()=> {props.signal(); postReview()}}  >Submit Review</button>
				</form>
			}
		</div>
</div>
	
		
        <Footer/>
</div>
)}