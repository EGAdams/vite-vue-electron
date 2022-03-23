<!--
 /*
  * Progress bar component
  */
-->
<template>
  <div class="progress_bar_container">
    <div><progress :max="100" :value="timerCount">70%</progress></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "progress-timer",
  data() {
    return {
      timerEnabled: true,
      timerCount: 100,
    };
  },

  props: {
    object_view_id: {
      type: String,
      default: "",
    },
    timer_speed: {
      type: Number,
      default: 50,
    },
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
            if (value == 1) {
              this.timerCount = 100;
              console.log("emitting update-objects...");
              this.$emit("update-objects", this.object_view_id);
            }
          }, this.timer_speed);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
});
</script>

<style>
progress {
  width: 36.85em;
  height: 2.2em;
  border-radius: 0;
  background: black;
}
progress::-webkit-progress-value {
  background: black;
}
</style>
