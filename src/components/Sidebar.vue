<template>
    <div class="col-lg-2 sidebar">
            <Tile title="Projects" backgroundImage="" route="/projects"/>
            <Tile title="Reading" backgroundImage="" route="/reading"/>
            <Tile title="Listening" backgroundImage="" route="/listening"/>
            <Tile title="Watching" backgroundImage="" route="/watching"/>
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
        align-items: center;
        background-color: rgb(202, 202, 202);
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow-y: auto;
    }
</style>

