/**
 * Represents a chat conversation in the messages tab
 */
export interface ChatInfo {
  /**
   * 会话ID - Session ID
   */
  chatId: number;

  /**
   * 会话头像 - Session avatar
   */
  avatar: string | number; // Can be a URL string or local asset (number in React Native)

  /**
   * 会话标题 - Session title
   */
  chatTitle: string;

  /**
   * 已读消息ID - Read message ID
   */
  readSeqId: number;

  /**
   * 最大消息ID - Maximum message ID
   */
  maxSeqId: number;

  /**
   * 最后一条消息外显的内容 - Content of the last visible message
   */
  frontEndInfo: string;

  /**
   * 活跃时间 - Active time (timestamp)
   */
  activeTime: number;

  /**
   * 未读数数量 - Unread count
   */
  unreadCount: number;

  /**
   * 会话优先级，优先级的数值越大，优先级越高 - Chat priority (higher value means higher priority)
   */
  priority: number;

  /**
   * 是否置顶：0-不置顶，1-置顶 - Whether pinned: 0-not pinned, 1-pinned
   */
  pin: boolean;
}