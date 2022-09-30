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
            console.log('post Signup acheived ');
                let response = await Promise.resolve(fetch ('http://localhost:5000/signup', {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                let data = response
                console.log(data);
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
        <div className="mt-5">
        { handleData == 'Fill In All Fields To Create Account' ? <h2>{'Fill In All Fields To Create Account'}</h2> : <h2>{`${handleData.msg}`}</h2>}
        </div>
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
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
                    <button onClick={()=> {props.signal(); getSignup()}} >Signup</button>
            </form>
                    <button><Link to={'/login'}>Already Have An Account?</Link></button>  
        </div>
        <Footer/>
    </div>
)}