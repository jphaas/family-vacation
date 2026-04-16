const DESTINATIONS = [
  {
    slug: "denmark",
    name: "Denmark",
    tagline: "Near-perfect July weather, world-class kid attractions, and Scandinavian design culture make Denmark an exceptional family destination where adults get deep cultural richness without compromising the kid experience.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional adult appeal with strong kid-fit throughout including Tivoli, LEGO Store, cargo-bike tours, castles, and interactive museums."
      },
      stress: {
        raw: 4,
        rationale: "Direct 7.5h JFK-CPH flights, minimal 6h jet lag, flat and bikeable cities, but 3-base itinerary with train transitions."
      },
      showstoppers: {
        raw: 5,
        rationale: "No meaningful risk of trip-canceling events: no hurricanes, wildfires, volcanic activity, or political instability."
      },
      weather: {
        raw: 5,
        rationale: "July highs average 70F, record extremes rarely exceed 82F, long 17+ hour daylight with moderate brief showers."
      },
      cost: {
        raw: 2.5,
        rationale: "Scandinavian pricing on food, lodging, and activities pushes the total to $12,000-$14,000 for 14 nights."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Tivoli, LEGO Store, cargo-bike tours, and fairy-tale museums are tailor-made for a 5-year-old; 2-year-old benefits from flat terrain and stroller-friendly infrastructure."
      },
      accommodations: {
        raw: 5,
        rationale: "Scandinavian design culture means uniformly clean, modern inventory with strong Airbnb apartment stock and modern hotel chains."
      },
      total: 46.25
    },
    pills: [
      {
        text: "70F avg highs",
        type: "good"
      },
      {
        text: "7.5h nonstop JFK",
        type: "good"
      },
      {
        text: "$12K-$14K",
        type: "warn"
      },
      {
        text: "No show-stopper risks",
        type: "good"
      },
      {
        text: "Rain ~12 days/mo",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Tivoli Gardens",
        summary: "The world's second-oldest amusement park with enchanting gardens, gentle rides, and Saturday fireworks.",
        detail: "Steps from Central Station, Tivoli offers age-appropriate rides, the Rasmus Klump playground, live performances, and surprisingly good restaurants. Kids under 3 free; Copenhagen Card covers admission."
      },
      {
        name: "Nyhavn + Canal Boat Tour",
        summary: "Copenhagen's iconic candy-colored waterfront with frequent canal tours past palaces and the Opera House.",
        detail: "Boats depart every 15 minutes in summer, gliding past Christiansborg Palace and The Little Mermaid. Kids love the water; adults get a living postcard of Danish history. Stroller-friendly quayside."
      },
      {
        name: "Cargo-Bike Family Tour",
        summary: "Guided 3-4 hour electric cargo-bike tour covering Christianshavn, Nyhavn, palaces, and harbor parks.",
        detail: "Naomi rides a tandem attachment while Hannah rides in the cargo box. Peak Copenhagen experience for a cycling-culture family, covering more ground than walking with zero kid fatigue."
      },
      {
        name: "ARoS Art Museum + Rainbow Panorama",
        summary: "Olafur Eliasson's 150m rainbow-glass walkway atop one of Scandinavia's largest art museums.",
        detail: "Kids interact with installations and do art workshops while adults get serious contemporary art across 10 floors. Free for under-18s. The Rainbow Panorama is universally jaw-dropping."
      },
      {
        name: "Den Gamle By (Old Town), Aarhus",
        summary: "Open-air museum with buildings from the 1500s-1970s, costumed actors, and hands-on activities.",
        detail: "Naomi can shop in a 1920s grocer while Hannah toddles cobblestone streets. Adults get immersive Danish social history spanning 500 years with period shops and character actors."
      },
      {
        name: "H.C. Andersen's House, Odense",
        summary: "Kengo Kuma-designed museum with two-thirds underground, featuring interactive storytelling exhibits.",
        detail: "Five circular pavilions beneath a fairy-tale garden with listening stations and artifact displays. Naomi is the perfect age for fairy tales; adults appreciate the architecture and biographical depth."
      },
      {
        name: "Egeskov Castle",
        summary: "One of Europe's best-preserved Renaissance moated castles with award-winning gardens and adventure playground.",
        detail: "Built in 1554, featuring hedge mazes, a tree-top walk, vintage car museum, and large playground. A full half-day excursion about 30 minutes from Odense that works for the whole family."
      },
      {
        name: "Rosenborg Castle + King's Garden",
        summary: "17th-century castle housing the Danish crown jewels, surrounded by Copenhagen's oldest and most popular park.",
        detail: "The King's Garden is perfect for a picnic and letting kids run free. Copenhagen Card covers admission. The crown jewels offer a quick wow factor before heading outside."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Copenhagen",
          nights: 7,
          activities: "Tivoli Gardens, Nyhavn canal cruise, cargo-bike tour, Rosenborg Castle, LEGO Store, Experimentarium, day trip to Moens Klint chalk cliffs"
        },
        {
          name: "Odense",
          nights: 3,
          activities: "H.C. Andersen's House, Egeskov Castle, Funen Village open-air museum"
        },
        {
          name: "Aarhus",
          nights: 4,
          activities: "ARoS art museum, Den Gamle By, Moesgaard Museum, botanical garden, Deer Park"
        }
      ],
      note: "Three bases connected by short 1.5h train rides with kids under 12 riding free. No car rental needed. An alternative 2-base plan drops Odense for Copenhagen 8 + Aarhus 6."
    },
    showstopperRisks: [
      {
        name: "Extreme heat wave",
        level: "VERY LOW",
        detail: "Denmark's July average high is 70F. Record highs occasionally reach 88-91F but sustained heat waves above 82F are very rare, under 5% probability. Even in a warm spell, evenings cool to 55-59F. Probability of trip disruption is under 2%."
      },
      {
        name: "Severe weather or flooding",
        level: "VERY LOW",
        detail: "Copenhagen has invested heavily in flood resilience. Brief rain showers are common but storms causing trip disruption are extremely unlikely in July, under 1% probability."
      }
    ],
    routineHazards: [
      {
        name: "Rain",
        detail: "Expect about 12 days with some rain in July, typically brief showers. Pack light rain jackets and plan indoor backup activities."
      },
      {
        name: "Cycling safety",
        detail: "Copenhagen's bike infrastructure is world-class but first-timers should learn right-of-way norms. Cargo-bike tours with guides are safest for families."
      },
      {
        name: "Cobblestones",
        detail: "Old town areas in Aarhus and Odense have uneven cobblestones. Bring a sturdy stroller with good suspension."
      },
      {
        name: "Water safety",
        detail: "Harbor baths have lifeguards in summer. Supervise toddlers closely at any waterside location."
      }
    ],
    accommodations: "Copenhagen offers 2-bedroom Airbnb apartments in Vesterbro or Frederiksberg with modern Scandinavian design, full kitchens, and walkability to Tivoli at $250-350/night. Odense is compact with fewer tourists and apartments at $150-200/night. Aarhus has modern apartment hotels and Wakeup-style budget options at $180-280/night. Scandinavian cleanliness standards are uniformly high across all three cities.",
    logistics: "Direct JFK-CPH nonstop on SAS or Delta in about 7.5 hours with daily service. DSB trains connect all three cities in 1.5 hours each, with kids 0-11 riding free. Copenhagen Card includes unlimited metro/bus/train plus 80 attractions. No car rental needed. Danes speak near-perfect English with zero language friction.",
    costBreakdown: "Flights run $3,200-$4,000 for four round-trip. Lodging totals $3,500-$4,500 for 14 nights across three cities. Food, transport, and activities add $3,300-$4,600. Mid-range realistic total is $12,000-$14,000, with the Copenhagen Card, free kids transit, and self-catering helping offset Scandinavian prices.",
    pros: [
      "Near-perfect July weather for young kids with cool temps and no heat risk",
      "Uniformly excellent, modern, clean Scandinavian accommodations",
      "Extraordinarily family-friendly infrastructure: flat, bikeable, stroller paths, free kids transit",
      "Rich cultural depth for adults without compromising the kid experience",
      "English universally spoken with zero language friction",
      "No car rental needed -- trains connect everything"
    ],
    cons: [
      "Expensive Scandinavian pricing on food, lodging, and activities",
      "3-base itinerary adds two transition days",
      "Rain is frequent, requiring daily flexibility",
      "Limited serious hiking -- Denmark is flat with pastoral rather than dramatic nature",
      "6-hour time difference means 2-3 days of jet lag adjustment",
      "Some museum content is above young kids' heads"
    ]
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    tagline: "World-class art museums and purpose-built toddler attractions in the flattest, most stroller-friendly country in Europe, with direct flights and a clean 2-base itinerary.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional cultural depth plus genuinely great kid attractions like Miffy Museum, NEMO, Artis Zoo, and canal boats."
      },
      stress: {
        raw: 4.5,
        rationale: "Direct JFK-AMS flights in 7h15m, only 6h time difference, flat and stroller-friendly everywhere, English universally spoken, 2-base itinerary."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "No hurricanes, wildfires, volcanoes, or political instability; only realistic risk is an infrequent extreme heat wave."
      },
      weather: {
        raw: 4,
        rationale: "Average July high of 70F, well under the 82F ceiling, though 14 rain days per month and occasional heat wave days are possible."
      },
      cost: {
        raw: 3,
        rationale: "Peak-summer Amsterdam is expensive with an estimated 14-night total of $10,000-$12,000."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Miffy Museum targets ages 2-6, NEMO has toddler-specific floors, Artis Zoo is stroller-friendly, and canal boats enchant all ages."
      },
      accommodations: {
        raw: 4,
        rationale: "Clean modern housing stock with apartment-hotels and Airbnbs in family-friendly neighborhoods, though steep stairs in older buildings require filtering."
      },
      total: 44.75
    },
    pills: [
      {
        text: "70F avg highs",
        type: "good"
      },
      {
        text: "7h15m nonstop JFK",
        type: "good"
      },
      {
        text: "$10K-$12K",
        type: "warn"
      },
      {
        text: "Best stroller city in Europe",
        type: "good"
      },
      {
        text: "Rain ~14 days/mo",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Rijksmuseum + Van Gogh Museum",
        summary: "Two world-class art museums steps apart on Museumplein with stroller access and free under-18 entry at Rijksmuseum.",
        detail: "Strategy: one parent does a focused 90-min visit while the other takes kids to the Museumplein playground, then swap. Van Gogh's vivid colors hold young kids' attention briefly. Both museums loan strollers."
      },
      {
        name: "NEMO Science Museum",
        summary: "A 5-story ship-shaped building of hands-on experiments with a purpose-built toddler floor.",
        detail: "The ground-floor World of Shapes is designed for toddlers with giant blocks and sensory play. Upper floors thrill a 5-year-old with water tables and chain reactions. Rooftop splash pad in summer. Free under 4."
      },
      {
        name: "Miffy Museum (Utrecht)",
        summary: "A 12-room interactive wonderland designed specifically for ages 2-6 based on Dick Bruna's beloved character.",
        detail: "Each room recreates a Miffy story with kid-scale furniture and tactile play. Naomi is the bullseye age; Hannah engages with the sensory elements. Book timed tickets well in advance as it sells out."
      },
      {
        name: "Canal Boat Cruises",
        summary: "75-minute family canal cruises through UNESCO World Heritage canal ring with kids audio pirate story.",
        detail: "The gentle motion often puts toddlers to sleep while adults absorb 400 years of merchant-house architecture. Also possible to rent a small electric boat and self-navigate the canals."
      },
      {
        name: "Hoge Veluwe + Kroller-Muller Museum",
        summary: "Netherlands' largest national park with 40km of car-free cycling on free white bicycles plus a world-class Van Gogh collection.",
        detail: "1,800 free bikes available including child seats at park entrances. The Kroller-Muller has an enormous outdoor sculpture garden where kids can run free. Wildlife spotting for deer and wild boar adds adventure."
      },
      {
        name: "Artis Royal Zoo",
        summary: "Amsterdam's historic zoo with elephants, giraffes, penguins, and a walk-through lemur enclosure on flat stroller-friendly paths.",
        detail: "Free under 3. Newly reopened aquarium in 2026. The Artis de Partis trail gives young children a structured adventure route. Planetarium included. A reliable half-day activity."
      },
      {
        name: "Kinderdijk Windmills",
        summary: "19 UNESCO-listed windmills from 1740 along flat, paved, stroller-friendly paths where kids can go inside working windmills.",
        detail: "Boat tours run April through October. The iconic Dutch landscape is photogenic and genuinely interesting. About 90 minutes from Amsterdam, works as a day trip from either base."
      },
      {
        name: "Vondelpark + Amsterdam Neighborhoods",
        summary: "120-acre central park with six playgrounds, wading pools, and cafes surrounded by quintessentially walkable European neighborhoods.",
        detail: "The Jordaan, De Pijp, and Oud-West neighborhoods offer markets, bakeries, cheese shops, and brown cafes. Stroopwafels and poffertjes from street vendors are kid magnets."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Amsterdam",
          nights: 8,
          activities: "Canal cruise, NEMO, Rijksmuseum, Van Gogh Museum, Artis Zoo, Vondelpark, Kinderdijk day trip, Haarlem day trip"
        },
        {
          name: "Utrecht",
          nights: 6,
          activities: "Miffy Museum, Centraal Museum, Hoge Veluwe + Kroller-Muller day trip, Kasteel de Haar, Giethoorn day trip"
        }
      ],
      note: "Two bases connected by a 30-minute train ride. No car rental needed except for Kinderdijk and Hoge Veluwe day trips. Kids 0-3 ride trains free; ages 4-11 ride free with Kids Vrij pass."
    },
    showstopperRisks: [
      {
        name: "Heat wave",
        level: "LOW",
        detail: "July 2025 saw the Netherlands' first official heat wave in 3 years with a record 91.8F. Climate models project increasing frequency. If a heat wave hits, museums, canal boats, and indoor attractions provide ample cooling. Most modern apartments have AC. Probability of a severe multi-day event that truly disrupts the trip is about 5%."
      }
    ],
    routineHazards: [
      {
        name: "Rain",
        detail: "14 days per month see some rainfall in July, typically brief showers. Pack rain jackets and a stroller rain cover."
      },
      {
        name: "Cycling traffic",
        detail: "Amsterdam has aggressive cyclist culture. Stay out of bike lanes and cross them with attention."
      },
      {
        name: "Canal water safety",
        detail: "Open canal edges throughout Amsterdam with no railings. Standard parental vigilance required."
      },
      {
        name: "Steep stairs in canal houses",
        detail: "Traditional Dutch houses have extremely narrow, steep staircases. Filter accommodation for elevator or ground-floor access."
      }
    ],
    accommodations: "Amsterdam apartment-hotels like The July and Zoku offer modern 2BR units with full kitchens for longer stays. For Airbnb, target Jordaan, Oud-West, or De Pijp at $250-300/night, filtering for post-2010 renovations to avoid the steep-staircase problem. Utrecht has smaller-city pricing at $180-250/night near the Oudegracht canal. Key filters: elevator or ground floor, washing machine, blackout curtains, and bathtub for toddler bath time.",
    logistics: "Direct JFK/EWR to Amsterdam Schiphol in 7h15m on Delta, United, and KLM with daily nonstops. NS trains are fast, frequent, and stroller-friendly, connecting Amsterdam-Utrecht in 30 minutes. Children 0-3 ride free; ages 4-11 ride free with Kids Vrij pass. English is spoken fluently by virtually everyone. Rent a car only for Kinderdijk and Hoge Veluwe day trips.",
    costBreakdown: "Flights run $3,500-$4,500 for four round-trip. Accommodation totals $3,200-$4,000 for 14 nights across two cities. Food, transport, and activities add $2,500-$3,700. Mid-range estimate is about $10,500, with Hannah free for flights, most museums, zoo, and transit.",
    pros: [
      "Best stroller infrastructure among European destinations -- flat, smooth, accessible everything",
      "Perfect age-fit: Miffy Museum, NEMO toddler floor, and Artis Zoo target exactly this age range",
      "World-class art for adults without sacrificing kid enjoyment",
      "7h direct flight, manageable 6h jet lag, English universally spoken",
      "Only 2 bases needed for a rich 14-day trip with excellent train connections",
      "Food culture is simple and kid-friendly with easy apartment cooking"
    ],
    cons: [
      "No hiking or mountain scenery -- terrain is flat everywhere",
      "Rain is frequent, requiring flexibility and rain gear",
      "Peak July pricing for accommodation and flights",
      "Amsterdam canals have no railings -- requires constant awareness",
      "Traditional Dutch buildings have notoriously steep stairs",
      "Countryside day trips require car rental and 90+ minute drives"
    ]
  },
  {
    slug: "sweden",
    name: "Sweden (Stockholm + Dalarna)",
    tagline: "Arguably the world's most family-friendly country, with purpose-built toddler attractions on Djurgarden, magical archipelago ferries, and a clean 2-base itinerary blending urban culture with red-cottage lake country.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional cultural depth with dedicated world-class kids attractions like Junibacken, Skansen, and the Vasa Museum plus archipelago scenery."
      },
      stress: {
        raw: 4,
        rationale: "8h direct JFK-ARN, only 6h time zone shift, 2-base itinerary, excellent public transit and stroller-friendly city."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "Politically stable with no hurricanes, earthquakes, or volcanic risk; heat wave events are still rare at roughly 1-in-50-year frequency."
      },
      weather: {
        raw: 4.5,
        rationale: "Average July highs 70-73F, firmly under the 82F ceiling, with 18+ hours of magical daylight and negligible humidity."
      },
      cost: {
        raw: 2.5,
        rationale: "Sweden is expensive with an estimated 14-night total of $10,000-$12,000 at Scandinavian pricing."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Junibacken is designed for ages 2-10, Skansen's children's zoo and ferry rides make this a toddler paradise, and Sweden is the most family-friendly country in the world."
      },
      accommodations: {
        raw: 5,
        rationale: "Scandinavian accommodations are uniformly excellent: modern, clean, design-conscious apartments and well-maintained archipelago cabins."
      },
      total: 44.75
    },
    pills: [
      {
        text: "70-73F highs",
        type: "good"
      },
      {
        text: "8h nonstop JFK",
        type: "good"
      },
      {
        text: "$10K-$12K",
        type: "warn"
      },
      {
        text: "Best family-friendly country",
        type: "good"
      },
      {
        text: "AC uncommon",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Djurgarden Island",
        summary: "An entire island dedicated to museums, gardens, and family attractions including Junibacken, Skansen, and the Vasa Museum.",
        detail: "Junibacken features a storybook train ride through Astrid Lindgren worlds, designed for ages 2-10. Skansen is an open-air museum with Nordic animals and a children's zoo. The Vasa Museum houses a jaw-dropping 17th-century warship. All are stroller-accessible."
      },
      {
        name: "Gamla Stan (Old Town)",
        summary: "Medieval old town with narrow cobblestone alleys, the Royal Palace, and Nobel Prize Museum.",
        detail: "Best visited early morning to avoid crowds. Kids enjoy the tiny streets and ice cream shops. Cobblestones are stroller-unfriendly so a carrier is recommended for the toddler."
      },
      {
        name: "Stockholm Archipelago",
        summary: "30,000 islands stretching into the Baltic accessible by day-trip ferry, with nature islands offering swimming and hiking.",
        detail: "Day-trip to Vaxholm with its 16th-century fortress takes 40 minutes by ferry. Stay overnight on Grinda for family cabins and beach time. The ferry ride itself is the attraction for kids."
      },
      {
        name: "Dalarna Countryside / Lake Siljan",
        summary: "Sweden's cultural heartland with iconic red cottages, Dala horse workshops, and gentle lakeside walks.",
        detail: "Leksand and Rattvik are picturesque villages with swimming, rowing, and farm visits. A genuine change of pace from Stockholm. Kids love the water, animals, and wide-open spaces."
      },
      {
        name: "Fotografiska",
        summary: "World-class photography museum on the Sodermalm waterfront with rotating exhibitions, free for under-12s.",
        detail: "More of an adult highlight that happens to be kid-tolerant. Stroller-friendly with a child cafe and excellent harbor-view restaurant."
      },
      {
        name: "Archipelago Kayaking + Boat Excursions",
        summary: "Guided family kayak trips through sheltered waters or rented motorboats for island-hopping.",
        detail: "Swimming off granite rocks and picnicking on uninhabited islands in endless Nordic summer light. Works with kids in life jackets; the toddler stays in the boat."
      },
      {
        name: "Skansen",
        summary: "Open-air museum with a children's zoo, costumed interpreters, and an aquarium that easily fills a full day.",
        detail: "Nordic farm animals for petting, historic Swedish homes with period actors, and tropical fish in the aquarium section. A half-day minimum that often becomes a full day."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Stockholm",
          nights: 7,
          activities: "Djurgarden (Junibacken, Skansen, Vasa Museum), Gamla Stan, Fotografiska, archipelago day trips to Vaxholm and Grinda"
        },
        {
          name: "Lake Siljan, Dalarna",
          nights: 6,
          activities: "Dala horse workshops, lake swimming, village exploring, farm visits, gentle hikes, berry picking"
        }
      ],
      note: "Clean 2-base itinerary with one transition via a 3.5-hour drive or 2.5-hour train. Each base has 6-7 nights. Dalarna offers a total change of pace from urban Stockholm."
    },
    showstopperRisks: [
      {
        name: "Heat wave",
        level: "LOW",
        detail: "July 2025 saw a 2-week Scandinavian heat wave exceeding 86F, now assessed at roughly 1-in-50-year frequency. Even at 86F+ this barely exceeds the 82F ceiling and is dry with no humidity. AC is uncommon in Swedish accommodations. Probability of trip disruption is 3-5%."
      },
      {
        name: "Wildfire smoke",
        level: "VERY LOW",
        detail: "Sweden experienced significant wildfires during heat waves in 2018 but primarily in inland forests, not Stockholm or the coast. Dalarna could theoretically be affected. Very low probability of trip disruption at 1-2%."
      }
    ],
    routineHazards: [
      {
        name: "Rain",
        detail: "About 13 days with some rain in July, typically short showers. Pack rain jackets and plan indoor backup activities."
      },
      {
        name: "Cold water",
        detail: "Baltic and lake water temperatures are 57-62F. Brief dips only; supervise kids closely."
      },
      {
        name: "Ticks",
        detail: "Present in Swedish forests and grasslands. Wear long pants for hikes and check kids after outdoor play."
      },
      {
        name: "Midnight sun disruption",
        detail: "18+ hours of daylight can disrupt toddler sleep. Most Swedish accommodations have blackout blinds."
      }
    ],
    accommodations: "Stockholm Sodermalm has excellent Airbnb inventory with modern Scandinavian design 2BR apartments at $200-300/night. Hotel options include Scandic Hasselbacken on Djurgarden itself or Downtown Camper by Scandic. Dalarna offers abundant lakeside cottage rentals with traditional red-painted exteriors and modern interiors at $150-250/night in Leksand or Tallberg. Scandinavian cleanliness and design standards are uniformly excellent across both bases.",
    logistics: "Direct JFK-ARN on SAS and Delta in about 8h15m as overnight flights. Stockholm has exceptional public transit with free travel for stroller-pushing adults and free rides for kids under 7. Djurgarden ferry runs every 15-20 minutes. Rent a car only for the Dalarna leg at about $600-800 for a week. English is universally spoken. Nearly cashless society so bring cards.",
    costBreakdown: "Flights run $2,800-$3,500 for four including one lap infant. Stockholm apartment for 7 nights is $1,750-$2,450. Dalarna cottage for 6 nights is $900-$1,500. Car rental, transit, food, and activities add $2,650-$3,900. Mid-range realistic total is $10,000-$12,000.",
    pros: [
      "Arguably the most family-friendly country in the world for young children",
      "Junibacken, Skansen, and Djurgarden are purpose-built for the 2-10 age range",
      "Weather comfortably under 82F ceiling with magical long daylight",
      "Accommodations uniformly excellent with no risk of dated properties",
      "Direct flights from JFK with manageable 6h time difference",
      "Clean 2-base itinerary with genuine variety between urban culture and lake country"
    ],
    cons: [
      "Expensive Scandinavian pricing on flights and daily costs",
      "AC is uncommon so a heat spike could make sleeping uncomfortable",
      "Dalarna leg requires a 3.5h drive transition day with two small kids",
      "Hiking is gentler than mountain destinations with flatter scenery",
      "18h daylight can disrupt toddler sleep schedules",
      "Cold water limits swimming to short dips"
    ]
  },
  {
    slug: "atlantic-canada",
    name: "Atlantic Canada (Nova Scotia + PEI)",
    tagline: "A 2-hour direct flight to dramatic coastline, the world's highest tides, warm red sand beaches, and Canada's most family-friendly culture, all at mid-range pricing with near-zero show-stopper risk.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "World-class coastal hiking, a walkable historic city, iconic lighthouses, the world's highest tides, red sand beaches, and literary heritage sites."
      },
      stress: {
        raw: 4,
        rationale: "Short 2-hour direct flight from NYC, no jet lag, English-speaking, excellent road infrastructure, though 3 bases require significant driving."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "Hurricane season is technically active but July is extremely early for Atlantic Canada impacts with under 2% risk of trip disruption."
      },
      weather: {
        raw: 4.5,
        rationale: "July averages 68-73F daytime highs, well under the 82F ceiling, with PEI water reaching swimmable levels."
      },
      cost: {
        raw: 3.5,
        rationale: "Mid-range at $6,400-$8,850 for 14 nights including affordable ~$200-250/person flights."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Gentle beaches, stroller-friendly hikes, interactive family programs at historic sites, and universal kid welcome make this near-perfect for young children."
      },
      accommodations: {
        raw: 3.5,
        rationale: "Halifax has modern hotels but Cape Breton inventory is limited and can be dated, requiring careful VRBO cottage selection."
      },
      total: 44.25
    },
    pills: [
      {
        text: "68-73F highs",
        type: "good"
      },
      {
        text: "2h direct flight",
        type: "good"
      },
      {
        text: "$6.4K-$8.9K",
        type: "good"
      },
      {
        text: "Free Parks Canada pass",
        type: "good"
      },
      {
        text: "3 driving bases",
        type: "warn"
      }
    ],
    highlights: [
      {
        name: "Cabot Trail + Skyline Trail",
        summary: "One of North America's most spectacular 300km coastal drives through mountains plunging into the Atlantic.",
        detail: "The Skyline Trail is mostly flat packed gravel, stroller-accessible until the final boardwalk descent, ending at a cliff-edge panorama. Moose sightings are common at dusk. Kids nap in the car between stops."
      },
      {
        name: "Halifax Waterfront + Citadel Hill",
        summary: "Walkable 4km boardwalk with Maritime Museum, daily cannon firing at the Citadel, and a covered outdoor play area.",
        detail: "The Citadel offers coded-message activities and comic-book mystery guides for kids. The waterfront has a splash pad, excellent restaurants, and the Halifax Public Gardens. Compact and stroller-friendly."
      },
      {
        name: "Peggy's Cove",
        summary: "Canada's most photographed lighthouse on dramatic granite boulders, 45 minutes from Halifax with a new accessible boardwalk.",
        detail: "A new boardwalk makes it stroller-friendly. The tiny fishing village has chowder shops and art galleries. Best visited early morning to avoid peak crowds. Keep kids back from wet rocks at the water's edge."
      },
      {
        name: "PEI Beaches + Red Sand Cliffs",
        summary: "Miles of red sandstone cliffs meeting warm, shallow, lifeguarded beaches unlike anything the kids have seen.",
        detail: "Cavendish Beach has surf guards, accessibility mats, washrooms, and calm waves ideal for a toddler and 5-year-old. Greenwich section has a floating boardwalk through dunes to a wild beach."
      },
      {
        name: "Green Gables Heritage Place",
        summary: "Parks Canada site with the farmhouse that inspired Anne of Green Gables, featuring costumed interpreters and Victorian activities.",
        detail: "Meet Anne in red braids, try potato sack races, ice cream making, and woodland trails. Free admission via Canada Strong Pass. Naomi is the right age for interactive activities; Hannah enjoys the farm animals."
      },
      {
        name: "Whale Watching, Cape Breton",
        summary: "Pilot whales, minke whales, and occasionally humpbacks feed in the Gulf of St. Lawrence from July through October.",
        detail: "Larger-boat operators welcome all ages at about $60/adult. The Whale Interpretive Centre in Pleasant Bay is a good rainy-day backup. Zodiac tours require minimum age 6."
      },
      {
        name: "Bay of Fundy Tides",
        summary: "The world's highest tides at up to 53 feet, where you can walk the ocean floor at low tide.",
        detail: "Burntcoat Head on Nova Scotia's Minas Basin is 90 minutes from Halifax. Walk the ocean floor at low tide, return hours later to see the same spot submerged. A manageable Halifax day trip."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Halifax",
          nights: 4,
          activities: "Waterfront, Citadel, Maritime Museum, Public Gardens, Peggy's Cove day trip, Bay of Fundy tides day trip"
        },
        {
          name: "Cape Breton / Ingonish",
          nights: 5,
          activities: "Cabot Trail loop, Skyline Trail, whale watching, Ingonish Beach, Alexander Graham Bell Museum"
        },
        {
          name: "PEI / Cavendish-Charlottetown",
          nights: 5,
          activities: "Cavendish beaches, Green Gables, Sandspit, Charlottetown downtown, Greenwich dunes"
        }
      ],
      note: "Three bases with 4-hour drives between them. The Caribou-to-Wood Islands ferry crossing is a highlight itself. Return to Halifax via Confederation Bridge for departure."
    },
    showstopperRisks: [
      {
        name: "Hurricane or tropical storm",
        level: "VERY LOW",
        detail: "Atlantic hurricane season is active June-November but July is very early. Historical probability of a named storm impacting Nova Scotia in the July 4-18 window is under 3%. The 2026 El Nino outlook further suppresses activity. Risk of trip disruption is under 2%."
      },
      {
        name: "Fog grounding flights",
        level: "LOW",
        detail: "Halifax airport occasionally has fog delays, especially in June-early July. Delays are typically hours, not days. Risk of 24+ hour flight disruption is about 5%."
      }
    ],
    routineHazards: [
      {
        name: "Ocean safety",
        detail: "Atlantic water is cold at 57F around Halifax; PEI north shore is warmer. Stick to lifeguarded beaches with kids."
      },
      {
        name: "Ticks and Lyme disease",
        detail: "Expanding into Nova Scotia. Use bug spray and do tick checks after woodland hikes."
      },
      {
        name: "Coastal cliffs",
        detail: "Peggy's Cove and Skyline Trail have unguarded edges. Keep kids close."
      },
      {
        name: "Road conditions",
        detail: "Cabot Trail has steep grades and tight curves. Drive slowly and use pulloffs. No cell service in stretches."
      }
    ],
    accommodations: "Halifax offers modern hotels like the Marriott Harbourfront on the boardwalk at $220-260/night and practical Homewood Suites with kitchens at $185-220/night. Cape Breton's Keltic Lodge has family suites in newer buildings at $185-260/night, or VRBO cottages at $150-220/night (filter for post-2018 renovations). PEI splits well between the Holman Grand in Charlottetown at $220-260/night and Cavendish cottage rentals at $150-205/night.",
    logistics: "NYC to Halifax is about 2 hours nonstop on Delta or American, with round-trip fares typically $200-300 per person. A rental car is essential with July rates around $90-110 CAD/day. Key drives are 4 hours Halifax to Cape Breton and 3.5 hours Cape Breton to PEI via the Northumberland Ferry. English throughout with some French in Cheticamp. Canada Strong Pass provides free admission to all Parks Canada sites.",
    costBreakdown: "Flights run $900-$1,200 for the family. Car rental totals $1,000-$1,200. Accommodation averages $2,500-$3,500 for 14 nights. Food, activities, insurance, and ferry add another $2,000-$2,950. Mid-range estimate is about $7,500 for 14 nights.",
    pros: [
      "Ideal summer temperatures at 68-73F, well under the heat ceiling",
      "Short 2-hour direct flight from NYC with no jet lag",
      "English-speaking, family-friendly culture, safe and welcoming",
      "Exceptional scenic diversity: rugged coast, gentle beaches, mountains, pastoral farmland",
      "Canada Strong Pass gives free admission to all major Parks Canada sites",
      "Stroller-friendly highlights and outstanding kid-accessible seafood culture"
    ],
    cons: [
      "Requires 3 bases with 4-hour drives between them",
      "Cape Breton accommodation inventory is thin and can be dated",
      "Fog and passing rain showers are common, needing flexible daily plans",
      "Zodiac whale watching off-limits for Hannah; large boat is the workaround",
      "July is peak season with early bookings required",
      "Ocean water around Halifax is cold at 57F"
    ]
  },
  {
    slug: "spain-north",
    name: "Northern Spain (Galicia + Asturias + Cantabria)",
    tagline: "The cool, green, undiscovered side of Spain: dramatic mountains by cable car, dinosaur footprints on sea cliffs, the Guggenheim, and world-class food culture at half the price of southern Europe.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional range from cathedral cities to cable car mountains, dinosaur coast, coastal cliff walks, and the Guggenheim."
      },
      stress: {
        raw: 3.5,
        rationale: "No direct NYC flights require a connection adding 2-3 hours, but only 6h jet lag with rental car and 2-3 walkable bases."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "Northern coast is sheltered from Spain's heat wave pattern with no hurricane, volcano, or political risk."
      },
      weather: {
        raw: 4.5,
        rationale: "July averages 70-79F, well under the 82F ceiling, with Atlantic breeze and only 3-5 rain days in 14."
      },
      cost: {
        raw: 4,
        rationale: "Significantly cheaper than southern tourist hubs at a midpoint of about $8,850 for 14 nights."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Cable cars, dinosaur museums, bear trails, farm stays, beaches, and churros are peak 5-year-old territory."
      },
      accommodations: {
        raw: 3.5,
        rationale: "Good rural house inventory with some gems in renovated farmhouses, though quality requires filtering outside cities."
      },
      total: 43.75
    },
    pills: [
      {
        text: "70-79F highs",
        type: "good"
      },
      {
        text: "Connection required",
        type: "warn"
      },
      {
        text: "~$8.9K midpoint",
        type: "good"
      },
      {
        text: "Insulated from heat",
        type: "good"
      },
      {
        text: "Less English spoken",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Santiago de Compostela Cathedral + Old Town",
        summary: "UNESCO granite old town with one of Europe's great cathedrals and a market where you buy ingredients and have them cooked on-site.",
        detail: "Kids can explore the cathedral rooftop with secret passageways and city views. The Mercado de Abastos is a family activity itself. Alameda Park and Parque de Bonaval have big playgrounds."
      },
      {
        name: "Fuente De Cable Car + Picos de Europa",
        summary: "A 4-minute cable car rising 2,470ft to 5,980ft with jaw-dropping mountain views and alpine meadow walks.",
        detail: "A 45-minute gravel-path walk to Horcadina de Covarrobres is doable with a 5-year-old and toddler in carrier. Cows and horses graze in meadows. Covadonga glacial lakes nearby offer an easy 1-hour loop with shuttle bus access."
      },
      {
        name: "Senda del Oso (Bear Trail) Cycling",
        summary: "Flat, paved 50km rail-trail through mountain valleys passing a rescued brown bear enclosure with child trailers available.",
        detail: "An 11km family section takes 1-1.5 hours with tandem bikes and child trailers. The Proaza Bear Enclosure has rescued bears Paca and Molina. One of Spain's best family cycling experiences."
      },
      {
        name: "Jurassic Museum + Dinosaur Coast",
        summary: "Museum shaped like a giant dinosaur footprint with life-size replicas, hands-on workshops, and real dinosaur footprints in coastal rock.",
        detail: "Europe's best collection of real dinosaur ichnites plus life-size replicas in the garden. Walk coastal cliffs between Colunga and Ribadesella to hunt for actual dinosaur footprints. A 5-year-old's dream day."
      },
      {
        name: "Llanes Coastal Walks + Beaches",
        summary: "Cliff path with panoramic Atlantic views plus family-friendly beaches including the world's smallest beach 100m inland.",
        detail: "Playa de Poo has a sheltered lagoon with shallow water perfect for toddlers. Gulpiyuri is a genuine curiosity -- a tidal beach 100m from the sea. The Paseo de San Pedro cliff path is well-maintained."
      },
      {
        name: "Guggenheim Bilbao",
        summary: "Jeff Koons' giant Puppy sculpture outside and Richard Serra's walk-through steel installations inside, with free Baby Art workshops.",
        detail: "Free audio tour for kids, workshops for ages 2+, and a playground behind the museum. Under-12 free admission. The building itself is spectacle enough for any age."
      },
      {
        name: "Oviedo Old Town + Cider Culture",
        summary: "Compact pedestrianized medieval center with whimsical bronze statues and cider houses that pour from height like dinner theater.",
        detail: "Naomi will want to find all the statues. Campo San Francisco park has a playground and small zoo. Sidrerias are genuinely entertaining for kids."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Santiago de Compostela",
          nights: 5,
          activities: "Cathedral, old town, Mercado de Abastos, parks, Finisterre day trip for Atlantic cliffs"
        },
        {
          name: "Picos de Europa / Llanes",
          nights: 5,
          activities: "Fuente De cable car, Covadonga lakes, Senda del Oso cycling, dinosaur museum and coast, Llanes beaches"
        },
        {
          name: "Oviedo + Bilbao",
          nights: 4,
          activities: "Oviedo old town and cider houses, Guggenheim, Casco Viejo, pintxos"
        }
      ],
      note: "Open-jaw routing: fly into Santiago, out of Bilbao. Three bases at 5/5/4 nights along the coast. Rental car picked up when leaving Santiago and dropped in Bilbao."
    },
    showstopperRisks: [
      {
        name: "Heat wave",
        level: "VERY LOW",
        detail: "Northern Spain's Atlantic coast consistently stays 18-27F cooler than the interior and south. Even during Spain's record 2025 summer, the coastal strip stayed well below dangerous thresholds. A multi-day heat event severe enough to confine the family indoors is extremely unlikely on this coast. Under 5% probability."
      },
      {
        name: "Wildfire smoke",
        level: "LOW",
        detail: "Interior Galicia experienced significant fires in August 2025 and smoke occasionally reaches the coast. In a 14-day July window the probability of meaningful air quality degradation on the coast is 5-8%. July is lower-risk than August for Galician fires."
      }
    ],
    routineHazards: [
      {
        name: "Mountain roads",
        detail: "Picos de Europa access roads to Fuente De and Covadonga are narrow and winding. Drive during daylight and allow extra time."
      },
      {
        name: "Rain",
        detail: "Even in July, pack rain jackets and layers. Atlantic showers are common but typically brief."
      },
      {
        name: "Cobblestones",
        detail: "Santiago and Oviedo old towns have uneven stone surfaces. Stroller works on main routes; carrier for exploration."
      },
      {
        name: "Siesta hours",
        detail: "Restaurants and shops often close 2-5 PM. Plan lunch by 1:30 PM or pack supplies."
      }
    ],
    accommodations: "Santiago has good renovated apartment inventory in the old town at $150-220/night. The Picos area has beautifully renovated farmhouses with mountain views through curated agencies at $120-180/night, with farm stays featuring animals as a highlight for kids. Oviedo has modern hotel options at $130-180/night. Bilbao's Gran Hotel Domine faces the Guggenheim with good Airbnb stock in Casco Viejo at $160-230/night.",
    logistics: "No direct NYC-Santiago flights; best options are via Madrid or Lisbon at 9-11 hours total. Return from Bilbao as open-jaw routing. Rental car essential for Picos de Europa and the coastal drive with good roads along the A8 motorway. Spanish and regional languages predominate; English is less widely spoken than in Northern Europe but sufficient in tourist areas. Food culture is exceptionally kid-friendly with pintxos, churros, and empanadas.",
    costBreakdown: "Flights run $3,200-$4,800 for four with open-jaw routing. Lodging totals $2,000-$3,200 for 14 nights. Food is $1,000-$1,400. Car rental with fuel and tolls is $600-$900. Activities add $200-$400. Midpoint is about $8,850.",
    pros: [
      "Weather almost perfectly matched to the 82F ceiling on the coolest major European coast",
      "Extraordinary highlight density: mountains, coast, culture, dinosaurs, cycling, Guggenheim",
      "Peak age-fit with cable cars, bear trails, and dinosaur footprints",
      "Strong food culture that is very kid-friendly",
      "Significantly cheaper than southern Spain, Portugal, or Scandinavia",
      "Very low show-stopper risk on the Atlantic coast"
    ],
    cons: [
      "No direct flights from NYC require a connection adding complexity with two small kids",
      "Rental car is mandatory with no car-free option",
      "English less widely spoken than in Northern Europe",
      "Rain is a real factor even in July requiring flexibility",
      "Accommodation quality is uneven in rural Picos area",
      "Less globally iconic than destinations like Iceland or Portugal"
    ]
  },
  {
    slug: "austria",
    name: "Austria (Vienna + Salzburg + Tyrol)",
    tagline: "World-class imperial culture layered with genuinely kid-friendly infrastructure, from Schonbrunn Palace dress-up to mountaintop playgrounds in the Tyrolean Alps.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional cultural depth with strong kid-fit: children's museums, zoo, gondolas, gentle hikes, Prater rides, and imperial palaces."
      },
      stress: {
        raw: 4,
        rationale: "JFK-VIE nonstop in 8.5h, 6h time difference, supremely walkable cities, but 3 bases with hotel transitions."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "No hurricanes, wildfires, or political instability; main risk is a Central European heat wave pushing Vienna above 95F, mitigated by the Tyrol leg."
      },
      weather: {
        raw: 3.5,
        rationale: "Vienna July average high 79F is comfortable but spikes above 86F are common; Salzburg is cooler but rainier with 17 rain days; Tyrol is ideal at 64-77F."
      },
      cost: {
        raw: 3,
        rationale: "Mid-range European pricing with estimated 14-night total of $9,500-$13,000 including nonstop flights."
      },
      ageFit: {
        raw: 3.5,
        rationale: "Children's museums, zoo, Prater, and gondola playgrounds work great, but the real payoff of Vienna's cultural richness comes more alive at 8-12."
      },
      accommodations: {
        raw: 4.5,
        rationale: "Uniformly high-quality lodging with modern aparthotels in Vienna, Airbnb apartments in Salzburg, and gorgeous modern chalets in Alpbach."
      },
      total: 42.75
    },
    pills: [
      {
        text: "64-79F range",
        type: "good"
      },
      {
        text: "8.5h nonstop JFK",
        type: "good"
      },
      {
        text: "$9.5K-$13K",
        type: "muted"
      },
      {
        text: "Heat wave risk 10-20%",
        type: "warn"
      },
      {
        text: "Free museums under 19",
        type: "good"
      }
    ],
    highlights: [
      {
        name: "Schonbrunn Palace + Zoo",
        summary: "Imperial summer palace with vast gardens, hedge mazes, a children's museum, and Europe's oldest zoo.",
        detail: "Kids dress as princes and princesses in the Children's Museum. The zoo has natural habitats and a petting area. Strollers park at cloakroom; grounds are fully stroller-friendly. Half-day minimum."
      },
      {
        name: "Prater + Giant Ferris Wheel",
        summary: "Vienna's iconic amusement park with toddler-friendly rides and panoramic city views from the Ferris Wheel.",
        detail: "Free to enter with individual ride tickets from 1-20 EUR. Ringelspiel carousel, Liliputbahn miniature railway, and Aqua Gaudi water ride for a July cooldown."
      },
      {
        name: "Hohensalzburg Fortress + Old Town",
        summary: "Funicular ride to a hilltop fortress with dramatic views over Salzburg's baroque skyline and surrounding Alps.",
        detail: "The Old Town below is compact and walkable with Mirabell Gardens, Mozart's birthplace, and the Toy Museum with interactive exhibits for young kids."
      },
      {
        name: "Alpbach Gondolas + Mountain Playgrounds",
        summary: "Gondola lifts to Lauserland mountaintop playground and Juppi's Enchanted Forest via buggy-friendly loop trail.",
        detail: "Activities designed for families with toddlers and strollers. Alpine scenery without the hiking effort. Alpbach is known as Austria's prettiest village."
      },
      {
        name: "Hallstatt + Salzkammergut Lakes",
        summary: "Fairy-tale lakeside village with jaw-dropping mountain-lake scenery, boat rides, and easy family hikes.",
        detail: "Lake swimming and Gosau Lakes easy hike are great for families. Salt mine requires age 4+ so Hannah is excluded. Best as a Salzburg day trip, arriving by 9 AM to beat tour-bus crowds."
      },
      {
        name: "Viennese Coffee Houses + Food Culture",
        summary: "The Kaffeehaus tradition with pastries, Sachertorte, and Wiener Schnitzel in a relaxed, kid-tolerant atmosphere.",
        detail: "Austrian cafe culture is pastry-forward and relaxed with kids. Local food is reliably kid-friendly: schnitzel, strudel, Kaiserschmarrn, sausages. Naomi will remember the cakes."
      },
      {
        name: "Tyrolean Alpine Hiking",
        summary: "Stroller-accessible valley paths, suspension bridges, playgrounds, and swimming lakes in cool 64-77F temperatures.",
        detail: "Verwall Valley has free shuttle buses to stroller-accessible paths. Schlick 2000's nature trail works with kids of any age. Mountain lakes offer swimming. A relief after Vienna's warmth."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Vienna",
          nights: 5,
          activities: "Schonbrunn Palace and Zoo, Prater, Stephansdom, ZOOM Children's Museum, Belvedere gardens, Naschmarkt"
        },
        {
          name: "Salzburg",
          nights: 4,
          activities: "Hohensalzburg Fortress, Mirabell Gardens, Toy Museum, Hellbrunn trick fountains, Hallstatt day trip"
        },
        {
          name: "Alpbach/Tyrol",
          nights: 5,
          activities: "Gondolas, Lauserland playground, Juppi's Enchanted Forest, Reintalersee lake, valley hikes"
        }
      ],
      note: "Three bases with short drives between them: 3h Vienna-Salzburg (or 2.5h train), 1.5h Salzburg-Alpbach. Alternatively do Vienna-Salzburg by OBB train with family compartments."
    },
    showstopperRisks: [
      {
        name: "Central European heat wave",
        level: "MODERATE",
        detail: "Vienna averaged 20 days above 86F per year in 1991-2020. Four heat waves hit Vienna in summer 2024. A sustained 95F+ spell could confine indoor activities for 2-3 days. Mitigation: Tyrol at the end provides guaranteed cool relief. Probability of trip-disrupting heat is 10-20%."
      },
      {
        name: "Severe alpine thunderstorms",
        level: "LOW",
        detail: "July 2025 was Austria's wettest July since 2012. Alpine storms can close gondolas for a day and cause localized flash flooding. Unlikely to ruin the trip but could reduce one hiking day. About 5% disruption probability."
      }
    ],
    routineHazards: [
      {
        name: "Pickpockets",
        detail: "Standard European vigilance in Vienna tourist zones like Stephansdom and Naschmarkt."
      },
      {
        name: "Tick-borne encephalitis",
        detail: "Endemic in Austrian forests. Consider TBE vaccination or stick to cleared trails; do tick checks after alpine hikes."
      },
      {
        name: "Hallstatt crowds",
        detail: "July is extreme. Arrive before 9 AM or consider skipping if crowd-averse."
      },
      {
        name: "Salzburg rain",
        detail: "17 rain days average in July. Pack rain gear and have indoor backup plans."
      }
    ],
    accommodations: "Vienna has modern aparthotels near Schonbrunn like H2 Hotel Wien (opened 2024) and Vienna Stay Apartments with full kitchens and A/C. Salzburg's Old Town Airbnbs average 4.8/5 ratings. Alpbach offers elegant chalets like Chalet Waschkuchl with modern kitchens and traditional wood facades. Austrian-influenced standards mean clean, well-maintained properties throughout, with cleanliness standards uniformly high.",
    logistics: "Austrian Airlines operates JFK-VIE nonstop in about 8.5h with roughly 7 flights per week in summer. Vienna to Salzburg is 3-3.5h by car or 2.5h by comfortable OBB Railjet train with family compartments. Salzburg to Alpbach is 1.5h. German is the primary language but English is near-universal in tourism. Purchase digital vignette for motorway tolls online before the trip.",
    costBreakdown: "Flights run $3,500-$4,500 for four round-trip. Accommodation totals $3,000-$4,000 for 14 nights. Car rental, food, and activities add $3,000-$4,500. Mid-range total is about $11,000, with free entry to all Austrian federal museums for under-19s and free Vienna transit for under-6s.",
    pros: [
      "World-class culture layered with genuinely kid-friendly infrastructure",
      "Perfect 50/50 urban-nature split matching the family profile",
      "Alpine leg guarantees cool weather escape from any Vienna heat",
      "Outstanding stroller accessibility and family welcome across all three regions",
      "Nonstop JFK-VIE flight keeps travel day manageable",
      "Kid-friendly food culture with no dietary adjustment needed"
    ],
    cons: [
      "Vienna July heat risk with 86-95F spikes increasingly common",
      "Salzburg is the rainiest leg with 17 rain days average in July",
      "Three bases means three hotel transitions",
      "30-40% of Vienna's cultural depth goes over kids' heads at these ages",
      "Hallstatt in July is mobbed with tour buses",
      "6-hour time difference produces moderate jet lag"
    ]
  },
  {
    slug: "ireland",
    name: "Ireland",
    tagline: "English-speaking, endlessly green, with castles around every corner, traditional music in every pub, and temperatures that never threaten the heat ceiling -- all on a direct overnight flight with near-zero show-stopper risk.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Rich blend of castles, national parks, dramatic coastline, literary culture, and traditional music, nearly all kid-tolerant."
      },
      stress: {
        raw: 3.5,
        rationale: "Direct 6.5-hour overnight flight, only 5-hour time difference, English-speaking, but left-hand driving on narrow rural roads is stressful."
      },
      showstoppers: {
        raw: 5,
        rationale: "Zero show-stopper risk: no hurricanes, extreme heat, wildfires, volcanic activity, and politically stable with US State Dept Level 1."
      },
      weather: {
        raw: 4.5,
        rationale: "Highs 63-68F, well under the 82F ceiling, perfect for walking with small kids, though rain is frequent at 10-16 days per month."
      },
      cost: {
        raw: 2.5,
        rationale: "Peak July Ireland is $8,000-$11,500 with pub-priced food and $200-300/night lodging."
      },
      ageFit: {
        raw: 4,
        rationale: "Genuinely family-friendly culture with castles, farms, gentle trails, and kids welcome everywhere including pubs."
      },
      accommodations: {
        raw: 3.5,
        rationale: "Dublin and Killarney have excellent modern options, but Dingle and rural west is more mixed requiring careful filtering."
      },
      total: 42.75
    },
    pills: [
      {
        text: "63-68F highs",
        type: "good"
      },
      {
        text: "6.5h nonstop JFK",
        type: "good"
      },
      {
        text: "$8K-$11.5K",
        type: "muted"
      },
      {
        text: "Zero show-stopper risk",
        type: "good"
      },
      {
        text: "Left-hand driving",
        type: "warn"
      }
    ],
    highlights: [
      {
        name: "Killarney National Park",
        summary: "26,000 acres of lakes, ancient oak woods, and mountain trails with stroller-friendly paved paths and jaunting car rides.",
        detail: "The Knockreer Circular Walk and Muckross Lake Loop are paved and stroller-friendly. Muckross House offers a Victorian mansion tour. Horse-drawn jaunting car rides through the park are a hit with all ages."
      },
      {
        name: "Dingle Peninsula + Slea Head Drive",
        summary: "One of Ireland's most spectacular coastal drives with sea cliffs, ancient beehive huts, and Murphy's Ice Cream.",
        detail: "The town of Dingle is colorful, walkable, and full of live music pubs where families are welcome until 9 PM. Beehive huts are ancient stone structures kids can explore. A standout day trip from Killarney."
      },
      {
        name: "Cliffs of Moher",
        summary: "700-foot sea cliffs with a paved, stroller-friendly path and interactive Visitor Centre exhibits for kids.",
        detail: "Walled viewing areas are safe for small children. Plan 2-3 hours. Pair with a stop in Doolin for traditional music and fish and chips."
      },
      {
        name: "Dublin: Trinity College + Phoenix Park",
        summary: "The Book of Kells exhibition with interactive digital screens plus Dublin Zoo in one of Europe's largest enclosed parks.",
        detail: "Phoenix Park's open fields and deer herds are a toddler paradise. Dublin Zoo has 400+ animals, playgrounds, and is free for under-3s. The Long Room at Trinity College is visually dramatic for all ages."
      },
      {
        name: "Galway City + Connemara",
        summary: "Walkable colorful Latin Quarter with street buskers, a national aquarium with touch pools, and wild Connemara ponies.",
        detail: "Galway Atlantaquaria has touch pools with starfish and crabs perfect for a 5-year-old. Connemara National Park offers gentle nature trails, wild ponies, and a children's playground."
      },
      {
        name: "Medieval Castles",
        summary: "Ross Castle, Bunratty Castle and Folk Park, and Dunguaire Castle offer hands-on medieval experiences for kids.",
        detail: "Bunratty has a reconstructed medieval village with animals and playgrounds. Ross Castle sits lakeside in Killarney with guided tours. Castles are inherently exciting for a 5-year-old."
      },
      {
        name: "Traditional Music Sessions",
        summary: "Afternoon and early evening trad sessions in pubs that are genuinely family-friendly and impossible to replicate elsewhere.",
        detail: "Dingle, Doolin, and Galway are the epicenters. Kids are welcome and captivated by the energy and instruments. A uniquely Irish cultural experience."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Dublin",
          nights: 4,
          activities: "Phoenix Park, Dublin Zoo, Trinity College, EPIC museum, Howth cliff walk"
        },
        {
          name: "Killarney / Kerry",
          nights: 5,
          activities: "Killarney National Park, Muckross House, Dingle Peninsula, Gap of Dunloe, Ross Castle"
        },
        {
          name: "Galway / Clare",
          nights: 5,
          activities: "Cliffs of Moher, Galway Atlantaquaria, Bunratty Castle, Connemara National Park"
        }
      ],
      note: "Three bases with 3-3.5 hour drives between them, mostly on motorways. Pick up rental car only when leaving Dublin. Stop at Bunratty Castle en route from Killarney to Galway."
    },
    showstopperRisks: [
      {
        name: "Extreme weather events",
        level: "VERY LOW",
        detail: "Ireland does not experience hurricanes, heat waves above 82F, or wildfires. Summer 2025 was Ireland's warmest on record and still only hit 81F for two days. July storms are rare and mild. Probability of trip disruption under 1%."
      },
      {
        name: "Political or security instability",
        level: "VERY LOW",
        detail: "Ireland is politically stable with no recent or foreseeable disruptions. US State Department Level 1. Probability under 1%."
      }
    ],
    routineHazards: [
      {
        name: "Narrow rural roads",
        detail: "Kerry and Dingle roads can be genuinely tight with single-track passing places. Rent automatic and go slow."
      },
      {
        name: "Rain and wind",
        detail: "Bring proper rain gear for all four family members. Windy days at the Cliffs of Moher can make stroller use tricky."
      },
      {
        name: "Atlantic water temperature",
        detail: "Sea is 57F -- no swimming for toddlers. Beaches are for scenery and sand play only."
      },
      {
        name: "Left-hand driving",
        detail: "Plan a low-stress first drive on mostly-motorway Dublin to Killarney to build confidence before narrow western roads."
      }
    ],
    accommodations: "Dublin has excellent modern options like the Shelbourne with interconnecting rooms and pool, or Staycity apartment-style lodging with kitchens from about $180/night. Killarney's Hotel Killarney was refurbished in 2024 with family suites and indoor pool from $220/night. Galway's Galmont Hotel has family rooms with pool. For self-catering, Vrbo properties in Salthill are walkable to Galway center.",
    logistics: "Direct JFK-Dublin on Aer Lingus, Delta, or JetBlue in about 6.5 hours with multiple daily nonstops as overnight flights. Only 5-hour time difference makes this one of the easiest transatlantic jet lag profiles. Left-hand driving on right-hand-drive cars with automatic transmission. English throughout. Excellent pub food culture with universal kids menus and high chairs.",
    costBreakdown: "Flights run $2,400-$3,200 for four round-trip with Hannah as a lap infant. Lodging totals $2,800-$4,200 for 14 nights. Rental car for 12 days is $700-$1,000. Food and activities add $1,950-$2,700. Mid-range estimate is about $10,000.",
    pros: [
      "English-speaking with zero language stress",
      "Direct overnight flights from JFK with only 5-hour time difference",
      "Temperature always comfortable, never hot in July",
      "Genuinely family-friendly culture -- kids welcome everywhere including pubs",
      "Castles, farms, green hills, and dramatic coastline excite kids of all ages",
      "Traditional music sessions are a unique, immersive cultural experience"
    ],
    cons: [
      "Rain is frequent -- expect 10-16 days with some rain in July",
      "Left-hand driving on narrow Kerry and Dingle roads is stressful",
      "Peak July pricing is not budget-friendly",
      "West coast accommodation quality is uneven outside cities",
      "Cold ocean means no swimming component",
      "3-4 hour driving days between bases are tough on a 2-year-old"
    ]
  },
  {
    slug: "dolomites",
    name: "Dolomites, Italy",
    tagline: "Gondola-assisted access to some of the most dramatic mountain scenery on Earth, with stroller-friendly alpine meadows, mountain-top playgrounds, and South Tyrolean comfort food.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional alpine scenery with world-class gondola access, stroller-friendly meadow hikes, mountain playgrounds, and iconic lakes."
      },
      stress: {
        raw: 3,
        rationale: "No nonstop flights to the region; JFK-Venice/Munich plus 3-4 hour drive, 6-hour jet lag, and mountain road driving required."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "No hurricanes, wildfires at altitude, or political instability; afternoon thunderstorms are routine but brief."
      },
      weather: {
        raw: 5,
        rationale: "July highs average 66-75F depending on elevation, well under the 82F ceiling with cool evenings and natural altitude AC."
      },
      cost: {
        raw: 2.5,
        rationale: "Peak-season Dolomites is not cheap at $11,200-$16,600 with flights, gondola passes, and mountain hut dining."
      },
      ageFit: {
        raw: 4,
        rationale: "Gondola rides thrill a 5-year-old, meadow walks and playgrounds at altitude work great, but the classic multi-hour ridge hikes are out of reach."
      },
      accommodations: {
        raw: 4.5,
        rationale: "Excellent family hotel infrastructure with Austrian-influenced cleanliness standards and modern apartments widely available."
      },
      total: 42.25
    },
    pills: [
      {
        text: "66-75F at altitude",
        type: "good"
      },
      {
        text: "No nonstop flight",
        type: "warn"
      },
      {
        text: "$11K-$17K",
        type: "warn"
      },
      {
        text: "Gondola access",
        type: "good"
      },
      {
        text: "PM thunderstorms daily",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Seceda Gondola + Pieralongia",
        summary: "One of the most photographed ridgelines in the Alps, accessible by gondola to 8,200ft with a proven family-friendly hike.",
        detail: "The 4km round trip to Pieralongia has 620ft gain and includes a playground with swings and sandbox at the malga. Hannah rides in a carrier; Naomi walks with encouragement. Pre-booking time-slotted tickets required starting summer 2026."
      },
      {
        name: "Alpe di Siusi Meadow Walks",
        summary: "Europe's largest high-altitude alpine meadow at 6,500ft with stroller-friendly gravel paths and dairy farm visits.",
        detail: "A 6km loop from Compatsch through the meadows is flat enough for a sturdy stroller. Mountain hut lunches with Knodel and strudel. Multiple themed trails for children. Cool temperatures even on warm days."
      },
      {
        name: "Lago di Braies + Lago di Carezza",
        summary: "Two iconic Dolomite lakes for half-day outings with turquoise glacial water ringed by towering peaks.",
        detail: "Braies has a pushchair-accessible west shore path. Carezza is a smaller emerald lake with paved viewpoints right off the parking lot. Both are postcard-perfect and require minimal exertion."
      },
      {
        name: "Corvara Mountain Playgrounds",
        summary: "Col Alto gondola accesses the Pralonga plateau with three Moviment playgrounds and panoramic views of the Sella massif.",
        detail: "Gentle grassy terrain with family-friendly rifugio lunches. The Alta Badia landscape is gentler than Val Gardena's spires, ideal for toddler-pace wandering."
      },
      {
        name: "Ortisei Village Life",
        summary: "A walkable Ladin village with carved-wood shops, gelato, a top-rated playground, and car-free pedestrian center.",
        detail: "Farmers markets, church bells, and evening passeggiata give genuine South Tyrolean culture without museum fatigue. The Cavallino Bianco family hotel anchors the town."
      },
      {
        name: "Vallunga Valley",
        summary: "Flat gravel valley walk surrounded by towering Dolomite walls, suitable for strollers.",
        detail: "A gentle out-and-back through forest and meadow from Selva. Low-effort, high-reward scenery perfect for a relaxed family day."
      },
      {
        name: "Bolzano Half-Day",
        summary: "A 40-minute drive to see Otzi the Iceman (5,300 years old) plus the region's best playground with water features.",
        detail: "The South Tyrol Museum of Archaeology is genuinely fascinating for adults. Adjacent Talvera Park is rated the best playground in the region. Save this for an overcast day when the valley is warmer."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Ortisei, Val Gardena",
          nights: 8,
          activities: "Alpe di Siusi, Seceda gondola, Lago di Carezza, Vallunga valley, Bolzano half-day, swimming lake at Fie"
        },
        {
          name: "Corvara, Alta Badia",
          nights: 5,
          activities: "Col Alto gondola, Pralonga playgrounds, Lago di Braies day trip, La Crusc park, Passo Gardena scenic drive"
        }
      ],
      note: "Two bases with only a 30-minute drive between them over Passo Gardena. Minimal packing and unpacking. Fly in/out via Venice or Munich with a night near the airport on each end."
    },
    showstopperRisks: [
      {
        name: "Prolonged rain or cold spell",
        level: "LOW",
        detail: "A multi-day low-pressure system could limit mountain activities for 3-4 days. July averages 10-12 rain days but mostly brief afternoon showers. Bolzano, hotel pools, and town exploration remain options. Probability is 5-8%."
      },
      {
        name: "European air travel disruption",
        level: "LOW",
        detail: "Summer ATC strikes or airport chaos could delay arrival or departure. Mitigate by flying in a day early and building a buffer. Probability is 3-5%."
      }
    ],
    routineHazards: [
      {
        name: "Mountain terrain with toddlers",
        detail: "Unbarriered drop-offs exist at popular viewpoints. Stay on designated family trails and use carriers for Hannah."
      },
      {
        name: "Afternoon thunderstorms",
        detail: "Common pattern June through September. Start hikes before 10 AM and descend by 1-2 PM. Lightning at altitude is a real risk."
      },
      {
        name: "Car sickness on mountain roads",
        detail: "Winding passes like Gardena and Sella can trigger motion sickness in young kids. Carry bags and plan rest stops."
      },
      {
        name: "Tick-borne illness",
        detail: "Ticks present in alpine meadows June through September. Check kids after hikes and use repellent on clothing."
      }
    ],
    accommodations: "Ortisei's Cavallino Bianco Family Spa Grand Hotel is the gold standard for family hotels with all-inclusive childcare, kids pools, and family suites at EUR 350-500/night half-board. More affordable options include Residence Granvara apartments with kitchens. Corvara's apartment rentals on altabadia.org run EUR 150-250/night for 2-bedrooms. Austrian-influenced standards mean clean, well-maintained properties throughout with early booking essential for July.",
    logistics: "No nonstop to Bolzano from NYC. Best options are JFK to Venice Marco Polo on Delta nonstop in 8h20m then 3-3.5 hour drive, or JFK to Munich nonstop in 8h then 3 hour drive south via the Brenner Pass. Car rental is essential with automatic transmission recommended. German, Italian, and Ladin are all spoken; English is widely spoken in tourism. South Tyrolean food is among the most kid-friendly in Europe.",
    costBreakdown: "Flights run $4,000-$5,500 for four round-trip. Car rental with fuel and tolls is $1,000-$1,300. Lodging ranges $3,500-$5,500 for 14 nights. Food and activities add $2,700-$4,300. Mid-range estimate is about $13,500 with significant savings possible by choosing apartments over family hotels.",
    pros: [
      "Weather nearly perfect at 66-75F with cool evenings and natural altitude AC",
      "Gondola infrastructure eliminates the hike-or-miss-out problem with a toddler in a carrier",
      "Stroller-friendly meadow walks at Alpe di Siusi are genuinely unique in the Alps",
      "Mountain playground culture is purpose-built for young families",
      "South Tyrolean food culture is among the most kid-friendly in Europe",
      "2-base itinerary with only 30 minutes between bases"
    ],
    cons: [
      "No nonstop flight; 8h flight plus 3h drive is a long travel day with a toddler",
      "6-hour jet lag going east is real with young kids",
      "Peak July pricing is steep with gondola passes adding up",
      "The most iconic Dolomite ridge hikes are 8-12 age-appropriate",
      "Afternoon thunderstorms compress hiking windows to mornings",
      "Lago di Braies is badly overcrowded in July"
    ]
  },
  {
    slug: "norway",
    name: "Norway (Bergen + Sognefjord + Oslo)",
    tagline: "World-class fjord scenery, the legendary Flam Railway, and a Bergen-Oslo scenic train with a family playroom car -- all in one of the safest, cleanest countries on Earth.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "World-class fjord scenery, UNESCO Bryggen, Flam Railway, Vigeland Park, and Fram Museum with strong kid-tolerance throughout."
      },
      stress: {
        raw: 3.5,
        rationale: "7.5h nonstop JFK-OSL, only 6h time difference, but 3 bases and Bergen-Oslo routing requires train and ferry combos."
      },
      showstoppers: {
        raw: 4.5,
        rationale: "Politically stable with excellent infrastructure; no hurricanes, wildfires, or volcanic risk; heat waves are very rare."
      },
      weather: {
        raw: 4.5,
        rationale: "Bergen averages 61F and Oslo 72F in July, comfortably below the 82F ceiling, though Bergen gets rain 16-20 days in July."
      },
      cost: {
        raw: 2,
        rationale: "Norway is one of the most expensive countries in the world with an estimated 14-night total of $11,500-$14,800."
      },
      ageFit: {
        raw: 3.5,
        rationale: "Trains, boats, funiculars, and aquariums are exciting for a 5-year-old, but fjord scenery and museums like Fram are better appreciated at 7-10."
      },
      accommodations: {
        raw: 4.5,
        rationale: "Scandinavian accommodation standards are uniformly high with clean, modern, well-maintained properties throughout."
      },
      total: 41.75
    },
    pills: [
      {
        text: "61-72F range",
        type: "good"
      },
      {
        text: "7.5h nonstop JFK",
        type: "good"
      },
      {
        text: "$11.5K-$14.8K",
        type: "warn"
      },
      {
        text: "Bergen rain 16-20 days",
        type: "warn"
      },
      {
        text: "Flam Railway highlight",
        type: "good"
      }
    ],
    highlights: [
      {
        name: "Flam Railway + Naeroyfjord Cruise",
        summary: "The famous railway descends 866m through 20 tunnels past waterfalls, connecting to a UNESCO fjord cruise through 1,000m cliffs.",
        detail: "Kids under 5 ride free. The boats are stroller-accessible with indoor and outdoor viewing. A genuine bucket-list combo that works at any age."
      },
      {
        name: "Bryggen Wharf + Bergen Old Town",
        summary: "UNESCO World Heritage wooden trading houses from the Hanseatic era, colorful and photogenic.",
        detail: "Narrow alleyways with craft shops and cafes. The Frozen-inspiration connection will land with Naomi. Stroller-navigable despite some cobblestones."
      },
      {
        name: "Flobanen Funicular + Mount Floyen",
        summary: "6-minute funicular ride from Bergen center to 320m with a Troll Forest playground at the top.",
        detail: "Carved wooden trolls, rope bridges, and forest paths for burning off kid energy with panoramic scenery for adults. Ideal combo of ride and outdoor play."
      },
      {
        name: "Vigeland Sculpture Park (Oslo)",
        summary: "200+ sculptures across 45 hectares in Frogner Park, including the iconic Angry Baby statue, free and open 24/7.",
        detail: "Huge green space for kids to run with a treasure hunt available at the Vigeland Museum. The Angry Baby statue alone is worth the visit with a toddler."
      },
      {
        name: "Fram Museum + Bygdoy Peninsula",
        summary: "Climb aboard the actual polar exploration vessel Fram with a sub-zero polar simulator, plus nearby Kon-Tiki Museum.",
        detail: "Kids can touch and explore the ship freely. Nearby Norwegian Folk Museum has an open-air village with costumed guides. All three reached by a short ferry from Oslo center."
      },
      {
        name: "Sognefjord Village Life",
        summary: "Slower-paced fjord village days with kayaking, easy waterfront walks, and the Sognefjord Aquarium.",
        detail: "RIB boat safari tours to spot porpoises and seals. Viking burial mounds and local bakeries. The low-key days that make a 2-week trip sustainable with small kids."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Bergen",
          nights: 5,
          activities: "Bryggen walking, Flobanen + Troll Forest, Bergen Aquarium, Fish Market, Hardangerfjord day trip"
        },
        {
          name: "Flam / Sognefjord",
          nights: 4,
          activities: "Flam Railway round-trip, Naeroyfjord cruise, Stegastein viewpoint, kayaking, village exploration"
        },
        {
          name: "Oslo",
          nights: 5,
          activities: "Vigeland Park, Bygdoy museums via ferry, Aker Brygge waterfront, Opera House roof walk, Mathallen food hall"
        }
      ],
      note: "Three bases with the Bergen-Oslo scenic train (6h45m with family car and playroom) replacing one transition day with a highlight experience. Open-jaw ticket recommended: fly into Bergen, out of Oslo."
    },
    showstopperRisks: [
      {
        name: "Heat wave exceeding 82F ceiling",
        level: "VERY LOW",
        detail: "July 2025 saw a 2-week Fennoscandia heat wave reaching 93F in parts of Norway, assessed as a roughly 1-in-50-year event. Bergen's coastal location rarely exceeds 77F even in heat waves. Oslo can push above 86F. Probability of trip-disrupting heat is 2-3%."
      },
      {
        name: "Volcanic or seismic activity",
        level: "NEGLIGIBLE",
        detail: "Norway has no active volcanoes. Iceland eruptions could theoretically disrupt transatlantic flights but this is extremely rare."
      }
    ],
    routineHazards: [
      {
        name: "Rain in Bergen",
        detail: "Expect rain on 50-60% of days. Bring quality rain gear for all four family members. Usually light and intermittent."
      },
      {
        name: "Cold water near fjords",
        detail: "Fjord edges are often unfenced with water at 59-63F. Standard waterside vigilance with a toddler."
      },
      {
        name: "Steep terrain",
        detail: "Mountain paths near Floyen and in the fjord region can be steep. Carrier recommended for Hannah."
      },
      {
        name: "Ticks",
        detail: "Present in Norwegian forests in summer. Check after hikes."
      }
    ],
    accommodations: "Bergen offers modern Scandinavian apartments near Bryggen with harbor views and full kitchens at $200-280/night. Flam has limited inventory that books early -- Flam Marina Apartments have fjord-view balconies right by the railway station at $180-250/night. Oslo's Frogner House Bygdoy Alle offers aparthotel units near Vigeland Park at $200-300/night. Scandinavian standards mean uniformly high quality throughout.",
    logistics: "JFK-OSL nonstop on SAS or Delta in about 7.5 hours. No nonstop NYC-Bergen so connect via Oslo on a 1-hour domestic flight. Open-jaw ticket recommended. Rental car only needed for the Bergen-Flam leg. Bergen-Oslo scenic train takes 6h45m with a family car and playroom where kids 0-5 ride free. Norwegians speak near-perfect English. Nearly all transactions are cashless.",
    costBreakdown: "Flights run $4,000-$5,500 for four including connections. Accommodation totals $3,200-$3,800 for 14 nights. Food at Scandinavian prices is $2,800-$3,500 with self-catering helping significantly. Transport, trains, cruises, and activities add $1,500-$2,000. Mid-range estimate is about $13,000.",
    pros: [
      "Weather almost guaranteed below the 82F ceiling with perfect hiking temps",
      "World-class nature combined with rich urban culture",
      "Extremely safe, clean, and family-friendly country",
      "Flam Railway plus fjord cruise is a top-tier family travel experience",
      "Bergen-Oslo train has a family car with playroom turning transit into a highlight",
      "Accommodation quality is uniformly high"
    ],
    cons: [
      "Very expensive -- one of the priciest destinations in the world",
      "Bergen rain is real with wet days expected",
      "6-hour time difference means 2-3 days of jet lag adjustment",
      "3 bases required with one more transition than ideal",
      "Viking Ship Museum closed until 2027",
      "Flam accommodation is limited and books out early for July"
    ]
  },
  {
    slug: "kauai",
    name: "Kauai",
    tagline: "The best hiking variety in Hawaii with toddler-compatible trails, a uniquely compelling children's garden, real cultural depth on art nights and heritage trails, and the driest month of the year on the south shore.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Excellent hiking variety, Na Aina Kai Children's Garden, Hanapepe Art Night, and Koloa Heritage Trail deliver real culture without museum-dragging."
      },
      stress: {
        raw: 3.5,
        rationale: "10-hour travel day from NYC with mandatory connection, single-lane highway bottleneck, but English-speaking and familiar once on the ground."
      },
      showstoppers: {
        raw: 4,
        rationale: "Hurricane risk in an El Nino summer is the only event near the 10% threshold, with north shore road reliability uncertain."
      },
      weather: {
        raw: 4,
        rationale: "July is driest month with south shore at 80-84F, occasionally touching the 82F ceiling on still afternoons, with trade winds helping."
      },
      cost: {
        raw: 3,
        rationale: "Peak-season Hawaii pricing pushes to $12,200-$16,400 with mandatory rental car, resort lodging, and 30%+ above mainland grocery prices."
      },
      ageFit: {
        raw: 4,
        rationale: "Lydgate keiki pool and Na Aina Kai are ideal for a 2-year-old, but headline adult experiences like Na Pali boat tours are partially off-limits."
      },
      accommodations: {
        raw: 4.5,
        rationale: "Poipu and Princeville have strong modern resort and condo inventory consistently well-maintained and family-oriented."
      },
      total: 41.75
    },
    pills: [
      {
        text: "80-84F south shore",
        type: "muted"
      },
      {
        text: "10h travel day from NYC",
        type: "warn"
      },
      {
        text: "$12K-$16K",
        type: "warn"
      },
      {
        text: "Driest month (July)",
        type: "good"
      },
      {
        text: "North shore road risk",
        type: "warn"
      }
    ],
    highlights: [
      {
        name: "Na Aina Kai Children's Garden",
        summary: "240-acre garden with a dedicated kids section featuring gecko hedge maze, treehouse, and splash fountain.",
        detail: "Adults get serious horticultural interest while kids get a fantasy playground. Reservations required. A uniquely compelling kid attraction unlike anything at other destinations."
      },
      {
        name: "Waimea Canyon + Kuilau Ridge",
        summary: "The Grand Canyon of the Pacific with paved main lookout plus a wide shaded ridge trail that is the best toddler-compatible hike on the island.",
        detail: "Waimea lookout is stroller OK. Kuilau Ridge has picnic shelters and is flat enough for a 5-year-old to walk and a carrier for the toddler. Two different landscapes in two easy outings."
      },
      {
        name: "Hanapepe Friday Art Night",
        summary: "Live music, food trucks, and open galleries along a walkable historic main street with genuinely good art.",
        detail: "Not just tourist kitsch -- a real art scene. Kids do fine with the outdoor festival atmosphere. Align one of the two Fridays during the trip here."
      },
      {
        name: "Maha'ulepu Heritage Trail",
        summary: "Coastal trail past lithified sand dunes and dramatic shoreline south of Poipu, 1.5-2 hours.",
        detail: "Carrier for Hannah, Naomi walks it. Best south-shore hike with real geological interest and dramatic coastal formations."
      },
      {
        name: "Lydgate Beach Park",
        summary: "Rock-walled keiki pool with tropical fish visible while wading plus a 30,000 sq ft playground, all lifeguarded.",
        detail: "The single best toddler beach destination on Kauai and a reliable low-key half-day. Calm water, protected pool, and massive playground adjacent."
      },
      {
        name: "Kilauea Lighthouse",
        summary: "Nesting seabirds on dramatic cliffs with nene, albatross, and red-footed boobies on a short paved walk.",
        detail: "Kids are captivated by the birds; adults get the scenery and conservation story. Low effort, high reward."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Princeville / North Shore",
          nights: 4,
          activities: "Hanalei town, Na Aina Kai, Kilauea Lighthouse, Kalalau Trail first mile"
        },
        {
          name: "Poipu / South Shore",
          nights: 10,
          activities: "Waimea Canyon, Maha'ulepu Trail, Hanapepe Art Night, Koloa Heritage Trail, Lydgate Beach, Sleeping Giant first section"
        }
      ],
      note: "Two bases with a transition day via the east side stopping at Lydgate Beach Park and Fern Grotto en route. Front-load Princeville days given north shore road uncertainty."
    },
    showstopperRisks: [
      {
        name: "Hurricane or tropical storm",
        level: "LOW",
        detail: "July is early hurricane season but El Nino increases Central Pacific tropical cyclone frequency. A direct hit or near-miss could force evacuation or multi-day hotel confinement. Kauai has direct-hit history with Iniki in 1992. Probability of trip disruption is 3-5%."
      },
      {
        name: "North shore road closure",
        level: "MODERATE",
        detail: "Kuhio Highway on Hanalei Hill had emergency repairs in April 2026. A heavy summer rain event could re-close the road, cutting off a Princeville base. Mitigation: front-load Princeville days and book refundable north shore lodging."
      }
    ],
    routineHazards: [
      {
        name: "Ocean drowning risk",
        detail: "Kauai has the highest drowning rate in Hawaii. Use lifeguarded beaches only: Poipu, Lydgate, Salt Pond. No Queen's Bath. No unguarded north shore beaches."
      },
      {
        name: "Pediatric medical access",
        detail: "Wilcox Medical Center in Lihue has pediatric services but no pediatric ICU. Critical cases require medevac to Oahu."
      },
      {
        name: "Flash floods on hikes",
        detail: "Kalalau Trail and Hanakapi'ai Stream have fatality history from flash floods. Check weather before any north shore hike."
      },
      {
        name: "Box jellyfish",
        detail: "July full moon creates a warning window around July 18-20 overlapping with last trip days."
      }
    ],
    accommodations: "Poipu's Koloa Landing Resort has modern 1- and 2-bedroom villas with full kitchens and multiple pools near Poipu Beach. Grand Hyatt Kauai is the upscale resort option. Princeville's Westin Ocean Resort Villas have reliable modern units with kitchen and washer/dryer. Avoid bottom-tier Princeville condos from the 1980s with inconsistent upkeep. Overall inventory is strong with careful selection.",
    logistics: "No nonstop from NYC; best connections via SFO, LAX, or SEA with total travel day of about 10 hours. Rental car required for the entire stay with one main road circling two-thirds of the island. Kapa'a bottleneck is real so avoid the east side during rush hour. Costco near the airport for initial stock-up. Wilcox Medical Center in Lihue for emergencies.",
    costBreakdown: "Flights run $3,000-$3,600 for four with connections. Lodging totals $5,500-$7,500 split between Princeville and Poipu. Rental car is $1,200-$1,700. Food and activities add $2,500-$3,600. Total estimate is $12,200-$16,400.",
    pros: [
      "Best hiking variety of any Hawaiian island with multiple toddler-compatible options",
      "Na Aina Kai Children's Garden is a uniquely compelling kid attraction",
      "Hanapepe Art Night and Koloa Heritage Trail deliver real culture",
      "July is driest month with reliably sunny south shore",
      "Lush dramatic scenery unlike anywhere in the continental US",
      "English-speaking with familiar food and medical systems"
    ],
    cons: [
      "10-hour travel day from NYC with mandatory connection",
      "Rental car required with single highway bottlenecks and long drives",
      "Peak-season Hawaii pricing in the $13K-$16K range",
      "Best adult experiences like Na Pali boat and Kalalau Trail are partially off-limits",
      "North shore road reliability is uncertain post-2026 storms",
      "Ocean is genuinely dangerous requiring constant vigilance"
    ]
  },
  {
    slug: "french-alps",
    name: "French Alps (Annecy + Chamonix + Lyon)",
    tagline: "Europe's cleanest lake, Mont Blanc gondola panoramas, a UNESCO Renaissance city, and France's food capital -- with Chamonix averaging 67F in July and croissants every morning.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional variety: alpine gondolas with Mont Blanc views, Europe's cleanest lake, a UNESCO old town, and France's food capital."
      },
      stress: {
        raw: 3.5,
        rationale: "No direct JFK-Lyon flight but JFK-Geneva nonstop on SWISS at 7h45m; 6-hour jet lag; 3 bases but only short drives between them."
      },
      showstoppers: {
        raw: 4,
        rationale: "Heat waves have become more frequent in France but the Alps are the coolest part, with under 5% probability of trip-disrupting heat in the alpine areas."
      },
      weather: {
        raw: 4.5,
        rationale: "Chamonix July average high 67F, Annecy 79F, both well under ceiling; Lyon pushes it at 82F but is only a 2-night stop."
      },
      cost: {
        raw: 3,
        rationale: "Moderately expensive at $11,100-$15,500 for 14 nights with flights, alpine lodging, and French food prices."
      },
      ageFit: {
        raw: 4,
        rationale: "Lake beaches, gondolas, cog railway, and wildlife parks are strong at 5 and tolerable at 2, but the Aiguille du Midi summit is off-limits for Hannah."
      },
      accommodations: {
        raw: 4,
        rationale: "Strong inventory of renovated apartments and modern apart-hotels in both Annecy and Chamonix with France maintaining higher lodging standards."
      },
      total: 41.75
    },
    pills: [
      {
        text: "67-79F alpine",
        type: "good"
      },
      {
        text: "JFK-GVA nonstop 4x/wk",
        type: "muted"
      },
      {
        text: "$11K-$15.5K",
        type: "warn"
      },
      {
        text: "Lake + mountain combo",
        type: "good"
      },
      {
        text: "French language",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Lake Annecy",
        summary: "Europe's cleanest lake ringed by mountains with free beaches, a flat cycling path, pedal-boats, and a pastel-canal old town.",
        detail: "Plage d'Albigny and Plage des Marquisats are free public beaches. Toddler trailers available for the cycling path. Annecy's old town has pastel canals, the Palais de l'Isle, and gelato shops. Pedestrianized and stroller-friendly."
      },
      {
        name: "Chamonix Gondolas + Mont Blanc",
        summary: "Planpraz gondola to 6,500ft for jaw-dropping Mont Blanc views with children of all ages allowed.",
        detail: "Optionally continue to Le Brevent at 8,280ft. Plan de l'Aiguille mid-station offers easy alpine meadow walks. The sheer scale of glaciated peaks is viscerally impressive for adults; kids love the ride itself."
      },
      {
        name: "Montenvers Railway + Mer de Glace",
        summary: "Historic cog railway climbing to a glacier with the 20-minute train ride being a highlight for a 5-year-old.",
        detail: "At the top: glacier viewpoints, a small museum, and an ice grotto. Strollers stay up top with carrier needed for Hannah for the grotto. Free for children under 5."
      },
      {
        name: "Grand Balcon Sud Hike",
        summary: "Alpine trail between Planpraz and Flegere gondolas with unobstructed Mont Blanc views the entire way.",
        detail: "2-2.5 hours with Naomi walking and Hannah in a carrier. One-way with gondola descent. One of the most scenic day-hikes in the Alps accessible to families."
      },
      {
        name: "Lyon Cultural Capital",
        summary: "Musee des Confluences with dinosaurs and mummies, secret Renaissance passageways, and France's gastronomic heart.",
        detail: "Vieux Lyon's traboules are an adventure for a 5-year-old. Parc de la Tete d'Or has a free zoo, carousel, and lakeside paths. Two funicular rides connect to Roman theater views at Fourviere."
      },
      {
        name: "French Food Culture",
        summary: "Morning croissants, market shopping, alpine cheese picnics, and evening dinners with local wines as a daily highlight.",
        detail: "Annecy's Sunday market, Lyon's Les Halles Paul Bocuse, and Chamonix mountain hut meals. Kids eat crepes, tartines, and fruit tarts happily. The food culture is a daily experience, not just a restaurant visit."
      },
      {
        name: "Gorges du Fier",
        summary: "Dramatic canyon walkway bolted to cliff walls above a roaring river, 15 minutes from Annecy.",
        detail: "The elevated metal walkway is safe with railings but thrilling. About 30 minutes to walk through. Naomi will find it exciting; Hannah rides in a carrier."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Lyon",
          nights: 2,
          activities: "Vieux Lyon traboules, Fourviere funicular and Roman theater, Musee des Confluences, Parc de la Tete d'Or"
        },
        {
          name: "Annecy",
          nights: 6,
          activities: "Lake beaches, old town, Gorges du Fier, cycling path, Parc Animalier, lake cruise, market days"
        },
        {
          name: "Chamonix",
          nights: 6,
          activities: "Montenvers Railway, Planpraz gondola, Grand Balcon Sud hike, Flegere gondola, Centre Aquatique"
        }
      ],
      note: "Three bases with only short drives: Geneva to Lyon 1h45, Lyon to Annecy 1h45, Annecy to Chamonix 1h. Pick up and drop off car at Geneva airport to avoid one-way fees."
    },
    showstopperRisks: [
      {
        name: "European heat wave",
        level: "LOW",
        detail: "July 2025 saw heat waves reaching 100-104F in French lowlands. The Alps are substantially buffered: Chamonix rarely exceeds 86F even in extreme events, and Annecy's lakeside location moderates temperature. Lyon is the vulnerable link at only 2 nights. Probability of trip-disrupting heat in the Alps specifically remains under 5%."
      },
      {
        name: "Thunderstorms disrupting mountain activities",
        level: "LOW",
        detail: "Alpine July afternoons frequently produce thunderstorms. These are routine and rarely all-day events; the standard mitigation is to start activities early. Could lose a gondola day if storms persist. Probability of losing 1-2 activity days is 15-20%."
      }
    ],
    routineHazards: [
      {
        name: "Altitude effects on children",
        detail: "Chamonix sits at 3,400ft with gondolas reaching 6,500-8,200ft. Brief exposure is safe but watch for fussiness or ear pain on rapid ascents."
      },
      {
        name: "Lake swimming supervision",
        detail: "Lake Annecy beaches are unguarded or lightly guarded. Standard water supervision with two small children."
      },
      {
        name: "Cobblestone streets",
        detail: "Annecy and Lyon old towns have uneven cobblestones. Manageable with a decent stroller but bumpier."
      },
      {
        name: "Tick season",
        detail: "July is tick season in alpine meadows. Standard precautions with long pants and checks after hikes."
      }
    ],
    accommodations: "Annecy offers 2-bedroom lakeside apartments in Annecy-le-Vieux at $250-350/night via curated local agencies like OVO Network. Chamonix has the modern family-oriented RockyPop Hotel in Les Houches or renovated center-of-town apartments at $200-400/night. Lyon's Meininger Hotel is family-friendly or Cour des Loges in Vieux Lyon is a restored Renaissance building at $200-300/night. Book by May for peak July.",
    logistics: "JFK to Geneva nonstop on SWISS in 7h45m, 4 times per week in summer. Pick up car at Geneva airport. French autoroutes are smooth and well-signed with tolls totaling about $30-50. French is the primary language but tourist areas have strong English in hotels, restaurants, and attractions. Basic French pleasantries go a long way.",
    costBreakdown: "Flights run $3,500-$5,000 for four on SWISS JFK-GVA. Car rental with insurance, fuel, and tolls is $800-$1,200. Accommodation totals $4,000-$5,500 for 14 nights. Food and activities add $2,500-$3,300. Midpoint estimate is about $13,000.",
    pros: [
      "Near-perfect weather profile: Chamonix 67F, Annecy 79F, both well under the ceiling",
      "Exceptional adult appeal: alpine grandeur, lake beauty, UNESCO heritage, world-class food",
      "Gondolas and cog railways are inherently exciting for kids with no museum dragging",
      "French food culture is a daily highlight, not an add-on",
      "JFK-Geneva nonstop exists at 7h45m on SWISS",
      "Microclimate escape valve: go higher for cooler temps on hot days"
    ],
    cons: [
      "JFK-Geneva nonstop only 4x/week, limiting scheduling flexibility",
      "6-hour jet lag is manageable but real with toddler sleep",
      "Lyon bookend risks heat at 82F average with spikes above 95F",
      "Aiguille du Midi summit is off-limits for Hannah and not recommended for Naomi",
      "10-11 rain days per month with afternoon thunderstorms",
      "French-language environment adds mild friction vs. English-speaking destinations"
    ]
  },
  {
    slug: "pnw",
    name: "Pacific Northwest (Seattle + Olympic NP + San Juans)",
    tagline: "Temperate rainforest, wild Pacific coast, peak orca season, and world-class city culture with the best weather fit on the list -- all on a 6-hour direct flight with minimal jet lag.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Excellent variety across culture, world-class nature, and unique experiences like peak orca whale watching and the Hoh Rain Forest."
      },
      stress: {
        raw: 3.5,
        rationale: "Direct 6h25m flight with only 3h jet lag and Seattle walkable, but significant drives and competitive San Juan ferry reservations add friction."
      },
      showstoppers: {
        raw: 3.5,
        rationale: "Wildfire smoke events hit 3 of last 5 PNW summers, with estimated 15-25% probability of significant multi-day smoke during Jul 4-18."
      },
      weather: {
        raw: 4.5,
        rationale: "Seattle 75-79F, Olympic coast 63-68F, San Juans 70-75F -- all comfortably under the 82F ceiling, possibly the best weather fit on the entire list."
      },
      cost: {
        raw: 3,
        rationale: "Midpoint of about $9,500 for 14 nights is mid-range, with San Juan lodging and whale watching pushing the upper end."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Hall of Mosses is a short magical walk, Ruby Beach tide pools are toddler paradise, ferry rides are attractions themselves, and Sol Duc Hot Springs works for all ages."
      },
      accommodations: {
        raw: 4,
        rationale: "Seattle has deep modern inventory; Olympic lodge options are charming but book early; San Juan Island lodging is tighter in peak July."
      },
      total: 41.25
    },
    pills: [
      {
        text: "63-79F range",
        type: "good"
      },
      {
        text: "6h25m nonstop JFK",
        type: "good"
      },
      {
        text: "~$9.5K midpoint",
        type: "muted"
      },
      {
        text: "Smoke risk 15-25%",
        type: "warn"
      },
      {
        text: "Peak orca season",
        type: "good"
      }
    ],
    highlights: [
      {
        name: "Hoh Rain Forest (Hall of Mosses)",
        summary: "Otherworldly temperate rainforest draped in moss with a flat 0.8-mile trail that feels like a fairy tale.",
        detail: "Genuinely awe-inspiring and one of the most unique ecosystems in North America. Naomi will feel like she is in a fairy tale; Hannah is fine in a carrier. Short, flat, and unforgettable."
      },
      {
        name: "San Juan Island Whale Watching",
        summary: "July is the best month for Southern Resident orca sightings with near-guaranteed encounters on multi-hour boat tours.",
        detail: "Tours depart from Friday Harbor. Naomi is old enough to be riveted; Hannah will need snacks but the boat ride itself is an adventure. Land-based viewing also possible at Lime Kiln Point State Park."
      },
      {
        name: "Pike Place Market + Chihuly",
        summary: "Pike Place is a sensory feast while Chihuly's blown glass art in a garden setting mesmerizes kids and adults equally.",
        detail: "Fish throwing, flower stalls, buskers, and tiny shops at Pike Place. Chihuly's vivid colors and organic shapes hold attention for all ages. Both walkable from downtown Seattle hotels."
      },
      {
        name: "Hurricane Ridge + Ruby Beach",
        summary: "Alpine meadows with mountain goats at 5,200ft plus dramatic sea stacks and tide pools on a wild Pacific coast.",
        detail: "Hurricane Ridge has short paved trails. Ruby Beach offers driftwood exploration and tide pool discoveries unlike any East Coast beach. Two dramatically different landscapes."
      },
      {
        name: "Sol Duc Hot Springs",
        summary: "Natural hot springs in the rainforest with developed pools at varying temperatures, plus a nearby falls trail.",
        detail: "Perfect recovery day between bigger excursions. The 1.6-mile falls trail is stroller-possible for the first section. Warm water, forest setting, family-friendly."
      },
      {
        name: "MoPOP (Museum of Pop Culture)",
        summary: "Frank Gehry building with music, sci-fi, and fantasy exhibits where kids can play real instruments in the Sound Lab.",
        detail: "Pairs with Seattle Center where the International Fountain is a guaranteed toddler hit. Good rainy-day option with genuine adult interest in the music exhibits."
      },
      {
        name: "Port Townsend",
        summary: "Beautifully preserved Victorian seaport with independent bookshops, galleries, and a waterfront.",
        detail: "A quieter counterpoint to Seattle's energy and a natural stopover en route to Olympic NP. Walkable, charming, and family-friendly."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Seattle",
          nights: 4,
          activities: "Pike Place, Chihuly, MoPOP, Seattle Aquarium, Pacific Science Center, Discovery Park, Bainbridge Island ferry"
        },
        {
          name: "Olympic Peninsula",
          nights: 6,
          activities: "Hurricane Ridge, Hoh Rain Forest, Sol Duc Hot Springs, Ruby Beach, Port Townsend day trip"
        },
        {
          name: "San Juan Islands",
          nights: 3,
          activities: "Whale watching tour, Lime Kiln Point, Sculpture Park, Pelindaba Lavender Farm"
        }
      ],
      note: "Three bases plus a buffer night in Seattle before departure. The Olympic Peninsula base splits between Port Angeles (4 nights) and Kalaloch Lodge (2 nights for coast access). San Juan ferry from Anacortes requires advance vehicle reservations."
    },
    showstopperRisks: [
      {
        name: "Wildfire smoke",
        level: "MODERATE",
        detail: "PNW experienced smoke events in 2020, 2021, 2024, and 2025. The July 4-18 window is early season with major episodes typically peaking late July through September, but the Bear Gulch Fire in 2025 was Olympic NP's largest ever. Estimated 15-25% probability of a significant multi-day event. If smoke arrives it can confine the family indoors for 2-4 days with no outdoor mitigation."
      }
    ],
    routineHazards: [
      {
        name: "Sneaker waves on Olympic coast",
        detail: "Powerful unexpected wave surges on beaches like Ruby Beach. Keep kids well above the high-tide line and never turn your back on the ocean."
      },
      {
        name: "Wildlife encounters",
        detail: "A cougar approached a 4-year-old at Hurricane Ridge in July 2025. Carry bear spray on trails and keep kids close."
      },
      {
        name: "Cold water",
        detail: "Pacific water at 48-55F can cause rapid hypothermia. Supervise closely at tide pools and beaches."
      },
      {
        name: "Road closures",
        detail: "Mora Road past the campground is closed and Hoh Road has active construction. Check current conditions before driving."
      }
    ],
    accommodations: "Seattle has deep modern hotel inventory including Hyatt Regency and Motif for walkable downtown options. Port Angeles offers Quality Inn or Olympic Lodge. Kalaloch Lodge's bluff cabins overlooking the Pacific are special but book early. Friday Harbor on San Juan Island has Earthbox Inn or vacation rentals, though inventory is tight for peak July. Overall quality is good across all bases.",
    logistics: "JFK-SEA nonstop in 6h25m on Alaska, Delta, or JetBlue with multiple daily options at $250-400/person. Only 3-hour time difference means minimal jet lag. Rental car essential for the full 14 days. San Juan Island ferry from Anacortes requires advance vehicle reservations that opened April 15, 2026. Seattle Children's Hospital is one of the best pediatric hospitals in the country.",
    costBreakdown: "Flights run $1,600-$2,400 for four. Rental car with gas is $1,200-$1,800. Lodging totals $3,500-$5,000 for 14 nights. Food, activities, and ferries add $1,950-$3,050. Midpoint is about $9,500.",
    pros: [
      "Best weather fit on the list -- comfortably under 82F ceiling everywhere",
      "Outstanding age-fit with short magical hikes, tide pools, ferries, and hot springs",
      "Direct 6h flight with minimal 3h jet lag and English-speaking familiar logistics",
      "Rich variety: world-class city plus temperate rainforest plus wild coast plus island archipelago",
      "Peak orca whale watching season in July",
      "Seattle Children's Hospital nearby for peace of mind"
    ],
    cons: [
      "Wildfire smoke risk is real and unhedgeable at 15-25%",
      "Significant driving with a toddler across multiple 2-3 hour legs",
      "July 4th week is peak season with crowds and tight ferry and lodging availability",
      "Olympic Peninsula food options are limited outside Seattle",
      "Not as culturally rich as European alternatives for adult interests",
      "Three bases plus driving days means logistical friction"
    ]
  },
  {
    slug: "slovenia",
    name: "Slovenia (Ljubljana + Bled + Julian Alps)",
    tagline: "Peak fairy-tale whimsy for a 5-year-old: cave trains, wishing bells on lake islands, castles built into cliff faces, and an altitude gradient that provides a weather escape valve when valleys heat up.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional variety: medieval castles, turquoise alpine lakes, gorge walks, cave train, Venetian coast, and a pedestrianized capital."
      },
      stress: {
        raw: 3,
        rationale: "No direct JFK-LJU flight means 10-12h travel via Venice plus 2h15m drive, 6h jet lag, and 3-4 bases to fill 14 days."
      },
      showstoppers: {
        raw: 4,
        rationale: "About 15% probability of a multi-day heat wave that confines the family indoors, just above the 10% threshold."
      },
      weather: {
        raw: 3.5,
        rationale: "Ljubljana at 81-82F sits right at the ceiling with Bled at 77-79F; Julian Alps at 68-73F provide reliable escape but valley heat waves push well past ceiling."
      },
      cost: {
        raw: 3.5,
        rationale: "Good value for Europe with a midpoint of about $9,000 for 14 nights."
      },
      ageFit: {
        raw: 4.5,
        rationale: "Cave train, Pletna boat with wishing bell, castle funicular, and cable car are peak whimsy for a 5-year-old and manageable for a 2-year-old."
      },
      accommodations: {
        raw: 3,
        rationale: "Modern apartments and boutique hotels exist but older properties often lack AC, Bled has a booking bottleneck, and quality requires filtering."
      },
      total: 39.75
    },
    pills: [
      {
        text: "68-82F range",
        type: "muted"
      },
      {
        text: "Via Venice (no direct)",
        type: "warn"
      },
      {
        text: "~$9K midpoint",
        type: "good"
      },
      {
        text: "Heat wave risk ~15%",
        type: "warn"
      },
      {
        text: "Peak fairy-tale age",
        type: "good"
      }
    ],
    highlights: [
      {
        name: "Ljubljana Old Town",
        summary: "Fully pedestrianized riverside capital with Triple Bridge, Dragon Bridge, and a castle reached by funicular.",
        detail: "Manageable scale for a family day with excellent cafe culture. Tivoli Park has big playgrounds for burning energy. The funicular ride to the castle is an attraction in itself."
      },
      {
        name: "Lake Bled + Pletna Boat",
        summary: "Iconic alpine lake with a church on an island, traditional boat ride, 99 stone steps, and a wishing bell to ring.",
        detail: "Bled Castle overlooks everything. Cream cake (kremsnita) is the local ritual. Postcard scenery that genuinely delivers on the fairy-tale promise."
      },
      {
        name: "Vintgar Gorge",
        summary: "1.6km wooden walkway suspended above a turquoise river through a narrow limestone gorge ending at a 52ft waterfall.",
        detail: "Carrier-only with no stroller access, but flat and dramatic. Best early morning before crowds. The turquoise water color is genuinely striking."
      },
      {
        name: "Postojna Cave + Predjama Castle",
        summary: "Underground train ride through a massive karst cave system, then a Renaissance castle literally built into a cave mouth.",
        detail: "Strollers up to 80cm width OK on the cave train so Hannah can ride. The castle-in-cave combination is unmatched for kid wonder and adult fascination. About 15 minutes between the two."
      },
      {
        name: "Lake Bohinj + Vogel Cable Car",
        summary: "Wilder, less touristy sibling to Bled with a cable car to 5,030ft and easy meadow walks at the top.",
        detail: "Panoramic Julian Alps views from the cable car summit. Water temperature is swimmable in July. Quieter base for nature days away from Bled's crowds."
      },
      {
        name: "Soca Valley",
        summary: "Turquoise river considered one of Europe's most beautiful with spectacular valley driving even without stopping.",
        detail: "Short riverside walks accessible with kids. Serious kayaking and canyoning is return-trip material at age 10+. The drive through the valley is a highlight on its own."
      },
      {
        name: "Piran",
        summary: "Compact Venetian-style coastal town on a peninsula with Tartini Square, sea views, and fresh seafood.",
        detail: "Different texture from the alpine interior. Optional extension to Rovinj in Croatia adds another layer. A relaxing final few days."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Ljubljana",
          nights: 4,
          activities: "Old Town, castle funicular, Central Market, Tivoli Park, Postojna Cave + Predjama Castle day trip"
        },
        {
          name: "Bled / Bohinj area",
          nights: 6,
          activities: "Lake Bled + Pletna boat, Vintgar Gorge, Lake Bohinj, Vogel cable car, Soca Valley day drive"
        },
        {
          name: "Piran + optional Rovinj",
          nights: 4,
          activities: "Piran old town, coastal relaxation, optional Croatia extension"
        }
      ],
      note: "Three bases with 4+ nights each. The Bled base absorbs day trips to Bohinj, Vintgar, and Soca without relocating. Fly in and out via Venice, only 1.5-2 hours from both Ljubljana and Piran."
    },
    showstopperRisks: [
      {
        name: "Multi-day heat wave",
        level: "MODERATE",
        detail: "2025 saw 101F with national red alerts in early July. Climate trend is toward more frequent Mediterranean heat domes reaching Slovenia. A 3-5 day heat wave would push Ljubljana and even Bled past the 82F ceiling. Mitigation: retreat to Julian Alps at 68-73F even during heat waves. The altitude escape valve is real but requires flexibility. Probability is about 15%."
      }
    ],
    routineHazards: [
      {
        name: "Daily alpine thunderstorms",
        detail: "2-5 PM window in the Julian Alps, sometimes intense. Plan hikes for morning and keep afternoons flexible."
      },
      {
        name: "AC gaps in lodging",
        detail: "Older Slovenian properties often lack air conditioning. Must confirm AC when booking, especially for Ljubljana and Bled."
      },
      {
        name: "2023 flood recovery",
        detail: "Tourist infrastructure substantially restored but some trails and roads in remote valleys may still have diversions."
      },
      {
        name: "Mountain road driving",
        detail: "Soca Valley and some Julian Alps routes involve narrow, winding roads. Not dangerous but requires comfort with mountain driving."
      }
    ],
    accommodations: "Ljubljana has modern apartments and boutique hotels like Vander Urbani Resort with AC in the Old Town area. Bled offers Hotel Triglav (renovated, lakefront) or Garden Village (glamping and rooms, family-friendly) with July inventory tight so book early and confirm AC. Piran has Hotel Tartini or Casa Piranesi as boutique options. Quality requires more filtering than Scandinavian destinations but adequate options exist with research.",
    logistics: "No direct JFK-LJU flight. Best routing is Delta JFK-VCE direct in 8h15m then 2h15m drive to Ljubljana. Rental car essential but distances are short: Ljubljana to Bled 45min, to Postojna 55min, to Piran 1h20m. Motorway vignette required. English proficiency is high especially in tourist areas. Slovenian cuisine blends Central European and Italian influences.",
    costBreakdown: "Flights run $3,200-$4,400 for four via Venice. Car rental with fuel and vignette is $800-$1,100. Lodging totals $2,100-$3,500 for 14 nights. Food and activities add $1,500-$2,400. Midpoint is about $9,000.",
    pros: [
      "Peak fairy-tale whimsy for a 5-year-old with castles, cave trains, and wishing bells",
      "Altitude gradient provides weather escape valve when valleys heat up",
      "Compact country with short drives between dramatically different landscapes",
      "Strong value for Europe in July",
      "50/50 urban-nature split fits the family profile well",
      "Excellent food culture, high English proficiency, very safe"
    ],
    cons: [
      "No direct flight from NYC adds 4-6 hours of travel",
      "Heat wave risk of about 15% could push valleys well past 82F for multiple days",
      "14 days slightly long for Slovenia alone, needing a coast extension",
      "Bled is crowded in peak July",
      "AC not guaranteed in older properties requiring verification at booking",
      "6h jet lag is manageable but not trivial with a toddler"
    ]
  },
  {
    slug: "azores",
    name: "Azores (Sao Miguel + Terceira)",
    tagline: "The best weather fit and best value on the entire list: hot springs, whale watching, and volcanic landscapes on a 5.5-hour direct flight with minimal jet lag -- though only 2 flights per week creates stranding risk.",
    scores: {
      highlights: {
        raw: 3.5,
        rationale: "Strong nature and geothermal appeal with unique experiences but thinner on urban culture and variety than top-tier European destinations."
      },
      stress: {
        raw: 4,
        rationale: "Short 5.5h direct flight with only 4h jet lag and tiny islands with short drives, but inter-island transit day and weather volatility add friction."
      },
      showstoppers: {
        raw: 3.5,
        rationale: "The 2-flights-per-week constraint creates a real stranding scenario if a cancellation hits departure day; volcanic risk negligible but flight fragility is uncomfortable."
      },
      weather: {
        raw: 4.5,
        rationale: "Best thermal fit on the entire list at 73-77F highs with 63-64F lows and humidity at yearly minimum."
      },
      cost: {
        raw: 4.5,
        rationale: "Best value on the list with a realistic $6,500-$8,000 for 14 nights."
      },
      ageFit: {
        raw: 3.5,
        rationale: "Hot springs are a huge win for both kids and short walks are age-appropriate, but marquee hikes and adventure activities unlock at 8-12."
      },
      accommodations: {
        raw: 3,
        rationale: "Growing inventory but still limited compared to mainstream destinations; peak July demand means booking immediately is essential."
      },
      total: 39.25
    },
    pills: [
      {
        text: "73-77F highs",
        type: "good"
      },
      {
        text: "5.5h direct JFK",
        type: "good"
      },
      {
        text: "$6.5K-$8K best value",
        type: "good"
      },
      {
        text: "Only 2 flights/week",
        type: "warn"
      },
      {
        text: "4-seasons-in-a-day weather",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Sete Cidades Twin Lakes",
        summary: "Volcanic crater with side-by-side green and blue lakes ringed by lush ridgeline trails and car-accessible viewpoints.",
        detail: "Shorter walks along the crater rim work for a 5-year-old. Genuinely otherworldly landscape unlike anything the family has seen."
      },
      {
        name: "Furnas Geothermal Valley",
        summary: "Bubbling fumaroles, hot mineral springs, and famous stew slow-cooked underground in volcanic steam.",
        detail: "Terra Nostra botanical garden has a massive warm iron-rich pool perfect for family soaking. Kids love watching the cozido pots get pulled from the ground."
      },
      {
        name: "Whale Watching by Catamaran",
        summary: "July is peak season with 20+ species; family-friendly catamarans offer sperm whale sightings with dolphins nearly guaranteed.",
        detail: "More stable than zodiacs and appropriate for young children. Sperm whales are year-round residents. The zodiac close-encounter trips unlock at older ages."
      },
      {
        name: "Caldeira Velha Forest Hot Springs",
        summary: "Warm cascade waterfall in a fern-covered ravine with tiered pools at different temperatures.",
        detail: "Manageable walk from parking. One of the most photogenic and kid-friendly hot spring experiences anywhere. A genuine all-ages highlight."
      },
      {
        name: "Lagoa do Fogo",
        summary: "Remote volcanic lake accessible via mandatory shuttle with kids under 6 riding free.",
        detail: "Less crowded than Sete Cidades and more rugged. The shuttle actually reduces stress versus fighting for parking."
      },
      {
        name: "Gorreana Tea Plantation",
        summary: "Europe's only tea plantation, operating since 1883, with free self-guided tours and fields dropping to the ocean.",
        detail: "Kids can pick tea leaves. Unique and low-key. Rolling green fields make for a relaxing outing without any age restrictions."
      },
      {
        name: "Terceira: Algar do Carvao + Angra",
        summary: "Descend into a volcanic chimney with stalactites, then explore a UNESCO World Heritage town with colorful streets.",
        detail: "Algar do Carvao has a subterranean lake. Angra do Heroismo adds meaningful urban and historical variety to the Sao Miguel nature focus."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Ponta Delgada, Sao Miguel",
          nights: 10,
          activities: "Sete Cidades, Furnas, Lagoa do Fogo, Caldeira Velha, Gorreana, whale watching, Mosteiros rock pools, old town"
        },
        {
          name: "Angra do Heroismo, Terceira",
          nights: 4,
          activities: "Algar do Carvao, Biscoitos rock pools, UNESCO town, Monte Brasil hike"
        }
      ],
      note: "Two bases total with one transition via a 30-minute inter-island flight. One property on Sao Miguel eliminates packing stress entirely for the main leg. Day trips max 1.5 hours each way."
    },
    showstopperRisks: [
      {
        name: "Flight cancellation and stranding",
        level: "MODERATE",
        detail: "Azores Airlines operates JFK-PDL only 2x/week. A cancelled flight means 3-4 day delay or expensive rebooking through Lisbon. Ryanair's March 2026 exit reduced overall seat capacity. Mitigation: build 1-day buffer and purchase comprehensive travel insurance with delay coverage. Probability is 3-5% per leg."
      },
      {
        name: "Volcanic eruption disrupting travel",
        level: "VERY LOW",
        detail: "Sao Miguel has not erupted since 1652. Terceira's alert was raised but eruption probability in any given 2-week window is very low, well under 1%."
      }
    ],
    routineHazards: [
      {
        name: "Four seasons in a day weather",
        detail: "Microclimate volatility means sunshine can flip to rain within an hour. Requires layered clothing, waterproof jackets, and backup indoor plans daily."
      },
      {
        name: "Rocky coastline",
        detail: "No sandy beaches. Ocean access is via volcanic rock pools and steep coastal areas. Life jackets for kids near any ocean access."
      },
      {
        name: "Winding mountain roads",
        detail: "Narrow steep roads to viewpoints, especially around Sete Cidades rim. Carsickness risk for kids."
      },
      {
        name: "Limited medical facilities",
        detail: "Hospital in Ponta Delgada is adequate for routine care. Serious emergencies may require air evacuation to mainland Portugal."
      }
    ],
    accommodations: "Sao Miguel's Ponta Delgada has modern apartments and boutique hotels in the marina area. The Azor Hotel (5-star, modern, pool) is the flagship option. White Exclusive Suites and Villas is well-reviewed. Terceira has thinner inventory with Terceira Mar Hotel as the main modern option. Filter aggressively for post-2018 renovations on both islands and book early as July fills fast.",
    logistics: "JFK-PDL direct on Azores Airlines in 5.5 hours, only 2x/week typically Wednesday and Saturday. Inter-island SATA flights are 30 minutes. Rental car essential on both islands with good roads but winding conditions. Portuguese is the primary language but English is widely spoken in tourist areas. Portuguese cuisine is very kid-friendly with grilled fish, rice, soups, and pastries.",
    costBreakdown: "Flights run $2,400-$3,200 for four JFK-PDL round-trip. Inter-island flights add $300-$500. Lodging totals $2,100-$3,000 for 14 nights. Car rental for both islands is $500-$700. Food and activities add $1,300-$1,900. Realistic midpoint is about $7,500.",
    pros: [
      "Best weather fit on the list at 73-77F with no heat-ceiling anxiety",
      "Shortest direct flight from JFK at 5.5h with minimal 4h jet lag",
      "Best value destination by a wide margin",
      "Hot springs are a genuine all-ages highlight, not a compromise",
      "Unique mid-Atlantic character unlike anywhere else on the list",
      "Only 2 bases over 14 nights equals minimal transition stress"
    ],
    cons: [
      "Only 2 flights per week creates stranding risk if cancellation hits",
      "Four-seasons-in-a-day weather requires constant flexibility",
      "Better at 8-12 for marquee hiking and adventure activities",
      "Thinner accommodation inventory than mainstream destinations",
      "Limited urban and cultural depth compared to mainland Europe",
      "14 days may feel repetitive on small islands"
    ]
  },
  {
    slug: "alaska",
    name: "Alaska (Anchorage + Kenai + Denali)",
    tagline: "Glaciers, tidewater fjords, subarctic tundra, and guaranteed wildlife encounters in temperatures that never threaten the heat ceiling -- genuine once-in-a-lifetime scenery with no passport needed.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Kenai Fjords glaciers, Exit Glacier, Denali wildlife bus, AWCC, and the Seward Highway drive are world-class with rich nature and cultural depth."
      },
      stress: {
        raw: 3,
        rationale: "7-8 hour flights with connections likely, 3 bases across 14 nights with 2 driving transitions, car seat logistics on Denali buses, and 19 hours of daylight disrupting toddler sleep."
      },
      showstoppers: {
        raw: 3.5,
        rationale: "Wildfire smoke is a real concern in July with roughly 15-25% probability of multi-day smoke impacting outdoor plans."
      },
      weather: {
        raw: 5,
        rationale: "Average highs 60-65F in Anchorage and Kenai, rarely above 70F, well below the 82F ceiling with layering needed for cool mornings."
      },
      cost: {
        raw: 2,
        rationale: "Alaska in July is expensive at $13,000-$16,000 with peak-season lodging, car rental at $130-190/day, and boat tours."
      },
      ageFit: {
        raw: 3.5,
        rationale: "Exit Glacier and AWCC are great at any age but a 6-7 hour Denali bus with a car-seated 2-year-old is a real ask."
      },
      accommodations: {
        raw: 3.5,
        rationale: "Modern cabin rentals exist but inventory is thinner than Lower 48 and many properties lean rustic, requiring early booking and careful vetting."
      },
      total: 38.25
    },
    pills: [
      {
        text: "60-65F highs",
        type: "good"
      },
      {
        text: "No nonstop from NYC",
        type: "warn"
      },
      {
        text: "$14K-$16K",
        type: "warn"
      },
      {
        text: "Smoke risk 15-25%",
        type: "warn"
      },
      {
        text: "Domestic / no passport",
        type: "good"
      }
    ],
    highlights: [
      {
        name: "Kenai Fjords Glacier Cruise",
        summary: "Half-day catamaran cruise past tidewater glaciers with sea otters, puffins, humpback whales, and Steller sea lions.",
        detail: "The 4-hour Resurrection Bay Wildlife Cruise stays in calmer protected waters manageable for young kids. Infants under 2 cruise free. One of the most visually spectacular day trips in North America."
      },
      {
        name: "Exit Glacier",
        summary: "Walk right up to a glacier on a 1-mile mostly paved loop, doable with an all-terrain stroller.",
        detail: "Adults and Naomi see the blue ice face up close. The short distance keeps Hannah comfortable in a carrier. A tangible, awe-inducing encounter with deep geological time."
      },
      {
        name: "Denali Tundra Wilderness Tour",
        summary: "6-7 hour narrated bus ride through subarctic tundra scanning for grizzlies, caribou, moose, and Dall sheep.",
        detail: "TVs connected to the driver's spotting scope help kids see distant wildlife. The 2026 road goes to mile 43 covering the richest wildlife corridor. Challenging duration for a 2-year-old; plan around nap schedule."
      },
      {
        name: "Alaska Wildlife Conservation Center",
        summary: "200-acre open-air sanctuary with brown bears, moose, muskox, wolves, and wood bison along a 1.5-mile loop.",
        detail: "Driveable if toddler legs give out. Free for under-3s. Conveniently located on the Seward Highway between Anchorage and the Kenai. Kids are mesmerized; adults appreciate the conservation mission."
      },
      {
        name: "Tony Knowles Coastal Trail",
        summary: "11-mile paved waterfront trail with views of Cook Inlet and the Alaska Range, fully stroller-friendly and free.",
        detail: "Do any segment you like. Moose sightings are common. Rent e-bikes for adults or bike-seat the kids for a longer stretch. Flat, paved, and scenic."
      },
      {
        name: "Alaska Native Heritage Center",
        summary: "Six life-sized traditional dwellings around a lake with live storytelling, dance, and Native Games demonstrations.",
        detail: "Genuinely educational cultural experience, not theme-park veneer. Naomi is the right age for interactive storytelling; Hannah will enjoy the outdoor walking. About 3 hours to do well."
      },
      {
        name: "Seward Highway Scenic Drive",
        summary: "125-mile National Scenic Byway with roadside glaciers, beluga whale sighting spots, and Dall sheep on cliffs.",
        detail: "Stop at Byron Glacier trail (2 miles, minimal elevation, toddler-appropriate) and the Begich-Boggs Visitor Center. The drive itself is a highlight, not just transit."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Anchorage",
          nights: 4,
          activities: "Tony Knowles Coastal Trail, Alaska Native Heritage Center, AWCC at Portage, Byron Glacier trail"
        },
        {
          name: "Seward / Kenai Peninsula",
          nights: 5,
          activities: "Kenai Fjords cruise, Exit Glacier, Seward waterfront, Alaska SeaLife Center, kayaking"
        },
        {
          name: "Denali area",
          nights: 5,
          activities: "Tundra Wilderness Tour, Savage River Loop trail, sled dog demonstration, nature hikes"
        }
      ],
      note: "Three bases with two driving transitions: 2.5 hours Anchorage to Seward and 4.5 hours Seward to Denali (via Anchorage for lunch). All driving on excellent roads."
    },
    showstopperRisks: [
      {
        name: "Wildfire smoke",
        level: "MODERATE",
        detail: "Interior Alaska wildfires are common in July. The 2025 season saw heavy smoke reaching Anchorage and beyond. Southcentral Alaska is somewhat shielded by mountain ranges but still receives smoke on south-flowing wind patterns. A bad smoke week would confine the family indoors and ruin glacier and mountain views. Probability of multi-day impact is 15-25%."
      },
      {
        name: "Denali road construction",
        level: "LOW",
        detail: "The park road is confirmed limited to mile 43 for 2026 with the Polychrome bridge possibly opening mid-summer. Already priced into the itinerary. Less than 5% probability of further closure."
      }
    ],
    routineHazards: [
      {
        name: "Wildlife encounters",
        detail: "Moose and bears are present on trails and in neighborhoods. Make noise, carry bear spray, never approach moose with calves."
      },
      {
        name: "Cold water",
        detail: "Resurrection Bay and glacial rivers are near-freezing. No swimming. Keep kids away from water edges on boat tours."
      },
      {
        name: "Denali bus duration",
        detail: "6-7 hours on a bus with a car-seated 2-year-old is the single biggest comfort risk. Bring novel snacks and toys."
      },
      {
        name: "19 hours of daylight",
        detail: "Bring portable blackout curtains for both kids' rooms as the midnight sun seriously disrupts toddler sleep."
      }
    ],
    accommodations: "Anchorage has reliable Marriott and Hilton downtown properties or 2BR Airbnbs near the Coastal Trail at $200-300/night. Seward has modern cabin rentals like Salted Roots Alaska or Harbor 360 Hotel at $250-400/night with limited inventory requiring early booking. Denali has options like Denali Park Village river cabins or Holland America Lodge at $250-375/night. Many properties lean rustic so vetting carefully is important.",
    logistics: "No reliable nonstop from NYC in July. Alaska Airlines runs one daily JFK-ANC nonstop at about 7.5 hours but sells out early. Otherwise one-stop via Seattle adds 10-12 hours total. A rental SUV is essential for the full trip. All driving is on excellent roads. Hannah flies free domestically as a lap infant. The 19 hours of July daylight is the bigger sleep disruptor -- portable blackout curtains are essential.",
    costBreakdown: "Flights run $2,500-$4,000 for four. Rental car at 14 days averages $2,100. Lodging totals about $4,200 for 14 nights. Food at $250/day is $3,500. Activities including glacier cruises and Denali bus are about $1,200. Total estimate is $14,250-$15,750.",
    pros: [
      "Temperature is ideal -- never hot, well under 82F ceiling",
      "Genuinely once-in-a-lifetime scenery: glaciers, tidewater fjords, subarctic tundra",
      "Wildlife encounters are almost guaranteed with moose, bears, whales, puffins",
      "Stroller-friendly paved trails at Exit Glacier and Anchorage",
      "Domestic travel with no passports, no language barrier, no currency exchange",
      "AWCC and Heritage Center are standout kid-friendly activities"
    ],
    cons: [
      "Wildfire smoke risk in July is the biggest variable",
      "Expensive at $14K-$16K for 14 nights in peak season",
      "Denali bus tour is very long for a 2-year-old in a car seat",
      "No nonstop flights guaranteed from NYC",
      "19 hours of daylight seriously disrupts toddler sleep",
      "Accommodations are thinner and more rustic than comparable US destinations"
    ]
  },
  {
    slug: "maui",
    name: "Maui",
    tagline: "Reliable dry-side sunshine, excellent family accommodation inventory, and strong scenic hiking with an upcountry escape from coastal heat -- though signature experiences are off-limits at these ages.",
    scores: {
      highlights: {
        raw: 3.5,
        rationale: "Strong scenic hiking and nature walks but the signature experiences like Haleakala sunrise, full Road to Hana, and Lahaina are closed, age-inappropriate, or miserable with toddlers."
      },
      stress: {
        raw: 3.5,
        rationale: "Direct 11-hour nonstops from JFK are available but long, with 6-hour jet lag and familiar logistics once on the ground."
      },
      showstoppers: {
        raw: 4,
        rationale: "El Nino-elevated hurricane season and post-rain wildfire fuel load are real but each well under 10% trip-disruption probability."
      },
      weather: {
        raw: 3.5,
        rationale: "July highs 85-88F in resort areas regularly exceed the 82F ceiling, though upcountry at 3,000-4,000ft offers 75F relief."
      },
      cost: {
        raw: 3,
        rationale: "Estimated $10,000-$14,500 for 14 nights with peak Hawaii pricing on flights, lodging, and food."
      },
      ageFit: {
        raw: 3.5,
        rationale: "Resort infrastructure and calm beaches work great, but the top-tier adult experiences are off-limits or impractical at these ages."
      },
      accommodations: {
        raw: 4.5,
        rationale: "Excellent inventory of modern condos and resorts on both west and south sides, consistently well-maintained and family-oriented."
      },
      total: 38.25
    },
    pills: [
      {
        text: "85-88F coastal",
        type: "warn"
      },
      {
        text: "11h nonstop JFK",
        type: "warn"
      },
      {
        text: "$10K-$14.5K",
        type: "warn"
      },
      {
        text: "Upcountry 75F escape",
        type: "good"
      },
      {
        text: "Lahaina still closed",
        type: "muted"
      }
    ],
    highlights: [
      {
        name: "Kapalua Coastal Trail + Tide Pools",
        summary: "1.6-mile paved clifftop walk from Kapalua Bay to D.T. Fleming Beach, fully stroller-accessible with tide pools.",
        detail: "Continuous ocean views, whale-watch lookouts, and native plant signage. Rocky tide pools hold starfish, crabs, and small fish that mesmerize a 5-year-old. Adults enjoy the headland scenery."
      },
      {
        name: "Iao Valley State Park",
        summary: "Compact dramatic gorge with the 1,200ft Iao Needle rising from a jungle valley on a stroller-friendly 0.6-mile loop.",
        detail: "Takes 30-45 minutes with interpretive signs covering the 1790 battle of Kepaniwai. The scale of the valley walls is genuinely impressive. Verify reopened after 2024 flood repairs."
      },
      {
        name: "Upcountry Maui Day",
        summary: "Escape coastal heat at 3,000-4,000ft for lavender farms, the funky town of Makawao, and shaded forest trails.",
        detail: "Kula Botanical Garden, Komoda Bakery cream puffs, and the Waihou Spring Trail through eucalyptus forest. Cooler air, genuine agricultural landscape, and a pace that works with nap schedules."
      },
      {
        name: "Maui Ocean Center",
        summary: "World-class aquarium focused on Hawaiian marine life with a 750,000-gallon open-ocean tank and walk-through tunnel.",
        detail: "Air-conditioned, 1-2 hours, and the best rainy-day backup on the island. Both kids will be transfixed; adults get real marine biology depth on reef ecology and humpback whales."
      },
      {
        name: "Old Lahaina Luau",
        summary: "The most culturally authentic luau on Maui with traditional imu ceremony, hula narrative, and solid food.",
        detail: "Set oceanfront with under-2 free admission. Book months ahead for July. Separately, a 2-hour Trilogy sunset catamaran offers spinner dolphin sightings."
      },
      {
        name: "Waihee Ridge Trail (first mile)",
        summary: "The first mile to the initial viewpoint delivers sweeping valley-and-ocean panoramas that rival anything on the island.",
        detail: "Toddler in carrier, 5-year-old on foot. Morning start mandatory as clouds roll in by 10 AM. Captures the best views without the full 5-mile 1,500ft climb."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Napili/Kapalua (West Side)",
          nights: 7,
          activities: "Kapalua Coastal Trail, tide pools, Napili Bay snorkeling, Old Lahaina Luau, sunset sail, Iao Valley day trip"
        },
        {
          name: "Kihei/Wailea (South Side)",
          nights: 7,
          activities: "Maui Ocean Center, upcountry day, Paia + Twin Falls, Waihee Ridge hike, farmers market"
        }
      ],
      note: "Two bases at 7 nights each with one move mid-trip. Driving distances stay under 45 minutes for daily activities from either base."
    },
    showstopperRisks: [
      {
        name: "Hurricane or tropical storm",
        level: "LOW",
        detail: "Central Pacific hurricane season is active June-November and El Nino roughly doubles cyclone counts, but July is early season with direct landfalls on Maui historically extremely rare. Probability of trip disruption is 3-5%."
      },
      {
        name: "Wildfire",
        level: "LOW",
        detail: "March 2026 Kona Low rains produced heavy vegetation now curing into dry fuel, but Hawaiian Electric has deployed 53 weather stations, 44 AI wildfire cameras, and public safety power shutoff protocols since 2023. Risk to resort guests is indirect. Probability is 2-3%."
      }
    ],
    routineHazards: [
      {
        name: "Ocean safety",
        detail: "Rip currents, shore break, and box jellyfish warning window July 7-9. Check HawaiiBeachSafety.com daily and stick to protected bays."
      },
      {
        name: "Sun and heat exposure",
        detail: "Tropical UV is intense. Toddler-specific sunscreen, rash guards, and shade management required. Midday breaks non-negotiable."
      },
      {
        name: "Pediatric medical access",
        detail: "Maui Memorial has ER and pediatric services but no pediatric ICU. Critical cases require air ambulance to Oahu."
      },
      {
        name: "Jet lag",
        detail: "6 hours behind NYC means 3-4 days of early wake-ups and cranky evenings, especially for the 2-year-old."
      }
    ],
    accommodations: "West side Napili Kai Beach Resort is the classic family pick directly on Napili Bay. Vrbo 2BR condos in Napili run $300-400/night in July. South side Kihei condos at Kamaole Sands offer 2BR units at $200-300/night with pool and beach access. Wailea resorts are pristine but $600+/night. Overall inventory is deep and family-oriented with consistently easier selection than most destinations.",
    logistics: "JFK to Kahului direct on Hawaiian, Delta, or United in about 11 hours outbound. Red-eye options available. Rental car essential with the island being compact at 20-45 minute drives. Roads are good with traffic manageable outside Lahaina bypass at rush hour. Grocery stores are well-stocked and food variety is excellent.",
    costBreakdown: "Flights run $2,400-$3,200 for four. Lodging totals $3,500-$5,600 for 14 nights in 2BR condos. Rental car is $700-$900. Food and activities add $3,100-$4,800. Total estimate is $10,000-$14,500.",
    pros: [
      "Reliable summer weather with minimal rain on leeward side",
      "Excellent family accommodation inventory with condos and resorts",
      "Easy logistics with English, rental car, familiar food, and good medical access",
      "Strong scenic hiking options at Kapalua, Waihee Ridge, and Iao Valley",
      "Upcountry provides genuine heat relief and cultural texture",
      "Deep bench of toddler-compatible activities"
    ],
    cons: [
      "Regularly exceeds 82F heat ceiling in coastal areas",
      "11-hour flight plus 6-hour jet lag is significant stress with toddlers",
      "Signature experiences like Haleakala and full Hana drive are off-limits at these ages",
      "Destination skews beach and resort, less ideal for non-beach families",
      "Lahaina historic district still closed for wildfire reconstruction",
      "Car-dependent and not walkable"
    ]
  },
  {
    slug: "bc",
    name: "British Columbia (Vancouver + Whistler + Victoria)",
    tagline: "A rich urban-nature blend with museums, markets, gondolas, and gardens across three distinct bases -- if only the wildfire smoke risk were not so elevated.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Rich urban-nature blend with strong kid-fit throughout: Kids Market, aquarium, gondolas, gentle alpine trails, and Butchart Gardens."
      },
      stress: {
        raw: 3.5,
        rationale: "JetBlue 1x/week nonstop or connections, only 3h jet lag, but BC Ferries plus Sea to Sky driving plus 3 bases eat transit days."
      },
      showstoppers: {
        raw: 2.5,
        rationale: "Wildfire smoke has hit 4 of last 6 summers with roughly 25-35% probability of significant multi-day smoke event during July 4-18."
      },
      weather: {
        raw: 4.5,
        rationale: "Vancouver 72F, Whistler 66-73F, Victoria 72F -- all comfortably under 82F ceiling with cool nights."
      },
      cost: {
        raw: 2.5,
        rationale: "Midpoint $11-13K is second-highest after Iceland with peak-season BC, weak USD/CAD, and ferry fees."
      },
      ageFit: {
        raw: 4,
        rationale: "Works well now with Kids Market, aquarium, and gentle trails, but noticeably better at 8-12 when serious hiking and kayaking unlock."
      },
      accommodations: {
        raw: 4,
        rationale: "Strong modern inventory in Vancouver and Whistler; caveat that older Airbnbs often lack AC, which matters if smoke forces windows-closed days."
      },
      total: 38.25
    },
    pills: [
      {
        text: "66-72F range",
        type: "good"
      },
      {
        text: "JFK nonstop 1x/wk",
        type: "muted"
      },
      {
        text: "$11K-$13K",
        type: "warn"
      },
      {
        text: "Smoke risk 25-35%",
        type: "warn"
      },
      {
        text: "3h jet lag",
        type: "good"
      }
    ],
    highlights: [
      {
        name: "Stanley Park + Vancouver Aquarium",
        summary: "10km flat waterfront loop through old-growth forest, totem poles, and harbor views with the aquarium inside the park.",
        detail: "Carrier and stroller friendly on the paved seawall path. The aquarium is a natural kid anchor. Old-growth forest and totem poles provide genuine cultural and natural depth."
      },
      {
        name: "Granville Island + Kids Market",
        summary: "Working public market with artisan food stalls plus a dedicated Kids Market with ball pit, toy shops, and play areas.",
        detail: "Accessible by mini-ferry from downtown. The Kids Market buys serious browsing time for adults at the food and craft stalls across the courtyard."
      },
      {
        name: "Museum of Anthropology (UBC)",
        summary: "Bill Reid's massive cedar and bronze carvings with Haida house posts in a glass-walled Great Hall overlooking the water.",
        detail: "One of Canada's best museums. Kids tolerate it well given the scale of the objects. Outdoor Haida houses add an explorable element."
      },
      {
        name: "Sea to Sky Gondola + Peak 2 Peak",
        summary: "The Sea to Sky gondola has a toddler-friendly summit trail; Peak 2 Peak is the world's longest unsupported gondola span.",
        detail: "Both deliver alpine panoramas without requiring anyone to hike. Alpine Alley at the Sea to Sky summit is a short interpretive trail designed for young visitors."
      },
      {
        name: "Butchart Gardens",
        summary: "55-acre former quarry turned into themed gardens with Saturday night fireworks in July.",
        detail: "The Sunken Garden is spectacular. Kids like the carousel, boat ride, and running the paths. Rose Garden and Japanese Garden offer quiet adult appeal. A full half-day destination."
      },
      {
        name: "Whistler Valley Trail + Lost Lake",
        summary: "Paved multi-use trail through village and forest with a sandy beach and roped swimming area at Lost Lake.",
        detail: "Cool mountain water surrounded by peaks. Both kids can enjoy the beach while adults take in the scenery. The village itself is walkable and family-oriented."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Vancouver",
          nights: 5,
          activities: "Stanley Park, Granville Island, Museum of Anthropology, Science World, Gastown, Chinatown"
        },
        {
          name: "Whistler",
          nights: 4,
          activities: "Sea to Sky drive with gondola stop, Peak 2 Peak, Valley Trail, Lost Lake, village wandering"
        },
        {
          name: "Victoria",
          nights: 5,
          activities: "BC Ferries, Butchart Gardens, Royal BC Museum, Inner Harbour, Beacon Hill Park, Miniature World"
        }
      ],
      note: "Three bases with the Vancouver-to-Whistler drive (2h on Sea to Sky Highway) being scenic and manageable. Victoria requires BC Ferries (1.5h sailing, 3.5-4h door-to-door) as a one-way transit day."
    },
    showstopperRisks: [
      {
        name: "Wildfire smoke",
        level: "HIGH",
        detail: "BC has experienced multi-day smoke events in 4 of the last 6 summers. Low snowpack increases drought and fire potential for 2026. Canada is warming at 2x the global rate. A significant event means AQI 150+ for multiple days, confining the family indoors and posing health risk to a 2-year-old. Probability is roughly 25-35%. Unlike rain, bad smoke has no outdoor mitigation."
      },
      {
        name: "Heat dome",
        level: "VERY LOW",
        detail: "The 2021 event hit 108F in Vancouver, far above the 82F ceiling. AC is not standard in older BC accommodations making a heat dome doubly dangerous. Low probability at about 3-5% but catastrophic if it hits."
      }
    ],
    routineHazards: [
      {
        name: "Downtown Eastside homelessness",
        detail: "Concentrated in Vancouver's DTES; easily avoided with basic route awareness."
      },
      {
        name: "BC Ferries delays",
        detail: "Peak summer sailings can mean 1-2 sailing waits without a reservation. Book vehicle reservations early."
      },
      {
        name: "Bear and cougar encounters",
        detail: "Possible on Whistler trails. Standard awareness, no food on trails, make noise."
      },
      {
        name: "Cold Pacific water",
        detail: "Cold ocean conditions; supervise closely at any waterfront."
      }
    ],
    accommodations: "Vancouver has strong supply of modern condos and hotels in Yaletown, Coal Harbour, and Kitsilano at $250-350 CAD/night. Whistler has extensive resort condo inventory with reliable finishes. Victoria's Inner Harbour hotels are convenient but pricier. Critical: confirm AC in any non-hotel booking given smoke risk, as you may need to close windows and filter air.",
    logistics: "JetBlue JFK-YVR nonstop is about 6h but only roughly 1x/week. Air Canada and United offer connections through Toronto or hubs at $600-900/person. Rental car essential for Sea to Sky Highway and day trips. BC Ferries from Horseshoe Bay to Swartz Bay is 1.5h sailing -- reserve vehicle spot well in advance with fares up 3.2% in April 2026. Passports required for all family members. Excellent Asian food scene in Vancouver.",
    costBreakdown: "Flights run $2,400-$3,600 for four. Lodging totals $3,500-$7,000 for 14 nights across 3 bases. Rental car is $1,000-$1,400. BC Ferries, food, and activities add $2,300-$3,600. Midpoint is about $11,000-$13,000.",
    pros: [
      "Weather nearly ideal, comfortably under heat ceiling with cool nights",
      "Genuine 50/50 urban-nature split across three distinct bases",
      "Strong kid infrastructure with Kids Market, aquarium, and gentle trails",
      "Minimal 3h jet lag, same language, excellent medical access",
      "Scenic transit like Sea to Sky Highway and BC Ferries doubles as attraction"
    ],
    cons: [
      "Wildfire smoke is a serious show-stopper risk at 25-35% with no outdoor mitigation",
      "Peak-season pricing pushes toward top of budget range",
      "Destination is measurably better at ages 8-12 when hiking and kayaking unlock",
      "3 bases means 2 transit days with BC Ferries logistics requiring advance planning",
      "Older accommodations often lack AC, compounding both heat dome and smoke risk"
    ]
  },
  {
    slug: "rockies",
    name: "Canadian Rockies (Banff + Jasper)",
    tagline: "World-class mountain scenery with the best flight profile on the list and free parks admission in 2026 -- but the worst age-fit of any destination and elevated wildfire smoke risk.",
    scores: {
      highlights: {
        raw: 4,
        rationale: "World-class scenery and iconic drives with genuinely diverse natural experiences, but thin on culture and several marquee hikes are out of reach for young kids."
      },
      stress: {
        raw: 3,
        rationale: "Short direct flight and minimal jet lag, but heavy driving, 6am parking scrambles, mandatory shuttle reservations, and no cell service on long stretches."
      },
      showstoppers: {
        raw: 3.5,
        rationale: "Wildfire smoke at 20-30% probability combined with Jasper partial closures from the 2024 fire create non-trivial disruption risk."
      },
      weather: {
        raw: 4.5,
        rationale: "Highs of 68-75F in Banff and 61-68F at Lake Louise, well under the 82F ceiling with cool nights."
      },
      cost: {
        raw: 3,
        rationale: "Realistic midrange $10,200-$13,100 using the Canmore condo strategy, though late booking can push to $21,600."
      },
      ageFit: {
        raw: 2,
        rationale: "Worst age-fit of the alternatives with only about 40% of value accessible now; the marquee hikes require 10+ mile walkers."
      },
      accommodations: {
        raw: 3.5,
        rationale: "Canmore has solid modern condo inventory, but Banff mid-range is dated and Jasper inventory is significantly reduced post-2024 fire."
      },
      total: 36
    },
    pills: [
      {
        text: "68-75F range",
        type: "good"
      },
      {
        text: "5.5h direct JFK-YYC",
        type: "good"
      },
      {
        text: "$10K-$13K",
        type: "muted"
      },
      {
        text: "Smoke risk 20-30%",
        type: "warn"
      },
      {
        text: "Worst age-fit",
        type: "warn"
      }
    ],
    highlights: [
      {
        name: "Icefields Parkway",
        summary: "Routinely called one of the world's great road trips, 230km between Lake Louise and Jasper past glaciers and turquoise lakes.",
        detail: "Kids will be mesmerized by the scale. Stops like Peyto Lake and the Columbia Icefield are short walks from parking. No cell service for the full stretch."
      },
      {
        name: "Lake Louise + Moraine Lake",
        summary: "The two most photographed lakes in Canada with canoe rentals and flat stroller-friendly lakeshore walks.",
        detail: "Moraine Lake now requires shuttle reservations. Both fill early requiring 5-6am starts to avoid crowds, which is brutal with a toddler."
      },
      {
        name: "Banff Gondola",
        summary: "8-minute ride to 7,486ft with panoramic views of six mountain ranges; kids 5 and under ride free.",
        detail: "The boardwalk at the top is short and manageable. Good bad-weather backup with an interpretive center. Combine with Upper Hot Springs on the way down."
      },
      {
        name: "Johnston Canyon",
        summary: "A 1.5-mile catwalk bolted to canyon walls above rushing waterfalls with metal catwalks and railings.",
        detail: "Lower falls at 0.7 miles is doable with a 5-year-old. The infrastructure makes it feel accessible but it is packed by 10am; go at 7am or after 5pm."
      },
      {
        name: "Maligne Lake Boat Cruise",
        summary: "90-minute narrated cruise across glacier-fed water to iconic Spirit Island with mountain backdrop.",
        detail: "Survived the 2024 fire untouched. Both kids will handle the boat fine. Book in advance with limited daily departures."
      },
      {
        name: "Upper Hot Springs",
        summary: "Outdoor pool at 5,200ft elevation with 99-104F water and mountain views, with toddler-friendly shallow areas.",
        detail: "This becomes the reliable end-of-day reward that makes big hiking days possible. The family anchor activity."
      },
      {
        name: "Wildlife Encounters",
        summary: "Elk wander through Banff townsite daily and bighorn sheep line highway shoulders, a passive but thrilling highlight.",
        detail: "Genuinely exciting for a 5-year-old. Bear spray is mandatory on trails. Parks Canada sells it at visitor centers."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Canmore",
          nights: 7,
          activities: "Johnston Canyon, Lake Louise, Moraine Lake, Banff Gondola, Upper Hot Springs, Sunshine Meadows gondola"
        },
        {
          name: "Jasper",
          nights: 3,
          activities: "Icefields Parkway drive, Maligne Lake cruise, Jasper SkyTram, Pyramid Lake"
        },
        {
          name: "Canmore (return)",
          nights: 3,
          activities: "Lake Minnewanka cruise, Cave and Basin, Banff Legacy Trail cycling, anything missed"
        }
      ],
      note: "Three stops but same Canmore base bookending Jasper. Canmore is 20min from Banff and 40min from Lake Louise with better value condos and fewer crowds. Jasper's Cavell Road remains closed so Mt. Edith Cavell is inaccessible."
    },
    showstopperRisks: [
      {
        name: "Wildfire smoke",
        level: "MODERATE-HIGH",
        detail: "BC interior fires routinely drift east into the Alberta Rockies. Three consecutive bad wildfire years (2023-2025) plus drought make 2026 elevated-risk. A multi-day smoke event can reduce visibility to zero, trigger air quality advisories making outdoor activity inadvisable for a 2-year-old, and eliminate the primary reason for the trip. Probability is 20-30%."
      },
      {
        name: "Jasper partial closures",
        level: "MODERATE",
        detail: "The July 2024 wildfire destroyed about 30% of Jasper townsite. Maligne Lake and SkyTram are open, but Cavell Road is closed indefinitely removing Mt. Edith Cavell and Cavell Meadows. Accommodation inventory is reduced. Does not ruin the trip but meaningfully diminishes the Jasper leg."
      }
    ],
    routineHazards: [
      {
        name: "Wildlife encounters",
        detail: "Bears are present on all trails. Carry bear spray, make noise, know protocol. Elk in town can be aggressive during calving season."
      },
      {
        name: "Rapid temperature swings",
        detail: "Sunny 72F can become windy 41F within an hour at elevation. Hypothermia risk for a toddler if caught underdressed."
      },
      {
        name: "Cold glacial water",
        detail: "Lakes are 39-46F year-round. A fall in means minutes before hypothermia. Keep toddler harnessed near shorelines."
      },
      {
        name: "Crushing crowds",
        detail: "Free parks admission in summer 2026 amplifies already-peak July crowds. Lake Louise parking full by 6am. Johnston Canyon gridlocked by 10am."
      }
    ],
    accommodations: "Canmore is the strategy. Modern 2-bedroom condos in Silvertip, Spring Creek, or Copperstone at $250-400 CAD/night with full kitchens, in-suite laundry, and underground parking. Banff townsite has the Fairmont at $800+ or dated 1970s motels. Jasper accommodation is constrained post-fire with the Fairmont Jasper Park Lodge as the premium option and thin remaining inventory. Book Canmore by May for July.",
    logistics: "JFK-YYC direct on WestJet in 5.5 hours about 6x/week with only 2-hour time difference meaning essentially no jet lag. This is one of the best flight profiles on the list. Rental car mandatory with Calgary to Canmore at 1h15m and Banff to Jasper via Icefields Parkway at 4-8 hours depending on stops. No cell service on long stretches. English throughout.",
    costBreakdown: "Flights run $2,000-$3,200 for four. Lodging totals $3,500-$5,500 for Canmore condo 10 nights plus Jasper 3 nights. Rental car with gas is $1,200-$1,800. Food and activities add $2,300-$3,200. Parks admission is free via Canada Strong Pass. Midpoint estimate is about $11,000.",
    pros: [
      "Scenery is genuinely world-class and unlike anything accessible from NYC",
      "Best flight profile of any destination at 5.5h direct with 2h time change",
      "Weather perfectly fits the 82F ceiling with cool comfortable days",
      "Hot springs provide a reliable family anchor activity",
      "Parks admission free summer 2026",
      "Safe, English-speaking, excellent food and infrastructure"
    ],
    cons: [
      "Worst age-fit of all alternatives with 60% of value locked behind serious hiking ability",
      "85/15 nature-urban split versus the 50/50 preference with no meaningful culture component",
      "Wildfire smoke risk is real and unhedgeable at 20-30%",
      "Crushing July crowds undermine the wilderness experience",
      "Jasper leg diminished by 2024 fire closures",
      "Driving-heavy itinerary with early-morning starts required to beat crowds"
    ]
  },
  {
    slug: "portugal",
    name: "Portugal (Lisbon + Porto + Douro)",
    tagline: "Exceptional culture density with a direct 7-hour flight and strong value -- but Lisbon sits right at the 82F ceiling on an average day, with heat waves and wildfire smoke both posing elevated risks.",
    scores: {
      highlights: {
        raw: 4.5,
        rationale: "Exceptional variety across culture, history, scenery, and food, though cobblestones and heat limit some kid logistics."
      },
      stress: {
        raw: 3.5,
        rationale: "Direct 7h20m flight is great, but 5h jet lag, cobblestone grind with stroller, and 4 bases in 14 days add friction."
      },
      showstoppers: {
        raw: 2.5,
        rationale: "Heat wave probability over 10% for multi-day 100F+ events in Lisbon and Douro; wildfire smoke risk elevated per the government's own 2026 warning."
      },
      weather: {
        raw: 2,
        rationale: "Porto and Sintra fine at 77F, but Lisbon sits at 82F on average and Douro regularly hits 90-105F in July."
      },
      cost: {
        raw: 4,
        rationale: "Good value with a midpoint of about $9,000 for a European 14-night trip with direct flights."
      },
      ageFit: {
        raw: 3,
        rationale: "60% of value accessible now with Sintra's best hikes, Douro kayaking, and longer walking days unlocking at 8-12."
      },
      accommodations: {
        raw: 3.5,
        rationale: "Lisbon and Porto have strong modern inventory but Sintra is limited and Douro options skew rural and rustic."
      },
      total: 35.75
    },
    pills: [
      {
        text: "82F avg (at ceiling)",
        type: "warn"
      },
      {
        text: "7h20m nonstop JFK",
        type: "good"
      },
      {
        text: "~$9K good value",
        type: "good"
      },
      {
        text: "Heat wave 15-25%",
        type: "warn"
      },
      {
        text: "Wildfire smoke risk",
        type: "warn"
      }
    ],
    highlights: [
      {
        name: "Alfama + Sao Jorge Castle",
        summary: "Lisbon's medieval heart with tiled alleys, river-view miradouros, and castle ramparts with peacocks.",
        detail: "Naomi will love the castle. Hannah manageable in a carrier. Tram 28 runs through but ride it early to avoid the crush. Stroller impractical in Alfama; carrier essential."
      },
      {
        name: "Belem Cluster",
        summary: "Flat waterfront promenade with world-class Manueline architecture, contemporary art at MAAT, and pastel de nata.",
        detail: "Jeronimos Monastery, Torre de Belem, and Pasteis de Belem all on one stroller-friendly stretch. One of the best half-day culture walks in Europe."
      },
      {
        name: "Oceanario de Lisboa",
        summary: "Consistently rated among the world's top aquariums with a central tank of sunfish, rays, and sharks.",
        detail: "Mesmerizing for any age. Attached science museum has a toddler-friendly area. Air-conditioned refuge on hot days."
      },
      {
        name: "Quinta da Regaleira + Pena Palace",
        summary: "Initiatic wells, grottoes, and tunnels at Regaleira plus a fairy-tale palace exterior at Pena.",
        detail: "Both require uphill walking on uneven ground with carrier essential and stroller impossible. Heat can be intense on exposed paths. Genuinely magical for a 5-year-old."
      },
      {
        name: "Porto Ribeira + Livraria Lello",
        summary: "UNESCO riverfront with port wine cellars across the river and a gorgeous bookshop.",
        detail: "Hippotrip amphibious bus tour gives kids a thrill and adults a lazy city overview. Expect queues at Livraria Lello."
      },
      {
        name: "Douro Valley",
        summary: "Terraced vineyards with river views and wine tastings, best experienced via a half-day boat cruise.",
        detail: "The cruise is the kid-friendliest way to experience it. But July temperatures in the valley regularly hit 90-100F, which can be brutal with small children."
      },
      {
        name: "Cabo da Roca",
        summary: "Europe's westernmost point with dramatic cliffs and Atlantic wind, cooler than inland.",
        detail: "Short stop with high payoff for photos and the sense of place. Cooler temperatures from the Atlantic breeze provide relief from inland heat."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Porto",
          nights: 4,
          activities: "Ribeira, Livraria Lello, Clerigos Tower, Vila Nova de Gaia, Serralves park"
        },
        {
          name: "Douro Valley",
          nights: 2,
          activities: "Cruise, vineyard visits, Pinhao -- skip overnight if heat wave active"
        },
        {
          name: "Lisbon",
          nights: 6,
          activities: "Alfama, Belem, Oceanario, Parque das Nacoes, Sintra day trip"
        },
        {
          name: "Sintra or Lisbon buffer",
          nights: 2,
          activities: "Regaleira, Pena Palace, or Lisbon packing day"
        }
      ],
      note: "Porto to Lisbon by comfortable 3h train with no car needed. Rental car useful for Douro and Sintra coast but not essential. Schedule Sintra for the coolest forecast day."
    },
    showstopperRisks: [
      {
        name: "Multi-day heat wave",
        level: "HIGH",
        detail: "Lisbon's July average high of 82F is already at the family's ceiling. In 2023, 2024, and 2025, Portugal experienced multi-day heat waves pushing Lisbon above 104F and the Douro above 113F. A 14-day July stay has roughly a 40-50% chance of overlapping with at least one heat wave event. Probability of it being severe enough to confine the family for 2+ days is conservatively 15-25%."
      },
      {
        name: "Wildfire smoke",
        level: "MODERATE",
        detail: "The Portuguese government publicly warned that summer 2026 will be very tough for wildfire following 2025's record 618,000-acre burn season. Smoke events can blanket Lisbon and Porto for days. Probability of meaningful smoke disruption is 10-15%."
      }
    ],
    routineHazards: [
      {
        name: "Cobblestones",
        detail: "Lisbon's calcada portuguesa is beautiful but treacherous with a stroller. Carrier essential for Alfama and Sintra. Belem and Parque das Nacoes are the flat exceptions."
      },
      {
        name: "Pickpockets",
        detail: "Standard European tourist-city risk on Tram 28, Rossio, and Alfama viewpoints."
      },
      {
        name: "Sintra crowds",
        detail: "Queues can hit 60-90 minutes for Pena Palace without pre-booked timed entry in July."
      },
      {
        name: "Ocean currents",
        detail: "Atlantic beaches near Sintra have strong currents and cold water. Not a swim destination with kids."
      }
    ],
    accommodations: "Lisbon has strong renovated apartment inventory in Principe Real, Santos, and Estrela at $200-280/night. Avoid Alfama for lodging due to steep, noisy streets. Porto has excellent Airbnb stock in Cedofeita and Miragaia at similar prices. Douro options are limited to charming but variable quintas at $150-250/night. Sintra has tight July inventory -- treat as a day trip from Lisbon instead.",
    logistics: "JFK-LIS direct on TAP or Delta in 7h20m with good frequency. Train from Porto to Lisbon is a comfortable 3 hours requiring no car. Rental car useful for Douro and Sintra coast. English proficiency ranked 9th globally so no friction expected. Portuguese food is extremely kid-friendly with grilled fish, pastries, and bifanas everywhere.",
    costBreakdown: "Flights run $2,800-$3,600 for four. Lodging totals $2,800-$4,200 for 14 nights. Food is $1,200-$1,600. Transport and activities add $700-$1,200. Midpoint is about $9,000.",
    pros: [
      "Direct 7h flight from JFK, one of the shortest transatlantic options",
      "Exceptional culture, history, food, and scenery density in compact geography",
      "Very affordable by Western European standards",
      "English widely spoken with kid-friendly food culture",
      "Porto and Sintra provide genuine temperature relief from Lisbon heat",
      "Oceanario alone is worth a day for the kids"
    ],
    cons: [
      "Heat wave risk is real and elevated with Lisbon at the 82F ceiling on average",
      "Wildfire smoke risk explicitly flagged by Portuguese government for 2026",
      "Cobblestones make stroller use impractical in most historic areas",
      "60% of destination value accessible at current ages with better trip at 8-12",
      "Douro Valley may be too hot to enjoy with small children in July",
      "Sintra lodging inventory is thin for peak July"
    ]
  },
  {
    slug: "iceland",
    name: "Iceland",
    tagline: "Genuinely unique landscape with geysers, glaciers, and puffins on a short direct flight -- but an active volcanic threat, extreme costs, and age-locked marquee experiences pull the score down.",
    scores: {
      highlights: {
        raw: 4,
        rationale: "Stunning natural diversity with genuine kid appeal via public pools and short walks, but limited urban variety and several marquee experiences are age-locked."
      },
      stress: {
        raw: 2.5,
        rationale: "Short direct flight is great but everything else is hard: long drives, constant layering for 50-55F rain, and midnight sun wrecking toddler sleep."
      },
      showstoppers: {
        raw: 3,
        rationale: "Svartsengi magma chamber at record volume with eruption forecasted likely in coming weeks; estimated 15-25% probability of Reykjanes eruption causing flight cancellations or road closures."
      },
      weather: {
        raw: 3.5,
        rationale: "No heat risk at 55F highs, but persistent rain 17 days per month, wind, and relentless layering burden with midnight sun disrupting toddler sleep."
      },
      cost: {
        raw: 2,
        rationale: "Most expensive option on the list at $13-15K midpoint with $25 burgers, $120-200/day SUV rental, and eclipse-spillover demand."
      },
      ageFit: {
        raw: 2.5,
        rationale: "Public pools are a daily anchor but glacier hiking, ice caves, Silfra snorkeling, and zodiac whale watching are all locked until 8-12."
      },
      accommodations: {
        raw: 4,
        rationale: "Solid modern guesthouse and apartment inventory from Iceland's tourism boom, though availability is tight due to July peak and August eclipse demand."
      },
      total: 33
    },
    pills: [
      {
        text: "55F highs (no heat risk)",
        type: "good"
      },
      {
        text: "5h50m nonstop JFK",
        type: "good"
      },
      {
        text: "$13K-$15K most expensive",
        type: "warn"
      },
      {
        text: "Active volcanic risk",
        type: "warn"
      },
      {
        text: "60% age-locked",
        type: "warn"
      }
    ],
    highlights: [
      {
        name: "Golden Circle",
        summary: "Strokkur erupts every 5-8 minutes mesmerizing a 5-year-old; Thingvellir's rift valley and Gullfoss waterfall are world-class.",
        detail: "All sites are stroller or carrier accessible from parking. A full-day loop from Reykjavik that delivers Iceland's geological greatest hits in one outing."
      },
      {
        name: "South Coast Waterfalls + Black Sand",
        summary: "Seljalandsfoss lets you walk behind the falls; Reynisfjara's basalt columns and black sand are otherworldly.",
        detail: "Skogafoss is roadside requiring minimal hiking. Stroller workable at Skogafoss; carrier needed at Reynisfjara. Keep kids well back from Reynisfjara's dangerous sneaker waves."
      },
      {
        name: "Reykjavik Public Pools",
        summary: "Laugardalslaug has a waterslide, hot tubs, and wading pools for about $10 per adult -- the daily reset activity.",
        detail: "Warm water after a cold day of sightseeing. Icelandic pool culture is genuinely special and a reliable family anchor. Kids often free."
      },
      {
        name: "Hot Springs Circuit",
        summary: "Secret Lagoon, Krauma, and Hvammsvik sea baths offer natural settings less crowded than Blue Lagoon, some toddler-friendly.",
        detail: "Blue Lagoon has a minimum age of 2 so Hannah qualifies. The natural hot spring options are more family-oriented and atmospheric."
      },
      {
        name: "Snaefellsnes Peninsula",
        summary: "Mini-Iceland in a day: Kirkjufell mountain, Arnarstapi sea cliffs, Djupalonssandur pebble beach.",
        detail: "Quieter than the south coast with moderate driving at 2.5h from Reykjavik. A good day trip for diverse landscapes in a compact area."
      },
      {
        name: "Puffin + Whale Watching",
        summary: "July is peak puffin season with catamaran-style whale watching tours working for families.",
        detail: "Boat tours from Reykjavik or Husavik. The best RIB boat options have age minimums but catamaran tours are suitable for all ages."
      }
    ],
    itinerary: {
      bases: [
        {
          name: "Reykjavik",
          nights: 5,
          activities: "City exploration, Hallgrimskirkja, Harpa, Perlan, pools, Golden Circle day trip, whale watching"
        },
        {
          name: "South Coast / Vik area",
          nights: 4,
          activities: "Seljalandsfoss, Skogafoss, Reynisfjara, optional Jokulsarlon glacier lagoon"
        },
        {
          name: "Snaefellsnes or Reykjavik return",
          nights: 5,
          activities: "Peninsula loop or relaxed final stretch with pools and day trips"
        }
      ],
      note: "The 2-base version (Reykjavik 5 + South 4 + Reykjavik 5) is lower stress with a toddler, skipping the Snaefellsnes base change."
    },
    showstopperRisks: [
      {
        name: "Reykjanes volcanic eruption",
        level: "HIGH",
        detail: "The Svartsengi magma chamber is at its largest-ever recorded volume of 25 million cubic meters as of April 2026. The Icelandic Meteorological Office says a new eruption is the most likely scenario in coming weeks. Keflavik airport is on the Reykjanes peninsula. A major eruption could mean flight diversions stranding the family, road closures, or ash and gas forcing indoor confinement. Probability of trip disruption is 15-25%."
      }
    ],
    routineHazards: [
      {
        name: "Cold, rain, and midnight sun combo",
        detail: "55F highs with 17 rain days means constant layering and wet gear management. Midnight sun at 21h daylight requires serious blackout solutions for Hannah's sleep."
      },
      {
        name: "Reynisfjara sneaker waves",
        detail: "A 9-year-old was killed by a sneaker wave in August 2025. Maintain a very wide 50m+ berth from the waterline with the kids."
      },
      {
        name: "Driving hazards",
        detail: "Sheep on roads, single-lane bridges, sudden wind gusts, and gravel sections. Drive slowly and get full insurance."
      },
      {
        name: "Food limitations",
        detail: "Expensive at $25+ for a basic burger and limited variety outside Reykjavik. Grocery stores are the budget play."
      }
    ],
    accommodations: "Modern guesthouses and apartments are plentiful along the Ring Road and in Reykjavik with generally high quality from Iceland's tourism boom. Book immediately given July peak plus August 12 total solar eclipse creating spillover demand. Target a 2BR apartment in the 101/105 neighborhoods for Reykjavik. Vik has the best south coast family options. Verify blackout curtains at booking.",
    logistics: "JFK-KEF direct in 5h50m with daily service on Icelandair and Delta. Only 4-hour time difference is very manageable. Rental SUV essential at $120-200/day. English universally spoken. Food is expensive and limited outside Reykjavik with grocery self-catering being the move. Reykjavik has Landspitali national hospital with pediatric services.",
    costBreakdown: "Flights run $3,200-$4,800 for four. Car rental with insurance is $1,700-$2,800 for 14 days. Lodging totals $4,200-$6,300. Food with heavy self-catering is $1,800-$2,500. Activities add $600-$1,000. Midpoint is about $14,000.",
    pros: [
      "Genuinely unique landscape unlike anything else on the list",
      "Short direct flight with minimal jet lag",
      "No heat risk -- the one destination where you will never hit the 82F ceiling",
      "Public pool culture is a perfect daily anchor for kids",
      "Safe, clean, English-speaking with excellent infrastructure",
      "July is peak puffin season"
    ],
    cons: [
      "Active volcanic risk is real and elevated for these specific dates",
      "Most expensive destination on the list by a wide margin",
      "60% of the destination's value is age-locked to 8-12+",
      "Cold, wet, windy weather is a daily grind with a toddler",
      "Midnight sun creates serious toddler sleep challenges",
      "Thin urban and cultural variety with a nature-heavy 75/25 split"
    ]
  }
];
