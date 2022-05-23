var languages = ["C", "C++", "Java", "Python", "JavaScript", "Objective-C", "Matlab", "Ruby", "Lua", "PHP", "Swift", "Go", "Perl", "R", "Scala", "Haskell", "Clojure", "ClojureScript", "Rust", "Dart", "Elixir", "Erlang", "F#", "Fortran", "Groovy", "Haskell", "Kotlin", "Lisp", "Lua", "OCaml", "Scheme", "Smalltalk", "TypeScript", "Visual Basic", "Cobol", "Prolog", "Ada", "Assembly", "C#", "D", "Go", "Java", "JavaScript", "Objective-C", "Matlab", "Ruby", "Lua", "PHP", "Swift", "Go", "Perl", "R", "Scala", "Haskell", "Clojure", "ClojureScript", "Rust", "Dart", "Elixir", "Erlang", "F#", "Fortran", "Groovy", "Haskell", "Kotlin", "Lisp", "Lua", "OCaml", "Scheme", "Smalltalk", "TypeScript", "Visual Basic", "Cobol", "Prolog", "Ada", "Assembly", "C#", "D", "Go", "Java", "JavaScript", "Objective-C", "Matlab", "Ruby", "Lua", "PHP", "Swift", "Go", "Perl", "R", "Scala", "Haskell", "Clojure", "ClojureScript", "Rust", "Dart", "Elixir", "Erlang", "F#", "Fortran", "Groovy", "Haskell", "Kotlin", "Lisp", "Lua", "OCaml", "Scheme", "Smalltalk", "TypeScript", "Visual Basic", "Cobol", "Prolog", "Ada", "Assembly", "C#", "D", "Go", "Java", "JavaScript", "Objective-C", "Matlab", "Ruby", "Lua", "PHP", "Swift", "Go", "Perl", "R", "Scala", "Haskell", "Clojure", "ClojureScript", "Rust", "Dart", "Elixir", "Erlang", "F#", "Fortran", "Groovy", "Haskell", "Kotlin", "Lisp", "Lua", "OCaml", "Scheme", "Smalltalk", "TypeScript", "Visual Basic", "Cobol", "Prolog", "Ada", "Assembly", "C#", "D", "Go", "Java", "JavaScript", "Objective-C", "Matlab", "Ruby", "Lua", "PHP", "Swift", "Go", "Perl", "R"];
function generate() {
    var item = languages[Math.floor(Math.random() * languages.length)];
   document.getElementById("text").innerHTML = "<p>Language = " + item + "</p>";
}

function download(){
    window.location.href = "https://github.com/micziz/languege-generator"
}

function source(){
    window.location.href = "https://github.com/micziz/languege-generator"
}

document.getElementById("btn").onclick = generate;
document.getElementById("download-btn").onclick = download;
document.getElementById("source-btn").onclick = source;
document.addEventListener('DOMContentLoaded', function() {
    var item = languages[Math.floor(Math.random() * languages.length)];
    document.getElementById("text").innerHTML = "<p>Language = " + item + "</p>";
 }, false);