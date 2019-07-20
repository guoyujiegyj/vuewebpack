<template>
   <div class='app-container'>
       <!--顶部导航。mintui-->
       <mt-header fixed  title='我的商城啊哈哈'></mt-header>
		<!--中间部分-->
		<transition>
			<router-view></router-view>
		</transition>
       <!--//底部导航,mui-->
       <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   </div>
</template>
<script>
    export default{
  
    }
</script>  

<style lang='scss' scoped>
    .app-container{
		padding-top:40px;
		overflow-x: hidden;//去掉页面切换时的水平滚动条
	}
	//页面切换动画
	.v-enter{
		opacity: 0;
		transform: translateX(100%)
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%)
	}
	.v-enter-active,
	.v-leave-active{
		transition:all .2s linear;
		position: absolute;
	}
</style>