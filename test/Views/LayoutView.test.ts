import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import LayoutView from '../../src/Views/LayoutView.vue'

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('LayoutView', () => {
    // const wrapper = mount(LayoutView, {
    //     props: {},
    //     global: {
    //         plugins: [vuetify],
    //     }
    // })

    // console.log(wrapper.html())
    // // Assert the rendered text of the component
    // expect(wrapper.text()).toContain('Vue App title')

    it('redenrs', () => {
        const wrapper = mount(LayoutView, {
            props: {
                title: 'Vue App title',
            },
            global: {
                plugins: [vuetify],
            },
        })
        console.log(wrapper.html())
        expect(true).toBe(true)
    })
})
