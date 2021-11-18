<template>
    <!-- details -->
    <div class="" style="background: #FFFAEF">
        <div class="container ">
            <div class="information w-full lg:flex py-8 px-8">

                <!-- Content -->
                <div class="lg:w-1/2 mt-4 md:mt-8 flex items-center">
                    <div>
                        <p class="text-secondary-500 text-md">My Intro</p>
                        <h1 class="text-3xl font-bold">About Me</h1>
                        <p class="text-gray-500 text-xs mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quo soluta iusto aperiam voluptas delectus officia illo adipisci tenetur expedita facere, veritatis et quas debitis explicabo fuga ipsa ipsam quibusdam?</p>
                    </div>
                </div>

                                <!-- Image -->
                <div class="lg:w-1/2 flex justify-end  ">
                      <img src="/images/contactme.png" class="my-0 md:my-4 lg:my-6 h-80  mx-auto lg:mx-0 px-8" alt="">
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
