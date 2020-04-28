import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

const isMinify = process.env.BUILD_MODE === 'minify';

export default {
  input: 'src/index.js',
  output: {
    file: isMinify ? 'dist/js/r64components.min.js' : 'dist/js/r64components.js',
    format: 'umd',
    name: 'R64Components',
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
    }),
    babel({
      babelHelpers: 'runtime',
    }),
    (isMinify && terser())
  ],
};
