const previewSecret = 'asf67asdf768a' // Copy the string you used for SANITY_PREVIEW_SECRET
const localUrl = 'http://localhost:3000'
const remoteUrl = `https://cms-sanity-six.vercel.app/`

export default function resolveProductionUrl(document) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

  return `${baseUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}