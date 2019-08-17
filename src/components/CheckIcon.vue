<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g stroke-width="6" fill="none" :stroke="black" stroke-linecap="round">
        <path
          d="M 16 32 28 44 50 22"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: checked ? 'scale(1)' : 'scale(0)' }"
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
    checked: { type: Boolean, default: false }
  }
});
</script>
