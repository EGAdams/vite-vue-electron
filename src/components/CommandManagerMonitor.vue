/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div class="app">
    <h3>Command Manager</h3>
    <log-viewer
      v-bind:object_name="object_name"
      v-bind:screen_html="screen_html"
    ></log-viewer>
    <monitor-led :monitor_led_data="monitor_led_data"></monitor-led>
    <button @click="serverRunningCommand" class="command-manager-button">
      Start Linux Server
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogViewer from "../components/LogViewer.vue";
import MonitorLed from "../components/MonitorLed.vue";
import StartCommandManager from "../typescript_source/concrete/commands/start_command_manager/StartCommandManager";
import CommandExecutor from "../typescript_source/concrete/CommandExecutor";
import ServerLedData from "../typescript_source/concrete/ServerLedData";
import ServerRunningCommand from "../typescript_source/concrete/commands/server_running/ServerRunningCommand";
export default defineComponent({
  name: "CommandManagerMonitor",
  components: {
    LogViewer,
    MonitorLed,
  },
  data() {
    return {
      object_name: "",
      screen_html: "ready.",
      monitor_led_data: new ServerLedData(),
    };
  },
  methods: {
    serverRunningCommand() {
      console.log( "server running command..." );
      this.monitor_led_data.ledText = "server running command... ";
      let executor = new CommandExecutor( new ServerRunningCommand());
      executor.execute();
    },
  },
});
</script>

<style>
.command-manager-button {
  margin-top: 5px;
}
</style>
