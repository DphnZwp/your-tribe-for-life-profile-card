import * as prismic from '@prismicio/client';

const repositoryName = 'daphnevisitekaartje';

const createClient = (params) => {
    const client = prismic.createClient(repositoryName, params);

    return client;
}

export default createClient;