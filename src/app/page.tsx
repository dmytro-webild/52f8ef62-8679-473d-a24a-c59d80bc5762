"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Facebook, Instagram, MessageSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Главная",          id: "#hero"},
        {
          name: "Услуги",          id: "#services"},
        {
          name: "Галерея",          id: "#gallery"},
        {
          name: "Цены",          id: "#pricing"},
        {
          name: "Команда",          id: "#team"},
        {
          name: "Отзывы",          id: "#testimonials"},
        {
          name: "Контакты",          id: "#contact"},
      ]}
      brandName="Красивая гора"
      button={{
        text: "Записаться",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="Красота начинается с кончиков пальцев"
      description="Маникюрный салон \"Красивая гора\" предлагает безупречный уход за вашими руками и ногами. Насладитесь расслабляющей атмосферой и получите идеальный маникюр, который подчеркнет вашу индивидуальность."
      tagAnimation="none"
      buttons={[
        {
          text: "Посмотреть услуги",          href: "#services"},
        {
          text: "Записаться онлайн",          href: "#contact"},
      ]}
      buttonAnimation="none"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pink-orchids-vase-windowsill-with-white-chairs_181624-10971.jpg",          imageAlt: "Роскошный интерьер маникюрного салона"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-relaxing-foot-massage-treatment-spa-salon_181624-51104.jpg",          imageAlt: "Расслабляющий педикюр в спа-салоне"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-doing-manicure-by-herself-close-up_127675-2663.jpg",          imageAlt: "Блестящие гелевые ногти крупным планом"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bottle-brush-near-spilled-nail-polish_23-2147710610.jpg",          imageAlt: "Мастер наносит гель-лак клиенту"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/rose-book-makeup-arrangement-high-angle_23-2149362956.jpg",          imageAlt: "Коллекция разноцветных лаков для ногтей"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fun-portrait-with-decorations-face_23-2150749312.jpg",          imageAlt: "Изысканный дизайн ногтей с цветочным узором"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="О салоне Красивая гора"
      description={[
        "В салоне \"Красивая гора\" мы верим, что уход за собой — это не просто процедура, а настоящее искусство. Наша миссия — подарить вам не только красивые ногти, но и моменты полного расслабления и удовольствия.",        "Мы используем только высококачественные материалы и стерильные инструменты, гарантируя безопасность и долговечность каждого маникюра и педикюра. Наши мастера — это опытные профессионалы, которые постоянно совершенствуют свои навыки и следуют последним тенденциям в мире нейл-арта."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Классический Маникюр",          description: "Полный уход за ногтями и кутикулой, придание формы, покрытие лаком. Идеально для поддержания естественной красоты.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-applying-natural-scrub-hands-against-white-surface-spa-treatment-product-female-hand-spa-massage-perfumed-flowers-water-candles-relaxation-flat-lay-top-view_1150-44955.jpg",          imageAlt: "Классический маникюр"},
        {
          title: "Педикюр СПА",          description: "Расслабляющий педикюр с ванночками, скрабами, массажем и покрытием. Позвольте вашим ногам отдохнуть и сиять.",          imageSrc: "http://img.b2bpic.net/free-photo/heel-sole-massage-with-warm-oil-daily-care_169016-69413.jpg",          imageAlt: "Педикюр СПА"},
        {
          title: "Наращивание гелем",          description: "Укрепление и удлинение ногтей с помощью геля. Создание идеальной формы и стойкого покрытия, которое держится недели.",          imageSrc: "http://img.b2bpic.net/free-photo/nail-polish-bottle_23-2148111261.jpg",          imageAlt: "Наращивание гелем"},
      ]}
      title="Наши услуги"
      description="От классического ухода до эксклюзивного дизайна — мы предлагаем полный спектр услуг для ваших рук и ног."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "g1",          name: "Элегантный Свадебный",          price: "От 1500 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/woman-wedding-dress_8353-9862.jpg",          imageAlt: "Элегантный свадебный нейл-арт"},
        {
          id: "g2",          name: "Яркий Красный",          price: "От 1200 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-glamorous-red-lip-gloss_23-2149681553.jpg",          imageAlt: "Яркий красный гель-лак"},
        {
          id: "g3",          name: "Нежный Нюд",          price: "От 1000 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/beauty-portrait-young-adult_23-2149390899.jpg",          imageAlt: "Нежный нюдовый маникюр"},
        {
          id: "g4",          name: "Блестящий Градиент",          price: "От 1400 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-glitter-with-copy-space-flat-lay_23-2148346537.jpg",          imageAlt: "Блестящий градиентный дизайн"},
        {
          id: "g5",          name: "Стильный Черный Матовый",          price: "От 1300 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-pinup-girl-wearing-retro-vintage-oldfashioned-dress-peas-retro-styling-background-colored-wall-surprised-face-concept_627829-12107.jpg",          imageAlt: "Стильный черный матовый маникюр"},
        {
          id: "g6",          name: "Изысканные Цветы",          price: "От 1600 ₽",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-view-woman-with-beautiful-hands-color-background-space-text_169016-6422.jpg",          imageAlt: "Изысканный цветочный нейл-арт"},
      ]}
      title="Галерея наших работ"
      description="Вдохновитесь нашими последними творениями и найдите свой идеальный стиль."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic-manicure",          name: "Маникюр \"Базовый\"",          price: "1000 ₽",          buttons: [
            {
              text: "Записаться"}
          ],
          features: [
            "Обработка кутикулы",            "Придание формы ногтям",            "Массаж рук",            "Покрытие обычным лаком"]
        },
        {
          id: "gel-manicure",          name: "Маникюр \"Гель-лак\"",          price: "1500 ₽",          buttons: [
            {
              text: "Записаться"}
          ],
          features: [
            "Обработка кутикулы",            "Придание формы ногтям",            "Покрытие гель-лаком",            "Легкий дизайн 2х ногтей"]
        },
        {
          id: "spa-pedicure",          name: "Педикюр \"СПА\"",          price: "2000 ₽",          buttons: [
            {
              text: "Записаться"}
          ],
          features: [
            "СПА-ванночка для ног",            "Обработка стоп и ногтей",            "Пилинг и маска",            "Покрытие гель-лаком"]
        }
      ]}
      title="Прайс-лист"
      description="Выберите свой идеальный уход. Наши цены приятно удивят, а качество оставит довольными."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",          name: "Анна Смирнова",          role: "Ведущий мастер маникюра",          imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-slavic-female-barber-wearing-uniform-holding-scissors-shaving-brush-isolated-purple-background_141793-89890.jpg",          imageAlt: "Портрет Анны Смирновой"},
        {
          id: "t2",          name: "Игорь Петров",          role: "Мастер педикюра и нейл-арта",          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-navy-t-shirt-using-smartphone-playing-games-looking-annoyed-excited-standing-pink-wall_141793-81965.jpg",          imageAlt: "Портрет Игоря Петрова"},
        {
          id: "t3",          name: "Елена Соколова",          role: "Администратор",          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-successful-businesswoman-smiling-speaking-phone-office_176420-968.jpg",          imageAlt: "Портрет Елены Соколовой"}
      ]}
      title="Наша Команда"
      description="Познакомьтесь с талантливыми мастерами, которые воплощают ваши мечты о красивых ногтях."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="\"Лучший салон в городе! Всегда выхожу с идеальным маникюром и прекрасным настроением. Мастера настоящие профессионалы своего дела, а атмосфера просто волшебная.\""
      rating={5}
      author="Марина Иванова"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-girl-outside-sitting-smiling-daytime_176474-6783.jpg",          alt: "Аватар Марины Ивановой"},
        {
          src: "http://img.b2bpic.net/free-photo/feedback-comment-survey-support-response-bar-word_53876-127367.jpg",          alt: "Аватар Дмитрия Сергеева"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-holding-each-other-s-hand_23-2147891266.jpg",          alt: "Аватар Ольги Козловой"},
        {
          src: "http://img.b2bpic.net/free-photo/beauty-vlogger-adjusting-camera_23-2148916346.jpg",          alt: "Аватар Екатерины Новиковой"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-looking-smiling-grey-t-shirt-front-view_176474-16115.jpg",          alt: "Аватар Алексея Морозова"}
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "Как записаться на процедуру?",          content: "Вы можете записаться на процедуру по телефону, через наш сайт в разделе 'Контакты' или в мессенджерах (WhatsApp, Telegram)."},
        {
          id: "faq2",          title: "Какие меры гигиены вы соблюдаете?",          content: "Мы строго соблюдаем все санитарные нормы. Инструменты проходят трехэтапную стерилизацию, используются одноразовые расходные материалы, рабочие поверхности дезинфицируются после каждого клиента."},
        {
          id: "faq3",          title: "Сколько держится гель-лак?",          content: "В среднем, гель-лак держится 3-4 недели, при условии правильного нанесения и соблюдения рекомендаций по уходу. Срок носки также зависит от индивидуальных особенностей ногтей."}
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-tools-nail-art_23-2150321308.jpg"
      imageAlt="Стерильные инструменты для маникюра"
      mediaAnimation="slide-up"
      title="Часто задаваемые вопросы"
      description="Найдите ответы на самые популярные вопросы о наших услугах и записи."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Готовы к идеальному маникюру? Свяжитесь с нами и запишитесь уже сегодня! Мы ждем вас в \"Красивой горе\" для создания неповторимого образа."
      buttons={[
        {
          text: "Позвонить нам",          href: "tel:+79991234567"},
        {
          text: "Написать в WhatsApp",          href: "https://wa.me/79991234567"}
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Красивая гора"
      copyrightText="© 2024 Красивая гора. Все права защищены."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"
        },
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"
        },
        {
          icon: MessageSquare,
          href: "#",          ariaLabel: "Whatsapp"
        }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
