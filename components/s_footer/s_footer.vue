<template>
  <footer class="s-footer__wrap">
    <div class="l-wide">
      <s-footer
        socialsTitle="Мы в соцсетях"
        applicationsTitle="Приёмная комиссия в твоем телефоне"
        :linkLogo="logoURL"
        :socials="socials"
        :applications="applications"
        :terms="terms"
        :policy="policy"
      >
        <template v-slot:nav>
          <MenuHorizontal />
        </template>
      </s-footer>
    </div>
  </footer>
</template>

<script>
import MenuHorizontal from '@/components/menu_horizontal/menu_horizontal';
import SFooter from '@/components/_ui/S-Footer/S-footer';
import './s_footer.scss';

export default {
  name: 'Footer',
  components: {
    SFooter,
    MenuHorizontal,
  },
  data() {
    return {
      socials: [],
      logoURL: '',
      policy: {
        href: '',
        text: '',
      },
      terms: {
        href: '',
        text: '',
      },
      applications: [
        // {
        //   href: '#',
        //   image: 'https://synergy.ru/assets/template/v5/images/apps/apple_color_ru.png',
        //   alt: 'Apple Store',
        // },
        // {
        //   href: '#',
        //   image: 'https://synergy.ru/assets/template/v5/images/apps/google_color_ru.png',
        //   alt: 'Google Play',
        // },
      ],
    };
  },

  watch: {
    $route: {
      deep: true,
      handler() {
        this.$emit('search', '');
      },
    },
  },

  created() {
    const socialsItems = this.$store.state.globalData.globalData.data.contacts.social_networks;
    this.logoURL = this.$store.state.globalData.globalData.data.main.logo;

    this.policy.href = this.$store.state.globalData.globalData.data.privacy_policy.link;
    this.policy.text = this.$store.state.globalData.globalData.data.privacy_policy.text;

    for (let i = 0; i < socialsItems.length; i += 1) {
      const item = socialsItems[i];
      const social = {
        href: item.link,
        icon: `si-social-${item.name}`,
      };
      this.socials.push(social);
    }
  },
};
</script>
