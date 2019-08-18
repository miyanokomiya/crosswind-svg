<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g :stroke="black">
        <HartPath
          fill="none"
          :style="{
            transition,
            'transform-origin': '50% 50%',
            transform: liked ? 'scale(0)' : ''
          }"
        />
        <HartPath
          :fill="black"
          :style="{
            transition,
            'transform-origin': '50% 50%',
            transform: liked ? '' : 'scale(0)'
          }"
        />
      </g>
    </template>
  </SvgFlame>
</template>

<script lang="ts">
import Vue from "vue";
import SvgFlame from "./SvgFlame.vue";
import HartPath from "./parts/HartPath";

export default Vue.extend({
  components: { SvgFlame, HartPath },
  props: {
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    liked: { type: Boolean, default: false }
  }
});
</script>
