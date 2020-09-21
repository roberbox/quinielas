import React from 'react';

const Login = (props) => {
  const {logo, loginClick} = props;
  return (
    <div className="GridContainer">
      <div className="Description-container">
        <div className="Description">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="text">
            <p>Disfruta de la Champions league mientras concursas contra tus compañeros</p>
          </div>
          <div className="button">
              <button className="main-button" onClick={loginClick}>
                  Iniciar sesión
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;