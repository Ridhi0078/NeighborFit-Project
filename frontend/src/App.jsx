import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PreferenceForm from "./components/PreferencesForm";
import HomePage from "./components/HomePage";
import { useNavigate } from "react-router-dom";
import CreateNeighborhood from "./components/CreateNeighborHood";
import Choice from "./components/Choice";

const App = () => {

  const handleLogin = (user) => {
    
    console.log("User logged in:", user);
    
    //localStorage.setItem("UserId", user.id);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/preferences" element={<PreferenceForm />} />
        <Route path="/create" element={<CreateNeighborhood/>} />
        <Route path="/dashboard" element={<Choice/>} />
      </Routes>
    </Router>
  );
};

export default App;
