import ILogObject from '../typescript_source/abstract/ILogObject';
<template>
    <li>
        <div class="grid-container">
            <div>
                {{ log.method }}
            </div>
            <div>
                {{ log.message }}
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ILogObject from "../typescript_source/abstract/ILogObject";
export default defineComponent({
    name: "log",
    props: {
        // log: Object as PropType< ILogObject > 
        log: { 
            type: Object as PropType< ILogObject >,
            default: {},
        }
    }
});
</script>

<style></style>
