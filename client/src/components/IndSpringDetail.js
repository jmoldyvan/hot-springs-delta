import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccordionInfo from "./IndSpringDetailcomponents/AccordionInfo";
import SpringCarousel from "./IndSpringDetailcomponents/SpringCarousel";
// import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import notLiked from '../img/notLiked.png'
import liked from '../img/liked.png'


export default function IndSpringDetail (props) {
    
    let currentHotSpringSite;
    const id = useParams();
	let user = props.currUser
    // console.log(props.allHotSpringData);
    props.allHotSpringData.forEach(e => {
        if(e._id === id.id){
            currentHotSpringSite = e
        }
    });
    console.log(currentHotSpringSite);




	const [handleData, setHandleData] = React.useState(false)
	const [allHotSpringReviews, setAllHotSpringReviews] = React.useState([])
	// const [user, setUser] = React.useState([0])

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
				fetch('http://localhost:5000/reviews/reviewInfo').then((res) => res.json()))
				// console.log(allReviewData);
				// const id = useParams();
				let currHotSpringReviews = allReviewData.filter((x) => x.hotSpring === id.id) 
				const currSpringReviews = 
				currHotSpringReviews.map((thing) => (thing))                           
                setAllHotSpringReviews(currSpringReviews); 		           
            }
			// console.log(allHotSpringReviews);
        const postReview = async () => {
            // console.log('post reveiw acheived ');
            // console.log(formData);
                let response = await Promise.resolve(fetch (`http://localhost:5000/reviews/createReview/:id`, {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                // console.log(response);
                let data = response
                // console.log(data);
				setAllHotSpringReviews(prevVal => {
					return prevVal.map((guessSquare) => {
						return {...guessSquare, formData}
					})
				})
				setHandleData(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true )
            }  

			const likeHotSpring = async () => {
				// console.log(id.id);
				// console.log(user._id);
					let response = await Promise.resolve(fetch (`http://localhost:5000/hotspringdbinfo/like/${id.id}`, {
					method: 'put', body: JSON.stringify({user: user._id}) ,//put your state from inputs/text area//),
					headers: { 'Content-Type': 'application/json' }
					}).then((res) => res.json()))
					// console.log(response);
					let data = response
					// console.log(data);
				}  
				// console.log(props.allHotSpringData);
			function doesUserIsLiked() {
				// console.log(props.allHotSpringData);
				if(currentHotSpringSite.usersWhoLiked.includes(props.currUser._id)){
						console.log('it is icluded');
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
    <div className="container">
		<div className="page-header">
			<div className="headerdivider">
				</div>
				
				<h1>{currentHotSpringSite.name}</h1>
				<div className="headerdivider">
				</div>
			</div>
			<div className="row">
			<h1 style={styles} ><img src={starIcon} onClick={()=> {likeHotSpring(); toggleFavorite(); window.location.reload()}}/>
			{currentHotSpringSite.likes}</h1>
				<div className="col-md-6">
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
		

		{!(localStorage.getItem('currUser')) ? <h1>You Must Be Logged In To Leave A Review</h1> :
		<form onSubmit={handleSubmit}>
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
                    <button onClick={()=> {props.signal(); postReview()}}  >Submit Review</button>
            </form>
			}


	</div>
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
        <Footer/>
</div>
)}