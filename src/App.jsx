import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Store from './components/Store';
import Appbar from './components/Appbar/Appbar';
import User from './components/User';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Appbar/>
    </Router>
  );
};



export default App;