import { createRouter, createWebHistory } from 'vue-router';
import BodyIndexView from '../components/body/BodyIndexView.vue';
import SigninView from '../components/body/SigninView.vue';
import SignupView from '../components/body/SignupView.vue';
import MyAccountView from '../components/body/MyAccountView.vue';
import BoardForm from '../components/body/BoardForm.vue';
import BoardList from '../components/body/BoardList.vue';
import BoardDetail from '../components/body/BoardDetail.vue';
import { store } from '../store/index';
import { getJwtToken, setJwtToken, removeJwtToken } from '../api/jwtApi';

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
            props: { title: '로그인' }
        },
        {
            path: "/auth/signup",
            name: "signup",
            component: SignupView,
            props: { title: '회원가입' }
        },
        {
            path: "/auth/account",
            name: "account",
            component: MyAccountView,
            meta: { authRequired: true },
            props: { title: '회원정보 수정' },
        },
        {
            path: "/board/:category/:subCategory/form",
            name: "saveForm",
            component: BoardForm,
            meta: { authRequired: true },
            props: { title: '글 쓰기' },
            beforeEnter: (to, from, next) => {
                checkCategoryAndNext(to.params.category, to.params.subCategory, next);
            },
        },
        {
            path: "/board/:category/:subCategory/:boardId(\\d+)/form",
            name: "updateForm",
            component: BoardForm,
            meta: { authRequired: true },
            props: { title: '글 수정 페이지' },
            beforeEnter: (to, from, next) => {
                checkCategoryAndNext(to.params.category, to.params.subCategory, next);
            },
        },
        {
            path: '/boards',
            name: 'BoardList',
            component: BoardList,
            beforeEnter: (to, from, next) => {
                checkCategoryAndNext(to.params.categoryName, to.params.subCategoryName, next);
            },
            children: [
                {
                    path: '/boards/:categoryName/:subCategoryName',
                    name: 'trade',
                    component: () => import('../components/body/list/ContentView.vue'),
                },
            ]
        },
        {
            path: '/board/:categoryName/:subCategoryName/:boardId(\\d+)',
            name: 'boardetail',
            component: BoardDetail,
            beforeEnter: (to, from, next) => {
                checkCategoryAndNext(to.params.categoryName, to.params.subCategoryName, next);
            },
        },
    ]
});

function checkCategoryAndNext(categoryName, subCategoryName, next) {
    let categoryMap = store.state.categoryMap;
    if (categoryMap.get(categoryName.toUpperCase()) != undefined && categoryMap.get(subCategoryName.toUpperCase()) != undefined) {
        next();
    }
    else {
        next('/');
    }
}

router.beforeEach(async function(to, from, next) {
    console.log('beforeEach', to);
    // console.log(store);
    let token = to.query.token;
    if (token != null) {
        setJwtToken(token);
        window.opener.location.href='http://localhost:9090';
        window.close();
    }

    await attemptAuthentication();
    let isAuthenticated = store.state.isAuthenticated;

    if (to.matched.length > 0) {
        if (to.matched.some((routerInfo) => routerInfo.meta.authRequired)) {
            if (isAuthenticated) {
                // 인증이 필요한 화면이고 인증이 완료됨
                next();
            } else {
                // 인증이 필요한화면이나 인증이 되지 않음
                next('/auth/signin');
            }
        }
        // 인증 필요 없는 화면
        next();
    } else {
        // 매칭되는 라우터가 없음
        next('/');
    }
})

async function attemptAuthentication() {
    let token = getJwtToken();
    // 인증 객체가 없는데 jwt 토큰이 있으면 로그인 시도
    if (store.state.isAuthenticated == false && token != null) {
        try {
            await store.dispatch('FETCH_AUTHENTICATION', { token });
        } catch (err) {
            removeJwtToken();
            store.state.isAuthenticated = false;
            store.state.authentication = null;
            console.log('인증 실패', err);
        }
    }
}

// 예시
// router.addRoute({ path:"/hello",name:"/hello", component: HelloView} );

// 동적 라우팅 시작

export { router }