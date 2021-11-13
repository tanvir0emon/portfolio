<template>
    <div class=" mb-4 p-4" style="background: #FAFAFC">
        <!-- Heading  -->
        <div class="mx-auto w-2/3 px-4 md:w-1/2 flex justify-center my-12">
            <div class=" text-center">
                <p class="text-secondary-500 text-md">My Portfolio</p>
                <h1 class="text-2xl font-bold text-primary-500">My Works</h1>
            </div>
        </div>

      <div>
        Content Here
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
