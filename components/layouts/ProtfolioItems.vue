<template>
    <div>
        <!-- Shop Products -->
        <div class="bg-white shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 rounded-lg overflow-hidden mx-auto relative product">
            <!-- image -->
            <div class="bg-gray-100 flex justify-center item-center product-image relative">
                <img src="/images/portfolio/website.jpg" class="h-full w-full" alt="product" style="object-fit: cover;">

                <!-- options on hover -->
                <div class="product-options absolute flex items-center justify-center">

                    <!-- view button -->
                    <nuxt-link :to="`/`" class="h-12 w-12 bg-white hover:bg-primary-500 rounded-full shadow-md flex justify-center items-center text-primary-500 hover:text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </nuxt-link>
                </div>

                <!-- options on hover -->
                <div class="detail-options absolute flex items-center justify-center">

                    <!-- view button -->
                    <!-- details -->
                    <div class="details mt-3 text-center justify-center  flex py-2">
                        <!-- rating -->
                        <div class="  ">
                            <!-- rating component -->
                            <p class="text-primary-500 font-bold uppercase text-xl">Project Title</p>
                            <span class=" text-sm ">Project Duration</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <!-- End Shop Products -->

    </div>
</template>

<script>
export default {
    name: "VerticalProduct",

};
</script>

<style lang="scss" scoped>
.product-options {
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    transition: all 0.3s ease-in;
}

.product:hover {
    .product-image {
        @apply bg-gray-500;
        opacity: .9;
        transition: all 0.2s ease-in;

        .product-options {
            color: red;
            transform: translate(-50%, -50%);
            opacity: 1;
        }

        .detail-options {
            transform: translate(-50%, -50%);
            opacity: 1;
        }
    }
}
.detail-options {
    opacity: 0;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -20%);
    transition: all 0.3s ease-in;
}
</style>
