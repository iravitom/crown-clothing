import { useEffect, Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import { SignInAndSingUp } from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import { Header } from "./components/header/header.component";
import { auth, db, getusers } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSuscribeFromAuth = null;

  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      getusers(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSuscribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}></Header>
        <Routes>
          <Route path="/signIn" element={<SignInAndSingUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
