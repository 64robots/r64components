import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

const isMinify = process.env.BUILD_MODE === 'minify';
const output = []

if (isMinify) {
  output.push({ name: 'r64components', file: 'dist/r64components.min.js', format: 'umd' })
} else {
  const umd = { name: 'r64components', file: 'dist/r64components.js', format: 'umd' }
  const cjs = { name: 'r64components', file: 'dist/r64components.common.js', format: 'cjs' }
  const es = { name: 'r64components', file: 'dist/r64components.esm.js', format: 'es' }

  output.push(umd, cjs, es)
}

export default {
  input: 'src/index.js',
  output,
  external: [ '@babel/runtime/helpers/defineProperty' ],
  plugins: [
    commonjs(),
    vue(),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    (isMinify && terser())
  ],
};
