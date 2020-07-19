<template>
  <div>
    <v-text-field
      v-model="query"
      append-icon='mdi-magnify'
      label='Filter Cards'
      single-line
      hide-details
      clearable
      counter
    />
    {{ articles }}

    <GChart type='ColumnChart' :data='chartData' :options='chartOptions' />
    <Dot />

    <Hello />
    <!-- Form Data -->
    <v-form ref='form' v-model='valid' lazy-validation>
      <v-text-field v-model='name' :counter='10' :rules='nameRules' label='Name' required />

      <v-text-field v-model='email' :rules='emailRules' label='E-mail' required />

      <v-select
        v-model='select'
        :items='items'
        :rules='[v => !!v || 'Item is required']'
        label='Item'
        required
      />

      <v-checkbox
        v-model='checkbox'
        :rules='[v => !!v || 'You must agree to continue!']'
        label='Do you agree?'
        required
      />

      <v-btn :disabled='!valid' color='success' class='mr-4' @click='validate'>Validate</v-btn>
      <v-btn color='error' class='mr-4' @click='reset'>Reset Form</v-btn>
      <v-btn color='warning' @click='resetValidation'>Reset Validation</v-btn>
    </v-form>
  </div>
</template>

<script>
// import { sheetMixin } from '@/Mixins.js';

export default {
  // mixins: [sheetMixin],
  // async asyncData ({ $content, params }) {
  //   const animelist = await $content('animes').fetch();
  //   return { animelist };
  // },
  // created () {
  //   this.readCSVData()
  // },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('animes')
        .search('body', query)
        .fetch()
    }
  },
  data: () => ({
    query: 'Mob',
    articles: [],
    chartData: [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ],
    chartOptions: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017'
      }
    },
    SHEETPAGENUMBER: 3,
    COLUMNS: 6,
    shaped: false,
    large: false,
    grid: true,
    numCards: 4,
    numCardsValues: [1, 2, 3, 4, 5, 6],
    search: '',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async readCSVData () {
      this.articles = await this.$content('animes')
      .only(['title', 'slug', 'body'])
      .sortBy('createdAt', 'asc')
      // .limit(12)
      .search(query)
      .fetch()
    }
  }
};
</script>
