import { createRouter, createWebHistory } from 'vue-router';
// import HelloView from '../components/HelloView.vue';
import BodyView from '../components/body/BodyView.vue';
import SigninView from '../components/body/SigninView.vue';
import SignupView from '../components/body/SignupView.vue';
let router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/",
            name: "index",
            component: BodyView,
        },
        {
            path: "/auth/signin",
            name: "signin",
            component: SigninView,
            props : { title: '로그인 페이지'}
        },
        {
            path: "/auth/signup",
            name: "signup",
            component: SignupView,
            props : { title: '회원가입 페이지'}
        },
    ]
});

// 예시
// router.addRoute({ path:"/hello",name:"/hello", component: HelloView} );


export { router }