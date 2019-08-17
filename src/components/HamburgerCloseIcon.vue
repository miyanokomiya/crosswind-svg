<script lang="ts">
import HamburgerArrowIcon from "./HamburgerArrowIcon.vue";

export default HamburgerArrowIcon.extend({
  computed: {
    transformSet(): { top: string; middle: string; bottom: string } {
      if (this.expanded)
        return {
          top: "translateY(12px)",
          middle: "scaleX(0)",
          bottom: "translateY(-12px)"
        };
      return {
        top: "",
        middle: "",
        bottom: ""
      };
    }
  }
});
</script>
