const NODE_ENV = process.env.NODE_ENV || 'development' // 'development' | 'production'
const PORT = Number(process.env.PORT) || 3000

export const env = {
  NODE_ENV,
  PORT,
}
