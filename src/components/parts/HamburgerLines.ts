import Vue from "vue";
import { HamburgerLineTransforms } from "../../../types/index";

export default Vue.extend({
  props: {
    transition: {
      type: String,
      default: ""
    },
    transforms: {
      type: Object as Vue.PropType<HamburgerLineTransforms>,
      default: () => ({
        top: "",
        middle: "",
        bottom: ""
      })
    }
  },
  functional: true,
  render(h, { props, data }) {
    return h(
      "g",
      {
        attrs: {
          "stroke-width": 4,
          "stroke-linecap": "round",
          ...data.attrs
        }
      },
      [
        h("path", {
          attrs: {
            d: "M 20 20 44 20"
          },
          style: {
            "transform-origin": "50% 50%",
            transition: props.transition,
            transform: props.transforms.top
          }
        }),
        h("path", {
          attrs: {
            d: "M 20 32 44 32"
          },
          style: {
            "transform-origin": "50% 50%",
            transition: props.transition,
            transform: props.transforms.middle
          }
        }),
        h("path", {
          attrs: {
            d: "M 20 44 44 44"
          },
          style: {
            "transform-origin": "50% 50%",
            transition: props.transition,
            transform: props.transforms.bottom
          }
        })
      ]
    );
  }
});
