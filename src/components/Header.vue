<template>
  <div :class="openNav == true ? 'show nss-navbar' : 'nss-navbar'">
    <div class="content">
      <div class="logo">
        <li class="nav-item-ns" style="list-style-type:none;">
          <router-link to="/" custom v-slot="{ navigate, href }">
            <a class="ns-nav-a" @click="navigate" :href="href">MestMovie </a>
          </router-link>
        </li>
      </div>
      <ul class="menu-list">
        <div class="icon cancel-btn" @click="openNav = !openNav">
          <i class="fa fa-times"></i>
        </div>
        <li class="nav-item-ns">
          <router-link to="/" custom v-slot="{ navigate, href }">
            <a
              class="ns-nav-a"
              :class="$route.path == '/' ? 'active' : ''"
              @click="navigate"
              :href="href"
              >Ana Sayfa
            </a>
          </router-link>
        </li>
      </ul>
      <div class="icon menu-btn" @click="openNav = !openNav">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nss-navbar .content {
  margin: auto;
  padding: 5px 10px;
}

.nss-navbar {
  width: 100%;
  z-index: 2;
  padding: 10px;
  transition: all 0.3s ease;

  background: #272f4e;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.24);
  margin: 0;
}
.nss-navbar.fixed {
  top: 0;
  position: fixed;
}
.nss-navbar .content {
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nss-navbar .logo a {
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
}
.menu-list .nav-item-ns .ns-nav-a.active {
  border-bottom: 2px solid #5463a3;
}
.nss-navbar .menu-list {
  display: inline-flex;
  z-index: 999;
}

.menu-list .nav-item-ns {
  list-style: none;
  padding: 0 5px;
  margin-right: 1.5rem;
}

.menu-list .nav-item-ns .ns-nav-a {
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

@media (min-width: 950px) {
  .menu-list .nav-item-ns .ns-nav-a:after {
    display: block;
    content: "";
    border-bottom: 2px solid #5463a3;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }

  .menu-list .nav-item-ns .ns-nav-a:hover:after {
    transform: scaleX(1);
  }
  .menu-list .nav-item-ns .ns-nav-a:after {
    transform-origin: 50% 50%;
  }
  .menu-list .nav-item-ns .ns-nav-a:after {
    transform-origin: 50% 50%;
  }
}

.icon {
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: none;
}

.menu-list .cancel-btn {
  position: absolute;
  right: 30px;
  top: 20px;
}

@media (max-width: 950px) {
  .content {
    padding: 5px 20px;
  }

  .icon {
    display: block;
  }

  .icon.hide {
    display: none;
  }

  .nss-navbar .menu-list {
    position: fixed;
    height: 100%;
    width: 100%;
    max-width: 100%;
    left: -100%;
    top: 0px;
    display: block;
    padding: 40px 0;
    background: #272f4e;
    transition: all 0.1s ease;
    margin: 0;
  }

  .nss-navbar.show .menu-list {
    left: 0%;
  }

  .nss-navbar .menu-list .nav-item-ns {
    padding-left: 2rem;
    padding-top: 1.5rem;
  }

  .nss-navbar .menu-list .nav-item-ns .ns-nav-a {
    font-size: 16px;
    margin-left: -100%;

    color: white;
  }

  .nss-navbar.show .menu-list .nav-item-ns .ns-nav-a {
    margin-left: 0px;
  }
}

@media (max-width: 280px) {
  .nss-navbar .menu-list {
    width: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      openNav: false,
    };
  },
  watch: {
    $route() {
      this.openNav = false;
    },
  },
};
</script>
