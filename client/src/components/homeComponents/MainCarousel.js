import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


	// set up onclick to link to the id of the random dataobject for its corresponding page


    export default function MainCarousel (props) {
		const style = {
            display: 'block'
        }
        const pointerOn ={
            pointerEvents: 'auto'
        }
        return(
            <div className="row">
			<div className="col-md-12 col-12  col-lg-12 col-xl-12 my-5">
				<Carousel autoPlay={true} infiniteLoop={true} showArrows={true} swipeable={true} stopOnHover={true} emulateTouch={true}>
                <div>
                        {/* <Link to={`/sitedetail/${props.fiveCloseHS[0].id}`}><img src={props.fiveCloseHS[0].image} alt="" className="imgOpa"/></Link> */}
                        {/* <Link to={`/sitedetail/${props.hotSpringDataObject[0].id}`}> */}
                            <img style={pointerOn} src={props.hotSpringDataObject[0].image} />
                            {/* </Link> */}
                        <Link to={`/sitedetail/${props.hotSpringDataObject[0].id}`}><p className="legend">{props.hotSpringDataObject[0].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[1].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[1].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[1].id}`}><p className="legend">{props.hotSpringDataObject[1].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[2].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[2].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[2].id}`}><p className="legend">{props.hotSpringDataObject[2].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[3].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[3].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[3].id}`}><p className="legend">{props.hotSpringDataObject[3].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[4].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[4].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[4].id}`}><p className="legend">{props.hotSpringDataObject[4].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[5].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[5].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[5].id}`}><p className="legend">{props.hotSpringDataObject[5].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[6].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[6].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[6].id}`}><p className="legend">{props.hotSpringDataObject[6].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[7].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[7].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[7].id}`}><p className="legend">{props.hotSpringDataObject[7].name}</p></Link>
                </div>
                <div>
                            {/* <Link to={`/sitedetail/${props.hotSpringDataObject[8].id}`}> */}
                                <img style={pointerOn} src={props.hotSpringDataObject[8].image} />
                                {/* </Link> */}
                            <Link to={`/sitedetail/${props.hotSpringDataObject[8].id}`}><p className="legend">{props.hotSpringDataObject[8].name}</p></Link>
                </div>
            </Carousel>
				<div className="clearfix">
				</div>
			</div>
		</div>
            )
    }