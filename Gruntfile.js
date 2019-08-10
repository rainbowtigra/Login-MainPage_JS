module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
        server: {
          options: {
            port: 8080,
            base: './',
            middleware: function(connect, options, middlewares) {
              // inject a custom middleware into the array of default middlewares
              middlewares.unshift(function(req, res, next) {
                if (req.url !== '/data') return next();

                res.end(JSON.stringify(grunt.file.readJSON('./src/data/products.json')));
              });
              return middlewares;
            },
          }
        }
      },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {"app/css/main.css": "src/less/main.less"}
      },
      watch: {
        files: "*.less",
        tasks: ["less"]
      }
    },
    watch: {
      styles:{
        options:{
          livereload: true,
          spawn: false,
          event: ['added','deleted','changed']
        },
        files:['**/*.less'],
        tasks:['less']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:server', 'watch']);
};
