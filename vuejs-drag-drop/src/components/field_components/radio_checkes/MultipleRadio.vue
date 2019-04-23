<template>
  <div class="component"><!-- Multiple Radio -->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" >{{ element.data.labelName}}</label>
      <div class="col-md-5">
        <div class="radio">
                 <input type="radio" > option one
        </div>
        <div class="radio">
                 <input type="radio" >option two
        </div>        
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="Multiple Radio" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <file-button-property :element="element" ref="editFileButtonProperty"></file-button-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import FileButtonProperty from '../../edit_property_form/button/FileButtonProperty'

export default {
  name: 'MultipleRadio',
  components: {
    FileButtonProperty
  },
  props: [
    'element',
    'isEditable',
    'formList',
    'index'
  ],
  data () {
    return {
      dialogFormEditVisible: false,
      options: 'option one'
    }
  },
  methods: {
    openDialog () {
      if (this.isEditable) {
        this.dialogFormEditVisible = true
      }
    },
    closeDialog () {
      this.$refs['editFileButtonProperty'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editFileButtonProperty'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
