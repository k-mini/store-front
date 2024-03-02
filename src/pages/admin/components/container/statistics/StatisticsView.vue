<template>
    <board-statistics v-if="type === 'boards'"></board-statistics>
    <user-statistics v-if="type === 'users'"></user-statistics>
    <comment-statistics v-if="type === 'comments'"></comment-statistics>
</template>

<script>
import BoardStatistics from './BoardStatistics.vue';
import CommentStatistics from './CommentStatistics.vue';
import UserStatistics from './UserStatistics.vue';
export default {
    components: {
        BoardStatistics,
        CommentStatistics,
        UserStatistics,
    },
    computed: {
        type() {
            return this.$route.params.type;
        }
    }
}
</script>

<style>

</style>