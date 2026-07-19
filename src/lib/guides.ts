export interface Guide {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  quickAnswer: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
}

export const guides: Guide[] = [
  {
    slug: "deltona-house-cleaning-cost-guide",
    title: "Deltona House Cleaning Cost and Pricing Guide",
    description: "Learn what shapes house cleaning prices in Deltona, how service types differ, and how to compare quotes without relying on misleading one-size-fits-all rates.",
    published: "2026-07-19",
    updated: "2026-07-19",
    quickAnswer: "House cleaning prices in Deltona depend on the home's size, bathrooms, condition, service depth, frequency, and optional tasks. The most useful quote defines exactly what is included. Compare scope, insurance, scheduling, and correction policies—not only the lowest headline number.",
    sections: [
      {
        heading: "What determines the price of house cleaning in Deltona?",
        paragraphs: [
          "No responsible cleaner can price every Deltona home from bedroom count alone. Two three-bedroom houses can require very different labor when one is maintained every week and the other needs a first visit after months without detailed cleaning. Bathrooms, square footage, pets, floor type, stairs, clutter, and buildup all affect the work.",
          "Local housing also varies. Deltona has established single-family homes, newer renovations, rentals, and properties with screened patios or garages that may or may not be part of the requested scope. Tell the company which spaces are included and whether water, electricity, parking, and straightforward entry are available.",
        ],
        bullets: ["Approximate square footage and number of bathrooms", "Standard, deep, move-related, or post-construction scope", "Current condition and time since the last detailed clean", "Weekly, biweekly, monthly, or one-time frequency", "Add-ons such as oven, refrigerator, or interior-window cleaning"],
      },
      {
        heading: "How do standard, deep, and move-out cleaning quotes differ?",
        paragraphs: [
          "Standard cleaning maintains an already workable baseline. It usually concentrates on reachable dusting, kitchens, bathrooms, vacuuming, mopping, and trash. Deep cleaning allows more time for detail areas such as baseboards, door frames, fans, fixtures, and stubborn bathroom or kitchen buildup.",
          "Move-in and move-out work is most efficient in an empty property. Cabinet interiors, appliance interiors, closets, and exposed floors are common priorities, but carpet extraction, wall repair, hauling, and pest treatment may be separate services. Post-construction dust is another category because fine particles settle repeatedly and require a different sequence.",
        ],
      },
      {
        heading: "How can you compare Deltona cleaning quotes fairly?",
        paragraphs: [
          "Ask each provider to describe the rooms, tasks, add-ons, and exclusions in writing. A lower quote may cover less, assume a shorter visit, or exclude appliance interiors. A higher quote may include a first-time reset, supplies, insurance, and a documented quality process.",
          "Also ask what happens when the home differs from the booking description. A trustworthy process pauses to confirm added scope instead of surprising the customer afterward. Verify cancellation terms, access expectations, payment timing, and how quickly concerns must be reported.",
        ],
        bullets: ["Is the quote flat-rate, hourly, or an estimate range?", "Are supplies and equipment included?", "Are cleaners insured and screened under the company's stated policy?", "Which tasks cost extra or require photos first?", "Is there a clear process for missed checklist items?"],
      },
      {
        heading: "When does recurring cleaning offer better value?",
        paragraphs: [
          "Recurring service can reduce the amount of catch-up work required each visit because kitchens, baths, and floors do not return to a deep-clean condition. Weekly service fits busy households, pets, frequent cooking, or regular guests. Biweekly service is a common middle ground for smaller households that maintain surfaces between visits.",
          "Monthly service can work for light occupancy, but it should not be expected to complete a deep-clean checklist every time. A practical approach is to start with an honest reset and then choose the longest interval that keeps buildup under control.",
        ],
      },
    ],
    faqs: [
      { question: "Can I get an exact Deltona cleaning price without sharing home details?", answer: "Usually not. An accurate estimate needs at least the service type, square footage, bathrooms, condition, frequency, and add-ons. Photos can help with heavy buildup or unusual spaces." },
      { question: "Does a lower hourly rate always mean a lower final bill?", answer: "No. The total depends on the number of cleaners, hours, included tasks, and whether the company caps or confirms additional time." },
      { question: "Should I tip a house cleaner?", answer: "Tipping is optional unless a company states otherwise. Clear feedback, prepared access, and prompt communication are also helpful ways to support good service." },
    ],
    sources: [
      { label: "U.S. Bureau of Labor Statistics — Maids and housekeeping cleaners", href: "https://www.bls.gov/oes/current/oes372012.htm" },
      { label: "IRS — Standard mileage rates and transportation cost context", href: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
    ],
  },
  {
    slug: "move-in-cleaning-checklist-deltona-rentals",
    title: "Move-In Cleaning Checklist for Deltona Rentals",
    description: "A room-by-room cleaning and documentation checklist for renters moving into Deltona apartments and rental homes.",
    published: "2026-07-19",
    updated: "2026-07-19",
    quickAnswer: "Clean a Deltona rental after repairs are finished and before boxes arrive. Photograph the property's condition first, keep utilities on, then work top-to-bottom through kitchens, bathrooms, storage, fixtures, and floors. Report maintenance or moisture problems separately instead of trying to clean over them.",
    sections: [
      {
        heading: "What should you do before cleaning a Deltona rental?",
        paragraphs: [
          "Start with documentation, not a mop. Walk through the empty property in daylight and photograph walls, floors, appliances, cabinets, windows, and any existing damage. Use the landlord or property manager's condition form when one is provided. Cleaning can improve a surface, but it should not erase your record of stains, chips, leaks, or broken fixtures.",
          "Confirm that maintenance, painting, pest treatment, and contractor work are complete. Leave water and electricity active so bathrooms, appliances, lights, and floors can be checked properly. Ask who is responsible for trash, abandoned items, carpet extraction, and appliance interiors before booking duplicate work.",
        ],
      },
      {
        heading: "How should you clean the kitchen before unpacking?",
        paragraphs: [
          "Begin above counter height: cabinet tops, upper doors, shelves, and the hood exterior. Then wipe empty cabinet and drawer interiors, counters, backsplash, sink, and appliance exteriors. Refrigerator and oven interiors should be explicitly included because they often require more time than a routine visit.",
          "Inspect under sinks for active drips, swollen cabinet material, pests, or musty odor. Those are maintenance concerns to report, not evidence that stronger fragrance or bleach is the answer. Finish with baseboards and floors only after upper surfaces are complete.",
        ],
        bullets: ["Photograph appliance condition and model information", "Test that the refrigerator cools and the oven is empty", "Wipe shelves before dishes or pantry goods arrive", "Report leaks or damaged seals to property management", "Keep food away from freshly treated pest-control areas"],
      },
      {
        heading: "What belongs on the bathroom and bedroom checklist?",
        paragraphs: [
          "Bathrooms need more than visible shine. Clean and inspect the toilet, sink, counter, mirror, tub or shower, fixtures, exhaust cover, baseboards, and floor edges. Check caulk and grout for gaps or recurring discoloration. If staining returns quickly or material feels soft, request maintenance assessment.",
          "In bedrooms, dust fans, ledges, blinds, sills, closet shelves, doors, and baseboards before vacuuming or mopping. Empty closets are the easiest time to clean corners and document shelf damage. If carpet cleaning is required by the lease or promised by the landlord, confirm it before furniture blocks access.",
        ],
      },
      {
        heading: "How do you plan move-in day around the clean?",
        paragraphs: [
          "Schedule cleaning after keys are available but before movers. Provide gate codes, lockbox instructions, parking rules, and a local contact. Deltona rental homes may have garages, screened patios, or utility rooms; state whether those spaces are included instead of assuming they are part of a standard interior clean.",
          "Do a final walkthrough after cleaning and before unpacking. Confirm that windows and doors are locked, thermostat settings are appropriate, water is not running, and photos are saved with the move-in condition record. Keep cleaning receipts with lease documents, but remember that a receipt does not replace written notice of maintenance defects.",
        ],
      },
    ],
    faqs: [
      { question: "Should a Deltona rental be empty for move-in cleaning?", answer: "Yes when possible. Empty cabinets, closets, and floors allow a more complete clean and make pre-existing damage easier to document." },
      { question: "Does move-in cleaning include mold remediation?", answer: "No. Routine surface cleaning is different from diagnosing moisture problems or remediating extensive mold. Report leaks and suspected structural moisture to the property manager and use qualified specialists when needed." },
      { question: "Who is responsible for cleaning before move-in?", answer: "Responsibility depends on the lease, turnover agreement, and property condition. Review the documents and communicate with the landlord or manager rather than relying on a generic rule." },
    ],
    sources: [
      { label: "Florida Statutes — Residential tenancies, landlord obligations", href: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/0083.html" },
      { label: "EPA — A brief guide to mold, moisture and your home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home" },
    ],
  },
  {
    slug: "humidity-mold-conscious-cleaning-volusia-county",
    title: "Humidity and Mold-Conscious Cleaning Tips for Volusia County",
    description: "Practical humidity-aware cleaning habits for Deltona and Volusia County homes, including moisture control, bathroom routines, and when to call a specialist.",
    published: "2026-07-19",
    updated: "2026-07-19",
    quickAnswer: "Mold-conscious cleaning starts with moisture control. Keep indoor humidity in the range recommended by public-health guidance, run bathroom and kitchen exhaust, dry wet materials promptly, and correct leaks. Routine cleaners can address ordinary surface soil; recurring growth, large affected areas, or HVAC contamination needs qualified assessment.",
    sections: [
      {
        heading: "Why does humidity change cleaning in Volusia County?",
        paragraphs: [
          "Deltona and inland Volusia County experience long warm, humid periods. Air-conditioning removes moisture while it cools, but bathrooms, laundry areas, closed closets, and rooms with weak airflow can still stay damp. Dust and soap film also give discoloration more material to cling to.",
          "The EPA advises keeping indoor relative humidity below 60 percent and ideally between 30 and 50 percent when possible. A small hygrometer can reveal patterns that are not obvious by feel. Humidity readings do not diagnose mold, but they help homeowners decide when ventilation, dehumidification, or HVAC service deserves attention.",
        ],
      },
      {
        heading: "Which cleaning habits reduce moisture-related buildup?",
        paragraphs: [
          "Use exhaust fans during showers and continue ventilation afterward. Squeegee shower glass or walls, hang towels so they dry fully, and avoid leaving damp bath mats bunched on the floor. Clean soap film regularly because smooth, dry surfaces are easier to monitor.",
          "In kitchens and laundry rooms, wipe condensation, keep sink cabinets dry, and check hoses or supply lines for slow leaks. Vacuum dust from reachable vent covers and keep furniture from blocking returns. Never mix cleaning chemicals; the CDC specifically warns against mixing bleach with ammonia or other cleaners.",
        ],
        bullets: ["Dry wet spills and materials promptly", "Use bathroom and kitchen exhaust that vents properly", "Wash and fully dry reusable cloths and bath mats", "Leave space for airflow in closets and behind large furniture", "Track recurring odor or discoloration instead of covering it with fragrance"],
      },
      {
        heading: "What should you do when you find recurring discoloration?",
        paragraphs: [
          "First look for the water source: a plumbing leak, failed caulk, roof intrusion, condensation, or insufficient ventilation. Cleaning the visible mark without correcting moisture often means it returns. Photograph the area and note whether it expands after rain, showering, or air-conditioning cycles.",
          "The EPA notes that small areas may sometimes be handled by occupants, while extensive contamination, sewage-related water, hidden growth, or HVAC involvement calls for additional caution and professional help. Renters should notify property management in writing when leaks or recurring moisture appear.",
        ],
      },
      {
        heading: "How can a recurring cleaner support a mold-conscious home?",
        paragraphs: [
          "A house cleaner can keep bathrooms, kitchens, floors, and reachable surfaces free of ordinary soil, report visible changes, and follow owner-approved products. A cleaner is not a moisture inspector or mold remediator and should not make medical or structural claims.",
          "Create a short communication list: recurring shower-corner discoloration, musty cabinets, condensation near vents, or a leak awaiting repair. This makes each visit more useful while preserving the boundary between maintenance cleaning and specialist work.",
        ],
      },
    ],
    faqs: [
      { question: "What indoor humidity level should a Deltona home target?", answer: "EPA guidance says indoor relative humidity should stay below 60 percent and ideally between 30 and 50 percent when possible. Home conditions and HVAC design vary, so persistent issues may need professional evaluation." },
      { question: "Can bleach be mixed with another cleaner for stronger results?", answer: "No. Never mix bleach with ammonia or other cleaners. Follow the product label, ventilate the area, and keep products away from children and pets." },
      { question: "Does house cleaning remove a serious mold problem?", answer: "No. Routine cleaning is not mold remediation. Large, recurring, hidden, sewage-related, or HVAC-associated contamination needs appropriate professional assessment." },
    ],
    sources: [
      { label: "EPA — Mold course, humidity and moisture guidance", href: "https://www.epa.gov/mold/mold-course-chapter-2" },
      { label: "EPA — A brief guide to mold, moisture and your home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home" },
      { label: "CDC — Cleaning and disinfecting with bleach safety", href: "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html" },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
