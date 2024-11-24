import dotenv from 'dotenv'

dotenv.config({ path: './env/.env' })

export const baseUrl = process.env.BASE_URL!
export const stagingUsername = process.env.STAGING_USERNAME
export const stagingPassword = process.env.STAGING_PASSWORD
