import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';

const plugins = gulpLoadPlugins();

const paths = {
	js: ['./**/*.js', '!dist/**', '!node_modules/**', '!coverage/**']
};

// Clean up dist files
gulp.task('clean', () => {
	return del(['dist/**', 'coverage/**', '!dist', '!coverage']);
});

// Compile ES6 to ES5 and copy to dist
gulp.task('babel', () => {
	return gulp.src([...paths.js, '!gulpfile.babel.js'], {base: '.'})
		.pipe(plugins.newer('dist'))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel())
		.on('error', (err) => {
			plugins.util.log(err);
			process.exit(1);
		})
		.pipe(plugins.sourcemaps.write('.', {
			includeContent: false,
			sourceRoot: function (file) {
				return path.relative(file.path, __dirname);
			}
		}))
		.pipe(gulp.dest('dist'));
});