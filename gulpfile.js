import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import csso from 'gulp-csso';
import GulpUglify from 'gulp-uglify';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

// Styles

export const styles = () => {
  return gulp.src( 'scss/style.scss', { sourcemaps: true } )
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( postcss( [
      autoprefixer()
    ] ) )
    .pipe( gulp.dest( 'css', { sourcemaps: '.' } ) )
    .pipe( browser.stream() );
}

export const cssmin = () => {
	return gulp.src(['css/style.css'])
		.pipe( csso() )
		.pipe( rename( { extname: '.min.css' } ) )
		.pipe( gulp.dest( 'css' ) )
}

// Minify and concat JS files

export const mainJSmin = () => {
	return gulp.src( [ 'js/main.js' ] )
		.pipe( concat( 'tempAll.js' ) )
		.pipe( GulpUglify() )
		.pipe( rename( 'main.min.js' ) )
    	.pipe( gulp.dest( 'js' ) );
}

export const slidersJSmin = () => {
	return gulp.src( [ 'js/sliders.js' ] )
		.pipe( concat( 'tempSliders.js' ) )
		.pipe( GulpUglify() )
		.pipe( rename( 'sliders.min.js' ) )
    	.pipe( gulp.dest( 'js' ) );
}

// Server

const server = ( done ) => {
  browser.init( {
    server: {
      baseDir: '.'
    },
    cors: true,
    port: 8080,
	open: true,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
	// Doing Tasks
	gulp.watch( 'scss/**/*.scss', gulp.series( styles ), gulp.series( cssmin ), browser.reload );
	gulp.watch( 'js/main.js', gulp.series( mainJSmin ) );
	gulp.watch( 'js/sliders.js', gulp.series( slidersJSmin ) );

	// Reload browser
	gulp.watch( 'js/*.js', browser.reload );
	gulp.watch( 'assets/scss/**/*.scss', browser.reload );
	gulp.watch( '*.html' ).on( 'change', browser.reload );
	gulp.watch( './**/*.html' ).on( 'change', browser.reload );
}

export default gulp.series(
  styles, server, watcher, cssmin, mainJSmin, slidersJSmin
);
