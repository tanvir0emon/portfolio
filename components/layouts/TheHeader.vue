<template>
    <header>
        <nav class="bg-white fixed w-full shadow-sm" style="z-index: 1000;">
            <div class="container  flex items-center justify-between  h-full">
                <!-- logo -->
                <div class="logo">
                    <nuxt-link to="/">
                        <img class="h-12 w-12" src="/images/logo/Tanvir Logo.png" alt="">
                    </nuxt-link>
                </div>

                <div class="navigation hidden md:flex items-center h-full">
                    <!-- links -->
                    <ul class="flex items-center  h-full">
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link">Portfolio</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                        </li>

                    </ul>
                    <div class="ml-8">
                        <nuxt-link to="/contact" class="px-6 py-1 bg-secondary-200  text-sm text-white rounded-full">Hire Me</nuxt-link>
                    </div>

                </div>

                <!-- mobile nav items -->
                <div class="flex md:hidden">
                    <!-- burger on mobile nav -->
                    <div @click="toggleMobileNav" class="toggleIcon text-primary-500 ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
        <!-- mobile-nav -->
        <transition name="mobile-nav" mode="out-in" appear>
            <ul v-show="mobileNav" class="sidebar px-3 shadow-md" v-click-outside="hide">
                <li class="nav-item">
                    <nuxt-link to="/" class="nav-link">Portfoio</nuxt-link>
                </li>

                <li class="nav-item">
                    <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                </li>
            </ul>
        </transition>
    </header>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
    name: "TheHeader",
    data() {
        return {
            mobileNav: false,
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        hide() {
            this.mobileNav = false;
        },
    },

    mounted() {
        // prevent click outside event with popupItem.
        this.popupItem = this.$el;
    },
    // do not forget this section
    directives: {
        ClickOutside,
    },
};
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    box-shadow: 0 0 10px rgb(136 136 136 / 10%);
}

nav {
    height: 60px;
    .logo {
        margin-right: 100px;
    }
}

.nav-link {
    font-weight: 600;
    padding: 38px 5px;
    margin: 0 5px;
    font-size: 14px;
    transition: all 0.2s ease;
    @apply hover:text-primary-500;
}

.toggleIcon {
    cursor: pointer;
}

.sidebar {
    width: 100%;
    max-width: 250px;
    height: 100%;
    top: 60px;
    left: 0;
    z-index: 100;
    padding-top: 0 !important;
    @apply flex flex-col py-4 fixed bg-white md:hidden;

    .nav-item {
        .nav-link {
            @apply m-0 p-0 flex items-center justify-between;
        }
        @apply py-3 px-1;
    }
    .nav-item {
        @apply border-t border-gray-200;
    }
}

.dropdown-link {
    @apply block px-4 py-2 mt-2 text-sm font-semibold bg-transparent text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none cursor-pointer;
}

.nuxt-link-exact-active {
    @apply text-primary-500;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 0.5s ease-in-out;
}

.mobile-nav-enter,
.mobile-nav-leave-to {
    transform: translateX(-100%);
}
</style>
