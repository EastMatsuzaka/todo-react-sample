import { Provider, WritableAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

type AnyWritableAtom = WritableAtom<unknown, any[], any>;
type InitialValues = (readonly [AnyWritableAtom, unknown])[];
interface TestProviderProps {
  /**
   * 初期値設定 (Atom と初期値のタプル) 配列
   * @example [[todoListAtom, todoListInitialValues]]
   */
  initialValues: InitialValues;
  /** 子要素 */
  children: React.ReactNode;
}
const HydrateAtoms = ({ initialValues, children }: TestProviderProps) => {
  useHydrateAtoms(initialValues);
  return children;
};

/**
 * Jotai の Provider と初期値を設定するコンポーネント
 * https://jotai.org/docs/guides/testing#injected-values
 */
export const TestJotaiProvider = ({
  initialValues,
  children,
}: TestProviderProps) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
);
