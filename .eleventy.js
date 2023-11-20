// file that gets used by 11ty compiling
 const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/images/");

    eleventyConfig.addWatchTarget("src/css/");
     eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
    //   // The base URL: defaults to Path Prefix
      // baseHref: "buckley-dev/",
       baseHref: "",
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