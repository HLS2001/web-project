function Register() {
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
  
          <div class="right">
            <h5>Register</h5>
  
            <div class="inputs">
              <input type="text" placeholder="user name" />
              <br />
              <input type="password" placeholder="password" />
            </div>
  
            <br />
            <br />
  
            <div className="remember-me--forget-password">
              <p>forget password?</p>
            </div>
  
            <br />
            <button>SignUp!</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;
  