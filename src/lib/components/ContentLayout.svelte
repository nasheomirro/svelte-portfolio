<div class="relative max-w-lg sm:max-w-xl md:max-w-screen-lg mx-auto px-6 flex mt-40 min-h-screen">
  <div class="hidden md:block w-1/4 md:w-1/3 xl:w-1/4 h-screen sticky top-0 pt-4">
    <slot name="aside" />
  </div>
  <div class="md:w-2/3 md:pl-6 xl:w-3/4 xl:pl-8">
    <slot name="main" />
  </div>
</div>
