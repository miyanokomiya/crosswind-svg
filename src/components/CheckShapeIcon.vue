<template>
  <SvgFlame v-bind="{ shape, rotate, inverse, duration }" v-on="$listeners">
    <template #default="{ black, white, transition }">
      <g
        :fill="black"
        style="transform-origin: 50% 50%;"
        :style="{ transition, transform: checked ? 'scale(0.6)' : 'scale(0)' }"
      >
        <ElasticShape :shape="shape" />
      </g>
    </template>
  </SvgFlame>
</template>

<script lang="ts">
import Vue from "vue";
import SvgFlame from "./SvgFlame.vue";
import ElasticShape from "./parts/ElasticShape";

export default Vue.extend({
  components: { SvgFlame, ElasticShape },
  props: {
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    checked: { type: Boolean, default: false }
  }
});
</script>
