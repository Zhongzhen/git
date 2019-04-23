<template>
  <div class="component" ><!-- Text input-->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" :for="element.data.id">{{ element.data.labelName }}</label>
      <div :class="element.data.size">
        <textarea :id="element.data.id"
              class="form-control"
        >default text</textarea>
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="Text Area" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <text-input-property :element="element" ref="editTextInputProperty"></text-input-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TextInputProperty from '../../edit_property_form/input/TextInputProperty'

export default {
  name: 'TextInput',
  props: [
    'element',
    'isEditable',
    'formList',
    'index'
  ],
  components: {
    TextInputProperty
  },
  data () {
    return {
      dialogFormEditVisible: false
    }
  },
  methods: {
    openDialog () {
      if (this.isEditable) {
        this.dialogFormEditVisible = true
      }
    },
    closeDialog () {
      this.$refs['editTextInputProperty'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editTextInputProperty'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
