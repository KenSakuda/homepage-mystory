"use client";

import { useEffect, useRef } from "react";

type Source = { src: string; type: string };
type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  sources: Source[];
};

export default function AutoPlayVideo({ sources, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p !== undefined) p.catch(() => {});
  }, []);

  return (
    <video ref={ref} {...rest}>
      {sources.map(({ src, type }) => (
        <source key={src} src={`${src}#t=0.001`} type={type} />
      ))}
    </video>
  );
}
