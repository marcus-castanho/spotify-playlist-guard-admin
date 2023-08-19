/**
 * Custom 500 page is still not available in /app dir. Maintain this custom 500 page for now.
 */

import { InternalServerError } from '@/views/InternalServerError';
import React from 'react';

export default function Custom500() {
    return <InternalServerError />;
}
