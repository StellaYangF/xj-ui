<template>
    <div class='xj-button-group'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'xj-button-group',
    mounted() {
        let children = this.$el.children;
        children.forEach(child => console.assert(child.tagName === 'BUTTON', '子元素必须时 button'));
    },
}
</script>

<style lang="scss">
@import '../../styles/_var.scss';
    .xj-button-group {
        display: flex;
        vertical-align: center;
        button {
            border-radius: 0;
            &:not(first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                z-index: 1;
            }
            &:focus {
                z-index: 2;
            }
        }
    }
</style>