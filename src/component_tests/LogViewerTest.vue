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
    v-bind:logs="processor_test.writtenLogs"
  ></log-viewer>
  <button @click="startTest">
      Start Test
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LogViewer from "../components/LogViewer.vue";
import LogObjectProcessorTest from "../typescript_source/test/LogObjectProcessorTest";
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
        processor_test: new LogObjectProcessorTest(),
        };
    },
    methods: {
        startTest() {
            this.processor_test.testMe();
            alert( "done" );  
        },
    },
});
</script>

<style scoped></style>
