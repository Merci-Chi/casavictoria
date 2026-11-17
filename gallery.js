/* Casa Victoria gallery: locally packaged images; works offline (file://). */
(()=>{
  const manifests={"categories":{"Wedding":[{"name":"1.png","src":"images/gallery/1.png","label":"front view","alt":"Wedding dress front view","caption":"Front view"},{"name":"2.png","src":"images/gallery/2.png","label":"back view","alt":"Wedding dress back view","caption":"Back view"},{"name":"3.png","src":"images/gallery/3.png","label":"side view","alt":"Wedding dress side view","caption":"Side view"},{"name":"5.png","src":"images/gallery/5.png"},{"name":"6.png","src":"images/gallery/6.png"},{"name":"7.png","src":"images/gallery/7.png"},{"name":"8.png","src":"images/gallery/8.png"},{"name":"9.png","src":"images/gallery/9.png"},{"name":"10.png","src":"images/gallery/10.png"},{"name":"11.png","src":"images/gallery/11.png"},{"name":"12.png","src":"images/gallery/12.png"},{"name":"13.png","src":"images/gallery/13.png"},{"name":"14.png","src":"images/gallery/14.png"},{"name":"15.png","src":"images/gallery/15.png"}],"Tuxedos":[{"name":"16.png","src":"images/gallery/16.png"},{"name":"17.png","src":"images/gallery/17.png"},{"name":"18.png","src":"images/gallery/18.png"}],"Dresses":[{"name":"19.png","src":"images/gallery/19.png"},{"name":"20.png","src":"images/gallery/20.png"},{"name":"21.png","src":"images/gallery/21.png"},{"name":"22.png","src":"images/gallery/22.png"}],"Fabrics":[{"name":"23.png","src":"images/gallery/23.png"},{"name":"24.png","src":"images/gallery/24.png"},{"name":"25.png","src":"images/gallery/25.png"},{"name":"26.png","src":"images/gallery/26.png"},{"name":"27.png","src":"images/gallery/27.png"},{"name":"28.png","src":"images/gallery/28.png"},{"name":"29.png","src":"images/gallery/29.png"},{"name":"30.png","src":"images/gallery/30.png"},{"name":"31.png","src":"images/gallery/31.png"},{"name":"32.png","src":"images/gallery/32.png"},{"name":"33.png","src":"images/gallery/33.png"},{"name":"34.png","src":"images/gallery/34.png"},{"name":"35.png","src":"images/gallery/35.png"},{"name":"36.png","src":"images/gallery/36.png"},{"name":"37.png","src":"images/gallery/37.png"},{"name":"38.png","src":"images/gallery/38.png"},{"name":"39.png","src":"images/gallery/39.png"},{"name":"40.png","src":"images/gallery/40.png"},{"name":"41.png","src":"images/gallery/41.png"},{"name":"42.png","src":"images/gallery/42.png"},{"name":"43.png","src":"images/gallery/43.png"}],"Behind the Scenes":[{"name":"44.png","src":"images/gallery/44.png","label":"Dress — Before","alt":"Dress before alterations, long flowing dress","caption":"Dress — Before"},{"name":"45.png","src":"images/gallery/45.png"},{"name":"46.png","src":"images/gallery/46.png","label":"Corset — Before","alt":"Corset before alterations","caption":"Corset — Before"},{"name":"47.png","src":"images/gallery/47.png","label":"Corset — After","alt":"Corset after alterations","caption":"Corset — After"},{"name":"48.png","src":"images/gallery/48.png","label":"Dress — After","alt":"Dress after alterations, shortened dress","caption":"Dress — After"},{"name":"49.png","src":"images/gallery/49.png"},{"name":"50.png","src":"images/gallery/50.png"},{"name":"51.png","src":"images/gallery/51.png"},{"name":"52.png","src":"images/gallery/52.png"}],"Other":[{"name":"53.png","src":"images/gallery/53.png"},{"name":"54.png","src":"images/gallery/54.png"},{"name":"55.png","src":"images/gallery/55.png"},{"name":"56.png","src":"images/gallery/56.png"},{"name":"57.png","src":"images/gallery/57.png"}]},"allPhotos":[{"name":"1.png","src":"images/gallery/1.png","label":"front view","alt":"Wedding dress front view","caption":"Front view"},{"name":"2.png","src":"images/gallery/2.png","label":"back view","alt":"Wedding dress back view","caption":"Back view"},{"name":"3.png","src":"images/gallery/3.png","label":"side view","alt":"Wedding dress side view","caption":"Side view"},{"name":"5.png","src":"images/gallery/5.png"},{"name":"6.png","src":"images/gallery/6.png"},{"name":"7.png","src":"images/gallery/7.png"},{"name":"8.png","src":"images/gallery/8.png"},{"name":"9.png","src":"images/gallery/9.png"},{"name":"10.png","src":"images/gallery/10.png"},{"name":"11.png","src":"images/gallery/11.png"},{"name":"12.png","src":"images/gallery/12.png"},{"name":"13.png","src":"images/gallery/13.png"},{"name":"14.png","src":"images/gallery/14.png"},{"name":"15.png","src":"images/gallery/15.png"},{"name":"16.png","src":"images/gallery/16.png"},{"name":"17.png","src":"images/gallery/17.png"},{"name":"18.png","src":"images/gallery/18.png"},{"name":"19.png","src":"images/gallery/19.png"},{"name":"20.png","src":"images/gallery/20.png"},{"name":"21.png","src":"images/gallery/21.png"},{"name":"22.png","src":"images/gallery/22.png"},{"name":"23.png","src":"images/gallery/23.png"},{"name":"24.png","src":"images/gallery/24.png"},{"name":"25.png","src":"images/gallery/25.png"},{"name":"26.png","src":"images/gallery/26.png"},{"name":"27.png","src":"images/gallery/27.png"},{"name":"28.png","src":"images/gallery/28.png"},{"name":"29.png","src":"images/gallery/29.png"},{"name":"30.png","src":"images/gallery/30.png"},{"name":"31.png","src":"images/gallery/31.png"},{"name":"32.png","src":"images/gallery/32.png"},{"name":"33.png","src":"images/gallery/33.png"},{"name":"34.png","src":"images/gallery/34.png"},{"name":"35.png","src":"images/gallery/35.png"},{"name":"36.png","src":"images/gallery/36.png"},{"name":"37.png","src":"images/gallery/37.png"},{"name":"38.png","src":"images/gallery/38.png"},{"name":"39.png","src":"images/gallery/39.png"},{"name":"40.png","src":"images/gallery/40.png"},{"name":"41.png","src":"images/gallery/41.png"},{"name":"42.png","src":"images/gallery/42.png"},{"name":"43.png","src":"images/gallery/43.png"},{"name":"44.png","src":"images/gallery/44.png","label":"Dress — Before","alt":"Dress before alterations, long flowing dress","caption":"Dress — Before"},{"name":"45.png","src":"images/gallery/45.png"},{"name":"46.png","src":"images/gallery/46.png","label":"Corset — Before","alt":"Corset before alterations","caption":"Corset — Before"},{"name":"47.png","src":"images/gallery/47.png","label":"Corset — After","alt":"Corset after alterations","caption":"Corset — After"},{"name":"48.png","src":"images/gallery/48.png","label":"Dress — After","alt":"Dress after alterations, shortened dress","caption":"Dress — After"},{"name":"49.png","src":"images/gallery/49.png"},{"name":"50.png","src":"images/gallery/50.png"},{"name":"51.png","src":"images/gallery/51.png"},{"name":"52.png","src":"images/gallery/52.png"},{"name":"53.png","src":"images/gallery/53.png"},{"name":"54.png","src":"images/gallery/54.png"},{"name":"55.png","src":"images/gallery/55.png"},{"name":"56.png","src":"images/gallery/56.png"},{"name":"57.png","src":"images/gallery/57.png"}]};
  const categories=[['all','All'],['wedding','Wedding'],['tuxedos','Tuxedos'],['dresses','Dresses'],['fabrics-accessories','Fabrics'],['behind-the-scenes','Behind the Scenes'],['other','Other']];
  const tabs=[...document.querySelectorAll('.cv-gallery-categories a[href^="#category-"]')];
  if(!tabs.length)return;
  const sections=new Map(tabs.map(t=>[t.hash.slice(1),document.getElementById(t.hash.slice(1))]));
  document.querySelector('.cv-gallery-categories')?.setAttribute('role','tablist');
  // Keep the same original-size photo tiles and grid layout.
  // Only set the order and the small Before / After labels.
  const comparisonLabels={
    '44.png':'Before', // long dress
    '48.png':'After',  // shortened dress
    '46.png':'Before', // corset
    '47.png':'After'   // corset
  };
  const comparisonOrder=['44.png','48.png','46.png','47.png'];
  function photoButton(record,name,comparisonLabel=''){
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='portfolio-photo cv-client-photo is-loading';
    btn.dataset.img=record.src;
    if(record.caption)btn.dataset.caption=record.caption;
    const recordLabel=record.label||record.name.replace(/\.(png|jpe?g|webp)$/i,'');
    btn.setAttribute('aria-label','View '+name+' photo '+recordLabel);
    const img=document.createElement('img');
    img.alt=record.alt||(name+' photo '+recordLabel);
    img.loading='lazy';img.decoding='async';img.src=record.src;
    img.addEventListener('load',()=>{btn.classList.remove('is-loading');registerPhotoResult(record.src,true);});
    img.addEventListener('error',()=>{btn.classList.remove('is-loading');btn.classList.add('is-error');btn.disabled=true;registerPhotoResult(record.src,false);});
    const overlay=document.createElement('span');
    overlay.className='portfolio-photo-overlay';overlay.setAttribute('aria-hidden','true');overlay.textContent='View';
    btn.append(img,overlay);
    if(comparisonLabel){
      const tag=document.createElement('span');
      tag.className='cv-comparison-tag';
      tag.textContent=comparisonLabel;
      btn.append(tag);
    }
    return btn;
  }
  for(const [id,name] of categories){
    const originalRecords=id==='all'?manifests.allPhotos:manifests.categories[name]||[];
    const records=id==='behind-the-scenes'?[...originalRecords].sort((a,b)=>{
      const ai=comparisonOrder.indexOf(a.name),bi=comparisonOrder.indexOf(b.name);
      return ai>=0 && bi>=0 ? ai-bi : ai>=0 ? -1 : bi>=0 ? 1 : 0;
    }):originalRecords;
    const panel=sections.get('category-'+id);
    const grid=panel?.querySelector('.cv-category-grid');
    if(!grid)continue;
    const frag=document.createDocumentFragment();
    for(const record of records){
      const label=id==='behind-the-scenes'?(comparisonLabels[record.name]||''):'';
      frag.append(photoButton(record,name,label));
    }
    grid.replaceChildren(frag);
  }
  const galleryNotice=document.getElementById('cv-gallery-global-empty');
  let loadedImages=0,failedImages=0;
  // The default gallery contains a second rendering of every category image.
  // Show one notice only if no photos could load at all.
  const totalImages=manifests.allPhotos.length;
  const galleryImageResults=new Set();
  function registerPhotoResult(src,ok){
    if(galleryImageResults.has(src))return;
    galleryImageResults.add(src);
    if(ok)loadedImages++;else failedImages++;
    if(galleryNotice){galleryNotice.hidden=loadedImages>0 || galleryImageResults.size<totalImages;}
  }
  const backdrop=document.querySelector('.cv-behind-video-layer');
  const backgroundVideo=document.getElementById('cv-behind-video');
  function select(id,updateUrl=false){
    const active=sections.has(id)?id:'category-all';
    tabs.forEach((tab,i)=>{
      const selected=tab.hash.slice(1)===active;
      tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;
      tab.classList.toggle('is-active',selected);
      const panel=sections.get(tab.hash.slice(1));if(panel)panel.hidden=!selected;
    });
    backdrop?.classList.remove('is-visible');
    if(backgroundVideo){backgroundVideo.pause();backgroundVideo.removeAttribute('src');}
    if(updateUrl)history.replaceState(null,'','#'+active);
  }
  tabs.forEach((tab,i)=>{
    const id=tab.hash.slice(1);tab.id=tab.id||'gallery-category-tab-'+i;
    tab.setAttribute('role','tab');tab.setAttribute('aria-controls',id);
    const panel=sections.get(id);
    if(panel){panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);}
    tab.addEventListener('click',e=>{e.preventDefault();select(id,true);});
    tab.addEventListener('keydown',e=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
      e.preventDefault();
      const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      select(tabs[next].hash.slice(1),true);tabs[next].focus();
    });
  });
  select(location.hash.slice(1));
  window.addEventListener('hashchange',()=>select(location.hash.slice(1)));
})();

// Shared header navigation.
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));

// Gallery viewer handles photos added asynchronously after a GitHub folder loads.
(()=>{
  const lightbox=document.getElementById('lightbox');
  if(!lightbox)return;
  const picture=lightbox.querySelector('.lightbox-stage img');
  const caption=lightbox.querySelector('.lightbox-caption');
  const counter=lightbox.querySelector('.lightbox-counter');
  const closeBtn=lightbox.querySelector('.lightbox-close');
  const prevBtn=lightbox.querySelector('.lightbox-prev');
  const nextBtn=lightbox.querySelector('.lightbox-next');
  let photos=[],current=0,lastActive=null,previousOverflow='',touchX=null;
  const visiblePhotos=()=>Array.from(document.querySelectorAll('.cv-category-section:not([hidden]) .portfolio-photo:not([hidden]):not(.is-error)'));
  function update(index){
    if(!photos.length)return;
    current=(index+photos.length)%photos.length;
    const item=photos[current];
    picture.src=item.dataset.img;
    picture.classList.toggle('cv-bra-after-rotated-image',item.dataset.orientation==='bra-after');
    picture.alt=item.querySelector('img')?.alt || item.dataset.caption || 'Casa-Victoria gallery photo';
    caption.textContent=item.dataset.caption || '';
    caption.hidden=!item.dataset.caption;
    counter.textContent=(current+1)+' / '+photos.length;
    const preload=new Image();
    preload.src=photos[(current+1)%photos.length].dataset.img;
  }
  function open(clicked){
    photos=visiblePhotos();
    const index=photos.indexOf(clicked);
    if(index<0)return;
    lastActive=document.activeElement;
    previousOverflow=document.body.style.overflow;
    lightbox.hidden=false;
    document.body.style.overflow='hidden';
    update(index);
    closeBtn.focus();
  }
  function close(){
    if(lightbox.hidden)return;
    lightbox.hidden=true;
    document.body.style.overflow=previousOverflow;
    picture.removeAttribute('src');
    picture.classList.remove('cv-bra-after-rotated-image');
    if(lastActive?.isConnected)lastActive.focus();
  }
  document.addEventListener('click',event=>{
    const photo=event.target.closest?.('.cv-category-section .portfolio-photo');
    if(photo && !photo.hidden)open(photo);
  });
  closeBtn.addEventListener('click',close);
  prevBtn.addEventListener('click',()=>update(current-1));
  nextBtn.addEventListener('click',()=>update(current+1));
  lightbox.addEventListener('click',event=>{if(event.target===lightbox)close();});
  document.addEventListener('keydown',event=>{
    if(lightbox.hidden)return;
    if(event.key==='Escape'){event.preventDefault();close();}
    else if(event.key==='ArrowLeft'){event.preventDefault();update(current-1);}
    else if(event.key==='ArrowRight'){event.preventDefault();update(current+1);}
    else if(event.key==='Tab'){
      const controls=[closeBtn,prevBtn,nextBtn];
      const at=controls.indexOf(document.activeElement);
      if(event.shiftKey && at===0){event.preventDefault();controls.at(-1).focus();}
      else if(!event.shiftKey && at===controls.length-1){event.preventDefault();controls[0].focus();}
    }
  });
  lightbox.addEventListener('touchstart',event=>{touchX=event.changedTouches[0]?.screenX ?? null;},{passive:true});
  lightbox.addEventListener('touchend',event=>{
    if(touchX===null)return;
    const diff=(event.changedTouches[0]?.screenX ?? touchX)-touchX;
    touchX=null;
    if(Math.abs(diff)>45)update(current+(diff<0?1:-1));
  },{passive:true});
})();
