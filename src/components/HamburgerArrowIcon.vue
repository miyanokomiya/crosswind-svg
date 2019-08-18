<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <HamburgerLines
        :stroke="black"
        :transition="transition"
        :transforms="transforms"
      />
    </template>
  </SvgFlame>
</template>

<script lang="ts">
import Vue from "vue";
import SvgFlame from "./SvgFlame.vue";
import HamburgerLines from "./parts/HamburgerLines";
import { HamburgerLineTransforms } from "../../types/index";

export default Vue.extend({
  components: { SvgFlame, HamburgerLines },
  props: {
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    expanded: { type: Boolean, default: false }
  },
  computed: {
    transforms(): HamburgerLineTransforms {
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
