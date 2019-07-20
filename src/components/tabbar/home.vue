<template>
    <div>
        <!--轮播-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerImg" :key = "item.img_url">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
            
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../img/1.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/2.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/3.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../img/4.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../img/5.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../img/6.png" alt="">
                    <div class="mui-media-body">美图分享</div></a></li>
           
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerImg:[]
        }
    },
    created(){
        this.getBanner()
    },
    methods:{
        getBanner(){
           
            this.$http.get('http://127.0.0.1:3000/imglist').then(result=>{
                this.bannerImg=result.body
                console.log(this.bannerImg)
            })
        }
    },
}
</script>
<style scoped lang='scss'>
   .mint-swipe{
       height:200px;
       img{
           width:100%;
           height:100%;
       }
   }
   .mui-grid-view.mui-grid-9{
       background-color: #fff;
       img{
           width:60px;
           height:60px;
       }
       .mui-media-body{
           font-size: 13px;
       }
   }
</style>
