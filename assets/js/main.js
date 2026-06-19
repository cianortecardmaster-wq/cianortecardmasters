const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

// CCM Accordion / expandable panels
// Reutilizável em guias, FAQ, classes, deck techs e blocos rápidos.
(function () {
  function setPanelState(item, open) {
    const trigger = item.querySelector('.ccm-accordion__trigger');
    const content = item.querySelector('.ccm-accordion__content');

    item.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (content) {
      content.style.maxHeight = open ? content.scrollHeight + 'px' : '0px';
    }
  }

  function closeSiblings(accordion, currentItem) {
    if (accordion.hasAttribute('data-accordion-multiple')) return;

    accordion.querySelectorAll('.ccm-accordion__item.is-open').forEach((item) => {
      if (item !== currentItem) {
        setPanelState(item, false);
      }
    });
  }

  function openItemFromHash(hash) {
    if (!hash || hash.length < 2) return;

    const target = document.querySelector(hash);
    if (!target || !target.classList.contains('ccm-accordion__item')) return;

    const accordion = target.closest('[data-accordion]');
    if (!accordion) return;

    closeSiblings(accordion, target);
    setPanelState(target, true);
  }

  function initAccordion(accordion) {
    const items = accordion.querySelectorAll('.ccm-accordion__item');

    items.forEach((item) => {
      const trigger = item.querySelector('.ccm-accordion__trigger');
      const content = item.querySelector('.ccm-accordion__content');
      if (!trigger || !content) return;

      setPanelState(item, item.classList.contains('is-open'));

      trigger.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        closeSiblings(accordion, item);
        setPanelState(item, willOpen);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('[data-accordion]');

    accordions.forEach(initAccordion);
    openItemFromHash(window.location.hash);

    window.addEventListener('hashchange', () => {
      openItemFromHash(window.location.hash);
    });

    window.addEventListener('resize', () => {
      document.querySelectorAll('.ccm-accordion__item.is-open .ccm-accordion__content').forEach((content) => {
        content.style.maxHeight = content.scrollHeight + 'px';
      });
    });
  });
})();

// Atividades: filtros automáticos por tipo e jogo.
(function () {
  function normalizeSlug(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function titleSort(a, b) {
    return a.label.localeCompare(b.label, 'pt-BR', { sensitivity: 'base' });
  }

  function setActive(filters, activeValue) {
    filters.forEach((filter) => {
      const isActive = (filter.dataset.activityFilter || 'all') === activeValue;
      filter.classList.toggle('is-active', isActive);
      if (isActive) {
        filter.setAttribute('aria-current', 'true');
      } else {
        filter.removeAttribute('aria-current');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('[data-activity-card]'));
    const typeGroup = document.querySelector('[data-activity-filter-group="type"]');
    const gameGroup = document.querySelector('[data-activity-filter-group="game"]');
    const emptyState = document.querySelector('[data-activity-empty]');
    const countTarget = document.querySelector('[data-activity-count]');

    if (!typeGroup || !gameGroup) return;

    let activeType = 'all';
    let activeGame = 'all';

    function collect(kind) {
      const values = new Map();
      const valueKey = kind === 'type' ? 'activityType' : 'activityGame';
      const labelKey = kind === 'type' ? 'activityTypeLabel' : 'activityGameLabel';

      cards.forEach((card) => {
        const value = normalizeSlug(card.dataset[valueKey]);
        const label = card.dataset[labelKey] || card.dataset[valueKey] || value;
        if (value) values.set(value, label);
      });

      return Array.from(values, ([value, label]) => ({ value, label })).sort(titleSort);
    }

    function chipClass(kind, value) {
      if (kind === 'type') return 'post-style-activities';
      if (value === 'pokemon-tcg') return 'post-style-pokemon';
      if (value === 'cianorte-card-masters') return 'post-style-cianorte-card-master';
      if (value === 'one-piece-tcg') return 'post-style-tcg';
      return 'post-style-' + value;
    }

    function buildFilters(group, kind) {
      const allChip = group.querySelector('[data-activity-filter="all"]');
      group.querySelectorAll('[data-activity-filter]:not([data-activity-filter="all"])').forEach((chip) => chip.remove());

      collect(kind).forEach((item) => {
        const chip = document.createElement('a');
        chip.className = 'section-chip ' + chipClass(kind, item.value);
        chip.href = '#' + item.value;
        chip.dataset.activityFilter = item.value;
        chip.textContent = item.label;
        group.appendChild(chip);
      });

      if (allChip) allChip.classList.add('is-active');
    }

    function filteredCards() {
      return cards.filter((card) => {
        const type = normalizeSlug(card.dataset.activityType);
        const game = normalizeSlug(card.dataset.activityGame);
        const typeOk = activeType === 'all' || type === activeType;
        const gameOk = activeGame === 'all' || game === activeGame;
        return typeOk && gameOk;
      });
    }

    function render() {
      const matches = filteredCards();
      cards.forEach((card) => { card.hidden = !matches.includes(card); });

      setActive(Array.from(typeGroup.querySelectorAll('[data-activity-filter]')), activeType);
      setActive(Array.from(gameGroup.querySelectorAll('[data-activity-filter]')), activeGame);

      if (countTarget) countTarget.textContent = String(matches.length);

      if (emptyState) {
        emptyState.hidden = matches.length > 0;
        if (!cards.length) {
          emptyState.innerHTML = 'Nenhuma atividade publicada ainda. Crie um arquivo <code>.md</code> dentro de <code>_atividades/</code>, marque <code>published: true</code> e ela aparecerá aqui com filtros automáticos.';
        } else if (!matches.length) {
          emptyState.textContent = 'Nenhuma atividade encontrada com esses filtros. Tente mudar o tipo de atividade ou o jogo.';
        }
      }
    }

    function applyHash() {
      const hash = normalizeSlug(window.location.hash.replace('#', ''));
      if (!hash) return;

      const typeValues = collect('type').map((item) => item.value);
      const gameValues = collect('game').map((item) => item.value);

      if (typeValues.includes(hash)) activeType = hash;
      if (gameValues.includes(hash)) activeGame = hash;
    }

    buildFilters(typeGroup, 'type');
    buildFilters(gameGroup, 'game');
    applyHash();
    render();

    [typeGroup, gameGroup].forEach((group) => {
      group.addEventListener('click', (event) => {
        const filter = event.target.closest('[data-activity-filter]');
        if (!filter) return;
        event.preventDefault();

        const value = filter.dataset.activityFilter || 'all';
        if (group === typeGroup) activeType = value;
        if (group === gameGroup) activeGame = value;

        render();
      });
    });
  });
})();


// Posts de fotos da comunidade: transforma a galeria em carrossel grande, com arraste e botões.
(function () {
  function initCommunityPhotoCarousels() {
    document.querySelectorAll('.post-style-fotos .gallery-grid').forEach((track, index) => {
      if (track.dataset.photoCarouselReady === 'true') return;

      const items = Array.from(track.children).filter((item) => item.matches('.gallery-item'));
      if (!items.length) return;

      track.dataset.photoCarouselReady = 'true';
      track.classList.add('photo-carousel-track');
      track.setAttribute('tabindex', '0');
      track.setAttribute('aria-label', track.getAttribute('aria-label') || 'Galeria de fotos da comunidade');

      if (items.length < 2) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'photo-carousel-wrap';
      track.parentNode.insertBefore(wrapper, track);
      wrapper.appendChild(track);

      const nav = document.createElement('div');
      nav.className = 'photo-carousel-nav';

      const hint = document.createElement('p');
      hint.className = 'photo-carousel-hint';
      hint.textContent = 'Arraste a foto para o lado ou use as setas para ver mais.';

      const actions = document.createElement('div');
      actions.className = 'photo-carousel-actions';

      const prev = document.createElement('button');
      prev.className = 'photo-carousel-btn';
      prev.type = 'button';
      prev.innerHTML = '‹';
      prev.setAttribute('aria-label', 'Foto anterior');

      const counter = document.createElement('span');
      counter.className = 'photo-carousel-counter';
      counter.setAttribute('aria-live', 'polite');

      const next = document.createElement('button');
      next.className = 'photo-carousel-btn';
      next.type = 'button';
      next.innerHTML = '›';
      next.setAttribute('aria-label', 'Próxima foto');

      actions.append(prev, counter, next);
      nav.append(hint, actions);
      wrapper.appendChild(nav);

      function currentIndex() {
        const positions = items.map((item) => Math.abs(item.offsetLeft - track.scrollLeft));
        return positions.indexOf(Math.min(...positions));
      }

      function updateCounter() {
        counter.textContent = `${currentIndex() + 1}/${items.length}`;
      }

      function goTo(delta) {
        const targetIndex = Math.max(0, Math.min(items.length - 1, currentIndex() + delta));
        track.scrollTo({ left: items[targetIndex].offsetLeft, behavior: 'smooth' });
      }

      prev.addEventListener('click', () => goTo(-1));
      next.addEventListener('click', () => goTo(1));

      track.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          goTo(-1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          goTo(1);
        }
      });

      let scrollTicking = false;
      track.addEventListener('scroll', () => {
        if (scrollTicking) return;
        scrollTicking = true;
        window.requestAnimationFrame(() => {
          updateCounter();
          scrollTicking = false;
        });
      }, { passive: true });

      let dragging = false;
      let startX = 0;
      let startLeft = 0;
      let pointerId = null;

      track.addEventListener('pointerdown', (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        dragging = true;
        pointerId = event.pointerId;
        startX = event.clientX;
        startLeft = track.scrollLeft;
        track.classList.add('is-dragging');
        track.setPointerCapture(pointerId);
      });

      track.addEventListener('pointermove', (event) => {
        if (!dragging) return;
        event.preventDefault();
        track.scrollLeft = startLeft - (event.clientX - startX);
      });

      function stopDragging() {
        if (!dragging) return;
        dragging = false;
        track.classList.remove('is-dragging');
        if (pointerId !== null && track.hasPointerCapture(pointerId)) {
          track.releasePointerCapture(pointerId);
        }
        pointerId = null;
      }

      track.addEventListener('pointerup', stopDragging);
      track.addEventListener('pointercancel', stopDragging);
      track.addEventListener('pointerleave', stopDragging);

      updateCounter();
      window.addEventListener('resize', updateCounter);
    });
  }

  document.addEventListener('DOMContentLoaded', initCommunityPhotoCarousels);
})();
