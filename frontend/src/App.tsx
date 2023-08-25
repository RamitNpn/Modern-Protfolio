import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home"
import { AppWrapper } from "./App.styles";
import Admin from "./pages/Admin/Admin";
import Upload from "./pages/Admin/Upload/Upload";
import Work from "./pages/Admin/Upload/Work/Work";
import Tools from "./pages/Admin/Upload/Tools/Tools";
import WorkDetail from "./pages/WorkDetail/WorkDetail";
import Reviews from "./pages/Reviews/Reviews";
import Works from "./pages/Works/Works";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import { useSelector } from "react-redux";
import {State} from "./redux/reducers/index"
import Contact from "./pages/contact/Contact";
import useSetup from "./hooks/useSetup"
// import 
function App() {

  // const {user} = useSelector((state:State)=>state.user)

  useSetup();
  

  
  

  return (
    <>
    <AppWrapper>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}>
        <Route  path="upload"     element={<Upload/>}>

        <Route path="work" element={<Work/>}/>
        <Route path = "tool" element={<Tools/>} />

        </Route>
      </Route>
      <Route path="/work/:id" element={<WorkDetail/>}/>
      <Route  path="/reviews" element={<Reviews/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="/login" element={<Login/>}/>  
      <Route path="/signup"  element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes> 
    </BrowserRouter>
    </AppWrapper>

    </>
  )
}

export default App
