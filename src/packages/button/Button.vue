<template>
    <button class='xj-button' :class='btnClass' @click="$emit('click', $event)" :disabled='loading'>
        <span v-if='$slots.default'>
            <slot></slot>
        </span>
        <xj-icon :icon='icon' v-if="icon && !loading" class='icon'></xj-icon>
        <xj-icon icon='loading' v-if="loading" class='icon'></xj-icon>
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
        },
        icon: String,
        iconPosition: {
            type: String,
            default: 'right',
            validator(type) {
                if (type && !['left', 'right'].includes(type)) {
                    console.error(`icon-position 必须为：${['left', 'right'].join(', ')}`)
                }
                return true;
            }
        },
        loading: Boolean,
    },
    computed: {
        btnClass() {
            let classes = [];
            if (this.type) {
                classes.push(`xj-button-${this.type}`);
            }
            if (this.iconPosition) {
                classes.push(`xj-button-${this.iconPosition}`)
            }
            return classes;
        },
    },
    methods: {
    }
}
</script>
<style lang="scss">
 @import '@/styles/_var.scss';
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
    align-items: center;
    margin: 0 0 2px 0;
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
            fill: #fff;
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
    .icon {
        width: 16px;
        height: 16px;
    }
    &-left {
        svg{ order:1; margin-right:4px }
        span { order:2 };
    }
    &-right {
        span{ order:1 }
        svg{ order:2; margin-left: 4px };
    }
    &[disabled], &[disabled]:hover, &[disabled]:focus, &[disabled]:active {
        cursor: not-allowed;
        border: 1px solid $border-color;
        background: $background;
        color: $color;
    }
}

</style>