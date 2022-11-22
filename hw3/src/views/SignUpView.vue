<template>
	<div class="signup">
		<div id="login" v-cloak>

      <h2>Sign up</h2>
       <form action="index.html">
                <input type="email" name="Email" placeholder="Email" required><br>
                <div class="password">
  <input :class='{valid:passwordValidation.valid}' :type="passwordVisible ? 'text' :  'password'" v-model="password" pattern="^(?=.*_)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$_!%*?&])[A-Za-z\d@$_!%*?&]{8,15}$" placeholder="Password" required></div>

                <br><input type="submit" class="login" value="Sign up"><br>
            </form>

			<transition name="req" appear>
				<div v-if='passwordValidation.errors.length > 0 && !submitted' class='req'>
					<h3>Requirements</h3>
					<p v-for='error in passwordValidation.errors' :key="error">{{ error }}</p>
				</div>
			</transition>
		</div>

	</div>
</template>
<style scoped>
.signup {
	margin-inline: auto;
}

h2 {
	margin-top: 0;
}

#login {
  background-color: rgb(152, 152, 152);
  max-width:600px;
  border-radius: 2%;
  min-width: 30vw;
}

.req {
  align-self: center;
	max-width:400px;
	padding:1em;
	margin: 1em 0;
	font-size: .9em;
	color:darken(#D4DEDF, 50%);
  display: inline-block;
}

input{
  box-sizing: border-box;
  max-width: 100%;
}

.req {
	max-width: 400px;
	padding: 1em;
	margin: 0 auto;
	font-size: .9em;
	color:darken(#D4DEDF, 50%);
  	align-items: center;
	width: 100%;
    box-sizing: border-box;
}
</style>

<script>
export default {
	el: "#login",
	data() {
		return {
			rules: [
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum, 15 max", regex:/.{8,15}/ },
				{ message:"One number required.", regex:/[0-9]+/ },
        		{ message:"_ required.", regex:/^(?=.*_)+/ },
        		{ message:"First letter uppercase", regex:/^[A-Z]/}
			],
			password: '',
			checkPassword: '',
			submitted: false
		}
	},

	computed: {
		passwordValidation() {
			let errors = []
			for (let condition of this.rules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message)
				}
			}
			if (errors.length === 0) {
				return { valid: true, errors }
			} else {
				return { valid: false, errors }
			}
		}
	}
}

</script>