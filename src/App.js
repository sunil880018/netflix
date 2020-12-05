import { Route } from 'react-router-dom';
import Homescreen from './Homescreen';
import Moviescreen from './Moviescreen';
import SignIn from './SignIn';
import SignUp from './SignUp';
function App() {
  return (
    <>
      <Route path="/netflix" exact={true} component={Homescreen}/>
      <Route path="/SignUp/" exact={true} component={SignUp}/>
      <Route path="/SignIn/" exact={true} component={SignIn}/>
      <Route path="/movielist/" exact={true} component={Moviescreen}/>
    </>
  );
}

export default App;
