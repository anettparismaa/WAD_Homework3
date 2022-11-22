<template>
    <div class="signup">
      <div id="login">
        <br>
            
            <form action="index.html">
                <p>Email: </p>
                <input type="email" name="Email" placeholder="Email" required><br>
                <p>Password: </p>
                <input type="password" placeholder="Password" required><br>
                <input type="submit" class="login" value="Singup"><br>
            </form>
        </div>
    </div>
</template>
<style scoped>
  .signup {
    display: inline-block;
    width: 50%;
    align-items: center;
    padding-top: 5%;
  }

  #login {
    background-color: rgba(85, 85, 85, 0.502);
    overflow: hidden;
  }
  .login {
    margin-top: 1%;
    margin-bottom: 2%;
  }

  input{
    box-sizing: border-box;
    max-width: 100%;
  }

  p{
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    font-weight: bold;
  }
</style>