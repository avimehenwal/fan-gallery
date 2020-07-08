<template>
  <div>
    <v-row>
      <v-col cols="12" xs="6" sm="6" md="3">
        <Tile
          :ban="ghUser.public_repos"
          color="light-blue darken-4"
          desc="Public Repositories"
          banClass="display-4 text-center grey--text text--lighten-4 font-weight-regular"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <Tile
          :ban="ghUser.public_gists"
          desc="Public Gists"
          banClass="display-4 text-center blue--text text--lighten-3"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <Tile
          :ban="ghUser.followers"
          desc="Public Followers"
          banClass="display-4 text-center red--text text--lighten-3"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <Tile
          :ban="ghUser.following"
          desc="Public Following"
          banClass="display-4 text-center green--text text--lighten-3"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="7">
        <v-card outlined right max-height="600">
          <v-card-title>
            Commit Activity
          </v-card-title>
          <v-card-text>
            <BarChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="5">
        <v-card outlined max-height="600">
          <v-card-title>
            Project contributor(s)
          </v-card-title>
          <v-card-subtitle>
            Number of people contributing to the project, with the volume of contributions
          </v-card-subtitle>
          <v-card-text>
            <DoughnutChart :data="doughnutChartData" :options="{ legend: { display: false }, maintainAspectRatio: false }" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment'
import DoughnutChart from '~/components/doughnut-chart'
import BarChart from '~/components/bar-chart'

function isBot (username) {
  return username.includes('[bot]') || username.includes('-bot')
}

function getRandomColor () {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default {
  components: {
    DoughnutChart,
    BarChart
  },
  async asyncData ({ $http, env }) {
    let contributors = await $http.$get('https://api.github.com/repos/avimehenwal/fan-gallery/contributors', {
      headers: {
        Authorization: `token ${env.githubToken}`
      }
    })
    const stats = await $http.$get('https://api.github.com/repos/avimehenwal/fan-gallery/stats/commit_activity', {
      headers: {
        Authorization: `token ${env.githubToken}`
      }
    })
    const ghUser = await $http.$get('https://api.github.com/users/avimehenwal')
    contributors = contributors.filter(c => c.contributions >= 10 && !isBot(c.login))
    return {
      barChartData: {
        labels: stats.map(stat => moment(stat.week * 1000).format('GGGG[-W]WW')),
        datasets: [
          {
            label: 'avimehenwal/fan-gallery Commit Activity',
            backgroundColor: '#41B38A',
            data: stats.map(stat => stat.total)
          }
        ]
      },
      doughnutChartData: {
        labels: contributors.map(c => c.login),
        datasets: [
          {
            label: 'Nuxt.js Contributors',
            backgroundColor: contributors.map(getRandomColor),
            data: contributors.map(c => c.contributions)
          }
        ]
      },
      ghUser
    }
  },
  data: () => ({
    cards: 4
  })
}
</script>

<style scoped>
/* .doughnut-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
}
.bar-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
} */
</style>
