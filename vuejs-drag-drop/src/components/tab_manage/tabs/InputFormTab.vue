<template>
  <draggable class="list-group input-form-tab" v-model="formInputList" :options="formInputOptions" @start="isDragging=true" @end="isDragging=false">
    <div v-for="(element, index) in formInputList" :key="index">
      <text-input v-if="element.type === 1" :element="element" :isEditable="false" :formList="formList" :index="index"></text-input>
      <password-input v-if="element.type === 2" :element="element" :isEditable="false" :formList="formList" :index="index"></password-input>
      <search-input v-if="element.type === 3" :element="element" :isEditable="false" :formList="formList" :index="index"></search-input>
      <prepended-text v-if="element.type === 4" :element="element" :isEditable="false" :formList="formList" :index="index"></prepended-text>
      <appended-text v-if="element.type === 5" :element="element" :isEditable="false" :formList="formList" :index="index"></appended-text>
      <prepended-checkbox v-if="element.type === 6" :element="element" :isEditable="false" :formList="formList" :index="index"></prepended-checkbox>
      <appended-checkbox v-if="element.type === 7" :element="element" :isEditable="false" :formList="formList" :index="index"></appended-checkbox>
      <button-dropdown v-if="element.type === 8" :element="element" :isEditable="false" :formList="formList" :index="index"></button-dropdown>
      <text-area v-if="element.type === 9" :element="element" :isEditable="false" :formList="formList" :index="index"></text-area>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import TextInput from '@/components/field_components/form_input/TextInput'
import PasswordInput from '@/components/field_components/form_input/PasswordInput'
import SearchInput from '@/components/field_components/form_input/SearchInput'
import PrependedText from '@/components/field_components/form_input/PrependedText'
import AppendedText from '@/components/field_components/form_input/AppendedText'
import PrependedCheckbox from '@/components/field_components/form_input/PrependedCheckbox'
import AppendedCheckbox from '@/components/field_components/form_input/AppendedCheckbox'
import ButtonDropdown from '@/components/field_components/form_input/ButtonDropdown'
import TextArea from '@/components/field_components/form_input/TextArea'
export default {
  name: 'InputFormTab',
  components: {
    TextInput,
    PasswordInput,
    SearchInput,
    PrependedText,
    AppendedText,
    PrependedCheckbox,
    AppendedCheckbox,
    ButtonDropdown,
    TextArea,
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
    formInputOptions () {
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
      formInputList: state => state.formInputList
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
