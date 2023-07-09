/*---------------------MAPPA.HTML MAPPA NÉV--------------------------------*/
const mappanev = document.getElementById('mappanev');
mappanev.innerHTML =    window.sessionStorage.getItem('ssUsername')+"'s Documents/"
                        +window.sessionStorage.getItem('ssMappa');