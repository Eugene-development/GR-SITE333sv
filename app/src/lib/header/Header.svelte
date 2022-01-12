<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>

	<div class="relative">
		<div class="bg-gray-900 p-4">
			<nav class="relative max-w-full mx-8 flex items-center justify-between px-1 sm:px-2" aria-label="Global">
				<div class="flex items-center flex-1">
					<div class="flex items-center justify-between w-full md:w-auto">
<!--						<RouterLink to="/">-->
<!--							<span class="sr-only">Workflow</span>-->
<!--							<img class="h-6 w-auto sm:h-10"-->
<!--								 src="/Logo/logo1.svg" alt="">-->
<!--						</RouterLink>-->
						<div class="-mr-2 flex items-center md:hidden">
							<button type="button"
									class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
									aria-expanded="false">
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
					<nav class="hidden space-x-8 md:flex md:ml-10">
						<a class="text-base font-medium text-white hover:text-gray-300" href="/">Главная</a>
						<a class="text-base font-medium text-white hover:text-gray-300" href="/about">Компания</a>
<!--						<a href="/settings">Settings</a>-->
					</nav>

					<!--					<ul class="hidden space-x-8 md:flex md:ml-10">-->
<!--						<li to="services" class="text-base font-medium text-white hover:text-gray-300">Услуги</li>-->
<!--						<li to="about" class="text-center font-medium text-white hover:text-gray-300">Компания</li>-->
<!--						<li to="gallery" class="text-base font-medium text-white hover:text-gray-300">Галерея</li>-->
<!--						<li to="testimonials" class="text-base font-medium text-white hover:text-gray-300">Отзывы</li>-->
<!--						<li to="specialists" class="text-base font-medium text-white hover:text-gray-300">Специалисты</li>-->
<!--						&lt;!&ndash;                <RouterLink to="blog" class="text-base font-medium text-white hover:text-gray-300">Блог</RouterLink>&ndash;&gt;-->
<!--						<li to="contacts" class="text-base font-medium text-white hover:text-gray-300">Контакты</li>-->
<!--					</ul>-->
				</div>
				<div class="hidden md:flex md:items-center md:space-x-6">
					<p class="text-xl font-medium text-white hover:text-gray-300">
						+7 (831) 423-23-89
					</p>
					<button  type="button"
							class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-cyan-700">
						Получить консультацию
					</button>
				</div>
			</nav>
		</div>

		<!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
		<!--        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">-->
		<!--          <div class="rounded-lg shadow-md  ring-1 ring-black ring-opacity-5 overflow-hidden">-->
		<!--            <div class="px-5 pt-4 flex items-center justify-between">-->
		<!--              <div>-->
		<!--                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-green-500-cyan-600.svg"-->
		<!--                     alt="">-->
		<!--              </div>-->
		<!--              <div class="-mr-2">-->
		<!--                <button type="button"-->
		<!--                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">-->
		<!--                  <span class="sr-only">Close menu</span>-->
		<!--                  &lt;!&ndash; Heroicon name: outline/x &ndash;&gt;-->
		<!--                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"-->
		<!--                       stroke="currentColor" aria-hidden="true">-->
		<!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>-->
		<!--                  </svg>-->
		<!--                </button>-->
		<!--              </div>-->
		<!--            </div>-->
		<!--            <div class="pt-5 pb-6">-->
		<!--              <div class="px-2 space-y-1">-->
		<!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>-->

		<!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>-->

		<!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>-->

		<!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Company</a>-->
		<!--              </div>-->
		<!--              <div class="mt-6 px-5">-->
		<!--                <a href="#"-->
		<!--                   class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700">Start-->
		<!--                  free trial</a>-->
		<!--              </div>-->
		<!--              <div class="mt-6 px-5">-->
		<!--                <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a>-->
		<!--                </p>-->
		<!--              </div>-->
		<!--            </div>-->
		<!--          </div>-->
		<!--        </div>-->
	</div>




	<!--	<div class="corner">-->
<!--		<a href="https://kit.svelte.dev">-->
<!--			<img src={logo} alt="SvelteKit" />-->
<!--		</a>-->
<!--	</div>-->

<!--	<nav>-->
<!--		<svg viewBox="0 0 2 3" aria-hidden="true">-->
<!--			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />-->
<!--		</svg>-->
<!--		<ul>-->
<!--			<li class:active={$page.url.pathname === '/'}>-->
<!--				<a sveltekit:prefetch href="/">Home</a>-->
<!--			</li>-->
<!--			<li class:active={$page.url.pathname === '/about'}>-->
<!--				<a sveltekit:prefetch href="/about">About</a>-->
<!--			</li>-->
<!--			<li class:active={$page.url.pathname === '/todos'}>-->
<!--				<a sveltekit:prefetch href="/todos">Todos</a>-->
<!--			</li>-->
<!--		</ul>-->
<!--		<svg viewBox="0 0 2 3" aria-hidden="true">-->
<!--			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />-->
<!--		</svg>-->
<!--	</nav>-->

<!--	<div class="corner">-->
<!--		&lt;!&ndash; TODO put something else here? github link? &ndash;&gt;-->
<!--	</div>-->
</header>

