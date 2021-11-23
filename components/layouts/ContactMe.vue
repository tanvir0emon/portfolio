<template>
    <!-- details -->
    <div class="" style="background: #FFFAEF">
        <div class="container ">
            <div class="information w-full lg:flex py-12 lg:py-0 px-8">


                <!-- Content -->
                <div class="lg:w-2/3 w-full flex items-center">
                    <div class="">
                        <h1 class="text-2xl  md:text-3xl font-bold text-primary-500">Have A Project In your Mind ?</h1>
                        <p class="text-gray-500  my-2">My work experties may help your company, Please check my previous works in recent work section. I am available 24/7.</p>
                         <nuxt-link to="/contact" class=" btn mt-2 md:mt-0 btn-primary">Contact Me</nuxt-link>
                    </div>
                </div>

                                <!-- Image -->
                <div class="lg:w-1/3 w-full flex justify-end">
                      <img src="/images/work.png" class="my-0 lg:my-6  h-80 mx-auto lg:mx-0 px-8" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Music from '../icons/Music.vue';
import Travel from '../icons/Travel.vue';
export default {
    components: { Music, Travel },};
</script>

<style lang="scss" scoped>
</style>
