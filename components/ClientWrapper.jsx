'use client';

import useGtag from '@/hooks/useGtag';

export default function ClientWrapper({ GA_TRACKING_ID }) {
  useGtag(GA_TRACKING_ID);
  return null;
}
