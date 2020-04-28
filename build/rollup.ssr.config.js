import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    name: 'r64components',
    file: 'dist/r64components.ssr.js',
    format: 'cjs',
  },
  plugins: [
    commonjs(),
    vue({ template: { optimizeSSR: true } }),
    babel({
      babelHelpers: 'runtime',
      presets: [
        [
          '@babel/preset-env',
          {
            'targets': { node: true },
          },
        ]
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
