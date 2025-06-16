import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AppWrapper, LoadingScreen } from "./App.styles";
import Admin from "./pages/Admin/Admin";
import Upload from "./pages/Admin/Upload/Upload";
import Work from "./pages/Admin/Upload/Work/Work";
import Tools from "./pages/Admin/Upload/Tools/Tools";
import WorkDetail from "./pages/WorkDetail/WorkDetail";
import Reviews from "./pages/Reviews/Reviews";
import Works from "./pages/Works/Works";
// import Signup from "./pages/auth/signup/Signup";
// import Login from "./pages/auth/login/Login";
import Contact from "./pages/contact/Contact";
import useSetup from "./hooks/useSetup";
import Profile from "./pages/profile/Profile";
import { Toaster } from "react-hot-toast";
import ProfileSetup from "./pages/profile/profileSetup/ProfileSetup";
// import { State } from "./redux/reducers";
// import { useSelector } from "react-redux";
import ResetLink from "./pages/auth/ResetLink/ResetLink";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import Confirmation from "./pages/auth/confirmation/Confirmation";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

function App() {
  // const { user } = useSelector((state: State) => state.user);
  const loading = useSetup();

  // console.log(user);

  if (loading) {
    return (
      <LoadingScreen>
        <div>
          {/* <div className="spinner"></div> */}
          <div className="message">Please wait, loading...</div>
        </div>
      </LoadingScreen>
    );
  }

  return (
    <>
      <Toaster />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/work/:id" element={<WorkDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/works" element={<Works />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}
            <Route path="/contact" element={<Contact />} />

            {/* Account Routes */}
            <Route path="/account">
              <Route path="profile/:userId" element={<Profile />} />
              <Route path="setup" element={<ProfileSetup />} />
              <Route path="sentResetLink" element={<ResetLink />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="email-confirm" element={<Confirmation />} />
            </Route>

            {/* Admin Routes (Protected by ProtectedAdminRoute) */}
            <Route path="/admin" element={<ProtectedAdminRoute />}>
              <Route path="" element={<Admin />} />
              <Route path="upload" element={<Upload />} />
              <Route path="upload/work" element={<Work />} />
              <Route path="upload/tool" element={<Tools />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}

export default App;
