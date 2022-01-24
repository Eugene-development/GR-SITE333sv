<script>
    import {useServices} from "../../use/content/services";
    const {prices, services} = useServices

    import { bool } from '../../stores.js';
    import { useVisible } from "../../use/visible";
    const { visible } = useVisible;
    const changeVisibleFormMeasurement = () => bool.update(visible)
    let visibleFormMeasurement;
    bool.subscribe(value => visibleFormMeasurement = value);

    const page = 'Услуги';
    const title = 'Наши услуги по ремонту'
    const description = 'Услуги и цены на них'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


<div>

    <div class="bg-white">
        <!-- Header -->
        <div class="relative pb-32 bg-gray-800">
            <div class="absolute inset-0">
                <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="">
                <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Услуги</h1>
                <p class="mt-6 max-w-3xl text-xl text-gray-300">Наша компания предлагает вам воспользоваться услугами специалистов высокого квалификационного уровня. На все работы предоставляется гарантия.</p>
            </div>
        </div>

        <!-- Overlapping cards -->
        <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
            <h2 class="sr-only" id="contact-heading">Консультация</h2>
            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">

                {#each prices as {name, text}}
                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div class="absolute top-0 p-5 inline-block bg-cyan-700 rounded-xl shadow-lg transform -translate-y-1/2">
                            <!-- Heroicon name: outline/phone -->
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">{name} ремонт</h3>
                        <p class="mt-4 text-base text-gray-500">{text}</p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                        <span on:click={changeVisibleFormMeasurement} class="text-base font-medium text-cyan-700 hover:text-green-700">Консультация <span aria-hidden="true">&rarr;</span></span>
                    </div>
                </div>
                {:else}
                    <p>Нет данных!</p>
                {/each}


            </div>
        </section>
    </div>


    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-100">
        <div class="pt-12 sm:pt-16 lg:pt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Цены на наши услуги
                    </h2>
                    <p class="mt-4 text-xl text-gray-600">
                        Мы стараемся держать нашу ценовую политику в разумных размерах и не в ущерб качеству работ.
                    </p>
                </div>
            </div>
        </div>

        {#each prices as {name, price, description, works}, i }
        <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                        <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                {name} ремонт
                            </h3>
                            <p class="mt-6 text-base text-gray-500">
                                {description}
                            </p>
                            <div class="mt-8">
                                <div class="flex items-center">
                                    <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-gray-900">
                                        Что вы получите
                                    </h4>
                                    <div class="flex-1 border-t-2 border-gray-200"></div>
                                </div>
                                <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                    {#each works as {name}}
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <!-- Heroicon name: solid/check-circle -->
                                            <svg class="h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">
                                            {name}
                                        </p>
                                    </li>
                                    {:else}
                                        <p>Нет данных!</p>
                                    {/each}

                                </ul>
                            </div>
                        </div>
                        <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                            <p class="text-lg leading-6 font-medium text-gray-900">
                                Цена ремонта от
                            </p>
                            <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                              <span>
                                ₽{price}
                              </span>
                                <span class="ml-3 text-xl font-medium text-gray-500">
                                кв/м
                              </span>
                            </div>
                            <p class="mt-4 text-sm">
                                <a href="/" class="font-medium text-gray-500 underline">
                                    За комплекс работ
                                </a>
                            </p>
                            <div class="mt-6">
                                <div class="rounded-md shadow">
                                    <span on:click={changeVisibleFormMeasurement} class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-800 hover:bg-gray-900">
                                        Получить консультацию
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 text-sm">
                                <div class="font-medium text-gray-900">
                                    Услуга бесплатная
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {:else}
            <p>Нет данных!</p>
        {/each}

    </div>



    <!--    <div class="bg-white">-->
<!--        <div class="max-w-2xl mx-auto py-8 px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">-->
<!--            <div class="max-w-3xl mx-auto text-center">-->
<!--                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Подробнее</h2>-->
<!--                <p class="mt-4 text-gray-500">Выберите наиболее приемлимый для вас вариант сотрудничества с нашей компанией.</p>-->
<!--            </div>-->

<!--            <div class="mt-16 space-y-16">-->
<!--                <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">-->
<!--                    <div class="mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 lg:col-start-1">-->
<!--                        <h3 class="text-2xl font-medium text-gray-900">Косметический ремонт</h3>-->
<!--                        <p class="mt-2 text-base text-gray-500">Our laptop sleeve is compact and precisely fits 13&quot; devices. The zipper allows you to access the interior with ease, and the front pouch prove interior with ease, and the front pouch prove interior with ease, and the front pouch prove interior with ease, and the front pouch prove interior with ease, and the front pouch provides a convenient place for your charger cable.</p>-->
<!--                    </div>-->
<!--                    <div class="flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 lg:col-start-6 xl:col-start-5">-->
<!--                        <div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden shadow-xl">-->
<!--                            <img src="/image/kosmeticheskij-remont-kvartiry.jpg" alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull." class="object-center object-cover">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">-->
<!--                    <div class="mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 lg:col-start-1">-->
<!--                        <h3 class="text-2xl font-medium text-gray-900">Стандартный ремонт</h3>-->
<!--                        <p class="mt-2 text-base text-gray-500">Our laptop sleeve is compact and precisely fits 13&quot; devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.</p>-->
<!--                    </div>-->
<!--                    <div class="flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 lg:col-start-6 xl:col-start-5">-->
<!--                        <div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden shadow-xl">-->
<!--                            <img src="/image/kosmeticheskij-remont-kvartiry.jpg" alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull." class="object-center object-cover">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">-->
<!--                    <div class="mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 lg:col-start-1">-->
<!--                        <h3 class="text-2xl font-medium text-gray-900">Капитальный ремонт</h3>-->
<!--                        <p class="mt-2 text-base text-gray-500">Our laptop sleeve is compact and precisely fits 13&quot; devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.</p>-->
<!--                    </div>-->
<!--                    <div class="flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 lg:col-start-6 xl:col-start-5">-->
<!--                        <div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden shadow-xl">-->
<!--                            <img src="/image/kosmeticheskij-remont-kvartiry.jpg" alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull." class="object-center object-cover">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->
<!--    </div>-->


    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-3xl font-extrabold text-gray-900">
                Подробное описание услуг
            </h2>

            {#each services as {name, description}}
            <div class="mt-8">
                <dl class="divide-y divide-gray-200">
                    <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                        <dt class="text-base font-medium text-gray-900 md:col-span-5">
                            {name}
                        </dt>
                        <dd class="mt-2 md:mt-0 md:col-span-7">
                            <p class="text-base text-gray-500">
                                {description}
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
            {:else}
                <p>Нет данных!</p>
            {/each}


        </div>
    </div>

</div>
