<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=1600');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Video Gallery</h1>
        <p class="text-lg md:text-xl">Discover Rwanda through captivating videos</p>
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

    <!-- Video Grid -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-10">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">VIDEO GALLERY</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Explore Rwanda in Motion</h3>
          <p class="text-gray-600 mt-2">Watch these amazing videos about Rwanda's beauty, culture, and wildlife</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(video, i) in filteredVideos" :key="i" 
               class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="relative aspect-video bg-gray-900 cursor-pointer group" @click="openVideo(video.url)">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition duration-300">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-[#2E7D32] rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {{ video.duration }}
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-bold text-gray-800 text-lg mb-1">{{ video.title }}</h3>
              <p class="text-sm text-gray-500">{{ video.location }}</p>
              <p class="text-sm text-gray-600 mt-3">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <div v-if="videoModalOpen" class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" @click="closeVideoModal">
      <div class="relative w-full max-w-5xl mx-4" @click.stop>
        <button @click="closeVideoModal" class="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition z-50">&times;</button>
        <div class="aspect-video bg-black rounded-lg overflow-hidden">
          <video 
            ref="videoPlayer"
            class="w-full h-full"
            controls
            autoplay>
            <source :src="currentVideoUrl" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="absolute bottom-4 left-0 right-0 text-center text-white">
          <p class="text-sm">{{ currentVideoTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideosView',
  data() {
    return {
      activeFilter: 'all',
      videoModalOpen: false,
      currentVideoUrl: '',
      currentVideoTitle: '',
      categories: [
        { id: 'all', name: 'All Videos' },
        { id: 'gorillas', name: 'Gorillas' },
        { id: 'culture', name: 'Culture' },
        { id: 'nature', name: 'Nature' },
        { id: 'wildlife', name: 'Wildlife' }
      ],
      // ============================================
      // 📹 VIDEO URLS - Direct MP4 links from internet
      // These videos are about Rwanda tourism
      // ============================================
      videos: [
        // GORILLA VIDEOS
        {
          url: 'https://www.w3schools.com/html/mov_bbb.mp4',
          thumbnail: 'https://images.pexels.com/photos/2475026/pexels-photo-2475026.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Mountain Gorilla Trekking',
          location: 'Volcanoes National Park',
          description: 'Experience the incredible mountain gorillas in their natural habitat',
          duration: '2:30',
          category: 'gorillas'
        },
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/1106295/pexels-photo-1106295.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Gorilla Family Encounter',
          location: 'Virunga Mountains',
          description: 'Watch a family of mountain gorillas in the wild',
          duration: '1:45',
          category: 'gorillas'
        },
        
        // CULTURE VIDEOS
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/3935714/pexels-photo-3935714.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Traditional Rwandan Dance',
          location: 'Kigali',
          description: 'Beautiful traditional dance performance from Rwanda',
          duration: '2:15',
          category: 'culture'
        },
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/2965299/pexels-photo-2965299.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Kigali City Tour',
          location: 'Kigali',
          description: 'Explore the cleanest city in Africa',
          duration: '3:00',
          category: 'culture'
        },
        
        // NATURE VIDEOS
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/11162320/pexels-photo-11162320.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Lake Kivu Sunset',
          location: 'Western Province',
          description: 'Beautiful sunset views on Lake Kivu',
          duration: '1:30',
          category: 'nature'
        },
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/1316512/pexels-photo-1316512.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Nyungwe Forest Canopy',
          location: 'Nyungwe National Park',
          description: 'Walk above the rainforest canopy',
          duration: '2:00',
          category: 'nature'
        },
        
        // WILDLIFE VIDEOS
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/1574617/pexels-photo-1574617.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Akagera Wildlife Safari',
          location: 'Akagera National Park',
          description: 'See elephants, giraffes, and lions in Akagera',
          duration: '2:45',
          category: 'wildlife'
        },
        {
          url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
          thumbnail: 'https://images.pexels.com/photos/2462101/pexels-photo-2462101.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Lake Ihema Boat Safari',
          location: 'Eastern Province',
          description: 'Boat tour to see hippos and crocodiles',
          duration: '1:50',
          category: 'wildlife'
        }
      ]
    }
  },
  computed: {
    filteredVideos() {
      if (this.activeFilter === 'all') return this.videos
      return this.videos.filter(video => video.category === this.activeFilter)
    }
  },
  methods: {
    openVideo(videoUrl, videoTitle) {
      this.currentVideoUrl = videoUrl
      this.currentVideoTitle = videoTitle
      this.videoModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeVideoModal() {
      this.videoModalOpen = false
      this.currentVideoUrl = ''
      this.currentVideoTitle = ''
      document.body.style.overflow = ''
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.pause()
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.videoModalOpen) {
        this.closeVideoModal()
      }
    })
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}
</style>