<template>
  <div class="font-sans">
    <section class="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=1600');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">About Us</h1>
        <p class="text-lg md:text-xl">Discover the story behind Tembera U Rwanda</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">OUR STORY</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Welcome to the Land of a Thousand Hills</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Tembera U Rwanda was founded with a simple mission: to share the breathtaking beauty, 
              rich culture, and warm hospitality of Rwanda with the world.
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              The name "Tembera" means "to explore" or "to travel around" in Kinyarwanda, capturing 
              the essence of what we want every visitor to experience - the joy of discovering Rwanda's 
              hidden gems.
            </p>
            <p class="text-gray-600 leading-relaxed">
              From the lush rainforests home to endangered mountain gorillas to the serene shores of 
              Lake Kivu, every corner of our beautiful country tells a unique story. We're here to help 
              you experience them all.
            </p>
          </div>
          <div>
            <img 
              src="../assets/murukali.jpg" 
              alt="Rwandan people"
              class="w-full rounded-2xl shadow-2xl object-cover h-[400px] hover:scale-105 transition duration-500"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed">
              To inspire and guide travelers to discover the authentic beauty of Rwanda, 
              promote sustainable tourism, and contribute to local communities while 
              preserving our natural heritage.
            </p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div class="text-5xl mb-4">👁️</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed">
              To make Rwanda a top tourism destination in Africa, recognized for its 
              exceptional wildlife, stunning landscapes, unforgettable experiences, and 
              world-class hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">OUR VALUES</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">What We Stand For</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 hover:shadow-xl transition-all duration-300 rounded-xl hover:-translate-y-2">
            <div class="text-5xl mb-3">🌱</div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Sustainability</h4>
            <p class="text-gray-600">Committed to eco-friendly tourism that protects our environment for future generations.</p>
          </div>
          <div class="text-center p-6 hover:shadow-xl transition-all duration-300 rounded-xl hover:-translate-y-2">
            <div class="text-5xl mb-3">🤝</div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Community First</h4>
            <p class="text-gray-600">Supporting local communities and ensuring tourism benefits everyone.</p>
          </div>
          <div class="text-center p-6 hover:shadow-xl transition-all duration-300 rounded-xl hover:-translate-y-2">
            <div class="text-5xl mb-3">⭐</div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Authenticity</h4>
            <p class="text-gray-600">Providing genuine experiences that showcase the real Rwanda.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#2E7D32] text-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <p class="text-sm uppercase tracking-wide">Destinations</p>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">10k+</div>
            <p class="text-sm uppercase tracking-wide">Happy Travelers</p>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">15+</div>
            <p class="text-sm uppercase tracking-wide">Years of Experience</p>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">100%</div>
            <p class="text-sm uppercase tracking-wide">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
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
.