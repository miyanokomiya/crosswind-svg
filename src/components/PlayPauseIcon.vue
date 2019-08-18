<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g :stroke="black" :fill="black" stroke-linecap="round">
        <path
          d="M 20 18 28 18 28 46 20 46z"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: playing ? '' : 'scaleY(0)' }"
        />
        <path
          d="M 36 18 44 18 44 46 36 46z"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: playing ? '' : 'scaleY(0)' }"
        />
        <path
          d="M 20 17 46 32 20 47z"
          stroke-linejoin="round"
          style="transform-origin: 20px 50%;"
          :style="{ transition, transform: playing ? 'scaleX(0)' : '' }"
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
    playing: { type: Boolean, default: false }
  }
});
</script>
