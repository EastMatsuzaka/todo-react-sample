import { Stack } from '@mantine/core';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <Stack>
      <NavLink to="/">Todo</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/async-todo">API Request Todo</NavLink>
    </Stack>
  );
}
