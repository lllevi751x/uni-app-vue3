<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>    <button type="primary" @click="toMine">{{ $t('mine.title') }}</button>    <button type="primary" @click="changeLocale">切换语言</button>
	</view>
</template>

<script setup>
	import { ref } from 'vue'  import { t , setLocale} from '@/utils/i18n.js'    const title = t('index.title')    const toMine = () => {    uni.navigateTo({      url: '/main/pages/mine/index'    })  }  const  changeLocale = () => {    setLocale(uni.getLocale() === 'en' ? 'zh-Hans' : 'en')  }
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
