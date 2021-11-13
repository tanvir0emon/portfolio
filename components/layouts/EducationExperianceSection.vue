<template>
    <div class="py-4">
        <!-- Heading  -->
        <div class="mx-auto w-2/3 px-4 md:w-1/2 flex justify-center py-8">
            <div>
                <h1 class="text-2xl text-center font-bold text-primary-500">My Education & Experiance</h1>
                <p class="text-gray-500 text-xs my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quo soluta iusto aperiam voluptas delectus officia illo adipisci tenetur expedita facere, veritatis et quas debitis explicabo fuga ipsa ipsam quibusdam?</p>
            </div>
        </div>

        <!-- content -->
        <div class="information w-full lg:flex">
            <!-- Left content -->
            <div class="lg:w-1/2 p-4 rounded-tr-2xl" style="background: #FFFAEF">
                <div class="flex justify-end">
                    <div class="w-96">
                        <h1 class="text-lg  py-6 font-bold border-b-2 text-primary-500">Education</h1>
                    </div>
                </div>

                <div class="flex justify-end">
                    <div class="card">
                        <p class="text-gray-500">Aug 2014 - May 2019</p>
                        <div class="card-section">
                            <p class="font-bold">Bsc In Engineering</p>
                            <p class="mb-2 text-xs">Telecom Engineere</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end">
                    <div class="card">
                        <p class="text-gray-500">Jun 2012 - Apr 2014</p>
                        <div class="card-section">
                            <p class="font-bold">Higher Secondary</p>
                            <p class="mb-2 text-xs">Scince</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end">
                    <div class="card">
                        <p class="text-gray-500">Apr 2012</p>
                        <div class="card-section">
                            <p class="font-bold">Secondary</p>
                            <p class="mb-2 text-xs">Scince</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right content -->
            <div class="lg:w-1/2 py-4 px-8 rounded-tr-2xl">
                <div class="flex justify-start">
                    <div class="w-96">
                        <h1 class="text-lg  py-6 font-bold border-b-2 text-primary-500">Experiance</h1>
                    </div>
                </div>

                <div class="flex justify-start">
                    <div class="card">
                        <p class="text-gray-500">Jan 2021 - Continued</p>
                        <div class="card-section">
                            <p class="font-bold">999 It Solution</p>
                            <p class="mb-2 text-xs">Backend Devloper</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-start">
                    <div class="card">
                        <p class="text-gray-500">Nov 2019 - Jan 2020</p>
                        <div class="card-section">
                            <p class="font-bold whitespace-nowrap ">Samsung BD</p>
                            <p class="mb-2 text-xs">Experiance Consultant</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-start">
                    <div class="card">
                        <p class="text-gray-500">May 2019 - Oct 2020</p>
                        <div class="card-section">
                            <p class="font-bold">Global Brand Ltd</p>
                            <p class="mb-2 text-xs">Marketing Executive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
    @apply w-96 flex justify-between items-center text-sm py-4;
}
.card-section {
    @apply border-b-2 w-40 text-right p-2;
}
</style>
