/* jshint esversion: 6 */
let version = require('../package.json').version;

import babel from 'rollup-plugin-babel';

export default {
    format: 'cjs',
    moduleName: 'orel',
    entry: 'src/Orel.js',
    dest: 'dist/orel-src.js',
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: 'es2015-rollup'
        }),
        //uglify()
    ],
    legacy: true
};
