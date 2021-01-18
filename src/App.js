import { Route } from "react-router-dom";

import { MainPageContainer ,InformationContainer } from './components';

const App=()=>{

    return (
        <div className="App">
            <Route exact path={`/`} component={MainPageContainer}/>
            <Route exact path={`/overview/:empName`} component={InformationContainer}/>
        </div>
    );
}

export default App;
