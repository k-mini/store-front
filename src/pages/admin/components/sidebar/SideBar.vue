<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      :to="`/admin`"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Store Admin</div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <router-link class="nav-link" :to="`/admin`">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>대시보드</span></router-link
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Interface</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <!-- <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Components:</h6>
          <a class="collapse-item" href="buttons.html">Buttons</a>
          <a class="collapse-item" href="cards.html">Cards</a>
        </div>
      </div>
    </li> -->

    <!-- Nav Item - Utilities Collapse Menu -->
    <!-- <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Utilities:</h6>
          <a class="collapse-item" href="utilities-color.html">Colors</a>
          <a class="collapse-item" href="utilities-border.html">Borders</a>
          <a class="collapse-item" href="utilities-animation.html"
            >Animations</a
          >
          <a class="collapse-item" href="utilities-other.html">Other</a>
        </div>
      </div>
    </li> -->

    <!-- 통계 메뉴-->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>통계</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">통계</h6>
          <router-link class="collapse-item" :to="`/admin/statistics/boards`">게시물 통계</router-link>
          <router-link class="collapse-item" :to="`/admin/statistics/users`">유저 통계</router-link>
          <router-link class="collapse-item" :to="`/admin/statistics/comments`">댓글 통계</router-link>
        </div>
      </div>
    </li>

    <!-- 설정 메뉴 -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-wrench"></i>
        <span>설정 및 관리</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">권한</h6>
          <a class="collapse-item" href="#">권한 설정 및 관리</a>
          <h6 class="collapse-header">아이피</h6>
          <a class="collapse-item" href="#">IP 설정 및 관리</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <!-- <div class="sidebar-heading">Addons</div> -->

    <!-- Nav Item - Pages Collapse Menu -->
    <!-- <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Login Screens:</h6>
          <a class="collapse-item" href="login.html">Login</a>
          <a class="collapse-item" href="register.html">Register</a>
          <a class="collapse-item" href="forgot-password.html"
            >Forgot Password</a
          >
          <div class="collapse-divider"></div>
          <h6 class="collapse-header">Other Pages:</h6>
          <a class="collapse-item" href="404.html">404 Page</a>
          <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
      </div>
    </li> -->

    <!-- Nav Item - Charts -->
    <!-- <li class="nav-item">
      <router-link class="nav-link" :to="`/admin/charts`">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts 예시</span>
      </router-link>
    </li> -->

    <!-- Nav Item - Tables -->
    <!-- <li class="nav-item">
      <router-link class="nav-link" :to="`/admin/tables`">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables 예시</span>
      </router-link>
    </li> -->

    <!-- 유저 관리 테이블 -->
    <li class="nav-item">
      <router-link class="nav-link" :to="`/admin/users`">
        <i class="fas fa-fw fa-table"></i>
        <span>유저 관리</span>
      </router-link>
    </li>

    <!-- 게시물 관리 테이블 -->
    <li class="nav-item">
      <router-link class="nav-link" :to="`/admin/boards`">
        <i class="fas fa-fw fa-table"></i>
        <span>게시물 관리</span>
      </router-link>
    </li>

    <!-- 댓글 관리 테이블 -->
    <li class="nav-item">
      <router-link class="nav-link" :to="`/admin/comments`">
        <i class="fas fa-fw fa-table"></i>
        <span>댓글 관리</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
</template>

<script>
import $ from "jquery";
// import 'bootstrap';
// import '../../assets/js/sb-admin-2';

export default {
  mounted() {
    // console.log('SideBar 마운트 시작');
    $("#sidebarToggle, #sidebarToggleTop").on("click", function () {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });
    // console.log('SideBar 마운트 완료');
  },
};
</script>

<style>
</style>