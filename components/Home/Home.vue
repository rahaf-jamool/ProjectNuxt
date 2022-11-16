<script>
import PageFooter from '~/components/Common/PageFooter.vue';
import PageHeader from '~/components/Common/PageHeader.vue';
import IconsCategory from './IconsCategory.vue';
import MainSlider from "./MainSlider";
// import ResentArrivals from './ResentArrivals.vue';

export default {
  name: "home",

  components: {
        PageHeader,
        PageFooter,
        MainSlider,
        IconsCategory,
        // ResentArrivals
    }
};
</script>

<template>
<main>
    <!-- header-area-start -->
    <PageHeader />
    <!-- header-area-end -->

    <!-- slider area start here -->
    <MainSlider />
    <!-- slider area start end -->

    <icons-category/>

    <!-- <resent-arrivals/> -->
    <!-- PageFooter area start here -->
    <PageFooter />
    <!-- PageFooter area end here -->

</main>
</template>

<style scoped>
</style>
