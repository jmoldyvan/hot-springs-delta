import React, {useState} from 'react'
import "../Gallerycomponents/tab.css";
import { Link } from "react-router-dom";


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
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="titleborder">
                        <div>
                            Filter Hot Springs By State
                        </div>
                    </div>
                    <div class="headerdivider">
				</div>
                </div>
		    </div>

            
            <div className="menu-tabs container-fluid mt-5  ">
                <div className="menu-tab d-flex justify-content-around flex-wrap col  ">
<button className="gallerypagebtn btn-primary btn-warning " onClick={() => setItems(props.allHotSpringData)}>All</button>
                </div>
                <div className="menu-tab d-flex justify-content-around flex-wrap col  mt-4">
                    <button className="gallerypagebtn btn-primary btn-warning " onClick={() => filterItem('CA')}>California</button>
                    <button  className="gallerypagebtn btn-primary btn-warning " onClick={() => filterItem('NV')}>Nevada</button>
                    <button className="gallerypagebtn btn-primary btn-warning " onClick={() => filterItem('OR')}>Oregon</button>
                    <button className="gallerypagebtn btn-primary btn-warning " onClick={() => filterItem('WA')}>Washington</button>
                    
                </div>

            </div>
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
                                                <div className="col-12 col-md-12 col-lg-12 mt-2">
                                                    <div className="main-title ">
                                                        <h1 id='gallerypich1'>{name}</h1>
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