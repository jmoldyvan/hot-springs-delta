import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";

export default function Contact (props) {

    const [status, setStatus] = React.useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };

    return(
    <div>
        <Navbar currUser={props.currUser} allHotSpringData={props.allHotSpringData}/>
      
      
      <div className="container mt-5">
                <div className=" col-md-12 ">
                    <div className="titleborder">
                        <div>
                            Contact
                        </div>
                    </div>
                    {/* <div className="titleborder"></div> */}
                </div>
		  </div>
        <div className="container mt-5 ">
        <div className="loginbox  col-sm-12 col-md-6  boxblog">
            <form className="contactformstyle" onSubmit={handleSubmit}>
              <div>
                <h3 htmlFor="name">Name:</h3>
                <input className="" type="text" id="name" required />
              </div>
              <div>
                <h3 htmlFor="email">Email:</h3>
                <input type="email" id="email" required />
              </div>
              <div>
                <h3 htmlFor="message">Message:</h3>
                <textarea id="message" required />
              </div>
                <button className="contactpagebtn mt-3 btn-primary btn-large " type="submit">{status}</button>
            </form>
        </div>

        <div className="row graysection">
				{/* <div className="col-md-5"> */}
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
							<i className="fontawesome-icon medium circle-white center icon-envelope"></i>
						</div>
						<h4 className='mt-5'>All Emails Are Sent Directly To Developer Team</h4>
						<p className='mt-5'>
							Feel free to send a message if you have any questions or concerns!
						</p>
						<p>
							If you know of any new hot springs that you would like to be added or any information 
              that needs to be updated, please send a message.
						</p>
						{/* <p>
							<Link to={'/Signup'} className="btn btn-primary btn-large"> Signup → </Link></p>
							<p><Link to={'/Login'} className="btn btn-primary btn-large"> Login → </Link></p> */}
						
					{/* </div> */}
        
					</div>



					</div>



      </div>


          <Footer/>
    </div>
    )
}