const gulp 		= require('gulp');
const sass 		= require('gulp-sass')(require('sass')); //utilizado para compliar arquivos sass
const maps = require('gulp-sourcemaps'); //utilizado apra gerar um mapa dos fontes scss
const uglify 	= require('gulp-uglify'); // minifica o arquivo
const miniImg 	= require('gulp-imagemin'); // utilizado para comprimir imagens

function toCSS(){ //complia o scss sem comprimir
    return gulp.src('./source/main.scss')
        .pipe(maps.init()) //inicia a rotina para gerar o mapa
        .pipe(sass({
            outputStyle: 'compressed' //gera um css comprimido
        }))
        .pipe(maps.write('./maps')) //cria o mapa nesta pasta definida
        .pipe(gulp.dest('./css'));
}

function tinyImg(){ //comprime uma imagem
    return gulp.src('./source/img/*.*')
        .pipe(miniImg())
        .pipe(gulp.dest('./img'));
}

function tinyJS(){ //converte em um arquivo minificado
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
}

exports.default = function(){
    gulp.watch('./source/*.scss', { ignoreInitial: false },gulp.series(toCSS));
    gulp.watch('./source/img/*.*', { ignoreInitial: false },gulp.series(tinyImg));
    gulp.watch('./source/js/*.js', { ignoreInitial: false },gulp.series(tinyJS));
}