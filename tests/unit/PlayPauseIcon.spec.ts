import { mount } from "@vue/test-utils";
import Target from "../../src/components/PlayPauseIcon.vue";

describe("PlayPauseIcon", () => {
  it("playing:false", () => {
    const wrapper = mount(Target, {
      propsData: { playing: false }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("playing:true", () => {
    const wrapper = mount(Target, {
      propsData: { playing: true }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
