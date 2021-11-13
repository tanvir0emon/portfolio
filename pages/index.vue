<template>
<div>
   <hero-section></hero-section>
   <hero-card-section></hero-card-section>
   <intro-section></intro-section>
   <education-experiance-section></education-experiance-section>
   <my-work-experties></my-work-experties>
    <my-portfolio></my-portfolio>

</div>
</template>

<script>
import EducationExperianceSection from '~/components/layouts/EducationExperianceSection.vue'
import HeroCardSection from '~/components/layouts/HeroCardSection.vue'
import IntroSection from '~/components/layouts/IntroSection.vue'
import MyPortfolio from '~/components/layouts/MyPortfolio.vue'
import MyWorkExperties from '~/components/layouts/MyWorkExperties.vue'
import MyExperties from '~/components/layouts/MyWorkExperties.vue'
export default {
    components: { IntroSection, EducationExperianceSection, MyWorkExperties, MyPortfolio },}
</script>

HeroCardSection
