
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './components/home';


const App=() =>{
   return(
    <div> 
        <Router >
              <Switch>
                <Route exact  path='/' component={Home} />
                
              </Switch>
        </Router>
    </div>
   )
}
export default App;