<script context="module">
    import TimeLine_v1 from "$lib/components/company/TimeLine/index.svelte";
    import BreadCrumbs from "$lib/components/breadcrumbs/index.svelte"


    const TimeLine = TimeLine_v1

    // import {browser, dev} from '$app/env';
    //
    // // we don't need any JS on this page, though we'll load
    // // it in dev so that we get hot module replacement...
    // export const hydrate = dev;
    //
    // // ...but if the client-side router is already loaded
    // // (i.e. we came here from elsewhere in the app), use it
    // export const router = browser;
    //
    // // since there's no dynamic data here, we can prerender
    // // it so that it gets served as a static asset in prod
    // export const prerender = true;

    const page = 'О компании'
    const title = 'О компании "Гост Ремонт"'
    const description = 'Общая информация о компании Гост-Ремонт, выполняющая работы по ремонту квартир в Нижнем Новгороде'

   export const isWorld = false

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

        <BreadCrumbs crumb="{page}"/>

        <main class="-mt-12 pb-8">
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

            <div class=" max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
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
                                        <dt class="text-sm font-medium {isWorld ? 'text-red-500' : 'text-cyan-600'}">
<!--                                        <dt class="text-sm font-medium  text-red-500={true} text-red-500={false}">-->
                                            Документы для скачивания:
                                        </dt>
                                        <dd class="mt-2 text-sm text-gray-900">
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
                                                            договор.docx
                                                          </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="https://test-bucket-7778.s3.eu-central-1.amazonaws.com/agreement.docx" download
                                                           class="font-medium text-cyan-600 hover:text-blue-500">
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



                <svelte:component this={TimeLine}/>
<!--                <TimeLine/>-->
            </div>
        </main>

