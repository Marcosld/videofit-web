"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const FooterContainer = ({ children, className }: Props) => {
  const footerRef = React.useRef<HTMLElement>(null);

  // TODO: Perhaps it is better to remove snap on the last section... Test it nevertheless

  React.useEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;

    if (!window.matchMedia("(min-width: 48rem)").matches) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.documentElement.style.scrollSnapType = "none";
        return;
      }
      document.documentElement.style.scrollSnapType = "y mandatory";
    });

    observer.observe(footerElement);

    return () => {
      observer.unobserve(footerElement);
    };
  }, []);

  return (
    <footer ref={footerRef} className={className}>
      {children}
    </footer>
  );
};
