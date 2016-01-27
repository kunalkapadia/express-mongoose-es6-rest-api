import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';
import babelCompiler from 'babel/register';
import * as isparta from 'isparta';

const plugins = gulpLoadPlugins();

const paths = {
	js: ['./**/*.js', '!dist/**', '!node_modules/**', '!coverage/**'],
	tests: './server/tests/*.js'
};

const options = {
	codeCoverage: {
		reporters: ['lcov', 'text-summary'],
		thresholds: {
			global: { statements: 10, branches: 10, lines: 10, functions: 10 },
			each: { statements: 0, branches: 0, lines: 0, functions: 0 }
		}
	}
};

// Clean up dist files
gulp.task('clean', () =>
	del(['dist/**', 'coverage/**', '!dist', '!coverage'])
);

// Set env variables
gulp.task('set-env', () => {
	plugins.env({
		vars: {
			NODE_ENV: 'test'
		}
	});
});

// Lint Javascript
gulp.task('eslint', () =>
	gulp.src(paths.js)
		// eslint() attaches the lint output to the "eslint" property
		// of the file object so it can be used by other modules.
		.pipe(plugins.eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(plugins.eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(plugins.eslint.failAfterError())
);

// Compile ES6 to ES5 and copy to dist
gulp.task('babel', () =>
	gulp.src([...paths.js, '!gulpfile.babel.js'], { base: '.' })
		.pipe(plugins.newer('dist'))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel())
		.on('error', (err) => {
			plugins.util.log(err);
			process.exit(1);
		})
		.pipe(plugins.sourcemaps.write('.', {
			includeContent: false,
			sourceRoot(file) {
				return path.relative(file.path, __dirname);
			}
		}))
		.pipe(gulp.dest('dist'))
);

// Start server with restart on file changes
gulp.task('nodemon', ['eslint', 'babel'], () =>
	plugins.nodemon({
		script: path.join('dist', 'index.js'),
		ext: 'js',
		ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
		tasks: ['eslint', 'babel']
	})
);

// covers files for code coverage
gulp.task('pre-test', () =>
	gulp.src([...paths.js, '!gulpfile.babel.js'])
		// Covering files
		.pipe(plugins.istanbul({
			instrumenter: isparta.Instrumenter,
			includeUntested: true
		}))
		// Force `require` to return covered files
		.pipe(plugins.istanbul.hookRequire())
);

// triggers mocha test with code coverage
gulp.task('test', ['pre-test', 'set-env'], () => {
	let reporters;
	let	exitCode = 0;

	if (plugins.util.env['code-coverage-reporter']) {
		reporters = [...options.codeCoverage.reporters, plugins.util.env['code-coverage-reporter']];
	} else {
		reporters = options.codeCoverage.reporters;
	}

	return gulp.src([paths.tests], { read: false })
		.pipe(plugins.plumber())
		.pipe(plugins.mocha({
			reporter: plugins.util.env['mocha-reporter'] || 'spec',
			ui: 'bdd',
			timeout: 6000,
			compilers: {
				js: babelCompiler
			}
		}))
		.on('error', (err) => {
			plugins.util.log(err);
			exitCode = 1;
		})
		// Creating the reports after execution of test cases
		.pipe(plugins.istanbul.writeReports({
			dir: './coverage',
			reporters
		}))
		// Enforce test coverage
		.pipe(plugins.istanbul.enforceThresholds({
			thresholds: options.codeCoverage.thresholds
		}))
		.on('end', () => {
			plugins.util.log('completed !!');
			process.exit(exitCode);
		});
});

// Run mocha with clean up, copy and babel compilation
// gulp mocha --env test
gulp.task('mocha', ['clean'], () => {
	runSequence(
		'babel',
		'test'
	);
});

gulp.task('serve', ['clean'], () => {
	runSequence('nodemon');
});

// clean and compile files, the default task
gulp.task('default', ['clean'], () => {
	runSequence('babel');
});
