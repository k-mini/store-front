import { createRouter, createWebHistory } from 'vue-router';
// import HelloView from '../components/HelloView.vue';
import BodyIndexView from '../components/body/BodyIndexView.vue';
import SigninView from '../components/body/SigninView.vue';
import SignupView from '../components/body/SignupView.vue';
import BoardForm from '../components/body/BoardForm.vue';
import BoardList from '../components/body/BoardList.vue';
import BoardDetail from '../components/body/BoardDetail.vue';

let router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/",
            name: "index",
            component: BodyIndexView,
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
        {
            path: "/board/:category/:subCategory/form",
            name: "form",
            component: BoardForm,
            props : { title: '글 쓰기 페이지'}
        },
        {
            path: "/board/:category/:subCategory/:boardId/form",
            name: "form",
            component: BoardForm,
            props : { title: '글 수정 페이지'}
        },
        {
            path: '/boards/:categoryName/:subCategoryName',
            name: 'boardList',
            component: BoardList,
        },
        {
            path: '/board/:categoryName/:subCategoryName/:boardId',
            name: 'boardetail',
            component: BoardDetail,
            // beforeEnter: (to, from, next) => {
            //     console.log(to);
            //     console.log(from);
            //     next();
            // },
        }
    ]
});

// 예시
// router.addRoute({ path:"/hello",name:"/hello", component: HelloView} );

// 동적 라우팅 시작

export { router }