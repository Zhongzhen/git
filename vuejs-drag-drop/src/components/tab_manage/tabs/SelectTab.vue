<template>
  <draggable class="list-group select-tab" v-model="selectList" :options="selectOptions" @start="isDragging=true" @end="isDragging=false">
        
    <div v-for="(element, index) in selectList" :key="index">       
      <select-basic v-if="element.type === 31" :element="element" :isEditable="false" :formList="formList" :index="index"></select-basic>
      <select-multiple v-if="element.type === 32" :element="element" :isEditable="false" :formList="formList" :index="index"></select-multiple>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import SelectBasic from '../../field_components/selects/SelectBasic'
import SelectMultiple from '../../field_components/selects/SelectMultiple'

export default {
  name: 'SelectTab',
  components: {
    SelectBasic,
    SelectMultiple,
    draggable
  },
  props: [
    'formList'
  ],
  data () {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    selectOptions () {
      return {
        animation: 0,
        // group: 'description',
        group: {
          name: 'description',
          pull: 'clone',
          put: false
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    ...mapState({
      selectList: state => state.selectList
    })
  },
  methods: {
      debug (event) {
        console.log(event.target.name)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
