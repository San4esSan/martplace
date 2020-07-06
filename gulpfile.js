let gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin');

gulp.task('sass', function(){              	   //короче - делай следующее:
	return gulp.src('app/scss/style.scss')			//бери данный файл
	.pipe(sass({outputStyle: 'compressed'}))		//прессуй его
	.pipe(rename({suffix: '.min'}))					//добавляй к имени файла .min
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 8 versions']	//подрубаем autoprefixer с поддержкой последних 8 версий
	}))					
	.pipe(gulp.dest('app/css'))						//и сохраняй его в этой папке
	.pipe(browserSync.reload({stream: true}))		//затем перегружай браузер
});

gulp.task('style', function(){
	return gulp.src([
		'node_modules/normalize.css/normalize.css', 							//бери данный файл
		'node_modules/slick-carousel/slick/slick.css',						//бери данный файл
		'node_modules/magnific-popup/dist/magnific-popup.css'				//бери данный файл
	])
	.pipe(concat('libs.min.css'))													//и объединяй их в этом файле	
	.pipe(cssmin())																	//минифицуруй его
	.pipe(gulp.dest('app/css'))													//и сохраняй его в этой папке						
});

gulp.task('script', function(){
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js',						//бери данный файл
		'node_modules/magnific-popup/dist/jquery.magnific-popup.js'		//бери данный файл
	])
	.pipe(concat('libs.min.js'))													//и объединяй их в этом файле
	.pipe(uglify())																	//минифицуруй его
	.pipe(gulp.dest('app/js'))														//и сохраняй его в этой папке						
});

gulp.task('html', function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync.init({
		 server: {
			  baseDir: "app/"
		 }
	});
});

gulp.task('watch', function(){											//дорагуша 
	gulp.watch('app/scss/style.scss', gulp.parallel('sass'))		//следи за файлом style.scss, и если произошли изменения запускай таск sass
	gulp.watch('app/*.html', gulp.parallel('html'))					//следи за всеми файлами .html, и если произошли изменения запускай таск html
	gulp.watch('app/js/*.js', gulp.parallel('js')) 					//следи за всеми файлами .js, и если произошли изменения запускай таск js
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync')) //запусти паралельно эти таски
