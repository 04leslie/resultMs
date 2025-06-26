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
         <h1 style={{textAlign:'center', color:'#343a40'}}> Login</h1>
        
          <form action="" method="post">
            <label for="">Matricule:</label><br/>
            <input class="input" name="email" type="text" /><br/>
            <input type="submit" name="submit" value="Login" class="button"/><br />

          </form>
    </div>
  )
}

export default Login