import { mount } from "@vue/test-utils";
import Target from "../../src/components/LikeIcon.vue";

describe("LikeIcon", () => {
  it("liked:false", () => {
    const wrapper = mount(Target, {
      propsData: { liked: false }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("liked:true", () => {
    const wrapper = mount(Target, {
      propsData: { liked: true }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
