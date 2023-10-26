// event sur le bouton diaporama pour le faire apparaître
const btn_carousel = document.getElementById('btn-carousel');
const carousel_show = document.getElementById('carousel');
btn_carousel.addEventListener('click',()=>{
  carousel_show.classList.remove('d-none');
})

/*
// fonction pour zoomer une image avec création d'une div
function zoom(img){
  const div_img = document.createElement('div');
  div_img.innerHTML=`<div class="modal-dialog" id="zoom_img">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="zoomPhoto">Agrandissement :</h1>
          <button type="button" class="btn-close" id="close_zoom" data-bs-dismiss="modal" 
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${img.src}" style="width : 100%" 
        alt="${img.alt}">
        </div>
    </div>`;
  img.parentNode.before(div_img);
  const btn_close_zoom = document.getElementById('close_zoom');
  btn_close_zoom.addEventListener('click',()=>{
    const modal_zoom = document.getElementById('zoom_img');
    modal_zoom.remove();
    window.location.reload();
  });
}*/
// fonction zoom sur une image
function zoom(img){
    // Get the modal
    const zoomModal = document.getElementById("myModal");

    // use the image and insert it inside the modal - use its "alt" text as a caption
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    
    zoomModal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    //gestion du bouton de fermeture de la fenêtre modale
    const btn_close_zoom = document.getElementById('close_zoom');
    btn_close_zoom.addEventListener('click',()=>{
      zoomModal.style.display = "none";
    });
}

// Ajout des events sur les images pour zoom
const img_doc = document.images;
for (let i=0; i<img_doc.length; i++){
  if ((img_doc[i].alt != "Visite d'un Château")&&(img_doc[i].alt != "Sortie Kanöe")&&(img_doc[i].alt != "Sortie au Zoo")) {
    img_doc[i].addEventListener('click', ()=>{
      zoom(img_doc[i]);
    });
  }
}

// Event sur le btn close pour disparition du message d'avertissement
const btn_close_advert = document.getElementById('btn_advert');
const advert = document.getElementById('avertissement');
btn_close_advert.addEventListener('click', ()=>{
  advert.remove();
})