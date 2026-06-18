const SITE = {
  org: {
    name: "Bidar Chamber of Commerce & Industry",
    shortName: "BCCI Bidar",
    tagline: "Empowering Trade. Building Bidar.",
    logo: "Highlights/BCCI logo.png",
    phone: "(+91) 9448113579",
    phone2: "08482-225124",
    email: "bccibdr@yahoo.com",
    address: "Door No 8-10-39, Indira Market, Near Old Bus Stand, Bidar – 585 401, Karnataka",
    established: "1996",
    social: {
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "About Us", href: "about.html" },
    { label: "Managing Committee", href: "committee.html" },
    {
      label: "Notifications", href: "#",
      children: [
        { label: "Govt Notifications", href: "notifications.html#govt" },
        { label: "Chamber Notifications", href: "notifications.html#chamber" }
      ]
    },
    { label: "Highlights", href: "gallery.html",
      children: [
        { label: "News & Articles", href: "news.html" },
        { label: "Recent Events", href: "gallery.html?tab=recent" },
        { label: "Archives", href: "gallery.html?tab=archives" }
      ]
    },
    
    { label: "Contact", href: "contact.html" }
  ],

  ticker: [
    { text: "A request to extend the Bengaluru–Hyderabad High-Speed Railway Corridor up to Bidar.", link: "Docs/Press-Note-Somanna-09-02-2026.pdf" },
    { text: "TWENTY NINETH (29) ANNUAL REPORT now available for download.", link: "Docs/TWENTY-NINETH-29-ANNUAL-REPORT.pdf" },
    { text: "ANNUAL REPORT FOR THE YEAR 2024-2025 published.", link: "Docs/ANNUAL-REPORT-FOR-THE-YEAR-2024-2025.pdf" },
    { text: "An appeal to entrepreneurs and businessmen of Bidar.", link: "Docs/Chambe-Website-08-10-2025.pdf" }
  ],

  hero: [
    {
      image: "images/Slid1.webp",
      heading: "Empowering Bidar's Business Community",
      subheading: "Advocating for growth, innovation, and prosperity across industries",
      cta: { label: "Learn More", href: "about.html" }
    },
    {
      image: "images/Slid3.webp",
      heading: "Connecting Entrepreneurs & Industry Leaders",
      subheading: "Networking, workshops, and policy dialogues that drive real change",
      cta: { label: "View Events", href: "events.html" }
    },
    {
      image: "images/Slid2.webp",
      heading: "Building Bidar's Economic Future",
      subheading: "Representing trade, industry, and entrepreneurship since 1996",
      cta: { label: "Join BCCI", href: "contact.html" }
    },
    {
      image: "images/Slid4.webp",
      heading: "Fostering Innovation and Commerce",
      subheading: "Strengthening local trade through structured development programs",
      cta: { label: "Our Services", href: "notifications.html" }
    },
    {
      image: "images/Slid5.webp",
      heading: "Unified Voice for Trade & Industry",
      subheading: "Engaging stakeholders for progressive regulatory policies",
      cta: { label: "Contact Us", href: "contact.html" }
    }
  ],

  about: {
    heading: "Bidar Chamber of Commerce and Industry",
    body: "The Bidar Chamber of Commerce & Industry (BCCI) is committed to fostering a vibrant and progressive business environment in the historic city of Bidar. Our mission is to support and accelerate the growth of trade, industry, and entrepreneurship in the region by working closely with stakeholders through advocacy, policy recommendations, and capacity-building initiatives. Established to serve as a unifying voice for local businesses, the BCCI brings together industrialists, traders, service providers, and entrepreneurs, facilitating dialogue, networking, and collaboration.",
    image: "Highlights/BCCI.png",
    stats: [
      { number: "29+", label: "Years of Service" },
      { number: "2000+", label: "Active Members" },
      { number: "100+", label: "Events Conducted" },
      { number: "5", label: "Affiliated Chambers" }
    ]
  },

  services: [
    {
      icon: `<svg class="w-8 h-8 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      title: "Business Solutions",
      desc: "Intelligent solutions for business growth through leadership programs, workshops, and seminars."
    },
    {
      icon: `<svg class="w-8 h-8 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.5-6.5a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.4 0L11 15.5"></path><path d="m13 15-2-2a1 1 0 0 0-1.4 0L3 19.5a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0L13 16"></path><path d="m16 9-4.5 4.5"></path></svg>`,
      title: "Industry Networking",
      desc: "Connecting Bidar's entrepreneurs, traders, and industrialists for collaboration and growth."
    },
    {
      icon: `<svg class="w-8 h-8 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
      title: "Policy Advocacy",
      desc: "Representing business interests with government bodies for favorable policy outcomes."
    }
  ],

  president: {
    name: "Sri. B. G. Shetkar",
    title: "President, BCCI",
    image: "images/bgshatt.webp",
    message: "Welcome to the official website of the Bidar Chamber of Commerce & Industry (BCCI). I am honored to serve as the President of this distinguished organization, and I extend my warmest greetings to all visitors. BCCI has a proud history of supporting the economic growth and industrial development of Bidar. Our Chamber has played a vital role in representing the business community, fostering entrepreneurship, and advocating for policies that contribute to the overall progress of our district."
  },

  officeBearers: [
    { name: "Sri. B. G. Shetkar", role: "President, BCCI, Bidar", image: "images/bgshatt.webp" },
    { name: "Sri. Somshekhar Patil", role: "Vice- President (Patron), BCCI, Bidar", image: "images/member6.webp" },
    { name: "Dr. Rajinish S. Wali", role: "Vice- President, (Life Member), BCCI, Bidar", image: "images/member7.webp" },
    { name: "Dr. Veerendra Shastri", role: "Hon. Secretary, BCCI, Bidar", image: "images/member2.webp" },
    { name: "Sri. Rajshekhar Mitkari", role: "Joint Secretary, BCCI, Bidar", image: "images/Rajshekhar.webp" },
    { name: "Sri. Madivalappa Gangshetty", role: "Treasurer, BCCI, Bidar", image: "images/member5.webp" }
  ],

  events: [
    {
      title: "Felicitation of B. S. Shetkar for 5th Term as Chairman of Bidar DCC Bank",
      date: "2025-11-05",
      location: "Bidar, Karnataka",
      image: "images/Felicitation.webp",
      excerpt: "Celebration and felicitation ceremony for B. S. Shetkar on being elected Chairman of Bidar DCC Bank for the 5th term.",
      link: "#"
    },
    {
      title: "Coordination Meeting of Police Officials and Public Representatives – Bidar District",
      date: "2025-10-19",
      location: "Bidar, Karnataka",
      image: "images/Events4.webp",
      excerpt: "Event Agenda: Coordination Meeting of Police Officials and Public Representatives.",
      link: "#"
    },
    {
      title: "JCI Industrial Area – Outstanding Contribution and Successful Coordination Meeting",
      date: "2025-09-22",
      location: "Bidar, Karnataka",
      image: "images/Enent1.webp",
      excerpt: "A special meeting of JCI Bidar Industrial Area was held to recognize outstanding contributions.",
      link: "#"
    },
    {
      title: "Discussion on Road and Drainage Development in Bidar City",
      date: "2025-12-25",
      location: "Bidar, Karnataka",
      image: "images/Enent2-1.webp",
      excerpt: "A review meeting was held on road and drainage infrastructure planning in Bidar city.",
      link: "#"
    },
    {
      title: "New Action Plan for Strengthening Public Health Services in Bidar City",
      date: "2025-09-26",
      location: "Bidar, Karnataka",
      image: "images/Enent3.webp",
      excerpt: "A detailed review and planning meeting was conducted to strengthen public health services.",
      link: "#"
    },
    {
      title: "Tribute Meeting for Former Prime Minister Dr. Manmohan Singh",
      date: "2025-09-14",
      location: "Bidar, Karnataka",
      image: "images/event4.webp",
      excerpt: "A tribute meeting was held to pay respects to former PM Dr. Manmohan Singh.",
      link: "#"
    }
  ],

  affiliatedChambers: [
    { name: "Bidar Chamber of Commerce & Industry", logo: "Highlights/BCCI logo.png", link: "#" },
    { name: "Raichur District Chamber of Commerce & Industry", logo: "images/Richure-1.png", link: "#" },
    { name: "Yadgiri District Chamber of Commerce & Industry", logo: "images/Yadagir-1.png", link: "#" },
    { name: "Federation of Karnataka Chambers of Commerce & Industry, Bangalore", logo: "images/fkcci.png", link: "#" },
    { name: "Karnataka Small Scale Industries Association, Bangalore", logo: "images/kassia1-300x300-1.png", link: "#" }
  ],

  news: [
    { image: "Highlights/Articles/BCCI-1.webp", title: "BCCI Meets District Collector on Industrial Development", date: "2025-12-10", link: "#" },
    { image: "Highlights/Articles/BCCI-33.webp", title: "Chamber Submits Memorandum on GST Relief for SMEs", date: "2025-12-05", link: "#" },
    { image: "Highlights/Articles/BCCI-2.webp", title: "BCCI Hosts Annual Business Excellence Awards", date: "2025-11-28", link: "#" },
    { image: "Highlights/Articles/Screenshot 2026-06-17 180041.png", title: "Workshop on Digital Payments for Local Traders", date: "2025-11-15", link: "#" },
    { image: "Highlights/Articles/BCCI-52.webp", title: "BCCI Delegation Visits Industrial Area in Bidar", date: "2025-11-01", link: "#" },
    { image: "Highlights/Articles/BCCI-20.webp", title: "Chamber Launches MSME Helpdesk for New Registrations", date: "2025-10-20", link: "#" }
  ],

  testimonials: [
    {
      name: "Mr. Ramesh Kulkarni",
      role: "Director, Kulkarni Agro Industries",
      avatar: "images/Male_1.webp",
      text: "Being a member of BCCI has opened up new avenues for our agribusiness. The Chamber's guidance on government schemes and export opportunities has helped us scale beyond regional markets."
    },
    {
      name: "Ms. Anjali Patil",
      role: "Founder, BidarTech Solutions",
      avatar: "images/Male_1.webp",
      text: "BCCI has been instrumental in connecting startups like ours with mentors, financial institutions, and government officials. Their support is helping build a strong tech ecosystem in Bidar."
    },
    {
      name: "Mr. Irfan Ahmed",
      role: "Owner, Ahmed Timber Traders",
      avatar: "images/Male_1.webp",
      text: "The Chamber has always stood by local traders. During the GST transition, BCCI arranged timely workshops that cleared all our doubts. Their handholding approach is truly commendable."
    },
    {
      name: "Dr. Sudhakar Rao",
      role: "Chairman, Rao Institute of Commerce",
      avatar: "images/Male_1.webp",
      text: "BCCI doesn't just promote businesses — it encourages education, entrepreneurship, and ethical leadership. Their student-industry interface programs are a great contribution."
    },
    {
      name: "Mrs. Rekha Suryavanshi",
      role: "Partner, Surya Handlooms",
      avatar: "images/Male_1.webp",
      text: "As a woman entrepreneur, I found the Chamber very welcoming. The MSME Helpdesk guided me through the Udyam registration and helped connect with buyers through expos."
    },
    {
      name: "Mr. Santosh Bhandari",
      role: "CEO, Bhandari Logistics Pvt. Ltd.",
      avatar: "images/Male_1.webp",
      text: "BCCI has played a vital role in improving infrastructure dialogues and logistics awareness in our district. The forums they organize with local authorities are solution-oriented."
    }
  ],

  notifications: {
    govt: [
      { title: "Press Note – Bengaluru–Hyderabad Railway Extension to Bidar", date: "2026-02-09", file: "Docs/Press-Note-Somanna-09-02-2026.pdf" }
    ],
    chamber: [
      { title: "Twenty Ninth (29) Annual Report", date: "2025-10-15", file: "Docs/TWENTY-NINETH-29-ANNUAL-REPORT.pdf" },
      { title: "Annual Report for the Year 2024-2025", date: "2025-10-10", file: "Docs/ANNUAL-REPORT-FOR-THE-YEAR-2024-2025.pdf" },
      { title: "Appeal to Entrepreneurs and Businessmen of Bidar", date: "2025-10-05", file: "Docs/Chambe-Website-08-10-2025.pdf" }
    ]
  },

  gallery: {
    recent: [
      { image: "Highlights/Recent Events/Slid1.png", caption: "" },
      { image: "Highlights/Recent Events/Slid5.webp", caption: "" },
      { image: "Highlights/Recent Events/1.webp", caption: "" },
      { image: "Highlights/Recent Events/2.webp", caption: "" },
      { image: "Highlights/Recent Events/3.webp", caption: "" },
      { image: "Highlights/Recent Events/4.webp", caption: "" },
      { image: "Highlights/Recent Events/3K9A0317.webp", caption: "" },
      { image: "Highlights/Recent Events/3K9A0445.webp", caption: "" },
      { image: "Highlights/Recent Events/3K9A0453.webp", caption: "" },
      { image: "Highlights/Recent Events/3K9A0459.webp", caption: "" },
      { image: "Highlights/Recent Events/3K9A0462.webp", caption: "" },
      { image: "Highlights/Recent Events/3K9A0482.webp", caption: "" }
    ],
    archives: [
      { image: "Highlights/Archives/1.webp", caption: "Historical Document Archive 1" },
      { image: "Highlights/Archives/2.webp", caption: "Historical Document Archive 2" },
      { image: "Highlights/Archives/3.webp", caption: "Historical Document Archive 3" },
      { image: "Highlights/Archives/4.webp", caption: "Historical Document Archive 4" },
      { image: "Highlights/Archives/5.webp", caption: "Historical Document Archive 5" },
      { image: "Highlights/Archives/6.webp", caption: "Historical Document Archive 6" },
      { image: "Highlights/Archives/7.webp", caption: "Historical Document Archive 7" },
      { image: "Highlights/Archives/8.webp", caption: "Historical Document Archive 8" },
      { image: "Highlights/Archives/9.webp", caption: "Historical Document Archive 9" },
      { image: "Highlights/Archives/10.webp", caption: "Historical Document Archive 10" },
      { image: "Highlights/Archives/11.webp", caption: "Historical Document Archive 11" }
    ]
  },

  managingCommittee: [
    { name: "Sri. Bharat Shetkar", role: "M.C. Member, BCCI, Bidar", image: "images/Bharat.webp" },
    { name: "Sri. Kanteppa Patil", role: "M.C. Member, BCCI, Bidar", image: "images/8k.webp" },
    { name: "Sri. P. Narayanrao", role: "M.C. Member, BCCI, Bidar", image: "images/9p.webp" },
    { name: "Sri. Veerkumar Majge", role: "M.C. Member, BCCI, Bidar", image: "images/12v.webp" },
    { name: "Sri. Prakash B. Patil", role: "M.C. Member, BCCI, Bidar", image: "images/Prakash.webp" },
    { name: "Sri. Ashok Rejantal", role: "M.C. Member (Ind), BCCI. Bidar", image: "images/membeA.png" },
    { name: "Sri. Suryakant Almaje", role: "M.C. Member, BCCI, Bidar", image: "images/Suryakanth.webp" },
    { name: "Sri. Sunil Motti", role: "M.C. Member, BCCI, Bidar", image: "images/Sunil.webp" },
    { name: "Sri. Kapil Sharnappa Hugar", role: "M.C. Member, BCCI, Bidar", image: "images/Kapil.webp" },
    { name: "Sri. Jayesh Kumar", role: "M.C. Member, BCCI, Bidar", image: "images/Jayesh.webp" },
    { name: "Sri. Sachchidanand Chidre", role: "M.C. Member, BCCI, Bidar", image: "images/Sachidanand.webp" },
    { name: "Smt. Vijaylaxmi Chonde", role: "M.C. Member (Ladies), BCCI, Bidar", image: "images/membeA.png" },
    { name: "Smt. Seema Kulkarni", role: "M.C. Member, BCCI, Bidar", image: "images/Smt_.webp" }
  ],

  footer: {
    description: "The Bidar Chamber of Commerce & Industry is committed to fostering a vibrant and progressive business environment in the historic city of Bidar.",
    quickLinks: [
      { label: "About", href: "about.html" },
      { label: "Events", href: "events.html" },
      { label: "News", href: "news.html" },
      { label: "Gallery", href: "gallery.html" },
      { label: "Contact", href: "contact.html" },
      { label: "Privacy Policy", href: "privacy.html" }
    ],
    copyright: "© 2026 BCCI Bidar. All Rights Reserved. Designed by Hi Ideals"
  }
};
