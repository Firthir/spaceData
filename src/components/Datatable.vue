<template>
  <div class="">
    <a @click="getSelectedRows">Get selected rows</a>
   <div style="border-radius: 20px; overflow:hidden;">
      <ag-grid-vue style="width: 100%; height: 400px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        rowSelection="multiple"
        ref="agGrid"
        @grid-ready="onGridReady"
        />
   </div>
   </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AgGridVue
  },
  data () {
    return {
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null
    }
  },
  computed: {
    ...mapGetters({ cores: 'getCores' })
  },
  methods: {
    getSelectedRows () {
      const selectedNodes = this.gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map((node) => node.data)
      console.log(selectedData)
      const selectedDataStringPresentation = selectedData
        .map((node) => `Core ${node.core}`)
        .join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    },
    onGridReady (params) {
      this.gridApi = params.api
      this.gridColumnApi = params.columnApi
    },
    setDataRow () {
      this.rowData = this.cores.map((core) => {
        return {
          core: core.core,
          flight: core.flight,
          gridfins: core.gridfins,
          landing_attempt: core.landing_attempt,
          landing_success: core.landing_success,
          landing_type: core.landing_type,
          landpad: core.landpad,
          legs: core.legs,
          reused: core.reused
        }
      })
    }
  },
  beforeMount () {
    this.setDataRow()
    this.columnDefs = [
      { field: 'core', sortable: true, filter: true, checkboxSelection: true },
      { field: 'flight' },
      { field: 'gridfins' },
      { field: 'landing_attempt' },
      { field: 'landing_success' },
      { field: 'landing_type' },
      { field: 'landpad' },
      { field: 'legs' },
      { field: 'reused' }
    ]
  }
}
</script>
