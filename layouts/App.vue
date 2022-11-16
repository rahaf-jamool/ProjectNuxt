<script>
import PageFooter from '~/components/Common/PageFooter.vue';
import PageHeader from '~/components/Common/PageHeader.vue';

export default {
    name: 'app',
    components: {
        PageFooter,
        PageHeader
    }
};
</script>

<template>
  <div>
    <page-header />
    <Nuxt />
    <page-footer />
  </div>
</template>


