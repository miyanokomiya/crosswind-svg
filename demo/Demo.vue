<template>
  <div>
    <ExampleSection name="OpenCloseIcon">
      <template v-slot="{ list }">
        <OpenCloseIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :expanded="expanded"
          @click="click"
        />
      </template>
    </ExampleSection>
    <ExampleSection name="HamburgerArrowIcon">
      <template v-slot="{ list }">
        <HamburgerArrowIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :expanded="expanded"
          @click="click"
        />
      </template>
    </ExampleSection>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OpenCloseIcon from "../src/components/OpenCloseIcon.vue";
import HamburgerArrowIcon from "../src/components/HamburgerArrowIcon.vue";
import ExampleSection from "./ExampleSection.vue";

export default Vue.extend({
  components: {
    OpenCloseIcon,
    HamburgerArrowIcon,
    ExampleSection
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
