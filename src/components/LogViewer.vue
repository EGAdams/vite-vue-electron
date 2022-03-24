<!--
 /*
  * Log Viewer component
  */ 
-->
<template>
  <!-- the v-html xlates raw html -->
  <div class="screen-area">
    <div :id="object_name + '_log_viewer'">
      <span v-html="screen_html"></span>
    </div>
  </div>
</template>

<script lang="ts">
import jQuery from "jquery";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    screen_html: {
      type: String,
      default: "",
    },
    object_name: {
      type: String,
      default: "",
    },
  },

  watch: {
    screen_html: {
      handler(value) {
        console.log("inside screen_html(): " + value);
        if (value.length == 0) {
          return;
        }
        jQuery("#" + this.object_name + "_log_viewer").html(value);
        var height = jQuery(".screen-area").prop("scrollHeight");
        jQuery(".screen-area").animate({ scrollTop: height }, 2000);
      },
      immediate: true, // This ensures the watcher is triggered upon creation
      deep: true,
    },
  },
});
</script>

<style scoped>
.screen-area {
  background: black;
  color: white;
  border: solid 0.1px;
  height: 300px;
  overflow: auto;
  z-index: 10;
  text-align: left;
  padding: 3px;
}
</style>
