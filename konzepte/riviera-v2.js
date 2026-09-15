(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const mediaRoot = '../media/';

  const copy = {
    de: {
      navWork: 'Arbeiten', navServices: 'Leistungen', navProcess: 'Ablauf', navContact: 'Kontakt', briefCta: 'Projekt anfragen', menu: 'Menü',
      heroKicker: 'Bilder · Filme · Musik · Websites', heroTitle: 'Deine Idee.<br><em>Eine neue</em><br>Ausdrucksform.', heroText: 'Aus deinem Foto, Produkt oder Gedanken entsteht eine eigenständige kreative Welt – persönlich entwickelt für Marke, Erinnerung oder besonderen Moment.', discover: 'Arbeiten entdecken', tellIdea: 'Idee erzählen', factProjects: 'Projekte im Archiv', factLanguages: 'Sprachen', factDirection: 'persönliche Richtung', scroll: 'Scrollen',
      featuredKicker: 'Ein erster Blick ins Studio', featuredTitle: 'Vom Porträt<br><em>zur Figur.</em>', featuredText: 'Aus einer persönlichen Aufnahme entsteht eine eigenständige digitale Figur mit klarer Haltung und einem unverwechselbaren Look.', featuredCta: 'Projekt und Original ansehen',
      promiseOne: 'Individuell statt Vorlage', promiseTwo: 'Klare Abstimmung', promiseThree: 'Transparente KI-Produktion', promiseFour: 'Für Web, Social & Erinnerung',
      pathKicker: 'Wo beginnt deine Geschichte?', pathTitle: 'Ein Studio.<br><em>Drei Wege zu deinem Ergebnis.</em>', pathText: 'Wähle den Einstieg, der deinem Vorhaben am nächsten kommt. Alles Weitere klären wir gemeinsam.', pathBusinessLabel: 'Für Unternehmen & Marken', pathBusinessTitle: 'Produkte inszenieren.<br>Marken hörbar machen.', pathPersonalLabel: 'Für besondere Momente', pathPersonalTitle: 'Erinnerungen restaurieren.<br>Geschichten bewegen.', pathCustomLabel: 'Für deine eigene Idee', pathCustomTitle: 'Noch keine Kategorie?<br>Umso interessanter.',
      storyKicker: 'Von der Aufnahme zur Wirkung', storyTitle: 'Nicht einfach verändert.<br><em>Neu erzählt.</em>', storyOne: 'Ausgangsmaterial verstehen', storyOneText: 'Was ist vorhanden, was soll bleiben und wo soll das Ergebnis wirken?', storyTwo: 'Richtung entwickeln', storyTwoText: 'Stimmung, Stil und Format werden zu einem klaren visuellen Konzept.', storyThree: 'Ergebnis veredeln', storyThreeText: 'Auswahl, Details und Ausgabe werden von Hand geprüft und abgestimmt.',
      workKicker: 'Ausgewählte Arbeiten', workTitle: 'Ein Motiv.<br><em>Eine neue Wirkung.</em>', workText: 'Wähle ein Projekt und entdecke, was aus dem Ausgangsmaterial entstanden ist.', openLarge: 'Groß ansehen', similarProject: 'Ähnliches Projekt anfragen', archiveCount: 'Arbeiten im Archiv', showAll: 'Alle Arbeiten anzeigen', showLess: 'Auswahl reduzieren',
      servicesKicker: 'Leistungswelten', servicesTitle: 'Von einem Bild<br><em>bis zur ganzen Welt.</em>', servicesText: 'Du musst keine Technik auswählen. Erzähl uns, was du erreichen möchtest – wir übersetzen es in den passenden Produktionsweg.',
      soundKicker: 'Audio Salon', soundTitle: 'Deine Geschichte<br><em>bekommt einen Klang.</em>', soundText: 'Jingles, Songs und Soundtracks für Marke, Event oder einen Menschen, der dir wichtig ist.', audioDisclosure: 'KI-generierte Musik · Beispiel aus dem Studioarchiv', playTrack: 'Ausgewählten Titel abspielen', pauseTrack: 'Wiedergabe pausieren',
      processKicker: 'So entsteht dein Projekt', processTitle: 'Persönlich geführt.<br><em>Klar in jedem Schritt.</em>', processOne: 'Idee teilen', processOneText: 'Zeig uns dein Material und beschreibe, wofür du das Ergebnis brauchst.', processTwo: 'Richtung festlegen', processTwoText: 'Wir klären Stil, Umfang, Ausgabeformat, Termin und Angebot.', processThree: 'Produktion & Auswahl', processThreeText: 'Wir entwickeln, prüfen und verfeinern die vereinbarte Richtung.', processFour: 'Ergebnis erhalten', processFourText: 'Du erhältst die abgestimmten Dateien für den vereinbarten Einsatz.',
      packagesKicker: 'Projekt-Einstiege', packagesTitle: 'Orientierung,<br><em>bevor wir sprechen.</em>', packagesText: 'Jedes Projekt wird individuell kalkuliert. Diese sechs Einstiege zeigen, was sich sinnvoll kombinieren lässt.', rightsNote: 'Nutzungsumfang, Korrekturen und Lieferformate werden im individuellen Angebot eindeutig festgehalten.',
      aboutKicker: 'KreativKI Studio', aboutQuote: 'Technologie liefert Möglichkeiten.<br><em>Richtung entsteht im Gespräch.</em>', aboutText: 'Wir verbinden KI-gestützte Bildbearbeitung, Animation, Musik und Webdesign mit persönlicher Auswahl und einem klaren Blick für den Zweck deines Projekts.',
      contactKicker: 'Unverbindliches Kurzbriefing', contactTitle: 'Was möchtest du<br><em>möglich machen?</em>', contactText: 'Wenige kurze Angaben reichen für den Anfang. Deine E-Mail-App öffnet anschließend eine vorbereitete Anfrage.', formGoal: 'Worum geht es?', formBusiness: 'Unternehmen / Marke', formPersonal: 'Besonderer Moment', formCustom: 'Eigene Idee', formService: 'Gewünschte Leistung', formChoose: 'Bitte auswählen', formDeadline: 'Wunschtermin (optional)', formName: 'Dein Name', formEmail: 'E-Mail', formDetails: 'Was soll entstehen?', formSubmit: 'E-Mail-Entwurf öffnen', formPrivacy: 'Es werden keine Daten auf dieser Seite gespeichert. Die Anfrage wird erst gesendet, wenn du sie in deiner E-Mail-App bestätigst.', morePackages: 'Weitere Möglichkeiten', fewerPackages: 'Weniger anzeigen',
      all: 'Alle', brand: 'Marke & Produkt', photo: 'Foto & Erinnerung', motion: 'Film & Animation', original: 'Original', result: 'Ergebnis', film: 'Film', play: 'Film abspielen', aiEdited: 'KI-bearbeitet', aiGenerated: 'KI-generiert', source: 'Ausgangsmaterial', inquiry: 'Projektanfrage', topPick: 'Studio Auswahl', footerLine: 'Bild · Film · Klang · Web', transparencyTitle: 'Transparenz zu KI-Inhalten', transparencyText: 'Entsprechend gekennzeichnete Medien wurden vollständig oder teilweise mit KI erstellt oder wesentlich bearbeitet.', close: 'Schließen', studioFacts: 'Studio-Fakten', mediaView: 'Medienansicht', filterProjects: 'Projekte filtern', audioTitles: 'Audiotitel', storyCompareLabel: 'Vergleich von Original und KI-bearbeitetem Ergebnis', reference: 'Referenz', removeReference: 'Entfernen', copyBrief: 'Anfrage kopieren', copied: 'Anfrage wurde kopiert.', copyFailed: 'Kopieren ist nicht möglich. Bitte den Text manuell auswählen.', ideaPlaceholder: 'Ein bis drei Sätze genügen.', viewWork: 'Passende Arbeiten', requestService: 'Diese Leistung anfragen'
    },
    en: {
      navWork: 'Work', navServices: 'Services', navProcess: 'Process', navContact: 'Contact', briefCta: 'Start a project', menu: 'Menu',
      heroKicker: 'Images · films · music · websites', heroTitle: 'Your idea.<br><em>A new form</em><br>of expression.', heroText: 'Your photo, product or thought becomes a distinctive creative world—personally developed for a brand, a memory or a special moment.', discover: 'Explore the work', tellIdea: 'Tell us your idea', factProjects: 'projects in the archive', factLanguages: 'languages', factDirection: 'personal direction', scroll: 'Scroll',
      featuredKicker: 'A first look inside the studio', featuredTitle: 'From portrait<br><em>to character.</em>', featuredText: 'A personal photograph becomes an independent digital character with a clear presence and distinctive look.', featuredCta: 'See project and source',
      promiseOne: 'Individual, never templated', promiseTwo: 'Clear collaboration', promiseThree: 'Transparent AI production', promiseFour: 'For web, social & memories',
      pathKicker: 'Where does your story begin?', pathTitle: 'One studio.<br><em>Three paths to your result.</em>', pathText: 'Choose the entry point closest to your project. We will clarify everything else together.', pathBusinessLabel: 'For companies & brands', pathBusinessTitle: 'Stage products.<br>Make brands audible.', pathPersonalLabel: 'For special moments', pathPersonalTitle: 'Restore memories.<br>Bring stories to life.', pathCustomLabel: 'For your own idea', pathCustomTitle: 'No category yet?<br>Even more interesting.',
      storyKicker: 'From source to impact', storyTitle: 'Not simply changed.<br><em>Retold.</em>', storyOne: 'Understand the source', storyOneText: 'What exists, what should remain and where should the result make an impact?', storyTwo: 'Develop a direction', storyTwoText: 'Mood, style and format become a clear visual concept.', storyThree: 'Refine the result', storyThreeText: 'Selection, details and delivery are reviewed and aligned by hand.',
      workKicker: 'Selected work', workTitle: 'One subject.<br><em>A new impact.</em>', workText: 'Choose a project and discover what the source material became.', openLarge: 'View larger', similarProject: 'Request a similar project', archiveCount: 'works in the archive', showAll: 'Show all work', showLess: 'Reduce selection',
      servicesKicker: 'Service worlds', servicesTitle: 'From one image<br><em>to an entire world.</em>', servicesText: 'You do not need to choose the technology. Tell us what you want to achieve and we translate it into the right production path.',
      soundKicker: 'Audio salon', soundTitle: 'Your story<br><em>finds its sound.</em>', soundText: 'Jingles, songs and soundtracks for a brand, an event or someone important to you.', audioDisclosure: 'AI-generated music · example from the studio archive', playTrack: 'Play selected track', pauseTrack: 'Pause playback',
      processKicker: 'How your project takes shape', processTitle: 'Personally guided.<br><em>Clear at every step.</em>', processOne: 'Share the idea', processOneText: 'Show us your material and tell us how you want to use the result.', processTwo: 'Define the direction', processTwoText: 'We agree on style, scope, formats, schedule and quote.', processThree: 'Production & selection', processThreeText: 'We develop, review and refine the agreed direction.', processFour: 'Receive the result', processFourText: 'You receive the agreed files for their intended use.',
      packagesKicker: 'Project starting points', packagesTitle: 'Orientation,<br><em>before we talk.</em>', packagesText: 'Every project is quoted individually. These six starting points show useful combinations.', rightsNote: 'Usage scope, revisions and delivery formats are defined clearly in the individual quote.',
      aboutKicker: 'KreativKI Studio', aboutQuote: 'Technology creates possibilities.<br><em>Direction begins in conversation.</em>', aboutText: 'We combine AI-assisted image editing, animation, music and web design with personal selection and a clear view of your project’s purpose.',
      contactKicker: 'No-obligation short brief', contactTitle: 'What would you like<br><em>to make possible?</em>', contactText: 'A few short details are enough to begin. Your email app will open a prepared enquiry.', formGoal: 'What is it about?', formBusiness: 'Company / brand', formPersonal: 'Special moment', formCustom: 'Own idea', formService: 'Requested service', formChoose: 'Please choose', formDeadline: 'Preferred date (optional)', formName: 'Your name', formEmail: 'Email', formDetails: 'What should we create?', formSubmit: 'Open email draft', formPrivacy: 'No data is stored on this page. The enquiry is only sent after you confirm it in your email app.', morePackages: 'More possibilities', fewerPackages: 'Show less',
      all: 'All', brand: 'Brand & product', photo: 'Photo & memory', motion: 'Film & animation', original: 'Source', result: 'Result', film: 'Film', play: 'Play film', aiEdited: 'AI-edited', aiGenerated: 'AI-generated', source: 'Source material', inquiry: 'Project enquiry', topPick: 'Studio selection', footerLine: 'Image · film · sound · web', transparencyTitle: 'Transparency on AI content', transparencyText: 'Media marked accordingly was created wholly or partly with AI, or substantially edited using AI.', close: 'Close', studioFacts: 'Studio facts', mediaView: 'Media view', filterProjects: 'Filter projects', audioTitles: 'Audio tracks', storyCompareLabel: 'Comparison of source and AI-edited result', reference: 'Reference', removeReference: 'Remove', copyBrief: 'Copy enquiry', copied: 'Enquiry copied.', copyFailed: 'Copying is unavailable. Please select the text manually.', ideaPlaceholder: 'One to three sentences are enough.', viewWork: 'View relevant work', requestService: 'Request this service'
    },
    ru: {
      navWork: 'Работы', navServices: 'Услуги', navProcess: 'Процесс', navContact: 'Контакты', briefCta: 'Обсудить проект', menu: 'Меню',
      heroKicker: 'Изображения · видео · музыка · сайты', heroTitle: 'Ваша идея.<br><em>Новая форма</em><br>выражения.', heroText: 'Из вашей фотографии, продукта или мысли рождается самостоятельный творческий мир — для бренда, воспоминания или особого момента.', discover: 'Смотреть работы', tellIdea: 'Рассказать идею', factProjects: 'проектов в архиве', factLanguages: 'языка', factDirection: 'индивидуальный подход', scroll: 'Листайте',
      featuredKicker: 'Первый взгляд в студию', featuredTitle: 'От портрета<br><em>к персонажу.</em>', featuredText: 'Личная фотография превращается в самостоятельного цифрового персонажа с выразительным характером и уникальным стилем.', featuredCta: 'Смотреть проект и оригинал',
      promiseOne: 'Индивидуально, не по шаблону', promiseTwo: 'Понятное согласование', promiseThree: 'Прозрачная ИИ-продукция', promiseFour: 'Для сайта, соцсетей и памяти',
      pathKicker: 'С чего начинается ваша история?', pathTitle: 'Одна студия.<br><em>Три пути к результату.</em>', pathText: 'Выберите направление, которое ближе всего к вашей задаче. Остальное уточним вместе.', pathBusinessLabel: 'Для компаний и брендов', pathBusinessTitle: 'Показать продукт.<br>Дать бренду голос.', pathPersonalLabel: 'Для особых моментов', pathPersonalTitle: 'Восстановить память.<br>Оживить историю.', pathCustomLabel: 'Для собственной идеи', pathCustomTitle: 'Пока нет категории?<br>Тем интереснее.',
      storyKicker: 'От исходника к впечатлению', storyTitle: 'Не просто изменить.<br><em>Рассказать заново.</em>', storyOne: 'Понять исходный материал', storyOneText: 'Что уже есть, что важно сохранить и где будет работать результат?', storyTwo: 'Разработать направление', storyTwoText: 'Настроение, стиль и формат складываются в ясную концепцию.', storyThree: 'Довести результат', storyThreeText: 'Отбор, детали и файлы проверяются и согласуются вручную.',
      workKicker: 'Избранные работы', workTitle: 'Один мотив.<br><em>Новое впечатление.</em>', workText: 'Выберите проект и посмотрите, во что превратился исходный материал.', openLarge: 'Открыть крупно', similarProject: 'Заказать похожий проект', archiveCount: 'работ в архиве', showAll: 'Показать все работы', showLess: 'Свернуть подборку',
      servicesKicker: 'Миры услуг', servicesTitle: 'От одного изображения<br><em>до целого мира.</em>', servicesText: 'Вам не нужно выбирать технологию. Расскажите о цели — мы предложим подходящий путь производства.',
      soundKicker: 'Аудиосалон', soundTitle: 'Ваша история<br><em>обретает звук.</em>', soundText: 'Джинглы, песни и саундтреки для бренда, события или дорогого вам человека.', audioDisclosure: 'Музыка создана ИИ · пример из архива студии', playTrack: 'Воспроизвести выбранный трек', pauseTrack: 'Приостановить',
      processKicker: 'Как создаётся проект', processTitle: 'Личное сопровождение.<br><em>Ясность на каждом шаге.</em>', processOne: 'Поделиться идеей', processOneText: 'Покажите материал и расскажите, для чего нужен результат.', processTwo: 'Определить направление', processTwoText: 'Согласуем стиль, объём, форматы, срок и предложение.', processThree: 'Производство и отбор', processThreeText: 'Разработаем, проверим и доработаем выбранное направление.', processFour: 'Получить результат', processFourText: 'Вы получите согласованные файлы для оговорённого использования.',
      packagesKicker: 'Варианты старта', packagesTitle: 'Ориентир,<br><em>до разговора.</em>', packagesText: 'Каждый проект рассчитывается индивидуально. Шесть вариантов показывают полезные комбинации.', rightsNote: 'Объём прав, число правок и форматы файлов точно указываются в индивидуальном предложении.',
      aboutKicker: 'KreativKI Studio', aboutQuote: 'Технология открывает возможности.<br><em>Направление рождается в разговоре.</em>', aboutText: 'Мы соединяем обработку изображений, анимацию, музыку и веб-дизайн с личным отбором и пониманием цели проекта.',
      contactKicker: 'Краткий запрос без обязательств', contactTitle: 'Что вы хотите<br><em>сделать возможным?</em>', contactText: 'Для начала достаточно нескольких коротких ответов. Затем откроется подготовленное письмо.', formGoal: 'О чём проект?', formBusiness: 'Компания / бренд', formPersonal: 'Особый момент', formCustom: 'Своя идея', formService: 'Желаемая услуга', formChoose: 'Выберите', formDeadline: 'Желаемый срок (необязательно)', formName: 'Ваше имя', formEmail: 'E-mail', formDetails: 'Что нужно создать?', formSubmit: 'Открыть черновик письма', formPrivacy: 'На странице данные не сохраняются. Запрос отправится только после подтверждения в вашей почтовой программе.', morePackages: 'Другие варианты', fewerPackages: 'Скрыть',
      all: 'Все', brand: 'Бренд и продукт', photo: 'Фото и память', motion: 'Видео и анимация', original: 'Оригинал', result: 'Результат', film: 'Видео', play: 'Смотреть видео', aiEdited: 'Обработано ИИ', aiGenerated: 'Создано ИИ', source: 'Исходный материал', inquiry: 'Запрос проекта', topPick: 'Выбор студии', footerLine: 'Изображение · видео · звук · веб', transparencyTitle: 'Прозрачность ИИ-контента', transparencyText: 'Медиа с соответствующей пометкой полностью или частично создано либо существенно изменено с помощью ИИ.', close: 'Закрыть', studioFacts: 'Факты о студии', mediaView: 'Просмотр медиа', filterProjects: 'Фильтр проектов', audioTitles: 'Аудиотреки', storyCompareLabel: 'Сравнение оригинала и результата, обработанного ИИ', reference: 'Референс', removeReference: 'Удалить', copyBrief: 'Скопировать запрос', copied: 'Запрос скопирован.', copyFailed: 'Копирование недоступно. Выделите текст вручную.', ideaPlaceholder: 'Достаточно одного-трёх предложений.', viewWork: 'Смотреть подходящие работы', requestService: 'Запросить эту услугу'
    }
  };

  Object.assign(copy.de, {
    navFaq:'Fragen', heroTitle:'Aus deinem Material<br>wird ein Auftritt<br><em>mit Charakter.</em>', heroText:'Bilder, kurze Filme, Musik und Webseiten für deine Marke oder einen besonderen Menschen – persönlich entwickelt und gemeinsam abgestimmt.', heroCase:'Interior-Konzept / 01', heroResultAlt:'Veredeltes Interior-Konzept', heroSourceAlt:'Ausgangsfoto des leeren Innenraums', factTransformation:'Original zum Ergebnis', factFormats:'Medienwelten', factDirection:'persönliche Begleitung',
    pathTitle:'Zwei klare Wege.<br><em>Dein Ergebnis.</em>', pathCustomLabel:'Eine andere Idee?', pathCustomLink:'Erzähl sie uns – wir finden gemeinsam den passenden Weg.',
    casesKicker:'Drei echte Verwandlungen', casesTitle:'Nicht nur schön.<br><em>Nachvollziehbar.</em>', casesText:'Jeder Fall beginnt mit vorhandenem Material und einer klaren Aufgabe. Das Ergebnis wird für seinen tatsächlichen Einsatz entwickelt.', caseBrand:'Marke & Produkt', caseMemory:'Foto & Erinnerung', caseMotion:'Film & Animation', caseTask:'Aufgabe', caseDecision:'Entscheidung', caseUse:'Einsatz', viewCase:'Fall vollständig ansehen',
    caseArt:'Kunst & Erinnerung', caseArtTitle:'Aus Foto wird Gemälde', caseArtTask:'Eine persönliche Aufnahme erhält eine eigenständige malerische Atmosphäre.', caseArtDecision:'Charakter und erkennbare Details bleiben, Stil und Stimmung dürfen sich verwandeln.', caseArtUse:'Geschenk, Wandbild und persönliche Erinnerung.', caseBurgerTitle:'Vom Packshot zur Kampagne', caseBurgerTask:'Ein einfaches Produktfoto soll Aufmerksamkeit und Appetit erzeugen.', caseBurgerDecision:'Bewegung, Tiefe und klare Produktpriorität statt dekorativer Effekte.', caseBurgerUse:'Social Media, Kampagne und digitale Werbemittel.', caseRestoreTitle:'Beschädigtes Foto, bewahrter Charakter', caseRestoreTask:'Beschädigungen reduzieren, ohne die Person neu zu erfinden.', caseRestoreDecision:'Zurückhaltende Rekonstruktion mit manueller Detailprüfung.', caseRestoreUse:'Familienarchiv, Geschenk und hochwertiger Druck.', caseMotionTitle:'Eine Erinnerung beginnt sich zu bewegen', caseMotionTask:'Ein historisches Bild als kurzen, respektvollen Moment erlebbar machen.', caseMotionDecision:'Subtile Bewegung statt spektakulärer, unnatürlicher Animation.', caseMotionUse:'Private Erinnerung, Präsentation und digitales Familienarchiv.',
    compare:'Vergleich', compareControls:'Vergleichsansicht', loadingMedia:'Medium wird geladen …', mediaError:'Das Medium konnte nicht geladen werden.', retry:'Erneut versuchen', allTracks:'Alle Audiobeispiele anzeigen', fewerTracks:'Auswahl reduzieren', formErrorTitle:'Bitte prüfe die markierten Angaben:', requiredField:'Dieses Feld wird benötigt.', invalidEmail:'Bitte gib eine gültige E-Mail-Adresse ein.',
    aboutText:'Du sprichst direkt mit dem Studio, das dein Projekt entwickelt. Auswahl, Abstimmung und Qualitätskontrolle bleiben persönlich statt anonym automatisiert.', trustDirect:'Direkter Kontakt', trustDirectText:'Keine anonyme Plattform und kein automatisches Ergebnis ohne Abstimmung.', trustTransparent:'Transparente Herkunft', trustTransparentText:'Original, KI-bearbeitet und KI-generiert werden im Projekt klar unterschieden.', trustPurpose:'Für den Einsatz entwickelt', trustPurposeText:'Format, Stil und Umfang richten sich nach dem vereinbarten Zweck.',
    faqKicker:'Gut zu wissen', faqTitle:'Klarheit,<br><em>bevor wir starten.</em>', faqText:'Die wichtigsten Fragen beantworten wir offen. Projektspezifische Details stehen anschließend eindeutig im Angebot.', faqMaterialQ:'Was muss ich liefern?', faqMaterialA:'Vorhandene Fotos, Produktbilder, Texte oder eine kurze Beschreibung deiner Idee. Wir sagen dir, was davon in welcher Qualität sinnvoll nutzbar ist.', faqCoordQ:'Wie läuft die Abstimmung?', faqCoordA:'Nach dem Kurzbriefing klären wir Richtung, Umfang und Ausgabe. Erst danach beginnt die vereinbarte Produktion.', faqChangesQ:'Wie werden Änderungen geregelt?', faqChangesA:'Anzahl und Umfang der Korrekturen werden vorab im individuellen Angebot festgehalten.', faqFormatsQ:'Welche Dateien bekomme ich?', faqFormatsA:'Die Lieferformate richten sich nach Web, Social Media, Video, Audio oder Druck und werden vor Projektstart vereinbart.', faqRightsQ:'Wie funktionieren Nutzungsrechte?', faqRightsA:'Der vereinbarte Nutzungsumfang wird im Angebot dokumentiert. Die Kennzeichnung von KI-Inhalten ersetzt keine Rechteklärung.', faqPrivacyQ:'Wie werden private Fotos behandelt?', faqPrivacyA:'Sensible Inhalte besprechen wir vorab. Übertragung, Verarbeitung und gewünschte Löschung werden projektspezifisch vereinbart.', digitalKicker:'Digitale Produkte', digitalTitle:'Von der Idee<br><em>zum funktionierenden Werkzeug.</em>', digitalText:'Kleine Software, Webanwendungen und mobile Apps – klar konzipiert, schlank umgesetzt und genau auf deinen Alltag zugeschnitten.', digitalToolLabel:'Kleine Tools', digitalToolTitle:'Ein Helfer, der Arbeit abnimmt.', digitalToolText:'Rechner, Generatoren, interne Abläufe und kleine Automationen – genau so groß, wie die Aufgabe es braucht.', digitalWebLabel:'Webanwendungen', digitalWebTitle:'Komplexe Abläufe, einfach bedienbar.', digitalWebText:'Portale, Dashboards, Konfiguratoren und Buchungsabläufe, die sich verständlich anfühlen und mit deinem Projekt wachsen.', digitalAppLabel:'Mobile Apps', digitalAppTitle:'Fokussiert auf den Moment.', digitalAppText:'Schlanke App-Konzepte für iOS und Android – mit klarer Navigation, sinnvollen Zuständen und einem ruhigen Nutzungserlebnis.', digitalCta:'Projekt besprechen', digitalNote:'Konzeptvorschauen · Entwicklung nach Aufwand und abgestimmtem Funktionsumfang'
  });
  Object.assign(copy.en, {
    navFaq:'Questions', heroTitle:'Your material becomes<br>a presence<br><em>with character.</em>', heroText:'Images, short films, music and websites for your brand or someone special—personally developed and aligned with you.', heroCase:'Interior concept / 01', heroResultAlt:'Refined interior concept', heroSourceAlt:'Source photograph of the empty interior', factTransformation:'source to result', factFormats:'media worlds', factDirection:'personal guidance',
    pathTitle:'Two clear paths.<br><em>Your result.</em>', pathCustomLabel:'A different idea?', pathCustomLink:'Tell us about it—we will find the right path together.',
    casesKicker:'Three real transformations', casesTitle:'Not only beautiful.<br><em>Understandable.</em>', casesText:'Every case begins with existing material and a clear task. The result is developed for its intended use.', caseBrand:'Brand & product', caseMemory:'Photo & memory', caseMotion:'Film & animation', caseTask:'Task', caseDecision:'Decision', caseUse:'Use', viewCase:'View the complete case',
    caseArt:'Art & memory', caseArtTitle:'A photo becomes a painting', caseArtTask:'A personal photograph gains an independent painterly atmosphere.', caseArtDecision:'Character and recognisable detail remain while style and mood can transform.', caseArtUse:'Gift, wall art and personal memory.', caseBurgerTitle:'From packshot to campaign', caseBurgerTask:'A simple product photo needs to create attention and appetite appeal.', caseBurgerDecision:'Movement, depth and clear product priority instead of decorative effects.', caseBurgerUse:'Social media, campaigns and digital advertising.', caseRestoreTitle:'Damaged photo, preserved character', caseRestoreTask:'Reduce damage without reinventing the person.', caseRestoreDecision:'Restrained reconstruction with manual detail review.', caseRestoreUse:'Family archive, gifts and high-quality print.', caseMotionTitle:'A memory begins to move', caseMotionTask:'Turn a historic image into a short, respectful moment.', caseMotionDecision:'Subtle movement instead of spectacular, unnatural animation.', caseMotionUse:'Personal memory, presentation and digital family archive.',
    compare:'Compare', compareControls:'Comparison view', loadingMedia:'Loading media …', mediaError:'The media could not be loaded.', retry:'Try again', allTracks:'Show all audio examples', fewerTracks:'Reduce selection', formErrorTitle:'Please check the highlighted details:', requiredField:'This field is required.', invalidEmail:'Please enter a valid email address.',
    aboutText:'You speak directly with the studio developing your project. Selection, alignment and quality control remain personal rather than anonymously automated.', trustDirect:'Direct contact', trustDirectText:'No anonymous platform and no automated result without alignment.', trustTransparent:'Transparent provenance', trustTransparentText:'Source, AI-edited and AI-generated material are clearly distinguished.', trustPurpose:'Designed for its use', trustPurposeText:'Format, style and scope follow the agreed purpose.',
    faqKicker:'Good to know', faqTitle:'Clarity,<br><em>before we begin.</em>', faqText:'We answer the most important questions openly. Project-specific details are then documented in the quote.', faqMaterialQ:'What do I need to provide?', faqMaterialA:'Existing photos, product images, texts or a short description of your idea. We tell you what can be used and at what quality.', faqCoordQ:'How does alignment work?', faqCoordA:'After the short brief, we clarify direction, scope and output. Agreed production begins afterwards.', faqChangesQ:'How are changes handled?', faqChangesA:'The number and scope of revisions are documented in the individual quote.', faqFormatsQ:'Which files will I receive?', faqFormatsA:'Delivery formats follow the agreed use for web, social media, video, audio or print.', faqRightsQ:'How do usage rights work?', faqRightsA:'The agreed scope of use is documented in the quote. AI labelling does not replace rights clearance.', faqPrivacyQ:'How are private photos handled?', faqPrivacyA:'We discuss sensitive material before production. Transfer, processing and requested deletion are agreed for the project.'
  });
  Object.assign(copy.ru, {
    navFaq:'Вопросы', heroTitle:'Ваш материал становится<br>образом<br><em>с характером.</em>', heroText:'Изображения, короткие фильмы, музыка и сайты для бренда или близкого человека — с личной разработкой и согласованием.', heroCase:'Концепция интерьера / 01', heroResultAlt:'Доработанная концепция интерьера', heroSourceAlt:'Исходная фотография пустого помещения', factTransformation:'от оригинала к результату', factFormats:'медианаправления', factDirection:'личное сопровождение',
    pathTitle:'Два понятных пути.<br><em>Ваш результат.</em>', pathCustomLabel:'Другая идея?', pathCustomLink:'Расскажите о ней — вместе найдём подходящий путь.',
    casesKicker:'Три реальные трансформации', casesTitle:'Не только красиво.<br><em>Но и понятно.</em>', casesText:'Каждый проект начинается с исходного материала и ясной задачи. Результат создаётся для конкретного применения.', caseBrand:'Бренд и продукт', caseMemory:'Фото и память', caseMotion:'Видео и анимация', caseTask:'Задача', caseDecision:'Решение', caseUse:'Применение', viewCase:'Смотреть весь проект',
    caseArt:'Искусство и память', caseArtTitle:'Фото становится картиной', caseArtTask:'Личная фотография получает самостоятельную живописную атмосферу.', caseArtDecision:'Характер и узнаваемые детали сохраняются, а стиль и настроение могут меняться.', caseArtUse:'Подарок, настенное изображение и личная память.', caseBurgerTitle:'От исходного фото к кампании', caseBurgerTask:'Обычное фото продукта должно привлекать внимание и вызывать аппетит.', caseBurgerDecision:'Движение, глубина и приоритет продукта вместо декоративных эффектов.', caseBurgerUse:'Социальные сети, кампании и цифровая реклама.', caseRestoreTitle:'Повреждённое фото, сохранённый характер', caseRestoreTask:'Уменьшить повреждения, не придумывая человека заново.', caseRestoreDecision:'Сдержанная реконструкция с ручной проверкой деталей.', caseRestoreUse:'Семейный архив, подарок и качественная печать.', caseMotionTitle:'Воспоминание начинает двигаться', caseMotionTask:'Превратить историческое фото в короткий и бережный момент.', caseMotionDecision:'Деликатное движение вместо эффектной неестественной анимации.', caseMotionUse:'Личное воспоминание, презентация и цифровой семейный архив.',
    compare:'Сравнить', compareControls:'Режим сравнения', loadingMedia:'Медиа загружается …', mediaError:'Не удалось загрузить медиа.', retry:'Повторить', allTracks:'Показать все аудиопримеры', fewerTracks:'Свернуть подборку', formErrorTitle:'Проверьте отмеченные данные:', requiredField:'Это поле необходимо заполнить.', invalidEmail:'Введите корректный адрес электронной почты.',
    aboutText:'Вы общаетесь непосредственно со студией, которая разрабатывает проект. Отбор, согласование и контроль качества остаются личными, а не анонимно автоматизированными.', trustDirect:'Прямой контакт', trustDirectText:'Не анонимная платформа и не автоматический результат без согласования.', trustTransparent:'Прозрачное происхождение', trustTransparentText:'Оригинал, обработанные ИИ и созданные ИИ материалы чётко различаются.', trustPurpose:'Создано для задачи', trustPurposeText:'Формат, стиль и объём соответствуют согласованной цели.',
    faqKicker:'Важно знать', faqTitle:'Ясность,<br><em>до начала работы.</em>', faqText:'На основные вопросы отвечаем открыто. Детали проекта затем фиксируются в предложении.', faqMaterialQ:'Что нужно предоставить?', faqMaterialA:'Имеющиеся фотографии, изображения продукта, тексты или краткое описание идеи. Мы подскажем, что и в каком качестве можно использовать.', faqCoordQ:'Как проходит согласование?', faqCoordA:'После краткого брифа мы определяем направление, объём и результат. Затем начинается согласованная работа.', faqChangesQ:'Как регулируются изменения?', faqChangesA:'Количество и объём правок заранее фиксируются в индивидуальном предложении.', faqFormatsQ:'Какие файлы я получу?', faqFormatsA:'Форматы определяются задачей: веб, социальные сети, видео, аудио или печать.', faqRightsQ:'Как работают права использования?', faqRightsA:'Согласованный объём использования фиксируется в предложении. Маркировка ИИ не заменяет проверку прав.', faqPrivacyQ:'Как обрабатываются личные фотографии?', faqPrivacyA:'Чувствительные материалы обсуждаются заранее. Передача, обработка и удаление согласуются для проекта.'
  });

  Object.assign(copy.en, { digitalKicker:'Digital products', digitalTitle:'From idea<br><em>to working tool.</em>', digitalText:'Small software, web applications and mobile apps – clearly conceived, leanly built and shaped around your everyday work.', digitalToolLabel:'Small tools', digitalToolTitle:'A helper that takes work off your desk.', digitalToolText:'Calculators, generators, internal workflows and small automations – exactly as large as the task requires.', digitalWebLabel:'Web applications', digitalWebTitle:'Complex workflows, made simple.', digitalWebText:'Portals, dashboards, configurators and booking flows that feel clear to use and can grow with your project.', digitalAppLabel:'Mobile apps', digitalAppTitle:'Focused on the moment.', digitalAppText:'Lean app concepts for iOS and Android – with clear navigation, useful states and a calm user experience.', digitalCta:'Discuss your project', digitalNote:'Concept previews · development scoped to the agreed feature set' });
  Object.assign(copy.ru, { digitalKicker:'Цифровые продукты', digitalTitle:'От идеи<br><em>до работающего инструмента.</em>', digitalText:'Небольшие программы, веб-приложения и мобильные приложения — ясная концепция, аккуратная реализация и фокус на вашей задаче.', digitalToolLabel:'Небольшие инструменты', digitalToolTitle:'Помощник, который экономит время.', digitalToolText:'Калькуляторы, генераторы, внутренние процессы и небольшие автоматизации — ровно такого масштаба, какой требует задача.', digitalWebLabel:'Веб-приложения', digitalWebTitle:'Сложные процессы становятся понятными.', digitalWebText:'Порталы, дашборды, конфигураторы и сценарии бронирования, которыми легко пользоваться и которые растут вместе с проектом.', digitalAppLabel:'Мобильные приложения', digitalAppTitle:'Фокус на одном моменте.', digitalAppText:'Лаконичные приложения для iOS и Android с ясной навигацией, понятными состояниями и спокойным опытом.', digitalCta:'Обсудить проект', digitalNote:'Концептуальные визуализации · разработка по согласованному объёму функций' });

  function resultProvenance(title) {
    const aiEditedProjects = new Set(['Burger-Kampagne','Parfüm in Bewegung','Digitaler Avatar','Sneaker-Kampagne','Uhr-Inszenierung','Interior-Konzept','Altes Foto in Bewegung','Fotorestaurierung','Historische Kolorierung','Erinnerung animieren','Schärfen & Hochskalieren','Personen & Objekte entfernen','Hintergrund austauschen','Porträt & Beauty','Studio-Look','Foto als Gemälde','Foto animieren','Cinemagraph']);
    return aiEditedProjects.has(title) ? 'aiEdited' : 'aiGenerated';
  }

  const projects = [
    ['Burger-Kampagne','brand','Aus einem einfachen Produktfoto entsteht ein dynamisches Kampagnenmotiv.',['web/Burger-Vorher.webp','image'],['web/Explosions-Burger.webp','image']],
    ['Parfüm in Bewegung','brand','Eine ruhige Produktaufnahme wird zur flüssigen, luxuriösen Markenwelt.',['Parfum-Vorher.webp','image'],['Liquid-Explosion.webp','image']],
    ['Digitaler Avatar','brand','Porträt und Stilidee verbinden sich zu einer eigenständigen digitalen Figur.',['Model-Vorher.webp','image'],['Digital-Avatar.webp','image']],
    ['Sneaker-Kampagne','brand','Vom vorhandenen Produktbild zu einer aufmerksamkeitsstarken Werbeszene.',['Nike Shuhe.webp','image'],['Nike Shuhe KI.webp','image']],
    ['Uhr-Inszenierung','brand','Material, Licht und Umgebung geben dem Produkt eine neue Wertigkeit.',['Uhr.webp','image'],['Uhr KI.webp','image']],
    ['Interior-Konzept','brand','Ein Raumfoto wird zur abgestimmten, präsentationsreifen Innenraumvision.',['web/Raum bevor.webp','image'],['web/Raum danach.webp','image']],
    ['Altes Foto in Bewegung','motion','Eine historische Aufnahme wird behutsam restauriert und animiert.',['Animation von alten Fotos davor.webp','image'],['Animation von alten Fotos danach.mp4','video','Animation von alten Fotos danach-poster.jpg']],
    ['Fotorestaurierung','photo','Beschädigte Details und Kontraste werden für eine neue Ausgabe rekonstruiert.',['Wiederherstellung alter Fotos davor.webp','image'],['Wiederherstellung alter Fotos danach.webp','image']],
    ['Historische Kolorierung','photo','Schwarzweiß wird mit einer zurückhaltenden, glaubwürdigen Farbwelt ergänzt.',['Alte Fotos kolorieren davor.webp','image'],['Alte Fotos kolorieren danach.webp','image']],
    ['Erinnerung animieren','motion','Ein persönliches Erinnerungsfoto erhält eine dezente, respektvolle Bewegung.',['Animation von verstorbenen davor.webp','image'],['Animation von verstorbenen danach.mp4','video','Animation von verstorbenen danach-poster.jpg']],
    ['Schärfen & Hochskalieren','photo','Kleine oder unscharfe Aufnahmen werden für größere Ausgaben vorbereitet.',['Foto schärfen & hochskalieren davor.webp','image'],['Foto schärfen & hochskalieren danach.webp','image']],
    ['Personen & Objekte entfernen','photo','Störende Elemente verschwinden, während die Bildwirkung erhalten bleibt.',['PersonenObjekte entfernen davor.webp','image'],['PersonenObjekte entfernen danach.webp','image']],
    ['Hintergrund austauschen','photo','Motiv und neuer Hintergrund werden in Licht und Perspektive aufeinander abgestimmt.',['Hintergrund austauschen davor.webp','image'],['Hintergrund austauschen danach.webp','image']],
    ['Porträt & Beauty','photo','Eine natürliche Retusche mit Fokus auf Haut, Licht und Ausdruck.',['Portrait-Retusche-and-Beauty-davor.webp','image'],['Portrait-Retusche-and-Beauty-danach.webp','image']],
    ['Studio-Look','photo','Aus einer vorhandenen Aufnahme entsteht ein kontrollierter Studio-Eindruck.',['Studio-Fotoshooting Look davor.webp','image'],['Studio-Fotoshooting Look danach.webp','image']],
    ['Foto als Gemälde','photo','Eine persönliche Aufnahme wird in eine malerische Kunstwelt übertragen.',['Bild in Gemälde  Kunststil davor.webp','image'],['Bild in Gemälde  Kunststil danach.webp','image']],
    ['Foto animieren','motion','Ein einzelnes Motiv wird zur kurzen bewegten Szene für Social oder Erinnerung.',['Foto animieren davor.webp','image'],['Foto animieren danach.mp4','video','Foto animieren danach-poster.jpg']],
    ['Cinemagraph','motion','Gezielte Bewegung verwandelt ein stilles Foto in einen atmosphärischen Loop.',['Foto in Video  Cinemagraph vorher.webp','image'],['Foto in Video  Cinemagraph danach.mp4','video','Foto in Video  Cinemagraph danach-poster.jpg']],
    ['Liquid Mercury','brand','Makro-Makeup zwischen Beauty-Fotografie und surrealer Materialstudie.',null,['Makro-Makeup.webp','image']],
    ['Hollywood Chase','motion','Eine kurze filmische VFX-Sequenz für aufmerksamkeitsstarken Content.',null,['Hollywood-VFX.mp4','video','Hollywood-VFX-poster.jpg']],
    ['Fiber Optic Stag','motion','Eine atmosphärische Naturvision mit leuchtender digitaler Ästhetik.',null,['National-Geographic-Natur.mp4','video','National-Geographic-Natur-poster.jpg']],
    ['Infinity Hourglass','brand','Eine surreale Visualisierung von Zeit und Unendlichkeit.',null,['Unendlichkeits-Visualisierung.webp','image']],
    ['Concrete Heart','motion','Material, Form und Bewegung verbinden sich zu einer Logo-Animation.',null,['Logo-Animation.mp4','video','Logo-Animation-poster.jpg']],
    ['Neural Bloom','motion','Eine organische generative Animation mit hypnotischer Tiefenwirkung.',null,['Neural Bloom.mp4','video','Neural Bloom-poster.jpg']],
    ['Frequency Study #1','motion','Eine abstrakte audiovisuelle Studie über Frequenz und Bewegung.',null,['Frequency Study.mp4','video','Frequency Study-poster.jpg']]
  ].map((p, id) => ({
    id,
    slug: slugify(p[0]),
    title: p[0],
    category: p[1],
    description: p[2],
    original: p[3] ? toMedia(p[3], 'source') : null,
    result: toMedia(p[4], resultProvenance(p[0]))
  }));

  function slugify(value) {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' und ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function toMedia(data, provenance) {
    return { src: mediaRoot + data[0], type:data[1], poster:data[2] ? mediaRoot + data[2] : null, provenance };
  }

  const projectI18n = {
    en: [
      ['Burger campaign','A simple product photo becomes a dynamic campaign visual with depth, motion and appetite appeal.'],
      ['Perfume in motion','A restrained packshot becomes a fluid luxury world shaped around the product.'],
      ['Digital avatar','Portrait and art direction combine into a distinctive digital character.'],
      ['Sneaker campaign','An existing product image becomes an attention-grabbing advertising scene.'],
      ['Watch presentation','Material, light and setting give the product a more premium presence.'],
      ['Interior concept','A room photograph becomes a coherent, presentation-ready interior vision.'],
      ['Historic photo in motion','A historic photograph is carefully restored and brought to life.'],
      ['Photo restoration','Damage, detail and contrast are reconstructed for a renewed image.'],
      ['Historic colorization','Black and white is extended with a restrained, credible colour palette.'],
      ['Animating a memory','A personal remembrance photograph receives subtle, respectful motion.'],
      ['Sharpening & upscaling','Small or blurred photographs are prepared for larger, clearer output.'],
      ['Remove people & objects','Distractions disappear while the image composition remains intact.'],
      ['Replace background','Subject and new setting are matched in perspective, colour and light.'],
      ['Portrait & beauty','Natural retouching focused on skin, light and expression.'],
      ['Studio look','An existing photograph gains the controlled character of a studio shoot.'],
      ['Photo as painting','A personal photograph is translated into a painterly art world.'],
      ['Animate a photo','A single image becomes a short moving scene for social media or memories.'],
      ['Cinemagraph','Selective motion turns a still image into an atmospheric loop.'],
      ['Liquid Mercury','Macro makeup between beauty photography and surreal material study.'],
      ['Hollywood Chase','A short cinematic VFX sequence designed for high-attention content.'],
      ['Fiber Optic Stag','An atmospheric nature vision with a luminous digital aesthetic.'],
      ['Infinity Hourglass','A surreal visualization of time, continuity and infinity.'],
      ['Concrete Heart','Material, form and movement combine in a tactile logo animation.'],
      ['Neural Bloom','An organic generative animation with hypnotic spatial depth.'],
      ['Frequency Study #1','An abstract audiovisual study of rhythm, frequency and motion.']
    ],
    ru: [
      ['Бургер-кампания','Обычное фото продукта превращается в динамичный рекламный образ с глубиной и энергией.'],
      ['Парфюм в движении','Сдержанный кадр флакона превращается в текучий мир премиального бренда.'],
      ['Цифровой аватар','Портрет и стилистическая идея соединяются в самостоятельного цифрового персонажа.'],
      ['Кампания для кроссовок','Исходное фото продукта превращается в выразительную рекламную сцену.'],
      ['Презентация часов','Материал, свет и окружение придают продукту премиальное звучание.'],
      ['Концепция интерьера','Фотография комнаты становится цельной презентационной концепцией пространства.'],
      ['Старое фото в движении','Историческая фотография бережно восстанавливается и оживает.'],
      ['Реставрация фото','Повреждения, детали и контраст реконструируются для новой версии снимка.'],
      ['Историческая колоризация','Чёрно-белое фото дополняется сдержанной и достоверной палитрой.'],
      ['Оживить воспоминание','Памятная фотография получает деликатное и уважительное движение.'],
      ['Резкость и увеличение','Небольшие или размытые снимки подготавливаются к крупному формату.'],
      ['Удаление людей и объектов','Лишние элементы исчезают без нарушения композиции снимка.'],
      ['Замена фона','Объект и новое окружение согласуются по перспективе, цвету и свету.'],
      ['Портрет и beauty','Естественная ретушь с акцентом на кожу, свет и выражение лица.'],
      ['Студийный образ','Исходный снимок приобретает выверенный характер студийной съёмки.'],
      ['Фото как картина','Личная фотография переносится в живописный художественный мир.'],
      ['Анимация фотографии','Один снимок становится короткой сценой для соцсетей или воспоминаний.'],
      ['Синемаграф','Локальное движение превращает фотографию в атмосферный цикл.'],
      ['Жидкий металл','Макро-макияж на границе beauty-фотографии и сюрреалистичного материала.'],
      ['Голливудская погоня','Короткая кинематографичная VFX-сцена для заметного контента.'],
      ['Оптоволоконный олень','Атмосферный образ природы со светящейся цифровой эстетикой.'],
      ['Песочные часы бесконечности','Сюрреалистичная визуализация времени и бесконечности.'],
      ['Бетонное сердце','Материал, форма и движение соединяются в выразительной анимации логотипа.'],
      ['Нейронное цветение','Органическая генеративная анимация с гипнотической глубиной.'],
      ['Исследование частоты #1','Абстрактное аудиовизуальное исследование ритма, частоты и движения.']
    ]
  };

  function projectText(project) {
    if (lang === 'de') return { title: project.title, description: project.description };
    const localized = projectI18n[lang]?.[project.id];
    return localized ? { title: localized[0], description: localized[1] } : { title: project.title, description: project.description };
  }

  const services = [
    {de:['Bildgenerierung & -bearbeitung','Porträts retuschieren, Hintergründe ändern und neue Motive für Profil, Druck oder Social Media gestalten.'],en:['Image generation & editing','Retouch portraits, replace backgrounds and create new visuals for profiles, print or social media.'],ru:['Генерация и обработка изображений','Ретушь портретов, замена фона и новые изображения для профиля, печати или соцсетей.']},
    {de:['Video & Animation','Fotos animieren, kurze Clips gestalten und Logos bewegen – für Erinnerungen, Reels oder Markenauftritte.'],en:['Video & animation','Animate photos, create short clips and move logos for memories, reels or brand appearances.'],ru:['Видео и анимация','Оживление фотографий, короткие ролики и анимация логотипов для воспоминаний, reels или бренда.']},
    {de:['Musik & Audio','Individuelle Jingles, Songs und Soundtracks für Marke, Event oder persönliches Projekt.'],en:['Music & audio','Custom jingles, songs and soundtracks for a brand, event or personal project.'],ru:['Музыка и аудио','Индивидуальные джинглы, песни и саундтреки для бренда, события или личного проекта.']},
    {de:['Restaurierung & Upscaling','Alte Fotos wiederherstellen, schärfen, kolorieren und für neue Ausgabegrößen vorbereiten.'],en:['Restoration & upscaling','Restore, sharpen and colorize old photos and prepare them for larger formats.'],ru:['Реставрация и апскейлинг','Восстановление, повышение резкости, колоризация и подготовка старых фото к печати.']},
    {de:['Produktfotografie & CGI','Aus vorhandenen Produktfotos entstehen neue Szenen für Shop, Kampagne und Katalog.'],en:['Product photography & CGI','Turn existing product photos into new scenes for shops, campaigns and catalogues.'],ru:['Продуктовая съёмка и CGI','Новые сцены из имеющихся фото продукта для магазина, кампании и каталога.']},
    {de:['Individuelle KI-Lösungen','Besondere Idee ohne fertige Kategorie? Wir entwickeln Ausgangsmaterial, Ablauf und Format gemeinsam.'],en:['Custom AI solutions','A special idea without a category? We develop the source, workflow and format together.'],ru:['Индивидуальные ИИ-решения','Особая идея без готовой категории? Вместе определим материал, процесс и формат.']},
    {de:['Websites & digitale Produkte','Responsive Websites, kleine Tools und digitale Anwendungen für Kleinunternehmen, Vereine und Privatpersonen.'],en:['Websites & digital products','Responsive websites, small tools and digital products for small businesses, clubs and individuals.'],ru:['Сайты и цифровые продукты','Адаптивные сайты, небольшие инструменты и цифровые продукты для малого бизнеса, объединений и частных лиц.']}
  ];

  const serviceMeta = [
    { filter:'photo', medium:'Bild / Fotobearbeitung' },
    { filter:'motion', medium:'Video / Animation' },
    { filter:'motion', medium:'Musik / Audio' },
    { filter:'photo', medium:'Bild / Fotobearbeitung' },
    { filter:'brand', medium:'Bild / Fotobearbeitung' },
    { filter:'all', medium:'Kombination / noch offen' },
    { filter:'all', medium:'Software / Tool / App' }
  ];

  const packages = [
    {de:['Mini-Web','Kleine Webseite, große Wirkung',['1–5 Unterseiten','Responsiv für Handy & Desktop','Kontaktformular','KI-Bildmaterial']],en:['Mini-Web','Small website, big impact',['1–5 pages','Responsive on mobile & desktop','Contact form','AI image material']],ru:['Мини-сайт','Маленький сайт, большое влияние',['1–5 страниц','Адаптивно для телефона и ПК','Форма обратной связи','Изображения ИИ']]},
    {featured:true,de:['Premium','Website, Medien und Musik',['Komplette Webseite','5 individuelle KI-Fotos','KI-Video bis 30 Sekunden','KI-Song mit Liedtext']],en:['Premium','Website, media and music',['Complete website','5 custom AI photos','AI video up to 30 seconds','AI song with lyrics']],ru:['Премиум','Сайт, медиа и музыка',['Полный веб-сайт','5 индивидуальных фото ИИ','ИИ-видео до 30 секунд','ИИ-песня с текстом']]},
    {de:['Enterprise','Für Unternehmen & Marken',['Professionelle Landingpage','Produkt-KI-Fotos','Image-Video','Jingle und Social-Media-Kit']],en:['Enterprise','For companies & brands',['Professional landing page','AI product photos','Brand video','Jingle and social-media kit']],ru:['Корпоративный','Для компаний и брендов',['Профессиональный лендинг','Продуктовые фото ИИ','Имиджевое видео','Джингл и набор для соцсетей']]},
    {de:['Birthday','Die persönliche Überraschung',['Personalisiertes KI-Foto','KI-Geburtstagsvideo','Individueller Song','Digitale Grußkarte']],en:['Birthday','The personal surprise',['Personalized AI photo','AI birthday video','Custom song','Digital greeting card']],ru:['День рождения','Личный сюрприз',['Персонализированное фото ИИ','ИИ-видео на день рождения','Индивидуальная песня','Цифровая открытка']]},
    {featured:true,de:['Audio-Pro','Soundtrack, Jingle & mehr',['Individueller Song mit Text','Firmen-Jingle','Hochzeits- oder Event-Song','Genre nach Wahl']],en:['Audio-Pro','Soundtrack, jingle & more',['Custom song with lyrics','Corporate jingle','Wedding or event song','Genre of your choice']],ru:['Аудио-Про','Саундтрек, джингл и другое',['Индивидуальная песня с текстом','Корпоративный джингл','Свадебная песня или песня для события','Жанр на выбор']]},
    {de:['Foto-Pro','Bearbeitung & Restaurierung',['Schärfen und Hochskalieren','Kolorierung und Restaurierung','Hintergrund austauschen','Porträt-Retusche']],en:['Photo-Pro','Editing & restoration',['Sharpening and upscaling','Colorization and restoration','Background replacement','Portrait retouching']],ru:['Фото-Про','Обработка и реставрация',['Повышение резкости и масштаба','Колоризация и реставрация','Замена фона','Ретушь портрета']]}
  ];

  const tracks = [
    ['GHOST IN THE GPU','HIP-HOP / TRAP','Gaming-Intro','Gaming Hymne.mp3'],
    ['ZERO LATENCY','ELECTRONIC / AMBIENT','Firmen-Jingle','Firmen-Jingle.mp3'],
    ['DIGITAL REBELLION','ALTERNATIVE ROCK','Motivations-Song','Motivationslied.mp3'],
    ['DREI WORTE','LOVE / ACOUSTIC','Hochzeits-Song','Hochzeit Personalisiert.mp3'],
    ['PARTY CLUB HYMN','PARTY / DANCE','Geburtstags-Party','PARTY CLUB Lied.mp3'],
    ['IRON WILL','WORKOUT','Fitness-Training','Workout.mp3'],
    ['NEUER START','SCHOOL','Schulabschluss','Schulle ABSCHLUSS.mp3'],
    ['FARBENFROH','KIDS','Kinderlied','KINDERLIED.mp3'],
    ['STERNENLICHT','LULLABY','Gute-Nacht-Lied','Kinder Einschlaflied.mp3'],
    ['STILLE NACHT DIGITAL','X-MAS','Weihnachtszeit','WEIHNACHTEN.mp3'],
    ['TREUER FREUND','PET','Haustier-Geschenk','Haustier Personalisiert.mp3'],
    ['WELTUNTERGANG IM SALE','HUMOR','Scherzgeschenk','Scherz Song.mp3']
  ];

  const mediumLabels = {
    de:['Bild / Fotobearbeitung','Video / Animation','Musik / Audio','Webseite','Software / Tool / App','Kombination / noch offen'],
    en:['Image / photo editing','Video / animation','Music / audio','Website','Software / tool / app','Combination / not sure yet'],
    ru:['Изображение / обработка фото','Видео / анимация','Музыка / аудио','Веб-сайт','Программа / инструмент / приложение','Комбинация / пока не знаю']
  };

  const trackOccasions = {
    en:['Gaming intro','Corporate jingle','Motivation song','Wedding song','Birthday party','Fitness training','Graduation','Kids song','Lullaby','Christmas','Pet gift','Joke gift'],
    ru:['Игровое интро','Корпоративный джингл','Мотивационная песня','Свадебная песня','День рождения','Фитнес-тренировка','Выпускной','Детская песня','Колыбельная','Рождество','Подарок о питомце','Шуточный подарок']
  };

  function readPreference(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  }

  function savePreference(key, value) {
    try { localStorage.setItem(key, value); } catch { /* Private browsing can deny storage. */ }
  }

  let lang = readPreference('riviera-language', 'de');
  if (!copy[lang]) lang = 'de';
  let activeProject = projects[0];
  let activeMode = activeProject.original ? 'result' : 'film';
  let filter = new URL(location.href).searchParams.get('filter') || 'all';
  let expanded = false;
  let packagesExpanded = false;
  let tracksExpanded = false;
  let activeTrack = 0;
  let briefReference = '';
  let audiencePreference = 'all';
  let storyManualView = null;
  let dialogOpener = null;
  const videoPositions = new Map();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  function t(key) { return copy[lang]?.[key] || copy.de[key] || key; }
  function localize() {
    document.documentElement.lang = lang;
    $$('[data-copy]').forEach(el => { el.textContent = t(el.dataset.copy); });
    $$('[data-copy-html]').forEach(el => { el.innerHTML = t(el.dataset.copyHtml); });
    $$('[data-aria-copy]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.ariaCopy)); });
    $$('[data-placeholder-copy]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.placeholderCopy)); });
    $$('[data-alt-copy]').forEach(el => { el.alt = t(el.dataset.altCopy); });
    $$('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    updateBriefContext();
    renderFilters(); renderStage({ preserveMedia:true }); renderGrid(); renderSound(); renderForm();
  }

  function pauseMedia(except) {
    $$('video, audio').forEach(media => {
      if (media.tagName === 'VIDEO' && media.currentSrc && Number.isFinite(media.currentTime)) videoPositions.set(media.currentSrc, media.currentTime);
      if (media !== except) media.pause();
    });
  }
  document.addEventListener('play', event => { if (event.target.matches('video,audio')) pauseMedia(event.target); }, true);
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauseMedia(); });

  function mediaLabel(media, mode) {
    return t(media.provenance || (mode === 'original' ? 'source' : 'aiGenerated'));
  }

  function selectedMedia() {
    if (activeMode === 'original' && activeProject.original) return activeProject.original;
    return activeProject.result;
  }

  function renderStage({ preserveMedia = false, focusMode = false, transition = false } = {}) {
    const resultMode = activeProject.result.type === 'video' ? 'film' : 'result';
    const modes = [];
    if (activeProject.original) modes.push(['original', t('original')]);
    modes.push([resultMode, resultMode === 'film' ? t('film') : t('result')]);
    if (!modes.some(([key]) => key === activeMode)) activeMode = resultMode;
    const media = selectedMedia();
    const text = projectText(activeProject);
    $('#stageCategory').textContent = t(activeProject.category);
    $('#stageTitle').textContent = text.title;
    $('#stageDescription').textContent = text.description;
    $('#projectInquiry').dataset.project = text.title;
    $('#stageModes').replaceChildren(...modes.map(([key,label]) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = label;
      button.dataset.mode = key;
      button.setAttribute('aria-pressed', String(activeMode === key));
      button.addEventListener('click', () => { pauseMedia(); activeMode = key; renderStage({ focusMode:true, transition:true }); });
      return button;
    }));
    const frame = $('#stageMedia');
    if (preserveMedia && frame.dataset.src === media.src) {
      const existingDisclosure = $('.media-disclosure', frame); if (existingDisclosure) existingDisclosure.textContent = mediaLabel(media, activeMode);
      return;
    }
    if (transition && !reducedMotion.matches) { $('#projectStage').classList.add('is-switching'); setTimeout(() => $('#projectStage').classList.remove('is-switching'), 210); }
    frame.replaceChildren(); frame.dataset.src = media.src; frame.setAttribute('aria-busy', 'false');
    const disclosure = document.createElement('span'); disclosure.className = 'media-disclosure'; disclosure.textContent = mediaLabel(media, activeMode);
    if (media.type === 'image') {
      const img = new Image(); img.src = media.src; img.alt = text.title; img.width = 1200; img.height = 800;
      img.addEventListener('error', () => showMediaError(frame, () => renderStage({ transition:true })), { once:true });
      frame.append(img, disclosure);
    } else {
      const shell = document.createElement('div'); shell.className = 'video-poster';
      const poster = new Image(); poster.src = media.poster; poster.alt = ''; poster.width = 1200; poster.height = 800;
      const play = document.createElement('button'); play.className = 'video-play'; play.type = 'button'; play.setAttribute('aria-label', t('play')); play.textContent = '▶';
      play.addEventListener('click', () => startStageVideo(shell, media, disclosure));
      shell.append(poster, play); frame.append(shell, disclosure);
    }
    $$('.project-card').forEach(card => card.setAttribute('aria-pressed', String(Number(card.dataset.id) === activeProject.id)));
    if (focusMode) requestAnimationFrame(() => $(`#stageModes [data-mode="${activeMode}"]`)?.focus());
  }

  function mediaStatus(message, retry) {
    const status = document.createElement('div'); status.className = 'media-status'; status.setAttribute('role', 'status');
    const inner = document.createElement('div'); const text = document.createElement('p'); text.textContent = message; inner.append(text);
    if (retry) { const button = document.createElement('button'); button.type = 'button'; button.textContent = t('retry'); button.addEventListener('click', retry); inner.append(button); }
    status.append(inner); return status;
  }

  function showMediaError(container, retry) {
    container.setAttribute('aria-busy', 'false'); const old = $('.media-status', container); if (old) old.remove(); container.append(mediaStatus(t('mediaError'), retry));
  }

  async function startStageVideo(shell, media, disclosure) {
    const frame = $('#stageMedia'); frame.setAttribute('aria-busy', 'true');
    const video = createVideo(media); const loading = mediaStatus(t('loadingMedia'));
    shell.replaceChildren(video, loading); shell.append(disclosure);
    const ready = () => { frame.setAttribute('aria-busy', 'false'); loading.remove(); };
    video.addEventListener('canplay', ready, { once:true });
    video.addEventListener('playing', ready, { once:true });
    video.addEventListener('error', () => showMediaError(shell, () => startStageVideo(shell, media, disclosure)), { once:true });
    try { await video.play(); } catch { ready(); video.controls = true; }
  }

  function createVideo(media) {
    const video = document.createElement('video');
    video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.poster = media.poster || ''; video.src = media.src;
    video.addEventListener('loadedmetadata', () => {
      const remembered = videoPositions.get(video.currentSrc);
      if (Number.isFinite(remembered) && remembered < video.duration) video.currentTime = remembered;
    }, { once:true });
    return video;
  }

  function thumbFor(project) { return project.result.poster || project.result.src; }
  function renderGrid() {
    const list = projects.filter(p => filter === 'all' || p.category === filter);
    $('#projectCount').textContent = String(list.length);
    $('#projectGrid').replaceChildren(...list.map((project, index) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'project-card'; button.dataset.id = project.id; button.dataset.slug = project.slug;
      button.hidden = !expanded && index >= 6; button.setAttribute('aria-pressed', String(project.id === activeProject.id));
      const visual = document.createElement('span'); visual.className = 'project-thumb';
      const text = projectText(project);
      const img = new Image(); if (expanded || index < 6) img.src = thumbFor(project); else img.dataset.src = thumbFor(project); img.alt = ''; img.loading = 'lazy'; img.width = 560; img.height = 420; visual.append(img);
      const body = document.createElement('span'); body.className = 'project-card-body'; body.innerHTML = `<span><h3>${text.title}</h3><small>${t(project.category)}</small></span>${project.result.type === 'video' ? '<span class="play-mark" aria-hidden="true">▶</span>' : ''}`;
      button.append(visual, body); button.addEventListener('click', () => selectProject(project)); return button;
    }));
    $('#archiveToggle').hidden = list.length <= 6;
    $('#archiveToggle').textContent = expanded ? t('showLess') : t('showAll');
    $('#archiveToggle').setAttribute('aria-expanded', String(expanded));
  }

  function selectProject(project, historyMode = 'push') {
    pauseMedia(); activeProject = project; activeMode = project.result.type === 'video' ? 'film' : 'result'; renderStage({ transition:true }); renderGrid();
    updateUrl(historyMode);
    $('#projectStage').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'center' });
    $('#stageTitle').setAttribute('tabindex','-1'); $('#stageTitle').focus({ preventScroll:true });
  }

  function renderFilters() {
    $('#projectFilters').replaceChildren(...['all','brand','photo','motion'].map(key => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = t(key); button.setAttribute('aria-pressed', String(filter === key));
      button.addEventListener('click', () => { filter = key; expanded = false; const valid = projects.filter(p => key === 'all' || p.category === key); if (!valid.includes(activeProject)) activeProject = valid[0]; activeMode = activeProject.result.type === 'video' ? 'film' : 'result'; renderFilters(); renderStage(); renderGrid(); updateUrl('push'); });
      return button;
    }));
  }

  function updateUrl(mode = 'replace') {
    const url = new URL(location.href); url.searchParams.set('filter', filter); url.searchParams.set('project', activeProject.slug);
    history[mode === 'push' ? 'pushState' : 'replaceState']({ filter, project: activeProject.slug }, '', url);
  }

  function renderServices() {
    const iconPaths = [
      '<rect x="8" y="10" width="32" height="28" rx="2"/><circle cx="18" cy="20" r="3"/><path d="m11 34 9-8 6 5 5-4 6 7"/>',
      '<rect x="7" y="11" width="34" height="26" rx="3"/><path d="m20 18 11 6-11 6Z"/>',
      '<path d="M8 27v-6m8 12V15m8 23V10m8 23V15m8 12v-6"/>',
      '<path d="M24 7v34M7 24h34M12 12l24 24M36 12 12 36"/><circle cx="24" cy="24" r="11"/>',
      '<path d="M9 15h9l3-4h6l3 4h9v24H9Z"/><circle cx="24" cy="27" r="8"/>',
      '<path d="M24 7v7m0 20v7M7 24h7m20 0h7M12 12l5 5m14 14 5 5m0-24-5 5M17 31l-5 5"/><circle cx="24" cy="24" r="7"/>',
      '<rect x="7" y="9" width="34" height="30" rx="2"/><path d="M7 17h34M13 13h1m4 0h1m5 10h10m-20 7h20"/>'
    ];
    const order = audiencePreference === 'business' ? [4,1,6,0,2,5,3] : audiencePreference === 'personal' ? [3,0,1,2,5,6,4] : services.map((_, index) => index);
    $('#serviceGrid').replaceChildren(...order.map(index => {
      const translations = services[index];
      const service = translations[lang] || translations.de;
      const article = document.createElement('article'); article.className = 'service-card reveal'; article.dataset.service = String(index);
      const icon = `<svg class="service-icon" viewBox="0 0 48 48" aria-hidden="true">${iconPaths[index]}</svg>`;
      article.innerHTML = `<div class="service-top"><span class="service-index">0${index+1}</span>${icon}</div><h3>${service[0]}</h3><p>${service[1]}</p><div class="service-actions"><a href="#arbeiten" data-service-work="${index}">${t('viewWork')}</a><a href="#kontakt" data-service-request="${index}">${t('requestService')}</a></div>`; return article;
    }));
  }

  function renderPackages() {
    const order = audiencePreference === 'personal' ? [3,5,4,0,1,2] : audiencePreference === 'business' ? [2,1,0,4,5,3] : packages.map((_, index) => index);
    $('#packageGrid').replaceChildren(...order.map((packageIndex,index) => {
      const translations = packages[packageIndex];
      const item = translations[lang] || translations.de;
      const article = document.createElement('article'); article.className = 'package-card reveal' + (translations.featured ? ' featured' : '');
      article.hidden = !packagesExpanded && index >= 3;
      article.innerHTML = `<span>${translations.featured ? t('topPick') : `0${index+1}`}</span><h3>${item[0]}</h3><p>${item[1]}</p><ul>${item[2].map(feature => `<li>${feature}</li>`).join('')}</ul><a class="text-link" href="#kontakt" data-package="${translations.de[0]}"><span>${t('briefCta')}</span><i aria-hidden="true">↗</i></a>`;
      return article;
    }));
    $('#packageToggle').textContent = packagesExpanded ? t('fewerPackages') : t('morePackages');
    $('#packageToggle').setAttribute('aria-expanded', String(packagesExpanded));
  }

  function renderSound() {
    const track = tracks[activeTrack]; $('#trackGenre').textContent = track[1]; $('#trackTitle').textContent = track[0]; $('#trackOccasion').textContent = lang === 'de' ? track[2] : trackOccasions[lang][activeTrack];
    const audio = $('#audioPlayer'); if (decodeURI(audio.getAttribute('src') || '') !== mediaRoot + track[3]) { audio.pause(); audio.removeAttribute('src'); audio.load(); }
    $('#trackPlay b').textContent = audio.paused ? t('playTrack') : t('pauseTrack');
    $('#trackPlay span').textContent = audio.paused ? '▶' : 'Ⅱ';
    const visibleTracks = tracksExpanded ? tracks : tracks.slice(0, 4);
    $('#trackList').replaceChildren(...visibleTracks.map((item,index) => {
      const button = document.createElement('button'); button.type = 'button'; button.setAttribute('aria-pressed', String(index === activeTrack));
      button.innerHTML = `<span>${String(index+1).padStart(2,'0')}</span><strong>${item[0]}</strong><small>${item[1]}</small>`;
      button.addEventListener('click', () => { pauseMedia(); activeTrack = index; renderSound(); const player = $('#audioPlayer'); player.src = mediaRoot + tracks[index][3]; player.play().catch(() => {}); }); return button;
    }));
    $('#trackToggle').textContent = tracksExpanded ? t('fewerTracks') : t('allTracks');
    $('#trackToggle').setAttribute('aria-expanded', String(tracksExpanded));
  }

  function renderForm() {
    const form = $('#briefForm');
    $$('[data-copy]', form).forEach(el => { el.textContent = t(el.dataset.copy); });
    $$('select[name="medium"] option:not(:first-child)', form).forEach((option,index) => { option.textContent = mediumLabels[lang][index]; });
    updateBriefContext();
  }

  function updateBriefContext() {
    const context = $('#briefContext');
    if (!context) return;
    context.hidden = !briefReference;
    $('#briefContextValue').textContent = briefReference;
  }

  function setBriefContext(reference, medium) {
    briefReference = reference || '';
    if (medium !== undefined) $('#briefForm select[name="medium"]').value = medium;
    updateBriefContext();
  }

  function buildBriefText() {
    const data = new FormData($('#briefForm'));
    return [
      briefReference ? `${t('reference')}: ${briefReference}` : '',
      `${t('formGoal')}: ${data.get('goal') || '—'}`,
      `${t('formService')}: ${data.get('medium') || '—'}`,
      `${t('formName')}: ${data.get('name') || '—'}`,
      `${t('formEmail')}: ${data.get('email') || '—'}`,
      `${t('formDetails')}: ${data.get('idea') || '—'}`
    ].filter(Boolean).join('\n');
  }

  function clearFormErrors() {
    $$('.field-error').forEach(error => error.remove());
    $$('#briefForm [aria-invalid="true"]').forEach(field => { field.removeAttribute('aria-invalid'); field.removeAttribute('aria-describedby'); });
    const summary = $('#formErrors'); summary.hidden = true; summary.replaceChildren();
  }

  function validateBrief() {
    clearFormErrors();
    const form = $('#briefForm'); const invalid = [];
    const goal = $('input[name="goal"]:checked', form);
    if (!goal) invalid.push({ field:$('input[name="goal"]', form), container:$('fieldset', form), label:t('formGoal'), message:t('requiredField') });
    for (const field of $$('select[required], textarea[required], input[name="name"][required], input[name="email"][required]', form)) {
      let message = '';
      if (!field.value.trim()) message = t('requiredField');
      else if (field.type === 'email' && !field.validity.valid) message = t('invalidEmail');
      if (message) invalid.push({ field, container:field.closest('.field'), label:field.closest('.field')?.querySelector('span')?.textContent || field.name, message });
    }
    if (!invalid.length) return true;
    const list = document.createElement('ul');
    invalid.forEach(({ field, container, label, message }, index) => {
      if (!field.id) field.id = `brief-field-${field.name || index}`;
      const error = document.createElement('small'); error.className = 'field-error'; error.id = `${field.id}-error`; error.textContent = message;
      container.append(error); field.setAttribute('aria-invalid', 'true'); field.setAttribute('aria-describedby', error.id);
      const item = document.createElement('li'); const link = document.createElement('a'); link.href = `#${field.id}`; link.textContent = `${label}: ${message}`; link.addEventListener('click', event => { event.preventDefault(); field.focus(); }); item.append(link); list.append(item);
    });
    const summary = $('#formErrors'); const heading = document.createElement('strong'); heading.textContent = t('formErrorTitle'); summary.append(heading, list); summary.hidden = false; summary.focus();
    return false;
  }

  async function copyBrief() {
    const text = buildBriefText();
    const status = $('#formStatus');
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const temporary = document.createElement('textarea'); temporary.value = text; temporary.style.position = 'fixed'; temporary.style.opacity = '0';
        document.body.append(temporary); temporary.select();
        if (!document.execCommand('copy')) throw new Error('Copy unavailable');
        temporary.remove();
      }
      status.textContent = t('copied');
    } catch { status.textContent = t('copyFailed'); }
  }

  function openDialog() {
    pauseMedia();
    dialogOpener = document.activeElement;
    const media = selectedMedia(); const dialog = $('.media-dialog'); const target = $('#dialogMedia'); target.replaceChildren();
    const text = projectText(activeProject);
    let el;
    if (media.type === 'video') el = createVideo(media);
    else { el = new Image(); el.src = media.src; el.alt = text.title; }
    target.append(el); $('#dialogTitle').textContent = `${text.title} · ${mediaLabel(media, activeMode)}`; dialog.showModal(); document.body.classList.add('dialog-open');
  }

  function initEvents() {
    $$('[data-lang]').forEach(button => button.addEventListener('click', () => { lang = button.dataset.lang; savePreference('riviera-language', lang); localize(); renderServices(); renderPackages(); observeReveals(); }));
    $('#archiveToggle').addEventListener('click', () => { expanded = !expanded; renderGrid(); });
    $('#packageToggle').addEventListener('click', () => { packagesExpanded = !packagesExpanded; renderPackages(); observeReveals(); });
    $('.menu-toggle').addEventListener('click', () => {
      const open = !$('[data-header]').classList.contains('menu-open');
      $('[data-header]').classList.toggle('menu-open', open);
      $('.menu-toggle').setAttribute('aria-expanded', String(open));
    });
    $$('#mainNav a').forEach(link => link.addEventListener('click', () => { $('[data-header]').classList.remove('menu-open'); $('.menu-toggle').setAttribute('aria-expanded', 'false'); }));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { $('[data-header]').classList.remove('menu-open'); $('.menu-toggle').setAttribute('aria-expanded', 'false'); } });
    document.addEventListener('click', event => { if (!event.target.closest('[data-header]')) { $('[data-header]').classList.remove('menu-open'); $('.menu-toggle').setAttribute('aria-expanded', 'false'); } });
    $('#openMedia').addEventListener('click', openDialog);
    $('.dialog-close').addEventListener('click', () => $('.media-dialog').close());
    $('.media-dialog').addEventListener('click', event => { if (event.target === $('.media-dialog')) $('.media-dialog').close(); });
    $('.media-dialog').addEventListener('close', () => { pauseMedia(); $('#dialogMedia').replaceChildren(); document.body.classList.remove('dialog-open'); if (dialogOpener?.isConnected) dialogOpener.focus(); });
    $('#trackToggle').addEventListener('click', () => { tracksExpanded = !tracksExpanded; renderSound(); });
    $('#trackPlay').addEventListener('click', () => {
      const player = $('#audioPlayer');
      if (!player.getAttribute('src')) player.src = mediaRoot + tracks[activeTrack][3];
      if (player.paused) player.play().catch(() => {}); else player.pause();
    });
    $('#audioPlayer').addEventListener('play', () => { $('.sound-player').classList.add('is-playing'); $('#trackPlay b').textContent = t('pauseTrack'); $('#trackPlay span').textContent = 'Ⅱ'; });
    $('#audioPlayer').addEventListener('pause', () => { $('.sound-player').classList.remove('is-playing'); $('#trackPlay b').textContent = t('playTrack'); $('#trackPlay span').textContent = '▶'; });
    $$('[data-path]').forEach(link => link.addEventListener('click', () => {
      const goalByPath = { business:'Unternehmen / Marke', personal:'Besonderer Moment', custom:'Eigene Idee' };
      const goal = $(`#briefForm input[name="goal"][value="${goalByPath[link.dataset.path]}"]`); if (goal) goal.checked = true;
      audiencePreference = link.dataset.path === 'business' ? 'business' : link.dataset.path === 'personal' ? 'personal' : 'all';
      if (link.dataset.path === 'business') filter = 'brand';
      if (link.dataset.path === 'personal') filter = 'photo';
      if (filter !== 'all' && activeProject.category !== filter) activeProject = projects.find(project => project.category === filter);
      activeMode = activeProject.result.type === 'video' ? 'film' : 'result'; renderFilters(); renderStage({ transition:true }); renderGrid(); renderServices(); renderPackages(); observeReveals(); updateUrl('push');
    }));
    $$('[data-case-open]').forEach(button => button.addEventListener('click', () => {
      const project = projects.find(item => item.slug === button.dataset.caseOpen); if (!project) return;
      filter = project.category; renderFilters(); selectProject(project);
    }));
    $$('[data-story-view]').forEach(button => button.addEventListener('click', () => {
      storyManualView = button.dataset.storyView;
      const progress = storyManualView === 'original' ? 0 : storyManualView === 'result' ? 1 : .5;
      const story = $('#story'); story.style.setProperty('--story-clip', `${(1 - progress) * 100}%`); story.style.setProperty('--story-line', `${(1 - progress) * 100}%`);
      story.dataset.view = storyManualView;
      $$('[data-story-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    }));
    $('[data-featured-project]').addEventListener('click', event => {
      event.preventDefault(); const project = projects.find(item => item.slug === event.currentTarget.dataset.featuredProject);
      if (project) { filter = project.category; renderFilters(); selectProject(project); }
    });
    document.addEventListener('click', event => {
      const link = event.target.closest('[data-package], #projectInquiry, [data-service-work], [data-service-request], [data-digital-request]'); if (!link) return;
      if (link.dataset.digitalRequest !== undefined) {
        const labels = { tool:t('digitalToolLabel'), web:t('digitalWebLabel'), app:t('digitalAppLabel') };
        setBriefContext(labels[link.dataset.digitalRequest] || t('digitalKicker'), 'Software / Tool / App');
        return;
      }
      if (link.dataset.serviceWork !== undefined) {
        const meta = serviceMeta[Number(link.dataset.serviceWork)]; filter = meta.filter; expanded = false;
        const valid = projects.filter(project => filter === 'all' || project.category === filter); if (!valid.includes(activeProject)) activeProject = valid[0];
        activeMode = activeProject.result.type === 'video' ? 'film' : 'result'; renderFilters(); renderStage(); renderGrid(); updateUrl('push'); return;
      }
      if (link.dataset.serviceRequest !== undefined) {
        const index = Number(link.dataset.serviceRequest); const service = (services[index][lang] || services[index].de)[0];
        setBriefContext(service, serviceMeta[index].medium); return;
      }
      const value = link.dataset.package || link.dataset.project;
      let medium = '';
      if (link.dataset.package) medium = value.includes('Web') || value === 'Enterprise' || value === 'Premium' ? 'Webseite' : value.includes('Audio') || value === 'Birthday' ? 'Musik / Audio' : value.includes('Foto') ? 'Bild / Fotobearbeitung' : 'Kombination / noch offen';
      else medium = activeProject.result.type === 'video' ? 'Video / Animation' : activeProject.category === 'photo' ? 'Bild / Fotobearbeitung' : 'Kombination / noch offen';
      setBriefContext(value, medium);
    });
    $('#clearBriefContext').addEventListener('click', () => setBriefContext('', ''));
    $('#copyBrief').addEventListener('click', copyBrief);
    $('#briefForm').addEventListener('submit', event => {
      event.preventDefault();
      if (!validateBrief()) return;
      location.href = `mailto:info@kreativkistudio.de?subject=${encodeURIComponent(t('inquiry'))}&body=${encodeURIComponent(buildBriefText())}`;
    });
    $('#briefForm').addEventListener('input', event => { if (event.target.matches('[aria-invalid="true"]')) clearFormErrors(); });
    addEventListener('popstate', () => applyUrlState(false));
    const mobileContact = $('#mobileContact');
    if (mobileContact && 'IntersectionObserver' in window) {
      const visibleSections = new Set();
      const updateContact = () => mobileContact.classList.toggle('is-hidden', visibleSections.size > 0);
      const contactObserver = new IntersectionObserver(entries => { entries.forEach(entry => entry.isIntersecting ? visibleSections.add(entry.target.id) : visibleSections.delete(entry.target.id)); updateContact(); }, { threshold:.08 });
      contactObserver.observe($('.hero')); contactObserver.observe($('#kontakt'));
    }
    const processObserver = new IntersectionObserver(([entry]) => entry.target.classList.toggle('in-view', entry.isIntersecting), { threshold:.25 }); processObserver.observe($('#ablauf'));
    const soundObserver = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) $('#audioPlayer').pause(); }, { threshold:.05 }); soundObserver.observe($('#sound'));
  }

  function observeReveals() {
    if (reducedMotion.matches) { $$('.reveal').forEach(el => el.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold:.12, rootMargin:'0px 0px -40px' });
    $$('.reveal:not(.is-visible)').forEach(el => observer.observe(el));
  }

  function initScrollMotion() {
    let queued = false;
    const story = $('#story');
    let storyRange = 1;
    const measureStory = () => { storyRange = Math.max(1, story.offsetHeight - innerHeight); };
    measureStory();
    addEventListener('resize', measureStory, { passive:true });
    const update = () => {
      queued = false;
      const y = scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      const storyRect = reducedMotion.matches ? null : story.getBoundingClientRect();
      document.documentElement.style.setProperty('--scroll', max ? Math.min(1, y / max) : 0);
      $('[data-header]').classList.toggle('is-fixed', y > 120);
      if (!reducedMotion.matches) {
        document.documentElement.style.setProperty('--hero-y', Math.min(90, y * .08));
        const progress = Math.max(0, Math.min(1, -storyRect.top / storyRange));
        story.style.setProperty('--story-progress', progress);
        if (!storyManualView) {
          story.style.setProperty('--story-clip', `${(1 - progress) * 100}%`);
          story.style.setProperty('--story-line', `${(1 - progress) * 100}%`);
          story.dataset.view = progress <= .02 ? 'original' : progress >= .98 ? 'result' : 'split';
        }
        const step = Math.min(2, Math.floor(progress * 3));
        $$('.story-steps li').forEach((el,index) => el.classList.toggle('is-active', index === step));
      }
    };
    const requestUpdate = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
    addEventListener('scroll', requestUpdate, { passive:true }); addEventListener('resize', requestUpdate); update();
  }

  function applyUrlState(writeCanonicalUrl = true) {
    const url = new URL(location.href);
    const requestedFilter = url.searchParams.get('filter') || 'all';
    const requestedProject = url.searchParams.get('project');
    filter = ['all','brand','photo','motion'].includes(requestedFilter) ? requestedFilter : 'all';
    const legacyId = Number(requestedProject);
    activeProject = projects.find(project => project.slug === requestedProject) || (Number.isInteger(legacyId) ? projects[legacyId] : null) || projects[0];
    if (filter !== 'all' && activeProject.category !== filter) activeProject = projects.find(project => project.category === filter) || projects[0];
    activeMode = activeProject.result.type === 'video' ? 'film' : 'result';
    if (writeCanonicalUrl) updateUrl('replace');
    renderFilters(); renderStage(); renderGrid();
  }

  if (!['all','brand','photo','motion'].includes(filter)) filter = 'all';
  activeMode = activeProject.result.type === 'video' ? 'film' : 'result';
  renderServices(); renderPackages(); renderForm(); initEvents();
  localize(); applyUrlState(true); observeReveals(); initScrollMotion();
})();
