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
import { HamburgerLineTransforms, ToType } from "../../types/index";

export default Vue.extend({
  components: { SvgFlame, HamburgerLines },
  props: {
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    to: { type: String as Vue.PropType<ToType>, default: "r" }
  },
  computed: {
    transforms(): HamburgerLineTransforms {
      if (this.to === "t")
        return {
          top: "rotate(45deg) scaleX(-1)",
          middle: "rotate(90deg)",
          bottom: "rotate(-45deg) scaleY(-1)"
        };
      if (this.to === "b")
        return {
          top: "rotate(-45deg) scaleY(-1)",
          middle: "rotate(-90deg)",
          bottom: "rotate(45deg) scaleX(-1)"
        };
      if (this.to === "l")
        return {
          top: "rotate(-45deg)",
          middle: "rotate(-180deg)",
          bottom: "rotate(45deg)"
        };
      return {
        top: "rotate(45deg)",
        middle: "",
        bottom: "rotate(-45deg)"
      };
    }
  }
});
</script>
