<template>
<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Reset password</h3>
		
		<div class="card-text">
			<form>
				<div class="form-group col-md-4 col-md-offset-4 mx-auto">
					<label style="font-size:11px" for="exampleInputEmail1">Enter your email address and we will send you a link to reset your password.</label>
					<input type="email" class="form-control form-control-sm" placeholder="Enter your email address">
				</div>

				<button type="submit" class="btn btn-primary btn-block col-md-4 col-md-offset-4 mx-auto">Send password reset email</button>
			</form>
		</div>
	</div>
</div>
</template>

<style scoped>
.btn-primary {
    color: #212529;
    background-color: #db9f11;
    border-color: #db9f11;
}

.btn-primary:hover {
    color: #212529;
    background-color:#db9f11;
    border-color: #db9f11;
}

.btn-primary:focus,
.btn-primary.focus {
    box-shadow: 0 0 0 .2rem rgba(91, 194, 194, 0.5)
}
</style>