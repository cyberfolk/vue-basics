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
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [],
        }
    },
    methods: {
        getEmails() {
            for (let i = 0; i < N_MAIL; i++) {
                axios
                    .get(this.url)
                    .then(response => {
                        const email = response.data.response
                        this.emails.push(email);
                    }).catch(error => { console.error(error.message) })
            }
        },
    },
    mounted() {
        this.getEmails();
    }



}).mount('#app')