import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function RestAPI (props) {

    const [formData, setFormData] = React.useState(
        {userName: "",
        email: "",
        password: "",}
    )

    return(
    <div>
        <Navbar allHotSpringData ={props.allHotSpringData} currUser={props.currUser}/>
        <div className="container mt-5">
        <div className="container mt-5">

<div className="container ">
        <div className=" col-md-12 ">
            <div className="titleborder">
                <div>
                    API Documentation
                </div>
            </div>
        </div>
</div>

  <div className="menu-tabs container-fluid mt-5  ">
                <div className="menu-tab d-flex justify-content-around flex-wrap col  ">
<h1 className="gallerypagebtn btn-primary btn-warning">https://west-coast-hot-springs-api-5czk.onrender.com/hotspringdbinfo/</h1>
                </div>
                <div className="menu-tab d-flex justify-content-around flex-wrap col  mt-4">
                </div>
            </div>
			<div className="container ">
			<div className=" col-md-12 ">
            <div className="titleborder mt-5">
                <div>
                    EXAMPLES
                </div>
				</div>
				</div>
        </div>
    <div className="loginbox mt-5 col-md-12 col-md-offset-0 boxblog">
        <h4>https://west-coast-hot-springs-api-5czk.onrender.com/hotspringdbinfo/</h4>
        <div className="mt-5">
            {/* <form className="loginformstyle"> */}
                    <a href="https://west-coast-hot-springs-api-5czk.onrender.com/hotspringdbinfo/aguacalientepark"><button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12"  >Agua Caliente Park</button></a>
                    {/* <button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12" >Login</button>
                    <button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12" >Login</button> */}

            {/* </form> */}
        </div>
    </div>
</div>
<div className="container ">
        <div className=" col-md-12 mt-5">
            <div className="titleborder">
                <div>
                    ENDPOINTS
                </div>
            </div>
        </div>
</div>
        <div className="row graysection">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
						</div>
                        <table class="table table-bordered">
		<thead>
		<tr>
			<th>
                ENDPOINT
			</th>
			<th>
                DESCRIPTION
			</th>
			<th>
                EXAMPLE
			</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td >
				 Name of HotSpring (no spaces)
			</td>
			<td>
				 Returns a single object of the specific hotspring by name.
			</td>
			<td>
			https://west-coast-hot...../AguaCalientePark
			</td>
		</tr>
		<tr>
			<td >
				 State Abreviation
			</td>
			<td>
				 Returns a list of objects of every Hot Spring within specified state.
			</td>
			<td>
			https://west-coast-hot...../state/CA
			</td>
		</tr>
		<tr>
			<td >
				 IsResort /or/ IsNotResort
			</td>
			<td>
				 Returns list of objects of every HotSpring that is or is not a Resort
			</td>
			<td>
			https://west-coast-hot...../resort/isresort
			</td>
		</tr>
		<tr>
			<td >
				 HasWebsite
			</td>
			<td>
				Returns list of objects of every HotSpring that has a website
			</td>
			<td>
			https://west-coast-hot...../haswebsite/haswebsite
			</td>
		</tr>

		</tbody>
		</table>
</div>


<div className="container ">
        <div className=" col-md-12 mt-5">
            <div className="titleborder">
                <div>
                    PROPERTY DESCRIPTIONS
                </div>
            </div>
        </div>
</div>

  <div className="row graysection">
					<div className="grey-box-icon">
						<div className="icon-box-top grey-box-icon-pos">
						</div>
                        <table class="table table-bordered"></table>
                        <table class="table table-bordered">
		<thead>
		<tr>
			<th>
                PROPERTY
			</th>
			<th>
                DESCRIPTION
			</th>

		</tr>
		</thead>
		<tbody>
		<tr>
			<td >
				 name
			</td>
			<td>
				 [STRING] Name of the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 lat
			</td>
			<td>
			[STRING] Latitude of the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 long
			</td>
			<td>
			[STRING] Longitude of the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 description
			</td>
			<td>
			[STRING] Description and facts about the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 state
			</td>
			<td>
			[STRING] Two letter abreviation of the state the current Hot Spring resides.
			</td>

		</tr>
		<tr>
			<td >
				 area
			</td>
			<td>
			[STRING] County or general area the hot spring is within.
			</td>

		</tr>
		<tr>
			<td >
				 googlelink
			</td>
			<td>
			[STRING] The web address of google maps focused on the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 image
			</td>
			<td>
			[STRING] URL of the Hot Spring image that is hosted on Cloudinary.
			</td>

		</tr>
		<tr>
			<td >
				 dayusefee
			</td>
			<td>
			[STRING] Description whether there is a fee to use the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 overnightFacilities
			</td>
			<td>
			[STRING] Description of camping or other overnight facilities.
			</td>

		</tr>
		<tr>
			<td >
				 open
			</td>
			<td>
			[STRING] Times and season the current Hot Spring is open.
			</td>

		</tr>
		<tr>
			<td >
				 roadAccess
			</td>
			<td>
			[STRING] Description of required vehicle is needed to access the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 website
			</td>
			<td>
			[STRING] URL of the current Hot Spring, or N/A if there is not a URL available.
			</td>

		</tr>
		<tr>
			<td >
				 resort
			</td>
			<td>
			[STRING] Yes/No if the current Hot Spring is stated as a resort.
			</td>

		</tr>
		<tr>
			<td >
				 loc
			</td>
			<td>
			[OBJECT] Geometry Point of the current Hot Spring.
			</td>

		</tr>
		<tr>
			<td >
				 nospacename
			</td>
			<td>
			[STRING] Name of the current Hot Spring without spaces
			</td>

		</tr>
		<tr>
			<td >
				 imageArr
			</td>
			<td>
			[ARRAY] List of all URL of the Hot Spring image that is hosted on Cloudinary.
			</td>

		</tr>
		<tr>
			<td >
				 likes
			</td>
			<td>
			[DOUBLE] Number of likes recieved.
			</td>

		</tr>
		<tr>
			<td >
				 usersWhoLiked
			</td>
			<td>
			[ARRAY] List of user MongoDB ID_ that have liked this Hot Spring.
			</td>

		</tr>

		</tbody>
		</table>
</div>
							</div>
					</div>
      </div>
        <Footer/>
    </div>

)}