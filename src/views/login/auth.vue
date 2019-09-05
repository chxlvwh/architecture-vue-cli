<template>
    <div class="auth-container"></div>
</template>

<script>
    export default {
        name: "auth",
        computed: {},
        mounted() {
            setTimeout(()=>{
                this.getUser();
            },100)
        },
    }
</script>