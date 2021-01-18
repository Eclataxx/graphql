const { forwardTo } = require('prisma-binding');

const address = async (parent, args, ctx, info) => (
    forwardTo('prisma')(parent, args, ctx, info )
)
const addresses = async (parent, args, ctx, info) => (
    forwardTo('prisma')(parent, args, ctx, info )
)

module.exports = { address, addresses }