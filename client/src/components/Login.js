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
    const [handleData, setHandleData] = React.useState('Please Login')
                
let navigate = useNavigate();
React.useEffect(() => {
        if (isLoggedIn==true){
           return navigate("/");
        }
     },[isLoggedIn]);
React.useEffect(() => {
    displayLogin()
     },[getLoginRes]);


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
    
        const getLogin = async () => {
            console.log('post login acheived ');
            console.log(formData);
                let response = await Promise.resolve(fetch ('http://localhost:5000/login', {
                method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
                headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json()))
                console.log(response);
                let data = response
                console.log(data);
                setHandleData(data[0])
                console.log(handleData);
                
            }
                
        function displayLogin(){
            if (handleData == {msg: 'Success! You are logged in.'}){ 
                console.log('should go to profiel');
                setIsloggedIn(true)
            }
          }
// console.log(isLoggedIn);
// console.log(handleData);
return(
    <div>
        <Navbar/>
        <div>
        { handleData == 'Please Login' ? <h2>{'Please Log In'}</h2> : <h2>{`${handleData.msg}`}</h2>}
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
                    <button onClick={getLogin}  >Login</button>
            </form>
                    <button><Link to={'/signup'}>Need To Sign Up?</Link></button>  
        </div>
        <Footer/>
    </div>
)}