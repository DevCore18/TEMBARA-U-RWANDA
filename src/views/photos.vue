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

    <!-- Gallery Grid -->
    <section class="py-10 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div v-if="filteredPhotos.length === 0" class="text-center py-20">
          <p class="text-gray-500 text-lg">Loading images...</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(photo, index) in filteredPhotos" 
            :key="index"
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

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" @click="closeLightbox">
      <div class="relative max-w-5xl w-full mx-4" @click.stop>
        <button @click="closeLightbox" class="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition">&times;</button>
        <button @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition hover:scale-110">←</button>
        <button @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition hover:scale-110">→</button>
        
        <img :src="filteredPhotos[currentImageIndex].url" :alt="filteredPhotos[currentImageIndex].title" class="w-full h-auto max-h-[80vh] object-contain rounded-lg">
        
        <div class="absolute bottom-4 left-0 right-0 text-center text-white">
          <h3 class="font-bold text-xl">{{ filteredPhotos[currentImageIndex].title }}</h3>
          <p class="text-gray-300">{{ filteredPhotos[currentImageIndex].location }}</p>
        </div>
        
        <div class="absolute top-4 right-16 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {{ currentImageIndex + 1 }} / {{ filteredPhotos.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      return this.photos.filter(photo => photo.category === this.activeFilter)
    }
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    loadImages() {
      // Try to load images using different methods
      const imageFiles = [
        // KIGALI
        { name: 'kigali.jpg', title: 'Kigali City', location: 'Kigali', category: 'kigali' },
        { name: 'murukali.jpg', title: 'Murukali', location: 'Kigali', category: 'kigali' },
        { name: 'city.jpg', title: 'City View', location: 'Kigali', category: 'kigali' },
        { name: 'jenocide.jpg', title: 'Genocide Memorial', location: 'Kigali', category: 'kigali' },
        { name: 'market.jpg', title: 'Local Market', location: 'Kigali', category: 'kigali' },
        
        // NORTHERN
        { name: 'bisoke.jpg', title: 'Mount Bisoke', location: 'Northern Province', category: 'north' },
        { name: 'caves.jpg', title: 'Musanze Caves', location: 'Northern Province', category: 'north' },
        { name: 'hiking.jpg', title: 'Mountain Hiking', location: 'Northern Province', category: 'north' },
        { name: 'mountains.jpg', title: 'Rolling Hills', location: 'Northern Province', category: 'north' },
        { name: 'hero.jpg', title: 'Volcanoes Park', location: 'Northern Province', category: 'north' },
        
        // SOUTHERN
        { name: 'conopy.jpg', title: 'Canopy Walk', location: 'Nyungwe Forest', category: 'south' },
        { name: 'tea.jpg', title: 'Tea Plantations', location: 'Southern Province', category: 'south' },
        { name: 'beanches.jpg', title: 'Beautiful Beaches', location: 'Southern Province', category: 'south' },
        
        // EASTERN
        { name: 'lake ihema.jpg', title: 'Lake Ihema', location: 'Akagera Park', category: 'east' },
        { name: 'Parc_National_d_Akager...', title: 'Akagera National Park', location: 'Eastern Province', category: 'east' },
        { name: 'safari.jpg', title: 'Wildlife Safari', location: 'Eastern Province', category: 'east' },
        
        // WESTERN
        { name: 'lake kivu.jpg', title: 'Lake Kivu Sunset', location: 'Western Province', category: 'west' },
        { name: 'congo.jpg', title: 'Congo Nile Trail', location: 'Western Province', category: 'west' },
        
        // CULTURE
        { name: 'cultural.jpg', title: 'Traditional Dance', location: 'Rwanda', category: 'culture' },
        { name: 'i.jpg', title: 'Coffee', location: 'Rwanda', category: 'culture' }
      ]
      
      for (let img of imageFiles) {
        try {
          // Try different path formats
          let imageUrl = null
          
          // Try method 1: require
          try {
            imageUrl = require(`@/assets/${img.name}`)
          } catch(e) {
            // Try method 2: different path
            try {
              imageUrl = require(`../assets/${img.name}`)
            } catch(e2) {
              // Try method 3: direct path
              imageUrl = `/src/assets/${img.name}`
            }
          }
          
          this.photos.push({
            url: imageUrl,
            title: img.title,
            location: img.location,
            category: img.category
          })
        } catch(e) {
          console.log(`Could not load: ${img.name}`)
        }
      }
      
      // If no images loaded, add placeholder images
      if (this.photos.length === 0) {
        this.photos = [
          { url: 'https://placehold.co/600x600/2E7D32/white?text=Kigali+City', title: 'Kigali City', location: 'Kigali', category: 'kigali' },
          { url: 'https://placehold.co/600x600/2E7D32/white?text=Gorilla', title: 'Mountain Gorilla', location: 'Northern Province', category: 'north' },
          { url: 'https://placehold.co/600x600/2E7D32/white?text=Lake+Kivu', title: 'Lake Kivu', location: 'Western Province', category: 'west' },
          { url: 'https://placehold.co/600x600/2E7D32/white?text=Akagera', title: 'Akagera National Park', location: 'Eastern Province', category: 'east' },
          { url: 'https://placehold.co/600x600/2E7D32/white?text=Nyungwe', title: 'Nyungwe Forest', location: 'Southern Province', category: 'south' },
          { url: 'https://placehold.co/600x600/2E7D32/white?text=Culture', title: 'Traditional Dance', location: 'Rwanda', category: 'culture' }
        ]
      }
    },
    openLightbox(index) {
      this.currentImageIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.filteredPhotos.length) % this.filteredPhotos.length
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.filteredPhotos.length
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeIn 0.5s ease-out;
}
</style>
.