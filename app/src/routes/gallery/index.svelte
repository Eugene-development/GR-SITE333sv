<script>
    import {useGallery} from "../../use/content/gallery";
    import BreadCrumbs from "../../components/breadcrumbs/index.svelte"


    const {gallery} = useGallery

    const page = 'Галерея';
    const title = 'Галерея наших работ'
    const description = 'Знакомство с нашими работами'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<BreadCrumbs crumb="{page}"/>

<div class="-mt-12 pb-8">
    <div class="relative">
        <div class=" mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {#each gallery as {id, style, street, square, text, testimonial, img, avatar, name}}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img class="h-48 w-full object-cover" src="/image/{img}" alt="">
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <h3 class="text-sm font-medium text-cyan-600">
                            {style}
                        </h3>
                        <div class="block mt-2">
                            <p class="text-base font-semibold text-gray-900">
                                {street} - {square} м/кв
                            </p>
                            <p class="mt-3 text-base text-gray-500">{text} </p>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full"
                                     src="{avatar}"
                                     alt="Daniela Metz">
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                <span class="hover:underline">{name}</span>
                            </p>
                            <div class="flex space-x-1 text-sm text-gray-500">
<!--                                                          <time datetime="2020-02-12">-->
<!--                                                            Feb 12, 2020-->
<!--                                                          </time>-->
                                <p>"{testimonial}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {:else}
                <p>Нет данных!</p>
            {/each}
        </div>
    </div>
</div>
