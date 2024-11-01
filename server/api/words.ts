export default eventHandler(async () => {
  const todos = await useDrizzle().select().from(tables.words)

  return todos
})
