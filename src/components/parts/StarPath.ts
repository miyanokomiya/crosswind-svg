import Vue from "vue";

export default Vue.extend({
  functional: true,
  render(h, { data }) {
    const d = "M 32 14 38 26 50 26 41 35 44 47 32 40";
    return h(
      "g",
      {
        attrs: {
          "stroke-width": 4,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          ...data.attrs
        },
        style: data.style
      },
      [
        h("path", {
          attrs: { d }
        }),
        h("path", {
          attrs: { d },
          style: {
            "transform-origin": "50% 50%",
            transform: "scaleX(-1)"
          }
        })
      ]
    );
  }
});
