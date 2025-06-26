import React from 'react'
import { Link } from 'react-router-dom'

function LoginAdmin() {
  return (
    <div className='form' >
      <h1 style={{textAlign:'center', color:'#343a40'}}> Login</h1>
      <form action="" method="post">
        <label for="">Email:</label><br/>
        <input class="input" name="email" type="email" /><br/>
        <label for="">Password:</label><br/>
        <input class="input" name="password" type="password" /><br/>
        <input type="submit" name="submit" value="Login" class="button"/><br />

        <p style={{marginTop:'7px'}}>Admin doesn't have an account? <Link to='/register' style={{color:'#007bff'}}>Click to Register!</Link></p>
      </form>
    </div>

  )
}

export default LoginAdmin