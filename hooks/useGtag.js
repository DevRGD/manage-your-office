'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useGtag = (GA_TRACKING_ID) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, GA_TRACKING_ID]);
};

export default useGtag;
