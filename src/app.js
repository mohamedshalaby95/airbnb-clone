
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer/footer'


const App=() =>{
   return(
    <div> 
        <Router >
              <Switch>
                <Route exact  path='/' component={Home} />
                
              </Switch>
              <Footer />
        </Router>
        
    </div>
   )
}
export default App;