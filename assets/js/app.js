/**
 * DESCRIZIONE:
 * Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 * 
 * Bonus
 * Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const N_MAIL = 10;
const { createApp } = Vue

createApp({
    data() {
        return {
            urlEmail: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [],
            numbers: [],
            numbersError: false,
            numbersErrorMex: "",
            min: 0,
            max: 0,
            items: 0,
        }
    },
    methods: {
        getEmails() {
            this.emails = [];
            for (let i = 0; i < N_MAIL; i++) {
                axios
                    .get(this.urlEmail)
                    .then(response => {
                        const email = response.data.response
                        this.emails.push(email);
                    }).catch(error => { console.error(error.message) })
            }
        },

        thereAreAllEmais() {
            if (this.emails.length == N_MAIL) {
                return true;
            } else {
                return false;
            }
        },

        getNumbers(min, max, items) {
            const urlNumbers = `https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${items}`
            axios
                .get(urlNumbers)
                .then(response => {
                    this.numbers = response.data.response;
                    this.numbersError = false;
                    this.numbersErrorMex = "";
                }).catch(error => {
                    console.error(error.message);
                    this.numbersErrorMex = error.message;
                    this.numbersError = true;
                })
        }
    },

}).mount('#app')