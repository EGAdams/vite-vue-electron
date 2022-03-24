<!--
 /*
  * Log Viewer component test
  */ 
-->
<template>
  <!-- the v-html xlates raw html -->
  <log-viewer
    v-bind:object_name="object_name"
    v-bind:screen_html="screen_html"
  ></log-viewer>
  <button @click="startTest">
      Start Test
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogViewer from "../components/LogViewer.vue";
export default defineComponent({
  name: "LogViewerTest",
  components: {
    LogViewer,
  },
  props: {},
  data() {
    return {
      object_name: "",
      screen_html: "ready.",
    };
  },
  methods: {
    startTest() {
      let count = 0;
      this.screen_html = "";
      let clear_interval = setInterval(() => {
        this.screen_html += "testing... <br>" + count++;
        if( count > 100 ) {
          clearInterval(clear_interval);
          alert( "done" );
        }
      }, 10 );   
    },
  },
});
</script>

<style scoped></style>
