

  const [formData, setFormData] = React.useState(
    {username: "",
    email: "",
    password: "",}
)

function handleChange(event) {
  setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value.toLowerCase()
      }
  })
}function handleSubmit(event) {
  event.preventDefault()
  console.log(formData)
}

    const getLogin = async () => {
        console.log('post login acheived ');
        let response = await Promise.resolve(fetch ('http://localhost:5000/login', {
          method: 'post', body: JSON.stringify(formData), //put your state from inputs/text area//),
          headers: { 'Content-Type': 'application/json' }
        }).then((res) => res.json()))
        let data = response //dont really need
        if(data.msg !== 'succesful login'){
          return data //should be msg:'strng'
        }
        else{
          // set state to true that if true it will send location
          // to their profile page
          // or set state as data that will use react redirect when data matches something
          return data
        }
      }



<div>
      <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formData.username}
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
            <button onClick={getLogin} >Login</button>
            </form>
                        <button <Link to={/Signup}>Need To Sign Up?</Link></button>
</div>