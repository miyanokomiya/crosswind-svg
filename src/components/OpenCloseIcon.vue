<template>
  <SvgFlame>
    <circle cx="100" cy="100" r="100" fill="red" />
    <rect x="130" y="130" width="300" height="200" fill="blue" />
  </SvgFlame>
</template>

<script lang="ts">
import Vue from "vue";
import SvgFlame from "./SvgFlame.vue";

export default Vue.extend({
  components: { SvgFlame }
});
</script>
