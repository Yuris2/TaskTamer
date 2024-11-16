import "./index.css"
import OpenAILogo from './assets/openailogo.svg';


function Navbar() {
    return (
        <div className = "navBar">
            TaskTamerAI
            <div className = "openAIWrap">
                <img id = "openailogo" src = {OpenAILogo}/>
                <div id = "openaicaption">Powered By OpenAI</div>

            </div>
        </div>
    );

}

export default Navbar