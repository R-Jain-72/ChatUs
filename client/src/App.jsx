import React,{ lazy } from 'react'; //lazy is used for dynamic loading 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// instead on loading all the pages we will load only the pages that is required(dynamic loading)
// so no need of importing pages one at a time
// import Home from './pages/home'; // Capitalize Home for consistent naming 

const Home = lazy(() => import('./pages/home')); //dynamic import of home
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const App = () => {
  return (
    <BrowserRouter>
      {/* <span> Header(this will be common for all routes) </span> */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Use the imported component */}
        <Route path="/login" element={<Login />} />
        <Route path="/chat/:chatId" element={<Chat />} /> {/* used for dynamic routing */}
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
