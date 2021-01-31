
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer/footer'
import SearchResult from './components/searchresult/searchResult';

const App=() =>{
   return(
    <div> 
        <Router >
              <Switch>
                <Route exact  path='/' component={Home} />
                <Route exact  path='/hosting/:location' component={SearchResult} />
              </Switch>
              {/* <Footer />  */}
        </Router>
        
    </div>
   )
}
export default App;