export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task',
  },
  async run() {
    // eslint-disable-next-line no-console
    console.log('Running DB seed task...')
    const words = [
      {
        letters: 'hello',
        createdAt: new Date(),
      },
      {
        letters: 'world',
        createdAt: new Date(),
      },
    ]
    await useDrizzle().insert(tables.words).values(words)
    return { result: 'success' }
  },
})
