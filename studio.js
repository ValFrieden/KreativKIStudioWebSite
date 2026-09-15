/* One selected project, one user-controlled player. Source templates stay inert. */
(() => {
  const copy = {
    de: {projects:'Arbeiten',choose:'Passendes Beispiel auswählen',studio:'Aus unserem Studio',headline:'Aus deinem Foto<br>wird <em>mehr.</em>',intro:'Produktbilder, bewegte Erinnerungen und eigener Sound. Entdecke, was aus deinem Ausgangsmaterial entstehen kann.',discover:'Verwandlungen entdecken',inquire:'Idee besprechen',original:'Original',result:'Ergebnis',proof:'Ein Motiv. Eine neue Wirkung. →',galleryTitle:'Das Original. Die Möglichkeiten.',galleryIntro:'Wähle ein Projekt und entdecke das Ergebnis in Ruhe.',all:'Alle Arbeiten',ads:'Werbung',photos:'Fotobearbeitung',motion:'Animation',play:'Video abspielen',zoom:'Groß ansehen',request:'Ähnliches Projekt anfragen',retry:'Video konnte nicht geladen werden. Erneut versuchen',count:'Projekte',close:'Schließen',processLabel:'So entsteht dein Projekt',step1:'Idee teilen',step1body:'Zeig uns dein Material und beschreibe, wofür du das Ergebnis brauchst.',step2:'Richtung festlegen',step2body:'Wir klären Stil, Umfang, Ausgabeformat und Angebot gemeinsam.',step3:'Ergebnis erhalten',step3body:'Du erhältst die vereinbarten Dateien für deinen Einsatz.',about:'KreativKI Studio verbindet deine Idee mit KI-gestützter Bildbearbeitung, Animation und Musik. Wir stimmen Motiv, Stil und Ausgabeformat auf deinen Verwendungszweck ab.',contact:'Was möchtest du gestalten? Nenne uns dein Wunschmotiv, den Verwendungszweck und deinen Termin. Wir klären Umfang und Angebot gemeinsam.'},
    en: {projects:'Work',choose:'Choose an example',studio:'From our studio',headline:'Your photo.<br><em>New possibilities.</em>',intro:'Product images, memories in motion and original sound. Discover what your source material can become.',discover:'Explore transformations',inquire:'Discuss your idea',original:'Original',result:'Result',proof:'One subject. A new impact. →',galleryTitle:'The original. The possibilities.',galleryIntro:'Choose a project and explore the result at your own pace.',all:'All work',ads:'Advertising',photos:'Photo editing',motion:'Animation',play:'Play video',zoom:'View larger',request:'Enquire about a similar project',retry:'Video could not load. Try again',count:'projects',close:'Close',processLabel:'How your project takes shape',step1:'Share your idea',step1body:'Show us your material and tell us how you want to use the result.',step2:'Choose a direction',step2body:'Together we agree on style, scope, file formats and a quote.',step3:'Receive your result',step3body:'Receive the agreed files ready for your intended use.',about:'KreativKI Studio combines your idea with AI-assisted image editing, animation and music. We tailor the subject, style and file formats to your needs.',contact:'What would you like to create? Tell us your subject, intended use and deadline. We will discuss the scope and quote together.'},
    ru: {projects:'Работы',choose:'Выбрать пример',studio:'Из нашей студии',headline:'Ваше фото.<br><em>Новые возможности.</em>',intro:'Изображения товаров, ожившие воспоминания и собственная музыка. Откройте возможности вашего материала.',discover:'Посмотреть превращения',inquire:'Обсудить идею',original:'Оригинал',result:'Результат',proof:'Один сюжет. Новое впечатление. →',galleryTitle:'Оригинал. Возможности.',galleryIntro:'Выберите проект и рассмотрите результат без спешки.',all:'Все работы',ads:'Реклама',photos:'Обработка фото',motion:'Анимация',play:'Смотреть видео',zoom:'Увеличить',request:'Заказать похожий проект',retry:'Видео не загрузилось. Повторить',count:'проектов',close:'Закрыть',processLabel:'Как создаётся ваш проект',step1:'Поделитесь идеей',step1body:'Покажите материал и расскажите, для чего нужен результат.',step2:'Выберите направление',step2body:'Вместе согласуем стиль, объём, формат файлов и стоимость.',step3:'Получите результат',step3body:'Получите согласованные файлы для ваших задач.',about:'KreativKI Studio объединяет вашу идею с обработкой изображений, анимацией и музыкой на основе ИИ. Подбираем сюжет, стиль и формат под вашу задачу.',contact:'Что вы хотите создать? Расскажите о сюжете, назначении и сроках. Вместе обсудим объём и стоимость.'}
  };
  Object.assign(copy.de, {aiGenerated:'KI-generiert',aiEdited:'KI-bearbeitet',transparencyTitle:'Transparenz zu KI-Inhalten',transparencyBody:'Alle Bilder und Videos auf dieser Website sind KI-generiert – auch die als „Original“ bezeichneten Vorher-Ansichten zeigen keine echten Fotografien, sondern KI-erzeugtes Ausgangsmaterial. Als „KI-bearbeitet“ oder „KI-generiert“ gekennzeichnete Medien wurden mit künstlicher Intelligenz erstellt oder wesentlich verändert.',transparencyLink:'Informationen der EU-Kommission'});
  Object.assign(copy.en, {aiGenerated:'AI-generated',aiEdited:'AI-edited',transparencyTitle:'Transparency on AI content',transparencyBody:'All images and videos on this website are AI-generated – even the before views labelled “Original” are not real photographs but AI-generated source material. Media labelled “AI-edited” or “AI-generated” was created with artificial intelligence or substantially altered using AI.',transparencyLink:'Information from the European Commission'});
  Object.assign(copy.ru, {aiGenerated:'Создано ИИ',aiEdited:'Обработано ИИ',transparencyTitle:'Прозрачность ИИ-контента',transparencyBody:'Все изображения и видео на этом сайте созданы ИИ – даже обозначенные как «Оригинал» виды «до» не являются настоящими фотографиями, а созданы ИИ. Медиа с пометкой «Обработано ИИ» или «Создано ИИ» создано или существенно изменено с помощью искусственного интеллекта.',transparencyLink:'Информация Европейской комиссии'});
  let lang = document.documentElement.lang || 'de';
  const t = key => (copy[lang] || copy.de)[key] || key;
  const grid = document.getElementById('projectGrid');
  const stage = document.getElementById('projectStage');
  const filters = document.getElementById('projectFilters');
  const lb = document.getElementById('lightbox');
  const lbContent = document.getElementById('lightbox-content');
  let returnFocus, previousOverflow;
  let inertNodes = [];
  const projects = [];
  document.querySelectorAll('template[data-project-source]').forEach(template => {
    template.content.querySelectorAll('.showcase-slide,.portfolio-slide').forEach(slide => {
      const media = [...slide.querySelectorAll('img,video')].map(el => ({
        type: el.tagName === 'VIDEO' ? 'video' : 'image',
        src: el.getAttribute('src') || el.querySelector('source').getAttribute('src'),
        poster: el.getAttribute('poster'), alt: el.getAttribute('alt') || ''
      }));
      const title = slide.querySelector('h3') || slide.querySelector('img');
      const raw = title?.textContent.trim() || title?.alt || 'Projekt';
      const paired = media.length > 1;
      media.forEach((item,index) => { item.aiLabel = paired ? (index === 0 ? null : 'aiEdited') : 'aiGenerated'; });
      projects.push({id:projects.length, media, title:raw.replace(/\s+(vorher|nachher|davor|danach)$/i,''), key:title?.dataset.i18n, category:media.some(m=>m.type==='video')?'motion':template.id==='davor-danach'?'photos':'ads'});
    });
  });
  let active = projects[0], filter='all', side='result';
  function pauseMedia(except) {
    document.querySelectorAll('video,audio').forEach(v => { if(v!==except) v.pause(); });
  }
  document.addEventListener('play', e => {if(e.target.matches('video,audio')) pauseMedia(e.target);},true);
  document.addEventListener('visibilitychange',()=>{if(document.hidden) pauseMedia();});
  new IntersectionObserver(entries=>{if(!entries[0].isIntersecting) stage.querySelectorAll('video').forEach(v=>v.pause());}).observe(stage);
  function button(text,fn,cls='') { const b=document.createElement('button');b.type='button';b.textContent=text;b.className=cls;b.addEventListener('click',fn);return b; }
  function titleNode(p,tag='span') { const el=document.createElement(tag);el.textContent=window.studioTranslations?.[p.key]?.[lang] || p.title;return el; }
  function disclosure(key) { const el=document.createElement('span');el.className='ai-disclosure';el.textContent=t(key);return el; }
  function openMedia(m,trigger) {
    pauseMedia();returnFocus=trigger;previousOverflow=document.body.style.overflow;
    lbContent.replaceChildren();const el=document.createElement(m.type==='video'?'video':'img');
    el.src=m.src;
    if(m.type==='video'){el.controls=true;el.playsInline=true;el.poster=m.poster;el.preload='metadata';}else el.alt=m.alt;
    lbContent.append(el);if(m.aiLabel)lbContent.append(disclosure(m.aiLabel));lb.hidden=false;lb.classList.add('open');document.body.style.overflow='hidden';
    inertNodes=[...document.body.children].filter(node=>node!==lb&&!node.inert);
    inertNodes.forEach(node=>node.inert=true);lb.querySelector('button').focus();
  }
  function closeMedia(){if(lb.hidden)return;lbContent.querySelectorAll('video').forEach(v=>v.pause());lbContent.replaceChildren();lb.hidden=true;lb.classList.remove('open');inertNodes.forEach(node=>node.inert=false);inertNodes=[];document.body.style.overflow=previousOverflow||'';returnFocus?.focus();}
  lb.addEventListener('click',e=>{if(e.target===lb||e.target.closest('.lightbox-close'))closeMedia();});
  document.addEventListener('keydown',e=>{
    if(lb.hidden)return;
    if(e.key==='Escape')closeMedia();
    if(e.key==='Tab'){
      const controls=[...lb.querySelectorAll('button,video[controls]')];const first=controls[0],last=controls.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  function makeMedia(m,label) {
    const panel=document.createElement('div');panel.className='compare-panel';panel.dataset.side=label;
    const heading=document.createElement('h3');heading.textContent=t(label);panel.append(heading);
    const frame=document.createElement('div');frame.className='media-frame';if(m.aiLabel)frame.append(disclosure(m.aiLabel));panel.append(frame);
    if(m.type==='image'){
      const img=document.createElement('img');img.src=m.src;img.alt=m.alt;img.width=800;img.height=600;frame.append(img);
    }else{
      const v=document.createElement('video');v.poster=m.poster;v.preload='none';v.playsInline=true;v.controls=true;v.setAttribute('aria-label',active.title);frame.append(v);
      const play=button(t('play'),async()=>{if(!v.getAttribute('src'))v.src=m.src;try{await v.play();play.hidden=true;}catch{play.textContent=t('retry');play.hidden=false;}},'media-play');
      v.addEventListener('play',()=>play.hidden=true);
      v.addEventListener('error',()=>{play.hidden=false;play.textContent=t('retry');v.removeAttribute('src');v.load();});
      v.addEventListener('ended',()=>{play.hidden=false;play.textContent=t('play');});frame.append(play);
    }
    const zoom=button(t('zoom'),()=>openMedia(m,zoom),'media-zoom');panel.append(zoom);return panel;
  }
  function setSide(value){side=value;stage.dataset.side=side;if(value==='original')stage.querySelectorAll('video').forEach(v=>v.pause());stage.querySelectorAll('[data-select-side]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.selectSide===side)));}
  function renderStage(){
    pauseMedia();stage.replaceChildren();stage.dataset.side=side;
    const header=document.createElement('div');header.className='stage-heading';const heading=titleNode(active,'h3');heading.tabIndex=-1;header.append(heading);
    const link=document.createElement('a');link.className='project-request';link.textContent=t('request');link.href='mailto:info@kreativkistudio.de?subject='+encodeURIComponent(t('request')+' — '+active.title);header.append(link);stage.append(header);
    const pair=active.media.length>1;
    if(pair){const tabs=document.createElement('div');tabs.className='compare-switch';tabs.setAttribute('role','group');tabs.setAttribute('aria-label',t('original')+' / '+t('result'));for(const label of ['original','result']){const b=button(t(label),()=>setSide(label));b.dataset.selectSide=label;tabs.append(b);}stage.append(tabs);}
    const panels=document.createElement('div');panels.className='compare-panels'+(pair?'':' single');active.media.forEach((m,i)=>panels.append(makeMedia(m,pair&&i===0?'original':'result')));stage.append(panels);setSide(side);
  }
  function renderGrid(){
    grid.replaceChildren();const list=projects.filter(p=>filter==='all'||p.category===filter);
    document.getElementById('projectCount').textContent=list.length+' '+t('count');
    for(const p of list){const b=button('',()=>{active=p;side='result';renderStage();renderGrid();localize();stage.querySelector('.stage-heading h3').focus({preventScroll:true});stage.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});},'project-tile');
      b.setAttribute('aria-pressed',String(active.id===p.id));const m=p.media.at(-1);const img=document.createElement('img');img.src=m.poster||m.src;img.alt='';img.loading='lazy';img.width=400;img.height=300;b.append(img,disclosure(m.aiLabel),titleNode(p));const cat=document.createElement('small');cat.textContent=t(p.category)+(m.type==='video'?' · ▶':'');b.append(cat);grid.append(b);
    }
  }
  function renderFilters(){filters.replaceChildren();for(const key of ['all','ads','photos','motion']){const b=button(t(key),()=>{filter=key;if(filter!=='all'&&active.category!==filter){active=projects.find(p=>p.category===filter);renderStage();}renderFilters();renderGrid();localize();filters.querySelector('[aria-pressed=true]').focus();});b.setAttribute('aria-pressed',String(filter===key));filters.append(b);}}
  function localize(){document.querySelectorAll('[data-studio-text]').forEach(el=>el.innerHTML=t(el.dataset.studioText));lb.querySelector('button').setAttribute('aria-label',t('close'));}
  document.addEventListener('studio-language',e=>{lang=e.detail;renderFilters();renderStage();renderGrid();localize();});
  renderFilters();renderStage();renderGrid();localize();
  // Restore legacy deep links without reviving the old carousels.
  if(['#showcase','#davor-danach','#portfolio'].includes(location.hash))document.getElementById('projects').scrollIntoView();
})();
