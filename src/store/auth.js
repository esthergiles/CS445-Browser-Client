import axios from 'axios'

export default createStore({
    namespaced: true,
    state: {
        token: null, // if any
        user: null,
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data
        }
    },
    actions: {
        async signIn(_, credentials) {
            let response = await axios.post('users/login', credentials)
        },

        async attempt({ commit }, token) {
            try {
                let response = await axios.get('users/')
                commit('SET_USER', user)
            } catch (e) {
                commit('SET_USER', null)
            }
        },

        async loginPerform() {
            var loginData = {
                username: this.username,
                password: this.password,
            };
            // console.log(loginData);

            // var self = this;
            axios.post("users/login", loginData).then((data) => {
                console.log(data);

                // self.$cookies.set('username', data.data.data.username);
                // self.$cookies.set('role', data.data.data.role);

                if (data.data.errorCode == 200) {
                    let userRole = data.data.data.role;
                    if (userRole == "ADMIN TUTOR" || userRole == "admin")
                        router.push("/admin");
                    if (userRole == "STUDENT" || userRole == "student")
                        router.push("/student");
                    if (userRole == "FACULTY" || userRole == "faculty")
                        router.push("/faculty");
                    if (
                        userRole == "TUTOR" ||
                        userRole == "tutor" ||
                        userRole == "TUTOR ADMIN"
                    )
                        router.push("/tutor");
                } else alert(data.data.message);
            });
        },
    },
    modules: {
    }
})