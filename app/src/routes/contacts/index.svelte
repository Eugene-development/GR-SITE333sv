<script>
    import {useContacts} from "../../use/content/contacts";
    import BreadCrumbs from "../../components/breadcrumbs/index.svelte"


    const {contacts} = useContacts;

    const page = 'Контакты';
    const title = 'Наши контакты'
    const description = 'Связь с нами'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


    <BreadCrumbs crumb="{page}"/>


    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- Be sure to use this with a layout container that is full-width on mobile -->
    <div class="-mt-12 pb-8 bg-gray-50 mx-16 overflow-hidden shadow sm:rounded-lg shadow-xl">
        <div class="px-4 py-4 sm:p-6 ">
            <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=201939254246" width="1024" height="600" title="map"
                    frameborder="0" class="mx-auto "></iframe>
        </div>
    </div>

    {#each contacts as {id, city, address, phones, email, manager}, i (id)}
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div class="divide-y-2 divide-gray-200">
                <div class="lg:grid lg:grid-cols-3 lg:gap-8">
                    <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        {city}
                    </h2>
                    <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Адрес офиса:
                            </h3>
                            <dl class="mt-2 text-base text-gray-500">
                                <div>
                                    <dt class="sr-only">
                                        address
                                    </dt>
                                    <dd class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <div class="ml-2 pb-1">
                                            {address}
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Почта:
                            </h3>
                            <dl class="mt-2 text-base text-gray-500">
                                <div>
                                    <dt class="sr-only">
                                        Email
                                    </dt>
                                    <dd class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        <div class="ml-2 pb-1">
                                            {email}
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Телефоны:
                            </h3>
                            <dl class="mt-2 text-base text-gray-500">
                                <div class="mt-1">
                                    <dt class="sr-only">
                                        Phone number
                                    </dt>
                                    <dd>
                                        <!--{phones}-->
                                        {#each Object.entries(phones) as [key, value]}
                                            <div class="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <p class="ml-2 pb-1">{value}</p>
                                            </div>
                                        {:else}
                                            <p>Нет данных!</p>
                                        {/each}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Менеджер:
                            </h3>
                            <dl class="mt-2 text-base text-gray-500">
                                <div>
                                    <dt class="sr-only">
                                        Manager
                                    </dt>
                                    <dd class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <div class="ml-2 pb-1">
                                            {manager}
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {#if contacts.length - 1 !== i}
            <hr>
        {/if}

    {:else}
        <p>Нет данных!</p>
    {/each}
