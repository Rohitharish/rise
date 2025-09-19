<template>
  <main id="p-invoice">
    <section class="hero">
      <div class="hero__bg-image-container">
        <img src="~/assets/images/invoice/hero-bg.jpg" class="hero__bg-image" />
      </div>

      <div class="hero__content container">
        <div class="hero__top">
          <h1 class="hero__title">
            <span>Rise</span>
            <span class="font-pp-editorial italic">Proposal</span>
          </h1>

          <p class="hero__paragraph">
            Rise is designed to make compliance simple, transparent, and
            stress-free. We’ll guide you through each step, ensuring your
            organisation is registered always ready for audits and focused on
            delivering quality care.
          </p>
        </div>

        <div class="client-card">
          <div class="client-card__header">
            <h2 class="client-card__title">{{ pageData.clientName }}</h2>
            <svg class="client-card__icon">
              <use href="/svgs/sprite.svg#rise-star" />
            </svg>
          </div>

          <div class="details">
            <div
              v-for="(detail, index) in pageData.clientDetails"
              :key="index"
              class="detail"
            >
              <div class="detail__title">{{ detail.title }}</div>
              <div class="detail__value">{{ detail.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="summary" id="summary">
      <div class="container summary__inner">
        <div class="summary__left">
          <h2 class="summary__title">
            NDIS Registration <br />
            Proposal <span class="font-pp-editorial italic">summary</span>
          </h2>

          <svg class="summary__icon">
            <use href="/svgs/sprite.svg#rise-star" />
          </svg>

          <p class="summary__paragraph">
            This proposal outlines how Rise Health and Austral Care can partner
            to give new NDIS providers a faster, smoother path to registration
            and compliance. Using the Rise platform alongside add-on services
            —branding, website design, trademarking, and audit support—we can
            deliver everything a provider needs to launch and stay audit-ready.
            Services can be offered individually or bundled to suit each client,
            creating upsell opportunities and new revenue streams for Austral
            Care.
          </p>
        </div>

        <div class="summary__video">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1116734790?h=73700345c1"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <InvoicePageDivider />

    <section class="benefits" id="benefits">
      <div class="container benefits__inner">
        <h2 class="benefits__title">
          <span>Rise</span>
          <svg class="benefits__title-icon">
            <use href="/svgs/sprite.svg#rise-star" />
          </svg>
          <span class="font-pp-editorial italic">benefits</span>
        </h2>

        <div class="benefits__grid">
          <div
            v-for="(benefit, index) in pageData.benefitsList"
            :key="index"
            class="benefit"
          >
            <svg class="benefit__icon">
              <use href="/svgs/sprite.svg#rise-star" />
            </svg>

            <div class="benefit__header">
              <span class="benefit__number">{{ index + 1 }}</span>
              <h3 class="benefit__title">{{ benefit.title }}</h3>
            </div>

            <div class="benefit__image-container">
              <img
                v-if="index === 0"
                src="~/assets/images/invoice/benefit-img-1.svg"
                alt="Benefit image"
              />
              <img
                v-else-if="index === 1"
                src="~/assets/images/invoice/benefit-img-2.svg"
                alt="Benefit image"
              />

              <img
                v-else-if="index === 2"
                src="~/assets/images/invoice/benefit-img-3.svg"
                alt="Benefit image"
              />
            </div>

            <p class="benefit__description">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <InvoicePageDivider />

    <section class="quote" id="quote">
      <div class="container quote__inner">
        <div class="quote__left">
          <h2 class="quote__title">
            Package and <span class="font-pp-editorial italic">Quote</span>
          </h2>

          <!-- Would be revisited later -->
          <!-- <ul class="map">
            <li class="map__item">
              <NuxtLink to="/" class="map__link">
                <svg class="map__icon">
                  <use href="/svgs/sprite.svg#rise-star" />
                </svg>
                <span>Overview</span>
              </NuxtLink>
            </li>
            <li class="map__item">
              <NuxtLink to="#" class="map__link">
                <svg class="map__icon">
                  <use href="/svgs/sprite.svg#rise-star" />
                </svg>
                <span>Policy and Procedure Subscription</span>
              </NuxtLink>
            </li>
          </ul> -->
        </div>

        <div class="quote__right">
          <!-- <div class="quote-card">
            <div class="quote-card__header">
              <svg class="quote-card__header-icon">
                <use href="/svgs/sprite.svg#file" />
              </svg>
              <h3 class="quote-card__title">Overview</h3>
            </div>

            <div class="quote-card__div quote-card__summary">
              <div class="quote-summary">
                <h4 class="quote-summary__title">Prepared for</h4>
                <p class="quote-summary__value">{ Client name }</p>
              </div>

              <div class="quote-summary">
                <h4 class="quote-summary__title">Date</h4>
                <p class="quote-summary__value">8 Aug, 2025</p>
              </div>

              <div class="quote-summary">
                <h4 class="quote-summary__title">Total Package Price</h4>
                <p class="quote-summary__value">AU$25,000</p>
              </div>
            </div>

            <div class="quote-card__div">
              <h4 class="quote-card__small-title">
                This proposal outlines a flexible, end-to-end solution to
                support new or scaling providers with:
              </h4>

              <ul class="quote-card-list">
                <li class="quote-card-list__item">
                  <svg class="quote-card-list__indicator">
                    <use href="/svgs/sprite.svg#check-round" />
                  </svg>
                  <span>NDIS registration and compliance</span>
                </li>
                <li class="quote-card-list__item">
                  <svg class="quote-card-list__indicator">
                    <use href="/svgs/sprite.svg#check-round" />
                  </svg>
                  <span>NDIS registration and compliance</span>
                </li>
              </ul>
            </div>

            <div class="quote-card-note quote-card-note--with-border">
              <p class="quote-card-note__paragraph">
                <span class="bold">Note:</span> This quote represents a first
                draft — a starting point we can work through together based on
                your needs, stage, and budget. Each component can be offered
                individually or as a staged rollout.
              </p>
            </div>
          </div> -->

          <div class="quote-heading">
            <h3 class="quote-heading__title">Service Components</h3>
            <!-- Will visit later -->
            <!-- <img
              src="~/assets/images/invoice/quote-heading-divider.svg"
              alt="Page divider"
              class="quote-heading__img"
            /> -->
          </div>

          <div class="quote-card">
            <div class="quote-card__header">
              <h3 class="quote-card__title">1.</h3>
              <h3 class="quote-card__title">
                Rise Policy & Procedure Subscription
              </h3>
            </div>

            <div class="quote-card__div">
              <h4 class="quote-card__small-title">
                A complete, audit-ready suite of policies aligned with NDIS
                Practice Standards.
              </h4>
            </div>

            <div class="quote-card__div">
              <div class="quote-card-offer">
                <div class="quote-card-offer__left">
                  <h5 class="quote-card-offer__includes">Includes:</h5>
                  <ul class="quote-card-list">
                    <li
                      v-for="item in [
                        'Full policy and procedure pack',
                        'Ongoing regulatory updates',
                        'Version control and audit trail',
                      ]"
                      class="quote-card-list__item"
                    >
                      <svg class="quote-card-list__indicator">
                        <use href="/svgs/sprite.svg#check-round" />
                      </svg>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div class="quote-price-card">
                  <div class="quote-price-card__header">
                    <h5 class="quote-price-card__title">Annual Subscription</h5>
                    <svg class="quote-price-card__icon">
                      <use href="/svgs/sprite.svg#rise-star" />
                    </svg>
                  </div>

                  <div class="quote-price-card__footer">
                    <p class="quote-price-card__price">$3,500</p>
                    <p class="quote-price-card__duration">
                      / per year R.R.P $4,990
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quote-card">
            <div class="quote-card__header">
              <h3 class="quote-card__title">2.</h3>
              <h3 class="quote-card__title">
                Initial Audit / Registration Support
              </h3>
            </div>

            <div class="quote-card-note quote-card-note--with-border">
              <p class="quote-card-note__paragraph">
                <span class="bold">Note:</span> The official audit is not
                included in this package. Rise can refer you to a registered
                auditor and support you through the process.
              </p>
            </div>

            <div class="quote-card__div">
              <div class="quote-card-offer">
                <div class="quote-card-offer__left">
                  <h5 class="quote-card-offer__includes">
                    Optional Add-on Support:
                  </h5>
                  <ul class="quote-card-list">
                    <li
                      v-for="item in [
                        'Gap analysis + action plan',
                        'Mock audit preparation',
                        'Policy and document review',
                      ]"
                      class="quote-card-list__item"
                    >
                      <svg class="quote-card-list__indicator">
                        <use href="/svgs/sprite.svg#check-round" />
                      </svg>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div class="quote-price-card">
                  <div class="quote-price-card__header">
                    <h5 class="quote-price-card__title">One-time fee</h5>
                    <svg class="quote-price-card__icon">
                      <use href="/svgs/sprite.svg#rise-star" />
                    </svg>
                  </div>

                  <div class="quote-price-card__footer">
                    <p class="quote-price-card__price">$600</p>
                    <p class="quote-price-card__duration">
                      / One time fee, R.R.P $990
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quote-heading">
            <h3 class="quote-heading__title">Payment terms</h3>
          </div>

          <div class="quote-card">
            <div class="quote-card__header">
              <span class="quote-card__title"> $ </span>
              <h3 class="quote-card__title">Payment terms</h3>
            </div>

            <!-- <div class="quote-card__div">
              <h4 class="quote-card__small-title">
                50% deposit required to commence
              </h4>
            </div> -->

            <div class="quote-card__div quote-card__summary">
              <div class="quote-summary">
                <h4 class="quote-summary__title">Final Payment</h4>
                <p class="quote-summary__value">AU$4,100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <InvoicePageDivider />

    <section class="letter" id="letter">
      <div class="container letter__inner">
        <h2 class="letter__title">
          A letter from our
          <span class="font-pp-editorial italic">founders</span>
        </h2>

        <div class="letter__bottom">
          <img
            src="~/assets/images/invoice/letter-preview.svg"
            alt="Founder's letter preview"
            class="letter__bottom-image"
          />

          <button @click="showLetter = true" class="letter__bottom-button">
            Read the letter
          </button>
        </div>
      </div>
    </section>

    <InvoicePageDivider />

    <section class="next-steps">
      <div class="container next-steps__inner">
        <h2 class="next-steps__title">
          <span>Next</span>
          <svg class="next-steps__title-icon">
            <use href="/svgs/sprite.svg#rise-star" />
          </svg>
          <span class="font-pp-editorial italic">steps</span>
        </h2>

        <p class="next-steps__description">
          Let us know which parts of this package are most relevant to you or
          your client. We can adjust the scope, offer staged delivery, or create
          a tailored bundle based on what's needed now — and what can wait.
        </p>

        <div class="next-steps__buttons">
          <a
            ref="nextStepsBtns"
            href="https://buy.stripe.com/3cIaEXfm3gaB7N6gIb3gk00"
            target="_blank"
            class="next-step-btn"
          >
            Accept Proposal
          </a>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <LetterModal v-model="showLetter" />
  </main>
</template>

<script lang="ts" setup>
import { InvoicePageDivider } from "#components";

definePageMeta({
  layout: "invoice",
});

useHead({
  title: "Rise x Austral Care",
  link: [
    {
      rel: "stylesheet",
      href: "https://calendar.google.com/calendar/scheduling-button-script.css",
    },
  ],

  script: [
    {
      type: "text/javascript",
      src: "https://calendar.google.com/calendar/scheduling-button-script.js",
    },
  ],
});

const nextStepsBtns = ref(null);

onMounted(() => {
  var target = nextStepsBtns.value;

  // Initialise google calendar
  window.addEventListener("load", function () {
    calendar?.schedulingButton.load({
      url: "https://calendar.google.com/calendar/appointments/AcZssZ1AhdldM9gnxEbMD6ai7N2XBPNfLGOer0yNo_o=?gv=true",
      color: "#F09300",
      label: "Schedule Discussion",
      target,
    });
  });
});

const pageData = {
  clientName: "Austral Care Partnership",
  clientDetails: [
    {
      title: "Company",
      value: "Austral Care",
    },
    {
      title: "Website",
      value: "www.australcare.com",
    },
    {
      title: "Email",
      value: "admin@australcare.com",
    },
    {
      title: "Date",
      value: "10 September, 2025",
    },
  ],

  benefitsList: [
    {
      title: "Register With Confidence",
      description:
        "We guide you through PRODA onboarding and NDIS registration with clear, ready-to-use policies and procedures — so you’re set up the right way from day one.",
    },
    {
      title: "Stay Audit Ready Always",
      description:
        "Our platform keeps your documents, processes, and compliance requirements up to date in real time, ensuring you’re always prepared for audits without the stress.",
    },
    {
      title: "Operating System for Care",
      description:
        "Once you’re registered, Rise powers your day-to-day with smart data collection, reporting, digital workflows, and continuous compliance — a full operating system built for care.",
    },
  ],
};

const showLetter = ref(false);
</script>
