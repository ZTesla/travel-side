var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport= require('postcss-import'),
mixins = require ('postcss-mixins');

gulp.task('style', function(){
	     //busqueda									//destino
return gulp.src('./app/assets/style/style.css')
 .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
 .on('error', function(errorInfo) {
	 console.log(errorInfo.toString());
	 this.emit('end');
 })
 .pipe(gulp.dest('./app/temp/style'));
});