import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const UID = 'visitekaartje';
    const client = createClient({ fetch, request });
    const document = await client.getByUID('visitekaartje', UID);

    if (document) {
        return { document };
    }

    error(404, 'Not found');
}