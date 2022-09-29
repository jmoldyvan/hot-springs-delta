import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


export default function Profile (props) {
	
	let style ={
		margin:'10px'
	}
		const [allUserHotSpringReviews, setAllUserHotSpringReviews] = React.useState([])
		const [hotSpringReviewInfo, setHotSpringReviewInfo] = React.useState([])

		const [fav, setFav] = React.useState([])

		const getAllReviews = async () => {
			const allReviewData = await Promise.resolve(
				fetch('http://localhost:5000/reviews/reviewInfo').then((res) => res.json()))
				let currHotSpringReviews = allReviewData.filter((x) => x.user === props.currUser._id) 
				const currSpringReviews = 
				currHotSpringReviews.map((thing) => (thing))                           
                setAllUserHotSpringReviews(currSpringReviews);
				const result = props.allHotSpringData.filter(c => allUserHotSpringReviews.some(s => s.allHotSpringData._id === c.hotSpring));
				setHotSpringReviewInfo(result)  
            }

			const deleteReview = async (isOfHotSpring) => {
				console.log('delete acheived ');
					let response = await Promise.resolve(fetch ('http://localhost:5000/reviews/deleteReview/:id', {
					method: 'delete', body: JSON.stringify(isOfHotSpring), //put your state from inputs/text area//),
					headers: { 'Content-Type': 'application/json' }
					}).then((res) => res.json()))
				}


			React.useEffect(() => {
				getAllReviews()
				doesUserIsLiked()
			},[])
			React.useEffect(() => {
				getAllReviews()
				doesUserIsLiked()
			},[]);

function doesUserIsLiked() {
	let saved = props.allHotSpringData.filter(x => (
	x.usersWhoLiked.includes(props.currUser._id)))
		setFav(saved)
}
    return(
    <div>
        <Navbar currUser={props.currUser} allHotSpringData={props.allHotSpringData}/>
        <div className="container">
		<div className="row">
			<div className="col-md-8 span-fixed-sidebar">
				<div className="hero-unit">
					<h1>Welcome, {props.currUser.userName}</h1>
					<p>
						<img src="https://res.cloudinary.com/djp4vd3uw/image/upload/v1663206333/hot-spring-imgs/agua-caliente/AguaCaliente1_cum4pe.jpg" className="pull-left paddingright" alt="" style={style}/> 
					</p>
					<p>
						<a className="btn btn-primary btn-large"></a>
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
							<p className="continueread readmorebox" onClick={()=> {deleteReview(elem); window.location.reload()}}>
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