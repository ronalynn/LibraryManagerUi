import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListBooksComponent from './components/ListBooksComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddBookComponent from './components/AddBookComponent';
import ViewBookComponent from './components/ViewBookComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {ListBooksComponent}></Route>
            <Route path = "/books" exact component = {ListBooksComponent}></Route>
            <Route path = "/books/new/:id" exact component = {AddBookComponent}></Route>
            <Route path = "/books/:id" exact component = {ViewBookComponent}></Route>
          </Switch>
        </div>
        
        <FooterComponent/>
      </Router>
    </div>
  );
}


export default App;
