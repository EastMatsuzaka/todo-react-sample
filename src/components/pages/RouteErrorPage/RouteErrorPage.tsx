import { Box, Center, Title, Text } from '@mantine/core';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export function RouteErrorPage() {
  const error = useRouteError();

  return (
    <Center pt={100}>
      <Box>
        <Title>Error</Title>
        {isRouteErrorResponse(error) && (
          <>
            <Title order={3}>{error.status}</Title>
            <Text>{error.statusText}</Text>
          </>
        )}
      </Box>
    </Center>
  );
}
