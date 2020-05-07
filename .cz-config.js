module.exports = {
  types: [
    { value: "feature", name: "特性: 一个新特性" },
    { value: "fix", name: "修复: 修复一个 bug" },
    { value: "docs", name: "文档: 变更的只有文档" },
    { value: "style", name: "格式: 空格、分号等格式修复" },
    { value: "refactor", name: "重构: 注意和 bug 修复、新增特性分开" },
    { value: "perf", name: "性能: 性能提高" },
    { value: "test", name: "测试: 新增测试" },
    { value: "chore", name: "杂物: 辅助代码，如生成代码的库" },
    { value: "revert", name: "撤销: 提交撤销" },
    { value: "WIP", name: "进程工作: 进程工作" },
  ],

  scopes: [
    { name: "按钮" },
    { name: "表单" },
    { name: "功能" },
    { name: "订单" },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择一个你提交的类型：",
    scope: "选择一个 scope （可选）：",
    // used if allowCustomScopes is true
    customScope: "指明改变化的 scope：",
    subject: "祈使句形式简短写出变化：",
    body:
      '提供更详细的改变描述，换行（可选）：',
    breaking: "列出重大改变（可选）：",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["footer"],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};