import './App.css';
import MainPageContainer from './components/MainPageContainer';
import InformationContainer from './components/InformationContainer'
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Route exact path={`/`} component={MainPageContainer}/>
            <Route exact path={`/overview/:empName`} component={InformationContainer}/>
        </div>
    );
}

export default App;
