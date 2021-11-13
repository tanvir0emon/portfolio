<template>
<div>
  <!-- Card in desktop respoonse -->
<div class="hidden md:block">
<div class="flex justify-center">
  <div class="bg-white shadow-sm p-4 w-2/3 flex absolute h-36 rounded-full" style="margin-top:-70px">

    <div class="p-4 border-r-2 w-1/3 flex items-center justify-center  ">
     <div class="flex-none" >
       <Experiance class="badge" />
     </div>
     <div class="ml-4">
      <span class="text-primary-500 font-bold">1 Year Job</span>
      <span class="text-gray-400 text-sm block">Experiance</span>
     </div>
    </div>

        <div class="p-4 border-r-2 w-1/3 flex items-center justify-center ">
     <div class="flex-none" >
       <Experiance class="badge" />
     </div>
     <div class="ml-4">
        <span class="text-primary-500 font-bold">8+ Projects</span>
      <span class="text-gray-400 text-sm block">Completed</span>
     </div>
    </div>

        <div class="p-4  w-1/3 flex items-center justify-center ">
     <div class="flex-none" >
       <Experiance class="badge" />
     </div>
     <div class="ml-4">
        <span class="text-primary-500 font-bold">Support</span>
      <span class="text-gray-400 text-sm block">Online 24/7</span>
     </div>
    </div>



  </div>
</div>
  </div>

<!-- Card in mobile response -->
<div class="block md:hidden">
<div class="flex justify-center">
  <div class="bg-white  shadow-sm p-4 flex w-full h-36">

    <div class="p-2 sm:p-4 border-r-2 w-full sm:w-1/3 flex items-center justify-center  ">
     <Experiance class=" badge" />
     <div class="sm:ml-4 ml-2">
      <span class="text-primary-500 font-bold">1 Years Job</span>
      <span class="text-gray-400 text-sm block">Experiance</span>
     </div>
    </div>

        <div class="p-2 sm:p-4 border-r-2 w-full sm:w-1/3 flex items-center justify-center ">
     <Experiance class=" badge" />
     <div class="sm:ml-4 ml-2">
        <span class="text-primary-500 font-bold">8+ Projects</span>
      <span class="text-gray-400 text-sm block">Completed</span>
     </div>
    </div>

        <div class="p-2 sm:p-4 w-full sm:w-1/3 flex items-center justify-center ">
     <Experiance class=" badge" />
     <div class="sm:ml-4 ml-2">
        <span class="text-primary-500 font-bold">Support</span>
      <span class="text-gray-400 text-sm block">Online 24/7</span>
     </div>
    </div>

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
