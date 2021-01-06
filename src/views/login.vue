<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model.lazy="$v.input.username.$model" placeholder="Username" />
        <p class="error" v-if="!$v.input.username.$invalid">This field is required</p>
        <p class="error" v-if="!$v.input.username.minLength">Field must have at least {{ $v.input.username.$params.minLength.min }} characters.</p>
    
        <input type="password" name="password" v-model.lazy="$v.input.password.$model" placeholder="Password" />
        <p class="error" v-if="!$v.input.password.$invalid">This field is required</p>
        <p class="error" v-if="!$v.input.password.strongPassword">Strong passwords need to have a letter, a number, a special character, and be more than 4 characters long.</p>

        <button type="button" @click="login()">Login</button>
       <base-modal v-if="isShowModal"/>
    </div>
     
</template>

<script>

import BaseModal from "../components/BaseModal";
import { required, minLength } from 'vuelidate/lib/validators'

    export default {
     components: {BaseModal},
        name: 'Login',
        data() {
                
            return {
                isShowModal: false,
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        validations: { 
            input: {
                username: {
                    required,
                        minLength: minLength(2) 
                },
                password: {
                    required,
                    strongPassword(password) {
                        return(
                            /[a-z]/.test(password) && // check for a-z
                            /[0-9]/.test(password) && // check for 0-9
                            /\W|_/.test(password) && // check for special characters
                            password.length >= 4
                        );
                    }
                },
            }
        },
        methods: {
           showModal() {
                this.isShowModal= true;
            },
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                       // this.$emit("authenticated", true);
                        this.$parent.authenticated = true;
                        this.$router.replace({ name: "secure" });
                    } else {
                        this.showModal();
                       // alert("The username and / or password is incorrect");
                    }
                } else {
                    this.showModal();
                }
            }
        }
    }
</script>

<style scoped>
.error {
  color: red;
  font-size: 9px;
  text-transform: lowercase;

  }
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>