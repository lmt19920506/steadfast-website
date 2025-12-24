import productFrameIntroduction from './productFrameIntroduction.vue';
import coreFunction from './coreFunction.vue';
import threeDExplain from './3dExplain.vue';
import uiExplain from './uiExplain.vue';
import appExplain from './appExplain.vue';
import inDevelopment from './inDevelopment.vue'

export default function switchFn(data) {
    switch (data) {
        case 'product-frame-introduction':
            return productFrameIntroduction;
        case 'core-function':
            return coreFunction;
        case '3d-explain':
            return threeDExplain;
        case 'ui-explain':
            return uiExplain;
        case 'app-explain':
            return appExplain;
        default:
            return inDevelopment
    }
}