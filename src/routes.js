import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Reading from './components/Reading.vue';
import Watching from './components/Watching.vue';
import Listening from './components/Listening.vue';

export default [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/Reading', component: Reading },
    { path: '/watching', component: Watching },
    { path: '/listening', component: Listening },
]