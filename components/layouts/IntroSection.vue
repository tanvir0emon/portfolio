<template>
    <!-- details -->
    <div class="" style="background: #FAFAFC">
        <div class="container ">
            <div class="information w-full lg:flex pt-20 pb-4 px-8">
                <!-- Image -->
                <div class="lg:w-1/2 flex justify-end  ">
                    <img src="/images/hero/person 2.png" class="my-0 md:my-4 lg:my-6 h-80  mx-auto lg:mx-0 px-8" alt="">
                </div>
                <!-- Content -->
                <div class="lg:w-1/2 mt-4 md:mt-8 flex items-center">
                    <div>
                        <p class="text-secondary-500 text-md">My Intro</p>
                        <h1 class="text-3xl font-bold text-primary-500">About Me</h1>
                        <p class="text-gray-500 mt-1">Seeking a challenging career opportunity in a reputed company where I can harness my education,technical skills and creative towards making significant contribution to the growth and development of the company and thereby develop myself.</p>
                        <!-- Intro -->
                        <div class="mt-4 w-3/5 text-sm text-gray-500 ">
                            <div class="flex ">
                                <p class="w-1/2 flex">
                                    <User class="mr-2" />
                                    Name
                                </p>
                                <p class="w-1/2 whitespace-nowrap"> <span class="mr-4">:</span>Tanvir Hossain</p>
                            </div>

                            <div class="flex my-2 ">
                                <p class="w-1/2 flex">
                                    <Phone class="mr-2" />
                                    Phone
                                </p>
                                <p class="w-1/2 whitespace-nowrap"> <span class="mr-4">:</span>01879252861</p>
                            </div>

                            <div class="flex ">
                                <p class="w-1/2 flex">
                                    <Mail class="mr-2" />
                                    Email
                                </p>
                                <p class="w-1/2"> <span class="mr-4">:</span>tanvir0emon@gmail.com</p>
                            </div>
                        </div>

                        <!-- Interest -->
                        <div class="mt-8">
                            <p class="text-primary-500 text-md font-bold">My Interests</p>
                            <div class="py-2 text-sm flex justify-between w-full md:w-3/5">
                                <div class="flex text-sm">
                                    <Music class="mr-2 text-primary-500" />
                                    <p class="flex items-center ">Music</p>
                                </div>
                                <div class="flex text-sm">
                                    <Travel class="mr-2 text-primary-500" />
                                    <p class="flex items-center ">Travel</p>
                                </div>
                                <div class="flex text-sm">
                                    <Movie class="mr-2 text-primary-500" />
                                    <p class="flex items-center ">Movie</p>
                                </div>
                                <div class="flex text-sm">
                                    <Photo class="mr-2 text-primary-500" />
                                    <p class="flex items-center ">Photo</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Music from "../icons/Music.vue";
import Travel from "../icons/Travel.vue";
export default {
    components: { Music, Travel },
};
</script>

<style lang="scss" scoped>
</style>
