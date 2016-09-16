// module.exports = function(grunt) {

// grunt.initConfig({
//   concat: {
//     options: {
//       separator: ';'
//     },
//     dist: {
//       src: ['js/src/*.js'],
//       dest: 'js/build/script.main.js'
//     }
//   },
//     uglify: {
//       dist: {
//         src: ['js/build/script.main.js'],
//         dest: 'js/build/sript.main.min.js'
//       }
//     }
// });

// grunt.loadNpmTasks('grunt-contrib-concat');
// grunt.loadNmpTasks('grunt-contrib-uglify');

// grunt.registerTask('default', ['concat', 'uglify']);

// };

module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      dist: {
         src: ['js/src/*.js'],
         dest: 'js/build/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/build/script.main.js'],
        dest: 'js/build/script.main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.registerTask('default', ['concat', 'uglify']);

};



