export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Heritage Motors Zimbabwe",
    legalName: "Heritage Motors Zimbabwe",
    tagline: "Where Heritage Meets the Open Road",
    description: "Heritage Motors Zimbabwe offers a carefully curated selection of quality pre-owned vehicles on Tongogara Avenue. Every vehicle tells a story -- we make sure it is one of reliability, value, and trust.",
    phone: "+263 77 486 7390",
    phoneRaw: "+263774867390",
    whatsappNumber: "263774867390",
    email: "heritagemotorszimbabwe@gmail.com",
    address: "Stand No:40667 Tongogara Ave Opposite Prince Edward School, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.4,
    ratingRounded: 4,
    reviewCount: 5,
    established: "2018",
    yearsExperience: "7+",
    projectsCompleted: "1000+",
    employees: "10+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "heritage-motors-zimbabwe-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Heritage", logoLine2: "Motors Zimbabwe" },

  hero: {
    badge: "Curated Pre-Owned Vehicles",
    titleParts: [
      { text: "WHERE QUALITY " },
      { text: "MEETS", highlight: true },
      { text: " THE ROAD." },
    ],
    subtitle: "1,000+ vehicles sold from our Tongogara Avenue showroom. Carefully curated, thoroughly inspected, and priced for genuine value.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "1000+ Vehicles Sold",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "1000+", label: "Vehicles Sold" },
    { number: "10+", label: "Years in Business" },
    { number: "98%", label: "Happy Customers" },
    { number: "200+", label: "5-Star Reviews" },
  ],

  servicesPreview: [
    { title: "Premium Vehicles", desc: "A curated selection of premium pre-owned vehicles, each inspected to the highest standards and priced for exceptional value.", icon: "Star" },
    { title: "Vehicle Financing", desc: "Flexible financing options tailored to your budget. We work with leading banks and financial institutions to get you the best rates.", icon: "Briefcase" },
    { title: "Trade-In Program", desc: "Get top value for your current vehicle with our transparent trade-in assessment. Fair pricing, no hidden deductions.", icon: "Heart" },
    { title: "Vehicle Sourcing", desc: "Cannot find what you are looking for? Our procurement team sources specific makes, models, and specs from across the region.", icon: "Lightbulb" },
    { title: "After-Sales Service", desc: "Our relationship does not end at the sale. Comprehensive after-sales support including warranties, servicing, and parts.", icon: "Buildings" },
    { title: "Fleet Solutions", desc: "Corporate fleet packages for businesses of all sizes. Volume pricing, maintenance schedules, and dedicated account management.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Premium Vehicles", slug: "premium-vehicles", desc: "A curated selection of premium pre-owned vehicles, each inspected to the highest standards and priced for exceptional value.", features: ["Multi-Point Inspection", "Service History", "Warranty Options", "Test Drives", "Vehicle Reports", "Delivery"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
      { title: "Vehicle Financing", slug: "vehicle-financing", desc: "Flexible financing options tailored to your budget. We work with leading banks and financial institutions to get you the best rates.", features: ["Bank Partnerships", "Flexible Terms", "Quick Approval", "Low Deposits", "Refinancing", "Insurance"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "Trade-In Program", slug: "trade-in-program", desc: "Get top value for your current vehicle with our transparent trade-in assessment. Fair pricing, no hidden deductions.", features: ["Free Valuation", "Fair Pricing", "Same-Day Offer", "Documentation", "Transfer Support", "Top Dollar"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
      { title: "Vehicle Sourcing", slug: "vehicle-sourcing", desc: "Cannot find what you are looking for? Our procurement team sources specific makes, models, and specs from across the region.", features: ["Specific Models", "Import Options", "Region-Wide Search", "Compliance", "Shipping", "Customs"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "After-Sales Service", slug: "after-sales-service", desc: "Our relationship does not end at the sale. Comprehensive after-sales support including warranties, servicing, and parts.", features: ["Warranties", "Servicing", "Parts Supply", "Roadside Assist", "Technical Support", "Recalls"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
      { title: "Fleet Solutions", slug: "fleet-solutions", desc: "Corporate fleet packages for businesses of all sizes. Volume pricing, maintenance schedules, and dedicated account management.", features: ["Volume Pricing", "Maintenance Plans", "Account Management", "Replacement Vehicles", "Reporting", "Insurance"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Sedan", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Premium Vehicles", "Vehicle Financing"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "SUV", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Premium Vehicles", "Vehicle Financing"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Truck", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Premium Vehicles", "Vehicle Financing"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Luxury", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Premium Vehicles", "Vehicle Financing"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Sedan", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Premium Vehicles", "Vehicle Financing"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "SUV", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Premium Vehicles", "Vehicle Financing"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Bought my first car here and the experience was fantastic. No pressure, honest advice, and a great price.", name: "Tatenda Ndlovu", role: "First-Time Buyer", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "We purchase fleet vehicles regularly and the service is always professional. Transparent pricing and quality vehicles.", name: "Grace Moyo", role: "Fleet Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "The trade-in process was smooth and fair. Got a great deal on a beautiful SUV. Highly recommended.", name: "Simon Phiri", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "Came back for my second vehicle because the first experience was so positive. These guys earn repeat business.", name: "Yeukai Chimwanda", role: "Returning Customer", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "Bought my first car here and the experience was fantastic. No pressure, honest advice, and a great price.", name: "Tatenda Ndlovu", role: "First-Time Buyer", rating: 5 },
      { text: "We purchase fleet vehicles regularly and the service is always professional. Transparent pricing and quality vehicles.", name: "Grace Moyo", role: "Fleet Manager", rating: 5 },
      { text: "The trade-in process was smooth and fair. Got a great deal on a beautiful SUV. Highly recommended.", name: "Simon Phiri", role: "Business Owner", rating: 5 },
      { text: "Came back for my second vehicle because the first experience was so positive. These guys earn repeat business.", name: "Yeukai Chimwanda", role: "Returning Customer", rating: 5 },
      { text: "They sourced the exact vehicle I wanted within two weeks. Fantastic service from start to finish.", name: "Brian Mutema", role: "Family Buyer", rating: 5 },
      { text: "The after-sales support has been brilliant. They even reminded me about my service schedule. That is how you keep customers.", name: "Angela Mhembere", role: "Corporate Fleet", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Heritage Motors was established in 2018 opposite Prince Edward School on Tongogara Avenue. We named ourselves Heritage because we believe every vehicle carries a legacy of engineering excellence.",
      "Our approach is simple: we only stock vehicles we would drive ourselves. Every car is inspected, serviced, and presented to the standard our customers deserve.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Heritage Motors Zimbabwe on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "Stand No:40667 Tongogara Ave Opposite Prince Edward School, Harare, Zimbabwe", phone: "+263 77 486 7390", email: "heritagemotorszimbabwe@gmail.com" },
    ],
  },

  homeCta: {
    title: "EXPLORE OUR\nSHOWROOM",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Heritage Motors Zimbabwe! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85",
  },

  footer: {
    description: "Heritage Motors Zimbabwe offers a carefully curated selection of quality pre-owned vehicles on Tongogara Avenue. Every v...",
    copyright: "Heritage Motors Zimbabwe",
  },
};

export default siteData;
