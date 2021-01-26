import { forwardTo } from 'prisma-binding'
import * as jwt from 'jsonwebtoken'
const APP_SECRET = process.env.APP_SECRET

export const user = async (parent, args, ctx, info) => (
  forwardTo('prisma')(parent, args, ctx, info)
)
export const users = async (parent, args, ctx, info) => (
  forwardTo('prisma')(parent, args, ctx, info)
)
// const getUser = async (ctx) => {
//   const Authorization = ctx.req.request.get('Authorization')
//   if (Authorization && Authorization !== 'null') {
//     const token = Authorization;
//     const { userId } = jwt.verify(token, APP_SECRET)
//     const user = await ctx.prisma.query.user({ where: { id: userId } }, '{ id name email role posts { id content } }')
//     return user
//   } else {
//     throw new Error('Not Authorized')
//   }
// }

export const me = async (parent, args, ctx, info) => {
//   const user = await getUser(ctx)
//   return user
  return;
}