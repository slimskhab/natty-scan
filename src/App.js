import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './view/pages/HomePage';
import Profile from './view/pages/profile/Profile';
import { Route,Routes,Link } from 'react-router-dom';
function App() {
  return (
    <div className="App" style={{fontFamily:"'Montserrat', sans-serif;",color:"black"}}>
   
<Routes>
  <Route path= "/" element ={<HomePage/>}  />
  <Route path= "/profile/:id" element ={<Profile/>}  />
</Routes>
   {/* <HomePage/>*/}
    
    </div>
  );
}

export default App;
