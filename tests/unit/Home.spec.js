import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

/**
 * hard to test:
 * TODO//fix: inject, store ....
 */

describe('Home.vue', () => {
    test('컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다.', () => {
        const wrapper = shallowMount(Home, {
            provide: {
                boardService() {
                    return ''
                }
            }
        });
        expect(wrapper.vm.localName).toBe('');
    });
});
