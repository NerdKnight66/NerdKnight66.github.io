let x = 0;
let limit = 20;

function displayDate() {
    document.getElementById("Main").innerHTML = Date();
}


function cookieClick() {
    // if(x==0) {
    //     window.alert("Achievement Get: First Steps");
    // }
    if(x<limit) {
        x += 1;
        document.getElementById("Header").innerHTML = "The button has been clicked "+x+" times.";
        document.getElementById("Body").style.backgroundColor = "hsl(218, 24%, "+(9+x*(100/limit))+"%)";
    
        if(x==limit) {
            window.alert("You reached full brightness!");
            document.getElementById("Header").innerHTML = "The button has been clicked "+x+" times! All done now";
            var button = document.createElement("button");
            button.innerHTML = "Reset";
            var section = document.getElementById("Game Button Section");
            section.appendChild(button);
            button.addEventListener ("click", function() {
                x = 0;
                document.getElementById("Header").innerHTML = "The button has been clicked "+x+" times.";
                document.getElementById("Body").style.backgroundColor = "hsl(218, 24%, "+9+"%)";
                section.removeChild(button);
              });
        }
    }
}