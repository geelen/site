import { fetchAndReturn } from '@fab/compile/utils'

export async function route(settings, path) {
  if (path.match(/lineto-circular-book-\w+.woff2$/)) {
    return fetchAndReturn(`https://buildkite.com/_next/static/assets/assets/fonts/lineto-circular-book-0415b07a.woff2`)
  }
  if (path.match(/lineto-circular-bold-\w+.woff2$/)) {
    return fetchAndReturn(`https://buildkite.com/_next/static/assets/assets/fonts/lineto-circular-bold-da46404a.woff2`)
  }
  if (path.match(/lineto-circular-black-\w+.woff2$/)) {
    return fetchAndReturn(`https://buildkite.com/_next/static/assets/assets/fonts/lineto-circular-black-44e65ad5.woff2`)
  }

  return path
}
