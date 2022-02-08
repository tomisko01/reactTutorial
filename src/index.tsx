import ReactDOM from 'react-dom';
import UserSearch from "./states/UserSearch";

const App = () => {
    return <div>
        <UserSearch/>
    </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);