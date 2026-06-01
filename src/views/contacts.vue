<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] bg-cover bg-center flex items-center justify-center text-center"
      style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=1600');">
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p class="text-lg md:text-xl">Get in touch with our team</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid lg:grid-cols-3 gap-10">
          <!-- Contact Information -->
          <div class="lg:col-span-1">
            <div class="bg-gray-50 rounded-2xl p-8 sticky top-8 shadow-lg">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p class="text-gray-600 mb-8">Have questions about planning your trip to Rwanda? We're here to help!</p>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4 group hover:translate-x-2 transition duration-300">
                  <div class="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center text-[#2E7D32] text-2xl">📍</div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Visit Us</h3>
                    <p class="text-gray-600">KG 123 Street, Kigali<br>Rwanda</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group hover:translate-x-2 transition duration-300">
                  <div class="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center text-[#2E7D32] text-2xl">📞</div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p class="text-gray-600">+250 788 123 456<br>+250 788 123 457</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group hover:translate-x-2 transition duration-300">
                  <div class="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center text-[#2E7D32] text-2xl">✉️</div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p class="text-gray-600">info@temberaurwanda.com<br>support@temberaurwanda.com</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group hover:translate-x-2 transition duration-300">
                  <div class="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center text-[#2E7D32] text-2xl">🕒</div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Working Hours</h3>
                    <p class="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 2:00 PM<br>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <!-- Social Links -->
              <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div class="flex gap-3">
                  <a href="#" class="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white hover:bg-[#1B5E20] transition transform hover:scale-110">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white hover:bg-[#1B5E20] transition transform hover:scale-110">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white hover:bg-[#1B5E20] transition transform hover:scale-110">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white hover:bg-[#1B5E20] transition transform hover:scale-110">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p class="text-gray-600 mb-6">We'll get back to you within 24 hours</p>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      v-model="form.name"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition"
                      placeholder=""
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      v-model="form.email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition"
                      placeholder=""
                    >
                  </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      v-model="form.phone"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition"
                      placeholder=""
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select 
                      v-model="form.subject"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Tour Booking</option>
                      <option>Group Travel</option>
                      <option>Business Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your travel plans or any questions you have..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Message ✉️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-sm tracking-[3px] text-[#2E7D32] mb-3 font-semibold">FAQ</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h3>
          <p class="text-gray-600 mt-2">Find answers to common questions</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
            <h4 class="font-bold text-gray-800 text-lg mb-2">❓ How do I book a gorilla trekking permit?</h4>
            <p class="text-gray-600">You can book through our website or contact us directly. We recommend booking at least 6 months in advance as permits are limited.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
            <h4 class="font-bold text-gray-800 text-lg mb-2">❓ What is the best time to visit Rwanda?</h4>
            <p class="text-gray-600">The dry seasons (June-September and December-February) are ideal for gorilla trekking and wildlife viewing.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
            <h4 class="font-bold text-gray-800 text-lg mb-2">❓ Do I need a visa to visit Rwanda?</h4>
            <p class="text-gray-600">Citizens of most countries can get a visa on arrival or apply for an e-visa online before travel.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
            <h4 class="font-bold text-gray-800 text-lg mb-2">❓ Is Rwanda safe for tourists?</h4>
            <p class="text-gray-600">Yes! Rwanda is considered one of the safest countries in Africa with friendly locals and low crime rates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#2E7D32]">
      <div class="container mx-auto px-4 max-w-6xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Plan Your Trip?</h2>
        <p class="text-lg mb-8 text-white/90">Contact us today and let's create your perfect Rwandan adventure</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <button class="inline-block bg-white text-[#2E7D32] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            Book a Consultation 📅
          </button>
          <router-link to="/" class="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
            Back to Home 🏠
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
      alert('Thank you for your message! We will get back to you soon. 🎉')
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
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
.