<template>
    <div class="card mx-auto mt-5" style="max-width: 500px;">
        <div class="card-header">
            <h3 class="card-title text-center">Form Fill</h3>
        </div>
        <div class="card-body">
            <form @submit.prevent="signup">
                <div class="form-group">
                    <label for="fullname">Full name</label>
                    <input type="text" class="form-control" id="fullname" v-model="fullname" placeholder="Enter Fullname">
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="phone">Phone number</label>
                    <input type="number" class="form-control" id="phone" v-model="phone" placeholder="Enter phone number">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter your Password">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="terms" v-model="terms" value="terms">
                    <label class="form-check-label" for="terms">I agree to the <a href="#">terms and condition</a></label>
                </div>
                <button class="btn btn-primary btn-block" :disabled="!terms">Sign up</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullname: '',
            email: '',
            phone: '',
            password: '',
            terms: false
        }
    },
    methods: {
        signup() {
            const user = {
                Fullname: this.fullname,
                Email: this.email,
                Phone: this.phone,
                Password: this.password
            };
            // localStorage.setItem('user', JSON.stringify(user));
            // console.log('User data saved to local storage:', user);
            this.$router.push('/dashboard');
            console.log(user);
        }
    }
}
</script>

<style scoped>
.card {
    margin-top: 50px;
}
</style>
