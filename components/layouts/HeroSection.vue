<template>
  <div class="relative">
    <div class="hero">
      <div class="container flex flex-col justify-center lg:flex-row items-center h-full">
        <div class="w-full lg:w-1/2 my-5 md:my-10 lg:my-20 flex justify-center lg:text-left">
            <!-- left comtent -->
         <div>
          <p class="text-gray-600 text-xl">Hi, I am</p>
          <h1 class="text-4xl font-bold text-primary-500">Tanvir Hossain</h1>
          <h1 class="text-xl my-2 font-medium text-gray-800">Full Stack Developer</h1>
          <p class="text-gray-600">I am a professional full-stack web developer. I can design and develop any type of website, web-based application using PHP Laravel framework and Vue Js.</p>
          <div class="mt-4">
            <a target="_blank" href="/downloads/Tanvir Hossain.pdf" class="btn btn-primary" >Download CV</a>
             <nuxt-link to="/contact" class=" btn ml-2 mt-2 md:mt-0 btn-secondary">Contact Me</nuxt-link>
          </div>

         </div>
      <!-- Right Content -->
        </div>
        <div class="w-full lg:w-1/2">
            <img src="/images/hero/profile-1.png" class="my-0 md:my-4 lg:my-6 md:h-64 lg:h-full mx-auto lg:mx-0" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
