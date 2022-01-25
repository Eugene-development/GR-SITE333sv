<script>
    import axios from "axios";
    import {formEmail} from "../../stores";
    import {useVisible} from "../../use/visible";

    const {invert} = useVisible;
    const changeVisibleFormEmail = () => formEmail.update(invert)
    let visibleFormEmail;
    formEmail.subscribe(value => visibleFormEmail = value);

    let email = '';
    const url = `/sendEmail`;

    const apiCRUD = {
        baseURL: 'https://adminexpo.com:7721/',
        headers: {
            Authorization: `Bearer 3`
        }
    }

    async function sendPhone() {
        try {
            const data = {email: email};
            await axios.post(url, data, apiCRUD);
            changeVisibleFormEmail();
        } catch (error) {
            console.error(error);
        }
    }

    const now = new Date();
    const year = now.getFullYear()


</script>

<div class=" px-12 py-20 bg-gray-50" id="anchor6">
    <div class="grid grid-cols-2 gap-24 md:grid-cols-6 lg:grid-cols-4">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-22" src="/Logo/Logo_shir_6.svg" alt="Tuple">
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-22" src="/Logo/Logo_shir_6.svg" alt="Tuple">
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-22" src="/Logo/Logo_shir_6.svg" alt="Tuple">
        </div>
        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img class="h-22" src="/Logo/Logo_shir_6.svg" alt="Tuple">
        </div>
    </div>
</div>

<footer class="bg-gradient-to-r from-sky-700 to-cyan-600" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-gray-50">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                <div class="md:grid md:grid-cols-1">
                    <div>
                        <h3 class="text-lg font-semibold  tracking-wider uppercase">
                            Контакты:
                        </h3>
                        <div class="mt-4 space-y-4">
                            <p class="text-sm">
                                г. Нижний Новгород, <br> Пушкина, 18 (офис 631)
                            </p>
                            <p class="text-xs flex">
                                <svg class="my-auto mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"></path>
                                </svg>
                                +7 (831) 423-23-89
                            </p>
                            <p class="text-xs flex">
                                <svg class="my-auto mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                gr-nn@inbox.ru
                            </p>
                            <a class="flex" href="https://vk.com/gost_remont_kvartir"
                               target="_blank">
                                <svg class="my-auto mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <div class="text-xs ">
                                    vk.com/gost_remont_kvartir
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 class="text-lg font-semibold tracking-wider uppercase">
                            Клиентам:
                        </h3>
                        <div class="mt-4 space-y-4">
                            <div class="flow-root">
                                <a class="-m-3 p-3 flex items-center rounded-md text-base font-medium"
                                   href="/services">
                                    <!-- Heroicon name: information-circle -->
                                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 " fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                              stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"/>
                                    </svg>
                                    <span class="ml-4">Услуги</span>
                                </a>
                            </div>

                            <div class="flow-root">
                                <a
                                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium "
                                        href="/specialists">
                                    <!-- Heroicon name: office-building -->
                                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 " fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                              stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"/>
                                    </svg>
                                    <span class="ml-4 ">Специалисты</span>
                                </a>
                            </div>

                            <div class="flow-root">
                                <a
                                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium "
                                        href="/gallery">
                                    <!-- Heroicon name: newspaper -->
                                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 " fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                              stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"/>
                                    </svg>
                                    <span class="ml-4 ">Галерея</span>
                                </a>
                            </div>


                        </div>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <h3 class="text-lg font-semibold tracking-wider uppercase">
                            Информация:
                        </h3>

                        <div class="mt-4 space-y-4">
                            <div class="flow-root">
                                <a
                                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium "
                                        href="/company">
                                    <!-- Heroicon name: user-group -->
                                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 " fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                              stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"/>
                                    </svg>
                                    <span class="ml-4 ">О нас</span>
                                </a>
                            </div>

                            <div class="flow-root">
                                <a
                                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium "
                                        href="/testimonials">
                                    <!-- Heroicon name: globe-alt -->
                                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 " fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                              stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"/>
                                    </svg>
                                    <span class="ml-4 ">Отзывы</span>
                                </a>
                            </div>

                            <div class="flow-root">
                                <a
                                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium "
                                        href="/contacts">
                                    <!-- Heroicon name: bookmark-alt -->
                                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 " fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                              stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"/>
                                    </svg>
                                    <span class="ml-4 ">Контакты</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 xl:mt-0">
                <h3 class="text-lg font-semibold  tracking-wider uppercase">
                    Запрос на получение информации по почте
                </h3>
                <p class="mt-4 text-base ">
                    Отправьте вашу почту и получите актуальную информацию о нашей компании, выполняемых работах и ценах
                </p>

                <form class="mt-4 sm:flex sm:max-w-md" on:submit|preventDefault={sendPhone}>
                        <label for="emailAddress" class="sr-only">Email address</label>
                    {#if visibleFormEmail}
                        <input bind:value={email}
                               type="email" id="emailAddress" required
                               class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                               placeholder="Ваша почта">
                        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button type="submit"
                                    class="w-full bg-gradient-to-r from-cyan-700 to-cyan-900 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                Отправить
                            </button>
                        </div>
                    {:else }
                        <div class="mt-2 rounded-md sm:mt-0 sm:flex-shrink-0">
                          <span class="w-full bg-gradient-to-r from-cyan-700 to-cyan-900 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            Ожидайте письмо на почту
                          </span>
                        </div>
                    {/if}

                </form>

            </div>
        </div>
        <div class="mt-8 border-t border-gray-50 pt-8 md:flex md:items-center md:justify-between">
<!--            <div class="flex space-x-6 md:order-2">-->
<!--                          <a href="#" class="text-gray-600 hover:text-gray-600">-->
<!--                            <span class="sr-only">Facebook</span>-->
<!--                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
<!--                              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />-->
<!--                            </svg>-->
<!--                          </a>-->

<!--            </div>-->
            <p class="mt-8 text-base  md:mt-0 md:order-1">
                &copy; ООО "Гост Ремонт" 2015-{year}. Все цены не являются публичной офертой. Все права защищены.
                <br>Обслуживание сайта +7 (495) 147-55-50
            </p>
        </div>
    </div>
</footer>
