var languages = ["C#", "Java", "Python", "JavaScript", "C", "C++", "Objective-C", "Matlab", "Ruby", "Lua", "PHP", "Swift", "Go", "Perl", "R", "Scala", "Haskell", "Clojure", "ClojureScript", "Rust", "Dart", "Elixir", "Erlang", "F#", "Fortran", "Groovy", "Haskell", "Kotlin", "Lisp", "Lua", "OCaml",  "Python", "R", "Scala", "Scheme", "Smalltalk", "TypeScript", "Visual Basic"];
function generate() {
    var item = languages[Math.floor(Math.random() * languages.length)];
   document.getElementById("text").innerHTML = "<p>Language = " + item + "</p>";
}

document.getElementById("btn").onclick = generate;
