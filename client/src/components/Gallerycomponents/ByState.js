import React, {useState} from 'react'
import "../Gallerycomponents/tab.css";
// import Menu from "./menu";

import { 
	 
	// Route, Routes, 
	Link } from "react-router-dom";

// fetch all the images from the api in the parent
// store images in a state with ca,nv,or and id
// pass state through props to here
// 
// map all images to a list
// set up a toggle function on CLick to the states, buttons
// toggle the displayed images through a click event using ca,nv,or to make specific appear or dissapear

export default function ByState (props) {

    const [items, setItems] = useState([props.allHotSpringData]);
    
    const filterItem = (categItem) => {
        const updatedItems = props.allHotSpringData.filter((curElem) => {
            return curElem.state === categItem;
        });

        setItems(updatedItems);
    }
    React.useEffect(() => {
        setItems(props.allHotSpringData)
      }, []);  

    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                {/* <div className="titleborder">
                    </div> */}
                    <div className="titleborder">
                        <div>
                            Filter Hot Springs By State
                        </div>
                    </div>
                    <div class="headerdivider">
				</div>
                </div>
		    </div>

            
            <div className="menu-tabs container mt-3">
                <div className="menu-tab d-flex justify-content-around">
                    <button className=" btn-primary btn-warning" onClick={() => filterItem('CA')}>California</button>
                    <button className="btn-primary btn-warning" onClick={() => filterItem('NV')}>Nevada</button>
                    <button className="btn-primary btn-warning" onClick={() => filterItem('OR')}>Oregon</button>
                    <button className="btn-primary btn-warning" onClick={() => filterItem('WA')}>Washington</button>
                    <button className="btn-primary btn-warning" onClick={() => setItems(props.allHotSpringData)}>All</button>
                </div>
            </div>
            {/* my main items section  */}
            <div className="menu-items container-fluid mt-1">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { _id, name, image, area } = elem;

                                    return ( 
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                <div className="col-12 col-md-12 col-lg-12 img-div">
                                                <Link to={`/sitedetail/${_id}`}><img src={image} alt={name} className="img-fluid"/></Link>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="main-title pt-1 pb-1 mt-3">
                                                        <h1>{name}</h1>
                                                        <p>{area}</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <a href="#">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                        </div>
                    </div>
                </div>
            </div>
</div>
)
}