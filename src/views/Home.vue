<template>
  <div class="home">
    Progress Bar here:
    <progress-timer></progress-timer>
    <progress-timer :timer_speed="timer_speed"></progress-timer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProgressTimer from "../components/ProgressTimer.vue";
export default defineComponent({
  name: "Home",

  components: {
    ProgressTimer,
  },
  data() {
    return {
      timer_speed: 200,
    };
  },
});
</script>
