<!--
 /*
  * Log Viewer component */ -->
<template>
    <div class="screen-area">
        <ol>
            <log
                v-for="log in logs"
                v-bind:log="log"
                v-bind:key="log.id">
            </log>
        </ol>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ILogObject from '../typescript_source/abstract/ILogObject';
export default defineComponent({
    props: {
      logs: Array as PropType< ILogObject[]>
    },
    watch: {
        logs: {
            handler(newValue) {
                this.$emit('logs-changed', newValue);
                //alert( "logs changed" );
            }
        }
    }    
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
