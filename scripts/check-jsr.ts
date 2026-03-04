import { syncJsrJson } from '@prefer-jsr/sync-jsr-json'

const result = await syncJsrJson({
  dryRun: true, // Test without writing changes
})

// Check what would be synced
result.syncedPackages.forEach((pkg) => {
  console.log(`Package: ${pkg.packageName}`)
  pkg.changes.forEach((change) => {
    console.log(`  - ${change}`)
  })
})
