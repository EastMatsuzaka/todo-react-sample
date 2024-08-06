import { Stack, Loader } from '@mantine/core';
import { AsyncTodoList } from './parts/AsyncTodoList';
import { Suspense } from 'react';

export function AsyncTodoPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Stack>
        <AsyncTodoList />
      </Stack>
    </Suspense>
  );
}
