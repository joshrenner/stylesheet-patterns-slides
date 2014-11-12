var gulp = require('gulp'),
	fileinclude = require('gulp-file-include');

gulp.task('template', function() {
	gulp.src(['./templates/index.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: './templates/slides/'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task("default", ["template"]);
