<template>
    <div class="col-lg-3 sidebar">
        <Tile title="Projects" />
        <Tile title="Reading" />
        <Tile title="Listening" />
        <Tile title="Watching" />
    </div>
</template>

<script>
    import Tile from './Tile.vue'

    export default {
        name: 'sidebar',
        components: {
            Tile,
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        background-color: rgb(202, 202, 202);
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>

