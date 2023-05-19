import { useCallback, useRef } from "react";
import axios from 'axios'


function Register() {
  const uniRef = useRef()
  const pdRef = useRef()
  const pRef = useRef()
  const eRef = useRef()
  const adRef = useRef()
  
  const handleRegister = useCallback(async()=>{
    const uni = uniRef.current
    const pd = pdRef.current
    const p = pRef.current
    const e = eRef.current
    const ad = adRef.current
    

    if(!uni) {
        console.log('uni is und');
        return;
    }
    if(!pd) {
        console.log('pd is und');
        return;
    }
    if(!p) {
        console.log('p is und');
        return;
    }
    if(!e) {
        console.log('e is und');
        return;
    }
    if(!ad) {
        console.log('ad is und');
        return;
    }
    console.log(uni.value);
    console.log(pd.value);
    console.log(p.value);
    console.log(e.value);
    console.log(ad.value);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BE_URI}account/add`,{
        username: uni.value,
        password: pd.value,
        type: 'Customer',
        phone: p.value,
        email: e.value,
        address: ad.value
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
            <h5>Register</h5>
  
            <div className="inputs">
              <input type="text" ref={uniRef} placeholder="user name" />
              <br />
              <input type="password" ref={pdRef} placeholder="password" />
              <br/>
              <input type="text" ref={pRef} placeholder="phone"/>
              <br />
              <input type="email" ref={eRef} placeholder="email"/>
              <br />
              <input type="text" ref={adRef} placeholder="address"/>
            </div>
  
            <br />
            <br />
  
            
  
            <br />
            <br />
            <button onClick={handleRegister}>SignUp!</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;