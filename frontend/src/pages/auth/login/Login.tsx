// import React, { useState } from 'react'
// import {RiLockPasswordFill} from "react-icons/ri"
// import {MdEmail} from "react-icons/md"
// import Navbar from '../../../Layouts/Navbar/Navbar'
// import { LoginWrapper } from './login.styles'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginApi } from '../../../utils/api'
// import { useDispatch } from 'react-redux'
// import {bindActionCreators} from "redux"
// import { UserType } from '../../../utils/Types'
// import { actionCreators } from '../../../redux'
// import useAlert from '../../../hooks/useAlert'

// const Login = () => {
//   const [loginData,setLoginData] = useState({
//     email:"",
//     password:""

//   })
//   const navigate =useNavigate()
//   const dispatch =useDispatch()
//   const {AddUserAction} = bindActionCreators(actionCreators,dispatch);
//   const {notify} = useAlert()

//   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

//   const {name,value} = e.target;
//   setLoginData(prev=>({
//     ...prev, [name]:value
//   }))
// }
// const handleSubmit=async(e:React.SyntheticEvent)=>{

// e.preventDefault()
// try {
//   const {data,status} = await loginApi(loginData)
//   if(status===200){
//     const userPayload:UserType = data.message;
//     AddUserAction(userPayload);
//     localStorage.setItem("user", JSON.stringify(userPayload));
//     notify("Login successfull !!" ,"success")
//     navigate("/");
//   }
//   else {
//     notify(data.message, "error");
//   }
// } catch (error) {
//   console.log(error);
//       notify("Login failed" ,"error")
// }

// }

//   return (
//     <LoginWrapper>
//       <Navbar/>
//       <div className="authContainer">
//         <form   className='form_content' onSubmit={handleSubmit}>
//           <div className="formHeader">
//       <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/unlock-2.png" alt="unlock-2"/>
//           <h2 className='headerText'>GET LOGGED IN </h2>
//           </div>
//           <div className="input_item">
//             <MdEmail/>
//           <input type="email" name="email"  placeholder='Email address'  onChange={handleChange} required/>
//           </div>
//           <div className="input_item">
//             <RiLockPasswordFill/>
//           <input type="password" name="password"  placeholder='Account Password' onChange={handleChange} required/>
//           </div>
//           <button type="submit">Login</button>
//           <div className='login_bottom'>
//             <Link  to={"/signup"}>
//             <p className='accountText'>Not Registered Yet?</p>
//             </Link>
//             <Link  to={"/account/sentResetLink"}>
//             <p className='accountText'>Forgot password?</p>
//             </Link>

//           </div>
//         </form>
//       </div>
//     </LoginWrapper>
//   )
// }

// export default Login

// import { SignIn } from "@clerk/clerk-react";

// export default function Login() {
//   return <SignIn />;
// }
