const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/beta-private/sandbox')(router)
require('./routes/alpha')(router)
require('./routes/beta-private/learning')(router)
require('./routes/beta-private/iteration-1')(router)
require('./routes/beta-private/iteration-2')(router)
require('./routes/beta-private/iteration-3')(router)
require('./routes/beta-private/iteration-4')(router)
require('./routes/beta-private/iteration-5')(router)
require('./routes/beta-private/iteration-6')(router)
require('./routes/beta-private/iteration-7')(router)
require('./routes/beta-private/iteration-8')(router)
require('./routes/beta-private/iteration-9')(router)
require('./routes/beta-private/iteration-10')(router)
require('./routes/beta-private/iteration-11')(router)
require('./routes/beta-private/iteration-12')(router)
require('./routes/beta-private/iteration-13')(router)
require('./routes/beta-private/iteration-14')(router)
require('./routes/beta-private/iteration-15')(router)
require('./routes/beta-private/iteration-16')(router)
require('./routes/beta-private/iteration-17')(router)
require('./routes/beta-private/iteration-18')(router)
require('./routes/beta-private/iteration-19')(router)
require('./routes/beta-private/iteration-20')(router)
require('./routes/beta-private/iteration-21')(router)
require('./routes/beta-private/iteration-22')(router)
require('./routes/beta-private/iteration-23')(router)
require('./routes/beta-private/iteration-24')(router)
require('./routes/beta-private/iteration-25')(router)
require('./routes/beta-private/iteration-26')(router)
require('./routes/beta-private/iteration-27')(router)
require('./routes/beta-private/iteration-27-b')(router)
require('./routes/beta-private/iteration-28')(router)
require('./routes/beta-private/iteration-28-b')(router)
require('./routes/beta-private/iteration-28-c')(router)
require('./routes/beta-private/iteration-29')(router)
require('./routes/beta-private/iteration-30')(router)
require('./routes/beta-private/iteration-31')(router)

// releases
require('./routes/releases/1-0-3')(router)
require('./routes/releases/1-0-4')(router)

module.exports = router
