import "./index.css"
import OpenAILogo from './assets/openai-logo.svg';


function Navbar() {
    return (
        <div className = "navBar">
            TaskTamerAI
            <div className = "openAIWrap">
                <div id = "openaicaption">Powered By</div>
                <img id = "openailogo" src = {OpenAILogo}/>


            </div>
        </div>
    );

}

export default Navbar