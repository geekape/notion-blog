const fs = require('fs')
const path = require('path')
const env = {
  NOTION_TOKEN: '145e6247037d2d1e655113d97c060153bd6f57f4d69a031b40eaf2880f5b4468c71c32ef6bd3f459862c6a13673f99eabf76a73f6b72a8650c6d871d9e2ab5006af1a54a6a78051c9e3883825d8a',
  BLOG_INDEX_ID: '6300189fce9d4877a11f5750224e863a'
}

try {
  fs.unlinkSync(path.resolve('.blog_index_data'))
} catch (_) {
  /* non fatal */
}
try {
  fs.unlinkSync(path.resolve('.blog_index_data_previews'))
} catch (_) {
  /* non fatal */
}

const warnOrError =
  process.env.NODE_ENV !== 'production'
    ? console.warn
    : msg => {
        throw new Error(msg)
      }

if (!env.NOTION_TOKEN) {
  // We aren't able to build or serve images from Notion without the
  // NOTION_TOKEN being populated
  warnOrError(
    `\nNOTION_TOKEN is missing from env, this will result in an error\n` +
      `Make sure to provide one before starting Next.js`
  )
}

if (!env.BLOG_INDEX_ID) {
  // We aren't able to build or serve images from Notion without the
  // NOTION_TOKEN being populated
  warnOrError(
    `\nBLOG_INDEX_ID is missing from env, this will result in an error\n` +
      `Make sure to provide one before starting Next.js`
  )
}

module.exports = {
  env: env,
  target: 'experimental-serverless-trace',

  webpack(cfg, { dev, isServer }) {
    // only compile build-rss in production server build
    if (dev || !isServer) return cfg

    // we're in build mode so enable shared caching for Notion data
    process.env.USE_CACHE = 'true'

    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = { ...(await originalEntry()) }
      entries['./scripts/build-rss.js'] = './src/lib/build-rss.ts'
      return entries
    }
    return cfg
  },
}
