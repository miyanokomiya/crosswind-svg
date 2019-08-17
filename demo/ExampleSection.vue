<template>
  <section>
    <h2>{{ name }}</h2>
    <div @click="click">
      <slot
        :list="[
          { expanded, class: 'icon' },
          {
            expanded,
            class: 'icon',
            rotate: '45deg',
            duration: '1s',
            inverse: true
          },
          { expanded, class: 'icon red', rotate: '180deg' }
        ]"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    name: { type: String, default: "" }
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    click() {
      this.expanded = !this.expanded;
    }
  }
});
</script>

<style>
h2 {
  border-bottom: 1px solid black;
}
.icon {
  width: 2rem;
  margin-right: 1rem;
  color: blue;
}
.icon.red {
  color: red;
}
</style>
