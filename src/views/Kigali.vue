<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/2965299/pexels-photo-2965299.jpeg?auto=compress&cs=tinysrgb&w=1600');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Kigali City</h1>
        <p class="text-lg md:text-xl">The Cleanest City in Africa</p>
        <div class="flex gap-3 justify-center mt-6">
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🏙️ Modern City</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🌳 Green Spaces</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🔒 Very Safe</span>
        </div>
      </div>
    </section>

    <!-- Quick Facts Bar -->
    <div class="bg-[#2E7D32] text-white py-4">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div class="text-2xl font-bold">1.2M+</div>
            <div class="text-sm">Population</div>
          </div>
          <div>
            <div class="text-2xl font-bold">1,567m</div>
            <div class="text-sm">Elevation</div>
          </div>
          <div>
            <div class="text-2xl font-bold">24/7</div>
            <div class="text-sm">Safe City</div>
          </div>
          <div>
            <div class="text-2xl font-bold">100+</div>
            <div class="text-sm">Hotels</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">OVERVIEW</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Modern African Gem</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Kigali, the capital city of Rwanda, is a vibrant metropolis known for its cleanliness, 
              safety, and warm hospitality. Nestled among rolling hills, the city offers a perfect 
              blend of modernity and tradition.
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              From world-class convention centers to bustling local markets, Kigali has something 
              for everyone. The city is also a hub for technology and innovation in East Africa.
            </p>
            <div class="grid grid-cols-3 gap-4 mt-6">
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🏙️</span>
                <p class="text-sm font-semibold mt-1">Modern City</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🌳</span>
                <p class="text-sm font-semibold mt-1">Green Spaces</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🔒</span>
                <p class="text-sm font-semibold mt-1">Very Safe</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="../assets/city.jpg" class="rounded-xl h-48 object-cover shadow-lg hover:scale-105 transition duration-300">
            <img src="../assets/jenocide.jpg" class="rounded-xl h-48 object-cover mt-8 shadow-lg hover:scale-105 transition duration-300">
          </div>
        </div>
      </div>
    </section>

    <!-- Top Attractions -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">THINGS TO DO</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Top Attractions in Kigali</h3>
          <p class="text-gray-600 mt-4">Discover the best of Rwanda's capital city</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/jenocide.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🇷🇼 Kigali Genocide Memorial</h4>
              <p class="text-gray-600 text-sm">A powerful memorial honoring the victims of the 1994 genocide against the Tutsi. A must-visit for understanding Rwanda's history.</p>
              <div class="mt-3 text-sm text-[#2E7D32]">📍 Gisozi</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/city.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🏛️ Kigali Convention Centre</h4>
              <p class="text-gray-600 text-sm">Iconic building with a distinctive dome, hosting major conferences and events. Great photo opportunity!</p>
              <div class="mt-3 text-sm text-[#2E7D32]">📍 Kimihurura</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/market.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🛍️ Kimironko Market</h4>
              <p class="text-gray-600 text-sm">Vibrant local market for fresh produce, crafts, and authentic Rwandan goods. Perfect for souvenirs!</p>
              <div class="mt-3 text-sm text-[#2E7D32]">📍 Kimironko</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More Attractions -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <h3 class="text-2xl font-bold text-center text-gray-800 mb-10">More Places to Visit</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-xl transition">
            <span class="text-3xl">🎨</span>
            <div>
              <h4 class="font-semibold text-gray-800">Ivuka Arts Centre</h4>
              <p class="text-sm text-gray-600">Contemporary art gallery showcasing local artists</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-xl transition">
            <span class="text-3xl">🌿</span>
            <div>
              <h4 class="font-semibold text-gray-800">Nyandungu Eco-Park</h4>
              <p class="text-sm text-gray-600">Beautiful wetland and nature reserve for walking and cycling</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-xl transition">
            <span class="text-3xl">⛰️</span>
            <div>
              <h4 class="font-semibold text-gray-800">Mount Kigali</h4>
              <p class="text-sm text-gray-600">Best viewpoint for sunset over the entire city</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-xl transition">
            <span class="text-3xl">🍽️</span>
            <div>
              <h4 class="font-semibold text-gray-800">Restaurant Scene</h4>
              <p class="text-sm text-gray-600">World-class dining from local to international cuisine</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-xl transition">
            <span class="text-3xl">🎵</span>
            <div>
              <h4 class="font-semibold text-gray-800">Live Music</h4>
              <p class="text-sm text-gray-600">Enjoy Rwandan music at various venues across the city</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-xl transition">
            <span class="text-3xl">🏞️</span>
            <div>
              <h4 class="font-semibold text-gray-800">Kigali Heights</h4>
              <p class="text-sm text-gray-600">Shopping mall with great views and restaurants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'KigaliView'
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