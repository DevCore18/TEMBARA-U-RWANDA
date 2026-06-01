<template>
  <footer class="bg-[#2E7D32] text-white pt-12 pb-6 mt-auto">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-3xl">🇷🇼</span>
            <h3 class="text-2xl font-bold">
              <span class="text-white">TEMBERA</span>
              <span class="text-white">U RWANDA</span>
            </h3>
          </div>
          <p class="text-white text-sm leading-relaxed">
            Explore the beauty of the Land of a Thousand Hills. Discover amazing destinations, rich culture, wildlife, and warm hospitality.
          </p>
          <div class="flex space-x-4 mt-6">
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300">
              <span>📘</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300">
              <span>🐦</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300">
              <span>📷</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300">
              <span>▶️</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold text-lg mb-4 text-white">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Home</router-link></li>
            <li><router-link to="/about" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ About Us</router-link></li>
            <li><router-link to="/services" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Services</router-link></li>
            <li><router-link to="/contact" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Contact</router-link></li>
            <li><router-link to="/photos" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Gallery</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-lg mb-4 text-white">Destinations</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/kigali" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Kigali City</router-link></li>
            <li><router-link to="/north-province" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Northern Province</router-link></li>
            <li><router-link to="/west-province" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ Western Province</router-link></li>
            <li><router-link to="/east-province" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ East Province</router-link></li>
            <li><router-link to="/south-province" class="text-white hover:text-white/80 transition duration-300 flex items-center">→ South Province</router-link></li>
          </ul>
        </div>
       
      </div>
      
      <div class="border-t border-white/20 pt-6 text-center text-white text-sm">
        <p>&copy; 2026 Tembera U Rwanda. All rights reserved. | Designed with ❤️ for Rwanda</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribe() {
      if (this.email && this.validateEmail(this.email)) {
        alert('Thank you for subscribing to our newsletter! 🎉')
        this.email = ''
      } else if (this.email) {
        alert('Please enter a valid email address.')
      } else {
        alert('Please enter your email address.')
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
  }
}
</script>
..