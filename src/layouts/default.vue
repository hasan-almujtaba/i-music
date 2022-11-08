<template>
  <div
    class="bg-[#f8fafc] sm:max-w-[340px] mx-auto relative overflow-y-auto h-screen"
  >
    <!-- Navigation -->
    <Navigation class="mb-[42px]" />
    <!-- Navigation -->

    <!-- Page Content -->
    <RouterView v-slot="{ Component }">
      <KeepAlive :key="$route.fullPath">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
    <!-- Page Content -->
  </div>
</template>
