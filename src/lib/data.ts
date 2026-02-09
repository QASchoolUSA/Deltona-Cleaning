import { Home, Sparkles, Truck, Building2, CalendarRange, CheckCircle2, HelpCircle } from "lucide-react"

export const services = [
    {
        slug: "house-cleaning",
        title: "House Cleaning Services",
        shortTitle: "House Cleaning",
        description: "Reliable weekly, bi-weekly, or monthly house cleaning services in Deltona, FL. Keep your home fresh and tidy with our professional maids.",
        fullDescription: "Life gets busy, and keeping your home consistent clean can be a challenge. Our recurring house cleaning service is designed to take that burden off your shoulders. We provide reliable, thorough, and affordable cleaning solutions tailored to your schedule and specific needs. whether you need weekly, bi-weekly, or monthly visits, our team ensures your home remains a sanctuary of cleanliness and comfort.",
        icon: Home,
        features: [
            "Dusting all surfaces, furniture, and fixtures",
            "Vacuuming carpets, rugs, and upholstery",
            "Mopping and sanitizing hard floors",
            "Thorough bathroom cleaning and disinfection",
            "Kitchen counter, sink, and exterior appliance cleaning",
            "Emptying trash bins and replacing liners",
            "Making beds and general tidying",
            "Cobweb removal"
        ],
        benefits: [
            { title: "Save Time", description: "Reclaim your weekends and free time for what matters most." },
            { title: "Healthier Home", description: "Reduce allergens, dust, and bacteria for a safer living environment." },
            { title: "Consistent Quality", description: "Enjoy a perpetually clean home with our reliable schedule." }
        ],
        process: [
            { step: "1", title: "Initial Consultation", description: "We discuss your specific needs, frequency, and any special requests." },
            { step: "2", title: "Custom Cleaning Plan", description: "We create a checklist tailored to your home." },
            { step: "3", title: "Regular Cleaning", description: "Our professional team arrives on time and gets to work." },
            { step: "4", title: "Quality Check", description: "We verify everything meets our high standards before leaving." }
        ],
        faqs: [
            { question: "Do I need to be home during the cleaning?", answer: "No, most of our clients provide us with a key or entry code. We are fully insured and vetted for your peace of mind." },
            { question: "Are your cleaning products safe for pets?", answer: "Yes, we use eco-friendly and pet-safe cleaning solutions upon request." },
            { question: "What if I need to reschedule?", answer: "Simply contact us 24 hours in advance, and we will happily adjust your appointment." }
        ]
    },
    {
        slug: "deep-cleaning",
        title: "Deep Cleaning Services",
        shortTitle: "Deep Cleaning",
        description: "Comprehensive top-to-bottom deep cleaning for homes in Deltona. Perfect for spring cleaning or neglected spaces.",
        fullDescription: "Sometimes a standard clean just isn't enough. Our Deep Cleaning service is a thorough, top-to-bottom detail cleaning that targets hidden dirt, grime, and buildup. This service is ideal for first-time customers, spring cleaning, or homes that haven't been professionally cleaned in over 3 months. We go beyond the surface to ensure every nook and cranny is sparkling clean.",
        icon: Sparkles,
        features: [
            "Hand-washing baseboards and door frames",
            "Cleaning inside window sills and tracks",
            "Scrubbing soap scum and grout in bathrooms",
            "Deep dusting of ceiling fans and light fixtures",
            "Cleaning outside of cabinets and drawers",
            "Moving light furniture to clean underneath",
            "Detailed kitchen appliance cleaning (exterior)",
            "Sanitizing high-touch areas (switches, knobs)"
        ],
        benefits: [
            { title: "Refresh Your Home", description: "Restore your home to a like-new condition." },
            { title: "Eliminate Buildup", description: "Remove stubborn dirt and grime regular cleaning misses." },
            { title: "Allergen Reduction", description: "Deep removal of dust and dander improves air quality." }
        ],
        process: [
            { step: "1", title: "Assessment", description: "We evaluate the condition of your home to estimate time and effort." },
            { step: "2", title: "Deep Clean Strategy", description: "We attack high-buildup areas first, like bathrooms and kitchens." },
            { step: "3", title: "Detailed Execution", description: "We methodically clean from top to bottom, left to right." },
            { step: "4", title: "Final Walkthrough", description: "We inspect our work to ensure a transformative result." }
        ],
        faqs: [
            { question: "How long does a deep clean take?", answer: "It varies by home size, but typically takes 4-8 hours depending on condition." },
            { question: "Does this include carpet shampooing?", answer: "Carpet shampooing is an add-on service we can provide for an additional fee." },
            { question: "How often should I get a deep clean?", answer: "We recommend a deep clean once or twice a year to maintain optimal home hygiene." }
        ]
    },
    {
        slug: "move-out-cleaning",
        title: "Move-In / Move-Out Cleaning",
        shortTitle: "Move-Out Cleaning",
        description: "Professional move-out cleaning to help you get your security deposit back. Serving landlords and tenants in Deltona.",
        fullDescription: "Moving is one of the most stressful life events. Let us handle the cleaning so you can focus on the packing. Our Move-In/Move-Out cleaning service is designed to meet strict landlord and property management standards. Whether you are a tenant wanting your deposit back, or a landlord preparing for a new tenant, we ensure the property is 100% ready for its next chapter.",
        icon: Truck,
        features: [
            "Cleaning inside cabinets and drawers",
            "Cleaning inside the refrigerator and oven",
            "Spot cleaning walls and doors",
            "Deep vacuuming and mopping all floors",
            "Dusting blinds and window treatments",
            "Cleaning light fixtures and ceiling fans",
            "Disinfecting all bathroom surfaces",
            "Sweeping garage or patio areas"
        ],
        benefits: [
            { title: "Deposit Protection", description: "Increase your chances of receiving your full security deposit." },
            { title: "Move-In Ready", description: "Ensure the new home is sanitized and fresh before unpacking." },
            { title: "Stress Relief", description: "Take one huge task off your moving to-do list." }
        ],
        process: [
            { step: "1", title: "Empty Home Verification", description: "We confirm the home is empty of furniture and personal items." },
            { step: "2", title: "Top-Down Clean", description: "We start with ceilings/fans and work our way down to floors." },
            { step: "3", title: "Appliance & Cabinet Detail", description: "We clean inside all storage and appliances." },
            { step: "4", title: "Inspection Ready", description: "We do a final check to ensure it meets property manager standards." }
        ],
        faqs: [
            { question: "Do I need to leave utilities on?", answer: "Yes, we need electricity and water to properly clean the property." },
            { question: "Do you clean the carpet?", answer: "We vacuum thoroughly. Steam cleaning/shampooing is available as an extra service." },
            { question: "Can you remove trash left behind?", answer: "We can remove small amounts of trash, but bulk removal requires a hauling service." }
        ]
    },
    {
        slug: "apartment-cleaning",
        title: "Apartment & Condo Cleaning",
        shortTitle: "Apartment Cleaning",
        description: "Specialized cleaning services for apartments and condos in Deltona. Efficient, respectful, and thorough.",
        fullDescription: "Apartment living has its own unique requirements. From navigating building access to optimizing cleaning for smaller or shared spaces, Deltona Cleaning is experienced in servicing apartments and condos. We respect your neighbors and building regulations while providing the same high-quality clean as our single-family home services.",
        icon: Building2,
        features: [
            "Living area and bedroom tidying",
            "Kitchenette/Kitchen deep cleaning",
            "Bathroom sanitation",
            "Floor care for all surface types",
            "Balcony sweeping/cleaning (if accessible)",
            "Trash and recycling removal",
            "Dusting electronics and surfaces",
            "Changing bed linens"
        ],
        benefits: [
            { title: "Maximize Space", description: "A clean, tidy apartment feels larger and more inviting." },
            { title: "Flexible Scheduling", description: "We work around your building's hours and your schedule." },
            { title: "Trusted Service", description: "Background-checked professionals you can trust in your personal space." }
        ],
        process: [
            { step: "1", title: "Access Coordination", description: "We arrange entry instructions (key release, buzz-in, etc.)" },
            { step: "2", title: "Efficient Clean", description: "We work effectively to minimize disruption in smaller footprints." },
            { step: "3", title: "Respectful Service", description: "We are mindful of noise levels and shared walls." },
            { step: "4", title: "Secure Exit", description: "We ensure your unit is securely locked upon departure." }
        ],
        faqs: [
            { question: "Do you bring your own supplies?", answer: "Yes, we bring all necessary cleaning equipment and supplies." },
            { question: "Can you clean while I'm at work?", answer: "Absolutely. Many of our clients prefer to come home to a clean apartment." },
            { question: "Do you offer move-out cleans for apartments?", answer: "Yes, we specialize in apartment move-out checkouts." }
        ]
    },
    {
        slug: "maintenance-cleaning",
        title: "Maintenance Cleaning Plans",
        shortTitle: "Maintenance Cleaning",
        description: "Custom maintenance cleaning plans for high-traffic homes or small offices in Deltona.",
        fullDescription: "Maintenance cleaning is about prevention and consistency. Designed for busy households or small commercial spaces, this service keeps your environment perpetually presentable. We work with you to establish a frequency and checklist that focuses on high-traffic areas and essential tasks to prevent dirt from ever settling.",
        icon: CalendarRange,
        features: [
            "Daily or Weekly schedule options",
            "Focus on high-traffic zones (entries, hallways)",
            "Restroom sanitation and restocking",
            "Kitchen/Breakroom maintenance",
            "Trash removal",
            "Surface disinfection",
            "Glass and window spot cleaning",
            "Floor maintenance"
        ],
        benefits: [
            { title: "First Impressions", description: "Always ready for guests or clients." },
            { title: "Preventative", description: "Stops dirt from grinding into floors and furniture." },
            { title: "Peace of Mind", description: "Never worry about 'cleaning day' again." }
        ],
        process: [
            { step: "1", title: "Consultation", description: "We walk through your space to identify high-priority areas." },
            { step: "2", title: "Schedule Setup", description: "We agree on a frequency that fits your flow." },
            { step: "3", title: "Routine Care", description: "Our team executes the maintenance plan consistently." },
            { step: "4", title: "Feedback Loop", description: "We adjust the plan as your needs evolve." }
        ],
        faqs: [
            { question: "Is this different from regular cleaning?", answer: "It is more frequent and focused on maintaining a baseline of cleanliness." },
            { question: "Do you do offices?", answer: "Yes, we service small offices and commercial spaces." },
            { question: "Are contracts required?", answer: "No, we offer flexible agreements with no long-term lock-in." }
        ]
    },
]
