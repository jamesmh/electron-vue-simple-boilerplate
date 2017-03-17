import App from './App.vue'
import Welcome from './components/root/welcome.vue'
import ChildComponent from './components/child-component.vue'
import SlideTransition from './transitions/slide.vue';
import Second from './components/root/second.vue'

export default Vue => {
    Vue.component('main-app', App);
    Vue.component('welcome', Welcome);
    Vue.component('child-component', ChildComponent);
    Vue.component('slide-transition', SlideTransition);
    Vue.component('second', Second);
}