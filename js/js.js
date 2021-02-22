document.addEventListener('DOMContentLoaded', () => {

  document.getElementById("closebtn").addEventListener("click", openNav);
  document.getElementById("abreMenu").addEventListener("click", openNav);


  for (const links of document.getElementsByClassName("close")) {
    links.addEventListener("click", openNav);
  }




  let isInViewport = function (elem) {
    let distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  let h3s = document.querySelectorAll('h3');

  window.addEventListener('scroll', function (event) {
    h3s.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add("escribir");
      } else {
        element.classList.remove("escribir");
      }
    });
  }, false);




});




function openNav() {
  document.getElementById("nav").classList.toggle("active");
}
