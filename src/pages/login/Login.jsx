import React from 'react'
import { Link } from 'react-router-dom'


function Login() {

  function togglePlan(){
    let selectedPlan = document.querySelector('input[name="plan"]:checked').value;

    if (selectedPlan === "student") {
      document.getElementById("student").style.display = "block"
      document.getElementById("admin").style.display = "none"
    }else {
      document.getElementById("student").style.display = "none"
      document.getElementById("admin").style.display = "block"
    }
  }
  return (
    <div className='form'>
         <h1 style={{textAlign:'center', color:'rgb(160, 4, 4)'}}> Login</h1>
        {/* <p className='p'>Enter Your Matricule To Be Verified!</p> */}
    
        <div className='query' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
          <div class="plan">
            <input type="radio" name="plan" value="student" onChange={togglePlan} /><label for="plan">As Student</label>
          </div><br/>
          <div class="plan">
            <input type="radio" name="plan" value="admin" onChange={togglePlan} /><label for="plan">As Admin</label>
          </div>
        </div><br />

        <div id="student" style={{display:'block'}}>
          <form action="" method="post">
            <label for="">Matricule:</label><br/>
            <input class="input" name="email" type="text" placeholder="SWE22UB013" /><br/>
            <input type="submit" name="submit" value="Login" class="button"/><br />

          </form>
        </div>

          <div id="admin" style={{display:'none'}}>
            <form action="" method="post">
              <label for="">Email:</label><br/>
              <input class="input" name="email" type="email" /><br/>
              <label for="">Password:</label><br/>
              <input class="input" name="password" type="password" /><br/>
              <input type="submit" name="submit" value="Login" class="button"/><br />

              <p style={{marginTop:'7px'}}>Admin doesn't have an account? <Link to='/register' style={{color:'rgb(160, 4, 4)'}}>Click to Register!</Link></p>
            </form>
            
          </div>

        
      
    </div>
  )
}

export default Login