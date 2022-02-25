<template>
  <div class="">
    <h3>Auto Group Column Def</h3>
   <div style="border-radius: 20px; overflow:hidden;">
      <ag-grid-vue style="width: 100%; height: 200px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :autoGroupColumnDef="autoGroupColumnDef"
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
      columnApi: null,
      autoGroupColumnDef: null
    }
  },
  computed: {
    ...mapGetters({ cores: 'getCores' })
  },
  methods: {
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
    this.autoGroupColumnDef = {
      headerName: 'Core',
      field: 'core',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true
      }
    }

    this.columnDefs = [
      { field: 'core', sortable: true, filter: true, rowGroup: true },
      { field: 'flight' },
      { field: 'gridfins' },
      { field: 'landing_attempt' },
      { field: 'landing_success' },
      { field: 'landing_type' },
      { field: 'landpad' },
      { field: 'legs' },
      { field: 'reused' }
    ]

    this.setDataRow()
  }
}
</script>
