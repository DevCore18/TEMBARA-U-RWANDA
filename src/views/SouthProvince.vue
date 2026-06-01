<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Southern Province</h1>
        <p class="text-lg md:text-xl">Rainforests, Chimpanzees & Royal Heritage</p>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-sm tracking-[3px] text-[#E03A3A] mb-3 font-semibold">DISCOVER</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ancient Rainforest Adventure</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              The Southern Province is home to Nyungwe National Park, one of Africa's oldest rainforests, 
              dating back over 1 million years. This biodiversity hotspot is famous for chimpanzee tracking 
              and the stunning canopy walkway.
            </p>
            <p class="text-gray-600 leading-relaxed">
              It also features the Royal Palace at Nyanza, showcasing Rwanda's monarchical history, 
              and beautiful tea plantations that stretch across the rolling hills.
            </p>
            <div class="mt-6 flex gap-4">
              <div class="flex items-center gap-2">
                <span class="text-[#E03A3A] text-2xl">🐵</span>
                <span class="text-gray-700">Chimpanzees</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#E03A3A] text-2xl">🌿</span>
                <span class="text-gray-700">Canopy Walk</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#E03A3A] text-2xl">👑</span>
                <span class="text-gray-700">Royal History</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
        <img src="../assets/OIP (1).jpg" class="rounded-xl h-48 object-cover shadow-lg hover:scale-105 transition duration-300">
            <img src="../assets/OIP (1).jpg" class="rounded-xl h-48 object-cover mt-8 shadow-lg hover:scale-105 transition duration-300">
          </div>
        </div>
      </div>
    </section>

    <!-- Key Attractions -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#E03A3A] mb-3 font-semibold">ATTRACTIONS</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Must-Visit Places</h3>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/OIP (1).jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🌳 Nyungwe National Park</h4>
              <p class="text-gray-600 text-sm">One of Africa's oldest rainforests with 13 primate species including chimpanzees and colobus monkeys.</p>
              <div class="mt-3 text-sm text-[#E03A3A] font-semibold">⭐ 1,000+ years old</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/OIP (1).jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">🚶 Canopy Walkway</h4>
              <p class="text-gray-600 text-sm">Walk 50 meters above the forest floor on a 200-meter long suspended bridge. Breathtaking views!</p>
              <div class="mt-3 text-sm text-[#E03A3A]">📏 70m above ground</div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img src="../assets/murukali.jpg" class="h-48 w-full object-cover">
            <div class="p-5">
              <h4 class="text-xl font-bold text-gray-800 mb-2">👑 Royal Palace of Nyanza</h4>
              <p class="text-gray-600 text-sm">Explore the traditional royal court and learn about Rwanda's fascinating monarchy history.</p>
              <div class="mt-3 text-sm text-[#E03A3A]">📍 Nyanza district</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Activities -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <h3 class="text-2xl font-bold text-center text-gray-800 mb-10">Popular Activities</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🐵</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Chimpanzee Trekking</h4>
              <p class="text-gray-600">$150 permit - Early morning tracking of these intelligent primates</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🐒</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Colobus Monkey Trekking</h4>
              <p class="text-gray-600">See large troops of black-and-white colobus monkeys</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🌿</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Canopy Walk Experience</h4>
              <p class="text-gray-600">$60 - Walk among the treetops for incredible forest views</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <span class="text-4xl">🍃</span>
            <div>
              <h4 class="font-bold text-gray-800 text-lg">Tea Plantation Tour</h4>
              <p class="text-gray-600">Visit the stunning Gisakura tea estate</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'SouthProvinceView'
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