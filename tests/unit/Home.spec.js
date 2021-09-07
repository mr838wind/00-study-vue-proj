import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import providedService from "@/services";
import store from '@/store';

/**
 * hard to test:
 */

describe('Home.vue', () => {
    test('컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다.', () => {
        // provide, store 사용
        const wrapper = shallowMount(Home, {
            provide: {
                ...providedService
            },
            store,
        });
        expect(wrapper.vm.localName).toBe('test');
    });
});
