<template>
  <BaseModal v-model="isVisible" @close="isVisible = false">
    <div class="founder-letter">
      <div class="founder-letter__header">
        <img
          src="~/assets/images/founder-letter/rise-logo.svg"
          alt="Rise health logo"
          class="founder-letter__brand-logo"
        />
      </div>

      <h2 class="letter-title">
        <div class="letter-title__flex">
          <span class="letter-title__1">Care</span>
          <span class="letter-title__2">with</span>
        </div>

        <div class="letter-title__3">Confidence</div>
      </h2>

      <img
        src="~/assets/images/founder-letter/page-divider.svg"
        alt=""
        class="founder-letter__page-divider"
      />

      <div class="founder-letter__block">
        <h3 class="founder-letter__recipient">Dear Pooja,</h3>

        <div>
          <p class="founder-letter__paragraph">
            My name is Dr. Giselle Torres Pabón, and I will be your main point
            of contact here at Rise Health. As a lead auditor in NDIS quality
            systems, I’ve seen how complicated the registration and audit
            process can be for providers — and how much time it takes away from
            focusing on participants.
          </p>

          <p class="founder-letter__paragraph">
            That’s why we built Rise. Our platform is designed to guide you
            through the entire journey of getting registered, staying compliant,
            and remaining audit-ready with less stress and greater confidence.
          </p>
        </div>
      </div>

      <div class="founder-letter__block founder-letter__block--big">
        <h4 class="founder-letter__subtitle">With Rise, you’ll be able to:</h4>

        <div class="founder-letter__ables">
          <div
            v-for="item in [
              ' Get registered faster with policies, procedures, and registers pre-aligned to the NDIS Practice Standards.',
              `Have direct support — I'll personally guide you through each step and be here to answer your questions.`,
              'Save time and reduce admin burden by managing everything in one central system.',
              'Stay audit-ready year-round with compliance tools that update in real time.',
            ]"
            class="able"
          >
            <svg class="able__icon">
              <use href="/svgs/sprite.svg#rise-star" />
            </svg>

            <p class="able__desc">{{ item }}</p>
          </div>
        </div>
      </div>

      <div class="founder-letter__block">
        <p class="founder-letter__paragraph">
          My goal is to make sure you succeed in getting registered the first
          time, and that you always feel supported in keeping your compliance on
          track.
        </p>

        <p class="founder-letter__paragraph">
          If you’d like, we can schedule a quick call or demo at a time that
          suits you. You can always reach me directly at
          <a href="mailto:giselle@riseos.care">giselle@riseos.care</a> or
          <a href="tel:+61(07)35193524"> (07)35193524</a>
          I look forward to supporting you on your registration and compliance
          journey.
        </p>
      </div>

      <div class="fl-footer">
        <div class="fl-footer__inner">
          <div class="fl-footer__founder">
            <img
              src="~/assets/images/founder-letter/giselle.jpg"
              alt=""
              class="fl-footer__founder-img"
            />

            <div>
              <p class="fl-footer__warm-regards">Warm regards</p>
              <p class="fl-footer__name">Dr. Giselle Torres Pabon</p>
              <p class="fl-footer__title">Co-Founder & Compliance Lead</p>
            </div>
          </div>

          <img
            src="~/assets/images/founder-letter/giselle_signature.png"
            alt=""
            class="fl-footer__signature"
          />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script lang="ts" setup>
const isVisible = defineModel({ default: false });

const props = defineProps({
  recipient: {
    type: String,
    default: "there",
  },
});
</script>
