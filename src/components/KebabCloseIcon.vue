<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g
        :fill="black"
        style="transform-origin: 50% 50%;"
        :style="{ transition, transform: transformSet.kebab }"
      >
        <circle cx="32" cy="18" r="4" />
        <circle cx="32" cy="32" r="4" />
        <circle cx="32" cy="46" r="4" />
      </g>
      <g
        stroke-width="4"
        :stroke="black"
        stroke-linecap="round"
        style="transform-origin: 50% 50%;"
        :style="{ transition, transform: transformSet.line }"
      >
        <path d="M 20 32 44 32" />
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
    transformSet(): { kebab: string; line: string } {
      if (this.expanded)
        return {
          kebab: "scaleY(0)",
          line: ""
        };
      return {
        kebab: "",
        line: "scaleX(0)"
      };
    }
  }
});
</script>
