// import { SubmitKey } from "../store/config";

const cn = {
  WIP: "该功能仍在开发中……",
  Error: {
    Unauthorized:
      "现在是未授权状态，请点击左下角[设置](/#/settings)按钮输入访问密码。",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Nav: {
    Articles: "文章",
    Tags: "标签",
    About: "关于",
    Chat: "对话",
    Memory: "记忆",
    Export: "导出",
    Contents: "目录",
    // Video: "视频",
    // Projects: "项目",
  },
  Articles: {
    Title: "文章",
    More: "查看更多",
    Next: "下一篇 文章",
    Previous: "上一篇 文章",
    All: "全部文章",
    BackList : "返回文章列表",
    Latest: "最新文章",
    Mytags: "我的文章标签",
    SubTitle: "在这里你可以找到一些有趣的文章",
    Search: "搜索文章",
    Create: "新建文章",
    Edit: "编辑文章",
    Delete: "删除文章",
    DeleteConfirm: "确认删除？",
    EditModal: {
      Title: "编辑文章",
    },
  },
  About: {
    Title: "关于",
    Me: "关于我",
  },
  Export: {
    Title: "导出聊天记录为 Markdown",
    Copy: "全部复制",
    Download: "下载文件",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT 的消息",
  },
  Memory: {
    Title: "历史摘要",
    EmptyContent: "对话内容过短，无需总结",
    Send: "自动压缩聊天记录并作为上下文发送",
    Copy: "复制摘要",
    Reset: "重置对话",
    ResetConfirm: "重置后将清空当前对话记录以及历史摘要，确认重置？",
  },
  Home: {
    NewChat: "新的聊天",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "设置选项",
    Actions: {
      ClearAll: "清除所有数据",
      ResetAll: "重置所有选项",
      Close: "关闭",
      ConfirmResetAll: "确认重置所有配置？",
      ConfirmClearAll: "确认清除所有数据？",
    },
    Lang: {
      Name: "Language",
      All: "所有语言",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        vi: "Vietnamese",
      },
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },

    Update: {
      Version: (x: string) => `当前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "检查更新",
      IsChecking: "正在检查更新...",
      FoundUpdate: (x: string) => `发现新版本：${x}`,
      GoToUpdate: "前往更新",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "预览气泡",
      SubTitle: "在预览气泡中预览 Markdown 内容",
    },
    Mask: {
      Title: "面具启动页",
      SubTitle: "新建聊天时，展示面具启动页",
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "API Key",
      SubTitle: "使用自己的 Key 可绕过密码访问限制",
      Placeholder: "OpenAI API Key",
    },
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
  Context: {
    Toast: (x: any) => `已设置 ${x} 条前置上下文`,
    Edit: "当前对话设置",
    Add: "新增预设对话",
  },
  Plugin: {
    Name: "插件",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
  },
};

export type LocaleType = typeof cn;

export default cn;
