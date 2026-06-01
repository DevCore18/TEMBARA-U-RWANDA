<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=1600');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
        <p class="text-lg md:text-xl">Discover Rwanda through stunning imagery</p>
      </div>
    </section>

    <!-- Filter Buttons -->
    <section class="py-8 bg-white sticky top-0 z-20 shadow-sm">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-wrap justify-center gap-3">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeFilter = category.id"
            :class="activeFilter === category.id ? 'bg-[#2E7D32] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            class="px-6 py-2 rounded-full font-semibold transition-all duration-300">
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-10 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div v-if="filteredPhotos.length === 0" class="text-center py-12">
          <p class="text-gray-500 text-lg">No images in this category yet.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <div 
            v-for="(photo, index) in filteredPhotos" 
            :key="photo.id"
            @click="openLightbox(index)"
            class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

            <div class="aspect-square overflow-hidden bg-gray-200">
              <img 
                :src="photo.url" 
                :alt="photo.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              >
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 class="font-bold text-lg">{{ photo.title }}</h3>
                <p class="text-sm opacity-90">{{ photo.location }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" @click="closeLightbox">
      <div class="relative max-w-5xl w-full mx-4" @click.stop>

        <button @click="closeLightbox"
          class="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300">&times;</button>

        <button v-if="filteredPhotos.length > 1" @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white w-12 h-12 rounded-full hover:bg-white/30 transition-all text-2xl">←</button>

        <button v-if="filteredPhotos.length > 1" @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white w-12 h-12 rounded-full hover:bg-white/30 transition-all text-2xl">→</button>

        <img
          :src="filteredPhotos[currentImageIndex].url"
          :alt="filteredPhotos[currentImageIndex].title"
          class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        >

        <div class="absolute bottom-4 left-0 right-0 text-center text-white">
          <h3 class="text-xl font-bold">{{ filteredPhotos[currentImageIndex].title }}</h3>
          <p class="text-sm">{{ filteredPhotos[currentImageIndex].location }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// Import only the images that exist in your assets folder
import hero from '@/assets/hero.jpg'
import hiking from '@/assets/hiking.jpg'
import i from '@/assets/i.jpg'
import genocide from '@/assets/jenocide.jpg'
import kigali from '@/assets/kigali.jpg'
import lakeIhema from '@/assets/lake ihema.jpg'
import lakeKivu from '@/assets/lake kivu.jpg'
import logo from '@/assets/logo.png'
import market from '@/assets/market.jpg'
import mountains from '@/assets/mountains.jpg'
import murukali from '@/assets/murukali.jpg'
import oip from '@/assets/OIP (1).jpg'
import akagera from '@/assets/Parc_National_d_Akagera.jpg'
import safari from '@/assets/safari.jpg'
import tea from '@/assets/tea.jpg'
import tracking from '@/assets/tracking.jpg'
import volcanoes from '@/assets/volcanoes.jpg'

export default {
  name: 'PhotosView',

  data() {
    return {
      activeFilter: 'all',
      lightboxOpen: false,
      currentImageIndex: 0,

      categories: [
        { id: 'all', name: 'All' },
        { id: 'kigali', name: 'Kigali' },
        { id: 'north', name: 'Northern' },
        { id: 'south', name: 'Southern' },
        { id: 'east', name: 'Eastern' },
        { id: 'west', name: 'Western' },
        { id: 'culture', name: 'Culture' }
      ],

      photos: []
    }
  },

  computed: {
    filteredPhotos() {
      if (this.activeFilter === 'all') return this.photos
      return this.photos.filter(p => p.category === this.activeFilter)
    }
  },

  mounted() {
    this.loadImages()
  },

  methods: {
    loadImages() {
      this.photos = [
        // Kigali category (5 images)
        { id: 1, url: kigali, title: 'Kigali City', location: 'Kigali', category: 'kigali' },
        { id: 2, url: murukali, title: 'Murukali', location: 'Kigali', category: 'kigali' },
        { id: 3, url: genocide, title: 'Genocide Memorial', location: 'Kigali', category: 'kigali' },
        { id: 4, url: market, title: 'Local Market', location: 'Kigali', category: 'kigali' },

        // Northern category (5 images)
        { id: 5, url: volcanoes, title: 'Volcanoes National Park', location: 'Northern', category: 'north' },
        { id: 6, url: mountains, title: 'Mountain Views', location: 'Northern', category: 'north' },
        { id: 7, url: hiking, title: 'Mountain Hiking', location: 'Northern', category: 'north' },
        { id: 8, url: tracking, title: 'Gorilla Tracking', location: 'Northern', category: 'north' },
        { id: 9, url: hero, title: 'Volcanoes Landscape', location: 'Northern', category: 'north' },

        // Southern category (2 images)
        { id: 10, url: tea, title: 'Tea Plantations', location: 'Southern', category: 'south' },
        { id: 11, url: oip, title: 'Nyungwe Forest', location: 'Southern', category: 'south' },

        // Eastern category (3 images)
        { id: 12, url: lakeIhema, title: 'Lake Ihema', location: 'Akagera', category: 'east' },
        { id: 13, url: akagera, title: 'Akagera National Park', location: 'Eastern', category: 'east' },
        { id: 14, url: safari, title: 'Wildlife Safari', location: 'Eastern', category: 'east' },

        // Western category (1 image)
        { id: 15, url: lakeKivu, title: 'Lake Kivu', location: 'Western', category: 'west' },

        // Culture category (2 images)
        { id: 16, url: i, title: 'Cultural Experience', location: 'Rwanda', category: 'culture' },
        { id: 17, url: logo, title: 'Rwandan Heritage', location: 'Rwanda', category: 'culture' }
      ]
    },

    openLightbox(i) {
      this.currentImageIndex = i
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },

    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },

    prevImage() {
      if (this.filteredPhotos.length <= 1) return
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.filteredPhotos.length) %
        this.filteredPhotos.length
    },

    nextImage() {
      if (this.filteredPhotos.length <= 1) return
      this.currentImageIndex =
        (this.currentImageIndex + 1) %
        this.filteredPhotos.length
    }
  }
}
</script>

<style scoped>
.group {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>