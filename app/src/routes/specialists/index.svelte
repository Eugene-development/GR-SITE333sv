<script>
    import { useSpecialists } from "$lib/use/content/specialists";
    import BreadCrumbs from "$lib/components/breadcrumbs/index.svelte"

    const {specialists} = useSpecialists;



    const page = 'Специалисты';
    const title = 'Наши специалисты'
    const description = 'Знакомство с нашими специалистами'

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>



    <BreadCrumbs crumb="{page}"/>

    {#each specialists as {id, speciality, description, workers, text}, i}
        <div class="-mt-12 pb-8 ">
            <div class="bg-gray-50 shadow-xl  rounded-lg max-w-7xl mx-auto  p-8 sm:px-6 lg:py-20 lg:px-8">
                <div class="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 class="text-3xl font-extrabold text-gray-900">
                            {speciality}
                        </h2>
                        <p class="mt-4 text-lg text-gray-500">{description}</p>
                    </div>
                    <div class="mt-12 lg:mt-0 lg:col-span-2">
                        <dl class="space-y-8">
                            <div>
                                <dt class="text-lg leading-6 font-medium text-gray-900">
                                    {#each workers as {id, name, age}, i}
                                        <span class="inline-flex items-center m-2 px-2.5 py-1.5 rounded-md text-sm font-medium bg-gray-200 text-gray-800">{name} ({age})</span>
                                    {:else}
                                        <p>Нет данных!</p>
                                    {/each}
                                </dt>
                                <dd class="mt-2 text-base text-gray-500">
                                    {text}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <p>Нет данных!</p>
    {/each}
