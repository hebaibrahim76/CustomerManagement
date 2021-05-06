//import logo from './logo.svg';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import Form from './components/Form';
import Footer from './components/Footer';
import Shopping from './components/Shopping';
import User from './components/User';
import Order from './components/Order';
import Login from './components/Login';
function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Route
          path='/'
          exact
          render={(props) => (
            <>
          <Login></Login>
            </>
          )}
        />
        
        
        <Route path='/form' exact component={Form} />
        
        <Route path='/shopping/:id?' exact component={Shopping} />
        <Route path='/user/:id' exact  component={User} />
        <Route path='/user/orders/:id' exact component={Order} />
         {window.name == 0 &&
          <Route path='/users' exact component={Users} />
       }
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
