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
            console.log(formData)
        }
    
        const getSignup = async () => {
            console.log('post Signup acheived ');
                let response = await Promise.resolve(fetch ('http://localhost:5000/signup', {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                let data = response
                console.log(data);
                setHandleData(data[0])
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
              return data[0]
            }
          }

return(
    <div>
        <Navbar/>
        <div>
        {/* {isSignedUp ? <Navigate to="/profile" replace/> : <p>{getSignupRes}</p>} */}
        { handleData == 'Fill In All Fields To Create Account' ? <h2>{'Fill In All Fields To Create Account'}</h2> : <h2>{`${handleData.msg}`}</h2>}
        </div>
        <div>
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
                    <button onClick={getSignup} >Signup</button>
            </form>
                    <button><Link to={'/login'}>Already Have An Account?</Link></button>  
        </div>
        <Footer/>
    </div>
)}