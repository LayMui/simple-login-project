# simple-login-project
```
learning a new framework through a simple user login sample. 

Login involves many concepts, including forms, data binding, 

routing, and potentially HTTP to a remote service, all of which 

are core concepts in any web application.
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Task 2 Jan 2021 
Add custom validator for password
https://css-tricks.com/form-validation-in-under-an-hour-with-vuelidate/


# Task 3 16 Jan 2021
Need add an @close event listener in the Login.vue file
So, we can change the isShowModal value whenever user click close button.

<base-modal v-if="isShowModal" @close="showModal()"/>