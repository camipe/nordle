import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  ignores: [
    '**/migrations',
    'supabase/**',
    // ...globs
  ],
})
