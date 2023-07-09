/*--------------------FELHASZNÁLÓ ÜDVÖZLÉS------------------------------*/
const felhasznalo = window.sessionStorage.getItem("ssUsername");
const span = document.getElementById("udv");
const kijelentkezes = document.getElementById('kijelentkezes');
if (felhasznalo) {
  span.textContent = "Üdvözöljük " + felhasznalo + "!";
  kijelentkezes.innerHTML = "<a href='login_index.html' class='#kijelentkezes'>Kijelentkezés</a>";
} else {
    kijelentkezes.innerHTML = "<a href='login_index.html' class='#kijelentkezes'>Bejelentkezés</a>"
}

/*-------------------FÁJL FELTÖLTÉS---------------------------------*/



const uploadButton = document.getElementById("upload-button");
uploadButton.addEventListener("click", function() {
  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("multiple", "");
  fileInput.click();

  fileInput.addEventListener("change", function() {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name;
      const fileExt = fileName.split(".").pop().toLowerCase();
      const fileDiv = document.createElement("div");
      fileDiv.classList.add("file");
      fileDiv.setAttribute("data-filepath", URL.createObjectURL(file));

      const img = document.createElement("img");
      if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' ){
        img.setAttribute("src", "../images/picture.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='fajlmappa'){
        img.setAttribute("src", "../images/folder.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='flv' || fileExt=='avi' || fileExt=='wmv' || fileExt=='mp4'){
        img.setAttribute("src", "../images/video.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='txt' || fileExt=='doc' || fileExt=='docx'){
        img.setAttribute("src", "../images/document.png");;
        img.setAttribute("alt", fileExt);
        console.log(fileExt);
      }
      else if(fileExt=='mp3' || fileExt=='mp4' || fileExt=='aac' || fileExt=='wma'){
        img.setAttribute("src", "../images/audio.png");;
        img.setAttribute("alt", fileExt);
      }

      const p = document.createElement("p");
      p.textContent = fileName;

      fileDiv.appendChild(img);
      fileDiv.appendChild(p);
      folderContainer.appendChild(fileDiv);

      fileDiv.addEventListener("dblclick", function() {
        const filePath = this.getAttribute("data-filepath");
        window.open(filePath); 
        console.log(`File '${fileName}' was double-clicked`);
      });
    }
  });
});

/*---------------DROP ZONE----------------------------------------------------*/
const dropZone = document.getElementById('drop-zone');


['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  }, false);
});


['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, () => {
    dropZone.classList.add('drag-over');
  }, false);
});


['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, () => {
    dropZone.classList.remove('drag-over');
  }, false);
});


dropZone.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;
    const fileExt = fileName.split(".").pop().toLowerCase();
    const fileDiv = document.createElement("div");
    fileDiv.classList.add("file");
    fileDiv.setAttribute("data-filepath", URL.createObjectURL(file));
    const img = document.createElement("img");
    if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' ){
      img.setAttribute("src", "../images/picture.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(file.type === ''){
      img.setAttribute("src", "../images/folder.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='flv' || fileExt=='avi' || fileExt=='wmv' || fileExt=='mp4'){
      img.setAttribute("src", "../images/video.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='txt' || fileExt=='doc' || fileExt=='docx'){
      img.setAttribute("src", "../images/document.png");;
      img.setAttribute("alt", fileExt);
      console.log(fileExt);
    }
    else if(fileExt=='mp3' || fileExt=='mp4' || fileExt=='aac' || fileExt=='wma'){
      img.setAttribute("src", "../images/audio.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='html' || fileExt=='js' || fileExt=='css' || fileExt=='xhtml'){
      img.setAttribute("src", "../images/browser.png");;
      img.setAttribute("alt", fileExt);
    }

    console.log(fileExt);
    const p = document.createElement("p");
    p.textContent = fileName;

    fileDiv.addEventListener("dblclick", function() {
      const filePath = this.getAttribute("data-filepath");
      window.open(filePath); 
      console.log(`File '${fileName}' was double-clicked`);
    });

    fileDiv.appendChild(img);
    fileDiv.appendChild(p);
    folderContainer.appendChild(fileDiv);}

  
}, false);




/*-------------- MAPPA KIJELÖLÉS -------------------------------------*/
           

        const folderContainer = document.getElementById("folder-container");
        const ujmappa = document.getElementById("ujmappa");
        const folderNames = [];
        
        
        function createFolder(name) {
          const folderDiv = document.createElement("div");
          folderDiv.classList.add("folder");
        
          folderDiv.selected=false;
        
          const img = document.createElement("img");
          img.setAttribute("src", "../images/folder.png");
        
          const p = document.createElement("p");
          p.textContent = name;
        
          folderDiv.appendChild(img);
          folderDiv.appendChild(p);
        
          folderContainer.appendChild(folderDiv);
        
          folderNames.push(name);
        
          const folderDivs = document.querySelectorAll('.folder');
        
          for (let i = 0; i < folderDivs.length; i++) {
            folderDivs[i].addEventListener('dblclick', function() {
              const folderName = this.querySelector('p').textContent;
              window.sessionStorage.setItem('ssMappa', folderName);
              window.location.href = 'mappa.html';
            });
          }
        }
        
        ujmappa.addEventListener("click", function() {
          var folderNameReg = /^[a-zA-Z0-9]+$/;
          let folderName = prompt("Adja meg a mappa nevét:", "mappa");
          while (folderNames && folderNames.includes(folderName)) {
            folderName = prompt("A megadott mappanév már létezik. Adjon meg másik nevet:");
          }
          if(folderName == "") {
            alert('Kötelező nevet adni a mappának!');
          }
          else if(!folderName.match(folderNameReg))
          {
            alert('Nem használhat speciális karaktereket!');
          }
          else if (folderName){
            createFolder(folderName);
          }
                  


/*-------------------FILE KIJELÖLÉS ----------------------------------------*/

let selectedElement = null;
  
function removeClickedClass() {
  if (selectedElement) {
    selectedElement.classList.remove('clicked');
    selectedElement = null;
  }
}
const icons = document.querySelectorAll('.folder,.file');
icons.forEach(div => {
  div.addEventListener('click',(event) => {
    const clickedElement = event.target.closest('.folder, .file');
    if (!clickedElement) return;
  
    removeClickedClass();
    clickedElement.classList.add('clicked');
    selectedElement = clickedElement;
  })
})

/*--------------------MAPPA TÖRLÉSE------------------------------------------*/
const torles = document.getElementById('torles');
torles.addEventListener('click',function(){
  const selectedFolder = document.querySelector('.clicked');
  if (selectedFolder) {
    selectedFolder.remove();
  }
})

/*------------------------------------MAPPA/FÁJL MEGOSZTÁSA----------------------------------*/
const megosztas = document.getElementById('megosztas');
const popupWindow = document.getElementById('popup-window');
const url = document.getElementById('megosztas-url');


megosztas.addEventListener('click', function() {
  popupWindow.style.display = 'block';

 
    let selectedFolder2 = document.querySelector('.clicked').textContent;//document.querySelector('p').textContent;
    if (selectedFolder2) {
      document.getElementById("megosztas-url").value = selectedFolder2;
      
    }


});


window.addEventListener('click', function(event) { //kattintási eseményfigyelő, Ha az ablakra kattintunk, az eseményfigyelőn belüli funkció végrehajtásra kerül.
  if (event.target == popupWindow) { //kattintott elem-e a felugró ablak.
    popupWindow.style.display = 'none'; // láthatatlanná válik az ablak
  }
});



console.log("udv");
window.addEventListener('keydown', function(event) {  //hozzáad egy kulcsleállítási eseményfigyelőt a teljes ablakhoz. Ha megnyom egy gombot, az eseményfigyelőben lévő funkció végrehajtásra kerül.
  if (event.key === 'Escape') {  //Ez a sor ellenőrzi, hogy a lenyomott billentyű az Escape billentyű-e
    popupWindow.style.display = 'none';
  }
});


const shareForm = document.querySelector('#popup-window form');
//Ez a sor a felugró ablakon belüli űrlapelemet kapja a HTML-dokumentumból,
shareForm.addEventListener('submit', function(event) {
  //küldési eseményfigyelőt ad hozzá az űrlapelemhez
  popupWindow.style.display = 'none';
  event.preventDefault();
  
}); //küldési eseményfigyelőt ad hozzá az űrlapelemhez


const facebookButton = document.getElementById("facebook");
facebookButton.addEventListener("click", function() {
  window.open("https://www.facebook.com/");
});

const instagramButton = document.getElementById("instagram");
instagramButton.addEventListener("click", function() {
  window.open("https://www.instagram.com/");
});

const twitterButton = document.getElementById("twitter");
twitterButton.addEventListener("click", function() {
  window.open("https://twitter.com/");
});

});





