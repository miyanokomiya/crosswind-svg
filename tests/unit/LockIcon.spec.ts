import { mount } from "@vue/test-utils";
import Target from "../../src/components/LockIcon.vue";

describe("LockIcon", () => {
  it("locked:false", () => {
    const wrapper = mount(Target, {
      propsData: { locked: false }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("locked:true", () => {
    const wrapper = mount(Target, {
      propsData: { locked: true }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
