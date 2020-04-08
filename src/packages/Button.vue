<template>
    <button class='xj-button' :class='btnClass' @click="$emit('click')">
        <span v-if='this.$slots.default'>
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'xj-button',
    props: {
        type: {
            type: String,
            default: '',
            validator(type) {
                if (type && !['primary', 'warning', 'success', 'danger', 'info'].includes(type)) {
                    console.error(`type-${type} 类型必须为: ${['primary', 'warning', 'succcess', 'danger', 'info'].join(', ')} `)
                }
                return true;
            }
        }
    },
    computed: {
        btnClass() {
            let classes = [];
            if (this.type) {
                classes.push(`xj-button-${this.type}`);
            }
            return classes;
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
 @import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.xj-button {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 12px 20px;
    height: $height;
    font-size: $font-size;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
    &:hover {
        border-color: $border-color;
        background: $background;
    }
    &:focus, &:active {
        color: $active-color;
        border-color: $active-color;
        background: $background;
        outline: none;
    }
    @each $type, $color in (primary: $primary, success: $success, warning: $warning, danger: $danger, info: $info ) {
        &-#{$type} {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    } 
    @each $type, $color in (primary: $primary-hover, success: $success-hover, warning: $warning-hover, danger: $danger-hover, info: $info-hover ) {
        &-#{$type}:hover {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    } 
    @each $type, $color in (primary: $primary-active, success: $success-active, warning: $warning-active, danger: $danger-active, info: $info-active ) {
        &-#{$type}:focus, &-#{$type}:active {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    } 
}
</style>