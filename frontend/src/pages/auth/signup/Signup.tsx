// import { AuthWrapper } from "../Signup.styles";
// import Navbar from "../../../Layouts/Navbar/Navbar";
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { ImFlag } from "react-icons/im";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useRef } from "react";
// import { UserType } from "../../../utils/Types";
// import React from "react";
// import useUploadImage from "../../../hooks/UploadImage";
// import { BiSolidUser } from "react-icons/bi";
// import { createUserApi } from "../../../utils/api";
// import useAlert from "../../../hooks/useAlert";
// import { FaPhone } from "react-icons/fa";

// const Signup = () => {
//   const [signupData, setsignupData] = useState<UserType>({
//     username: "",
//     email: "",
//     password: "",
//     profileImg: "",
//     country: "",
//     phone: "",
//   });
//   const [profileFile, setProfileFile] = useState<null | File>(null);
//   const { upload } = useUploadImage();
//   const navigate = useNavigate();
//   const fileRef = useRef<HTMLInputElement | null>(null);

//   const { notify } = useAlert();

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     let { value, name, files } = event.target;

//     if (name === "image") {
//       if (files) {
//         setProfileFile(files[0]);
//       }
//       return;
//     }

//     setsignupData((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const handleSubmit = (e: React.SyntheticEvent) => {
//     e.preventDefault();

//     if (!profileFile) {
//       alert("image should be provided ");
//     } else {
//       upload(profileFile, async (_, url) => {
//         try {
//           if (url) {
//             const { data, status } = await createUserApi({
//               ...signupData,
//               profileImg: url,
//             });

//             if (status == 200) {
//               notify("verfication code is sent to your email  .", "success");

//               navigate("/account/email-confirm", {
//                 state: { email: signupData.email, code: data.message.code },
//               });
//             } else {
//               throw data.message;
//             }
//           }
//         } catch (error) {
//           // alert(error)
//           notify("Sign up failed ", "error");
//           console.log(error);
//         }
//       });
//     }
//   };

//   return (
//     <AuthWrapper>
//       <Navbar />
//       <div className="authContainer">
//         <form onSubmit={handleSubmit} className="form_container">
//           <div className="formHeader">
//             <img
//               width="50"
//               height="50"
//               src="https://img.icons8.com/3d-fluency/94/unlock-2.png"
//               alt="unlock-2"
//             />
//             <h2 className="headerText">GET REGISTERED </h2>
//           </div>

//           <div className="form_content">
//             <div className="input_item">
//               <BiSolidUser />
//               <input
//                 type="text"
//                 name="username"
//                 id=""
//                 placeholder="Username"
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input_item">
//               <MdEmail />
//               <input
//                 type="email"
//                 name="email"
//                 id=""
//                 placeholder="Email Address"
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input_item">
//               <ImFlag />
//               <input
//                 type="text"
//                 name="country"
//                 id=""
//                 placeholder="Country"
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="input_item">
//                 <FaPhone />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//             <div className="input_item">
//               <RiLockPasswordFill />
//               <input
//                 type="password"
//                 name="password"
//                 id=""
//                 placeholder="Password"
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input_item">
//               <RiLockPasswordFill />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 id=""
//                 placeholder="Retype Password"
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           <input
//             required
//             type="file"
//             name="image"
//             id=""
//             style={{ display: "none" }}
//             ref={fileRef}
//             onChange={handleInputChange}
//           />
//           <div
//             className="uploadImageButton"
//             onClick={() => fileRef.current?.click()}
//           >
//             Upload Profile Image
//           </div>
//           <button type="submit">Register</button>

//           <div className="login_bottom">
//             <Link to={"/login"}>
//               <p className="accountText">Already have account?</p>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </AuthWrapper>
//   );
// };

// export default Signup;

// import { SignUp } from "@clerk/clerk-react";

// export default function Signup() {
//   return <SignUp />;
// }
