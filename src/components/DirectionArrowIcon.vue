<script lang="ts">
import HamburgerArrowIcon from "./HamburgerArrowIcon.vue";

type ToType = "t" | "r" | "b" | "l";

export default HamburgerArrowIcon.extend({
  props: {
    to: { type: String as Vue.PropType<ToType>, default: "r" }
  },
  computed: {
    transformSet(): { top: string; middle: string; bottom: string } {
      if (this.to === "t")
        return {
          top: "rotate(45deg) scaleX(-1)",
          middle: "rotate(90deg)",
          bottom: "rotate(-45deg) scaleY(-1)"
        };
      if (this.to === "b")
        return {
          top: "rotate(-45deg) scaleY(-1)",
          middle: "rotate(-90deg)",
          bottom: "rotate(45deg) scaleX(-1)"
        };
      if (this.to === "l")
        return {
          top: "rotate(-45deg)",
          middle: "rotate(-180deg)",
          bottom: "rotate(45deg)"
        };
      return {
        top: "rotate(45deg)",
        middle: "",
        bottom: "rotate(-45deg)"
      };
    }
  }
});
</script>
