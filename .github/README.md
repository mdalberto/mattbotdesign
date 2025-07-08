# 11ty boiler plate

$ npm init -y
$ npm install @11ty/eleventy --save-dev

Using the ' | safe' filter will let json data files render html elements.
For json files, if there are extra repeated things, go into the json file an delete any white space return charaters.

Nunjucks Conditional Statement Examples for Eleventy: https://design2seo.com/blog/web-development/11ty/nunjucks-if-statement-for-eleventy/

Filters for 11ty: https://11ty.rocks/eleventyjs/content/


Installation process: Run NPM install, this is an 11ty project
Setup Visual Studio code to use the SCSS compiler plugin called "Live Sass Compiler". Live Sass Compiler by Glenn Marks
It's settings.json should have this:

{
    "liveServer.settings.port": 5501,
    "security.workspace.trust.untrustedFiles": "open",
    "git.autofetch": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.donotVerifyTags": true,
    "liveSassCompile.settings.forceBaseDirectory": "",
    "liveSassCompile.settings.compileOnWatch": false,
    "liveSassCompile.settings.watchOnLaunch": true,
    "liveSassCompile.settings.useNewCompiler": true,
    "liveSassCompile.settings.showOutputWindowOn": "Warning",
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/src/assets/css/",
            "savePathReplacementPairs": null
        },
        { "format": "compressed",
            "extensionName": "-min.css",
            "savePath": "/src/assets/css/",
            "savePathReplacementPairs": null,
            "generateMap": false
        },


    ],"liveSassCompile.settings.excludeList": [
        "/**/node_modules/**",
        "/.vscode/**",
        "/**/_site/**",
        "/**/_data/**",   
        "/**/_includes/**",
        "/**/privacy/**",  
        "/**/faq/**",
        "/**/app-terms/**",
        "/**/terms/**"  
    ],"liveSassCompile.settings.includeItems": [
        "/src/assets/scss/styles.scss"],
    "explorer.confirmDelete": false,
    "liveSassCompile.settings.autoprefix": [
    ],
    "liveSassCompile.settings.partialsList": [
        "/**/_*.s[ac]ss"
    ]
}

Install Visual Studio code plugin "Live Server"

In the terminal to run the project with: npx eleventy --serve

11ty uses 'src' folder which will compile and auto copy produciton files to a '_site' folder.

Run 'Live server' on your index.html file on the root level of '_site'.

If the localhost paths are messed up look in '.eleventy.js' the setting for 'baseHref (line 14). Find your you localhost number (from Live Server) and add it to the 'baseHref' (line 14) and uncomment. You will have to revert and save before deploying the '_site' files to production!

To deploy, only copy files from '_site' folder. They should be the compiled production versions.

scss files to work on will be in the /src/scss folder. 11ty's '.eleventy.js' file has how the files get passed through to to the '_site' folder. Currently they are bundled into 1 'styles-min.css' (which is complied by using 'Live Sass Compiler' settings)

