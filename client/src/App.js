import React from "react"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './custom.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Loading from './components/Loading'
import Gallery from './components/Gallery'
import IndSpringDetail from './components/IndSpringDetail'
import Profile from "./components/Profile";
import Profile1 from "./components/Profile1";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import RestAPI from "./components/RestAPI";

export default function App() {
      // initiate loading state for loading the page
      const [loading, setLoading] = React.useState(true);

      // initiate hotspringdata as an array
      const [allHotSpringData, setAllHotSpringData] = React.useState([]);

      // initiate  HotSpring data object, which will be used to store the api data into a more
      // managable object/state
      let[hotSpringDataObject, setHotSpringDataObject] = React.useState([
        {name: '',id: null,image:''}, {name: '',id: null,image:''}, 
        {name: '',id: null,image:''}, {name: '',id: null,image:''}, 
        {name: '',id: null,image:''},
        {name: '',id: null,image:''}, {name: '',id: null,image:''}, 
        {name: '',id: null,image:''}, {name: '',id: null,image:''}, 
  ])

  // STATES
    let [allHotSpringNames, setAllHotSpringNames] = React.useState([])
    let [userLatLng, setUserLatLng] = React.useState()
    let [fiveCloseHS, setFiveCloseHS] = React.useState()
    let [signalForCurrUser, setSignalForCurrUser] = React.useState(false)

    const [currUser, setCurrUser] = React.useState({
      _id:"",
      id:"",
      userName: '',
    })

  // initial hotspring FETCH
    const fetchHotSpring = async () => {
      try{
          // here we use promise all to promise the entire array rawHotSpringAPIData
          // set the state AllHotSpringData using the function
          const allHotSpringData = await Promise.resolve(
              fetch('https://west-coast-hot-springs-api-5czk.onrender.com/hotspringdbinfo').then((res) => res.json()))            
          setAllHotSpringData(allHotSpringData)
          const allHotSpringDataNames = 
          allHotSpringData.map((thing, index) => ({ id: index, name: thing.name}))                           
              setAllHotSpringNames(allHotSpringDataNames); 
          // turn off loading compnene
          setLoading(false);
      }   catch (error) {
          console.log(error);
      }
  }

// USE EFFECTS
  React.useEffect(() => {
      fetchHotSpring()
    }, []);  

  React.useEffect(() => {
      if (allHotSpringData.length>0) {
        getRandomHotSpringInfo()
      }
  }, [allHotSpringData]);

  React.useEffect(() => {
    saveUserInfo()
     },[signalForCurrUser]);

  //   loading true, make loading comp run
  if (loading) {
  return <Loading />;
  }


// FUNCTIONS

  // function acquire random hot spring data
  function randomHotSpring() {
    return allHotSpringData[Math.floor(Math.random()*allHotSpringData.length)]
  }

// set 9 random hotspring data sset into array
  function getRandomHotSpringInfo(){
    let hotspringarr =[]
    for (let i = 0; i < 9; i++) {
      hotspringarr.push(randomHotSpring())
      
    }
  // adding the 9 datasets to state for display
    setHotSpringDataObject(prevSpringInfo => ([
      {
        name: hotspringarr[0].name,
        id: hotspringarr[0]._id,
        image: hotspringarr[0].image, 
    },
      {
        name: hotspringarr[1].name,
        image: hotspringarr[1].image, 
        id: hotspringarr[1]._id,
    },
      {
        name: hotspringarr[2].name,
        image: hotspringarr[2].image, 
        id: hotspringarr[2]._id,
    },
      {
        name: hotspringarr[3].name,
        image: hotspringarr[3].image, 
        id: hotspringarr[3]._id,
    },
      {
        name: hotspringarr[4].name,
        image: hotspringarr[4].image, 
        id: hotspringarr[4]._id,
    },
      {
         name: hotspringarr[5].name,
        image: hotspringarr[5].image, 
        id: hotspringarr[5]._id,
    },
      {
        name: hotspringarr[6].name,
        image: hotspringarr[6].image, 
        id: hotspringarr[6]._id,
    },
      {
        name: hotspringarr[7].name,
        image: hotspringarr[7].image, 
        id: hotspringarr[7]._id,
    },
      {
        name: hotspringarr[8].name,
        image: hotspringarr[8].image, 
        id: hotspringarr[8]._id,
    }
  ]))
  }

  // check if we have a user logged in
  function saveUserInfo() {
    if(!localStorage.getItem('currUser')){
      return currUser
    }
    else{
    const saved = localStorage.getItem("currUser");
    const initialValue = JSON.parse(saved);
    setCurrUser(initialValue)}
}

// signal is used as a truthy check
function signal(){
  setSignalForCurrUser(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true ) 
}
let sorted = allHotSpringData.sort((a,b) => b.likes-a.likes)

  return (
    <body className="boxed">
    <div className="body">
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home 
            currUser={currUser}
            hotSpringDataObject={hotSpringDataObject} 
            allHotSpringData ={allHotSpringData}
            />}
            />
            <Route path='/gallery' element={<Gallery allHotSpringData ={allHotSpringData}  currUser={currUser} />} />
            <Route path='/contact' element={<Contact allHotSpringData ={allHotSpringData}  currUser={currUser} />} />
            <Route path='/sitedetail/:id' element={<IndSpringDetail allHotSpringData ={allHotSpringData} currUser={currUser} signal={signal}  />} />
            <Route path='/profile1' element={<Profile1 allHotSpringData ={allHotSpringData} />} />
            <Route path='/profile/:id' element={<Profile allHotSpringData ={allHotSpringData} currUser={currUser}/>} />
            <Route path='/login' element={<Login allHotSpringData ={allHotSpringData} signal={signal} currUser={currUser} />} />
            <Route path='/signup' element={<Signup allHotSpringData ={allHotSpringData} signal={signal} currUser={currUser} />} />
            <Route path='/RestAPI' element={<RestAPI allHotSpringData ={allHotSpringData} signal={signal} currUser={currUser} />} />
        </Routes>
    </BrowserRouter>
    </div>
</body>
  );
}


//unused but in works, used to get users lat and long and display closest hot springs
    // was causing errors

    // function getLongAndLat() {
    //   return new Promise((resolve, reject) =>
    //       navigator.geolocation.getCurrentPosition(resolve, reject)
    //   )}
    // async function currLatLng() {
    //   let pos = await getLongAndLat();
    //   let latLng = {  }
    //   latLng.lng = pos.coords.longitude;
    //   latLng.lat = pos.coords.latitude;
    //   setUserLatLng(latLng)
    //   return latLng
    // }
  //   const getFive = async () => {
  //     let latLng = await currLatLng()
  //     try{let response = await Promise.resolve(fetch ('https://west-coast-hot-springs-api-5czk.onrender.com/findNearest', {
  //       method: 'post', body: JSON.stringify(latLng),
  //       headers: { 'Content-Type': 'application/json' }
  //     }).then((res) => res.json()))
  //     let data = response
  //     setFiveCloseHS([data[0], data[1], data[2], data[3], data[4]])
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }