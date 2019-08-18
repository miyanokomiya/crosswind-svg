<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g stroke-linecap="round">
        <path
          d="M 26 44 l 0 -20 q 0 -6 4 -6 l 4 0 q 4 0 4 4 l 0 6"
          :stroke="black"
          stroke-width="4"
          fill="none"
          :style="{
            transition,
            'transform-origin': '26px 50%',
            transform: locked ? '' : 'translateY(-4px) scaleX(-1)'
          }"
        />
        <rect
          x="20"
          y="28"
          rx="4"
          ry="4"
          width="24"
          height="24"
          stroke="none"
          :fill="black"
        />
        <g stroke="none" :fill="white">
          <circle cx="32" cy="37" r="3" />
          <rect x="31" y="34" rx="3" ry="3" width="2" height="12" />
        </g>
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
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    locked: { type: Boolean, default: false }
  }
});
</script>
