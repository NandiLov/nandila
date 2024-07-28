function toggleReadMore() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }
  
