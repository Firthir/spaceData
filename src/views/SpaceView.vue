<template>
  <div class="space">
    <h1>{{launch.name}}</h1>
    <p>Flight number: {{launch.flight_number}}</p>
    <p>Star date: {{launch.date_local}}</p>
    <p>Launch Pad: {{launch.launchpad}}</p>
    <img :src="launch.links.patch.small" alt="">
    <a href="#" @click="addCurrentLaunch">Get launch codes</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchCurrentLaunch']),
    addCurrentLaunch () {
      this.fetchCurrentLaunch()
    }
  },
  computed: {
    ...mapGetters({ launch: 'getCurrentLaunch' })
  }
}
// export default {
//   methods: {
//     addCurrentLaunch () {
//       this.$store.dispatch('fetchCurrentLaunch')
//     }
//   },
//   computed: {
//     launch () {
//       return this.$store.getters.getCurrentLaunch
//     }
//   }
// }
</script>
