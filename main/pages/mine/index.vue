<template>  <view>{{ title }}</view>
</template>

<script setup>  import { ref } from 'vue'  import { t } from '@/utils/i18n'    const title = ref(t('mine.title'))
</script>

<style>
</style>