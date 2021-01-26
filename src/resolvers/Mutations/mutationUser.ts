import { forwardTo } from 'prisma-binding'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const APP_SECRET = process.env.APP_SECRET

export const createUser = async (parent, args, ctx, info) => {
  return forwardTo('prisma')(parent, args, ctx, info)
}

export const updateUser = async (parent, args, ctx, info) => {
  return forwardTo('prisma')(parent, args, ctx, info)
}

export const signup = async (_, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.mutation.createUser(
    {
      data: {
        name: args.name,
        email: args.email,
        password: password,
      },
    }
  )

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user
  }
}

export const login = async (parent, { email, password }, ctx, info) => {
  const user = await ctx.prisma.query.user({ where: { email } }, '{ id name email password }')

  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }
  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user
  }
}
