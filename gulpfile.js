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

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch('./templates/**/*.html', ['template']);
});

gulp.task("default", ["watch", "template"]);
