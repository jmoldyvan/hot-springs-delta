import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function SpringCarousel (props) {
    // const style = {
    //     display: 'block'
    // }
    // const pointerOn ={
    //     pointerEvents: 'auto'
    // }
    const [item, setItem] = React.useState(props.currentHotSpringSite);
    return(
        <div className="col-md-6 top10">
                <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} swipeable={true} stopOnHover={true} emulateTouch={true}>
                    {item.imageArr.map((elem) => {
                        console.log(elem);
                        return (       
                            <div className="item1 col-12 col-md-12 col-lg-12 col-xl-12 my-5">
                                <div className=" Item-inside">
                                    {/* for images */}
                                    <div>
                                        <img  src={elem} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </Carousel>
            <div className="clearfix">
            </div>			
        </div>
		
    )}