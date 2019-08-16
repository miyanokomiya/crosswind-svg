<template>
  <div>
    <section>
      <h2>OpenCloseIcon</h2>
      <div @click="expanded = !expanded">
        <OpenCloseIcon class="icon" :expanded="expanded" />
        <OpenCloseIcon
          class="icon"
          :expanded="expanded"
          rotate="45deg"
          duration="1s"
          inverse
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OpenCloseIcon from "../src/components/OpenCloseIcon.vue";

export default Vue.extend({
  components: {
    OpenCloseIcon
  },
  data() {
    return {
      expanded: false
    };
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
</style>
