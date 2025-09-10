export interface PanditJi {
  id: number
  name: string
  photo: string
  nativePlace: string
  experience: string
  rating: number
  areas: string[]
  specialties: string[]
  description: string
  detailedExperience: string
  contactNumber: string
  languages: string[]
  availability: string[]
  ceremonies: {
    category: string
    rituals: string[]
  }[]
  testimonials: {
    name: string
    ceremony: string
    review: string
    rating: number
  }[]
}

export const panditJis: PanditJi[] = [
  {
    id: 1,
    name: "Pandit Rajesh Sharma",
    photo: "/elderly-indian-priest-with-tilaka-and-traditional-.jpg",
    nativePlace: "Varanasi, Uttar Pradesh",
    experience: "25 years",
    rating: 4.8,
    areas: ["110001", "110002", "110003", "Connaught Place", "Karol Bagh", "Central Delhi", "New Delhi"],
    specialties: ["Vivah Sanskar", "Griha Pravesh", "Satyanarayan Katha", "Rudrabhishek"],
    description: "Experienced Pandit Ji specializing in Vedic rituals and traditional ceremonies.",
    detailedExperience:
      "Pandit Rajesh Sharma has been serving the community for over 25 years with deep knowledge of Vedic scriptures and traditional Hindu ceremonies. He completed his studies from Sampurnanand Sanskrit University, Varanasi, and has performed over 2000 ceremonies including weddings, housewarming, and religious festivals. His expertise in Sanskrit pronunciation and ritual accuracy has made him a preferred choice for families seeking authentic ceremonial experiences.",
    contactNumber: "+91 98765 43210",
    languages: ["Hindi", "Sanskrit", "English", "Bhojpuri"],
    availability: ["Monday to Sunday", "6:00 AM - 10:00 PM"],
    ceremonies: [
      {
        category: "Wedding Ceremonies",
        rituals: ["Vivah Sanskar", "Engagement Ceremony", "Mehendi Ceremony", "Sangam Ceremony"],
      },
      {
        category: "House & Property",
        rituals: ["Griha Pravesh", "Bhoomi Pujan", "Vastu Shanti", "House Blessing"],
      },
      {
        category: "Religious Festivals",
        rituals: ["Satyanarayan Katha", "Rudrabhishek", "Ganesh Chaturthi", "Karva Chauth"],
      },
      {
        category: "Life Ceremonies",
        rituals: ["Mundan Sanskar", "Janeu Sanskar", "Annaprashan", "Naming Ceremony"],
      },
    ],
    testimonials: [
      {
        name: "Priya Gupta",
        ceremony: "Wedding Ceremony",
        review:
          "Pandit Ji conducted our wedding ceremony beautifully. His knowledge and calm demeanor made our special day perfect.",
        rating: 5,
      },
      {
        name: "Amit Sharma",
        ceremony: "Griha Pravesh",
        review: "Very knowledgeable and punctual. Explained every ritual clearly and made the ceremony meaningful.",
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Pandit Suresh Mishra",
    photo: "/middle-aged-indian-brahmin-priest-with-sacred-thre.jpg",
    nativePlace: "Haridwar, Uttarakhand",
    experience: "18 years",
    rating: 4.9,
    areas: ["110004", "110005", "110006", "Lajpat Nagar", "Greater Kailash", "South Delhi", "Defence Colony"],
    specialties: ["Havan", "Mundan Sanskar", "Janeu Sanskar", "Kaal Sarp Dosh Nivaran"],
    description: "Expert in Vedic astrology and traditional Hindu ceremonies with deep spiritual knowledge.",
    detailedExperience:
      "Pandit Suresh Mishra brings 18 years of dedicated service in performing Vedic rituals and astrological consultations. A graduate from Gurukul Kangri University, Haridwar, he specializes in remedial ceremonies and spiritual healing. His expertise in Kaal Sarp Dosh Nivaran and other astrological remedies has helped hundreds of families find peace and prosperity.",
    contactNumber: "+91 98765 43211",
    languages: ["Hindi", "Sanskrit", "English"],
    availability: ["Tuesday to Sunday", "5:30 AM - 9:30 PM"],
    ceremonies: [
      {
        category: "Astrological Remedies",
        rituals: ["Kaal Sarp Dosh Nivaran", "Mangal Dosh Shanti", "Navgraha Shanti", "Rahu Ketu Shanti"],
      },
      {
        category: "Fire Ceremonies",
        rituals: ["Havan", "Yagya", "Agnihotra", "Maha Mrityunjay Havan"],
      },
      {
        category: "Child Ceremonies",
        rituals: ["Mundan Sanskar", "Janeu Sanskar", "Annaprashan", "Vidyarambh Sanskar"],
      },
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        ceremony: "Kaal Sarp Dosh Nivaran",
        review:
          "Pandit Ji's remedial ceremony was very effective. We noticed positive changes in our lives within months.",
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Pandit Anil Pandey",
    photo: "/young-indian-priest-with-traditional-kurta-and-til.jpg",
    nativePlace: "Mathura, Uttar Pradesh",
    experience: "12 years",
    rating: 4.7,
    areas: ["110007", "110008", "110009", "Dwarka", "Janakpuri", "West Delhi", "Uttam Nagar"],
    specialties: ["Krishna Janmashtami", "Govardhan Puja", "Bhagwat Katha", "Sunderkand Path"],
    description: "Devoted Krishna bhakt specializing in Vaishnav traditions and devotional ceremonies.",
    detailedExperience:
      "Pandit Anil Pandey is a devoted follower of Lord Krishna with 12 years of experience in Vaishnav traditions. Born and raised in Mathura, the birthplace of Lord Krishna, he has deep understanding of Krishna consciousness and devotional practices. His melodious recitation of Bhagwat Katha and expertise in Krishna-related festivals make him highly sought after during Janmashtami and other Vaishnav celebrations.",
    contactNumber: "+91 98765 43212",
    languages: ["Hindi", "Sanskrit", "Braj Bhasha"],
    availability: ["Monday to Sunday", "4:00 AM - 8:00 PM"],
    ceremonies: [
      {
        category: "Krishna Festivals",
        rituals: ["Krishna Janmashtami", "Govardhan Puja", "Holi Celebration", "Radhashtami"],
      },
      {
        category: "Devotional Recitations",
        rituals: ["Bhagwat Katha", "Sunderkand Path", "Vishnu Sahasranaam", "Gita Path"],
      },
      {
        category: "Vaishnav Ceremonies",
        rituals: ["Tulsi Vivah", "Ekadashi Vrat", "Kartik Purnima", "Annakut"],
      },
    ],
    testimonials: [
      {
        name: "Meera Devi",
        ceremony: "Bhagwat Katha",
        review: "His devotional recitation brought tears to our eyes. Truly a blessed soul with divine connection.",
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    name: "Pandit Ramesh Tiwari",
    photo: "/senior-indian-pandit-with-white-beard-and-traditio.jpg",
    nativePlace: "Ujjain, Madhya Pradesh",
    experience: "30 years",
    rating: 4.9,
    areas: ["110010", "110011", "110012", "Rohini", "Pitampura", "North Delhi", "Model Town"],
    specialties: ["Mahamrityunjay Jaap", "Shiv Abhishek", "Navgraha Shanti", "Kumbh Vivah"],
    description: "Senior Pandit Ji with extensive knowledge of Shaivite traditions and remedial rituals.",
    detailedExperience:
      "Pandit Ramesh Tiwari is a highly respected senior priest with 30 years of experience in Shaivite traditions and remedial ceremonies. Having spent years in Ujjain, one of the twelve Jyotirlingas, he has mastered the art of Shiva worship and Tantric rituals. His expertise in Mahamrityunjay Jaap and complex remedial ceremonies has earned him recognition across North India.",
    contactNumber: "+91 98765 43213",
    languages: ["Hindi", "Sanskrit", "English", "Malvi"],
    availability: ["Monday to Saturday", "5:00 AM - 9:00 PM"],
    ceremonies: [
      {
        category: "Shiva Worship",
        rituals: ["Mahamrityunjay Jaap", "Shiv Abhishek", "Rudrabhishek", "Shivratri Puja"],
      },
      {
        category: "Remedial Ceremonies",
        rituals: ["Navgraha Shanti", "Kumbh Vivah", "Pitra Paksha", "Kaal Sarp Dosh"],
      },
      {
        category: "Tantric Rituals",
        rituals: ["Baglamukhi Puja", "Hanuman Chalisa Path", "Durga Saptashati", "Chandi Path"],
      },
    ],
    testimonials: [
      {
        name: "Sunil Agarwal",
        ceremony: "Mahamrityunjay Jaap",
        review: "Pandit Ji's powerful chanting and spiritual energy created a divine atmosphere. Highly recommended.",
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Pandit Vinod Joshi",
    photo: "/middle-aged-indian-priest-with-glasses-and-traditi.jpg",
    nativePlace: "Pushkar, Rajasthan",
    experience: "20 years",
    rating: 4.6,
    areas: ["110013", "110014", "110015", "Vasant Kunj", "Saket", "South Delhi", "Mehrauli"],
    specialties: ["Durga Puja", "Lakshmi Puja", "Karva Chauth", "Devi Jagran"],
    description: "Specialist in Devi worship and women-centric festivals with compassionate approach.",
    detailedExperience:
      "Pandit Vinod Joshi has 20 years of experience specializing in Devi worship and women-centric ceremonies. Coming from the holy city of Pushkar, he has deep knowledge of Shakti traditions and goddess worship. His gentle and compassionate approach makes him particularly popular among families for conducting Karva Chauth, Durga Puja, and other festivals celebrating feminine divine energy.",
    contactNumber: "+91 98765 43214",
    languages: ["Hindi", "Sanskrit", "Rajasthani", "English"],
    availability: ["Monday to Sunday", "6:00 AM - 10:00 PM"],
    ceremonies: [
      {
        category: "Goddess Worship",
        rituals: ["Durga Puja", "Lakshmi Puja", "Saraswati Puja", "Kali Puja"],
      },
      {
        category: "Women's Festivals",
        rituals: ["Karva Chauth", "Teej", "Hartalika", "Gangaur"],
      },
      {
        category: "Devotional Events",
        rituals: ["Devi Jagran", "Mata Ki Chowki", "Navratri Celebration", "Kanya Pujan"],
      },
    ],
    testimonials: [
      {
        name: "Sunita Sharma",
        ceremony: "Karva Chauth",
        review: "Very understanding and patient. Made the ceremony special for all the ladies in our family.",
        rating: 5,
      },
    ],
  },
  {
    id: 6,
    name: "Pandit Mohan Bhatt",
    photo: "/elderly-indian-priest-with-traditional-saffron-rob.jpg",
    nativePlace: "Rishikesh, Uttarakhand",
    experience: "35 years",
    rating: 5.0,
    areas: ["110016", "110017", "110018", "Gurgaon", "Noida", "NCR", "Faridabad"],
    specialties: ["Ganga Aarti", "Yoga Yagya", "Meditation Guidance", "Spiritual Counseling"],
    description: "Renowned spiritual guide combining traditional rituals with modern spiritual practices.",
    detailedExperience:
      "Pandit Mohan Bhatt is a revered spiritual master with 35 years of experience in both traditional ceremonies and modern spiritual practices. Having spent decades in Rishikesh, the yoga capital of the world, he uniquely combines ancient Vedic wisdom with contemporary spiritual needs. His expertise in meditation, yoga philosophy, and spiritual counseling makes him a sought-after guide for those seeking deeper spiritual connection.",
    contactNumber: "+91 98765 43215",
    languages: ["Hindi", "Sanskrit", "English", "Garhwali"],
    availability: ["Monday to Sunday", "4:00 AM - 9:00 PM"],
    ceremonies: [
      {
        category: "Spiritual Practices",
        rituals: ["Ganga Aarti", "Meditation Sessions", "Yoga Yagya", "Pranayam Guidance"],
      },
      {
        category: "Counseling Services",
        rituals: ["Spiritual Counseling", "Life Guidance", "Stress Relief Ceremonies", "Chakra Healing"],
      },
      {
        category: "Traditional Ceremonies",
        rituals: ["Vedic Havan", "Sandhya Vandana", "Gayatri Mantra Jaap", "Om Chanting"],
      },
    ],
    testimonials: [
      {
        name: "Dr. Ashok Verma",
        ceremony: "Spiritual Counseling",
        review: "Pandit Ji's guidance transformed my life. His blend of tradition and modern wisdom is remarkable.",
        rating: 5,
      },
    ],
  },
]

export function getPanditById(id: number): PanditJi | undefined {
  return panditJis.find((pandit) => pandit.id === id)
}
