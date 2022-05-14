import Image from 'components/Image';
import { useTheme } from 'next-themes';
import React from 'react';

export default function ImageWithTheme(props: any) {
  const { theme } = useTheme();

  return (
    <Image
      {...props}
      alt={props.alt}
      src={theme === 'light' ? props.light : props.dark}
    />
  );
}
