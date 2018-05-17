import { mount } from 'vue-test-utils'
import Gallery from '../../components/GalleryComponent.vue'

describe('Gallery.vue', () => {
  it('displays title Projects', () => {
    const wrapper = mount(Gallery)
    expect(wrapper.text()).toContain('Projects')
  })
  it('displays default selected page number as 1', () => {
    const wrapper = mount(Gallery)
    const is_active = wrapper.find('.is-active')
    expect(is_active.text()).toContain('1')
  })
  it('displays page 2 when user clicks next arrow', () => {
    const wrapper = mount(Gallery)
    const spy = jest.fn();
    const button = wrapper.find('.next');
    wrapper.vm.$on('nextPage', spy);
    button.trigger('click');
    const is_active = wrapper.find('.is-active')
    expect(is_active.text()).toContain('2')
  })
})