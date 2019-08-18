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
    <ExampleSection name="HamburgerCloseIcon">
      <template v-slot="{ list }">
        <HamburgerCloseIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :expanded="expanded"
          @click="click"
        />
      </template>
    </ExampleSection>
    <ExampleSection name="KebabCloseIcon">
      <template v-slot="{ list }">
        <KebabCloseIcon
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
    <ExampleSection name="CheckIcon">
      <template v-slot="{ list }">
        <CheckIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :checked="checked"
          @click="click"
        />
      </template>
    </ExampleSection>
    <ExampleSection name="CheckShapeIcon">
      <template v-slot="{ list }">
        <CheckShapeIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :checked="checked"
          @click="click"
        />
      </template>
    </ExampleSection>
    <ExampleSection name="PlayPauseIcon">
      <template v-slot="{ list }">
        <PlayPauseIcon
          v-for="(p, i) in list"
          :key="i"
          v-bind="p"
          :playing="expanded"
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
import HamburgerCloseIcon from "../src/components/HamburgerCloseIcon.vue";
import KebabCloseIcon from "../src/components/KebabCloseIcon.vue";
import DirectionArrowIcon from "../src/components/DirectionArrowIcon.vue";
import CheckIcon from "../src/components/CheckIcon.vue";
import CheckShapeIcon from "../src/components/CheckShapeIcon.vue";
import PlayPauseIcon from "../src/components/PlayPauseIcon.vue";

export default Vue.extend({
  components: {
    ExampleSection,
    OpenCloseIcon,
    HamburgerArrowIcon,
    HamburgerCloseIcon,
    KebabCloseIcon,
    DirectionArrowIcon,
    CheckIcon,
    CheckShapeIcon,
    PlayPauseIcon
  },
  data() {
    return {
      expanded: false,
      toIndex: 0,
      checked: true
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
      this.checked = !this.checked;
    }
  }
});
</script>
