/**
 * not-found.tsx page in /app dir is still not reachable with redirect. Maintain this custom 404 page for now.
 */

import React from 'react';
import { NotFound } from '@/views/NotFound';

export default function Custom404() {
    return <NotFound />;
}
