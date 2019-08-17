import { mount } from "@vue/test-utils";
import Demo from "../../demo/Demo.vue";
import ExampleSection from "../../demo/ExampleSection.vue";

describe("Demo", () => {
  it("expanded:false", () => {
    const wrapper = mount(Demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("expanded:true", () => {
    const wrapper = mount(Demo);
    wrapper.findAll(ExampleSection).setData({ expanded: true });
    expect(wrapper.element).toMatchSnapshot();
  });
});
