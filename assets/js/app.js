/**
 * DESCRIZIONE:
 * Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 * 
 * Bonus
 * Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

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
            loading: false,
            areAllEmais: false,
            N_MAILS: 20,
        }
    },
    methods: {
        getEmails() {
            this.resetParamEmails();
            for (let i = 0; i < this.N_MAILS; i++) {
                axios
                    .get(this.urlEmail)
                    .then(response => {
                        const email = response.data.response
                        this.emails.push(email);
                        this.isTheLastEmail()
                    }).catch(error => { console.error(error.message) })
            }
        },

        resetParamEmails() {
            this.loading = true;
            this.areAllEmais = false
            this.emails = [];
        },

        isTheLastEmail() {
            if (this.emails.length === this.N_MAILS) {
                this.loading = false;
                this.areAllEmais = true
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