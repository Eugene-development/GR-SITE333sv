<script>
    import {formMeasurement, mobileMenu} from '../../stores.js';
    import {useHeader} from "$lib/use/content/header";
    import {useVisible} from "$lib/use/visible";
    import MobileMenu from "./mobile/index.svelte"
    import FormMeasurement from "$lib/components/forms/measurement/index.svelte"

    const {invert} = useVisible;
    const changeVisibleFormMeasurement = () => formMeasurement.update(invert)

    const changeVisibleMobileMenu = () => mobileMenu.update(invert);
    let visibleMobileMenu;
    mobileMenu.subscribe(value => visibleMobileMenu = value);

    const {menu, phone} = useHeader;
    let current;

</script>

<header>
    <div class="relative">
        <div class="bg-gray-900 p-4">
            <nav class="relative max-w-full mx-1 flex items-center justify-between px-1 sm:px-2" aria-label="Global">
                <div class="flex items-center flex-1">
                    <div class="flex items-center justify-between w-full md:w-auto">
                        <a href="/">
                            <span class="sr-only">Workflow</span>
                            <img class="h-6 w-auto sm:h-10"
                                 src="/Logo/logo1.svg" alt="">
                        </a>
                        <div class="-mr-2 flex items-center md:hidden">

                            <button on:click={changeVisibleMobileMenu} type="button"
                                    class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                                    aria-expanded="false"><span class="mx-2">Меню</span>
                                <span class="sr-only">Open main menu</span>
                                <!-- Heroicon name: outline/menu -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav class="hidden space-x-8 md:flex md:mx-6 ">
                        {#each menu as { value, link }, i}
                            <a class="text-sm font-medium hover:text-gray-300 p-2 text-gray-50"
                               href="/{link}">{value}
                            </a>
<!--                            <a class="text-sm font-medium hover:text-gray-300 p-2 {'/'+link === window.location.pathname ? 'text-red-500' : 'text-cyan-600'}"-->
<!--                               href="/{link}">{value}-->
<!--                            </a>-->
<!--                            <a class="text-sm font-medium text-white hover:text-gray-300 p-2"-->
<!--                               class:text-xl="{current === '/'+link}" on:click="{() => current = window.location.pathname}"-->
<!--                               href="/{link}">{value}-->
<!--                            </a>-->
                        {:else}
                            <p>Нет данных!</p>
                        {/each}
                    </nav>

                </div>
                <div class="hidden lg:flex md:items-center md:space-x-6">
                    <p class="text-base font-medium text-white hover:text-gray-300 lg:text-xl">
                        {phone}
                    </p>
                    <button on:click={changeVisibleFormMeasurement} type="button"
                            class="inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-cyan-700">
                        Получить консультацию
                    </button>
                </div>
            </nav>
        </div>

        <MobileMenu/>
    </div>

    <FormMeasurement/>

</header>

