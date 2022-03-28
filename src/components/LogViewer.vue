<!-- /* Log Viewer component */ -->
<template>
    <div :id="object_name + '_log_viewer'" class="screen-area">
        <h1>{{ object_name }}</h1>
        <ol>
            <log-object
                v-for="log_object in logs"
                v-bind:log_object="log_object"
                v-bind:key="log_object.id">
            </log-object>
        </ol>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import LogObject from '../components/LogObject.vue';
import ILogObject from '../typescript_source/abstract/ILogObject';
import jQuery from 'jquery';
export default defineComponent({
    name: 'log_viewer',
    components: {
        LogObject,
    },
    props: {
      logs: Array as PropType< ILogObject[]>,
      object_name: String,
    },
    watch: {
        logs: {
            handler( newValue ) {
                setTimeout(() => {
                    jQuery( "#" + this.object_name + "_log_viewer" ).animate(
                        { scrollTop: jQuery( "#" + this.object_name + "_log_viewer" ).prop( "scrollHeight" )},
                        1000 );
                }, 100 );    
            }}}    
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
