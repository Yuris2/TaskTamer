import "./index.css"
import OpenAILogo from './assets/openailogo.svg';


function Navbar() {
    return (
        <div className = "navBar">
        TaskTamerAI
        <img src = {OpenAILogo}/>
        </div>
    );

}

export default Navbar