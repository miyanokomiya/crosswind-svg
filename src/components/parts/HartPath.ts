import Vue from "vue";

export default Vue.extend({
  functional: true,
  render(h, { data }) {
    return h("path", {
      attrs: {
        "stroke-width": 4,
        "stroke-linecap": "round",
        d: "M 32 48 Q 10 32 20 22 Q 26 16 32 26 Q 38 16 44 22 Q 54 32 32 48",
        ...data.attrs
      },
      style: data.style
    });
  }
});
