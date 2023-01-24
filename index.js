const Loaders = require('./loaders')
const app = require('./server')

Loaders.start()  //patrón Singleton

app.listen(8080, () => console.log('Server Up'))