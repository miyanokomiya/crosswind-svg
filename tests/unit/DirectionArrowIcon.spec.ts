import { mount } from "@vue/test-utils";
import Target from "../../src/components/DirectionArrowIcon.vue";

describe("DirectionArrowIcon", () => {
  it("to:u", () => {
    const wrapper = mount(Target, {
      propsData: { to: "u" }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("to:r", () => {
    const wrapper = mount(Target, {
      propsData: { to: "r" }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("to:l", () => {
    const wrapper = mount(Target, {
      propsData: { to: "l" }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("to:d", () => {
    const wrapper = mount(Target, {
      propsData: { to: "b" }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
