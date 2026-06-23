const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro size
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();

  let tests = { pass: 0, fail: 0, warnings: [] };

  function check(label, condition, detail) {
    if (condition) {
      tests.pass++;
      console.log('  ✅', label);
    } else {
      tests.fail++;
      console.log('  ❌', label, '-', detail || '');
    }
  }

  await page.goto('http://localhost:8081/index.html', { waitUntil: 'networkidle', timeout: 15000 });
  console.log('\n📱 MOBILE UI TEST (390×844)\n');

  // ===========================================
  // 1. NAVIGATION
  // ===========================================
  console.log('≡ NAVIGATION');
  const nav = await page.$('nav');
  check('Nav vorhanden', !!nav);
  if (nav) {
    const navRect = await nav.boundingBox();
    check('Nav sichtbar', navRect.width > 0 && navRect.height > 0);
  }

  const hamburger = await page.$('.hamburger');
  check('Hamburger-Button vorhanden', !!hamburger);

  const navLinks = await page.$('.nav-links');
  check('Nav-Links existieren', !!navLinks);

  if (hamburger && navLinks) {
    // Hamburger klicken – Menü öffnen
    await hamburger.click();
    await page.waitForTimeout(400);
    const isOpen = await navLinks.evaluate(el => el.classList.contains('open'));
    check('Hamburger öffnet Menü', isOpen);

    // Links prüfen
    const links = await navLinks.$$('a');
    check('Menü-Links vorhanden', links.length >= 4);

    // Menü schließen
    await hamburger.click();
    await page.waitForTimeout(400);
  }

  // ===========================================
  // 2. HERO
  // ===========================================
  console.log('\n🏠 HERO');
  const hero = await page.$('.hero');
  check('Hero-Sektion vorhanden', !!hero);
  if (hero) {
    const r = await hero.boundingBox();
    check('Hero sichtbar', r.width > 0 && r.height > 100);
  }

  const h1 = await page.$('.hero-content h1');
  check('Hero-Überschrift vorhanden', !!h1);

  const ctas = await page.$$('.hero-content .btn');
  check('Hero CTA-Buttons vorhanden', ctas.length >= 1);

  // Three.js Canvas
  const canvas = await page.$('#three-canvas');
  check('Three.js Canvas vorhanden', !!canvas);

  // ===========================================
  // 3. SERVICES
  // ===========================================
  console.log('\n🛠️ SERVICES');
  await page.evaluate(() => {
    document.getElementById('services').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const servicesSection = await page.$('#services');
  check('Services-Sektion vorhanden', !!servicesSection);

  const serviceCards = await page.$$('.service-card');
  check('Service-Karten vorhanden', serviceCards.length >= 6);

  for (const card of serviceCards) {
    const r = await card.boundingBox();
    check('Service-Karte sichtbar (width=' + Math.round(r.width) + ')', r.width > 100 && r.height > 50);
  }

  // ===========================================
  // 4. SHOWCASE (baCarousel)
  // ===========================================
  console.log('\n🖼️ SHOWCASE');
  await page.evaluate(() => {
    document.getElementById('showcase').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const baCarousel = await page.$('#baCarousel');
  check('Showcase-Karussell vorhanden', !!baCarousel);

  if (baCarousel) {
    const images = await baCarousel.$$('img');
    check('Showcase-Bilder vorhanden', images.length >= 2);
    for (const img of images) {
      const r = await img.boundingBox();
      check('Bild sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 50 && r.height > 50);
    }
  }

  const baButtons = await page.$$('#showcase .sc-nav button');
  check('Showcase-Navigationsbuttons vorhanden', baButtons.length >= 2);

  // ===========================================
  // 5. BILDBEARBEITUNG (editCarousel) – Videos
  // ===========================================
  console.log('\n✂️ BILDBEARBEITUNG (Video-Carousel)');
  await page.evaluate(() => {
    document.getElementById('davor-danach').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const editCarousel = await page.$('#editCarousel');
  check('EditCarousel vorhanden', !!editCarousel);

  if (editCarousel) {
    const editImages = await editCarousel.$$('img');
    check('Edit-Bilder vorhanden', editImages.length >= 5);
    for (const img of editImages) {
      const r = await img.boundingBox();
      check('Edit-Bild sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 50 && r.height > 50);
    }

    const editVideos = await editCarousel.$$('video');
    check('Edit-Videos vorhanden', editVideos.length >= 4);
    for (let i = 0; i < editVideos.length; i++) {
      const r = await editVideos[i].boundingBox();
      check('Edit-Video ' + i + ' sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 50 && r.height > 50);
    }
  }

  const editButtons = await page.$$('#davor-danach .sc-nav button');
  check('Edit-Navigationsbuttons vorhanden', editButtons.length >= 2);

  // Slide durchschalten
  if (editCarousel) {
    await page.evaluate(() => {
      const el = document.getElementById('editCarousel');
      el.scrollBy({ left: el.clientWidth, behavior: 'instant' });
    });
    await page.waitForTimeout(300);

    // Nach dem Slide: Videos noch sichtbar?
    const videosAfter = await editCarousel.$$('video');
    for (let i = 0; i < Math.min(videosAfter.length, 2); i++) {
      const r = await videosAfter[i].boundingBox();
      check('Edit-Video nach Scroll sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 0 && r.height > 0);
    }
  }

  // ===========================================
  // 6. PORTFOLIO – Videos
  // ===========================================
  console.log('\n📂 PORTFOLIO');
  await page.evaluate(() => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const pfCarousel = await page.$('#portfolioCarousel');
  check('Portfolio-Carousel vorhanden', !!pfCarousel);

  if (pfCarousel) {
    const pfImages = await pfCarousel.$$('img');
    check('Portfolio-Bilder vorhanden', pfImages.length >= 4);
    for (const img of pfImages) {
      const r = await img.boundingBox();
      check('Portfolio-Bild sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 50 && r.height > 50);
    }

    const pfVideos = await pfCarousel.$$('video');
    check('Portfolio-Videos vorhanden', pfVideos.length >= 4);
    for (let i = 0; i < pfVideos.length; i++) {
      const r = await pfVideos[i].boundingBox();
      check('Portfolio-Video ' + i + ' sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 50 && r.height > 50);
    }

    // Slide durchschalten
    await page.evaluate(() => {
      const el = document.getElementById('portfolioCarousel');
      el.scrollBy({ left: el.clientWidth, behavior: 'instant' });
    });
    await page.waitForTimeout(300);
  }

  const pfButtons = await page.$$('#portfolio .sc-nav button');
  check('Portfolio-Navigationsbuttons vorhanden', pfButtons.length >= 2);

  // ===========================================
  // 7. LIGHTBOX
  // ===========================================
  console.log('\n💡 LIGHTBOX');
  const lightbox = await page.$('#lightbox');
  check('Lightbox-Element vorhanden', !!lightbox);

  // Ersten Video-Button klicken (im editCarousel, nach Zurückscrollen auf Slide 0)
  if (editCarousel) {
    await page.evaluate(() => {
      const el = document.getElementById('editCarousel');
      el.scrollTo({ left: 0, behavior: 'instant' });
    });
    await page.waitForTimeout(300);

    const firstVideo = await editCarousel.$('video');
    if (firstVideo) {
      await firstVideo.click();
      await page.waitForTimeout(400);

      const lb = await page.$('#lightbox');
      if (lb) {
        const lbOpen = await lb.evaluate(el => el.classList.contains('open'));
        check('Lightbox öffnet bei Videoklick', lbOpen);

        if (lbOpen) {
          // Lightbox schließen per Escape
          await page.keyboard.press('Escape');
          await page.waitForTimeout(300);
          const lbClosed = await lb.evaluate(el => !el.classList.contains('open'));
          check('Lightbox schließt per Escape', lbClosed);
        }
      }
    }

    // Bild-Klick in Lightbox
    const firstImg = await editCarousel.$('img');
    if (firstImg) {
      await firstImg.click();
      await page.waitForTimeout(400);
      const lb = await page.$('#lightbox');
      if (lb) {
        const lbOpen = await lb.evaluate(el => el.classList.contains('open'));
        check('Lightbox öffnet bei Bildklick', lbOpen);

        if (lbOpen) {
          // Close-Button
          const closeBtn = await page.$('.lightbox-close');
          if (closeBtn) {
            await closeBtn.click();
            await page.waitForTimeout(300);
            const lbClosed = await lb.evaluate(el => !el.classList.contains('open'));
            check('Lightbox schließt per Close-Button', lbClosed);
          }
        }
      }
    }
  }

  // ===========================================
  // 8. MUSIK
  // ===========================================
  console.log('\n🎵 MUSIK');
  await page.evaluate(() => {
    document.getElementById('music').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const musicSection = await page.$('#music');
  check('Musik-Sektion vorhanden', !!musicSection);

  const genreTabs = await page.$$('.music-genre-tabs button');
  check('Genre-Tabs vorhanden', genreTabs.length >= 3);

  // Tab-Klick testen
  if (genreTabs.length >= 2) {
    await genreTabs[1].click();
    await page.waitForTimeout(200);
    const secondTrack = await page.$('#track-electronic');
    if (secondTrack) {
      const isActive = await secondTrack.evaluate(el => el.classList.contains('active'));
      check('Genre-Tab-Wechsel funktioniert', isActive);
    }
    // Zurück zum ersten Tab
    await genreTabs[0].click();
    await page.waitForTimeout(200);
  }

  // ===========================================
  // 9. PAKETE / PRICING
  // ===========================================
  console.log('\n💰 PAKETE');
  await page.evaluate(() => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const pricingSection = await page.$('#pricing');
  check('Paket-Sektion vorhanden', !!pricingSection);

  const pricingCards = await page.$$('.pricing-card');
  check('Paket-Karten vorhanden', pricingCards.length >= 3);

  for (const card of pricingCards) {
    const r = await card.boundingBox();
    check('Paket-Karte sichtbar (' + Math.round(r.width) + 'x' + Math.round(r.height) + ')', r.width > 100 && r.height > 50);
  }

  // ===========================================
  // 10. ABOUT / STATS
  // ===========================================
  console.log('\n📊 ÜBER UNS');
  await page.evaluate(() => {
    document.getElementById('about').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const aboutSection = await page.$('#about');
  check('About-Sektion vorhanden', !!aboutSection);

  const aboutTitle = await aboutSection.$('.section-title');
  check('About-Überschrift vorhanden', !!aboutTitle);

  // Stats sind inline-<div>s im Flex-Container .reveal > div
  const statItems = await aboutSection.$$('.reveal > div > div');
  check('Statistiken vorhanden (mind. 3)', statItems.length >= 3);

  // ===========================================
  // 11. KONTAKT
  // ===========================================
  console.log('\n📞 KONTAKT');
  await page.evaluate(() => {
    document.getElementById('kontakt').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const contactSection = await page.$('#kontakt');
  check('Kontakt-Sektion vorhanden', !!contactSection);

  // WhatsApp-Button
  const whatsapp = await page.$('.whatsapp-float');
  check('WhatsApp-Button vorhanden', !!whatsapp);

  if (whatsapp) {
    const wr = await whatsapp.boundingBox();
    check('WhatsApp-Button sichtbar', wr.width > 20 && wr.height > 20);
  }

  // ===========================================
  // 12. FOOTER / SCROLL-REVEAL
  // ===========================================
  console.log('\n🔻 FOOTER & VERHALTEN');
  // Zum Footer scrollen
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  });
  await page.waitForTimeout(600);

  const footer = await page.$('footer');
  check('Footer vorhanden', !!footer);

  if (footer) {
    const fr = await footer.boundingBox();
    check('Footer sichtbar', fr.width > 0 && fr.height > 20);
  }

  const year = await page.$('#year');
  if (year) {
    const yearText = await year.textContent();
    check('Footer-Jahr aktuell (' + yearText + ')', yearText === '2026');
  }

  // ===========================================
  // 13. SCROLL-VERHALTEN: reveal-Animationen
  // ===========================================
  console.log('\n🎬 SCROLL-REVEAL');
  // Ganze Seite runterscrollen und wieder rauf, dann prüfen ob reveal visible sind
  await page.evaluate(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(200);

  // Nach unten scrollen
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  });
  await page.waitForTimeout(800);

  const visibleReveals = await page.evaluate(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    let visible = 0;
    reveals.forEach(r => {
      if (r.classList.contains('visible')) visible++;
    });
    return visible + '/' + reveals.length;
  });
  console.log('  ℹ️  Reveal-Animationen: ' + visibleReveals + ' sichtbar');

  // ===========================================
  // 14. AUTOPLAY-ROTATION (nicht blockiert)
  // ===========================================
  console.log('\n⏯️ AUTOPLAY');
  const carouselState = await page.evaluate(() => {
    if (typeof _carousels === 'undefined') return 'undefined';
    const keys = Object.keys(_carousels);
    return keys.map(k => k + ': running=' + _carousels[k].running).join(', ');
  });
  check('Autoplay-Instanzen vorhanden (' + carouselState + ')', carouselState !== 'undefined' && carouselState.length > 10);

  // ===========================================
  // SUMMARY
  // ===========================================
  console.log('\n' + '='.repeat(45));
  console.log('📊 TEST-ERGEBNIS');
  console.log('='.repeat(45));
  console.log('  ✅ Bestanden: ' + tests.pass);
  console.log('  ❌ Fehlgeschlagen: ' + tests.fail);
  console.log('  ℹ️  Warnungen: ' + tests.warnings.length);

  if (tests.warnings.length > 0) {
    console.log('\n  Warnungen:');
    tests.warnings.forEach(w => console.log('    ⚠️ ' + w));
  }

  const summaryLabel = tests.fail === 0 ? '✅ ALLE TESTS BESTANDEN' : '❌ ' + tests.fail + ' TEST(S) FEHLGESCHLAGEN';
  console.log('\n' + summaryLabel);

  await browser.close();
  process.exit(tests.fail > 0 ? 1 : 0);
})();
