/* Casa-Victoria holiday offers and an everyday first-fitting welcome offer. */
(()=>{
  const timeZone='America/Los_Angeles';
  const dateParts=new Intl.DateTimeFormat('en-US',{timeZone,year:'numeric',month:'2-digit',day:'2-digit',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
  const parts=Object.fromEntries(dateParts.formatToParts(new Date()).map(p=>[p.type,p.value]));
  const today=`${parts.year}-${parts.month}-${parts.day}`;
  const minutesNow=Number(parts.hour)*60+Number(parts.minute);
  // Monday–Thursday 11 AM–7 PM; Friday 10 AM–5 PM (Las Vegas local time).
  const openToday=['Mon','Tue','Wed','Thu'].includes(parts.weekday)
    ? minutesNow>=11*60&&minutesNow<19*60
    : parts.weekday==='Fri'&&minutesNow>=10*60&&minutesNow<17*60;

  // Featured coupon calendar uses Las Vegas local dates. Offers can be
  // previewed on any day; redemption is limited to the advertised open days.
  const holidayOffers=[
    {
      id:'thanksgiving-2026',
      title:'Thanksgiving Special',
      starts:'2026-11-16', ends:'2026-11-26',
      previewStarts:'2026-11-09', previewEnds:'2026-11-26',
      dates:'November 16–26, 2026 · Available During Open Hours',
      theme:'holiday',
      percent:20,
      services:'Holiday Promotion'
    },
    {
      id:'black-friday-2026',
      title:'Black Friday Special',
      starts:'2026-11-27', ends:'2026-12-02',
      previewStarts:'2026-11-20', previewEnds:'2026-12-02',
      dates:'November 27–December 2, 2026 · Available During Open Hours',
      theme:'black-friday',
      percent:20,
      services:'Holiday Promotion'
    },
    {
      id:'christmas-2026',
      title:'Christmas Special',
      starts:'2026-12-21', ends:'2026-12-30',
      previewStarts:'2026-12-14', previewEnds:'2026-12-30',
      dates:'December 21–30, 2026 · Available During Open Hours',
      theme:'holiday',
      percent:20,
      services:'Holiday Promotion'
    }
  ];
  // Active promotions take priority when an upcoming preview overlaps them.
  const holiday=holidayOffers.find(o=>today>=o.starts&&today<=o.ends)
    || holidayOffers.find(o=>today>=o.previewStarts&&today<o.starts);
  const offer=holiday || {
    id:'first-time-alterations-10',
    title:'First Time Alterations',
    dates:'Available During Open Hours',
    theme:'holiday',
    percent:10,
    services:'First-Time Alterations · 10% Off'
  };
  const eligibleToday=holiday && today>=holiday.starts && today<=holiday.ends && openToday;
  const withinHolidayDates=holiday && today>=holiday.starts && today<=holiday.ends;
  const status=holiday
    ? (eligibleToday?'AVAILABLE NOW':withinHolidayDates?'VALID DURING OPEN HOURS':'COMING SOON')
    : (openToday?'AVAILABLE NOW':'VALID DURING OPEN HOURS');
  const offerFineprint=holiday
    ? 'Holiday promotions are 20% off during the listed business days and open hours. Wedding gowns are offered separately at up to 10% off per purchase. Offers cannot be combined. Confirm eligibility in store.'
    : 'First-time alterations only. 10% off during regular business days and open hours. Cannot be combined with other discounts. Confirm eligibility in store.';

  const storageKey='cv-holiday-promo-dismissed-v6-'+offer.id+'-'+status;
  let alreadyDismissed=false;
  try{alreadyDismissed=sessionStorage.getItem(storageKey)==='1';}catch(_){/* Browsers may block storage. */}

  // The coupon stays available after the modal has been dismissed.
  const coupon=document.createElement('button');
  coupon.type='button';
  coupon.className='cv-holiday-coupon';
  coupon.setAttribute('aria-label','Open upcoming coupons and discounts');
  coupon.setAttribute('title','Upcoming Coupons');
  coupon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M9 9h.01"/><path d="m15 9-6 6"/><path d="M15 15h.01"/></svg>';
  coupon.hidden=true;
  document.body.append(coupon);

  const dialog=document.createElement('div');
  dialog.className='cv-holiday-backdrop';
  dialog.hidden=true;
  dialog.innerHTML=`
    <section class="cv-holiday-popup ${offer.theme==='black-friday'?'is-black-friday':''}" role="dialog" aria-modal="true" aria-labelledby="cv-holiday-heading" aria-describedby="cv-holiday-details" tabindex="-1">
      <button type="button" class="cv-holiday-close" aria-label="Close coupons">×</button>
      <p class="cv-holiday-eyebrow">CASA-VICTORIA OFFERS</p>
      <h2 id="cv-holiday-heading">${holiday?'Upcoming Coupons':'Current Coupon'}</h2>
      <div class="cv-holiday-feature">
        <span class="cv-holiday-status"></span>
        <h3 class="cv-holiday-feature-title"></h3>
        <p class="cv-holiday-percent"><span class="cv-holiday-discount-value"></span> <span>OFF</span></p>
        <p class="cv-holiday-services"></p>
        <p class="cv-holiday-details" id="cv-holiday-details"></p>
      </div>
      <div class="cv-holiday-welcome">
        <div><strong>Wedding Gowns Only</strong><small>Up to 10% off per purchase · Open business days and hours</small></div>
        <strong class="cv-holiday-welcome-percent">UP TO 10% OFF</strong>
      </div>
      <a class="cv-holiday-action" href="index.html#contact">Contact Us or come in store to claim.</a>
      <p class="cv-holiday-fineprint"></p>
    </section>`;
  dialog.querySelector('.cv-holiday-feature-title').textContent=offer.title;
  dialog.querySelector('.cv-holiday-status').textContent=status;
  dialog.querySelector('.cv-holiday-discount-value').textContent=holiday?'20%':'10%';
  dialog.querySelector('.cv-holiday-services').textContent=offer.services;
  dialog.querySelector('#cv-holiday-details').textContent=offer.dates;
  dialog.querySelector('.cv-holiday-fineprint').textContent=offerFineprint;
  // Do not repeat the same 10% coupon when it is the featured/default offer.
  if(!holiday)dialog.querySelector('.cv-holiday-welcome').hidden=true;
  document.body.append(dialog);
  let previousFocus=null;
  let previousOverflow='';
  let isOpen=false;
  function showCoupon(){
    coupon.hidden=false;
    window.requestAnimationFrame(()=>coupon.classList.add('is-visible'));
  }
  function open(){
    if(isOpen)return;
    isOpen=true;
    coupon.classList.remove('is-visible');
    coupon.hidden=true;
    previousFocus=document.activeElement;
    previousOverflow=document.body.style.overflow;
    dialog.hidden=false;
    document.body.style.overflow='hidden';
    window.requestAnimationFrame(()=>dialog.classList.add('is-visible'));
    dialog.querySelector('.cv-holiday-close').focus({preventScroll:true});
  }
  function close(){
    if(!isOpen)return;
    isOpen=false;
    try{sessionStorage.setItem(storageKey,'1');}catch(_){}
    dialog.classList.remove('is-visible');
    document.body.style.overflow=previousOverflow;
    window.setTimeout(()=>{if(!isOpen)dialog.hidden=true;},280);
    showCoupon();
    coupon.focus({preventScroll:true});
  }
  coupon.addEventListener('click',open);
  dialog.querySelector('.cv-holiday-close').addEventListener('click',close);
  dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
  dialog.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();close();}
    if(e.key==='Tab'){
      const controls=[dialog.querySelector('.cv-holiday-close'),dialog.querySelector('.cv-holiday-action')];
      const index=controls.indexOf(document.activeElement);
      if(e.shiftKey&&index===0){e.preventDefault();controls.at(-1).focus();}
      else if(!e.shiftKey&&index===controls.length-1){e.preventDefault();controls[0].focus();}
    }
  });
  if(alreadyDismissed){
    showCoupon();
  }else{
    window.setTimeout(()=>{if(dialog.isConnected)open();},1500);
  }
})();
