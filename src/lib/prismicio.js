import * as prismic from '@prismicio/client'

const repoName = 'your-tribe-for-life-profile-card' // Fill in your repository name
const accessToken = '' // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'page',
    uid: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/back',
  },
]

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client
}

export default createClient