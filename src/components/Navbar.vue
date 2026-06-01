<template>
  <nav class="bg-[#2E7D32] shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <span class="text-3xl">🇷🇼</span>
          <span class="text-2xl font-bold">
            <span class="text-white">TEMBERA</span>
            <span class="text-white">U RWANDA</span>
          </span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link to="/" class="text-white hover:text-white/80 font-semibold transition duration-300">HOME</router-link>
          <router-link to="/about" class="text-white hover:text-white/80 font-semibold transition duration-300">ABOUT</router-link>
          
          <!-- Destinations Dropdown -->
          <div class="relative group">
            <button class="text-white hover:text-white/80 font-semibold transition duration-300 flex items-center">
              DESTINATIONS
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 w-56 z-10 border border-gray-100">
              <router-link to="/kigali" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition border-b border-gray-100">
                <span class="font-semibold">🏙️Kigali City</span>
                <p class="text-xs text-gray-500">Capital City</p>
              </router-link>
              <router-link to="/north-province" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition border-b border-gray-100">
                <span class="font-semibold">🌋 Northern Province</span>
                <p class="text-xs text-gray-500">Volcanoes & Gorillas</p>
              </router-link>
              <router-link to="/south-province" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition border-b border-gray-100">
                <span class="font-semibold">🌳 Southern Province</span>
                <p class="text-xs text-gray-500">Nyungwe Forest</p>
              </router-link>
              <router-link to="/east-province" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition border-b border-gray-100">
                <span class="font-semibold">🦒 Eastern Province</span>
                <p class="text-xs text-gray-500">Akagera Park</p>
              </router-link>
              <router-link to="/west-province" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition">
                <span class="font-semibold">🏖️ Western Province</span>
                <p class="text-xs text-gray-500">Lake Kivu</p>
              </router-link>
            </div>
          </div>
          
          <!-- Gallery Dropdown -->
          <div class="relative group">
            <button class="text-white hover:text-white/80 font-semibold transition duration-300 flex items-center">
              GALLERY
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 w-48 z-10 border border-gray-100">
              <router-link to="/photos" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition border-b border-gray-100">
                📸 Photos
              </router-link>
              <router-link to="/videos" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32] transition">
                🎥 Videos
              </router-link>
            </div>
          </div>
          
          <router-link to="/services" class="text-white hover:text-white/80 font-semibold transition duration-300">SERVICES</router-link>
          <router-link to="/contact" class="text-white hover:text-white/80 font-semibold transition duration-300">CONTACT</router-link>
        </div>

        <!-- Desktop CTA Button -->
        <div class="hidden lg:block">
          <button class="bg-white text-[#2E7D32] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
            PLAN YOUR TRIP ✈️
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/20">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden pb-4 space-y-3">
        <router-link to="/" class="block text-white hover:text-white/80 font-semibold py-2 px-3 rounded-lg hover:bg-white/20" @click="mobileMenuOpen = false">
          HOME
        </router-link>
        <router-link to="/about" class="block text-white hover:text-white/80 font-semibold py-2 px-3 rounded-lg hover:bg-white/20" @click="mobileMenuOpen = false">
          ABOUT
        </router-link>
        
        <div class="px-3">
          <button @click="showDestinations = !showDestinations" class="flex justify-between items-center w-full text-white hover:text-white/80 font-semibold py-2">
            DESTINATIONS
            <svg class="w-4 h-4 transition-transform text-white" :class="{ 'rotate-180': showDestinations }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="showDestinations" class="pl-4 space-y-2 mt-2">
            <router-link to="/kigali" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">🏙️ Kigali City</router-link>
            <router-link to="/north-province" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">🌋 Northern Province</router-link>
            <router-link to="/south-province" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">🌳 Southern Province</router-link>
            <router-link to="/east-province" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">🦒 Eastern Province</router-link>
            <router-link to="/west-province" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">🏖️ Western Province</router-link>
          </div>
        </div>
        
        <div class="px-3">
          <button @click="showGallery = !showGallery" class="flex justify-between items-center w-full text-white hover:text-white/80 font-semibold py-2">
            GALLERY
            <svg class="w-4 h-4 transition-transform text-white" :class="{ 'rotate-180': showGallery }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="showGallery" class="pl-4 space-y-2 mt-2">
            <router-link to="/photos" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">📸 Photos</router-link>
            <router-link to="/videos" class="block text-white/90 py-2 text-sm hover:text-white" @click="mobileMenuOpen = false">🎥 Videos</router-link>
          </div>
        </div>
        
        <router-link to="/services" class="block text-white hover:text-white/80 font-semibold py-2 px-3 rounded-lg hover:bg-white/20" @click="mobileMenuOpen = false">
          SERVICES
        </router-link>
        <router-link to="/contact" class="block text-white hover:text-white/80 font-semibold py-2 px-3 rounded-lg hover:bg-white/20" @click="mobileMenuOpen = false">
          CONTACT
        </router-link>
        
        <div class="px-3 pt-4">
          <button class="w-full bg-white text-[#2E7D32] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            PLAN YOUR TRIP ✈️
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      showDestinations: false,
      showGallery: false
    }
  },
  watch: {
    '$route'() {
      this.mobileMenuOpen = false
      this.showDestinations = false
      this.showGallery = false
    }
  }
}
</script>

<style scoped>
.router-link-active {
  color: white !important;
  font-weight: 700 !important;
  background-color: rgba(255,255,255,0.1);
}
</style>