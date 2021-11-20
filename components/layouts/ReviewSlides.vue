<template>
    <div class="w-full mx-auto">
        <client-only>
            <vue-slick-carousel v-bind="reviewsSettings">
                <!-- review -->
                <div v-for="(review, i) in reviews" :key="i">
                    <div class="text-center px-10 md:px-20 lg:px-28">
                        <h5 class="text-sm   mt-2 text-gray-700">
                            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, architecto. -->
                            {{ review.body }}
                        </h5>

                        <p class="text-gray-900 md:text-md leading-8 mb-1 font-bold">
                            <!-- Tanvir Hasan -->
                            {{ review.name }}
                        </p>

                        <div class="flex justify-center">
                            <img class="h-20 w-20" :src="review.img" alt="">
                        </div>

                        <div class="rating flex justify-center ">
                            <!-- rating component -->

                            <star-rating :rating="review.rating" :read-only="true" :star-size="15" :padding="5" :increment="0.5" :show-rating="false" active-color="#F59E0B" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="margin-top: -10px"></star-rating>

                        </div>
                    </div>
                </div>

            </vue-slick-carousel>
        </client-only>
    </div>
</template>

<script>
export default {
    name: "ReviewSlides",

    data() {
        return {
            reviewsSettings: {
                dots: true,
                autoplay: false,
                arrows: false,
                edgeFriction: 0.35,
                infinite: true,
                speed: 500,
                pauseOnDotsHover: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 690,
                        settings: {
                            arrows: false,
                        },
                    },
                ],
            },

            reviews: [
                {
                    body: "Work ethic is a belief that work and diligence have a moral benefit and an inherent ability, virtue or value to strengthen character and individual abilities. It is a set of values centered on importance of work and manifested by determination or desire to work hard.",
                    name: "Tanvir Hasan",
                    img: `/images/hero/person.png`,
                    rating: "5",
                },

                {
                    body: "Tanvir is very much professional and his communication with client is impressive. I Hope our work will be continued as long as possible ",
                    name: "Jon Makenzi",
                    img: `/images/hero/person.png`,
                    rating: "4.5",
                },

                {
                    body: " Very much professional and his communication with client is impressive. I Hope our work will be continued as long as possible. And i will recommend him with 5 star rating ",
                    name: "Karim Abdullah",
                    img: `/images/hero/person.png`,
                    rating: "4.5",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scope>
.slick-dots {
    margin-top: 20px;
    position: relative;
    bottom: -7px;

    .slick-dots li.slick-active button:before {
        color: red;
    }
}
</style>
