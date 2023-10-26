const btn_carousel = document.getElementById('btn-carousel');
const carousel_show = document.getElementById('carousel');
btn_carousel.addEventListener('click',()=>{
  carousel_show.classList.remove('d-none');
})

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
}

const img_doc = document.images;
for (let i=0; i<img_doc.length; i++){
  if ((img_doc[i].alt != "Visite d'un Château")&&(img_doc[i].alt != "Sortie Kanöe")&&(img_doc[i].alt != "Sortie au Zoo")) {
    img_doc[i].addEventListener('click', ()=>{
      zoom(img_doc[i]);
    });
  }
}