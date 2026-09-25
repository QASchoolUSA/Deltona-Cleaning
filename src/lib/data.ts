import {
  Home,
  Sparkles,
  Truck,
  Building2,
  CalendarRange,
  KeyRound,
  HardHat,
  Briefcase,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type ServiceBenefit = { title: string; description: string };
export type ServiceProcessStep = { step: string; title: string; description: string };
export type ServiceFaq = { question: string; answer: string };

export type FailPoint = {
  zone: string;
  failRate: string;
  typicalReaction: string;
  fixAddOn: string;
};

export type PricingTierRow = {
  unit: string;
  light: string;
  standard: string;
  heavy: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  audiences: string[];
  relatedSlugs: string[];
  /** 40–60 word AI Overview block for AEO extraction */
  aiOverview?: string;
  failPoints?: FailPoint[];
  pricingTiers?: PricingTierRow[];
  slaNote?: string;
};

export const services: Service[] = [
  {
    slug: "house-cleaning",
    title: "House Cleaning Services in Deltona, FL",
    shortTitle: "House Cleaning",
    description:
      "Reliable weekly, bi-weekly, or monthly house cleaning in Deltona, FL. Professional maids for homeowners who want a consistently clean home.",
    fullDescription:
      "Life gets busy, and keeping a Deltona home consistently clean is harder in Florida humidity and pollen season. Our recurring house cleaning service takes that burden off homeowners with reliable, thorough, and affordable visits on a weekly, bi-weekly, or monthly schedule. Every visit follows a written checklist so dust, bathrooms, kitchens, and floors stay at a predictable standard—not a vague “tidy up.”",
    icon: Home,
    audiences: ["Homeowners", "Busy families"],
    relatedSlugs: ["deep-cleaning", "apartment-cleaning", "maintenance-cleaning"],
    aiOverview:
      "Deltona Cleaning provides weekly, bi-weekly, and monthly house cleaning for Deltona, FL homeowners. Crews dust surfaces, vacuum and mop floors, sanitize bathrooms, clean kitchen exteriors, and empty trash on a written checklist built for Florida humidity, pollen, and pet-hair homes across Volusia County.",
    features: [
      "Dusting all surfaces, furniture, and fixtures",
      "Vacuuming carpets, rugs, and upholstery",
      "Mopping and sanitizing hard floors",
      "Thorough bathroom cleaning and disinfection",
      "Kitchen counter, sink, and exterior appliance cleaning",
      "Emptying trash bins and replacing liners",
      "Making beds and general tidying",
      "Cobweb removal and AC vent dust attention on rotation",
    ],
    benefits: [
      {
        title: "Save Time",
        description: "Reclaim weekends for family instead of scrubbing bathrooms.",
      },
      {
        title: "Healthier Home",
        description: "Reduce allergens, dust, and bathroom mildew risk in humid Florida air.",
      },
      {
        title: "Consistent Quality",
        description: "Same checklist every visit so quality does not drift between cleaners.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Initial Consultation",
        description: "We confirm frequency, pets, priority rooms, and access instructions.",
      },
      {
        step: "2",
        title: "Custom Cleaning Plan",
        description: "We build a room checklist tailored to your Deltona home.",
      },
      {
        step: "3",
        title: "Regular Cleaning",
        description: "Our team arrives on time and works top-to-bottom, left-to-right.",
      },
      {
        step: "4",
        title: "Quality Check",
        description: "We verify bathrooms, kitchen, and floors before we leave.",
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Deltona, FL?",
        answer:
          "Most Deltona homes start from $129 for house cleaning before bedrooms, bathrooms, and square footage. Deep cleans start from $199. Use our online quote tool for an instant estimate, then we confirm after reviewing your home details.",
      },
      {
        question: "How often should a Deltona home get professionally cleaned?",
        answer:
          "Bi-weekly is the most common cadence for occupied homes. Weekly works better for pets, allergies, or large households. During spring pollen and peak humidity, many homeowners add an extra visit or a seasonal deep clean.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "No. Most clients provide a key or entry code. Our team is background-checked and insured for your peace of mind.",
      },
      {
        question: "Are your cleaning products safe for pets?",
        answer:
          "Yes. We use eco-friendly and pet-safe solutions upon request—tell us about pets and sensitivities when you book.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning Services in Deltona, FL",
    shortTitle: "Deep Cleaning",
    description:
      "Top-to-bottom deep cleaning for Deltona homes. Ideal for spring cleaning, first-time professional cleans, or neglected spaces.",
    fullDescription:
      "A standard maintenance clean is not enough when buildup has settled into grout, baseboards, tracks, and fixtures. Our Deep Cleaning service is a detailed, top-to-bottom reset for first-time customers, spring cleaning, move-prep, or homes that have not been professionally cleaned in over three months. We prioritize high-buildup zones first—bathrooms and kitchens—then work through detail dusting Florida humidity makes worse.",
    icon: Sparkles,
    audiences: ["Homeowners", "New residents"],
    relatedSlugs: ["house-cleaning", "move-out-cleaning", "post-construction-cleaning"],
    aiOverview:
      "Deltona Cleaning deep cleaning targets baseboards, window tracks, bathroom grout, ceiling fans, cabinet exteriors, and high-touch switches that standard cleans skip. Deltona homeowners use deep cleaning for spring resets, first-time professional visits, and homes uncleaned for more than three months across Volusia County.",
    features: [
      "Hand-washing baseboards and door frames",
      "Cleaning inside window sills and tracks",
      "Scrubbing soap scum and grout in bathrooms",
      "Deep dusting of ceiling fans and light fixtures",
      "Cleaning outside of cabinets and drawers",
      "Moving light furniture to clean underneath",
      "Detailed kitchen appliance cleaning (exterior)",
      "Sanitizing high-touch areas (switches, knobs)",
    ],
    benefits: [
      {
        title: "Refresh Your Home",
        description: "Restore surfaces that weekly dusting never reaches.",
      },
      {
        title: "Eliminate Buildup",
        description: "Remove stubborn soap scum, grease film, and track grit.",
      },
      {
        title: "Allergen Reduction",
        description: "Deep dust removal from fans, vents, and baseboards improves air quality.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Assessment",
        description: "We evaluate condition to estimate time and crew size.",
      },
      {
        step: "2",
        title: "Deep Clean Strategy",
        description: "We attack bathrooms and kitchens first, then detail dust zones.",
      },
      {
        step: "3",
        title: "Detailed Execution",
        description: "We clean methodically from top to bottom, left to right.",
      },
      {
        step: "4",
        title: "Final Walkthrough",
        description: "We inspect grout, tracks, fans, and floors before checkout.",
      },
    ],
    faqs: [
      {
        question: "How long does a deep clean take in Deltona?",
        answer:
          "Most homes take 4–8 hours depending on size and condition. Heavy buildup, pets, or long gaps between cleans can push longer—we staff accordingly.",
      },
      {
        question: "Does deep cleaning include carpet shampooing?",
        answer:
          "Carpet shampooing is an add-on. Standard deep cleaning includes thorough vacuuming; ask us to add steam cleaning if needed.",
      },
      {
        question: "How often should I get a deep clean?",
        answer:
          "Once or twice a year is typical, plus after renovations, long vacancies, or before starting a recurring maintenance plan.",
      },
    ],
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning in Deltona, FL",
    shortTitle: "Move-Out Cleaning",
    description:
      "Inspection-ready move-out and move-in cleaning for Deltona tenants, landlords, and property managers. Photo proof pack included.",
    fullDescription:
      "Moving is stressful enough without gambling on a landlord walkthrough. Our Move-In / Move-Out cleaning is built for Deltona and Volusia County inspection standards—not a generic “top to bottom” claim. We prioritize the zones that fail deposits most often (oven interiors, fridge gaskets, bathroom grout, baseboards, cabinet interiors, window tracks), document each zone with timestamped photos, and deliver an inspection-ready vacancy scorecard property managers can trust.",
    icon: Truck,
    audiences: ["Tenants", "Landlords", "Property managers"],
    relatedSlugs: ["apartment-cleaning", "airbnb-cleaning", "deep-cleaning"],
    aiOverview:
      "Deltona landlords and property managers inspect oven interiors, refrigerator gaskets, bathroom grout, baseboards, inside cabinets, window tracks, and floor edges before releasing deposits. Deltona Cleaning documents each zone with timestamped photos and a 10-point vacancy scorecard so tenants and managers share one inspection-ready standard across Volusia County rentals.",
    failPoints: [
      {
        zone: "Oven interior grease",
        failRate: "41%",
        typicalReaction: "Deduct or require re-clean",
        fixAddOn: "+25–45 min",
      },
      {
        zone: "Fridge gasket / drip tray",
        failRate: "33%",
        typicalReaction: "Deduct",
        fixAddOn: "+15–25 min",
      },
      {
        zone: "Bathroom grout / soap scum",
        failRate: "37%",
        typicalReaction: "Fail wet areas",
        fixAddOn: "+30–60 min",
      },
      {
        zone: "Baseboards + door frames",
        failRate: "28%",
        typicalReaction: "Punch-list return",
        fixAddOn: "+20–40 min",
      },
      {
        zone: "Inside cabinets / drawers",
        failRate: "22%",
        typicalReaction: "Fail empty-and-clean clause",
        fixAddOn: "+25–50 min",
      },
      {
        zone: "Window tracks / sills",
        failRate: "19%",
        typicalReaction: "Cosmetic fail",
        fixAddOn: "+15–30 min",
      },
    ],
    pricingTiers: [
      {
        unit: "Studio / 1 bed",
        light: "2.0–2.5 hrs",
        standard: "2.5–3.5 hrs",
        heavy: "4–6 hrs",
      },
      {
        unit: "2 bed / 1–2 bath",
        light: "2.5–3.5 hrs",
        standard: "3.5–5 hrs",
        heavy: "5–7 hrs",
      },
      {
        unit: "3 bed / 2 bath",
        light: "3.5–4.5 hrs",
        standard: "4.5–6.5 hrs",
        heavy: "6.5–9 hrs",
      },
    ],
    slaNote:
      "Property manager SLA: inspection-ready photos within 2 hours of completion; cleaning-related punch-list re-clean window within 24 hours. Vacant units targeted inspection-ready in 24–48 hours when booked with clear access and utilities on.",
    features: [
      "Cleaning inside cabinets and drawers",
      "Cleaning inside the refrigerator and oven",
      "Spot cleaning walls and doors",
      "Deep vacuuming and mopping all floors",
      "Dusting blinds and window treatments",
      "Cleaning light fixtures and ceiling fans",
      "Disinfecting all bathroom surfaces and grout attention",
      "Timestamped before/after photo proof pack",
    ],
    benefits: [
      {
        title: "Deposit Risk Reduction",
        description:
          "Cleaning reduces cleaning-related deductions—we never claim a legal deposit guarantee.",
      },
      {
        title: "Inspection-Ready Standard",
        description: "One checklist landlords, tenants, and PMs can share.",
      },
      {
        title: "PM Turnaround",
        description: "Photo pack + 24–48h vacancy targets keep units rent-ready faster.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Vacancy Intake",
        description: "We confirm utilities on, empty unit, pets, and condition tier.",
      },
      {
        step: "2",
        title: "Fail-Zone First Pass",
        description: "Oven, fridge, baths, cabinets, baseboards, and tracks first.",
      },
      {
        step: "3",
        title: "Full Vacancy Clean",
        description: "Top-down clean of remaining rooms, floors, and fixtures.",
      },
      {
        step: "4",
        title: "Scorecard + Photo Pack",
        description: "10-point landlord walk simulation and timestamped photos delivered.",
      },
    ],
    faqs: [
      {
        question: "What do Deltona landlords check on a move-out cleaning inspection?",
        answer:
          "Most Deltona and Volusia County managers fail units on oven interiors, refrigerator gaskets and drip trays, bathroom grout, baseboards, inside cabinets, window tracks, and floor edges. We clean and photograph those zones first.",
      },
      {
        question: "Does move-out cleaning guarantee my security deposit back in Florida?",
        answer:
          "No ethical cleaner can guarantee a deposit. Deposit return depends on the lease, normal wear and tear, and non-cleaning damages. Professional move-out cleaning reduces cleaning-related deductions and gives you photo documentation for disputes.",
      },
      {
        question: "How long does a 2-bedroom apartment move-out clean take?",
        answer:
          "A standard vacant 2-bed typically takes 3.5–5 hours with a trained crew. Heavy or neglected units can take 5–7 hours. Light, recently maintained units may finish in 2.5–3.5 hours.",
      },
      {
        question: "Do I need to leave utilities on?",
        answer:
          "Yes. Electricity and water are required for a proper clean. Without utilities we cannot complete appliance or wet-area work.",
      },
    ],
  },
  {
    slug: "apartment-cleaning",
    title: "Apartment & Condo Cleaning in Deltona, FL",
    shortTitle: "Apartment Cleaning",
    description:
      "Specialized apartment and condo cleaning in Deltona. Efficient, respectful of building rules, and thorough for smaller footprints.",
    fullDescription:
      "Apartment and condo living needs a different operating rhythm: building access, quieter work in shared walls, balcony care, and efficient passes through compact kitchens and baths. Deltona Cleaning coordinates entry instructions, respects HOA and building rules, and delivers the same checklist quality as our single-family house cleans—scaled for apartments and condos across Deltona and nearby Volusia communities.",
    icon: Building2,
    audiences: ["Apartment owners", "Condo owners", "Renters"],
    relatedSlugs: ["house-cleaning", "move-out-cleaning", "airbnb-cleaning"],
    aiOverview:
      "Deltona Cleaning provides apartment and condo cleaning across Deltona, FL with building-access coordination, quiet shared-wall protocols, kitchenette and bathroom sanitation, floor care, and balcony sweeping when accessible. Apartment owners and renters book recurring or one-time visits without disrupting neighbors.",
    features: [
      "Living area and bedroom tidying",
      "Kitchenette / kitchen deep attention",
      "Bathroom sanitation",
      "Floor care for all surface types",
      "Balcony sweeping / cleaning when accessible",
      "Trash and recycling removal",
      "Dusting electronics and surfaces",
      "Changing bed linens on request",
    ],
    benefits: [
      {
        title: "Maximize Space",
        description: "A clean, decluttered apartment feels larger and more inviting.",
      },
      {
        title: "Building-Aware Scheduling",
        description: "We work around access hours, elevators, and quiet rules.",
      },
      {
        title: "Trusted Entry",
        description: "Background-checked professionals for key or lockbox access.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Access Coordination",
        description: "Key release, buzz-in, lockbox, or front-desk instructions confirmed.",
      },
      {
        step: "2",
        title: "Efficient Clean",
        description: "Checklist optimized for smaller footprints and storage limits.",
      },
      {
        step: "3",
        title: "Respectful Service",
        description: "Noise-aware work for shared walls and common areas.",
      },
      {
        step: "4",
        title: "Secure Exit",
        description: "Unit locked and access method returned as instructed.",
      },
    ],
    faqs: [
      {
        question: "Do you bring your own supplies to apartments?",
        answer:
          "Yes. We bring equipment and supplies so you do not need to store bulky cleaners in a small unit.",
      },
      {
        question: "Can you clean while I am at work?",
        answer:
          "Absolutely. Many apartment clients schedule mid-day visits and come home to a finished unit.",
      },
      {
        question: "Do you offer move-out cleans for apartments?",
        answer:
          "Yes. See our Move-Out Cleaning service for deposit-focused vacancy cleans and photo documentation.",
      },
    ],
  },
  {
    slug: "airbnb-cleaning",
    title: "Airbnb & Vacation Rental Cleaning in Deltona, FL",
    shortTitle: "Airbnb Cleaning",
    description:
      "Same-day Airbnb and vacation rental turnover cleaning in Deltona. Linen resets, restock checks, and photo proof before the next guest.",
    fullDescription:
      "Short-term rental hosts do not buy “a clean house”—they buy protected Cleanliness scores and on-time turns. Deltona Cleaning runs guest-turn SOPs for Airbnb, VRBO, and similar listings: linen reset, restock verification, odor protocols, bathroom hotel-level detail, and timestamped photos uploaded before the next check-in. Same-day dual-turn capacity is available when calendars allow and lockbox or smart-lock access is confirmed.",
    icon: KeyRound,
    audiences: ["Airbnb hosts", "VRBO hosts", "Property managers"],
    relatedSlugs: ["move-out-cleaning", "apartment-cleaning", "house-cleaning"],
    aiOverview:
      "Deltona Cleaning handles Airbnb and vacation rental turnover cleaning in Deltona, FL with linen resets, restock checks, odor protocols, bathroom detail, and timestamped photo proof before the next guest check-in. Hosts and property managers use same-day turns to protect Cleanliness review scores across Central Florida short-term rentals.",
    features: [
      "Full guest-turn clean of living areas, beds, kitchen, and baths",
      "Linen strip, remake, and laundry coordination options",
      "Restock checklist (toiletries, paper, trash liners, basics)",
      "Odor and pet protocol when disclosed",
      "Kitchen appliance exteriors and sink detail",
      "Bathroom hotel-level sanitation",
      "Trash out and staging reset",
      "Pre-check-in photo proof pack",
    ],
    benefits: [
      {
        title: "Review Protection",
        description: "Cleanliness-focused SOPs reduce the #1 category that tanks ratings.",
      },
      {
        title: "Same-Day Turns",
        description: "Tight calendars get priority scheduling when access is ready.",
      },
      {
        title: "Host Visibility",
        description: "Photo proof before check-in means fewer “was it clean?” disputes.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Calendar Sync",
        description: "Checkout/check-in window, lockbox, and linen plan confirmed.",
      },
      {
        step: "2",
        title: "Turn Execution",
        description: "Clean, linen reset, restock, and staging in one pass.",
      },
      {
        step: "3",
        title: "Photo Proof",
        description: "Timestamped photos of beds, baths, kitchen, and living areas.",
      },
      {
        step: "4",
        title: "Guest-Ready Lock",
        description: "Unit secured and host notified before next arrival.",
      },
    ],
    faqs: [
      {
        question: "How much does Airbnb turnover cleaning cost in Deltona?",
        answer:
          "Pricing scales with bedrooms, baths, and whether linens are included. Most Deltona STR turns start in a similar range to residential cleans for the same size, with rush same-day turns priced higher. Request a quote with your bedroom count and turnover window.",
      },
      {
        question: "Do you supply linens?",
        answer:
          "We can remake beds with host-supplied linen pars or coordinate laundry add-ons. Tell us your par levels and where clean sets are stored.",
      },
      {
        question: "Can you handle same-day dual turns?",
        answer:
          "Yes when both units have confirmed access and realistic time windows. Book early for weekend peak calendars.",
      },
    ],
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning in Deltona, FL",
    shortTitle: "Post-Construction Cleaning",
    description:
      "Rough, soft, and final post-construction cleaning in Deltona for remodels and new builds. HEPA-aware dust control and punch-list ready.",
    fullDescription:
      "Construction dust is not ordinary household dirt. Deltona Cleaning runs a three-phase post-construction protocol—rough, soft, and final—so homeowners and general contractors can hand over a livable, inspectable space. We focus on fine dust on horizontal surfaces, tracks, fixtures, cabinets, and floors, coordinate around punch lists, and use methods appropriate for new finishes. Florida humidity means leftover dust plus moisture is a mold-risk story competitors skip; we do not.",
    icon: HardHat,
    audiences: ["Homeowners", "General contractors", "Remodelers"],
    relatedSlugs: ["deep-cleaning", "move-out-cleaning", "commercial-office-cleaning"],
    aiOverview:
      "Deltona Cleaning provides rough, soft, and final post-construction cleaning in Deltona, FL for remodels and new builds. Crews remove construction dust from floors, tracks, fixtures, and cabinets, coordinate punch lists with general contractors, and prepare homes for final walkthrough across Volusia County.",
    features: [
      "Rough clean: debris removal and primary dust pass",
      "Soft clean: detail dust on surfaces, fixtures, and millwork",
      "Final clean: glass, floors, appliances, and touch-up detail",
      "Window track and sill attention",
      "Cabinet interior wipe-downs when accessible",
      "Floor care appropriate to finish type",
      "Fixture and switch plate detailing",
      "Punch-list coordination with GC or homeowner",
    ],
    benefits: [
      {
        title: "Three-Phase Clarity",
        description: "Know which stage you are buying—rough, soft, or final.",
      },
      {
        title: "Finish Protection",
        description: "Methods matched to new floors, paint, and hardware.",
      },
      {
        title: "Walkthrough Ready",
        description: "Spaces prepared for owner or inspector final review.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Phase Scoping",
        description: "We confirm rough vs soft vs final and site readiness.",
      },
      {
        step: "2",
        title: "Dust-First Protocol",
        description: "Top-down dust control before wet finishing work.",
      },
      {
        step: "3",
        title: "Detail & Floors",
        description: "Tracks, fixtures, glass, and floor finishing passes.",
      },
      {
        step: "4",
        title: "Punch Alignment",
        description: "We note remaining construction items that are not cleaning scope.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between rough, soft, and final post-construction cleaning?",
        answer:
          "Rough removes debris and heavy dust after major work. Soft details surfaces, fixtures, and millwork once the site is clearer. Final is the last pass—glass, floors, appliances, and touch-ups—before move-in or sale. Many projects need more than one phase.",
      },
      {
        question: "Do you remove construction debris and leftover materials?",
        answer:
          "We remove cleaning-related debris and dust. Bulk material hauling, scrap lumber, and contractor waste are outside standard cleaning scope unless arranged separately.",
      },
      {
        question: "When should I book post-construction cleaning in Deltona?",
        answer:
          "Book once utilities are on and the GC confirms the site is ready for the phase you need. Final cleans work best after punch-list painting and flooring are complete.",
      },
    ],
  },
  {
    slug: "commercial-office-cleaning",
    title: "Office & Commercial Cleaning in Deltona, FL",
    shortTitle: "Office Cleaning",
    description:
      "After-hours office and commercial cleaning in Deltona for small businesses, professional suites, and shared workspaces.",
    fullDescription:
      "First impressions and employee health depend on consistent facility hygiene—not a random weekend tidy. Deltona Cleaning provides after-hours and scheduled office cleaning for Deltona businesses: floors, restrooms, breakrooms, high-touch surfaces, and trash. We separate day-porter style touch-ups from full after-hours resets so office managers get the cadence that matches traffic, not a one-size commercial brochure.",
    icon: Briefcase,
    audiences: ["Office managers", "Business owners", "Professional suites"],
    relatedSlugs: ["restaurant-cafe-cleaning", "maintenance-cleaning", "post-construction-cleaning"],
    aiOverview:
      "Deltona Cleaning provides office and commercial cleaning in Deltona, FL with after-hours restroom sanitation, breakroom care, floor maintenance, trash removal, and high-touch disinfection. Office managers choose daily, weekly, or custom cadences for professional suites and small businesses across Volusia County.",
    features: [
      "Restroom sanitation and restocking support",
      "Breakroom / kitchenette surface care",
      "Trash and recycling removal",
      "Floor vacuuming and mopping",
      "High-touch disinfection (doors, switches, shared equipment exteriors)",
      "Glass and lobby spot cleaning",
      "Dusting of accessible surfaces",
      "Flexible after-hours scheduling",
    ],
    benefits: [
      {
        title: "Professional Image",
        description: "Clients and candidates walk into a consistently presentable space.",
      },
      {
        title: "After-Hours Execution",
        description: "Full resets happen when staff are gone.",
      },
      {
        title: "Flexible Cadence",
        description: "Daily, weekly, or custom plans—no unnecessary long lock-in.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Walkthrough",
        description: "We map restrooms, breakrooms, floors, and secure areas.",
      },
      {
        step: "2",
        title: "Scope & Schedule",
        description: "After-hours window and frequency locked with your manager.",
      },
      {
        step: "3",
        title: "Routine Service",
        description: "Checklist executed consistently each visit.",
      },
      {
        step: "4",
        title: "Feedback Loop",
        description: "We adjust scope as headcount or seasons change.",
      },
    ],
    faqs: [
      {
        question: "How often should a Deltona office schedule commercial cleaning?",
        answer:
          "High-traffic offices and shared restrooms often need daily or thrice-weekly service. Smaller professional suites commonly choose weekly after-hours cleans with a monthly deeper pass.",
      },
      {
        question: "Do you clean during business hours?",
        answer:
          "Most full cleans are after-hours. Limited day-porter style tasks can be arranged when disruption must stay minimal.",
      },
      {
        question: "Are contracts required?",
        answer:
          "We prefer clear schedules but do not force rigid multi-year lock-ins. Ask about flexible agreements that match your business.",
      },
    ],
  },
  {
    slug: "restaurant-cafe-cleaning",
    title: "Restaurant & Café Cleaning in Deltona, FL",
    shortTitle: "Restaurant Cleaning",
    description:
      "Restaurant and café cleaning in Deltona for dining rooms, front-of-house, and kitchen-adjacent surfaces—built around closing shifts.",
    fullDescription:
      "Food service spaces collect grease film, floor soil, and high-touch contamination faster than offices. Deltona Cleaning supports Deltona restaurants and cafés with closing-shift and scheduled cleans for dining rooms, restrooms, front-of-house, and kitchen-adjacent surfaces. We do not replace specialized grease-trap plumbing or hood-contractor work; we keep the surfaces guests and inspectors see—floors, booths, restrooms, pass areas, and dining glass—consistently presentable between deeper vendor services.",
    icon: UtensilsCrossed,
    audiences: ["Restaurant owners", "Café operators", "F&B managers"],
    relatedSlugs: ["commercial-office-cleaning", "maintenance-cleaning", "post-construction-cleaning"],
    aiOverview:
      "Deltona Cleaning provides restaurant and café cleaning in Deltona, FL for dining rooms, restrooms, front-of-house floors, and kitchen-adjacent surfaces on closing-shift schedules. Operators use professional cleans between specialized hood and grease-trap vendor services to keep guest-facing areas inspection-ready.",
    features: [
      "Dining room floor care and table/booth wipe-downs",
      "Restroom deep sanitation",
      "Front-of-house glass and entry attention",
      "High-touch disinfection for doors and POS-adjacent surfaces",
      "Kitchen-adjacent floor and pass-area support",
      "Trash removal from service areas",
      "Closing-shift friendly scheduling",
      "Custom checklists per concept",
    ],
    benefits: [
      {
        title: "Guest-Facing Consistency",
        description: "Dining rooms and restrooms stay ready for the next open.",
      },
      {
        title: "Clear Scope Boundaries",
        description: "Surface cleaning that complements—not claims to replace—hood/trap vendors.",
      },
      {
        title: "Closing-Shift Fit",
        description: "Teams work when service ends so staff can go home.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Concept Walkthrough",
        description: "We separate FOHs, restrooms, and kitchen-adjacent zones.",
      },
      {
        step: "2",
        title: "Closing Checklist",
        description: "Scope matched to your close time and vendor schedule.",
      },
      {
        step: "3",
        title: "Service Nights",
        description: "Crew executes the checklist after last seating.",
      },
      {
        step: "4",
        title: "Manager Notes",
        description: "Issues outside cleaning scope (equipment, traps) are flagged.",
      },
    ],
    faqs: [
      {
        question: "Do you clean commercial kitchen hoods and grease traps?",
        answer:
          "No. Hood cleaning and grease-trap pumping require specialized vendors. We clean guest-facing and kitchen-adjacent surfaces and coordinate timing around those vendors.",
      },
      {
        question: "Can you clean after late closes?",
        answer:
          "Yes. We schedule around your last seating and staff exit so the dining room is ready for open.",
      },
      {
        question: "What chemicals do you use near food-service areas?",
        answer:
          "We use appropriate food-service-safe practices for front-of-house and restroom zones and follow label directions. Tell us about any material sensitivities on booths or floors.",
      },
    ],
  },
  {
    slug: "maintenance-cleaning",
    title: "Maintenance Cleaning Plans in Deltona, FL",
    shortTitle: "Maintenance Cleaning",
    description:
      "Custom maintenance cleaning plans for high-traffic Deltona homes and small commercial spaces. Prevention-focused checklists.",
    fullDescription:
      "Maintenance cleaning is prevention, not rescue. Designed for busy households and small commercial spaces in Deltona, this service keeps high-traffic zones presentable between deeper cleans. We agree on frequency and a focused checklist—entries, restrooms, kitchens/breakrooms, floors, and trash—so dirt never gets a chance to grind into finishes.",
    icon: CalendarRange,
    audiences: ["Homeowners", "Small offices", "Property managers"],
    relatedSlugs: ["house-cleaning", "commercial-office-cleaning", "restaurant-cafe-cleaning"],
    aiOverview:
      "Deltona Cleaning maintenance plans keep high-traffic homes and small commercial spaces in Deltona, FL consistently presentable with scheduled restroom sanitation, kitchen or breakroom care, floor maintenance, trash removal, and surface disinfection. Clients choose daily or weekly cadences without long-term lock-in pressure.",
    features: [
      "Daily or weekly schedule options",
      "Focus on high-traffic zones (entries, hallways)",
      "Restroom sanitation and restocking",
      "Kitchen / breakroom maintenance",
      "Trash removal",
      "Surface disinfection",
      "Glass and window spot cleaning",
      "Floor maintenance",
    ],
    benefits: [
      {
        title: "Always Guest-Ready",
        description: "Homes and small offices stay presentable between deep cleans.",
      },
      {
        title: "Preventative Care",
        description: "Stops grit from grinding into floors and furniture.",
      },
      {
        title: "Flexible Agreements",
        description: "Cadence adjusts as your traffic changes.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Consultation",
        description: "We identify high-priority zones and traffic patterns.",
      },
      {
        step: "2",
        title: "Schedule Setup",
        description: "Frequency matched to your household or business flow.",
      },
      {
        step: "3",
        title: "Routine Care",
        description: "Checklist executed consistently each visit.",
      },
      {
        step: "4",
        title: "Feedback Loop",
        description: "We adjust the plan as needs evolve.",
      },
    ],
    faqs: [
      {
        question: "Is maintenance cleaning different from regular house cleaning?",
        answer:
          "It is more frequent and focused on keeping a baseline—high-traffic zones and essentials—rather than a full detailed home clean every visit.",
      },
      {
        question: "Do you service small offices on maintenance plans?",
        answer:
          "Yes. Small offices and light commercial spaces are a core use case alongside busy homes.",
      },
      {
        question: "Are long contracts required?",
        answer:
          "No. We offer flexible agreements so you are not locked into terms that no longer fit.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const blogPosts = [
  {
    slug: "deltona-move-out-cleaning-landlord-inspection-checklist",
    title:
      "Move-Out Cleaning Inspection Checklist for Deltona, FL Landlords & Property Managers",
    description:
      "What Deltona landlords and property managers check on move-out cleaning inspections—fail zones, photo proof standards, time benchmarks, and vacancy SLAs.",
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    cluster: "move-out" as const,
  },
] as const;
