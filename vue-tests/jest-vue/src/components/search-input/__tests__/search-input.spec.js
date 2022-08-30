import { mount } from '@vue/test-utils'
import SearchInput from '../index.vue'

describe('search-input - Unit', () => {
  it('should be a vue instance', () => {
    const wrapper = mount(SearchInput, {
        propsData: {
          value: '',
        }
    })

    expect(wrapper.vm).toBeDefined()
  })

  it('should update searchQuery when prop value changes', async () => {
    const wrapper = mount(SearchInput, {
      propsData: {
        value: '',
      }
    })

    await wrapper.setProps({ value: 'test' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.searchQuery).toEqual('test')
  })

  it('should emit input eventwhen something is typed', async () => {
    const wrapper = mount(SearchInput, {
      propsData: {
        value: '',
      }
    })

    const inputEl = wrapper.find('input[type=text]')
    await inputEl.setValue('test')
    
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual(['test'])
  })
})