const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // lastName: '',
      confirmedName: '',
      fullname: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullname === '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname === '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // },
  },
  methods: {
    outputFullName() {
      return this.name + ' ' + 'Wright';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
