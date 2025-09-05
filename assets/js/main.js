// Set current year without blocking rendering
(function(){
  try{
    var y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  }catch(e){}
})();

