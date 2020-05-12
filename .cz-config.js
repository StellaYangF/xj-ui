module.exports = {
  types: [
    { value: "feature", name: "feature: 一个新特性" },
    { value: "fix", name: "fix: 修复一个 bug" },
    { value: "docs", name: "documents: 变更的只有文档" },
    { value: "style", name: "style: 空格、分号等格式修复" },
    { value: "refactor", name: "refactor: 注意和 bug 修复、新增特性分开" },
    { value: "perf", name: "performance: 性能提高" },
    { value: "test", name: "test: 新增测试" },
    { value: "chore", name: "chore: 辅助代码，如生成代码的库" },
    { value: "revert", name: "revert: 提交撤销" },
    { value: "WIP", name: "work in progress: 进程工作" },
  ],

  scopes: [
    { name: "cz" },
    { name: "ignore" },
    { name: "button" },
    { name: "form" },
    { name: "function" },
    { name: "carousel" },
    { name: "carousel-item" },
    { name: "container" },
    { name: "directive" },
    { name: "config" },
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

// cz-customizable
// cz-conventional-changelog