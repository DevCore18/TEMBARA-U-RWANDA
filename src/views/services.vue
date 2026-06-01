<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <!-- Hero Section -->
    <section class="relative bg-green-800 text-white py-20 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Tourism Services</h1>
        <p class="text-xl md:text-2xl max-w-3xl animate-slide-up">
          Experience the beauty of Rwanda with our premium travel services. From mountain gorillas to serene lakes, we make your journey unforgettable.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="h-48 overflow-hidden">
            <img src="../assets/tracking.jpg" alt="Gorilla Trekking" class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-2"></span>
              <h3 class="text-2xl font-semibold text-gray-800">Gorilla Trekking</h3>
            </div>
            <p class="text-gray-600 mb-4">Encounter mountain gorillas in Volcanoes National Park. Guided treks with expert rangers, permits arranged.</p>
            <ul class="text-sm text-gray-500 space-y-1 mb-4">
              <li>✓ Expert guides & permits included</li>
              <li>✓ Small group experience</li>
              <li>✓ Conservation contribution</li>
            </ul>
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Book Now →</button>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="h-48 overflow-hidden">
            <img src="../assets/conopy.jpg" alt="Nyungwe Canopy Walk" class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-2"></span>
              <h3 class="text-2xl font-semibold text-gray-800">Nyungwe Canopy</h3>
            </div>
            <p class="text-gray-600 mb-4">Walk above the rainforest on Africa's only canopy walkway. See monkeys, birds, and rare orchids.</p>
            <ul class="text-sm text-gray-500 space-y-1 mb-4">
              <li>✓ 70m high suspension bridge</li>
              <li>✓ Chimpanzee tracking option</li>
              <li>✓ Guided nature walks</li>
            </ul>
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Explore →</button>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="h-48 overflow-hidden">
            <img src="../assets/beanches.jpg" alt="Lake Kivu" class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-2"></span>
              <h3 class="text-2xl font-semibold text-gray-800">Lake Kivu Retreat</h3>
            </div>
            <p class="text-gray-600 mb-4">Relax on the shores of Lake Kivu. Boat tours, kayaking, beach resorts, and stunning sunsets.</p>
            <ul class="text-sm text-gray-500 space-y-1 mb-4">
              <li>✓ Island hopping trips</li>
              <li>✓ Water sports & fishing</li>
              <li>✓ Lakeside accommodation</li>
            </ul>
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Reserve →</button>
          </div>
        </div>

        <!-- Service Card 4 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="h-48 overflow-hidden">
            <img src="../assets/safari.jpg" alt="Akagera Safari" class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-2"></span>
              <h3 class="text-2xl font-semibold text-gray-800">Akagera Safari</h3>
            </div>
            <p class="text-gray-600 mb-4">Big Five safari in Akagera National Park. Game drives, boat safaris, and night tours.</p>
            <ul class="text-sm text-gray-500 space-y-1 mb-4">
              <li>✓ Lions, elephants, giraffes</li>
              <li>✓ Boat safari on Lake Ihema</li>
              <li>✓ Luxury & budget lodges</li>
            </ul>
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Safari →</button>
          </div>
        </div>

        <!-- Service Card 5 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="h-48 overflow-hidden">
            <img src="../assets/ciltural.jpg" alt="Cultural Tours" class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-2"></span>
              <h3 class="text-2xl font-semibold text-gray-800">Cultural Immersion</h3>
            </div>
            <p class="text-gray-600 mb-4">Discover Rwanda's rich heritage. Village visits, drumming ceremonies, and local cuisine.</p>
            <ul class="text-sm text-gray-500 space-y-1 mb-4">
              <li>✓ Iby'iwacu cultural village</li>
              <li>✓ King's Palace Museum</li>
              <li>✓ Traditional cooking class</li>
            </ul>
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Learn →</button>
          </div>
        </div>

        <!-- Service Card 6 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="h-48 overflow-hidden">
            <img src="../assets/hiking.jpg" alt="Hiking" class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-2"></span>
              <h3 class="text-2xl font-semibold text-gray-800">Volcano Hiking</h3>
            </div>
            <p class="text-gray-600 mb-4">Climb Mount Bisoke or Karisimbi. Stunning crater lakes and panoramic views of the Virunga range.</p>
            <ul class="text-sm text-gray-500 space-y-1 mb-4">
              <li>✓ Guided overnight hikes</li>
              <li>✓ Crater lake visits</li>
              <li>✓ Camping equipment provided</li>
            </ul>
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Hike →</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Us -->
    <section class="py-16 container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Why Travel With Us?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="text-4xl mb-3"></div>
          <h3 class="text-xl font-semibold mb-2">Local Experts</h3>
          <p class="text-gray-600">Guides with deep knowledge of Rwandan culture, wildlife, and hidden gems.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-3"></div>
          <h3 class="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p class="text-gray-600">Sustainable tourism that supports conservation and local communities.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-3"></div>
          <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
          <p class="text-gray-600">Round-the-clock assistance for a worry-free travel experience.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Rwanda?</h2>
        <p class="text-lg max-w-2xl mx-auto mb-8">Contact us to customize your dream itinerary. Adventure awaits!</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Plan My Trip</button>
          <button class="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition">Contact Us</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}
</style>
.