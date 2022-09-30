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
            console.log('post login acheived ');
            console.log(formData);
                let response = await Promise.resolve(fetch ('http://localhost:5000/login', {
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
        <div className="mt-5">
        { handleData == 'Login' ? <h2>{'Log In'}</h2> : <h2>{`${handleData.msg}`}</h2>}
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
                    <button onClick={()=> {props.signal(); getLogin()}}  >Login</button>
            </form>
                    <button><Link to={'/signup'}>Need To Sign Up?</Link></button>  
        </div>
        <Footer/>
    </div>
)}