<!-- Log Viewer component test -->
<template>
  <!-- the v-html xlates raw html -->
  <log-viewer
    v-bind:object_name="test_object_name"
    v-bind:screen_html="screen_html"
    v-bind:logs="logs"></log-viewer>
  <button @click="startTest">Start Test</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LogViewer from "../components/LogViewer.vue";
import LogObjectProcessorTest from "../typescript_source/test/LogObjectProcessorTest";
// import LogObjectProcessorTest from '../../node_modules/log-object-processor/typescript_source/testing/LogObjectProcessorTest';
export default defineComponent({
    name: "LogViewerTest",
    components: {
        LogViewer
    },
    props: {},
    data() {
        return {
            test_object_name: "tester",
            screen_html: "ready.",
            processor_test: new LogObjectProcessorTest(),
            logs: [{
                    id: "1",
                    timestamp: 100,
                    message: "test message 1",
                    method: "test",
            }, {
                    id: "2",
                    timestamp: 100,
                    message: "test message 2",
                    method: "test",
            }],
        };
    },
    methods: {
        startTest() {
            this.processor_test.testMe();
            this.logs = this.processor_test.writtenLogs;
        },
    },
});
</script>

<style scoped></style>
