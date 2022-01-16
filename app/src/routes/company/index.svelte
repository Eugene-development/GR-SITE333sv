<script context="module">
    import TimeLine from "../../components/company/TimeLine/index.svelte";

    import {browser, dev} from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;

    const about = 'О компании';
    const title = 'О компании "Гост Ремонт"'

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="краткое описание страницы">
</svelte:head>
<div class="content">

    <div class="min-h-full">
        <div class="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="relative flex flex-wrap items-center justify-center lg:justify-between">
                    <!-- Logo -->
                    <div class="absolute left-0 py-5 flex-shrink-0 lg:static">

                    </div>

                    <!-- Right section on desktop -->
                    <div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                        <!--            <button type="button" class="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">-->
                        <!--              <span class="sr-only">View notifications</span>-->
                        <!--              &lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
                        <!--              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
                        <!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
                        <!--              </svg>-->
                        <!--            </button>-->

                        <!-- Profile dropdown -->
                        <!--            <div class="ml-4 relative flex-shrink-0">-->
                        <!--              <div>-->
                        <!--                <button type="button" class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
                        <!--                  <span class="sr-only">Open user menu</span>-->
                        <!--                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
                        <!--                </button>-->
                        <!--              </div>-->

                        <!--            </div>-->
                    </div>

                    <div class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                        <!-- Left nav -->
                        <div class="text-4xl text-white">
                            О компании
                        </div>
                        <div class="px-12 lg:px-0">
                            <!-- Search -->
                            <!--                <div class="max-w-xs mx-auto w-full lg:max-w-md">-->
                            <!--                  <label for="search" class="sr-only">Search</label>-->
                            <!--                  <div class="relative text-white focus-within:text-gray-600">-->
                            <!--                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">-->
                            <!--                      &lt;!&ndash; Heroicon name: solid/search &ndash;&gt;-->
                            <!--                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
                            <!--                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />-->
                            <!--                      </svg>-->
                            <!--                    </div>-->
                            <!--                    <input id="search" class="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search">-->
                            <!--                  </div>-->
                            <!--                </div>-->
                        </div>
                    </div>

                    <!-- Menu button -->
                    <div class="absolute right-0 flex-shrink-0 lg:hidden">
                        <!-- Mobile menu button -->
                        <button type="button"
                                class="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!--
                              Heroicon name: outline/menu

                              Menu open: "hidden", Menu closed: "block"
                            -->
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <!--
                              Heroicon name: outline/x

                              Menu open: "block", Menu closed: "hidden"
                            -->
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on mobile menu state. -->
            <div class="lg:hidden">
            </div>
        </div>

        <main class="-mt-24 pb-8">
            <!-- Page header -->
            <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                <!--        <div class="flex items-center space-x-5">-->
                <!--          <div class="flex-shrink-0">-->
                <!--            <div class="relative">-->
                <!--              <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">-->
                <!--              <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"></span>-->
                <!--            </div>-->
                <!--          </div>-->
                <!--          <div>-->
                <!--            <h1 class="text-2xl font-bold text-gray-900">ООО "Гост Ремонт"</h1>-->
                <!--            <p class="text-sm font-medium text-gray-500">Работаем на рынке с 2018 года. Имеем множество успешно завершённых проектов.</p>-->
                <!--          </div>-->
                <!--        </div>-->
                <!--        <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">-->
                <!--          <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">-->
                <!--            Disqualify-->
                <!--          </button>-->
                <!--          <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">-->
                <!--            Advance to offer-->
                <!--          </button>-->
                <!--        </div>-->
            </div>

            <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                <div class="space-y-6 lg:col-start-1 lg:col-span-2">
                    <!-- Description list-->
                    <section aria-labelledby="applicant-information-title">
                        <div class="bg-white shadow sm:rounded-lg">
                            <div class="px-4 py-5 sm:px-6">
                                <h2 id="applicant-information-title"
                                    class="text-lg leading-6 font-medium text-gray-900">
                                    Информация о компании ООО "ГОСТ РЕМОНТ"
                                </h2>
                                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                                    Предоставлено в общий доступ для ознакомления с реквизитами.
                                </p>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">
                                            ИНН/КПП
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            5262354912/526201001
                                        </dd>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">
                                            ОГРН
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            1185275008665
                                        </dd>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Юридический адрес
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            Нижний Новгород, Пушкина 18, оф. 631
                                        </dd>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Директор
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            Колобов Д.В.
                                        </dd>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Деятельность
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            Оказание услуг населению по ремонту внутренних помещений, замены
                                            канализации, электрики, возведению перегородок, монтажу натяжных потолков,
                                            установке межкомнатных и входных дверей и пр.

                                        </dd>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Памятка
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <!-- Heroicon name: solid/paper-clip -->
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400"
                                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                             fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate">
                                                            услуги.pdf
                                                          </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="/"
                                                           class="font-medium text-blue-600 hover:text-blue-500">
                                                            Скачать
                                                        </a>
                                                    </div>
                                                </li>

                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <!-- Heroicon name: solid/paper-clip -->
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400"
                                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                             fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate">
                                                            контакты.pdf
                                                          </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="/"
                                                           class="font-medium text-blue-600 hover:text-blue-500">
                                                            Скачать
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <div class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg">
                                    Данная информация предоставлена в общий доступ сети интернет строго для
                                    ознакомления.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <TimeLine/>
            </div>
        </main>
    </div>

</div>

