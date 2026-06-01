<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.nyungweforestnationalpark.org%2Flake-kivu-a-must-visit-destination-in-rwanda%2F&ved=0CBYQjRxqFwoTCKDrydP545QDFQAAAAAdAAAAABAG&opi=89978449');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Western Province</h1>
        <p class="text-lg md:text-xl">Lake Kivu - Africa's Gem of Serenity</p>
        <div class="flex gap-3 justify-center mt-6">
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🏖️ Beaches</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🚤 Boat Cruises</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">☕ Tea Tours</span>
        </div>
      </div>
    </section>

    <!-- Quick Facts Bar -->
    <div class="bg-[#2E7D32] text-white py-4">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div class="text-2xl font-bold">2,700 km²</div>
            <div class="text-sm">Lake Area</div>
          </div>
          <div>
            <div class="text-2xl font-bold">227 km</div>
            <div class="text-sm">Congo Nile Trail</div>
          </div>
          <div>
            <div class="text-2xl font-bold">20+</div>
            <div class="text-sm">Islands</div>
          </div>
          <div>
            <div class="text-2xl font-bold">Safe</div>
            <div class="text-sm">For Swimming</div>
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
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Serene Lakes & Green Hills</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              The Western Province features the stunning Lake Kivu, one of Africa's Great Lakes, 
              known for its pristine beaches and resort towns. The lake is completely safe for 
              swimming with no bilharzia or hippos!
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              The region is also famous for its rolling tea plantations, coffee farms, and the 
              Congo Nile Trail - a 227km scenic route perfect for hiking and biking along the 
              lake's shores.
            </p>
            <div class="grid grid-cols-3 gap-4 mt-6">
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🏖️</span>
                <p class="text-sm font-semibold mt-1">Beaches</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🚶</span>
                <p class="text-sm font-semibold mt-1">Congo Trail</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">☕</span>
                <p class="text-sm font-semibold mt-1">Tea & Coffee</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="../assets/tea.jpg" class="rounded-xl h-48 object-cover shadow-lg hover:scale-105 transition duration-300">
            <img src="../assets/beanches.jpg" class="rounded-xl h-48 object-cover mt-8 shadow-lg hover:scale-105 transition duration-300">
          </div>
        </div>
      </div>
    </section>

    <!-- Top Attractions -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">ATTRACTIONS</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Lake Kivu Experience</h3>
          <p class="text-gray-600 mt-4">Experience the best of Western Province</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/beanches.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🏖️ Lake Kivu Beaches</h4>
              <p class="text-gray-600 text-sm">Relax on pristine sandy beaches, swim in safe waters, and enjoy stunning sunsets over the lake.</p>
              <div class="mt-3 text-sm text-[#2E7D32] font-semibold">🏊 Safe for swimming</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/congo.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🚴 Congo Nile Trail</h4>
              <p class="text-gray-600 text-sm">Multi-day hiking and biking adventure along the lake. Stunning views and local village experiences.</p>
              <div class="mt-3 text-sm text-[#2E7D32] font-semibold">📏 227 km trail</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/tea.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">☕ Tea Plantations</h4>
              <p class="text-gray-600 text-sm">Tour scenic tea estates and coffee farms. Learn about processing and taste fresh Rwandan tea.</p>
              <div class="mt-3 text-sm text-[#2E7D32] font-semibold">🍃 Gisovu & Pfunda</div>
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
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Things to Do on Lake Kivu</h3>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🚤</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Boat Cruises</h4>
              <p class="text-gray-600">Sunset cruises and island hopping tours to Napoleon Island</p>
              <p class="text-[#2E7D32] font-semibold mt-1">$40 per person</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🚣</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Kayaking</h4>
              <p class="text-gray-600">Explore the lake's coves and hidden beaches by kayak</p>
              <p class="text-[#2E7D32] font-semibold mt-1">$25 per hour</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🏊</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Swimming</h4>
              <p class="text-gray-600">Safe freshwater swimming - no bilharzia or dangerous animals</p>
              <p class="text-[#2E7D32] font-semibold mt-1">Free on public beaches</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🏡</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Lakefront Resorts</h4>
              <p class="text-gray-600">Stay at beautiful hotels in Gisenyi, Kibuye, or Cyangugu</p>
              <p class="text-[#2E7D32] font-semibold mt-1">$50-300 per night</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'WestProvinceView'
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