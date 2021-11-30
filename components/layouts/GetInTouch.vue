<template>
    <div class="information py-10"  >
        <!-- Heading  -->
        <div class="mx-auto w-1/2 px-4 md:w-1/2 flex justify-center my-4">
            <div class=" text-center">
                <p class="text-gray-600 text-md">Contact Me</p>
                <h1 class="text-2xl font-bold text-primary-500">Get In Touch</h1>
            </div>
        </div>


      <div class="container ">
        <div class="md:flex  w-10/12 mx-auto text-gray-700 px-0 lg:px-8">

              <!-- form -->
          <div class="md:w-2/3 w-full  lg:mt-0">
            <div class="mt-8 grid grid-cols-2 gap-4">
              <input-field class="col-span-2 md:col-span-1"  placeholder="Your Name"></input-field>
              <input-field class="col-span-2 md:col-span-1" placeholder="Your Email"></input-field>
              <input-field class="col-span-2" placeholder="Subject"></input-field>
              <text-field class="col-span-2" placeholder="Your Query" row="5"></text-field>
              <button-field type="button"  class="w-44 whitespace-nowrap uppercase py-3" label="Submit message"></button-field>
            </div>
          </div>
          <!-- information -->
          <div class="md:w-1/3 w-full ml-8">
            <!-- 1st -->
            <div class="flex items-center mt-8 w-full">
              <div class="contact-badge ">
                <HomeIcon class="h-6 w-6 text-white flex-none" />
              </div>
              <div class="ml-3 md:w-3/5">
                <h6 class="uppercase font-semibold">Location</h6>
                <p class="text-gray-600 text-sm mt-1">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <!-- 2nd -->
            <div class="flex items-center mt-5 w-full">
              <div class="contact-badge ">
                <Phone class="h-6 w-6 text-white flex-none" />
              </div>
              <div class="ml-3 md:w-3/5">
                <h6 class="uppercase font-semibold">Phone</h6>
                <p class="text-gray-600 mt-1 text-sm">
                  <span class="block">+880 1879252861</span>
                  <span>+880 1676899323</span>
                </p>
              </div>
            </div>
            <!-- 3rd -->
            <div class="flex items-center mt-5 w-full">
              <div class="contact-badge ">
                <Mail class="h-6 w-6 text-white flex-none" />
              </div>
              <div class="ml-3 md:w-3/5">
                <h6 class="uppercase font-semibold">email address</h6>
                <p class="text-gray-600 mt-1 text-sm">
                  <span class="block">tanvir0emon@gmail.com</span>
                  <span>tanvir.e61@gmail.com</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
import Database from "../icons/Database.vue";
import Design from "../icons/Design.vue";
import Devlopment from "../icons/Devlopment.vue";
export default {
    components: { Devlopment, Database, Design },
};
</script>

<style lang="scss" scoped>
.information {
  background-image: linear-gradient(rgba(242, 244, 248, 0.9), rgba(242, 244, 248, 0.9)), url("/images/map.png");
  background-attachment: fixed;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-position: left bottom;
}

.contact-badge {
  @apply bg-primary-500 p-2 h-10  rounded-full text-white font-bold ;
}

</style>
