<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    :style="style"
  >
    <slot
      :w="64"
      :h="64"
      :black="black"
      :white="white"
      :transition="transition"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    rotate: {
      type: String,
      default: "0"
    },
    inverse: {
      type: Boolean,
      default: false
    },
    duration: {
      type: String,
      default: "0.5s"
    }
  },
  computed: {
    style(): { [key: string]: string } {
      return {
        transform: `rotate(${this.rotate})`,
        fill: "currentColor",
        stroke: "currentColor"
      };
    },
    transition(): string {
      return `all ${this.duration}`;
    },
    black(): string {
      return this.inverse ? "white" : "";
    },
    white(): string {
      return this.inverse ? "" : "white";
    }
  }
});
</script>
