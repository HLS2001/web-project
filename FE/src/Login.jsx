import { useCallback, useRef } from "react";
import axios from 'axios'

function Login() {
  const uniRef = useRef()
  const pdRef = useRef()

  const handleLogin = useCallback(async () => {
    const uni =  uniRef.current
    const pd = pdRef.current
    if(!uni || !pd ) return
    try {
      const res = await axios.post(`${import.meta.env.VITE_BE_URI}account/login`,{
        username: uni.value,
        password: pd.value
      })
      console.log(res); 
    } catch (error) {
      console.error(error);
    }
  },[])

  return (
    <div className="Login">
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Hello World.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
          </div>
        </div>

        <div className="right">
          <h5>Login</h5>

          <div className="inputs">
            <input type="text" ref={uniRef} placeholder="user name" />
            <br />
            <input type="password" ref={pdRef} placeholder="password" />
          </div>

          <br />
          <br />

          <div className="remember-me--forget-password">
            <p>forget password?</p>
          </div>

          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
    







  );
}

export default Login;
