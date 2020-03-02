var htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setValue(`<!-- Enter html code here -->`, 1);
htmlEditor.setFontSize(16);

var cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/monokai");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setValue(`/* Enter css code here */`, 1);
cssEditor.setFontSize(16);

var jsEditor = ace.edit("js-editor");
jsEditor.setTheme("ace/theme/monokai");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setValue(`/* Enter js code here */`, 1);
jsEditor.setFontSize(16);


htmlEditor.getSession().on('change', function () {
    update();
})
cssEditor.getSession().on('change', function () {
    update();
})
jsEditor.getSession().on('change', function () {
    update();
})

function update() {
    var res = document.getElementById('result').contentWindow.document;
    res.open();
    res.write('<html><head><style>' + cssEditor.getValue() + '</style>');
    res.write('<script>' + jsEditor.getValue() + '</script></head>');
    res.write('<body>' + htmlEditor.getValue() + '</body></html>');
    res.close();
}
update();

document.getElementById("htmlForm").onsubmit = function (evt) {
    document.getElementById("html").value = htmlEditor.getValue();
    document.getElementById("css").value = cssEditor.getValue();
    document.getElementById("js").value = jsEditor.getValue();
}

// var htmlEditor = ace.edit("editor-html");
// htmlEditor.setTheme("ace/theme/monokai");
// htmlEditor.session.setMode("ace/mode/html");
// // htmlEditor.setValue(`<!DOCTYPE html>
// // <html>
// //     <head></head>
// //     <body>

// //     </body>
// // </html>`,1);

// var cssEditor = ace.edit("editor-css");
// cssEditor.setTheme("ace/theme/monokai");
// cssEditor.session.setMode("ace/mode/css");

// var jsEditor = ace.edit("editor-js");
// jsEditor.setTheme("ace/theme/monokai"); 
// jsEditor.session.setMode("ace/mode/javascript");


// htmlEditor.getSession().on('change',function(){
//     update();
// });

// cssEditor.getSession().on('change', function () {
//     update();
// });

// jsEditor.getSession().on('change', function () {
//     update();
// });


// function update() {
//     var idoc = document.getElementById('iframe').contentWindow.document;

//     idoc.open();
//     res.write('<style>' + cssEditor.getValue() + '</style>');
//     res.write('<script>' + jsEditor.getValue() + '</script>');
//     res.write(htmlEditor.getValue());
//     idoc.close();
// }


// htmlEditor.focus();
// cssEditor.focus();
// jsEditor.focus();

// htmlEditor.setOptions({
//     fontSize: "14pt",
//     showLineNumbers: false,
//     showGutter: false,
//     vScrollBarAlwaysVisible: true,
//     enableBasicAutocompletion: false, enableLiveAutocompletion: false
// });

// cssEditor.setOptions({
//     fontSize: "14pt",
//     showLineNumbers: false,
//     showGutter: false,
//     vScrollBarAlwaysVisible: true,
//     enableBasicAutocompletion: false, enableLiveAutocompletion: false
// });

// jsEditor.setOptions({
//     fontSize: "14pt",
//     showLineNumbers: false,
//     showGutter: false,
//     vScrollBarAlwaysVisible: true,
//     enableBasicAutocompletion: false, enableLiveAutocompletion: false
// });

// htmlEditor.setShowPrintMargin(false);
// htmlEditor.setBehavioursEnabled(false);

// cssEditor.setShowPrintMargin(false);
// cssEditor.setBehavioursEnabled(false);

// jsEditor.setShowPrintMargin(false);
// jsEditor.setBehavioursEnabled(false);


