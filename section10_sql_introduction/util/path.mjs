// const path = require('path');

// module.exports = path.dirname(process.mainModule.filename);
//-----------------------msj file system-------------------
import { dirname } from 'path';

export default dirname(process.mainModule.filename);