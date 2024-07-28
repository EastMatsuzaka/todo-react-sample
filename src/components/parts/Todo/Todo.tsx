import { Checkbox, Text } from '@mantine/core';

interface TodoProps {
  /** タスク内容 */
  label: string;
  /** タスクが完了しているかどうか */
  completed: boolean;
  /**
   * タスクチェンジイベント
   * @param checked - タスクが完了しているかどうか
   */
  onChange: (checked: boolean) => void;
}

/**
 * タスクを表示するコンポーネント
 */
export function Todo({ label, completed, onChange }: TodoProps) {
  return (
    <Checkbox
      checked={completed}
      onChange={(event) => onChange(event.currentTarget.checked)}
      label={<Text td={completed ? 'line-through' : undefined}>{label}</Text>}
    />
  );
}
