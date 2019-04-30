import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rateObjects: null,
      base: null,
      chosenRate: null,
      amountInEuros: null
    },


    methods: {
      fetchExchangeInfo: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.rateObjects = data.rates
          this.base = data.base
        });
      }
    },

    computed: {
      calculatedAmount: function() {
        return this.amountInEuros * this.chosenRate;
      }

    },


    mounted() {
      this.fetchExchangeInfo();
    }
  })
});
