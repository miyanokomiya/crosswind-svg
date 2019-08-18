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
          { class: 'icon red', rotate: '180deg', inverse: true, shape: 'rect' },
          { class: 'icon green', shape: 'rect' },
          {
            class: 'icon green',
            rotate: '-45deg',
            inverse: true,
            shape: 'rect'
          }
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
  font-size: 1.2rem;
}
.icon {
  width: 2rem;
  margin-right: 1rem;
  color: #6088c6;
}
.icon.red {
  color: #eb8686;
  width: 24px;
}
.icon.green {
  color: #8cd790;
  width: 40px;
}
</style>
