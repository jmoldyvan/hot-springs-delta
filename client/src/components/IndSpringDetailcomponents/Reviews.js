import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link, useNavigate} from "react-router-dom"
import { useParams } from 'react-router-dom';


export default function  (props) {
    const id = useParams();
    const [formData, setFormData] = React.useState(
        {comment: "",
        post:"",//the spring params
        password: "",
        params: id}
    )

let navigate = useNavigate();

    React.useEffect(() => {
            if (isLoggedIn==true){
            return navigate("/");
            }
    },[isLoggedIn]);

    React.useEffect(() => {
            display()
    },[Res]);


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
    
        const placeReview = async () => {
                let response = await Promise.resolve(fetch ('https://west-coast-hot-springs-api-5czk.onrender.com/', {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                let data = response
                setHandleData(data[0])
            }

return(
    <div>
        <Navbar/>
        <div>
         <h2>Leave a Review Below</h2>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                    <textarea
                        type="text"
                        placeholder="Leave your comment here"
                        onChange={handleChange}
                        name="comment"
                        value={formData.comment}
                    />
                    <input
                        // maybe a checkbox if they would reccomend?
                    />
                    <button onClick={placeReview}  > Submit Your Review!</button>
            </form>
        </div>
        <Footer/>
    </div>
)}