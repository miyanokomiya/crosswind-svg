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
    <ExampleSection name="DirectionArrowIcon">
      <template v-slot="{ list }">
        <DirectionArrowIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :to="to"
          @click="click"
        />
      </template>
    </ExampleSection>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExampleSection from "./ExampleSection.vue";
import OpenCloseIcon from "../src/components/OpenCloseIcon.vue";
import HamburgerArrowIcon from "../src/components/HamburgerArrowIcon.vue";
import DirectionArrowIcon from "../src/components/DirectionArrowIcon.vue";

export default Vue.extend({
  components: {
    ExampleSection,
    OpenCloseIcon,
    HamburgerArrowIcon,
    DirectionArrowIcon
  },
  data() {
    return {
      expanded: false,
      toIndex: 0
    };
  },
  computed: {
    to(): string {
      return ["t", "r", "l", "b"][this.toIndex];
    }
  },
  methods: {
    click() {
      this.expanded = !this.expanded;
      this.toIndex = (this.toIndex + 1) % 4;
    }
  }
});
</script>
