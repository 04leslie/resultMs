import React from 'react'

const submit = () =>{
    
  }
function Login() {
  return (
    <div className='form'>
         <h1> Login</h1>
        <p className='p'>Enter Your Matricule To Be Verified!</p>
    
        <form action="" method="post">

          <label for="">Matricule:</label><br/>
          <input class="input" name="email" type="text" placeholder=" e.g. SWE22UB013" /><br/>
          <label for="">Password:</label><br/>
          <input class="input" name="password" type="password" /><br/>

          <input type="submit" name="submit" value="Login" class="button"/>

          <p>Admin doesnot have an account? <Link to='/register'>Click to Register!</Link></p>
        </form>
    </div>
  )
}

export default Login