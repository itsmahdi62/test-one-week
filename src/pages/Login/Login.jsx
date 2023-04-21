import "./Login.scss"
import axios from 'axios';
import lock from "../../assets/downloadReceipt.png"
import logo from "../../assets/vector.png"
import logo1 from "../../assets/Group 2.png"
import { useState } from 'react';
const Login = ({token ,setToken}) => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
    const loginHandler = () =>{
      setError("");
      setPassword("");
      setUsername("");
      axios({
          method:"POST",
          url:"https://fakestoreapi.com/auth/login",
          data:{
              username:username,
              password:password,
          },
        }).then(response =>{
            console.log(response.data.token)
            setToken(response.data.token)
            localStorage.setItem("userToken",response.data.token)
        }).catch((err) =>{
            console.log(err.response.data)
            setError(err.response.data)
        })
  }

  return (
    <div className="main"> 
      <div className="login">
          <div className="imgDiv">
            <img src={lock} alt="" />
          </div>
          <div className="infoDiv">
              <div className="titleDiv">
                  <div className="logoDiv">
                  <img src={logo1} alt="" className="logo logoBag" />
                  <img src={logo} alt="" className="logo logoText" />
                  </div>
                  <h2>Welcome back</h2>
                  <p>A loremAoremA loremA loremA loremA loremA loremA loremA loremA loremA lorem</p>
              </div>
              <div className="form">
                <div className="username">
                  <label>Username</label>
                  <input type="text"  value={username} onChange={(e) =>setUsername(e.target.value)} />
                </div>
                <div className="password">
                  <label>password</label>
                  <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <div className="btn">
                  {error && <small>{('Wrong username or password')}</small>}
                  <button onClick={loginHandler}>Login</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;