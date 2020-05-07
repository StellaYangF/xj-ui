<!-- # Button Component -->

## basic button

<xj-button>default</xj-button>

<xj-button type='danger'>danger</xj-button>
<xj-button type='warning'>warning</xj-button>
<xj-button type='info'>info</xj-button>
<xj-button type='primary'>primary</xj-button>

```html
<xj-button>default</xj-button>

<xj-button type='danger'>danger</xj-button>
<xj-button type='warning'>warning</xj-button>
<xj-button type='info'>info</xj-button>
<xj-button type='primary'>primary</xj-button>
```

## button with icon

<xj-button icon='arrow-right'>info</xj-button>

<xj-button icon='search'>default button</xj-button>
<xj-button type='primary' icon='minus'>primary button</xj-button>
<xj-button type='warning' icon='arrow-left'>warning button</xj-button>
<xj-button type='danger' icon='location'>danger loading button</xj-button>
<xj-button type='info' icon='edit'>info button</xj-button>
<xj-button type='success' icon='success' icon-position='left' >info icon left</xj-button>
<xj-button :loading='true'>default button</xj-button>

```html
<xj-button icon="search">default button</xj-button>
<xj-button type="primary" icon="minus">primary button</xj-button>
<xj-button type="warning" icon="arrow-left">warning button</xj-button>
<xj-button type="danger" icon="location">danger loading button</xj-button>
<xj-button type="info" icon="edit">info button</xj-button>
<xj-button type="success" icon="success" icon-position="left"
  >info icon left</xj-button
>
<xj-button  :loading="true">default button</xj-button>
```

## 加载中

要设置为 loading 状态，只要设置loading属性为true即可。


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

## button group
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

<xj-button-group>
  <xj-button icon='arrow-left'  icon-position='left'>上一页</xj-button>
  <xj-button >第一页</xj-button>
  <xj-button icon='arrow-right'>下一页</xj-button>
</xj-button-group>

```html
<xj-button-group>
  <xj-button icon='arrow-left'  icon-position='left'>上一页</xj-button>
  <xj-button >第一页</xj-button>
  <xj-button icon='arrow-right'>下一页</xj-button>
</xj-button-group>
```

