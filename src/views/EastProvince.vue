<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../assets/i.jpg');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Eastern Province</h1>
        <p class="text-lg md:text-xl">Home of Akagera National Park - Rwanda's Savannah Wilderness</p>
        <div class="flex gap-3 justify-center mt-6">
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🦁 Big Five</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🦒 Safari</span>
          <span class="bg-[#2E7D32]/80 px-4 py-1 rounded-full text-sm">🚤 Boat Tours</span>
        </div>
      </div>
    </section>

    <!-- Quick Facts Bar -->
    <div class="bg-[#2E7D32] text-white py-4">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div class="text-2xl font-bold">1,122 km²</div>
            <div class="text-sm">Park Size</div>
          </div>
          <div>
            <div class="text-2xl font-bold">500+</div>
            <div class="text-sm">Bird Species</div>
          </div>
          <div>
            <div class="text-2xl font-bold">8,000+</div>
            <div class="text-sm">Large Mammals</div>
          </div>
          <div>
            <div class="text-2xl font-bold">$100</div>
            <div class="text-sm">Entry Fee</div>
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
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Rwanda's Savannah Wilderness</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              The Eastern Province is Rwanda's premier wildlife destination, featuring the magnificent 
              Akagera National Park. Unlike the mountainous terrain of other regions, the east offers 
              rolling savannahs, acacia woodlands, and swamps teeming with wildlife.
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              Akagera is home to the "Big Five" - lions, leopards, elephants, rhinos, and buffalo. 
              The park has successfully reintroduced lions and rhinos, making it one of the best 
              safari destinations in East Africa.
            </p>
            <div class="grid grid-cols-3 gap-4 mt-6">
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🦁</span>
                <p class="text-sm font-semibold mt-1">Lions</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🐘</span>
                <p class="text-sm font-semibold mt-1">Elephants</p>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <span class="text-3xl">🦏</span>
                <p class="text-sm font-semibold mt-1">Rhinos</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="../assets/visits .jpg" class="rounded-xl h-48 object-cover shadow-lg hover:scale-105 transition duration-300">
            <img src="../assets/lake ihema.jpg" class="rounded-xl h-48 object-cover mt-8 shadow-lg hover:scale-105 transition duration-300">
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
          <p class="text-gray-600 mt-4">Experience the best of Eastern Province</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/Parc_National_d_Akagera.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🦁 Akagera National Park</h4>
              <p class="text-gray-600 text-sm">Experience the Big Five in Rwanda's only savannah park. Over 1,122 square kilometers of wilderness.</p>
              <div class="mt-3 text-sm text-[#2E7D32] font-semibold">⭐ 8,000+ sq km</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/lake ihema.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🚤 Lake Ihema</h4>
              <p class="text-gray-600 text-sm">Boat safaris to see hippos, crocodiles, and incredible birdlife including the rare shoebill stork.</p>
              <div class="mt-3 text-sm text-[#2E7D32]">🚤 Boat Tours Available</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="https://images.pexels.com/photos/6554240/pexels-photo-6554240.jpeg?auto=compress&cs=tinysrgb&w=800" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🦒 Game Drives</h4>
              <p class="text-gray-600 text-sm">Morning and evening drives to spot elephants, giraffes, zebras, antelopes, and predators.</p>
              <div class="mt-3 text-sm text-[#2E7D32]">🕒 Dawn & Dusk Safaris</div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script>
export default {
  name: 'EastProvinceView'
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