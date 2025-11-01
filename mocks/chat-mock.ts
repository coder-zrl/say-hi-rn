import { ChatInfo } from '../types/chat'; // Import the ChatInfo type from the types directory
const avatarImg = require('../assets/avatar/img.png'); // Import the local avatar image

/**
 * Mock data for chat conversations
 */
export const mockChats: ChatInfo[] = [
  {
    chatId: 1,
    avatar: avatarImg,
    chatTitle: '张三',
    readSeqId: 100,
    maxSeqId: 105,
    frontEndInfo: '今天晚上一起吃饭?',
    activeTime: Date.now() - 3600000, // 1 hour ago
    unreadCount: 2,
    priority: 1,
    pin: true
  },
  {
    chatId: 2,
    avatar: avatarImg,
    chatTitle: '李四',
    readSeqId: 200,
    maxSeqId: 205,
    frontEndInfo: '明天的会议准备好了吗？',
    activeTime: Date.now() - 86400000, // 1 day ago
    unreadCount: 0,
    priority: 2,
    pin: false
  },
  {
    chatId: 3,
    avatar: avatarImg,
    chatTitle: '王五',
    readSeqId: 300,
    maxSeqId: 305,
    frontEndInfo: '项目进度更新',
    activeTime: Date.now() - 172800000, // 2 days ago
    unreadCount: 5,
    priority: 3,
    pin: false
  },
  {
    chatId: 4,
    avatar: avatarImg,
    chatTitle: '赵六',
    readSeqId: 400,
    maxSeqId: 405,
    frontEndInfo: '周末有空吗？',
    activeTime: Date.now() - 259200000, // 3 days ago
    unreadCount: 0,
    priority: 4,
    pin: false
  },
  {
    chatId: 5,
    avatar: avatarImg,
    chatTitle: '开发团队群',
    readSeqId: 500,
    maxSeqId: 510,
    frontEndInfo: '新的功能已上线',
    activeTime: Date.now() - 345600000, // 4 days ago
    unreadCount: 1,
    priority: 5,
    pin: true
  },
  {
    chatId: 6,
    avatar: avatarImg,
    chatTitle: '孙七',
    readSeqId: 600,
    maxSeqId: 605,
    frontEndInfo: '上次的bug修复了',
    activeTime: Date.now() - 432000000, // 5 days ago
    unreadCount: 0,
    priority: 6,
    pin: false
  }
];