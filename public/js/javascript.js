    var path = window.location.pathname;
    switch (path) {
    case "/":
        document.getElementById("home-nav").className += "active";
        break;
    case "/aboutMe":
        document.getElementById("about-nav").className += "active";
        break;
    case "/contact":
        document.getElementById("contact-nav").className += "active";
        break;
    }

    var clicks = 0;

   function onClick() {
       clicks += 1;
       document.getElementById("clicks").innerHTML = clicks;
   };

