import { mount } from "@vue/test-utils";
import Demo from "../../demo/Demo.vue";

describe("Demo", () => {
  it("expanded:false", () => {
    const wrapper = mount(Demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("expanded:true", () => {
    const wrapper = mount(Demo);
    wrapper.setData({ expanded: true });
    expect(wrapper.element).toMatchSnapshot();
  });
});
