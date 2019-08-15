import { mount } from "@vue/test-utils";
import OpenCloseIcon from "@/components/OpenCloseIcon.vue";

describe("OpenCloseIcon.vue", () => {
  it("state:open", () => {
    const wrapper = mount(OpenCloseIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
