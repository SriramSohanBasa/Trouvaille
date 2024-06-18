// import React, { useState, useContext } from "react";
// import { GoogleLogin } from 'react-google-login';
// import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/login.css";

// import registerImg from "../assets/images/register.png";
// import userIcon from "../assets/images/user.png";

// import { AuthContext } from "./../context/AuthContext";
// import { BASE_URL } from "./../utils/config";

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     userName: undefined,
//     email: undefined,
//     password: undefined,
//   });

//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async e => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`${BASE_URL}/auth/register`, {
//         method: "post",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });

//       const result = await res.json();

//       if (!res.ok) alert(result.message);

//       dispatch({ type: "REGISTER_SUCCESS" });
//       navigate("/login");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleGoogleSuccess = async (response) => {
//     try {
//       const res = await fetch(`${BASE_URL}/auth/google-login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ tokenId: response.tokenId }),
//       });
  
//       const data = await res.json();
//       if (res.ok) {
//         // Handle successful login (e.g., dispatch action, navigate)
//       } else {
//         // Handle errors
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error during Google login:', error);
//     }
//   };
  

//   const handleGoogleFailure = (response) => {
//     console.log("Google Failure: ", response);
//     // Handle the Google Login failure
//   };

//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="8" className="m-auto">
//             <div className="login__container d-flex justify-content-between">
//               <div className="login__img">
//                 <img src={registerImg} alt="" />
//               </div>

//               <div className="login__form">
//                 <div className="user">
//                   <img src={userIcon} alt="" className="user-icon"/>
//                 </div>
//                 <h2>Register</h2>

//                 <Form onSubmit={handleClick}>
//                   <FormGroup>
//                     <input
//                       type="text"
//                       placeholder="Username"
//                       required
//                       id="username"
//                       onChange={handleChange}
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       required
//                       id="email"
//                       onChange={handleChange}
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <input
//                       type="password"
//                       placeholder="Password"
//                       required
//                       id="password"
//                       onChange={handleChange}
//                     />
//                   </FormGroup>
//                   <Button
//                     className="btn secondary__btn auth__btn"
//                     type="submit"
//                   >
//                     Create account
//                   </Button>
//                 </Form>

//                 <p>
//                   Already have an account? <Link to="/login">Login</Link>
//                 </p>

//                 <GoogleLogin
//                   clientId="797991752759-254e2knfaji8sv34ncp94lcb3ev1os8l.apps.googleusercontent.com"
//                   buttonText="Google"
//                   onSuccess={handleGoogleSuccess}
//                   onFailure={handleGoogleFailure}
//                   cookiePolicy={'single_host_origin'}
//                 />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Register;




import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" className="user-icon"/>
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create account
                  </Button>
                </Form>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;