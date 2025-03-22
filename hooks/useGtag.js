import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useGtag = (GA_TRACKING_ID) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
};

export default useGtag;
