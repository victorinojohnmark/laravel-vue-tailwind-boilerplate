<template>
    <!-- <h1>This is App component</h1> -->
    <SideBar></SideBar>
    <router-view></router-view>
</template>

<script>
    import SideBar from './components/SideBar.vue';

    export default {
        components: {
            SideBar
        }
    }
</script>