<template>
    <div class="signup">
      <div id="login">
            <b>Welcome to postIt</b>
            <p>Create an account</p>
            <p>or</p>
            <p>Please log in</p>
            <form action="index.html">
                <input type="email" name="Email" placeholder="Email" required><br>
                <input type="password" placeholder="Password" required><br>
                <input type="submit" class="login" value="Log in"><br>
            </form>
            <p>Forget password</p>
        </div>
    </div>
</template>
<style scoped>
  .signup {
    display: inline-block;
    width: 40%;
    align-items: center;
    padding-top: 2%;
  }

  #login {
    background-color: rgb(152, 152, 152);
  }
</style>