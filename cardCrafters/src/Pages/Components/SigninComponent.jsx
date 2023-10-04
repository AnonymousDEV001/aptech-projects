import React,{useState} from 'react'
import SigninComponentCss from './Css/SigninComponent.module.css'

function SigninComponent(e) {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let url = "http://127.0.0.1:8000/";
      let data = {
        "email": email,
        "password":password
      };
  
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json()) // Assuming you want to parse the response as JSON
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  
  return (
    <div className='flex'>
      <div className={SigninComponentCss.left}></div>
      <div className={SigninComponentCss.right}>
        <div>
        <h3 className='active'>Signin</h3>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='email' placeholder='Email'/>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='password' placeholder='Password'/>
            <button>Signin</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SigninComponent
