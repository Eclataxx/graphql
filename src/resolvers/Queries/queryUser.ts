const { forwardTo } = require('prisma-binding');

const user = async (parent, args, ctx, info) => (
    forwardTo('prisma')(parent, args, ctx, info )
)
const users = async (parent, args, ctx, info) => (
    forwardTo('prisma')(parent, args, ctx, info )
)

module.exports = { user, users }