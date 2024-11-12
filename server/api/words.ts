export default eventHandler(async () => {
  const todos = await useDrizzle().select().from(tables.words)
  // const todos = [
  //   {
  //     letters: 'hello',
  //     createdAt: new Date(),
  //   },
  //   {
  //     letters: 'world',
  //     createdAt: new Date
  //   }
  // ]

  return todos
})
