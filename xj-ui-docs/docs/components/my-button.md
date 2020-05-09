## 基础按钮
<demo-block>
::: slot source
<button-test1></button-test1>
:::

设置 **type** 属性，可选值：`danger`, `warning`, `info`, `primary`

::: slot highlight
```html
  <xj-button>default</xj-button>
  <xj-button type='danger'>danger</xj-button>
  <xj-button type='warning'>warning</xj-button>
  <xj-button type='info'>info</xj-button>
  <xj-button type='primary'>primary</xj-button>
```
:::
</demo-block>

## 带图标按钮
<demo-block>
::: slot source
<button-test2></button-test2>
:::

设置 **icon** 属性，可选值：`arrow-right`, `arrow-left`, `search`, `minus`, `location`, `edit`, `success`

::: slot highlight
```html
<xj-button icon='arrow-right'>arrow-right</xj-button>
<xj-button icon='arrow-left'>arrow-left</xj-button> 
<xj-button icon='search'>search</xj-button>
<xj-button icon='minus'>minus</xj-button>
<xj-button icon='location'>location</xj-button>
<xj-button icon='edit'>edit</xj-button>
<xj-button icon='success'>success</xj-button>
```
:::
</demo-block>

#### 按钮位置
<demo-block>
::: slot source
<button-test5></button-test5>
:::

设置 **icon-position** 属性值，决定按钮图标和文字顺序，可选值有：`right`(默认), `left`

::: slot highlight
```html
<xj-button icon="edit" icon-position='left'>left</xj-button>
<xj-button icon="success" icon-position='left'>left</xj-button>
```
:::

</demo-block>

## 加载中

<demo-block>
::: slot source
<button-test3></button-test3>
:::

要设置为 loading 状态，只要设置loading属性为true即可。

::: slot highlight
```html
<xj-button :loading="true">加载中</xj-button>
```
:::
</demo-block>

## 按钮组
按钮组

<demo-block>
::: slot source
<button-test4></button-test4>
:::

使用`<el-button-group>`标签来嵌套你的按钮。

::: slot highlight
```html
<xj-button-group>
      <xj-button icon="left" position="left">上一页</xj-button>
      <xj-button icon="right" position="right">下一页</xj-button>
</xj-button-group>

<xj-button-group>
    <xj-button icon="edit"></xj-button>
    <xj-button icon="edit"></xj-button>
    <xj-button icon="edit"></xj-button>
</xj-button-group>
```
:::
</demo-block>