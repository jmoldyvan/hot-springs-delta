import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link, Navigate} from "react-router-dom"

export default function Signup (props) {
    const [formData, setFormData] = React.useState(
        {userName: "",
        email: "",
        password: "",}
    )
    const [getSignupRes, setGetSignupRes] = React.useState('')
    const [isSignedUp, setIsSignedUp] = React.useState(false)
    const [handleData, setHandleData] = React.useState('Fill In All Fields To Create Account')
    const [signupUserInfo, setSignUpUserInfo]= React.useState()

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
    
        const getSignup = async () => {
            if(localStorage.getItem('currUser')){
                return setHandleData( {msg: 'You Are Already Logged In'})
            }
                let response = await Promise.resolve(fetch ('https://west-coast-hot-springs-api-5czk.onrender.com/signup', {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                let data = response
                setHandleData(data[0])
                if(data.length > 1){
                    localStorage.setItem('currUser', JSON.stringify(data[1]))
                    setIsSignedUp(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true )

                }
            if(data.msg !== 'You\'ve signed up! Check out the profile tab.' || 'Account with that email address or userName already exists.'){
              setGetSignupRes(data[0].msg)
              return data[0].msg //should be msg:'strng'
            }
            else if( data.msg === 'Account with that email address or userName already exists.'){
              setGetSignupRes(data[0].msg)
              return data[0].msg //should be msg:'strng'
            }
            else{ 
            setIsSignedUp(true)
              return data[0].msg
            }
          }

React.useEffect(() => {
    if(isSignedUp!==false){
        window.location.reload()
        setHandleData( {msg:'You Successfully Signed Up'})
    }
     },[isSignedUp]);


return(
    <div>
        <Navbar allHotSpringData ={props.allHotSpringData} currUser={props.currUser}/>
        <div className=" container mt-5">

        <div className="container ">
                <div className=" col-md-12 ">
                    <div className="titleborder">
                        <div>
                            Sign Up
                        </div>
                    </div>
                </div>
		  </div>
            
            <div className="loginbox mt-5 col-md-8 col-md-offset-2 boxblog">
                { handleData == 'Fill In All Fields To Create Account' ? <h2 className="col-md-offset-1">{'Fill In All Fields To Create Account'}</h2> : <h2 className="">{`${handleData.msg}`}</h2>}
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
                            <button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12" onClick={()=> {props.signal(); getSignup()}} >Signup</button>
                            <button className="loginpagebtn mt-3 btn btn-primary btn-large col-md-5 col-md-offset-3 col-sm-12"><Link className="whiteplease" to={'/login'}>Login</Link></button>  
                    </form>        
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)}