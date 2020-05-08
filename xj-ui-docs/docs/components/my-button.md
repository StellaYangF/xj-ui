## 基础按钮
<demo-block>
::: slot source
<xj-button>default</xj-button>
<xj-button type='danger'>danger</xj-button>
<xj-button type='warning'>warning</xj-button>
<xj-button type='info'>info</xj-button>
<xj-button type='primary'>primary</xj-button>
:::

属性 `type`，值分别有 `danger`, `warning`, `info`, `primary`

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
:::slot source
<xj-button type='primary' icon='arrow-right'>arrow-right</xj-button>
<xj-button type='primary' icon='arrow-left'>arrow-left</xj-button>
<xj-button type='primary' icon='search'>search</xj-button>
<xj-button type='primary' icon='minus'>minus</xj-button>
<xj-button type='primary' icon='location'>location</xj-button>
<xj-button type='primary' icon='edit'>edit</xj-button>
<xj-button type='primary' icon='success'>success</xj-button>
:::

添加 `icon` 属性即可，值分别有 `arrow-right`, `arrow-left`, `search`, `minus`, `location`, `edit`, `success`

:::slot highlight
```html
<xj-button type='primary' icon='arrow-right'>arrow-right</xj-button>
<xj-button type='primary' icon='arrow-left'>arrow-left</xj-button>
<xj-button icon='primary'>search</xj-button>
<xj-button type='primary' icon='minus'>minus</xj-button>
<xj-button type='primary' icon='location'>location</xj-button>
<xj-button type='primary' icon='edit'>edit</xj-button>
<xj-button type='primary' icon='success'>success</xj-button>
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