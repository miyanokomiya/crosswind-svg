import { mount } from "@vue/test-utils";
import Target from "../../src/components/HamburgerArrowIcon.vue";

describe("HamburgerArrowIcon", () => {
  it("expanded:false", () => {
    const wrapper = mount(Target, {
      propsData: { expanded: false }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("expanded:true", () => {
    const wrapper = mount(Target, {
      propsData: { expanded: true }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
