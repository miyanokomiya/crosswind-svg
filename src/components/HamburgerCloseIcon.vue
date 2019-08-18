<script lang="ts">
import HamburgerArrowIcon from "./HamburgerArrowIcon.vue";
import { HamburgerLineTransforms } from "../../types/index";

export default HamburgerArrowIcon.extend({
  computed: {
    transforms(): HamburgerLineTransforms {
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
