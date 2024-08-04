import logoImage from '@/assets/logo.png';
import { Image } from '@mantine/core';

export function Logo() {
  return <Image src={logoImage} alt="Logo" w={130} />;
}
