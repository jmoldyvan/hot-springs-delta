
import React from "react";
import { Link } from "react-router-dom";


export default function HSNear (props) {

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
        </div>
)}