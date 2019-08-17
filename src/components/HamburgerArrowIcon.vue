<template>
  <SvgFlame v-bind="{ rotate, inverse, duration }">
    <template #default="{ black, white, transition }">
      <rect x="0" y="0" rx="6" ry="6" width="64" height="64" :fill="white" />
      <g stroke-width="4" :stroke="black" stroke-linecap="round">
        <path
          d="M 20 20 44 20"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: expanded ? 'rotate(-45deg)' : '' }"
        />
        <path
          d="M 20 32 44 32"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: expanded ? 'rotate(-180deg)' : '' }"
        />
        <path
          d="M 20 44 44 44"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: expanded ? 'rotate(45deg)' : '' }"
        />
      </g>
    </template>
  </SvgFlame>
</template>

<script lang="ts">
import Vue from "vue";
import SvgFlame from "./SvgFlame.vue";

export default Vue.extend({
  components: { SvgFlame },
  props: {
    rotate: String,
    inverse: Boolean,
    duration: String,
    expanded: { type: Boolean, default: false }
  }
});
</script>
