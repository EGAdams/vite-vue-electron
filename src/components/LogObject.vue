import ILogObject from '../typescript_source/abstract/ILogObject';
<template>
    <li>
        <div class="grid-container">
            <div>
                {{ log_object.method }}
            </div>
            <div>
                {{ log_object.message }}
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ILogObject from "../typescript_source/abstract/ILogObject";
export default defineComponent({
    name: "log_object",
    props: {
        log_object: { 
            type: Object as PropType< ILogObject >,
            default: {},
        }
    }
});
</script>

<style></style>
