import Vue from "vue";
import { ShapeType } from "../../../types/index";

export default Vue.extend({
  props: {
    shape: {
      type: String as Vue.PropType<ShapeType>,
      default: "circle"
    }
  },
  functional: true,
  render(h, { props }) {
    if (props.shape === "rect")
      return h("rect", {
        attrs: {
          x: 0,
          y: 0,
          rx: 6,
          ry: 6,
          width: 64,
          height: 64
        }
      });
    return h("circle", {
      attrs: {
        cx: 32,
        cy: 32,
        r: 32
      }
    });
  }
});
