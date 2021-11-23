<template>
    <div class="py-4">
        <!-- Heading  -->
        <div class="py-8">
            <div class="mx-auto w-2/3 px-4 md:w-1/2 flex justify-center">
                <div>
                    <p class="text-secondary-500 text-center text-md">My Info</p>
                    <h1 class="text-2xl text-center font-bold text-primary-500">Education & Experience</h1>
                </div>
            </div>

            <div class="container my-2 ">
                <p class="text-gray-500 ">Though I have Telecommunication Engineering background , I loved to code.
                    So i moved my focus to programming.
                    Throughout the course of my career, I have honed my abilities in web
                    development. I am an astute problem-solver capable of prioritizing and managing complex projects
                    with proficiency. Right now I am full-stack developer in 999 it solution. In my previous role, I was Samsung experience consultant in Samsung Bangladesh where I have learned & exercised skills in communication, customer service.</p>
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
                            <p class="mb-2 text-xs">Telecom Engineer</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end">
                    <div class="card">
                        <p class="text-gray-500">Jun 2012 - Apr 2014</p>
                        <div class="card-section">
                            <p class="font-bold">Higher Secondary</p>
                            <p class="mb-2 text-xs">Science</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end">
                    <div class="card">
                        <p class="text-gray-500">Apr 2012</p>
                        <div class="card-section">
                            <p class="font-bold">Secondary</p>
                            <p class="mb-2 text-xs">Science</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right content -->
            <div class="lg:w-1/2 py-4 px-8 rounded-tr-2xl">
                <div class="flex justify-start">
                    <div class="w-96">
                        <h1 class="text-lg  py-6 font-bold border-b-2 text-primary-500">Experience</h1>
                    </div>
                </div>

                <div class="flex justify-start">
                    <div class="card">
                        <p class="text-gray-500">Jan 2021 - Continued</p>
                        <div class="card-section">
                            <p class="font-bold">999 It Solution</p>
                            <p class="mb-2 text-xs">Backend Developer</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-start">
                    <div class="card">
                        <p class="text-gray-500">Nov 2019 - Jan 2020</p>
                        <div class="card-section">
                            <p class="font-bold whitespace-nowrap ">Samsung BD</p>
                            <p class="mb-2 text-xs">Experience Consultant</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-start">
                    <div class="card">
                        <p class="text-gray-500">May 2019 - Oct 2019</p>
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
