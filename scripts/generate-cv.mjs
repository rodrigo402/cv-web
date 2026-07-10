import puppeteer from 'puppeteer'
import { build, preview } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { existsSync, mkdirSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const outputPath = resolve(root, 'public', 'rodrigo-gabriel-reynoso-cv.pdf')

async function run() {
  // ── 1. Build ──────────────────────────────────────────────
  console.log('📦  Building project...')
  await build({
    root,
    base: '/cv-web/',
    logLevel: 'warn',
    resolve: {
      alias: { '@': resolve(root, 'src') }
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          cvprint: resolve(root, 'cv-print.html'),
        }
      }
    }
  })

  // ── 2. Start preview server ───────────────────────────────
  console.log('🌐  Starting preview server...')
  const server = await preview({
    root,
    base: '/cv-web/',
    logLevel: 'warn',
    preview: { port: 4174, open: false }
  })

  const baseUrl = 'http://localhost:4174/cv-web'
  const printUrl = `${baseUrl}/cv-print.html`
  console.log(`📄  Navigating to ${printUrl}`)

  // ── 3. Launch Puppeteer ───────────────────────────────────
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()

    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })

    await page.goto(printUrl, { waitUntil: 'networkidle0', timeout: 30000 })

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready')

    // Extra wait to ensure fonts rendered
    await new Promise(r => setTimeout(r, 500))

    // ── 4. Generate PDF ───────────────────────────────────────
    if (!existsSync(resolve(root, 'public'))) {
      mkdirSync(resolve(root, 'public'), { recursive: true })
    }

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    })

    console.log(`✅  PDF saved → ${outputPath}`)

  } finally {
    await browser.close()
    server.httpServer.close()
  }

  // ── 5. Rebuild to include the PDF in dist/ ────────────────
  console.log('📦  Rebuilding to include PDF in dist/...')
  await build({
    root,
    base: '/cv-web/',
    logLevel: 'warn',
    resolve: {
      alias: { '@': resolve(root, 'src') }
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          cvprint: resolve(root, 'cv-print.html'),
        }
      }
    }
  })

  console.log('🎉  Done! PDF included in dist/')
  console.log(`    Path: public/rodrigo-gabriel-reynoso-cv.pdf`)
}

run().catch(err => {
  console.error('❌  Error:', err)
  process.exit(1)
})
