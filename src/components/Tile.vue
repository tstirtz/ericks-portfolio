<template>
    <a class="tile" v-bind:href="route">
        <div class="tile-content">
            <h2>{{title}}</h2>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['title', 'backgroundImage', 'route']
    }
</script>

<style lang="scss" scoped>
    .tile {
        background-color: rgb(94, 94, 94);
        width: 90%;
        margin: 5% 0px;
        position: relative;
        
        &-content {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: #333;
            color: #fff;
            line-height:100%;
            height:100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:first-child {
            margin-top: 10%;
        }

        &:last-child {
            margin-bottom: 10%;
        }
    }

    .tile:before {
        content: "";
        display: block;
        padding-top: 100%;
        /* initial ratio of 1:1*/
    }
</style>

