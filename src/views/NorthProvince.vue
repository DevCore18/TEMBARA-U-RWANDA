<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/2475026/pexels-photo-2475026.jpeg?auto=compress&cs=tinysrgb&w=1600');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Northern Province</h1>
        <p class="text-lg md:text-xl">Land of Volcanoes and Mountain Gorillas</p>
        <div class="flex gap-3 justify-center mt-6">
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🦍 Gorilla Trekking</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🌋 Volcanoes</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🏔️ Hiking</span>
        </div>
      </div>
    </section>

    <!-- Quick Facts Bar -->
    <div class="bg-[#2E7D32] text-white py-4">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div class="text-2xl font-bold">160 km²</div>
            <div class="text-sm">Park Size</div>
          </div>
          <div>
            <div class="text-2xl font-bold">12</div>
            <div class="text-sm">Gorilla Families</div>
          </div>
          <div>
            <div class="text-2xl font-bold">5</div>
            <div class="text-sm">Volcanoes</div>
          </div>
          <div>
            <div class="text-2xl font-bold">$1,500</div>
            <div class="text-sm">Gorilla Permit</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">DISCOVER</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gorilla Trekking Paradise</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              The Northern Province is home to the famous Volcanoes National Park, where you can trek 
              to see endangered mountain gorillas in their natural habitat. This is one of the only 
              places in the world where you can experience these magnificent creatures up close.
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              The region features five majestic volcanoes: Karisimbi, Bisoke, Muhabura, Gahinga, and 
              Sabyinyo. It's rich in biodiversity and cultural heritage, including the famous 
              Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund.
            </p>
            <div class="grid grid-cols-3 gap-4 mt-6">
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🦍</span>
                <p class="text-sm font-semibold mt-1">Gorillas</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🌋</span>
                <p class="text-sm font-semibold mt-1">Volcanoes</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🏔️</span>
                <p class="text-sm font-semibold mt-1">Hiking</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="../assets/caves.jpg" class="rounded-xl h-48 object-cover shadow-lg hover:scale-105 transition duration-300">
            <img src="../assets/bisoke.jpg" class="rounded-xl h-48 object-cover mt-8 shadow-lg hover:scale-105 transition duration-300">
          </div>
        </div>
      </div>
    </section>

    <!-- Top Attractions -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">ATTRACTIONS</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Must-Visit Places</h3>
          <p class="text-gray-600 mt-4">Experience the best of Northern Province</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/mountains.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🦍 Volcanoes National Park</h4>
              <p class="text-gray-600 text-sm">Home to half of the world's remaining mountain gorillas. Trekking permits are limited, so book early!</p>
              <div class="mt-3 text-sm text-[#2E7D32] font-semibold">⭐ World Heritage Site</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/bisoke.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🌋 Mount Bisoke</h4>
              <p class="text-gray-600 text-sm">Hike to the stunning crater lake at the summit. A challenging but rewarding 4-5 hour trek.</p>
              <div class="mt-3 text-sm text-[#2E7D32]">📏 3,711 meters</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/caves.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🕯️ Musanze Caves</h4>
              <p class="text-gray-600 text-sm">Explore ancient volcanic caves that once served as refuge for local communities.</p>
              <div class="mt-3 text-sm text-[#2E7D32]">📍 Near Musanze town</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Activities Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">ACTIVITIES</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Things to Do</h3>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🦍</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Gorilla Trekking</h4>
              <p class="text-gray-600">$1,500 permit - Limited to 8 people per gorilla family - 1 hour with the gorillas</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🐒</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Golden Monkey Tracking</h4>
              <p class="text-gray-600">$100 permit - See these playful primates in bamboo forests</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🏔️</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Volcano Hiking</h4>
              <p class="text-gray-600">Climb Karisimbi (2-day) or Bisoke (1-day) for incredible views</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🏡</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Iby'Iwacu Village Visit</h4>
              <p class="text-gray-600">Experience traditional Rwandan culture and local life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NorthProvinceView'
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