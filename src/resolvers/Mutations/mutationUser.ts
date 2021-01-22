const { forwardTo } = require('prisma-binding')

const createUser = async (parent, args, ctx, info) => {
    return forwardTo('prisma')(parent, args, ctx, info)
}

const updateUser = async (parent, args, ctx, info)  => {
  return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
  createUser,
  updateUser
}