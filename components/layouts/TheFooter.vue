<template>
    <footer class="bg-primary-600">
        <div class="bg-shape flex items-center justify-center">
            <div class="container">
                <div>
                    <div class="footer-top flex flex-col items-center pt-10 pb-10">
                        <!-- logo -->
                        <div class="logo">
                            <nuxt-link to="/">
                                <img class="h-20 w-20" src="/images/logo/logo 2.png" alt="">
                            </nuxt-link>
                        </div>
                        <!-- footer-content -->
                        <div class="justify-center text-white w-full md:w-1/2">
                           I am a professional full-stack web developer. I can design and develop any type of website, web-based application using PHP Laravel framework and Vue Js.
                        </div>

                        <!-- social icons -->
                        <div class="flex items-center justify-center mt-4">

                            <a target="_blank" href="https://www.linkedin.com/in/tanvir0emon" class="icon">
                                <Linkedin class="h-5 w-5" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/tanvir0emon" class="icon">
                                <Facebook class="h-5 w-5" />
                            </a>
                            <a arget="_blank" href="https://twitter.com/TanvirH49586431" class="icon ">
                                <Twitter class="h-5 w-5" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/tanvir0emon/" class="icon">
                                <Instagram class="h-5 w-5" />
                            </a>

                        </div>
                    </div>
                    <!-- Footer Bottom -->
                    <div class="footer-bottom border-t">
                        <p class="text-center my-4 text-white">
                            Tanvir © {{new Date().getFullYear()}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Linkedin from '../icons/Linkedin.vue';
export default {
    components: { Linkedin },};
</script>

<style lang="scss" scoped>
.icon {
    cursor: pointer;
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 0;
    margin: 5px 8px;
    @apply bg-white flex justify-center items-center rounded-md;
}

.icon:hover {
    transform: translateY(-4px);
}
</style>
