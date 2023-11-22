/**
 * Custom 500 page is still not available in /app dir. Maintain this custom 500 page for now.
 */

import React from 'react';
import { InternalServerError } from '@/views/InternalServerError';

export default function Custom500() {
    return <InternalServerError />;
}
