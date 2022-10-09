
import React from "react";
import { Link } from "react-router-dom";


export default function HSNear (props) {

	// const [sorted, setSorted] = React.useState([props.allHotSpringData]);
	// console.log(sorted);
	// function makeItSort() {
	// 	setSorted( prevValue => {
	// 		// return {...prevValue, sorted.sort((a,b) => b.likes-a.likes)}
	// 	} )
	// }
	
	// console.log(sorted);

	// React.useEffect(() => {
	// 	makeItSort()
	// 	},[]);

    return(
<div>
        <div className="row">
			<div className="col-md-12">
				<div className="titleborder">
					<div>
						 Top Liked Hot Springs!
					</div>
				</div>
			</div>
		</div>

		<div className="row recent-posts">
		{props.allHotSpringData.sort((a,b) => b.likes-a.likes).slice(0,4).map((elem) => {
					const { name, likes, description, image, _id } = elem;
					return ( 
						
					<div className="col-md-3">
						<article>
						<Link to={`/sitedetail/${_id}`}><img src={image} alt="" className="imgOpa"/></Link>
						<div className="date">
							<span className="day">{name.split(' ').map((item) => item[0]).join('')}</span>
						</div>
						<h4><Link to={`/sitedetail/${_id}`}>{name}</Link></h4>
						<p>
						{description.split('.')[0].length<12 ? `${description.split('.')[0]} ${description.split('.')[1]}` : description.split('.')[0]}				</p>
						</article>
					</div>
				
					)
				})
			}
		</div>

		{/* <div className="row recent-posts">
			<div className="col-md-3">
				<article>
				<Link to={`/sitedetail/${props.fiveCloseHS[0]._id}`}><img src={props.fiveCloseHS[0].image} alt="" className="imgOpa"/></Link>
				<div className="date">
					<span className="day">{props.fiveCloseHS[0].name.split(' ').map((item) => item[0]).join('')}</span>
				</div>
				<h4><Link to={`/sitedetail/${props.fiveCloseHS[0]._id}`}>{props.fiveCloseHS[0].name}</Link></h4>
				<p>
                {props.fiveCloseHS[0].description.split('.')[0].length<12 ? `${props.fiveCloseHS[0].description.split('.')[0]} ${props.fiveCloseHS[3].description.split('.')[1]}` : props.fiveCloseHS[0].description.split('.')[0]}				</p>
				</article>
			</div>
			<div className="col-md-3">
				<article>
				<Link to={`/sitedetail/${props.fiveCloseHS[1]._id}`}><img src={props.fiveCloseHS[1].image} alt="" className="imgOpa"/></Link>
				<div className="date">
					<span className="day">{props.fiveCloseHS[1].name.split(' ').map((item) => item[0]).join('')}</span>
				</div>
				<h4><Link to={`/sitedetail/${props.fiveCloseHS[1]._id}`}>{props.fiveCloseHS[1].name}</Link></h4>
				<p>
                {props.fiveCloseHS[1].description.split('.')[0].length<12 ? `${props.fiveCloseHS[1].description.split('.')[0]} ${props.fiveCloseHS[3].description.split('.')[1]}` : props.fiveCloseHS[1].description.split('.')[0]}				</p>
				</article>
			</div>
			<div className="col-md-3">
				<article>
				<Link to={`/sitedetail/${props.fiveCloseHS[2]._id}`}><img src={props.fiveCloseHS[2].image} alt="" className="imgOpa"/></Link>
				<div className="date">
					<span className="day">{props.fiveCloseHS[2].name.split(' ').map((item) => item[0]).join('')}</span>
				</div>
				<h4><Link to={`/sitedetail/${props.fiveCloseHS[2]._id}`}>{props.fiveCloseHS[2].name}</Link></h4>
				<p>
                {props.fiveCloseHS[2].description.split('.')[0].length<12 ? `${props.fiveCloseHS[2].description.split('.')[0]} ${props.fiveCloseHS[3].description.split('.')[1]}` : props.fiveCloseHS[2].description.split('.')[0]}</p>
				</article>
			</div>
			<div className="col-md-3">
				<article>
				<Link to={`/sitedetail/${props.fiveCloseHS[3]._id}`}><img src={props.fiveCloseHS[3].image} alt="" className="imgOpa"/></Link>
				<div className="date">
					<span className="day">{props.fiveCloseHS[3].name.split(' ').map((item) => item[0]).join('')}</span>
				</div>
				<h4><Link to={`/sitedetail/${props.fiveCloseHS[3]._id}`}>{props.fiveCloseHS[3].name}</Link></h4>
				<p>
                {props.fiveCloseHS[3].description.split('.')[0].length<12 ? `${props.fiveCloseHS[3].description.split('.')[0]} ${props.fiveCloseHS[3].description.split('.')[1]}` : props.fiveCloseHS[3].description.split('.')[0]}				</p>
				</article>
			</div>
		</div> */}
        </div>
)}