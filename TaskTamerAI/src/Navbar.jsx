import "./index.css"
import OpenAILogo from './assets/openailogo.svg';


function Navbar() {
    return (
        <div className = "navBar">
            TaskTamerAI
            <div className = "openAIWrap">
                <img id = "openailogo" src = {OpenAILogo}/>
                Powered By OpenAI
            </div>
        </div>
    );

}

export default Navbar