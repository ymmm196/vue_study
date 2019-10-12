<template>
    <div>
        {{username}}的主页
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:''
        }
    },
    created(){
        this.username = this.$route.query.username
    }
}
</script>