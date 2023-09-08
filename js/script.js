const firebaseConfig = {
    apiKey: "AIzaSyDupDe0yXSdkoGiJ0gvK1oZl7DEPEIGLIg",
    authDomain: "c2cfilms-ca217.firebaseapp.com",
    databaseURL: "https://c2cfilms-ca217-default-rtdb.firebaseio.com",
    projectId: "c2cfilms-ca217",
    storageBucket: "c2cfilms-ca217.appspot.com",
    messagingSenderId: "227746546662",
    appId: "1:227746546662:web:73475bdd87f962ac244c27",
    measurementId: "G-V3BL3C1FRT"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// ==========================================
// firebase code  FINISHED 
// ==========================================

// =================================  footer connection  =================================

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the footer content
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footerPlaceholder").innerHTML = data;
        });
});
// =================================  footer connection end  =================================

// =================================  about us coonection =================================

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the footer content
    fetch("aboutus.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("idaboutus").innerHTML = data;
        });
});
// =================================  about us coonection end  =================================


let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
