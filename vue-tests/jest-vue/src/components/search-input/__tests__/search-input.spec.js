import { mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'

describe('search-input - Unit', () => {
  it('should be a vue instance', () => {
    const wrapper = mount(SearchInput, {
        propsData: {
          value: '',
        }
    })

    expect(wrapper.vm).toBeDefined()
  })
})