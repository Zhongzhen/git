<template>
  <div>    
    <h3>About</h3>
    <p>Create By (@<a href="http://twitter.com/minikomi">minikomi</a>)to help take the stress out of writing all that markup to get bootstrap forms together. The original version of this was a big jQuery
spaghetti mess, so as of March 2013 it has been rewritten using <a href="backbonejs.org">backbone.js</a> and takes advantage of <a href="http://underscorejs.org/#template">underscode.js templates</a> </p>
    <p>If you have a problem, or want a specific snippet added please check out the <a href="https://github.com/minikomi/Bootstrap-Form-Builder">github project</a>. Note, this is only a simple tool so I'm not that keen on adding many features (eg. saving/exporting forms, embedding forms etc.). </p>
    <p>Adding snippets is quite simple now (due to the rewrite!) so please don't hesitate to open an issue!</p>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AboutTab',
  props: [
    'formList'
  ],
  data () {
    return {
      htmlRender: ''
    }
  },
  created () {
    this.convertToString(this.formList)
  },
  methods: {
    ...mapActions([
      'convert_into_string__convert_to_string_module'
    ]),
    convertToString (formList) {
      var actionData = {
        formList: formList
      }
      this.convert_into_string__convert_to_string_module(actionData)
        .then(content => {
          this.htmlRender = content
        })
    }
  },
  watch: {
    formList: {
      handler: function (newValue, oldValue) {
        this.convertToString(newValue)
      },
      deep: true
    }
  }
}
</script>
