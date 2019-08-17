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
        <OpenCloseIcon class="icon red" :expanded="expanded" />
      </div>
    </section>
    <section>
      <h2>HamburgerArrowIcon</h2>
      <div @click="expanded = !expanded">
        <HamburgerArrowIcon class="icon" :expanded="expanded" />
        <HamburgerArrowIcon
          class="icon"
          :expanded="expanded"
          rotate="45deg"
          duration="1s"
          inverse
        />
        <HamburgerArrowIcon class="icon red" :expanded="expanded" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OpenCloseIcon from "../src/components/OpenCloseIcon.vue";
import HamburgerArrowIcon from "../src/components/HamburgerArrowIcon.vue";

export default Vue.extend({
  components: {
    OpenCloseIcon,
    HamburgerArrowIcon
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
.icon.red {
  color: red;
}
</style>
