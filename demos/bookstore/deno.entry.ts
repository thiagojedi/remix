import { router } from './app/router.ts'

export default {
  fetch: router.fetch,
  onListen: ({ port }: { port: number }) => {
    console.log(`Bookstore is running on http://localhost:${port}`)
    console.log('')
    console.log('Demo accounts:')
    console.log('  Admin:    admin@bookstore.com / admin123')
    console.log('  Customer: customer@example.com / password123')
    console.log('')
  },
}
