<template>
  <section>
    <h2>{{ name }}</h2>
    <div>
      <slot
        :list="[
          { class: 'icon' },
          {
            class: 'icon',
            rotate: '45deg',
            duration: '1s',
            inverse: true
          },
          { class: 'icon red', rotate: '180deg', shape: '' },
          { class: 'icon red', rotate: '180deg', shape: 'rect' }
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
