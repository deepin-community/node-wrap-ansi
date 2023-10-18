import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const config = {
	input: './index.js',
	output: [{
		format: 'cjs',
		file: './index.cjs',
		interop: 'auto',
		freeze: false,
		strict: false
	}],
	plugins: [
    commonjs(),
		nodeResolve({
			modulePaths: ['node_modules', ...process.config.variables.node_relative_path.split(':').map((str) => process.config.variables.node_prefix + '/' + str)],
		}),
    terser(),
	]
}

export default config;
