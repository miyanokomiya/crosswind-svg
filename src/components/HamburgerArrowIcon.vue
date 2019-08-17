<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g stroke-width="4" :stroke="black" stroke-linecap="round">
        <path
          d="M 20 20 44 20"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: transformSet.top }"
        />
        <path
          d="M 20 32 44 32"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: transformSet.middle }"
        />
        <path
          d="M 20 44 44 44"
          style="transform-origin: 50% 50%;"
          :style="{ transition, transform: transformSet.bottom }"
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
  },
  computed: {
    transformSet(): { top: string; middle: string; bottom: string } {
      if (this.expanded)
        return {
          top: "rotate(-45deg)",
          middle: "rotate(-180deg)",
          bottom: "rotate(45deg)"
        };
      return {
        top: "",
        middle: "",
        bottom: ""
      };
    }
  }
});
</script>
