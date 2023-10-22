import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LayoutView from '@/views/LayoutView.vue'

describe('Layout view', () => {
    it('renders properly', () => {
        const wrapper = mount(LayoutView)
        expect(wrapper.text()).toContain('Vue App title')
    })
})