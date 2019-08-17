<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g stroke-width="4" :stroke="black" stroke-linecap="round">
        <path
          d="M 32 20 32 44"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: expanded ? 'rotate(90deg)' : '' }"
        />
        <path
          d="M 20 32 44 32"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: expanded ? 'rotate(-180deg)' : '' }"
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
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    expanded: { type: Boolean, default: false }
  }
});
</script>
