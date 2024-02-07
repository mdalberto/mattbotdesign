// file that gets used by 11ty compiling
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy({"src/assets/scss/fonts" : "assets/css/fonts" });
    eleventyConfig.addPassthroughCopy({"src/assets/scss/styles-min.css" : "assets/css/styles-min.css" });
    eleventyConfig.addPassthroughCopy("src/assets/img/");
    eleventyConfig.addPassthroughCopy("src/assets/js/");
    eleventyConfig.addPassthroughCopy("src/assets/vendor/");
    eleventyConfig.addPassthroughCopy("src/web.config");
    eleventyConfig.addWatchTarget("src/assets/scss/");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
    //   // The base URL: defaults to Path Prefix
      //baseHref: "http://localhost:8080/_site/",
       //baseHref: "",
       extensions: "html",
     });

    return {
        dir: {
          input: 'src',
          includes: '_includes',
          output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
      };
}