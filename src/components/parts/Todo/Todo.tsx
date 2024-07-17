import { Checkbox, Text } from '@mantine/core';

interface TodoProps {
  /** タスク内容 */
  label: string;
  /** タスクが完了しているかどうか */
  completed: boolean;
  /**
   * タスククリックイベント
   * @param checked - タスクが完了しているかどうか
   */
  onClick?: (checked: boolean) => void;
}

/**
 * タスクを表示するコンポーネント
 */
export function Todo({ label, completed, onClick }: TodoProps) {
  return (
    <Checkbox
      checked={completed}
      onClick={onClick && ((event) => onClick(event.currentTarget.checked))}
      label={<Text td={completed ? 'line-through' : undefined}>{label}</Text>}
    />
  );
}
