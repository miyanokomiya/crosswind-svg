import { mount } from "@vue/test-utils";
import Target from "../../src/components/CheckIcon.vue";

describe("CheckIcon", () => {
  it("checked:false", () => {
    const wrapper = mount(Target, {
      propsData: { checked: false }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("checked:true", () => {
    const wrapper = mount(Target, {
      propsData: { checked: true }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
