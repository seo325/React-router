import { withRouter } from "react-router-dom";
export default withRouter(function LoginButton(props){
    
console.log(props)
function login(){
    setTimeout(() => {
        props.history.props("/")
    }, 1000);
}
    return <button onClick={login}>로그인 하기</button>
})
