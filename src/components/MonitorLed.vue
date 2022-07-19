/* eslint-disable prettier/prettier */
<template>
    <div>
        <div class="monitor-led" :monitor_led_data=" monitor_led_data.classObject ">
            {{ monitor_led_data.ledText }}
        </div>
    </div>
</template>

<script lang="ts">
import IMonitorLedData from "../typescript_source/abstract/IMonitorLedData";
import { defineComponent, PropType } from "vue";
export default defineComponent( {
    name: "monitor-led",
    props: {
        monitor_led_data: {
            type: Object as PropType< IMonitorLedData >,
            default: () => ( {} ),
        },
    },
    data () {
        return {
            object_view_id: "100",
        };
    },
} );
</script>

<style scoped>
.monitor-led {
    width: 34.85em;
    height: 0.8m;
    margin-top: 4px;
    padding:
        /* top    */
        1px
        /* right  */
        1px
        /* bottom */
        1px
        /* left   */
        5px;
    background-color: "monitor_led_data.classObject.background_color";
    text-align: "monitor_led_data.classObject.text_align";
    margin-top: "monitor_led_data.classObject.margin_top";
}
</style>
