<template>
  <div class="archive">
    <p>launch codes: {{launches.name}}</p>
    <Datatable :cores="launches.cores" />
    <DatatableGrouped :cores="launches.cores" />

    <ul>

      </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Datatable from '../components/Datatable.vue'
import DatatableGrouped from '../components/DatatableGrouped.vue'
export default {
  components: {
    Datatable,
    DatatableGrouped
  },
  computed: {
    ...mapGetters({ launches: 'getCurrentLaunch' })
  }
}
</script>
