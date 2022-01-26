function showNavBar() {
    let nav = document.getElementById("myTopnav");
    let title = document.querySelector('.title');
    let paragraph = document.querySelector('.paragraph');
    if (nav.className === "topnav") {
      nav.className += " responsive";
      title.className += " background";
      paragraph.className += " background";
    } else {
      nav.className = "topnav";
      title.className = "title";
      paragraph.className = "paragraph";
    }
  }
  