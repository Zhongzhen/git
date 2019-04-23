<template>
  <div class="component"><!-- Prepended text-->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" :for="element.data.id">{{ element.data.labelName }}</label>
      <div :class="element.data.size">
        <div class="input-group">
            <input :id="element.data.id"
                 :name="element.data.id"
                 class="form-control"
                 :placeholder="element.data.placeholder"
                 type="text"
            > 
            <span class="input-group-addon">
                <!-- <div class="input-group-btn"> -->
                {{ element.data.appendedText }}
                <!-- <button type="button" class="btn btn-default dropdown-toggle">{{ element.data.appendedText }}</button> -->
                <!-- <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                <span class="cart"></span>
                <!-- </div> -->
            </span>      
        </div>
        <p class="help-block">{{ element.data.helpText }}</p>
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="Buttonn Dropdown" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <prepended-text-property :element="element" ref="editPrependTextProperty"></prepended-text-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import PrependedTextProperty from '../../edit_property_form/input/PrependedTextProperty'

export default {
  name: 'ButtonDropdown',
  props: [
    'element',
    'isEditable',
    'formList',
    'index'
  ],
  components: {
    PrependedTextProperty
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
      this.$refs['editPrependTextProperty'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editPrependTextProperty'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
