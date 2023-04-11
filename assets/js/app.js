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
            url: "https://flynn.boolean.careers/exercises/api/random/mail",

        }
    },
    methods: {
        getEmail() {
            axios
                .get(this.url)
                .then(response => {
                    this.my_data = response.data
                    console.log(response.data);
                    console.log(response.data.response)
                }).catch(error => { console.error(error.message) })
        }
    }
}).mount('#app')