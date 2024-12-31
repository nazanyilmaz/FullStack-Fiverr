import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Footer from "./components/footer";
import Search from "./pages/search";
import AddGig from "./pages/addGig";
import Detail from "./pages/detail";
import Mygigs from "./pages/myGigs";
import Protected from "./components/protected";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-5 max w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />

          <Route element={<Protected />}>
            <Route path="/add-gig" element={<AddGig />} />
            <Route path="/my-gigs" element={<Mygigs />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
