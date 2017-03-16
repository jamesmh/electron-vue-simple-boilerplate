<template>
    <div>
        <small>Inside child-component...</small>
        <a :href="link">
            {{ label }}
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            link: this.$globals.resources['github-link'],
            label: this.$globals.resources['github-link-text']
        }
    }
}
</script>

<style scoped lang="scss">
    a {
        text-align: center;
        margin:auto 0;
    }
</style>