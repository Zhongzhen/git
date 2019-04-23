<template>
  <draggable class="list-group button-tab" v-model="radio_checkboxList" :options="buttonOptions" @start="isDragging=true" @end="isDragging=false">
    <div v-for="(element, index) in radio_checkboxList" :key="index">
      <multiple-radio v-if="element.type === 41" :element="element" :isEditable="false" :formList="formList" :index="index"></multiple-radio>
      <inline-radio v-if="element.type === 42" :element="element" :isEditable="false" :formList="formList" :index="index"></inline-radio>
      <multiple-checkbox v-if="element.type === 43" :element="element" :isEditable="false" :formList="formList" :index="index"></multiple-checkbox>
      <inline-checkbox v-if="element.type === 44" :element="element" :isEditable="false" :formList="formList" :index="index"></inline-checkbox>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import MultipleRadio from '@/components/field_components/radio_checkes/MultipleRadio'
import InlineRadio from '@/components/field_components/radio_checkes/InlineRadio'
import MultipleCheckbox from '@/components/field_components/radio_checkes/MultipleCheckbox'
import InlineCheckbox from '@/components/field_components/radio_checkes/InlineCheckbox'

export default {
  name: 'RadioCheckboxTab',
  components: {
    MultipleRadio,
    InlineRadio,
    MultipleCheckbox,
    InlineCheckbox,
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
    buttonOptions () {
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
      radio_checkboxList: state => state.radio_checkboxList
    })
  },
  methods: {

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
