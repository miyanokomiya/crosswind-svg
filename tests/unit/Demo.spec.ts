import { mount } from "@vue/test-utils";
import Demo from "../../demo/Demo.vue";

describe("Demo", () => {
  it("default", () => {
    const wrapper = mount(Demo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
