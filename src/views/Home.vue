<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          TEMBERA<br />URWANDA
        </h1>
        <p class="hero-subtitle">Explore the beauty of the Land of a Thousand Hills</p>
        <button class="btn-explore">EXPLORE RWANDA</button>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-text">
            <span class="section-label">ABOUT US</span>
            <h2 class="section-heading">Discover Rwanda</h2>
            <p class="about-description">
              TEMBERA U RWANDA is a tourism website created to promote the beauty of Rwanda. 
              It helps visitors discover amazing destinations, rich culture, wildlife, and the warm 
              hospitality of Rwandan people. Our mission is to inspire the world to visit and explore 
              the Land of a Thousand Hills.
            </p>
            
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">🌿</div>
                <h3 class="feature-title">Natural Beauty</h3>
                <p class="feature-text">Home to beautiful landscapes, forests, lakes and volcanoes.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🦍</div>
                <h3 class="feature-title">Wildlife</h3>
                <p class="feature-text">See mountain gorillas and enjoy amazing wildlife.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🤝</div>
                <h3 class="feature-title">Warm Hospitality</h3>
                <p class="feature-text">Experience the kindness and culture of Rwandan people.</p>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <img src="../assets/volcanoes.jpg" alt="Rwandan landscape">
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Destinations Section -->
    <section class="destinations">
      <div class="container">
        <span class="section-label centered">POPULAR DESTINATIONS</span>
        
        <div class="destinations-grid">
          <!-- Kigali City Card - Links to Kigali page -->
          <div class="destination-card" @click="goToKigali">
            <div class="card-image">
              <img src="../assets/kigali.jpg" alt="Kigali City">
            </div>
            <div class="card-content">
              <h3>Kigali City</h3>
              <p>Clean, modern and vibrant capital city.</p>
              <button class="btn-card">Learn More →</button>
            </div>
          </div>
          
          <!-- Volcanoes National Park Card - Links to North Province page -->
          <div class="destination-card" @click="goToNorthProvince">
            <div class="card-image">
              <img src="../assets/volcanoes.jpg" alt="Volcanoes National Park">
            </div>
            <div class="card-content">
              <h3>Volcanoes National Park</h3>
              <p>Home of mountain gorillas and breathtaking volcanoes.</p>
              <button class="btn-card">Learn More →</button>
            </div>
          </div>
          
          <!-- Lake Kivu Card - Links to West Province page -->
          <div class="destination-card" @click="goToWestProvince">
            <div class="card-image">
              <img src="../assets/lake kivu.jpg" alt="Lake Kivu">
            </div>
            <div class="card-content">
              <h3>Lake Kivu</h3>
              <p>Relax and enjoy the beautiful beaches and scenery.</p>
              <button class="btn-card">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToKigali() {
      this.$router.push('/kigali')
    },
    goToNorthProvince() {
      this.$router.push('/north-province')
    },
    goToWestProvince() {
      this.$router.push('/west-province')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-container {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  height: 100vh;
  min-height: 600px;
  background-image: url('https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=1600');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 20px;
}

.hero-title {
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 4px;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: 500;
}

.btn-explore {
  background-color: #2E7D32;
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.btn-explore:hover {
  background-color: #1B5E20;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

/* About Section */
.about {
  padding: 80px 0;
  background-color: #fff;
}

.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.section-label {
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #2E7D32;
  font-weight: 600;
  margin-bottom: 15px;
  display: inline-block;
}

.section-heading {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1a2a3a;
  font-weight: 700;
}

.about-description {
  color: #555;
  line-height: 1.8;
  margin-bottom: 40px;
  font-size: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.feature-card {
  text-align: center;
  padding: 20px 15px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #1a2a3a;
  font-weight: 600;
}

.feature-text {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  object-fit: cover;
  height: 450px;
  transition: transform 0.3s;
}

.about-image img:hover {
  transform: scale(1.02);
}

/* Destinations Section */
.destinations {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-label.centered {
  text-align: center;
  display: block;
  margin-bottom: 50px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.destination-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card-image {
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.destination-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 25px;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #1a2a3a;
  font-weight: 700;
}

.card-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-card {
  background: none;
  border: none;
  color: #2E7D32;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.btn-card:hover {
  color: #1B5E20;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 992px) {
  .about-wrapper {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .about-image img {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-heading {
    font-size: 2rem;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .about {
    padding: 50px 0;
  }
  
  .destinations {
    padding: 50px 0;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .btn-explore {
    padding: 12px 30px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-heading {
    font-size: 1.5rem;
  }
  
  .card-content h3 {
    font-size: 1.2rem;
  }
}
</style>