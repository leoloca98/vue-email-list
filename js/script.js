/*

Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*/
console.log('Vue Ready', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    methods: {
        mailGenerator() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                let response = res.data.response;
                this.emails.push(response);
            });
        },
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.mailGenerator();
        };
    },
});