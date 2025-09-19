<template>
  <header class="invoice-header">
    <nav class="invoice-nav">
      <div class="container invoice-nav__inner">
        <NuxtLink to="#" class="invoice-nav__brand">
          <img src="~/assets/images/rise-logo-brown.svg" alt="Rise logo" />
        </NuxtLink>

        <ul class="invoice-nav__list">
          <li class="invoice-nav__list-item">
            <NuxtLink to="#summary" class="invoice-nav__link">
              Summary
            </NuxtLink>
          </li>
          <li class="invoice-nav__list-item">
            <NuxtLink to="#benefits" class="invoice-nav__link">
              Benefits
            </NuxtLink>
          </li>
          <li class="invoice-nav__list-item">
            <NuxtLink to="#quote" class="invoice-nav__link"> Quote </NuxtLink>
          </li>
          <li class="invoice-nav__list-item">
            <NuxtLink to="#letter" class="invoice-nav__link"> Letter </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <slot />
  <footer class="invoice-footer">
    <div class="container invoice-footer__inner">
      <a href="mailto:giselle@riseos.care" class="invoice-footer__link">
        <svg class="invoice-footer__link-icon">
          <use href="/svgs/sprite.svg#envelope" />
        </svg>
        <span class="invoice-footer__link-text">giselle@riseos.care</span>
      </a>

      <a href="tel:+6135193524" class="invoice-footer__link">
        <svg class="invoice-footer__link-icon">
          <use href="/svgs/sprite.svg#phone" />
        </svg>
        <span class="invoice-footer__link-text">+61 3519 3524</span>
      </a>
    </div>
  </footer>
</template>
