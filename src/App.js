import { Redirect, Route, Switch } from 'react-router-dom';
import Homescreen from './Homescreen';
import Moviescreen from './Moviescreen';
import SignIn from './SignIn';
import SignUp from './SignUp';
function App() {
  return (
    <>
      <Switch>
      <Route exact path="/netflix"  component={Homescreen}/>
      <Route exact path="/SignUp/" component={SignUp}/>
      <Route exact path="/SignIn/" component={SignIn}/>
      <Route exact path="/movielist/" component={Moviescreen}/>
      </Switch>
    </>
  );
}

export default App;
