<template>
    <div class="container mb-12 p-4">
        <!-- Heading  -->
        <div class="mx-auto w-2/3 px-4 md:w-1/2 flex justify-center my-12">
            <div class=" text-center">
                <p class="text-gray-600 text-md">Specialized In</p>
                <h1 class="text-2xl font-bold text-primary-500">My Work Expertise</h1>
            </div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4">

          <div class="p-4 shadow-md card mx-2  my-5 lg:my-0 border rounded-tr-3xl">
            <Design class="expertise-badge" style="margin-top:-45px" />
            <div class="mt-4">
              <p class="font-bold">Web Design</p>
            <span class="text-xs mt-2">Expert In web design using HTML, CSS(Bootstrap/Tailwind) framework with vue-nuxt/php-blade.</span>
            </div>
          </div>

          <div class="p-4 shadow-md card mx-2  my-5 lg:my-0 border rounded-tr-3xl">
            <Devlopment class="expertise-badge" style="margin-top:-45px" />
            <div class="mt-4">
             <p class="font-bold">Web Development</p>
            <span class="text-xs mt-2">I am Expert web developer on the frontend using modern frameworks like VueJS/ php-Blade</span>
            </div>
          </div>

          <div class="p-4 shadow-md card mx-2  my-5 lg:my-0 border rounded-tr-3xl">
            <Database class="expertise-badge" style="margin-top:-45px" />
            <div class="mt-4">
              <p class="font-bold">SQL Database</p>
            <span class="text-xs mt-2">Expert in querying raw data &  managing data held in a relational database management system -MySQL(mariaDb, innodb)</span>
            </div>
          </div>

          <div class="p-4 shadow-md card mx-2  my-5 lg:my-0 border rounded-tr-3xl">
            <Fire class="expertise-badge" style="margin-top:-45px" />
            <div class="mt-4">
              <p class="font-bold">Php / Laravel</p>
            <span class="text-xs mt-2">I am  professional specialized in developing web applications using Laravel Framework within PHP programming language.</span>
            </div>
          </div>
</div>
    </div>
</template>

<script>
import Database from '../icons/Database.vue';
import Design from '../icons/Design.vue';
import Devlopment from '../icons/Devlopment.vue';
export default {
    components: { Devlopment, Database, Design },};
</script>

<style lang="scss" scoped>

 .card:nth-child(even) {
  @apply bg-primary-500 text-white ;

  .expertise-badge{
    @apply bg-white p-1  md:p-2 h-14  rounded-lg text-primary-500 font-bold border;
  }
}

.expertise-badge {
  @apply bg-primary-500 p-1  md:p-2 h-14  rounded-lg text-white font-bold ;
}
</style>
