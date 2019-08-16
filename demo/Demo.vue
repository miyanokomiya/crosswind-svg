<template>
  <div>
    <section>
      <h2>OpenCloseIcon</h2>
      <OpenCloseIcon class="icon" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OpenCloseIcon from "../src/components/OpenCloseIcon.vue";

export default Vue.extend({
  components: {
    OpenCloseIcon
  }
});
</script>

<style>
h2 {
  border-bottom: 1px solid black;
}
.icon {
  width: 2rem;
}
</style>
