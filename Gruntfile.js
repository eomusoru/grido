module.exports = function(grunt) {
    'use strict';
    
    var path = require('path');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        premailer: {
            main: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: './',
                    ext: '.inline.html'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },             
                files: [{
                    expand: true,
                    cwd: './scss/',
                    src: ['**/*.scss'],
                    dest: './css/',
                    ext: '.css'
                }]
            }
        },

        watch: {
            css: {
                files: ['./scss/**/*.scss'],
                tasks: ['sass', 'premailer:main'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-premailer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'sass',
        'premailer:main',
        'watch'
    ]);

    grunt.registerTask('default', 'build');
};