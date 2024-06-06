import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';

export default {
   input: 'src/index.js',
   output: {
      file: 'public/bundle.js',
      format: 'iife'
   },
   plugins: [
      postcss({
         config: {
           path: './postcss.config.js',
         },
         extensions: ['.css'],
         minimize: true,
         inject: {
           insertAt: 'top',
         },
       }),
      nodeResolve({
         extensions: ['.js', '.jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-react'],
         extensions: ['.js', '.jsx']
      }),
      commonjs(),
      replace({
         preventAssignment: false,
         'process.env.NODE_ENV': '"production"'
      })
   ]
}