<script context="module">
  const l = console.log;
  export const load = async ({ url }) => {
    const idCompany = url.searchParams.get("company");
    let mainText;
    switch (idCompany) {
      case "71599198":
        mainText = "xxxxxxxxxxxxxxx";
        break;
      case "72346322":
        mainText = "Ремонт квартир под ключ";
        break;
      case "72466146":
        mainText = "Закажите ремонт квартир";
        break;
      default:
        mainText = "Ремонт квартир";
        break;
    }

    return {
      props: {
        mainText,
      },
    };
  };
</script>

<script>
  import axios from "axios";

  import { useVisible } from "$lib/use/visible";
  import { formMeasurement, formPhone } from "../stores.js";

  const { invert } = useVisible;

  const changeVisibleFormPhone = () => formPhone.update(invert);
  let visibleFormPhone;
  formPhone.subscribe((value) => (visibleFormPhone = value));

  const changeVisibleFormMeasurement = () => formMeasurement.update(invert);
  let visibleFormMeasurement;
  formMeasurement.subscribe((value) => (visibleFormMeasurement = value));

  let phone = "";
  const url = `/sendPhone`;
  const apiCRUD = {
    baseURL: "https://larux.ru:7721/",
    headers: {
      Authorization: `Bearer 3`,
    },
  };
  async function sendPhone() {
    try {
      const data = { phone: phone };
      await axios.post(url, data, apiCRUD);
      changeVisibleFormPhone();
    } catch (error) {
      console.error(error);
    }
  }

  const page = "Главная";
  const title = "Ремонт квартир в Нижнем Новгороде | Компания Гост-Ремонт";
  const description =
    "Проведение полного или частичного ремонта квартир в Нижнем Новгороде и области";

  export let mainText;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<!--<div>-->
<!--	{visibleFormPhone}-->
<!--	{phone}-->

<!--</div>-->
<section>
  <main>
    <div class="relative overflow-hidden bg-gray-900 ">
      <div class="mx-auto max-w-screen-xl">
        <div
          class="relative z-20 bg-gray-900 pb-2 sm:pb-10 md:pb-10 lg:w-full lg:max-w-2xl lg:pb-5 xl:pb-5"
        >
          <svg
            class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-gray-900 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
          >
            <div class="lg:py-24">
              <a
                href="/contacts"
                class="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
              >
                <span
                  class="rounded-full bg-gradient-to-r from-green-500 to-cyan-600 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white"
                  >xxxxxxxxxxxxxxx</span
                >
                <!-- <span class="ml-4 text-sm">Ремонт по ГОСТам</span> -->
                <span class="ml-4 text-sm">xxxxxxxxxxxxxxx</span>

                <!-- Heroicon name: solid/chevron-right -->
                <svg
                  class="ml-2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <h1
                class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl"
              >
                <span class="block">{mainText}</span>
                <span
                  class="block bg-gradient-to-r from-green-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5"
                  >'xxxxxxxxxxxxxxx</span
                >
              </h1>
              <p
                class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"
              >
                xxxxxxxxxxxxxxxxxxxxxx
              </p>
              <p
                class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"
              >
                xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx
              </p>

              <div class="mt-10 sm:mt-12">
                <form
                  on:submit|preventDefault={sendPhone}
                  class="sm:mx-auto sm:max-w-xl lg:mx-0"
                >
                  <div class="sm:flex">
                    {#if !visibleFormPhone}
                      <div class="min-w-0 flex-1">
                        <label for="phone" class="sr-only">Phone</label>
                        <input
                          bind:value={phone}
                          required
                          id="phone"
                          type="tel"
                          placeholder="Укажите телефон для консультации"
                          class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          class="block w-full rounded-md bg-gradient-to-r from-green-600 to-cyan-700 py-3 px-4 font-medium text-white shadow hover:from-green-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Отправить
                        </button>
                      </div>
                    {:else}
                      <div class="mt-3 sm:mt-0 ">
                        <span
                          class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        >
                          Спасибо за доверие
                        </span>
                      </div>
                    {/if}
                  </div>
                  <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                    В течении дня с вами свяжется специалист и даст подробную
                    консультацию.
                    <br />Услуга бесплатная.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="/image/main7.jpg"
          alt="main"
        />
        <!--                 src="https://noginsk-remont.ru/wp-content/uploads/2020/09/kosmetika.jpg" alt="">-->
        <!--                 src="https://stroy-okey.ru/wp-content/uploads/2020/10/2020-10-21_14-50-01.png" alt="">-->
        <!--             src="https://remont-kvartir-v-msk.ru/uploads/posts/2016-04/1459917460_istock_000016196507large_shironosov.jpg" alt="">-->
      </div>
    </div>

    <!-- Feature section with screenshot -->
    <div class="bg-gray-50 pt-12 sm:pt-16 lg:pt-24">
      <div
        class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 "
      >
        <div>
          <h2
            class="text-base font-semibold uppercase tracking-wider text-cyan-600"
          >
            Идея
          </h2>
          <p
            class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Решили сделать ремонт?
          </p>
          <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Это интересный и творческий процесс, который разнообразит вашу жизнь
            и прbвнесёт множество красок в прямом и переносном смысле. Хотя.....
            &#129299;
          </p>
        </div>
        <div class="mt-12 ">
          <img
            class="mx-auto rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="/image/idea.png"
            alt="idea"
          />
        </div>
      </div>
    </div>

    <!-- Feature section with grid -->
    <div class="relative bg-white py-16 sm:py-24 lg:py-24">
      <div
        class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          class="text-base font-semibold uppercase tracking-wider text-cyan-600"
        >
          Решение
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Порой лучше довериться профессионалам
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Мы предлагаем свои услуги тем кто дорожит своим временем и нервами.
          Наши специалисты с большим опытом и разнообразным инструментом решат
          ваши вопросы в оговоренные сроки и с наилучшим качеством работ
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="pt-6 shadow-lg">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-cyan-600 p-3 shadow-lg"
                    >
                      <!-- Heroicon name: outline/cloud-upload -->
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Рассчёт
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    Подробный расчёт всех работ и материалов в день замера и
                    обсуждение иных деталей
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 shadow-lg">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-cyan-600 p-3 shadow-lg"
                    >
                      <!-- Heroicon name: outline/lock-closed -->
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Гарантии
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    100% соблюдение сроков ремонта по договору или заплатим % за
                    каждый день просрочки
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 shadow-lg">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-cyan-600 p-3 shadow-lg"
                    >
                      <!-- Heroicon name: outline/refresh -->
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Проект
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    Дизайн-проект для каждого клиента вне зависимости какой
                    ремонт вы будете делать
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 shadow-lg">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-cyan-600 p-3 shadow-lg"
                    >
                      <!-- Heroicon name: outline/shield-check -->
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Выгода
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    До 30% гарантированной скидки на все материалы плюс
                    дополнительные акции на наши услуги
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 shadow-lg">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-cyan-600 p-3 shadow-lg"
                    >
                      <!-- Heroicon name: outline/cog -->
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Опыт
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    Более 1000 квартир в разных регионах отремонтировано "под
                    ключ" нашими стараниями!
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 shadow-lg">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-cyan-600 p-3 shadow-lg"
                    >
                      <!-- Heroicon name: outline/server -->
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Экскурсия
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    Вы можете заказать экскурсию на текущий объект чтобы
                    убедиться в нашем профессионализме
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial section -->
    <div
      class="lg:z-5 bg-gradient-to-tr from-green-400 via-green-800 to-green-600 pb-16 lg:relative lg:pb-0"
    >
      <div
        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8"
      >
        <div class="relative -my-8">
          <!--					<div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>-->
          <div
            class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0"
          >
            <div
              class="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full"
            >
              <img
                class="object-cover lg:h-full lg:w-full"
                src="/image/S.jpeg"
                alt="specialist"
              />
            </div>
          </div>
        </div>
        <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
          >
            <blockquote>
              <div>
                <svg
                  class="h-12 w-12 text-white opacity-25"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="mt-6 text-xl font-medium text-white">
                  Мы стараемся делать наши услуги максимально выгодными для
                  наших заказчиков, и теперь мы рады сообщить вам, что дизайн
                  интерьера стал доступнее! Компания "ГостРемонт" предлагает
                  уникальную возможность получить дизайн-проект бесплатно при
                  заказе ремонта. Ремонт, проведенный в соответствии с
                  дизайн-проектом, имеет массу преимуществ, ведь в нем продумана
                  каждая деталь. Ждём вас.
                </p>
              </div>
              <footer class="mt-6">
                <p class="text-base font-medium text-white">Сергей Фёдорович</p>
                <p class="text-base font-medium text-cyan-100">
                  Ведущий специалист
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div class="relative my-24  overflow-hidden bg-white">
      <div class="relative px-2 sm:px-2 lg:px-2">
        <div class="mx-auto  max-w-prose text-lg text-gray-500">
          <h1>
            <span
              class=" block text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-800 sm:text-4xl"
              >Ремонт вашей квартиры</span
            >
          </h1>
          <p class="mt-12 text-xl leading-8 text-gray-500">
            Если вы решили сделать ремонт, то доверьтесь добросовестному
            исполнителю! В результате ваша квартира заиграет новыми красками и
            при этом вы сохраните свой бюджет, так как цены на наши услуги
            приемлемы.<br />
            Ремонтно-строительная компания «Гостремонт» - надежный партнер, проверенный
            временем и сотнями успешными работами в портфолио. И мы надеемся вы станете
            очередным довольным клиентом.<br />
            Компания гарантирует качественный ремонт квартир под ключ в Нижнем Новгороде.
            Предлагает отделку внутренних помещений (эконом, комфорт, премиум), а
            также занимается установкой натяжных потолков различной категории сложности
            (стандартные, двухуровневые, парящие).<br />
            «Гостремонт» - это:
          </p>
          <ul class="text-xl leading-8 text-gray-500">
            <li>
              <span class="font-bold">Честный и прозрачный расчет</span><br />
              Окончательная стоимость работ не меняется с момента заключения контракта.
              Мы следим за неукоснительным выполнением договорённостей.
            </li>
            <li>
              <span class="font-bold">Качественные материалы</span><br />
              Только сертифицированное оборудование и материалы, соответствующие
              отечественным и мировым стандартам, приобрести которые вы так же можете
              у нас по низким ценам
            </li>
            <li>
              <span class="font-bold">Внимание к каждому клиенту</span><br />
              Мы ценим каждого клиента, обратившегося к нам и стремимся делать свою
              работу так, чтобы видеть искреннюю радость на лице клиента по окончании
              выполнения работ.
            </li>
            <li>
              <span class="font-bold">Надёжные поставщики</span><br />
              Работаем с проверенными
              <a href="https://orbita-stroy.com/"
                >поставщиками строительных и отделочных материалов</a
              >
              в Нижнем Новгороде, которые обеспечивают своевременную доставку стройматериалов
              на объект.
            </li>
          </ul>
          <p class="text-xl leading-8 text-gray-500">
            Ждём ваших обращений в нашу компанию! Наши менеджеры постараются
            дать вам исчерпывающую информацию.
          </p>
        </div>
        <div class="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
          <!--        <h3>Ждём вас!!!</h3>-->
          <!--            <figure>-->
          <!--                        <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">-->
          <!--            </figure>-->
          <!--                    <p>Purus morbi dignissim senectus mattis <a href="/">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>-->
          <!--                    <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>-->
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="relative bg-gray-900">
      <div
        class="relative h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
      >
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
          alt=""
        />
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-r from-cyan-100 to-cyan-700 mix-blend-multiply"
        />
      </div>
      <div
        class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
      >
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <h2
            class="text-base font-semibold uppercase tracking-wider text-gray-300"
          >
            Бесплатная консультация
          </h2>
          <p
            class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Мы готовы помочь вам
          </p>
          <p class="mt-3 text-lg text-gray-300">
            Сотрудники нашей компании постараются грамотно подсказать какие
            варианты наиболее приемлемы в вашей ситуации. Оптимальный баланс
            цены и качества это цель, которая устроит и нас и вас на каждом
            этапе сотрудничества.
          </p>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <button
                on:click={changeVisibleFormMeasurement}
                class="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-700 to-cyan-900 px-5 py-3 text-base font-medium text-gray-50"
              >
                Получить консультацию
                <!-- Heroicon name: solid/external-link -->
                <svg
                  class="-mr-1 ml-3 h-5 w-5 text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  />
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</section>
