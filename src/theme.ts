import { createTheme, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = createTheme({
  fontFamily: 'Noto Sans JP',
  colors: {
    appColor: [
      '#e0fbff',
      '#cbf2ff',
      '#9ae2ff',
      '#64d2ff',
      '#3cc5fe',
      '#23bcfe',
      '#09b8ff',
      '#00a1e4',
      '#0090cd',
      '#007cb5',
    ],
  },
  primaryColor: 'appColor',
});
