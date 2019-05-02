const gulp = require("gulp");
const fse = require("fs-extra");
const generator = require("asyncapi-generator");
const path = require("path")

const appRoot = process.env.PWD; // will work only if the app is initialized from the root.

const api_docs_file = path.join(appRoot, "build/api.yaml");
const swagger_html_file = path.join(appRoot, "build/html", "index.html");


gulp.task("delete-build", function() {
    return fse.remove("./build");
})

gulp.task("copy-folder", function () {

    return gulp.src("./static/**/*")
        .pipe(gulp.dest("./build/html"))
})


gulp.task("generate-swagger", function () {
    return generator.generateTemplateFile({
        template: "html",
        file: "index.html",
        config: {
            asyncapi: api_docs_file
        }
    }).then((result) => {
        // `result` is a string containing the generated file.
        fse.writeFile(swagger_html_file, result, err => {
            if (err) {
                logger.writeLog("Failed to create index html --- " + err);
            }
        });
    }).then(() => {
        // fse.copy()
    })
        .catch(console.error);
})
