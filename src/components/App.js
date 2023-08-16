
import React , {useState} from "react";

import './../styles/App.css';

const App = () => {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [isLogin,setIsLogin] =useState(false);
  const handleLogin = () =>{
    if(username!=='' && password!==''){
      setIsLogin(true);
    }
    
  }
  return (
    <div>
       <h1>
        Parent Component
       </h1>
       <div className="child">
        {isLogin ? (<p>You are Logged In !</p>)
        : (
          <form>
            <div><label>Username :</label><input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}}/></div>
            <div><label>Password :</label><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
            <button onClick={handleLogin}>Login</button>
          </form>
        )}
       </div>
    </div>
  )
}

export default App;
