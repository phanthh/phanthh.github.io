import ExportedImage, { ExportedImageProps } from 'next-image-export-optimizer';

export default function Image(props: ExportedImageProps) {
  return <ExportedImage {...props} />;
}
