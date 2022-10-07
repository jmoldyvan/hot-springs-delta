import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link, useNavigate} from "react-router-dom"


export default function Login (props) {

    const [formData, setFormData] = React.useState(
        {userName: "",
        email: "",
        password: "",}
    )
    const [getLoginRes, setGetLoginRes] = React.useState(false)
    const [isLoggedIn, setIsloggedIn] = React.useState(false)
    const [handleData, setHandleData] = React.useState('Login')
    const [loginUserInfo, setLoginUserInfo]= React.useState()

    React.useEffect(() => {
        if(localStorage.getItem('currUser')){
            setHandleData({msg: 'You Are Already Logged In'})
        }
             },[]);

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
    
        const getLogin = async () => {
            if(localStorage.getItem('currUser')){
                return setHandleData( {msg:'You Are Already Logged In'})
            }
            // console.log('post login acheived ');
            // console.log(formData);
                let response = await Promise.resolve(fetch ('https://west-coast-hot-springs-api-5czk.onrender.com/login', {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                let data = response
                setHandleData(data[0])
                if(data.length > 1){
                    localStorage.setItem('currUser', JSON.stringify(data[1]))
                    setIsloggedIn(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true )
                }
            }

React.useEffect(() => {
    if(isLoggedIn!==false){
        window.location.reload()
        setHandleData( {msg:'You Successfully Logged In'})
    }
     },[isLoggedIn]);

return(
    <div>
        <Navbar allHotSpringData ={props.allHotSpringData} currUser={props.currUser}/>
        <div className="container mt-5 ">

        <div className="container ">
                <div className=" col-md-12 ">
                    <div className="titleborder">
                        <div>
                            Login
                        </div>
                    </div>
                    {/* <div className="titleborder"></div> */}
                </div>
		  </div>

            <div className="loginbox mt-5 col-md-8 col-md-offset-2 boxblog">
                { handleData == 'Login' ? <h2 className="col-md-offset-4">{'User Info'}</h2> : <h2>{`${handleData.msg}`}</h2>}
                <div className="mt-5">
                    <form className="loginformstyle" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="userName"
                                onChange={handleChange}
                                name="userName"
                                value={formData.userName}
                            />
                            <input
                                type="text"
                                placeholder="Password"
                                onChange={handleChange}
                                name="password"
                                value={formData.password}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                name="email"
                                value={formData.email}
                            />
                            <button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12" onClick={()=> {props.signal(); getLogin()}}  >Login</button>
                            <button className=" loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12"><Link className="whiteplease" to={'/signup'}>Register</Link></button> 
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)}