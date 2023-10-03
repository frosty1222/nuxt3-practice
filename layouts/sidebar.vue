<template>
    <div class="grap-contnent">
        <div class="main-control">
            <div class="left-side-bar">
                <div class="header-content">
                    <div class="left-avatar">
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" width="200" height="200">
                    </div>
                    <div class="right-info">
                        <p>Tên:Mr Jonhson</p>
                        <p>Tuổi:17</p>
                        <p>Lớp:12</p>
                    </div>
                </div>
                <legend>Nội Dung</legend>
                <div class="body-side-bar">
                    <div class="list-item">
                        <ul >
                            <li v-for="(li ,index) in List" :key="index"><NuxtLink>{{ li.name }}  <Icon name="ep:arrow-down-bold" @click="open(index,li.name,li)"/></NuxtLink>
                               <div class="toggle-down" v-show="isOpen && isOpen.name === li.name">
                                    <ul>
                                        <li v-for="(ob, index2) in li.childObject" :key="index2"><span>{{ ob.name }} <Icon name="ep:arrow-down-bold" @click="openSecondLayer(index2,ob.name)"/></span>
                                            <div class="unit-toggle">
                                                <ul>
                                                    <li v-for="(ui, index3) in ob.unitObject"  v-show="isOpenSecond && isOpenSecond.name === ob.name">{{ ui.name }}</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                               </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right-head-bar">
                <div class="head-bar">
                    <div class="child-bar">
                        <ul>
                            <li v-for="(h, index) in helperList">
                                <span>{{ h.name }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="out-layout">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
 data () {
   return {
    isOpen:{
    index:null,
    name:''
   },
   isOpenSecond:{
    index:null,
    name:''
   },
   count:1,
   countSecond:1,
   List:null,
   helperList:null
   }
 },
 methods:{
    open(index,name){
        try {
            this.count ++;
            if(this.count % 2 == 0){
                this.isOpen.index = index;
                this.isOpen.name = name;
                console.log(this.isOpen.index)
            }else{
                this.isOpen.index = null;
                this.isOpen.name = null
                console.log(this.isOpen.index)
            }
        } catch (error) {
            console.log(error)
        }
    },
    openSecondLayer(index,name){
        try {
            this.countSecond ++;
            if(this.countSecond % 2 == 0){
                this.isOpenSecond.index = index;
                this.isOpenSecond.name = name;
                console.log(this.isOpenSecond.index)
            }else{
                this.isOpenSecond.index = null;
                this.isOpenSecond.name = null
                console.log(this.isOpenSecond.index)
            }
        } catch (error) {
            console.log(error)
        }
    }
 },
 created(){
    this.List = [
        {
            name:"Toán",status:false,
            childObject:[
                {
                    name:"Đại Số",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Hình Học",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Ngữ Văn",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Tiếng Anh",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Lịch Sử",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Hóa Học",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Địa Lí",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Sinh Học",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        },
        {
            name:"Giáo Dục Công Dân",status:false,
            childObject:[
                {
                    name:"Kì 1",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
                {
                    name:"Kì 2",status:false,
                    unitObject:[
                        {
                            name:"bài 1",status:false
                        },
                        {
                            name:"bài 2",status:false
                        },
                        {
                            name:"bài 3",status:false
                        },
                        {
                            name:"bài 4",status:false
                        },
                    ]
                },
            ]
        }
    ]
    this.helperList = [
        {
            name:"Bài đã học",status:false
        },
        {
            name:"Bài mới học",status:false
        },
        {
            name:"lịch học tuần",status:false
        },
        {
            name:"Lịch thi tuần",status:false
        },
        {
            name:"Lịch thi tháng",status:false
        },
        {
            name:"Quản lí điểm",status:false
        },
        {
            name:"Kế hoạch học tập",status:false
        },
        {
            name:"lịch sử học tập",status:false
        },
        {
            name:"lưu ý",status:false
        },
        {
            name:"Cập nhật thông tin cá nhân",status:false
        },
    ]
   }
 }
</script>
<style lang="scss" scoped>
  .router-link-exact-active{
      color: #12b488;
  }
  .grap-contnent{
    padding: none;
    margin: none;
     .main-control{
        display: flex;
        justify-content: space-between;
        .left-side-bar{
            background-color: rgb(192,192,192);
            width: 25%;
            height: 100vh;
            legend{
                height: 42px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 2px solid;
                font-weight: 800;
            }
            .header-content{
                display: flex;
                justify-content: left;
                border-bottom: 2px solid;
                .left-avatar{
                   margin-right: 10px;
                }
                .right-info{

                }
            }
            .body-side-bar{
                width: 100%;
                .list-item{
                    width: 100%;
                    ul{
                        padding:0px 0px;
                        li{
                            list-style: none;
                            padding: 0px 5px;
                            min-height: 35px;
                            display: block;
                            margin-bottom: 5px;
                            cursor: pointer;
                            height:auto;
                            position: relative;
                            a{
                                font-weight: 700;
                                height:32px;
                                padding: 6px 0px;
                                display: flex;
                                align-items: center;
                                &:hover{
                                    border:1px solid lightseagreen;
                                    border-radius: 5px;
                                    width: 100%;
                                    display: flex;
                                    justify-content: left;
                                    align-items: center;
                                }
                                svg{
                                    color: antiquewhite;
                                    position: absolute;
                                    right: 10px;
                                }
                            }
                            .toggle-down{
                                width: 100%;
                                li{
                                    span{
                                        list-style: none;
                                        display: block;
                                        padding: 7px 3px;
                                        height: auto;
                                        position: relative;
                                        &:hover{
                                            background-color: #fff;
                                            color: #000;
                                            border-radius: 5px;
                                        }
                                        svg{
                                            color: #000;
                                            position: absolute;
                                            right: 10px;
                                        }
                                    }
                                    .unit-toggle{
                                        width: 100%;
                                        ul{
                                            li{
                                                list-style: none;
                                                display: flex;
                                                justify-content: space-between;
                                                align-items: center;
                                                &:hover{
                                                    background-color: #fff;
                                                    color: #000;
                                                    border-radius: 5px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .right-head-bar{
            width: 75%;
            display: block;
            overflow: hidden;
            position: relative;
            .head-bar{
                background-color: rgb(128,128,128);
                width: 100%;
                padding: 0px;
                height: 100px;
                position: fixed;
                display: flex;
                align-items: center;
                .child-bar{
                    ul{
                        padding: 0px;
                        display: flex;
                        align-items: center;
                        li{
                            list-style: none;
                            padding: 7px 10px;
                            background-color: #12b488;
                            color: #fff;
                            margin-left: 10px;
                            cursor: pointer;
                            border-radius: 5px;
                            font-weight: 800;
                            &:hover{
                                background-color: #fff;
                                color: #000;
                            }
                        }
                    }
                }
            }
        }
     }
  }
</style>