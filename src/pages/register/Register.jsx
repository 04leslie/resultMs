import React from 'react'

function Register() {
  return (
    <div className='form'>
         <h1> Register</h1>
        <p className='p'>Create an account to manage the system</p>
    
        <form action="" method="post">

            <label for="">Name:</label><br/>
            <input class="input" name="email" type="text" placeholder=" e.g. SWE22UB013" /><br/>
            <label for="">Password:</label><br/>
            <input class="input" name="password" type="password" /><br/>
            <label for="">Confirm Password:</label><br/>
            <input class="input" name="password" type="password" /><br/>

            <input type="submit" name="submit" value="Register" class="button"/>
        </form>
    </div>
  )
}

export default Register