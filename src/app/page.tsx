"use client";
import { useState, useEffect } from "react";
import { Compass, Drill, Ruler, Map, Layers, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const works = [
    { src: "/images/2.jpg", title: "" },
    { src: "/images/3.jpg", title: "" },
    { src: "/images/4.jpg", title: "" },
    { src: "/images/5.jpg", title: "" },
    { src: "/images/6.jpg", title: "" },
  ];

  const services = [
    { title: "Топографическая съемка", desc: "Для проектирования, ландшафта и регистрации", icon: <Map size={28} /> },
    { title: "Геодезическая основа", desc: "Вынос координат на реперы GNSS оборудованием", icon: <Compass size={28} /> },
    { title: "Сопровождение строительства", desc: "Разбивка, отметки, исполнительные схемы", icon: <Ruler size={28} /> },
    { title: "Вынос границ участка", desc: "Определение и закрепление границ", icon: <Layers size={28} /> },
    { title: "Посадка здания", desc: "Точная привязка объекта к участку", icon: <Activity size={28} /> },
    { title: "Фасадная съемка", desc: "3D/2D модели для расчета материалов", icon: <Map size={28} /> },
    { title: "Подсчет объемов", desc: "Грунт, котлованы, балласт и др.", icon: <Drill size={28} /> },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[9999] animate-header">

        <div className="max-w-6xl mx-auto px-4">

          <div className="h-[64px] flex items-center justify-between
      bg-white/70 backdrop-blur-md border border-white/30 
      shadow-sm rounded-2xl mt-2 px-4 md:px-5">

            {/* ЛОГО */}
            <a href="#hero" className="flex items-center gap-2">
              <img src="/logo.png" className="h-10 w-auto" />
            </a>

            {/* МЕНЮ (ТЕПЕРЬ ВИДНО НА МОБИЛЕ) */}
            <nav className="flex items-center gap-4 md:gap-10 text-xs md:text-sm font-medium text-gray-700">

              <a href="#hero" className="relative group">
                Главная
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00C97B] transition-all group-hover:w-full"></span>
              </a>

              <a href="#services" className="relative group">
                Услуги
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00C97B] transition-all group-hover:w-full"></span>
              </a>

              <a href="#works" className="relative group">
                Работы
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00C97B] transition-all group-hover:w-full"></span>
              </a>

            </nav>

            {/* КНОПКА (чуть меньше на мобиле) */}
            <a
              href="https://wa.me/87767390868"
              className="bg-[#00C97B] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm 
        shadow hover:scale-105 hover:shadow-lg transition"
            >
              Связаться
            </a>

          </div>

        </div>

      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* FALLBACK КАРТИНКА */}
        <img
          src="/images/page.jpg"
          className="absolute w-full h-full object-cover"
        />

        {/* ТЕМНЫЙ ОВЕРЛЕЙ (чтобы текст читался) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* КОНТЕНТ */}
        <div className="relative z-10 text-center px-5 text-white animate-hero">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight">
            Геодезические работы <br />
            <span className="text-[#00C97B]">по Казахстану</span>
          </h1>

          <p className="mb-5 max-w-md mx-auto text-white/80 text-sm sm:text-base">
            Полный цикл инженерных работ — быстро, точно и по стандартам
          </p>

          <a
            href="https://wa.me/87767390868"
            className="bg-[#00C97B] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg 
    hover:scale-105 transition text-sm sm:text-base"
          >
            Получить консультацию
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section className="px-6 py-16 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about.jpg"
            className="rounded-2xl shadow-md w-full max-w-[420px] mx-auto"
          />

          <div>

            <h2 className="text-3xl font-bold mb-4">
              О компании Гео Лидер
            </h2>

            <p className="text-gray-600 mb-4">
              ТОО «ГеоЛидер» работает более 4 лет на рынке и имеет более 7 лет опыта в геодезии.
              Выполнено более 50 объектов по Казахстану.
            </p>

            <p className="text-gray-600 mb-4">
              Выполняем полный спектр геодезических работ: от топографической съемки до
              полного сопровождения строительства.
            </p>

            <p className="text-gray-600 mb-6">
              Работаем с застройщиками, подрядчиками и частными клиентами.
              Гарантируем точность, соблюдение сроков и ответственность на каждом этапе.
            </p>

            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-[#00C97B]">4+</p>
                <p className="text-gray-500 text-sm">лет на рынке</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#00C97B]">50+</p>
                <p className="text-gray-500 text-sm">объектов</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Наши услуги</h2>

        <div className="max-w-6xl mx-auto">

          {/* ОСНОВНАЯ СЕТКА */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {services.slice(0, 6).map((s, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border bg-white hover:shadow-md transition"
              >
                <div className="mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#00C97B]/10 text-[#00C97B]">
                  {s.icon}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ОТДЕЛЬНАЯ КАРТОЧКА (АКЦЕНТ) */}
          <div className="flex justify-center">
            <div className="w-full md:w-[370px] p-5 rounded-2xl border bg-white shadow-md hover:shadow-lg transition">
              <div className="mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#00C97B]/10 text-[#00C97B] ">
                {services[6].icon}
              </div>
              <h3 className="font-semibold">{services[6].title}</h3>
              <p className="text-gray-500 text-sm">{services[6].desc}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ОБОРУДОВАНИЕ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Оборудование, с которым мы работаем
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Leica TS09",
                img: "/images/leica-ts09.jpg",
                link: "/equipment/leica-ts09",
                desc: "Тахеометр • Точность до 1\" • Дальность до 1000м"
              },
              {
                title: "Sokkia CX-106",
                img: "/images/sokkia-cx106.jpg",
                link: "/equipment/sokkia-cx106",
                desc: "Тахеометр • Точность 2\" • IP66"
              },
              {
                title: "South G7 / G1",
                img: "/images/south-g7.jpg",
                link: "/equipment/south-g7",
                desc: "GNSS • RTK до 1см • GPS / GLONASS"
              },
              {
                title: "Leica NA524",
                img: "/images/leica-na524.jpg",
                link: "/equipment/leica-na524",
                desc: "Нивелир • Высокая точность • Надежность"
              }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-500 [transform-style:preserve-3d]"
              >

                {/* КАРТИНКА */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-[260px] object-contain p-6 transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                {/* ГРАДИЕНТ СНИЗУ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* ТЕКСТ */}
                <div className="absolute bottom-0 left-0 p-5 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{item.desc}</p>
                </div>

                {/* ГЛОУ */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-[#00C97B]/40"></div>
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* STEPS + ADVANTAGES */}
      <section className="px-6 py-16">

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ЛЕВАЯ ЧАСТЬ — ШАГИ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Как мы работаем
              </h2>

              <div className="space-y-4">

                {[
                  "Заявка",
                  "Консультация",
                  "Выезд на объект",
                  "Готовый результат"
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-md transition"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00C97B] text-white font-bold">
                      {i + 1}
                    </div>

                    <p className="text-gray-700 font-medium">
                      {step}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ — ПРИЧИНЫ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Почему выбирают нас
              </h2>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="text-2xl">🛠</div>
                  <div>
                    <p className="font-semibold">Ответственность</p>
                    <p className="text-gray-500 text-sm">
                      Берем полный контроль за выполнение работ
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">⏱</div>
                  <div>
                    <p className="font-semibold">Пунктуальность</p>
                    <p className="text-gray-500 text-sm">
                      Соблюдаем сроки без задержек
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <p className="font-semibold">Качество</p>
                    <p className="text-gray-500 text-sm">
                      Работаем точно по стандартам
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* WORKS */}
      <section id="works" className="px-4 md:px-6 py-16 bg-white">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Наши работы
        </h2>

        <div className="flex gap-4 justify-center">

          {works.slice(currentSlide, currentSlide + (isMobile ? 1 : 3)).map((work, i) => (
            <div key={i}
              className="w-full md:w-[300px] h-[280px] md:h-[380px] relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition duration-300">

              <img src={work.src}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                {work.title}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Отзывы клиентов
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* 1 */}
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
              <p className="text-[#00C97B] text-xl mb-3">★★★★★</p>
              <p className="text-gray-600 mb-4">
                Все сделали быстро и без ошибок. Работают четко, видно что опыт есть.
                Будем сотрудничать дальше 👍
              </p>
              <div className="border-t pt-3">
                <p className="font-semibold">Азамат</p>
                <p className="text-xs text-gray-400">частный клиент</p>
              </div>
            </div>

            {/* 2 */}
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
              <p className="text-[#00C97B] text-xl mb-3">★★★★★</p>
              <p className="text-gray-600 mb-4">
                Заказывали геодезическое сопровождение строительства.
                Все сроки соблюдены, оборудование современное.
              </p>
              <div className="border-t pt-3">
                <p className="font-semibold">Ерлан</p>
                <p className="text-xs text-gray-400">строительная компания</p>
              </div>
            </div>

            {/* 3 */}
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
              <p className="text-[#00C97B] text-xl mb-3">★★★★★</p>
              <p className="text-gray-600 mb-4">
                Делали съемку участка — все идеально.
                Быстро выехали и предоставили точные данные.
              </p>
              <div className="border-t pt-3">
                <p className="font-semibold">Данияр</p>
                <p className="text-xs text-gray-400">частный заказчик</p>
              </div>
            </div>

          </div>

          {/* ДОП БЛОК ДОВЕРИЯ */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Более <span className="text-[#00C97B] font-semibold">50+ объектов</span> выполнено по Казахстану
            </p>
          </div>

        </div>

      </section>

      {/* GEOGRAPHY */}
      <section className="px-6 py-16 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            География работ
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Работаем по всему Казахстану, а также выезжаем в другие города при необходимости
          </p>

          {/* КАРТИНКА */}
          <div className="flex justify-center">
            <img
              src="/images/map.jpg" // 👈 сюда свою картинку
              className="w-full max-w-[400px]"
            />
          </div>

        </div>

      </section>

      {/* LICENSES */}
      <section className="px-6 py-16 bg-white">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Лицензии
          </h2>

          <div className="grid md:grid-cols-2 gap-1">

            <div className="border rounded-xl p-4 bg-white max-w-[420px] mx-auto">
              <img
                src="/images/license1.jpg"
                className="h-[400px] w-auto mx-auto object-contain"
              />
            </div>

            <div className="border rounded-xl p-4 bg-white max-w-[420px] mx-auto">
              <img
                src="/images/license2.jpg"
                className="h-[400px] w-auto mx-auto object-contain"
              />
            </div>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 bg-white">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-10">
            Наши проекты
          </h2>

          <div className="space-y-6">

            {/* 1 */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-400 mb-1">Строительство</p>
              <h3 className="font-semibold">
                Школа на 550 ученических мест
              </h3>
              <p className="text-gray-500 text-sm">
                г. Алматы, мкр. Саялы-2 — сопровождение строительства:
                посадка здания, разбивка осевых пересечений, вынос высотных отметок,
                исполнительные схемы и благоустройство
              </p>
            </div>

            {/* 2 */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-400 mb-1">Строительство</p>
              <h3 className="font-semibold">
                Амбулатория (СВА) на 200 посещений
              </h3>
              <p className="text-gray-500 text-sm">
                г. Алматы, мкр. Саялы — геодезическое сопровождение:
                посадка здания, разбивка осей, высотные отметки,
                исполнительные схемы и благоустройство
              </p>
            </div>

            {/* 3 */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-400 mb-1">Инженерные сети</p>
              <h3 className="font-semibold">
                Пробивка ул. Толе би
              </h3>
              <p className="text-gray-500 text-sm">
                Сопровождение геодезии при прокладке водопровода,
                канализации и теплотрассы
              </p>
            </div>

            {/* 4 */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-400 mb-1">Строительство</p>
              <h3 className="font-semibold">
                Лечебно-оздоровительный комплекс ASSU
              </h3>
              <p className="text-gray-500 text-sm">
                Полное геодезическое сопровождение:
                посадка здания, разбивка осей, высотные отметки,
                исполнительные схемы и благоустройство
              </p>
            </div>

            {/* 5 */}
            <div>
              <p className="text-sm text-gray-400 mb-1">Жилое строительство</p>
              <h3 className="font-semibold">
                5-этажный жилой дом (г. Қонаев)
              </h3>
              <p className="text-gray-500 text-sm">
                Посадка здания, разбивка осей, вынос высотных отметок,
                исполнительные схемы
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Нужна консультация?
        </h2>

        <p className="text-gray-600 mb-6">
          Ответим за 5 минут
        </p>

        <a
          href="https://wa.me/87767390868"
          className="bg-[#00C97B] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
        >
          Написать в WhatsApp
        </a>

        <div className="mt-10 text-gray-500 text-sm">
          <p>📍 г. Алматы, пр. Рыскулова 48а</p>
          <p>📞 8776 739 08 68</p>
        </div>

        {/* MAP */}
        <section className="w-full h-[500px]">

          <iframe
            src="https://yandex.ru/map-widget/v1/?text=Алматы%2C%20проспект%20Рыскулова%2048а&z=16"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>

        </section>

      </section>

    </main>
  );
}