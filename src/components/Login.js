import React,{ useState }  from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./MainLogo.png";
import bg_img from "./background.jpg";

const Login = () => {
  const history = useNavigate()
  
  const [inpval, setInpval] = useState({
   
    email: "",
    
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr =localStorage.getItem("useryoutube")
    console.log(getuserArr);
    const { email,  password } = inpval;

    
    if (email === "") {
      alert("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address", {
        position: "top-center",
      });
    
    } else if (password === "") {
      alert("Password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      alert("Password length must be greater than five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length){

        const userdata =JSON.parse(getuserArr);
        const userlogin =userdata.filter((el,k)=>{
          return el.email === email && el.password ===password
        });
       if (userlogin.length === 0){
        alert("invalid details")
       }else{
        console.log("User login successfully")
        history("/home")
       }
      }
    }
  };
  return (
    <>
    <div className="bg_img"
     style={{
      backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${bg_img})`}}>
      {/*<section className="Login_section"> */}

        <div className="login_box">
        <img src={logo} alt="logo" />
          <Form>
          <h1 className="Login_heading">Login</h1>  

            <Form.Group className="Login_email" >
              <Form.Control className="Login_email_box" type="email"  name="email"  onChange={getdata} placeholder="Enter email" />
            </Form.Group>

            

            <Form.Group className="login_password" >
              <Form.Control className="login_password_box" type="password"  name="password" onChange={getdata} placeholder="Password" />
            </Form.Group>

            <Button
              variant="primary"
              className="Login_button"
              onClick={addData}
              type="submit"
            >
              Submit
            </Button>
           <Link to={"/"}> <Button
              // variant="primary"
              className="Home_button"
              // onClick={addData}
              // type="submit"
            >
              Home
            </Button></Link>
           
          </Form>
          
          <p className='signup_link'>Don't have an account? <Link to="/signin"><span>SignUp</span></Link> </p>
          
        </div>
        <SIgn_img />
      {/* </section>*/}
    </div>
  </>
  )
}

export default Login