/* ==========================================================================
   ITINERARIES — Phase 2 finalist deep dives
   ==========================================================================
   One entry per finalist with detailed flights, transport, itinerary,
   lodging, logistics, and updated scoring. See schema doc in project
   overview.md and the original template below.

   SCHEMA
   ------
   {
     slug, name, phase1Rank, status ('pending'|'researched'), dataCapturedAt, summary,
     flights: { summary, origin, options: [{label, airline, outbound, return, priceUSD, painLevel, painReasons, bookingWindow, notes}] },
     groundTransport: { primary, options: [{type, commentary, kidFactor}], americanDriverFriendly, driverNotes, verdict },
     itinerary: { summary, pacing, bases: [{name, nights, arrival, departure, whyThisLong, transitFromPrevious?, sampleDays: [{label, activity, pace}]}], alternativeStructure? },
     lodging: [{base, nights, options: [{name, type, tier, priceUSDperNight, bedroomConfig, kidFriendly, notes, url?}]}],
     logistics: [{category, note}],
     updatedScore: {total, previousTotal, delta, changes: [{category, from, to, reason}], recommendation, summary},
     risks: [{name, detail, severity}],
     specialFindings: string[]
   }
   ========================================================================== */

const ITINERARIES = [

/* ========================= DENMARK (phase1 rank 1) ========================= */
{
  slug: 'denmark',
  name: 'Denmark',
  phase1Rank: 1,
  status: 'researched',
  dataCapturedAt: '2026-04-16',
  summary: 'Copenhagen anchors a 2-base Denmark trip (CPH + Bornholm) that trades Odense/Aarhus for genuine Baltic island relaxation. Weather is ideal (July highs ~70F, well under the 82F ceiling), direct 7h45m nonstops from JFK are plentiful, and kids ride trains free. Cost is the main trade-off — Scandinavia runs ~$12k-14k for the family.',
  flights: {
    summary: 'JFK-CPH nonstop on SAS/Delta, 7h45m-7h55m eastbound; multiple daily departures in July peak.',
    origin: 'JFK/EWR/LGA',
    options: [
      { label: 'Cheapest nonstop (best balance)', airline: 'Delta (codeshare Air France/KLM/Virgin Atlantic)',
        outbound: { route: 'JFK-CPH', departDate: '2026-07-04', departTime: '4:50 PM', arriveTime: '6:45 AM+1', duration: '7h 55m', layovers: [], notes: 'Nonstop; arrives CPH early morning Jul 5' },
        return:   { route: 'CPH-JFK', departDate: '2026-07-18', departTime: 'varies (afternoon)', arriveTime: 'same-day evening', duration: '~8h 30m', layovers: [], notes: 'Return flights on DL nonstop mid-afternoon' },
        priceUSD: 3532, painLevel: 'low', painReasons: ['Evening arrival means kids miss a night of sleep en route', 'Premium economy recommended for ~2x'],
        bookingWindow: 'Book by mid-May 2026; Google Flights flagged "prices currently high"',
        notes: 'Source: Google Flights browser pull 2026-04-16. $883/adult x4 = $3,532 family total. Best overall option.' },
      { label: 'Nonstop premium (SAS direct)', airline: 'Scandinavian Airlines (SAS)',
        outbound: { route: 'JFK-CPH', departDate: '2026-07-04', departTime: '6:55 PM', arriveTime: '8:40 AM+1', duration: '7h 45m', layovers: [], notes: 'Nonstop; later departure eases airport rush with kids' },
        return:   { route: 'CPH-JFK', departDate: '2026-07-18', departTime: 'midday', arriveTime: 'afternoon', duration: '~9h', layovers: [], notes: 'SAS daily nonstop' },
        priceUSD: 4092, painLevel: 'low', painReasons: ['Slightly pricier than Delta', 'Same red-eye dynamic for kids'],
        bookingWindow: 'Book by mid-May 2026',
        notes: 'Source: Google Flights browser pull 2026-04-16. $1,023/adult x4. SAS is Scandinavian flag carrier with good family service.' },
      { label: 'Cheaper 1-stop (pain option)', airline: 'Air France / Delta via CDG',
        outbound: { route: 'JFK-CDG-CPH', departDate: '2026-07-04', departTime: '6:30 PM', arriveTime: '11:25 AM+1', duration: '10h 55m', layovers: ['Paris CDG|80'], notes: '1h 20m connection in CDG' },
        return:   { route: 'CPH-CDG-JFK', departDate: '2026-07-18', departTime: 'varies', arriveTime: 'same-day', duration: '~11h 30m', layovers: ['Paris CDG|130'], notes: 'Multiple daily' },
        priceUSD: 3608, painLevel: 'medium', painReasons: ['1 stop in Paris adds 3+ hours and connection stress with 2yo/5yo', 'CDG is notoriously tough for family transits'],
        bookingWindow: 'Book by mid-May 2026',
        notes: 'Source: Google Flights browser pull 2026-04-16. $902/adult x4 = $3,608. Only $76 cheaper than nonstop Delta — NOT worth the pain. Skip.' }
    ]
  },
  groundTransport: {
    primary: 'Train + Kombardo Expressen bus-to-ferry for Bornholm; walk/metro/bike in Copenhagen',
    options: [
      { type: 'train', commentary: 'DSB Intercity: CPH-Odense/Aarhus ~1.5h/3h; premium comfort, free under-12 seats with adult', kidFactor: 'Excellent — tables, snack cart, toilets, no seatbelts mean kids can move' },
      { type: 'bus',   commentary: 'Kombardo Expressen from CPH Central Station or Airport to Rønne via Ystad ferry — single ticket, ~3h total, bus drives onto catamaran', kidFactor: 'Good — 80-min ferry leg lets kids roam; bus segments are ~1h each' },
      { type: 'ferry', commentary: 'Bornholmslinjen Ystad-Rønne catamaran, 80 min. Up to 10 daily in peak summer', kidFactor: 'Fun novelty; indoor seating, cafe, viewing decks' },
      { type: 'walk',  commentary: 'Copenhagen, Rønne, Svaneke are all flat/walkable', kidFactor: 'Perfect for stroller; smooth pavement' },
      { type: 'taxi',  commentary: 'Plentiful in CPH; on Bornholm limited — book via app or hotel', kidFactor: 'Fine; bring own car seats for under-3 if required' }
    ],
    americanDriverFriendly: 'mostly',
    driverNotes: 'Right-hand drive, roundabouts common, excellent roads. US license valid up to 90 days. Only needed if you add a Møns Klint day trip OR explore Bornholm deeply (consider 2-3 day rental in Rønne).',
    verdict: 'No car needed for the core 2-base plan. Optional: rent a car on Bornholm ($60-80/day) for 2 days to explore Hammershus ruins, Dueodde beach, north coast. For Møns Klint day trip from CPH, use Viator guided bus tour (~$100/adult, $55/kid, 8.5h door-to-door) rather than self-drive or public transit maze.'
  },
  itinerary: {
    summary: '2 bases: Copenhagen (8n) + Bornholm (6n). Møns Klint as a CPH day tour, not overnight.',
    pacing: 'Deliberately relaxed. 8 full CPH days absorb jet lag and cover highlights without cramming. Bornholm is pure decompression — beach/playground/one attraction per day. Only one transition in 14 nights.',
    bases: [
      { name: 'Copenhagen', nights: 8, arrival: 'Jul 5', departure: 'Jul 13',
        whyThisLong: '6h jet lag + two young kids means days 1-2 are wash-outs; 8 nights gives time to recover AND hit Tivoli, Nyhavn, canal boat, Rosenborg, Experimentarium, cargo-bike tour, Torvehallerne, plus the Møns Klint day trip without packing them in.',
        sampleDays: [
          { label: 'Day 1 (Jul 5, Sun)', activity: 'Arrive 6:45 AM; taxi/metro to apartment; nap; easy walk to Kings Garden + Torvehallerne lunch; bed at 7pm', pace: 'light' },
          { label: 'Day 2 (Jul 6, Mon)', activity: 'Nyhavn stroll + canal boat tour (1h); afternoon downtime; pastry hunt', pace: 'light' },
          { label: 'Day 3 (Jul 7, Tue)', activity: 'Tivoli Gardens all day, stay for Tuesday fireworks (if scheduled) or early night', pace: 'full' },
          { label: 'Day 4 (Jul 8, Wed)', activity: 'Copenhagen Cargo-Bike Family Tour (morning, 3h); lounge afternoon at Islands Brygge harbor bath', pace: 'medium' },
          { label: 'Day 5 (Jul 9, Thu)', activity: 'Møns Klint day trip via Viator guided bus — top boardwalk only (skip 497 steps with Hannah), GeoCenter kids exhibits', pace: 'full' },
          { label: 'Day 6 (Jul 10, Fri)', activity: 'Rosenborg Castle + crown jewels (1.5h); picnic in Kings Garden; Rundetaarn climb if energy', pace: 'medium' },
          { label: 'Day 7 (Jul 11, Sat)', activity: 'Experimentarium science museum (Miniverse for ages 1-5) OR Copenhagen Zoo', pace: 'medium' },
          { label: 'Day 8 (Jul 12, Sun)', activity: 'Frederiksberg Garden + elephant house; LEGO Store Strøget; packing', pace: 'light' }
        ] },
      { name: 'Bornholm (Rønne/Svaneke base)', nights: 6, arrival: 'Jul 13', departure: 'Jul 19',
        transitFromPrevious: 'Kombardo Expressen bus+ferry from CPH Central, ~3h total, kids under 12 free on ferry leg',
        whyThisLong: 'Pure decompression. 4-night minimum to justify the transit; 6 nights gives real beach time + 2-3 attractions at a humane pace and the kid-friendly Baltic rhythm (one thing per day + beach + naps). Island is compact but windy — buffer days matter.',
        sampleDays: [
          { label: 'Day 9 (Jul 13, Mon)', activity: 'Depart CPH 9am Kombardo; arrive Rønne ~noon; check in; Dueodde beach afternoon', pace: 'medium' },
          { label: 'Day 10 (Jul 14, Tue)', activity: 'Brændesgårdshaven family park (zoo + water park + playground) all day', pace: 'full' },
          { label: 'Day 11 (Jul 15, Wed)', activity: 'Svaneke village + smokehouse lunch; Balka Beach afternoon', pace: 'light' },
          { label: 'Day 12 (Jul 16, Thu)', activity: 'Hammershus ruins + Allinge coast drive (rent car for day); Hotel Friheden pool afternoon', pace: 'medium' },
          { label: 'Day 13 (Jul 17, Fri)', activity: 'NaturBornholm (hands-on geology/nature, great rain backup) + Åkirkeby playground', pace: 'medium' },
          { label: 'Day 14 (Jul 18, Sat)', activity: 'Medieval Centre role-play + final beach morning; pack', pace: 'light' }
        ] }
    ],
    alternativeStructure: 'Alt A (simplest): CPH 14n — drop Bornholm, use CPH as a single base with day trips. Alt B: CPH 8n + Aarhus 6n via 3h DSB train, skipping Odense and Bornholm. Alt C (maximal): CPH 7n + Bornholm 4n + Aarhus 3n — 3 bases, not recommended with a just-turned-2yo.'
  },
  lodging: [
    { base: 'Copenhagen', nights: 8, options: [
      { name: 'MEININGER Hotel Copenhagen', type: 'hotel', tier: 'budget', priceUSDperNight: 165, bedroomConfig: 'Family room, 4 beds, private bath',
        kidFriendly: 'Purpose-built for families; central near Central Station', notes: 'Source: Google Travel 2026-04-16. Basic but clean and modern.', url: 'https://www.meininger-hotels.com/en/hotels/copenhagen/' },
      { name: 'Tivoli Hotel (by Scandic)', type: 'hotel', tier: 'mid', priceUSDperNight: 265, bedroomConfig: 'Family room for 4, indoor pool',
        kidFriendly: 'Indoor pool, dedicated kids floors, 10-min walk to Tivoli', notes: 'Source: Google Travel 2026-04-16.', url: 'https://www.tivolihotel.com/' },
      { name: 'Adina Apartment Hotel Copenhagen', type: 'aparthotel', tier: 'mid', priceUSDperNight: 330, bedroomConfig: '1BR apartment w/ kitchen, sleeps 4',
        kidFriendly: 'Kitchen = self-catering; indoor pool; laundry', notes: 'Source: Google Travel 2026-04-16. Best balance of space + amenities.', url: 'https://www.adinahotels.com/en/apartments/copenhagen/' },
      { name: 'Villa Copenhagen', type: 'hotel', tier: 'premium', priceUSDperNight: 450, bedroomConfig: 'Family room or connecting rooms',
        kidFriendly: 'Rooftop pool, design-forward', notes: 'Source: Google Travel 2026-04-16.', url: 'https://villacopenhagen.com/' },
      { name: '2BR Airbnb in Vesterbro/Frederiksberg', type: 'airbnb', tier: 'mid', priceUSDperNight: 310, bedroomConfig: '2BR, sleeps 4-5, full kitchen',
        kidFriendly: 'Separate bedroom; kitchen for breakfast; local neighborhood feel', notes: '$250-350/night typical. Filter: Superhost, 4.8+.', url: 'https://www.airbnb.com/s/Vesterbro--Copenhagen' }
    ] },
    { base: 'Bornholm', nights: 6, options: [
      { name: 'Hotel Friheden (Allinge, north coast)', type: 'hotel', tier: 'mid', priceUSDperNight: 210, bedroomConfig: 'Family room, 2 connecting or 4-bed',
        kidFriendly: 'Dedicated kids area, playground, indoor pool', notes: 'Flagged as "ideal for families". North coast = close to Hammershus.', url: 'https://www.hotelfriheden.dk/' },
      { name: 'Hotel Balka Strand (south coast)', type: 'hotel', tier: 'mid', priceUSDperNight: 195, bedroomConfig: 'Family rooms',
        kidFriendly: 'Indoor + outdoor play area, steps from child-friendly Balka Beach', notes: 'Best beach-base option. Balka has smooth sand, shallow water for 2yo.', url: 'https://www.hotelbalkastrand.dk/' },
      { name: 'Hotel Siemsens Gaard (Svaneke)', type: 'hotel', tier: 'premium', priceUSDperNight: 285, bedroomConfig: 'Harbor-view rooms, family configs',
        kidFriendly: 'Historic merchant yard, good restaurant, walkable Svaneke village', notes: 'Most charming Bornholm option; cobbles may challenge stroller.', url: 'https://www.siemsens.dk/en/' },
      { name: 'Bornholm holiday cottage (Airbnb/BookBornholm)', type: 'airbnb', tier: 'mid', priceUSDperNight: 175, bedroomConfig: '2BR cottage w/ garden, sleeps 4-6',
        kidFriendly: 'Garden for kids, kitchen; 17,000+ cottages on island', notes: 'Best per-night value; requires car.', url: 'https://bookbornholm.com/en/book-accommodation' }
    ] }
  ],
  logistics: [
    { category: 'Currency & cards',       note: 'Denmark uses DKK (~6.9/USD). Contactless cards work everywhere; tipping not expected.' },
    { category: 'Language',               note: 'English fluency is near-universal.' },
    { category: 'Copenhagen Card',        note: 'Worth it for 72-120h: covers transit + 80 attractions incl. Tivoli, Rosenborg, Experimentarium, canal boat. Kids under 12 free. ~$135/adult for 5-day.' },
    { category: 'Train booking',          note: 'DSB Orange tickets from 119 DKK (~$17) if booked 2+ weeks ahead. Kids 0-11 free with adult.' },
    { category: 'Bornholm ferry booking', note: 'Kombardo Expressen family ~$100-150 RT in peak. Book 3+ weeks ahead for July.' },
    { category: 'Bornholm car rental',    note: 'Optional 2-3 day rental from Rønne Airport ($60-80/day). Compact island; bus network thin on Sundays.' },
    { category: 'Møns Klint day trip',    note: 'Viator guided bus from CPH (~$100 adult/$55 child, 8.5h). Skip 497 beach steps; upper boardwalk is stroller-accessible.' },
    { category: 'Jet lag',                note: '6h diff. Days 1-2 as rest days. Long northern twilight (sunset 10pm) complicates kid bedtimes — bring blackout curtains.' },
    { category: 'Weather packing',        note: 'Layers; rain jacket; one fleece; sturdy stroller for cobbles. July avg high 70F.' },
    { category: 'Medical',                note: 'Travel insurance recommended. Rigshospitalet CPH; Bornholms Hospital.' }
  ],
  updatedScore: {
    total: 46.75, previousTotal: 46.25, delta: 0.5,
    changes: [
      { category: 'Stress',     from: 4.0, to: 4.5, reason: '2-base structure (CPH+Bornholm) has ONE transition instead of two. Free under-12 transit and single-ticket bus-ferry removes planning friction.' },
      { category: 'Highlights', from: 4.5, to: 4.5, reason: 'Unchanged — losing Aarhus is offset by adding genuine island experience (Bornholm) + Møns Klint.' },
      { category: 'Cost',       from: 2.5, to: 2.5, reason: 'Confirmed ~$12-14k range. Live flights came in at $3,500-4,100 for family of 4 nonstop.' }
    ],
    recommendation: 'strong',
    summary: 'Strongest finalist: perfect weather fit, real flight prices confirm affordability, 2-base structure fixes the only stress concern from Phase 1.'
  },
  risks: [
    { name: 'Bornholm wind',              detail: 'Island is exposed Baltic; even calm July days can deliver gusty beach conditions.', severity: 'low' },
    { name: 'Kombardo fully booked',      detail: 'July is peak on Bornholm ferry. Must book 3+ weeks ahead.', severity: 'medium' },
    { name: 'Møns Klint rockfall closure', detail: 'Cliff paths occasionally close after rain. Check moensklint.dk; GeoCenter is rain backup.', severity: 'low' },
    { name: 'Summer 2026 flight inflation', detail: 'Google Flights flagged "prices currently high". If mid-May slips, expect $200-400/person creep.', severity: 'medium' }
  ],
  specialFindings: [
    'Bornholm is feasible AND preferable to a 3rd inland base. Single 3h bus+ferry transit easier than second train + second hotel change.',
    'Minimum Bornholm stay is 4 nights to justify transit; 6 nights recommended for weather buffer.',
    'Møns Klint is a day trip from Copenhagen, NOT an overnight. Viator guided bus beats DIY public transit (4h each way).',
    'Phase 1 recommended CPH+Odense+Aarhus. Deep research flips this: Bornholm replaces Odense+Aarhus for better relaxation/transition ratio.',
    'DAT flies CPH-Rønne in 40 min from ~DKK 459 (~$65) if Kombardo is sold out.',
    'Live JFK-CPH nonstop prices (Google Flights, 2026-04-16): Delta $883/adult; SAS $1,023/adult.',
    'CPH hotels July 2026: MEININGER $71 base, Tivoli Hotel $177, Adina $230, Villa Copenhagen $365. Apartment/aparthotel is sweet spot.',
    'Denmark is the only finalist where the full 14-night trip fits in 2 bases without meaningful compromise.'
  ]
},

/* ========================= NETHERLANDS (phase1 rank 2) ========================= */
{
  slug: 'netherlands',
  name: 'Netherlands',
  phase1Rank: 2,
  status: 'researched',
  dataCapturedAt: '2026-04-16',
  summary: 'A 2-base Amsterdam + Texel trip that answers the "Amsterdam is too urban" concern directly: Texel (the largest Wadden Island) delivers 30 km of North Sea beaches, 140 km of car-free cycling paths, dunes, seals, and sheep farms — reachable as one train + 20-min ferry from Amsterdam with zero car rental needed. Hoge Veluwe stays as a day trip from Amsterdam. Amsterdam ~71F, Texel ~66F — both comfortably under 82F with sea-breeze insurance on Texel.',
  flights: {
    summary: 'JFK-AMS nonstop on KLM/Delta, 7h20m outbound, 7h40m return. All three major airlines operate daily nonstops.',
    origin: 'JFK/EWR/LGA',
    options: [
      { label: 'Best overall — KLM nonstop evening', airline: 'KLM (operated by Delta)',
        outbound: { route: 'JFK-AMS', departDate: '2026-07-04', departTime: '9:15 PM', arriveTime: '10:35 AM+1', duration: '7h 20m', layovers: [], notes: 'Evening departure, kids can sleep, arrive mid-morning' },
        return:   { route: 'AMS-JFK', departDate: '2026-07-18', departTime: '12:10 PM', arriveTime: '2:50 PM', duration: '7h 40m', layovers: [], notes: 'Midday departure — avoids red-eye return' },
        priceUSD: 7332, painLevel: 'low', painReasons: ['evening departure requires late-night kid management'],
        bookingWindow: 'Book by late May; confirmed $1,833 pp on Google Flights 2026-04-16',
        notes: 'Hannah turns 2 on Jul 1 — needs full fare. $1,833 x 4 = $7,332. Recommended.' },
      { label: 'Delta/Virgin nonstop alternative', airline: 'Delta / KLM / Virgin Atlantic codeshare',
        outbound: { route: 'JFK-AMS', departDate: '2026-07-04', departTime: '6:15 PM', arriveTime: '8:00 AM+1', duration: '7h 45m', layovers: [], notes: 'Earlier evening departure' },
        return:   { route: 'AMS-JFK', departDate: '2026-07-18', departTime: '10:29 PM', arriveTime: '12:10 AM+1', duration: '7h 41m', layovers: [], notes: 'Near-red-eye return — avoid' },
        priceUSD: 7632, painLevel: 'medium', painReasons: ['late return departure problematic for kids'],
        bookingWindow: 'Same window as primary',
        notes: 'Fallback only if KLM sells out. $1,908 x 4.' },
      { label: 'Cheaper 1-stop (pain option)', airline: 'JetBlue via BOS',
        outbound: { route: 'JFK-BOS-AMS', departDate: '2026-07-04', departTime: '5:15 PM', arriveTime: '9:20 AM+1', duration: '10h 5m', layovers: ['BOS|88'], notes: '1h 28m layover in Boston' },
        return:   { route: 'AMS-JFK via 1 stop', departDate: '2026-07-18', departTime: 'varies', arriveTime: 'same day', duration: '~10h', layovers: ['1 stop'], notes: 'Return routing varies' },
        priceUSD: 3984, painLevel: 'high', painReasons: ['1 layover with two young kids', '+3h total travel', 'gate-change risk'],
        bookingWindow: 'Available now',
        notes: 'Saves ~$3,350 vs nonstop. Strongly recommend paying premium for nonstop.' }
    ]
  },
  groundTransport: {
    primary: 'NS intercity train Amsterdam to Den Helder (1h 18m direct) + Connexxion bus 33 + TESO ferry (20 min) to Texel. On Texel: rental bikes + local bus 28. Car rental only for optional Hoge Veluwe day.',
    options: [
      { type: 'train', commentary: 'NS direct Amsterdam Centraal to Den Helder, ~40 trains/day. Kids 0-3 free, 4-11 Railrunner EUR 2.50.', kidFactor: 'High — designated stroller spaces, elevators at major stations' },
      { type: 'ferry', commentary: 'TESO ferry Den Helder to Texel, every hour (every 30 min peak), 20-min crossing. Return EUR 3.00/adult, kids free. Walk-on, no reservation.', kidFactor: 'High — indoor seating, outdoor deck, short crossing' },
      { type: 'bus', commentary: 'Connexxion bus 33 (Den Helder station to ferry, EUR 3 pp); on Texel, bus 28 connects all villages', kidFactor: 'Medium — requires transfer with luggage' },
      { type: 'taxi', commentary: 'Amsterdam taxis accept car seats by request. Uber in Amsterdam but not reliably on Texel.', kidFactor: 'Medium — arrange car seat in advance' },
      { type: 'walk', commentary: 'Amsterdam is world-class walkable (flat, smooth, dropped curbs). Texel villages strollable.', kidFactor: 'High' },
      { type: 'car', commentary: 'Rent only for optional Hoge Veluwe day (~1h drive). Skip if using Ede-Wageningen train + bus.', kidFactor: 'Medium — European child-seat rental standard' }
    ],
    americanDriverFriendly: 'mostly',
    driverNotes: 'Right-side driving like US. Aggressive cyclist culture in cities. No car needed for 90% of this itinerary.',
    verdict: 'Train + ferry is the right spine. Optional 1-day car rental for Hoge Veluwe only.'
  },
  itinerary: {
    summary: '2 bases: Amsterdam (8n, Jul 4-12) + Texel (6n, Jul 12-18). Hoge Veluwe as a day trip from Amsterdam.',
    pacing: 'Comfortable. Amsterdam alternates museum half-days with parks and canals; Texel is low-density. Only one mid-trip transfer; transfer day is light.',
    bases: [
      { name: 'Amsterdam', nights: 8, arrival: 'Jul 5', departure: 'Jul 12',
        whyThisLong: 'Covers Rijksmuseum, Van Gogh, NEMO, Artis, canal cruise, Vondelpark, plus Hoge Veluwe day trip. Eight nights settles into a neighborhood rhythm without museum fatigue.',
        sampleDays: [
          { label: 'Day 1 (Jul 5, arrive)', activity: 'Land AMS ~10:35 AM, taxi to apartment, nap, early dinner near Vondelpark', pace: 'light' },
          { label: 'Day 2 (Jul 6)', activity: 'Morning canal cruise (Blue Boat kids pirate audio), Jordaan walk, Nine Streets', pace: 'medium' },
          { label: 'Day 3 (Jul 7)', activity: 'NEMO Science Museum (toddler ground floor + rooftop splash), waterfront lunch, afternoon nap, Artis Zoo', pace: 'full' },
          { label: 'Day 4 (Jul 8)', activity: 'Rijksmuseum split-shift (90 min each parent), Museumplein playground, Albert Cuyp Market', pace: 'medium' },
          { label: 'Day 5 (Jul 9)', activity: 'Hoge Veluwe day trip — train to Ede-Wageningen, bus to park, free white bikes with child seats, Kröller-Müller sculpture garden picnic', pace: 'full' },
          { label: 'Day 6 (Jul 10)', activity: 'Van Gogh Museum (morning), Vondelpark playgrounds + stroopwafels afternoon', pace: 'medium' },
          { label: 'Day 7 (Jul 11)', activity: 'Rent small electric canal boat (self-navigate, 2-3h), Nine Streets lunch, flex afternoon', pace: 'medium' },
          { label: 'Day 8 (Jul 12, transfer)', activity: 'Easy morning, train 1:18 to Den Helder + bus + ferry to Texel', pace: 'light' }
        ] },
      { name: 'Texel', nights: 6, arrival: 'Jul 12', departure: 'Jul 18',
        transitFromPrevious: 'Amsterdam Centraal → Den Helder (1h 18m NS, ~EUR 32 adults, Railrunner EUR 2.50 Naomi / free Hannah) → bus 33 (10 min, EUR 3 pp) → TESO ferry (20 min, EUR 3 pp return, kids free). Door-to-door ~3h. No car.',
        whyThisLong: 'Texel rewards slow pace — beach mornings, nap breaks, afternoon bike rides, Ecomare. Six nights lets kids cycle the daily rhythm without feeling rushed; insures against 1-2 rain days.',
        sampleDays: [
          { label: 'Day 9 (Jul 13)', activity: 'Beach morning at Paal 17 (broad flat sand, lifeguarded), lunch in De Koog, beach nap, evening stroll', pace: 'light' },
          { label: 'Day 10 (Jul 14)', activity: 'Ecomare seal sanctuary (morning feeding), Sommeltjespad kid nature trail in De Dennen forest', pace: 'medium' },
          { label: 'Day 11 (Jul 15)', activity: 'Rent family bikes with child seats + trailer, ride dune path De Koog → De Cocksdorp lighthouse, picnic', pace: 'full' },
          { label: 'Day 12 (Jul 16)', activity: 'Sheep farm visit + Ice cream farm Labora, Wadden water playground at Oudeschild (32m pirate ship climber)', pace: 'medium' },
          { label: 'Day 13 (Jul 17)', activity: 'Flex beach/rain day — mudflat walk if tide permits, or Maritime & Beachcombers Museum', pace: 'light' },
          { label: 'Day 14 (Jul 18, depart)', activity: 'Early morning ferry + train to Schiphol, KLM flight 12:10 PM AMS-JFK, home late afternoon ET', pace: 'full' }
        ] }
    ],
    alternativeStructure: 'If Texel feels too rural: Amsterdam (8n) + Utrecht (3n) + Texel (3n). Or drop Texel: Amsterdam (9n) + Utrecht (5n) with Hoge Veluwe + Giethoorn day trips.'
  },
  lodging: [
    { base: 'Amsterdam', nights: 8, options: [
      { name: 'The July — Boat & Co (Amsterdam West)', type: 'aparthotel', tier: 'mid', priceUSDperNight: 340, bedroomConfig: '2BR apartment, sleeps 4, full kitchen, 38-60 sqm',
        kidFriendly: 'Purpose-built long-stay; waterfront; elevator; washing machine', notes: 'Modern 2023 build on Houthavens, 15 min tram to center. No steep Dutch staircases.', url: 'https://www.thejuly.com/properties/amsterdam-west/two-bedroom-apartment' },
      { name: 'The July — Twenty Eight (Amsterdam South)', type: 'aparthotel', tier: 'premium', priceUSDperNight: 420, bedroomConfig: 'Family Apartment 2BR, sleeps 2+2 kids, 60-105 sqm',
        kidFriendly: 'Larger floor plan; quiet residential Zuid; elevator; close to Rijksmuseum/Vondelpark', notes: 'Rose-friendly fit-and-finish.', url: 'https://www.thejuly.com/properties/amsterdam-south/family-apartment' },
      { name: 'Zoku Amsterdam — Loft XL', type: 'aparthotel', tier: 'mid', priceUSDperNight: 290, bedroomConfig: 'Loft XL (1BR + living w/ sofa bed), sleeps 4, open kitchen',
        kidFriendly: 'Design-forward; rooftop lounge; central; elevator', notes: 'Smaller than The July 2BR but lovely finishes.', url: 'https://livezoku.com/amsterdam/stay/' },
      { name: 'Airbnb 2BR in Jordaan or De Pijp', type: 'airbnb', tier: 'budget', priceUSDperNight: 240, bedroomConfig: '2BR flat, sleeps 4',
        kidFriendly: 'Neighborhood immersion; kitchen. Filter for elevator.', notes: 'WARNING: Dutch canal houses have very steep stairs — explicitly filter "elevator".', url: 'https://www.airbnb.com/de-pijp-amsterdam-netherlands/stays/apartments' }
    ] },
    { base: 'Texel', nights: 6, options: [
      { name: 'Grand Hotel Opduin (De Koog)', type: 'hotel', tier: 'premium', priceUSDperNight: 310, bedroomConfig: 'Family apartment with separate bedrooms',
        kidFriendly: 'Indoor pool, wellness, direct dune access, 5 min walk to village', notes: 'Flagship Texel hotel. Book by early May.', url: 'https://www.opduin.nl/en/' },
      { name: 'Van der Valk Hotel Texel (De Koog)', type: 'aparthotel', tier: 'mid', priceUSDperNight: 220, bedroomConfig: '4-person apartment, 2 separate bedrooms + living + kitchen',
        kidFriendly: 'Family chain; pool; near dunes; bike rental on-site', notes: 'Reliable mid-tier Dutch chain, 2020s renovation.', url: 'https://www.valktexel.nl/en/rooms-suites/4-person-standard-apartment' },
      { name: 'Landal Beach Park Texel (De Koog)', type: 'resort', tier: 'mid', priceUSDperNight: 260, bedroomConfig: '2-3BR family bungalow, kitchen, private terrace',
        kidFriendly: 'Private outdoor space, playgrounds, kids club; car-free paths', notes: 'Dutch families default Texel choice.', url: 'https://www.landal.com/en/parks/beach-park-texel' },
      { name: 'De Krim Texel Holiday Park (De Cocksdorp)', type: 'resort', tier: 'budget', priceUSDperNight: 180, bedroomConfig: '4-person 2BR bungalow or chalet, kitchen',
        kidFriendly: 'Indoor + outdoor pools, kids club, pony rides, minigolf; quieter north end', notes: 'Value option; requires bike/bus to other villages.', url: 'https://www.krim-texel.com/' }
    ] }
  ],
  logistics: [
    { category: 'Jet lag', note: '6h ahead of ET. Evening nonstop = ~5h sleep on plane for kids.' },
    { category: 'Language', note: 'English fluency universal.' },
    { category: 'Weather', note: 'Amsterdam July avg 71F/57F, ~14 rain days. Texel cooler 66-68F, sea breezes. Well under 82F.' },
    { category: 'Payments', note: 'Contactless everywhere; many shops card-only. OVpay (tap credit card) at transit gates.' },
    { category: 'NS trains for kids', note: 'Kids 0-3 free; 4-11 Railrunner EUR 2.50 one-way.' },
    { category: 'TESO ferry', note: 'No reservation. EUR 3.00/adult return, kids free. Board with stroller.' },
    { category: 'Bikes on Texel', note: 'Child seats, trailers, cargo bikes widely available. EUR 10-15/day.' },
    { category: 'Medical', note: 'OLVG Amsterdam pediatric ER; Medical Centrum Texel handles urgent care.' },
    { category: 'Hannah turns 2 on Jul 1', note: 'Needs full fare seat (no lap infant). Factored into $7,332 family total.' },
    { category: 'Dutch school holidays', note: 'Staggered Jul 4, 11, 18 across 3 regions. Texel busy entire trip. Book by early May.' }
  ],
  updatedScore: {
    total: 45.75, previousTotal: 44.75, delta: 1.0,
    changes: [
      { category: 'Highlights', from: 4.5, to: 4.7, reason: 'Texel pairing meaningfully upgrades the nature/scenery weakness — 30km beaches, 140km cycling paths, seal sanctuary.' },
      { category: 'Stress', from: 4.5, to: 4.6, reason: 'Train+ferry to Texel is ~3h door-to-door with zero driving. One mid-trip transfer. Strollerable throughout.' },
      { category: 'Weather', from: 4.0, to: 4.2, reason: 'Texel coastal (66-68F) provides heat-wave insurance vs. mainland-only.' },
      { category: 'Cost', from: 3.0, to: 3.0, reason: 'Flights higher ($7,332 vs Phase 1 $3,500-4,500) — Hannah now 2 needs full ticket. Net total still in range.' }
    ],
    recommendation: 'strong',
    summary: 'Texel pairing directly answers the urban/nature concern with a bikeable beach island reachable by train+ferry — upgrade to strong.'
  },
  risks: [
    { name: 'Flight price escalation', detail: 'Google Flights $1,833 pp nonstop, "prices currently high". Hannah now 2 = full fare (~$7,332 family). Book by mid-May.', severity: 'medium' },
    { name: 'Dutch regional summer holidays', detail: 'Three regions start holidays Jul 4, 11, 18 — Texel busy entire window. Book 10+ weeks out.', severity: 'medium' },
    { name: 'Amsterdam heatwave (2-3 day spike)', detail: '2025 NL hit 33.2C for one day. 5-10% probability of multi-day 33C+ event. Texel is escape valve.', severity: 'low' },
    { name: 'Booking.com scraping blocked', detail: 'Live Booking.com prices not auto-scraped; estimates from KAYAK/Hotels.com/official sites.', severity: 'low' }
  ],
  specialFindings: [
    'Texel is the recommended Amsterdam pairing over Hoge Veluwe base, Zeeland, Giethoorn, Utrecht — car-free (~3h via train+bus+ferry), delivers nature mainland lacks, runs 8-10F cooler.',
    'Hoge Veluwe stays as a day trip from Amsterdam (~90 min each way) — no third base needed.',
    'Giethoorn rejected as base (too small for 4 nights). Zeeland rejected (needs car). Utrecht rejected as secondary (smaller Amsterdam).',
    'TESO ferry: EUR 3/adult return, kids free, every hour (every 30 min peak), 20 min.',
    'Nonstop JFK-AMS live 2026-04-16: $1,833 pp (KLM) / $1,908 (Delta-Virgin). Cheapest 1-stop $996 pp (JetBlue via BOS).',
    'Hannah turns 2 Jul 1 — needs full fare. Family total nonstop = $7,332 (double Phase 1 estimate).',
    'Dutch school holidays stagger Jul 4, 11, 18 — high season entire trip.'
  ]
},

/* ========================= SWEDEN (phase1 rank 3) ========================= */
{
  slug: 'sweden',
  name: 'Sweden',
  phase1Rank: 3,
  status: 'researched',
  dataCapturedAt: '2026-04-16',
  summary: 'Stockholm + Grinda archipelago overnight + Lake Siljan (Dalarna) is the strongest 3-base build: purpose-built 2-10 kid infrastructure (Junibacken, Skansen, Vasa), genuine archipelago overnight that beats a day trip, and rural change of pace in Dalarna. Bohuslän is eliminated for 2026 because Marstrands Havshotell is closed for renovation May 11-Oct 31. Direct 8h10m Delta nonstop JFK-ARN keeps flight pain low; overall score holds vs Phase 1.',

  flights: {
    summary: 'Direct JFK-ARN on Delta, 8h10m; afternoon/evening departure, morning arrival.',
    origin: 'JFK',
    options: [
      {
        label: 'Best overall — Delta nonstop',
        airline: 'Delta',
        outbound: { route: 'JFK-ARN', departDate: '2026-07-04', departTime: '6:10 PM', arriveTime: '8:20 AM+1', duration: '8h10m', layovers: [], notes: 'Evening dep avoids red-eye and early AM; arrives Stockholm morning for same-day check-in' },
        return:   { route: 'ARN-JFK', departDate: '2026-07-18', departTime: 'afternoon', arriveTime: 'same-day evening NYC', duration: '~8h30m', layovers: [], notes: 'Home night before Sun Jul 19; comfortable buffer before Mon Jul 20' },
        priceUSD: 2964,
        painLevel: 'low',
        painReasons: ['long flight with toddler'],
        bookingWindow: 'Book by mid-May 2026 — Delta nonstop inventory sells out for July',
        notes: 'Hannah (turns 2 Jul 1) will be 2 at travel: needs her own seat, no longer lap infant eligible. Price reflects 4 seats.'
      },
      {
        label: 'Cheapest — KLM via AMS',
        airline: 'KLM/Delta',
        outbound: { route: 'JFK-AMS-ARN', departDate: '2026-07-04', departTime: '4:40 PM', arriveTime: '8:50 AM+1', duration: '10h10m', layovers: ['AMS|55m'], notes: 'Tight 55m AMS layover risky with two small kids' },
        return:   { route: 'ARN-AMS-JFK', departDate: '2026-07-18', departTime: 'varies', arriveTime: 'same-day', duration: '~11h', layovers: ['AMS|1-2h'], notes: '' },
        priceUSD: 2607,
        painLevel: 'medium',
        painReasons: ['1 layover', 'tight connection'],
        bookingWindow: 'Flexible — fare class typically available through June',
        notes: 'Saves ~$360 total but adds layover and AMS transit with two kids under 6. Not recommended given violation of no-layover preference.'
      },
      {
        label: 'Backup nonstop — SAS via CPH',
        airline: 'Scandinavian Airlines',
        outbound: { route: 'JFK-CPH-ARN', departDate: '2026-07-04', departTime: '6:55 PM', arriveTime: '12:55 PM+1', duration: '12h', layovers: ['CPH|3h'], notes: 'Comfortable CPH layover with good kid amenities' },
        return:   { route: 'ARN-CPH-JFK', departDate: '2026-07-18', departTime: 'varies', arriveTime: 'same-day', duration: '~12h', layovers: ['CPH|3h'], notes: '' },
        priceUSD: 3039,
        painLevel: 'medium',
        painReasons: ['1 layover', 'longer total duration'],
        bookingWindow: 'Book by late May',
        notes: 'Use only if Delta nonstop inventory is gone. 3h CPH layover is kid-manageable.'
      }
    ]
  },

  groundTransport: {
    primary: 'Stockholm SL transit in city + Waxholmsbolaget ferry to Grinda + SJ train to Leksand + small rental car for Lake Siljan',
    options: [
      { type: 'ferry', commentary: 'Waxholmsbolaget line 15 from Strömkajen to Södra Grinda, ~2h. Summer schedule Jun 22-Aug 16 has multiple daily departures. Kids love the ride.', kidFactor: 'Excellent — open decks, snack bar, novelty' },
      { type: 'train', commentary: 'SJ train Stockholm Central to Leksand, 2h40m, scenic, runs 4-6x/day. Buy advance tickets for family seats.', kidFactor: 'Very good — spacious, bistro car, bathroom access' },
      { type: 'walk', commentary: 'Stockholm is highly walkable with stroller ramps, curb cuts, and elevator access throughout tunnelbana.', kidFactor: 'Excellent — adults with strollers ride transit free; under-7 rides free' },
      { type: 'car', commentary: 'Rent small car at Leksand station (Hertz/Europcar) for 5 days to explore Lake Siljan villages. Automatic available but not default — book early.', kidFactor: 'Good — light traffic, right-side driving, short distances' },
      { type: 'taxi', commentary: 'Taxi Stockholm and Bolt both have car-seat-on-request (advance booking).', kidFactor: 'Good if car seats confirmed' }
    ],
    americanDriverFriendly: 'yes',
    driverNotes: 'Right-hand traffic (same as US). Roads are in excellent condition. Automatic transmissions scarce — reserve specifically. Swedish speed camera enforcement is strict. Daytime headlights required.',
    verdict: 'Zero driving in Stockholm or Grinda. Train + small rental car in Dalarna only. This is a near-ideal transit profile for a family with young kids.'
  },

  itinerary: {
    summary: '3 bases: Stockholm (7n) + Grinda archipelago (2n) + Lake Siljan/Dalarna (5n)',
    pacing: 'Measured. Stockholm week front-loaded with 2 rest/settle days. Grinda is pure decompression. Dalarna is slow. Only one real transition day (Grinda → Dalarna via Stockholm).',
    bases: [
      {
        name: 'Stockholm (Södermalm apartment)',
        nights: 7,
        arrival: 'Jul 5',
        departure: 'Jul 12',
        whyThisLong: 'Djurgärden alone needs 2 full days (Junibacken + Skansen + Vasa). City has enough family-tier attractions to fill a full week without overpacking. Base for Vaxholm day trip.',
        sampleDays: [
          { label: 'Day 1 (Jul 5, Sun)', activity: 'Arrive ARN 8:20 AM, Arlanda Express to city, apartment check-in ~noon, lunch at Södermalm café, light neighborhood walk, early dinner, crash early.', pace: 'light' },
          { label: 'Day 2 (Jul 6, Mon)', activity: 'Gamla Stan early (8-11 AM before crowds), Royal Palace exterior, ice cream at Stortorget, afternoon playground + nap.', pace: 'medium' },
          { label: 'Day 3 (Jul 7, Tue)', activity: 'Djurgärden day 1: Junibacken (2h — storybook train is the highlight for Naomi), picnic in park, Skansen afternoon (kids zoo + Nordic animals).', pace: 'full' },
          { label: 'Day 4 (Jul 8, Wed)', activity: 'Vasa Museum morning (90 min), Rosendals Trädgård for lunch, easy afternoon.', pace: 'medium' },
          { label: 'Day 5 (Jul 9, Thu)', activity: 'Vaxholm day trip via Waxholmsbolaget (45 min ferry), fortress, lunch, afternoon ferry back.', pace: 'medium' },
          { label: 'Day 6 (Jul 10, Fri)', activity: 'Fotografiska morning (stroller-friendly, kids cafe), Sodermalm SoFo walk, Mariatorget playground.', pace: 'light' },
          { label: 'Day 7 (Jul 11, Sat)', activity: 'Skansen day 2 if not saturated, or Gröna Lund kids rides, farewell Stockholm dinner.', pace: 'medium' }
        ]
      },
      {
        name: 'Grinda (archipelago cottage)',
        nights: 2,
        arrival: 'Jul 12',
        departure: 'Jul 14',
        whyThisLong: '2 nights is the minimum to justify the transition; gives one full day on the island without feeling rushed. Longer would be lovely but Dalarna needs its time.',
        transitFromPrevious: 'Waxholmsbolaget line 15 Strömkajen → Södra Grinda, ~2h. Pack light; Grinda porters handle luggage from dock to cottage.',
        sampleDays: [
          { label: 'Day 8 (Jul 12, Sun)', activity: 'Morning ferry to Grinda, check in to 4-bed cottage, afternoon swimming off granite rocks, dinner at Grinda Wärdshus.', pace: 'light' },
          { label: 'Day 9 (Jul 13, Mon)', activity: 'Full day on island: animal farm (sheep/hens), nature trails, kayak rental for Josh/Rose in shifts, playground, late dinner under midnight sun.', pace: 'medium' },
          { label: 'Day 10 (Jul 14, Tue)', activity: 'Morning swim, packing, afternoon ferry back to Stockholm Central (transit via Strömkajen to Central Station), 5 PM SJ train to Leksand.', pace: 'full' }
        ]
      },
      {
        name: 'Lake Siljan / Tällberg (Dalarna cottage)',
        nights: 5,
        arrival: 'Jul 14',
        departure: 'Jul 19',
        whyThisLong: '5 nights is the sweet spot: enough to truly decompress, explore Leksand/Rättvik/Tällberg, do one low-key hike, visit a Dala horse workshop, and have a full lazy day. More would be too pastoral for a 5-year-old.',
        transitFromPrevious: 'SJ train Stockholm Central → Leksand, 2h40m; pick up rental car at Leksand station.',
        sampleDays: [
          { label: 'Day 11 (Jul 14, Tue)', activity: 'Arrive Leksand ~8 PM, drive to Tällberg cottage, quick groceries, bed.', pace: 'light' },
          { label: 'Day 12 (Jul 15, Wed)', activity: 'Morning at lake beach, afternoon Leksand town, church, playground, swimming.', pace: 'medium' },
          { label: 'Day 13 (Jul 16, Thu)', activity: 'Nusnäs Dala horse workshop (kids can paint), Rättvik pier, Vidablick viewpoint.', pace: 'medium' },
          { label: 'Day 14 (Jul 17, Fri)', activity: 'Lake day: swimming, rowing, berry picking, farm visit, cottage dinner.', pace: 'light' },
          { label: 'Day 15 (Jul 18, Sat)', activity: 'Morning at cottage, Munthe Hildasholm garden afternoon, relaxed evening.', pace: 'light' },
          { label: 'Day 16 (Jul 19, Sun)', activity: 'Return rental car at Leksand, train to ARN airport, mid-afternoon flight to JFK, home by evening Sun.', pace: 'full' }
        ]
      }
    ],
    alternativeStructure: 'Drop Grinda overnight; keep it as a Stockholm day trip; expand Stockholm to 8n and Dalarna to 6n. Saves one transition. Use if Grinda cottages are booked out or Hannah struggles with ferry.'
  },

  lodging: [
    {
      base: 'Stockholm (7 nights)',
      nights: 7,
      options: [
        { name: 'Södermalm family apartment (Airbnb, SoFo district)', type: 'apartment', tier: 'mid', priceUSDperNight: 240, bedroomConfig: '2BR, sleeps 4-5', kidFriendly: 'Kitchen, laundry, playground within 3 blocks', notes: 'Ample inventory; book by May for July dates', url: 'https://www.airbnb.com/sodermalm-stockholm-sweden/stays/apartments' },
        { name: 'Hotel Skeppsholmen', type: 'hotel', tier: 'premium', priceUSDperNight: 340, bedroomConfig: 'Family room, 1 king + sofa bed', kidFriendly: 'Boutique, quiet island setting, breakfast included', notes: 'Design Hotels member; 1700s building with modern interior', url: 'https://www.designhotels.com/hotels/sweden/stockholm/hotel-skeppsholmen/' },
        { name: 'Downtown Camper by Scandic', type: 'hotel', tier: 'mid', priceUSDperNight: 285, bedroomConfig: 'Family room with bunks option', kidFriendly: 'Adventure gear lending (kayaks, bikes), rooftop pool, central', notes: 'Popular with families; book early', url: 'https://www.scandichotels.com/hotels/sweden/stockholm/downtown-camper-by-scandic' },
        { name: 'Scandic Hasselbacken (on Djurgärden)', type: 'hotel', tier: 'premium', priceUSDperNight: 320, bedroomConfig: 'Family room', kidFriendly: 'Direct Djurgärden access — walk to Skansen, Junibacken', notes: 'Historic property, less hip than Downtown Camper but unbeatable location for this trip', url: 'https://www.scandichotels.com/hotels/sweden/stockholm/scandic-hasselbacken' }
      ]
    },
    {
      base: 'Grinda (2 nights)',
      nights: 2,
      options: [
        { name: 'Grinda Sea Lodge — 4-bed room', type: 'hotel', tier: 'mid', priceUSDperNight: 145, bedroomConfig: '4-bed room, private bath, breakfast included', kidFriendly: 'On-site restaurant, step from dock, no car needed', notes: '1500 SEK/night; cleanest option for Rose re: bathroom', url: 'https://grinda.se/en/accommodation/prices/' },
        { name: 'Grinda Wärdshus — 4-bed cottage', type: 'resort', tier: 'mid', priceUSDperNight: 125, bedroomConfig: '4-bed cottage, traditional red paint', kidFriendly: 'Charming but check bathroom config (may be shared)', notes: '1300 SEK/night high season + 180 SEK/set linens', url: 'https://grinda.se/en/accommodation/prices/' },
        { name: 'Grinda Wärdshus — 4-bed PLUS cottage', type: 'resort', tier: 'premium', priceUSDperNight: 195, bedroomConfig: '4-bed, upgraded amenities, likely private bath', kidFriendly: 'Better for Rose standards; recommend this tier', notes: '2000 SEK/night high season', url: 'https://grinda.se/en/accommodation/prices/' },
        { name: 'Grinda Hotel — Double room', type: 'hotel', tier: 'premium', priceUSDperNight: 220, bedroomConfig: 'Double room per adult (need 2 rooms)', kidFriendly: 'Full hotel amenities, breakfast included', notes: '1095-1195 SEK/person — requires 2 rooms for family, ends up most expensive option', url: 'https://grinda.se/en/accommodation/prices/' }
      ]
    },
    {
      base: 'Lake Siljan / Tällberg (5 nights)',
      nights: 5,
      options: [
        { name: 'Traditional red cottage (Airbnb), Tällberg lakeside', type: 'airbnb', tier: 'mid', priceUSDperNight: 210, bedroomConfig: '2-3BR cottage, private bath, kitchen', kidFriendly: 'Lake access, yard, modernized interior', notes: 'Abundant inventory on Airbnb and Stugknuten; book by May', url: 'https://www.airbnb.com/tallberg-sweden/stays' },
        { name: 'Klockargården Hotel, Tällberg', type: 'hotel', tier: 'mid', priceUSDperNight: 240, bedroomConfig: 'Family room', kidFriendly: 'Pool, restaurant, cultural garden on site', notes: 'Classic Dalarna hotel; walking to lake', url: 'https://www.klockargarden.se/' },
        { name: 'Green Hotel Tällberg', type: 'hotel', tier: 'mid', priceUSDperNight: 210, bedroomConfig: 'Family room with lake view', kidFriendly: 'Large grounds, pool, lake beach', notes: 'Better-value spa-style hotel', url: 'https://www.greenhotel.se/' },
        { name: 'Leksand Airbnb 2BR cottage, Lake Siljan shore', type: 'airbnb', tier: 'budget', priceUSDperNight: 150, bedroomConfig: '2BR, 1 bath, kitchen', kidFriendly: 'Yard, lake within walking, quiet', notes: 'Older properties — filter carefully for modern interior per Rose preference', url: 'https://www.airbnb.com/leksand-sweden/stays' }
      ]
    }
  ],

  logistics: [
    { category: 'Time zone', note: '6h ahead EDT. Manageable — Naomi will adjust in 2 days; Hannah (just-turned-2) may take 3-4 days. Evening arrival + crash routine helps.' },
    { category: 'Airport transit', note: 'Arlanda Express train ARN → Stockholm Central, 20 min, family ticket ~$65. Avoid taxi (90+ min in July traffic).' },
    { category: 'Stockholm transit', note: 'SL 7-day pass $40/adult; kids under 7 free. Djurgärden ferry (Line 82) runs every 15-20 min from Slussen. Adults with strollers ride free on buses.' },
    { category: 'Archipelago ferry booking', note: 'Waxholmsbolaget tickets can be bought on board or via SL app. No advance booking for most routes — but summer weekend ferries can be standing-room-only; book online when possible for Jul 12 departure.' },
    { category: 'Ferry reliability', note: '30-min delays are not uncommon. Build slack into the Jul 14 ferry-back + train day. Consider returning morning ferry instead of midday to absorb delay risk.' },
    { category: 'SJ train', note: 'Stockholm C → Leksand ~2h40m, ~$55/adult advance fare. Book at sj.se 30 days in advance for best family seating (4-seat bays with table).' },
    { category: 'Dalarna car rental', note: '~$450 for 5 days small automatic. Book at Leksand station; Hertz and Europcar both present. Reserve automatic specifically (Swedes drive manual).' },
    { category: 'Car seats', note: 'Sweden requires booster for age 5 (Naomi) and forward-facing harness for age 2 (Hannah). Rental agencies rent seats ~$10/day but quality varies — consider CARES harness for Hannah.' },
    { category: 'Cashless', note: 'Sweden is 95%+ cashless. Swish (Swedish payment app) unavailable to non-residents; bring contactless Visa/Mastercard. Some places literally refuse cash.' },
    { category: 'AC / cooling', note: 'Stockholm apartments rarely have AC. Filter Airbnb for "air conditioning"; Scandic hotels have AC. Grinda cottages have no AC but Baltic breeze. Dalarna cottages have no AC — open windows and fans only. In a heat wave scenario, hotels > apartments > cottages.' },
    { category: 'Language', note: 'English near-universal. No translation apps needed.' },
    { category: 'Medical', note: 'Karolinska and Södersjukhuset in Stockholm; smaller Leksand hospital in Dalarna. Pharmacies (Apotek) plentiful. Bring US prescriptions + generics list.' },
    { category: 'Midnight sun', note: 'Sunset ~10:10 PM in Stockholm in mid-July; civil twilight until 11:30 PM. Bring blackout eye masks for kids; most Swedish accommodations have blackout blinds.' },
    { category: 'Ticks', note: 'Present in Dalarna and Grinda forests. Long pants for hikes, tick check each evening.' },
    { category: 'Home buffer', note: 'Jul 19 Sun return lands ~evening NYC; full Jul 20 Mon home day before work. Meets ≥1 day home requirement.' }
  ],

  updatedScore: {
    total: 43.75,
    previousTotal: 44.75,
    delta: -1.0,
    changes: [
      { category: 'Stress', from: 4.0, to: 3.5, reason: 'Added 3rd transition (Grinda ferry in and out) raises hassle slightly; Hannah turning 2 means she now needs her own airfare seat (not lap infant), adding cost and logistics.' },
      { category: 'Cost', from: 2.5, to: 2.5, reason: 'Net cost flat — archipelago adds ~$300 but nonstop Delta and reasonable Dalarna cottages hold total in line.' },
      { category: 'Highlights', from: 4.5, to: 4.75, reason: 'Grinda overnight elevates archipelago experience from day-trip afterthought to genuine trip centerpiece.' },
      { category: 'Accommodations', from: 5.0, to: 4.75, reason: 'Grinda cottages have variable bathroom configs; Marstrand renovation confirmed there is no fully premium archipelago-hotel option in inventory.' }
    ],
    recommendation: 'moderate',
    summary: 'Solid, low-risk choice if Denmark falls through; Stockholm + Grinda + Dalarna delivers excellent 2-10 kid infrastructure with one genuine nature base, but Sweden no longer has the Bohuslän fallback in 2026.'
  },

  risks: [
    { name: 'Grinda cottage bathroom config', detail: '4-bed standard cottages at Grinda Wärdshus may have shared bathrooms (common in Swedish archipelago stugor). Verify before booking or pay up for 4-bed PLUS / Sea Lodge which have private facilities. Material for Rose given dated/buggy sensitivity.', severity: 'medium' },
    { name: 'Ferry delays', detail: 'Waxholmsbolaget timetables slip by 30+ min in practice. Avoid tight ferry→train connections on Jul 14 by taking early morning ferry back.', severity: 'low' },
    { name: 'Marstrand renovation eliminates Bohuslän backup', detail: 'Marstrands Havshotell, the flagship family hotel on the iconic Bohuslän island, is closed May 11–Oct 31, 2026 for renovation. Removes the west-coast pivot option if Stockholm plan fails.', severity: 'low' },
    { name: 'Hannah now needs her own seat', detail: 'She turns 2 on Jul 1, 2026 — three days before travel. No longer lap-infant eligible, adds ~$988 to flight cost vs. Phase 1 assumption.', severity: 'medium' },
    { name: 'Heat wave + no AC', detail: 'July 2025 30C+ heat wave was 10x more likely due to climate change. Most Stockholm apartments and all Dalarna cottages lack AC. Filter lodging specifically for AC or fans; have a hotel backup plan.', severity: 'medium' },
    { name: 'Midnight sun sleep disruption', detail: '10:10 PM sunset; some rooms have thin curtains. Confirm blackout availability at each property.', severity: 'low' }
  ],

  specialFindings: [
    'Marstrands Havshotell closed May 11–Oct 31, 2026 for renovation — Bohuslän is eliminated as a 2026 Sweden alternative.',
    'Grinda Wärdshus (cottages ~$125–195/night) + Sea Lodge (~$145/night, private bath, breakfast) are the two realistic archipelago overnight options; book directly at grinda.se rather than via booking aggregators.',
    'Sandhamn is too far (2h ferry) and more adult/sailing-scene than Grinda; skip for this age group.',
    'Hannah turning 2 on Jul 1 means she loses lap-infant pricing by Jul 4 — flight costs jump ~$988 vs. Phase 1 estimate.',
    'Delta nonstop JFK-ARN at 6:10 PM is the clearly optimal flight: no layover, no red-eye, evening departure. At $988/pax on 2026-04-16 Google Flights snapshot, book by mid-May.',
    'SJ train to Leksand is preferable to driving from Stockholm; rent a small car only in Leksand for Lake Siljan exploration.',
    'Gothenburg + Bohuslän as alternate structure is weaker than Stockholm plan (less purpose-built kid infrastructure) AND has no 2026-viable premium hotel on Marstrand.',
    'Combining with Denmark via Øresund is feasible but cannibalizes Denmark as standalone #1 finalist — skip.',
    'High Coast (Höga Kusten) is too remote (6h+ from Stockholm) and rejected for this age group.',
    'Waxholmsbolaget North-South summer service runs Jun 22 – Aug 16, 2026 — confirmed covers the travel window.'
  ]
},

/* ========================= ATLANTIC CANADA (phase1 rank 4) ========================= */
{
  slug: 'atlantic-canada',
  name: 'Atlantic Canada (Nova Scotia + PEI)',
  phase1Rank: 4,
  status: 'researched',
  dataCapturedAt: '2026-04-16',
  summary: 'Domestic sleeper pick: 2-hour nonstop from LGA/EWR, no jet lag, 68–76°F July highs (well under heat ceiling), and a rare 50/50 urban-nature mix (walkable Halifax + Cabot Trail + PEI red-sand beaches). Requires a rental car and 3 bases — the friction cost of covering the highlights. Carefully curate Cape Breton lodging to avoid dated stock.',

  flights: {
    summary: '2h nonstop LGA–YHZ on American or Delta; EWR nonstop via Air Canada/United as backup',
    origin: 'LGA (preferred) / EWR / JFK',
    options: [
      {
        label: 'Best overall — LGA nonstop',
        airline: 'American Airlines (Republic/American Eagle)',
        outbound: { route: 'LGA–YHZ', departDate: 'Jul 4', departTime: '11:29 AM', arriveTime: '2:32 PM', duration: '2h 03m', layovers: [], notes: 'Midday departure, no red-eye/early AM' },
        return:   { route: 'YHZ–LGA', departDate: 'Jul 18', departTime: 'varies midday', arriveTime: '~4 PM', duration: '2h 03m', layovers: [], notes: 'Home same evening — satisfies ≥1 day home before Jul 20' },
        priceUSD: 1804,
        painLevel: 'low',
        painReasons: [],
        bookingWindow: 'Book by late May; Google Flights shows "prices are currently typical"',
        notes: '$451 pp RT × 4 (Hannah turns 2 on Jul 1 so requires her own seat on this international flight). Source: Google Flights 2026-04-16.'
      },
      {
        label: 'Alternate — Delta LGA nonstop',
        airline: 'Delta (Endeavor Air DBA Delta Connection) + WestJet codeshare',
        outbound: { route: 'LGA–YHZ', departDate: 'Jul 4', departTime: '11:55 AM', arriveTime: '2:57 PM', duration: '2h 02m', layovers: [], notes: 'Perfect departure window' },
        return:   { route: 'YHZ–LGA', departDate: 'Jul 18', departTime: 'varies', arriveTime: 'same day', duration: '2h', layovers: [], notes: '' },
        priceUSD: 1804,
        painLevel: 'low',
        painReasons: [],
        bookingWindow: 'Book by late May',
        notes: '$451 pp RT × 4. Equivalent to AA option; choose by frequent-flyer preference.'
      },
      {
        label: 'Newark alternate — Air Canada nonstop',
        airline: 'Air Canada (PAL Airlines operated)',
        outbound: { route: 'EWR–YHZ', departDate: 'Jul 4', departTime: '12:45 PM', arriveTime: '4:01 PM', duration: '2h 16m', layovers: [], notes: 'Easier for NJ/lower Manhattan; lower-emission choice' },
        return:   { route: 'YHZ–EWR', departDate: 'Jul 18', departTime: 'afternoon', arriveTime: 'same day', duration: '2h 13m', layovers: [], notes: 'United also flies EWR nonstop at 11 AM / 8:42 PM' },
        priceUSD: 2024,
        painLevel: 'low',
        painReasons: [],
        bookingWindow: 'Book by late May; prices "currently high" per Google Flights',
        notes: '$506 pp RT × 4. EWR nonstop ~$55 pp pricier than LGA. Source: Google Flights 2026-04-16.'
      }
    ]
  },

  groundTransport: {
    primary: 'Rental car (midsize SUV) pickup at YHZ, return at YHZ — a car is essential',
    options: [
      { type: 'car',   commentary: 'Enterprise/Hertz at Halifax Stanfield (YHZ). SUV ~CAD $94–110/day per Kayak; 14-day total ~USD $1,000–1,200. Keep same rental for the whole trip — no cross-border restrictions within Canada (NS ↔ PEI ↔ NB is seamless; just mention the PEI trip at pickup).', kidFactor: 'Two car seats needed (rent or bring). 4-hr Halifax→Cape Breton drive times to nap window; 3-hr Cape Breton→PEI broken by 75-min ferry (a highlight).' },
      { type: 'ferry', commentary: 'Northumberland Ferries Caribou NS → Wood Islands PEI. 75-min crossing, ~CAD $80 car + passengers. Reservation strongly recommended (ferries.ca or 1.877.762.7245).', kidFactor: 'Kids love the open decks — built-in mid-trip break.' },
      { type: 'car',   commentary: 'Confederation Bridge (PEI → NB, 12.9 km). Toll reduced to CAD $20 per passenger vehicle as of Aug 2025 (down from $50). Collected only when leaving PEI.', kidFactor: 'Quick scenic crossing; not a white-knuckle drive.' },
      { type: 'walk',  commentary: 'Halifax waterfront + downtown + Charlottetown downtown are genuinely walkable bases — car stays parked on urban days.', kidFactor: 'Stroller-friendly, compact distances.' }
    ],
    americanDriverFriendly: 'yes',
    driverNotes: 'Right-hand traffic, English signage, US license valid. Cabot Trail has steep grades and tight curves — drive unhurried, use pulloffs, expect cell-service gaps. Gas ~CAD $1.50–1.80/L.',
    verdict: 'Rent SUV at YHZ, return at YHZ. Same car the whole trip. No logistics gymnastics needed.'
  },

  itinerary: {
    summary: '3 bases: Halifax (4n) + Ingonish/Cape Breton (5n) + Cavendish/Charlottetown PEI (5n)',
    pacing: 'Medium density. Urban start to decompress from travel, middle nature immersion, beachy wind-down. Two big driving days (Halifax→CB, CB→PEI via ferry) are the main friction — time them around Hannah\'s nap.',
    bases: [
      {
        name: 'Halifax',
        nights: 4,
        arrival: 'Jul 4',
        departure: 'Jul 8',
        whyThisLong: 'Walkable urban base with enough for 4 kid-tolerant days including 2 day-trip anchors (Peggy\'s Cove, Burntcoat Head). Decompresses the family before the driving-heavy middle of the trip.',
        sampleDays: [
          { label: 'Day 1 (Jul 4)', activity: 'Fly LGA→YHZ midday, pickup rental, check in, easy waterfront dinner and boardwalk stroll', pace: 'light' },
          { label: 'Day 2 (Jul 5)', activity: 'Halifax Citadel (noon gun), Public Gardens, Maritime Museum of the Atlantic', pace: 'medium' },
          { label: 'Day 3 (Jul 6)', activity: 'Peggy\'s Cove early (beat crowds) + South Shore lunch; optional Lunenburg detour', pace: 'medium' },
          { label: 'Day 4 (Jul 7)', activity: 'Burntcoat Head day trip — walk the ocean floor at low tide, return at high tide; waterfront splash pad in evening', pace: 'full' }
        ]
      },
      {
        name: 'Ingonish (Cape Breton)',
        nights: 5,
        arrival: 'Jul 8',
        departure: 'Jul 13',
        whyThisLong: 'Need a travel day in, 2–3 days to sample the Cabot Trail in digestible chunks, plus a pure beach/rest day. Less would feel like a drive-by.',
        transitFromPrevious: '~4h drive Halifax→Ingonish via Trans-Canada. Plan midday departure to hit Hannah\'s nap window; lunch stop in Antigonish.',
        sampleDays: [
          { label: 'Day 5 (Jul 8)', activity: 'Drive Halifax→Ingonish; check in; beach time at Ingonish Beach', pace: 'medium' },
          { label: 'Day 6 (Jul 9)', activity: 'Cabot Trail north loop: Skyline Trail (stroller-friendly until final descent) + Bog Trail boardwalk', pace: 'full' },
          { label: 'Day 7 (Jul 10)', activity: 'Rest / beach day at Ingonish; Alexander Graham Bell Museum in Baddeck if rainy', pace: 'light' },
          { label: 'Day 8 (Jul 11)', activity: 'Drive to Pleasant Bay for large-boat whale watch (Hannah age-friendly); picnic lunch', pace: 'medium' },
          { label: 'Day 9 (Jul 12)', activity: 'Short hikes (Benjie\'s Lake, Middle Head) + souvenir shopping + early dinner', pace: 'light' }
        ]
      },
      {
        name: 'PEI (Cavendish 2n + Charlottetown 3n)',
        nights: 5,
        arrival: 'Jul 13',
        departure: 'Jul 18',
        whyThisLong: 'Splits between beach/literary shore and walkable urban capital without padding. Ferry adds magic to the transit.',
        transitFromPrevious: '~3.5h: Ingonish → Caribou NS (2h) → 75-min Northumberland ferry → Wood Islands PEI → Cavendish (~1h). Reserve ferry in advance.',
        sampleDays: [
          { label: 'Day 10 (Jul 13)', activity: 'Caribou→Wood Islands ferry; drive to Cavendish; cottage check-in; beach sunset', pace: 'medium' },
          { label: 'Day 11 (Jul 14)', activity: 'Green Gables Heritage Place (Anne, Haunted Wood, dress-up, ice cream); Cavendish Beach afternoon', pace: 'full' },
          { label: 'Day 12 (Jul 15)', activity: 'Greenwich dunes boardwalk; transfer to Charlottetown', pace: 'medium' },
          { label: 'Day 13 (Jul 16)', activity: 'Walk Victoria Row, Founders Hall, waterfront; lobster supper in New Glasgow', pace: 'medium' },
          { label: 'Day 14 (Jul 17)', activity: 'Basin Head beach (singing sands) or Brackley Beach; return to Charlottetown for final dinner', pace: 'medium' },
          { label: 'Day 15 (Jul 18)', activity: 'Drive Charlottetown → Confederation Bridge ($20 toll) → Halifax airport (~3.5h); afternoon LGA flight', pace: 'medium' }
        ]
      }
    ],
    alternativeStructure: 'Drop Cape Breton; do Halifax (5n) + PEI (8n, split Cavendish/Charlottetown) — removes the hardest drive, cuts the iconic Skyline Trail. Better for a 10-night version of this trip.'
  },

  lodging: [
    {
      base: 'Halifax',
      nights: 4,
      options: [
        { name: 'Halifax Marriott Harbourfront Hotel',  type: 'hotel',      tier: 'mid',     priceUSDperNight: 184, bedroomConfig: 'Family room, 2 doubles', kidFriendly: 'On boardwalk, indoor pool, kids under 18 free',                notes: '4.4/5 (2.7K reviews). 4-star. Source: Google Hotels 2026-04-16.', url: 'https://www.marriott.com/hotels/travel/yhzmc-halifax-marriott-harbourfront-hotel/' },
        { name: 'Muir, a Luxury Collection Hotel',      type: 'hotel',      tier: 'premium', priceUSDperNight: 353, bedroomConfig: 'Suites available',       kidFriendly: 'Indoor pool, directly on Queen\'s Marque waterfront',        notes: '4.4/5 (452). 5-star, opened 2022 — newest premium option in city.',   url: 'https://www.muirhotel.com/' },
        { name: 'Courtyard by Marriott Halifax Downtown', type: 'hotel',    tier: 'mid',     priceUSDperNight: 119, bedroomConfig: 'Standard room, 2 queens', kidFriendly: 'Indoor pool + hot tub, breakfast option',                    notes: '4.3/5 (926). Flagged as "DEAL — 20% less than usual".',                url: '' },
        { name: 'Atlantica Hotel Halifax',              type: 'hotel',      tier: 'budget',  priceUSDperNight: 111, bedroomConfig: 'Standard room',           kidFriendly: 'Indoor pool, kid-friendly rated',                           notes: '4.1/5 (3.3K). Further from waterfront (~15-min walk) but solid value.', url: '' }
      ]
    },
    {
      base: 'Ingonish (Cape Breton)',
      nights: 5,
      options: [
        { name: 'Keltic Lodge at the Highlands — Argyle/Montrose family suite', type: 'resort', tier: 'premium', priceUSDperNight: 280, bedroomConfig: 'Loft suite, sleeps 4', kidFriendly: 'Cliff-top location, adjacent Ingonish Beach, restaurant on site', notes: 'Iconic option. 2026 lobby/restaurant renovation underway — book newer Argyle/Montrose buildings, not the dated main lodge rooms.', url: 'https://www.kelticlodge.ca/' },
        { name: 'Seascape Coastal Retreat',             type: 'resort',    tier: 'mid',    priceUSDperNight: 283, bedroomConfig: 'Private chalet, sleeps 4', kidFriendly: 'Hot tub, air conditioning, smoke-free',                     notes: '4.8/5 (72). 5-star, adults/couples skew but chalets work for families. Most modern in area.', url: '' },
        { name: 'Ingonish Chalets',                     type: 'airbnb',    tier: 'mid',    priceUSDperNight: 170, bedroomConfig: 'Cottage, sleeps 5',       kidFriendly: 'Kid-friendly rated, kitchen, parking',                      notes: '4.4–4.5/5 (419 reviews). Good mid-tier family option.',              url: '' },
        { name: 'Driftwood Lodge',                      type: 'hotel',     tier: 'mid',    priceUSDperNight: 135, bedroomConfig: 'Unit with kitchen',       kidFriendly: '4-star, kid-friendly, kitchen',                              notes: '4.6/5 (68). Newer/better-maintained than most CB motels — matches Rose\'s standards.', url: '' },
        { name: 'VRBO — modern (post-2018) cottage in Ingonish or Baddeck',  type: 'airbnb', tier: 'mid',    priceUSDperNight: 220, bedroomConfig: '2BR cottage', kidFriendly: 'Laundry, full kitchen',                                   notes: 'Screen carefully for reviews citing cleanliness and modern fixtures; skip anything >15 years old with no recent reno photos.', url: 'https://www.vrbo.com/' }
      ]
    },
    {
      base: 'PEI — Cavendish (2n)',
      nights: 2,
      options: [
        { name: 'Cavendish Lodge & Cottages',           type: 'resort',    tier: 'mid',    priceUSDperNight: 195, bedroomConfig: 'Cottage, sleeps 4',        kidFriendly: 'Outdoor pool, hot tub, kitchen, breakfast',                 notes: '4.8/5 (167). Strongest ratings in Cavendish cottage cluster.',         url: '' },
        { name: 'Kindred Spirits Country Inn',          type: 'airbnb',    tier: 'mid',    priceUSDperNight: 240, bedroomConfig: 'Cottage suite, kitchenette', kidFriendly: 'Walking distance to Green Gables, well-maintained grounds', notes: 'On the Green Gables site — thematic win for Naomi.',                  url: 'https://www.kindredspirits.ca/' },
        { name: 'Inn at The Pier',                      type: 'hotel',     tier: 'mid',    priceUSDperNight: 210, bedroomConfig: 'Room, 2 queens',          kidFriendly: 'Outdoor pool, hot tub, breakfast, kid-friendly',            notes: '4-star, 4.4/5 (143). Modern-ish, north shore location.',              url: '' }
      ]
    },
    {
      base: 'PEI — Charlottetown (3n)',
      nights: 3,
      options: [
        { name: 'The Holman Grand Hotel',               type: 'hotel',     tier: 'premium', priceUSDperNight: 290, bedroomConfig: 'Family suite',            kidFriendly: 'Indoor pool, spa, downtown walkable',                        notes: '4-diamond, most modern city hotel on PEI. Top urban pick.',            url: 'https://www.theholmangrand.com/' },
        { name: 'The Great George Hotel',               type: 'hotel',     tier: 'premium', priceUSDperNight: 310, bedroomConfig: 'Suites in historic houses', kidFriendly: 'Free breakfast, walk-to-everything location',             notes: '5-star, excellent location score. Boutique charm.',                    url: 'https://www.thegreatgeorge.com/' },
        { name: 'Inn on the Harbour',                   type: 'hotel',     tier: 'mid',    priceUSDperNight: 97,  bedroomConfig: 'Standard, 2 queens',      kidFriendly: 'Free breakfast, waterfront, kid-friendly',                   notes: '4-star, 4.7/5. "GREAT DEAL — 25% less than usual". Best value.',      url: '' },
        { name: 'The Hotel on Pownal',                  type: 'hotel',     tier: 'budget', priceUSDperNight: 90,  bedroomConfig: 'Standard',                kidFriendly: 'Free parking/breakfast, fitness center',                     notes: '4.3/5 (322). Solid downtown budget pick.',                             url: '' }
      ]
    }
  ],

  logistics: [
    { category: 'Passports',       note: 'Both kids need valid passports — this is international travel for air. Check expiration; Canada requires validity only through dates of travel.' },
    { category: 'Canada Strong Pass', note: 'Free admission to all Parks Canada sites Jun 19–Sep 7, 2026. Covers Halifax Citadel, Green Gables, Cape Breton Highlands NP, PEI NP. Register online in advance.' },
    { category: 'Ferry reservation', note: 'Book Northumberland Ferries (Caribou→Wood Islands) for Jul 13 AT LEAST 2 weeks ahead. ferries.ca or 1.877.762.7245.' },
    { category: 'Confederation Bridge toll', note: 'CAD $20 per passenger vehicle as of Aug 2025 (down from $50). Collected only when leaving PEI via bridge. Cash/Interac/credit all accepted.' },
    { category: 'Car rental',      note: 'Confirm unlimited mileage and cross-province usage at pickup. Two car seats — cheaper to bring own than rent ($15/day each). Midsize SUV is the right size for Cabot Trail comfort.' },
    { category: 'Cell service',    note: 'Sparse on stretches of the Cabot Trail — download offline maps for that section. US plans generally have Canada add-ons ($10/day or pass); verify before departure.' },
    { category: 'Medical',         note: 'IWK Health Centre (Halifax) is a full pediatric hospital. Travel medical insurance mandatory — Canadian healthcare does not cover US citizens. Budget ~$150–250 for family policy.' },
    { category: 'Hannah\'s seat',  note: 'She turns 2 on Jul 1 — no longer a lap infant. Full ticket required on all 4 flights. Factored into fare total.' },
    { category: 'Bug repellent',   note: 'Black flies/mosquitoes persist in inland Cape Breton through July. Bring lavender-based repellent; tick checks after any woodland hike.' }
  ],

  updatedScore: {
    total: 44.5,
    previousTotal: 44.25,
    delta: 0.25,
    changes: [
      { category: 'Stress',           from: 4.0, to: 3.75, reason: 'Hannah now requires her own seat (turned 2 Jul 1); 3 bases + 4h + 3.5h drives remain the core friction.' },
      { category: 'Cost',             from: 3.5, to: 3.75, reason: 'Confederation Bridge toll dropped from $50 to $20 (Aug 2025 federal cut); flights firm in the low end of projected range (~$1,800 family vs $900–1,200 card estimate for 3 tickets — but all 4 seats now confirmed at ~$1,800).' },
      { category: 'Accommodations',   from: 3.5, to: 3.5,  reason: 'Halifax + Charlottetown inventory is strong (modern 4-star options $100–300). Cape Breton confirmed as the weak link — Keltic Lodge renovation may mean construction noise; Driftwood Lodge and Seascape Coastal Retreat are viable modern alternates.' },
      { category: 'Show-stopper risks', from: 4.5, to: 4.25, reason: '2025 saw notable late-summer wildfire smoke in NS (August incident >100km drift). July risk remains low but not zero; eastern Canada smoke events trending up year-over-year.' }
    ],
    recommendation: 'moderate',
    summary: 'Score essentially unchanged at 44.5/52.5 — slightly lower stress offset by cheaper ground costs; the underlying 3-base/driving reality is the ceiling on this destination.'
  },

  risks: [
    { name: 'Eastern Canada wildfire smoke (July trending up)', detail: '2023 was historic; 2025 had a major late-July/Aug NS wildfire driving poor AQI 100+ km away. July 4–18 window is still low-probability but worth watching 10 days out. Halifax airport rarely closes for smoke.', severity: 'low' },
    { name: 'Cape Breton lodging quality variance',             detail: 'Many Cabot Trail properties are dated motels/cottage courts. Rose\'s low tolerance for worn lodgings means Ingonish bookings must be Driftwood Lodge / Seascape / Keltic Argyle suites / post-2018 VRBO only — no generic motels.', severity: 'medium' },
    { name: 'Hannah\'s age-2 flight pricing',                   detail: 'Turned 2 on Jul 1 — no longer a lap infant, full ticket required. Factored in to $1,800 family total but worth noting vs card estimate.', severity: 'low' },
    { name: 'Keltic Lodge renovation',                          detail: '2026 lobby/restaurant renovation; book Argyle/Montrose buildings only. Call to confirm construction hours before booking.', severity: 'low' },
    { name: 'Halifax fog delays',                               detail: '~5% chance of >24hr departure delay in early July. Build buffer on Jul 18 by booking an early-afternoon (not last) flight home.', severity: 'low' }
  ],

  specialFindings: [
    'LGA nonstops ($451 pp RT on AA or Delta) are meaningfully cheaper than EWR ($506) and dramatically better than JFK (which lacks nonstops on these dates — cheapest JFK is $516 with 2 stops).',
    'Confederation Bridge toll CUT from CAD $50 to CAD $20 effective Aug 2025 (federal subsidy). Still only collected leaving PEI.',
    'Canada Strong Pass (Jun 19–Sep 7, 2026) makes every Parks Canada highlight on this itinerary FREE — register in advance.',
    'Open-jaw LGA→YHZ / YYG→LGA is a loss: YYG has no nonstops from NYC, adds $200+ pp and a layover. Keep round-trip YHZ.',
    'Driving from NYC self-drive: 14+ hours each way (via Bangor ME + Saint John ferry or via Quebec). Not viable with a 2- and 5-year-old; fly.',
    'Hannah now requires a full ticket (turned 2 on Jul 1, 2026) — card estimates for a lap infant are outdated.'
  ]
},

/* ========================= AUSTRIA (phase1 rank 5) ========================= */
{
  slug: 'austria',
  name: 'Austria (Vienna + Salzburg + Tyrol)',
  phase1Rank: 5,
  status: 'researched',
  dataCapturedAt: '2026-04-17',
  summary: 'A 3-base Austria trip — Vienna (5n) + Salzburg (4n) + Alpbach/Tyrol (5n) — delivers the family\'s 50/50 urban-nature split almost perfectly. Austrian Airlines flies JFK-VIE nonstop in ~8.5h; ÖBB Railjet Vienna→Salzburg (2.5h, family compartment) removes one of the three hotel-transition drives, leaving a single 1.5h Salzburg→Alpbach hop. Vienna is a genuine heat risk (30-35°C spikes ~15-20% likely in July) but the Tyrol leg at 18-25°C is a guaranteed cool-weather ending. Three transitions and kid-cognitive load at 5+22mo are the real ceiling — best at 8-12, still very good now.',
  flights: {
    summary: 'JFK-VIE on Austrian Airlines nonstop, ~8.5h eastbound / ~10h westbound. Roughly 7 weekly departures in peak summer. Lufthansa and United offer 1-stop via FRA/MUC at meaningful savings. Open-jaw VIE-in/MUC-out saves a 3.5h return drive from Alpbach.',
    origin: 'JFK',
    options: [
      { label: 'Best overall — Austrian nonstop', airline: 'Austrian Airlines (Star Alliance)',
        outbound: { route: 'JFK-VIE', departDate: '2026-07-04', departTime: '6:10 PM', arriveTime: '9:30 AM+1', duration: '8h 20m', layovers: [], notes: 'Evening departure; kids can sleep on the overnight; arrive mid-morning ready for a nap at the apartment.' },
        return:   { route: 'VIE-JFK', departDate: '2026-07-18', departTime: '11:00 AM', arriveTime: '2:30 PM', duration: '~10h 30m', layovers: [], notes: 'Daytime westbound; lands early enough to get kids to bed on ET schedule.' },
        priceUSD: 4100, painLevel: 'low', painReasons: ['6h jet lag', 'Overnight outbound standard transatlantic pattern'],
        bookingWindow: 'Book by late May 2026; Austrian nonstop firms 30-60 days out in summer peak.',
        notes: 'Source: Phase 1 Austria card + Austrian Airlines JFK-VIE route page. ~$1,025/pax x 4. Hannah (turned 2 on Jul 1) needs a full ticket — factored in. Recommended.' },
      { label: 'Cheaper 1-stop via Frankfurt', airline: 'Lufthansa / United',
        outbound: { route: 'JFK-FRA-VIE', departDate: '2026-07-04', departTime: '5:30 PM', arriveTime: '10:30 AM+1', duration: '10h 00m', layovers: ['Frankfurt FRA|90'], notes: 'FRA is well-run; 1h 30m connection is comfortable with kids. Lufthansa kid meals on request.' },
        return:   { route: 'VIE-FRA-JFK', departDate: '2026-07-18', departTime: 'varies (morning)', arriveTime: 'same-day afternoon', duration: '~12h', layovers: ['Frankfurt FRA|90-120'], notes: 'Star Alliance reliability; United miles accrue.' },
        priceUSD: 3600, painLevel: 'medium', painReasons: ['One stop adds ~2h door-to-door', 'Kids tire during connection'],
        bookingWindow: 'Book by mid-May 2026.',
        notes: 'Saves ~$500/family vs Austrian nonstop. Worth it only if budget-tight — the 2-hour door-to-door penalty with two young kids usually isn\'t worth $125/person.' },
      { label: 'Open-jaw (VIE in, MUC out) — scenic return', airline: 'Austrian out / Lufthansa back',
        outbound: { route: 'JFK-VIE', departDate: '2026-07-04', departTime: '6:10 PM', arriveTime: '9:30 AM+1', duration: '8h 20m', layovers: [], notes: 'Same Austrian nonstop outbound.' },
        return:   { route: 'MUC-JFK', departDate: '2026-07-18', departTime: '10:30 AM', arriveTime: '1:30 PM', duration: '~9h 30m', layovers: [], notes: 'Lufthansa nonstop MUC-JFK. Drive from Alpbach to Munich airport is 1h 45m (vs 3.5h back to Vienna).' },
        priceUSD: 4300, painLevel: 'low', painReasons: ['Slight premium over round-trip VIE', 'Munich-airport drive requires crossing German border (no vignette needed if transiting)'],
        bookingWindow: 'Book by mid-May; book both one-ways on Star Alliance or use ITA Matrix.',
        notes: 'Saves 2 hours of driving on departure day — meaningful with tired kids. ~$200 premium over round-trip VIE. Strong option if the 3-base plan stays in place.' }
    ]
  },
  groundTransport: {
    primary: 'ÖBB Railjet Vienna→Salzburg (2.5h, kids-free under 15, family compartment bookable). Pick up a rental car in Salzburg on transfer day and keep it through Alpbach; drop at Vienna airport or Munich airport (if open-jaw). Vienna and Salzburg are fully walkable intra-city — no car needed for the first 9 nights.',
    options: [
      { type: 'train', commentary: 'ÖBB Railjet Vienna Hauptbahnhof → Salzburg Hauptbahnhof, every hour, 2h 22m. Family compartments (6 seats, door-closing) bookable in advance for small surcharge. Kids under 15 free with parent. First-class is affordable (~€50/adult) and gives more space.', kidFactor: 'Excellent — no car seats to wrestle, kids can walk around, bathroom on board, dining car. The single best intercity rail ride on the whole finalists list.' },
      { type: 'car', commentary: 'Pick up automatic SUV at Salzburg Hauptbahnhof (Hertz, Europcar, Sixt all have downtown desks) on day-9 transfer. Keep through Alpbach. ~€80-100/day incl. insurance + €10 Austrian vignette. Return at VIE airport (3.5h drive from Alpbach) or MUC airport (1h 45m, open-jaw option).', kidFactor: 'Need to pre-reserve 2 rear-facing / forward-facing car seats OR bring your own (airlines gate-check free). Bringing own seats is higher certainty.' },
      { type: 'bus', commentary: 'Salzburg\'s Obus (trolleybus) and Vienna\'s U-Bahn/trams cover both cities densely. Wiener Linien 72-hour pass €17.10/adult, kids under 6 always free. Alpbach has a free guest-card shuttle (Alpbachtal Card) that rides local buses + gondolas.', kidFactor: 'Strollers fine on all systems; Vienna metro has elevators at most central stops.' },
      { type: 'walk', commentary: 'Vienna 1st district, Schönbrunn grounds, Salzburg Altstadt, Alpbach village are all flat and stroller-friendly on paved surfaces. Salzburg Altstadt has cobblestones in places — sturdy stroller wheels recommended.', kidFactor: 'High on paved; medium on cobbles.' },
      { type: 'taxi', commentary: 'Uber works in Vienna (via licensed taxis). Salzburg has a local app "Taxi 8111". Alpbach: call ahead via hotel.', kidFactor: 'Car seats by request only — not a default. Use for point-to-point; not a primary system.' }
    ],
    americanDriverFriendly: 'mostly',
    driverNotes: 'Right-side driving like US. Digital motorway vignette required (€10.80 10-day, buy online at asfinag.at before trip). Roundabouts common. A1 Salzburg→Vöcklabruck→Kufstein→Alpbach is a well-maintained motorway. Snow not a concern in July. Pick up car in Salzburg (not Vienna) — saves 3h of VIE-SBG driving you\'d skip by taking the train, and eliminates 2 days of Vienna parking headaches.',
    verdict: 'Train for the first transfer (VIE→SBG), car for the second (SBG→Alpbach). No car at all in Vienna. Open-jaw MUC return saves 1h 45m vs driving back to VIE and is the structurally cleanest plan.'
  },
  itinerary: {
    summary: '3 bases: Vienna (5n) + Salzburg (4n) + Alpbach/Tyrol (5n). Urban anchor → cultural middle → alpine decompression.',
    pacing: 'Deliberately arcs from high-density Vienna to low-density Alpbach so kid fatigue drops as the trip progresses. Vienna heat is pre-empted by booking A/C apartments and front-loading museums in mornings. Afternoon naps are non-negotiable for both kids through day 9. Alpbach is full rest-and-reset.',
    bases: [
      { name: 'Vienna (Schönbrunn district)', nights: 5, arrival: 'Jul 5', departure: 'Jul 10',
        whyThisLong: 'Five nights is the minimum to absorb 6h jet lag AND hit Schönbrunn Palace + Zoo, Prater, inner-city walking, one children\'s museum, and a coffeehouse afternoon without squeezing. Six would be better; we trade a night here to give Tyrol the full 5.',
        sampleDays: [
          { label: 'Day 1 (Jul 5, Sun)', activity: 'Land VIE 9:30 AM; S7 train or taxi to apartment near Schönbrunn; nap; easy afternoon in Schönbrunn gardens + maze playground; early dinner + bed 7pm', pace: 'light' },
          { label: 'Day 2 (Jul 6, Mon)', activity: 'Schönbrunn Palace Kids\' Children\'s Museum (book ahead) morning; Schönbrunn Zoo afternoon (Europe\'s oldest, excellent for both ages)', pace: 'full' },
          { label: 'Day 3 (Jul 7, Tue)', activity: 'Inner city — Stephansdom exterior, Stadtpark playground (Strauss statue), coffeehouse lunch at Café Central, afternoon nap, Naschmarkt early-evening stroll', pace: 'medium' },
          { label: 'Day 4 (Jul 8, Wed)', activity: 'Prater all day — Ringelspiel carousel, Liliputbahn miniature railway, Giant Ferris Wheel; Aqua Gaudi water ride for heat relief; Donauinsel park late afternoon', pace: 'full' },
          { label: 'Day 5 (Jul 9, Thu)', activity: 'ZOOM Children\'s Museum (book ahead) morning; Belvedere gardens picnic (skip interiors); packing afternoon; gelato on Kärntner Straße', pace: 'medium' }
        ] },
      { name: 'Salzburg (Old Town area)', nights: 4, arrival: 'Jul 10', departure: 'Jul 14',
        transitFromPrevious: 'ÖBB Railjet Vienna Hbf 9:30 AM → Salzburg Hbf 11:52 AM (2h 22m, family compartment). Pick up rental car at Salzburg Hbf desks on arrival; drive 10 min to Altstadt lodging. Kids under 15 ride free.',
        whyThisLong: 'Four nights covers Hohensalzburg + Old Town walk + a Hallstatt day trip + one Salzkammergut lake + a DIY Sound of Music afternoon, with a rain buffer. Three would skip the lake day.',
        sampleDays: [
          { label: 'Day 6 (Jul 10, Fri)', activity: 'Arrive ~noon; check in; Mirabell Gardens afternoon (Do-Re-Mi spots — Naomi will love); Getreidegasse dinner; bed', pace: 'light' },
          { label: 'Day 7 (Jul 11, Sat)', activity: 'Funicular up Hohensalzburg Fortress morning (panoramic views, kid-friendly audio tour); Stiegl beer garden lunch; Hellbrunn Palace trick fountains + small zoo afternoon', pace: 'full' },
          { label: 'Day 8 (Jul 12, Sun)', activity: 'Hallstatt day trip — depart 7:30 AM, arrive ~9 AM before tour buses; lakeshore walk, Navia boat ride, Gosau Lakes short family hike. Skip salt mine (Hannah under age-4 cutoff). Back in Salzburg by 6 PM', pace: 'full' },
          { label: 'Day 9 (Jul 13, Mon)', activity: 'Toy Museum (Spielzeugmuseum) morning; Mozart birthplace exterior; playground at Hellbrunner Allee; packing; early dinner near Altstadt', pace: 'light' }
        ] },
      { name: 'Alpbach / Tyrol', nights: 5, arrival: 'Jul 14', departure: 'Jul 19',
        transitFromPrevious: 'Drive Salzburg → Alpbach via A1/A12 motorway, 1h 45m (incl. Austrian vignette). Scenic Inn Valley leg. Stop in Kufstein for lunch if kids need a break.',
        whyThisLong: 'Five nights of pure decompression — gondola-accessed playgrounds, buggy-friendly forest trails, alpine lake swimming, no museums, no city noise. Weather insurance: even in a Vienna heat wave, Alpbach stays 18-25°C.',
        sampleDays: [
          { label: 'Day 10 (Jul 14, Tue)', activity: 'Drive from Salzburg morning; check in Alpbach chalet; village walk in "Austria\'s prettiest village"; playground + early dinner', pace: 'light' },
          { label: 'Day 11 (Jul 15, Wed)', activity: 'Wiedersbergerhornbahn gondola morning to Lauserland mountaintop adventure playground (all ages); picnic lunch; afternoon in chalet / pool', pace: 'medium' },
          { label: 'Day 12 (Jul 16, Thu)', activity: 'Reitherkogelbahn gondola to Juppi\'s Enchanted Forest — buggy-friendly loop trail designed for toddlers and strollers; zip-lining and tree-house activities', pace: 'medium' },
          { label: 'Day 13 (Jul 17, Fri)', activity: 'Reintalersee swimming lake (10 min drive from Alpbach) — shallow, warm, sandy shore; OR drive 45 min to Achensee for bigger-lake boat ride', pace: 'light' },
          { label: 'Day 14 (Jul 18, Sat)', activity: 'Easy valley hike (Alpbach village → forest loop ~3km stroller-friendly); farewell Kaiserschmarrn lunch; early dinner; pack', pace: 'light' }
        ] }
    ],
    alternativeStructure: 'Alt A (simpler, 2-base): Vienna 7n + Alpbach 7n — drop Salzburg, rent a car for one day to Hallstatt from Alpbach instead. Removes one hotel transition. Alt B (splits the risk differently): Salzburg 5n + Alpbach 9n — skip Vienna entirely if kid-cognitive-load concerns dominate. Alt C: Add Hallstatt as a 2-night overnight stop between Salzburg and Alpbach — only if 4-base plan doesn\'t feel crazy (it does).'
  },
  lodging: [
    { base: 'Vienna', nights: 5, options: [
      { name: 'H2 Hotel Wien Schönbrunn', type: 'hotel', tier: 'mid', priceUSDperNight: 220, bedroomConfig: 'Family quad room with bunk beds',
        kidFriendly: 'Purpose-built for families; walking distance to Schönbrunn Palace; A/C (essential for July heat)', notes: 'Opened March 2024, modern, excellent family inventory. Best mid-tier option near Schönbrunn.', url: 'https://www.h-hotels.com/en/h2/hotels/h2-hotel-wien-schoenbrunn' },
      { name: 'Vienna Stay Apartments Schönbrunn', type: 'aparthotel', tier: 'mid', priceUSDperNight: 260, bedroomConfig: '2BR apartment, sleeps 4, full kitchen, washing machine',
        kidFriendly: 'Kitchen for breakfast + toddler snacks; A/C; 18-min walk to palace', notes: '5-star apartments, rated 8.4. Sweet spot of space + amenities + modern finishes.', url: 'https://www.viennastay.com/' },
      { name: 'Austria Trend Parkhotel Schönbrunn', type: 'hotel', tier: 'budget', priceUSDperNight: 175, bedroomConfig: 'Family room, 2 doubles or 1 double + 2 twins',
        kidFriendly: 'Classic property, well-maintained, 10-min walk to palace; A/C', notes: 'Budget-friendly; older property but clean; good for families not bothered by dated decor.', url: 'https://www.austria-trend.at/en/hotels/parkhotel-schoenbrunn' },
      { name: 'Airbnb 2BR in 6th/7th district', type: 'airbnb', tier: 'mid', priceUSDperNight: 200, bedroomConfig: '2BR flat, sleeps 4-5',
        kidFriendly: 'Neighborhood immersion; kitchen; filter for A/C (not universal in Vienna)', notes: 'Filter for Superhost, 4.8+, A/C confirmed. Older buildings often 3-4 flights up with no elevator — confirm elevator before booking.', url: 'https://www.airbnb.com/vienna-austria/stays' },
      { name: 'Hotel Sacher Wien (splurge)', type: 'hotel', tier: 'premium', priceUSDperNight: 720, bedroomConfig: 'Junior suite / connecting rooms',
        kidFriendly: 'Classic Viennese grandeur; central Ringstraße location; full concierge; Sacher torte afternoon included', notes: 'Splurge option — not recommended for 5 nights at this price but worth one night if you want the experience.', url: 'https://www.sacher.com/en/hotels/vienna/' }
    ] },
    { base: 'Salzburg', nights: 4, options: [
      { name: 'Arthotel Blaue Gans', type: 'hotel', tier: 'mid', priceUSDperNight: 265, bedroomConfig: 'Family room, 1 double + 2 singles',
        kidFriendly: 'Central Altstadt location (Getreidegasse), historic building with modern art-forward interiors; A/C', notes: 'Walking distance to Hohensalzburg funicular, Mozart\'s birthplace, Mirabell Gardens. Rose-friendly aesthetic.', url: 'https://www.blauegans.at/en' },
      { name: 'MEININGER Hotel Salzburg City Center', type: 'hotel', tier: 'budget', priceUSDperNight: 160, bedroomConfig: 'Family quad room, 4 beds, private bath',
        kidFriendly: 'Purpose-built family/budget chain; near Salzburg Hbf; elevator; clean and modern', notes: 'Basic but reliable. Same chain as in Copenhagen. 15 min walk or 5 min bus to Altstadt.', url: 'https://www.meininger-hotels.com/en/hotels/salzburg/city-center/' },
      { name: '2BR Airbnb in Altstadt or Leopoldskron', type: 'airbnb', tier: 'mid', priceUSDperNight: 215, bedroomConfig: '2BR apartment, sleeps 4, full kitchen, washing machine',
        kidFriendly: 'Space to spread out after 5 nights in hotel; kitchen for family meals; local feel', notes: 'Salzburg Airbnbs average 4.8/5. Filter for recent renovation + washing machine + A/C. Leopoldskron neighborhood has Sound of Music filming locations.', url: 'https://www.airbnb.com/salzburg-austria/stays' },
      { name: 'Hotel Sacher Salzburg', type: 'hotel', tier: 'premium', priceUSDperNight: 620, bedroomConfig: 'Family suite or connecting rooms, Salzach River views',
        kidFriendly: 'Grand old-world hotel; heated pool; central; concierge help with Hallstatt logistics', notes: 'Premium splurge. Kids welcomed — this chain has 150+ years of family-travel DNA.', url: 'https://www.sacher.com/en/hotels/salzburg/' }
    ] },
    { base: 'Alpbach', nights: 5, options: [
      { name: 'Chalet Waschküchl', type: 'airbnb', tier: 'premium', priceUSDperNight: 340, bedroomConfig: 'Two elegant flats, modern kitchen, dishwasher, Nespresso, sleeps 5',
        kidFriendly: 'Traditional Tyrolean wood exterior + modern interior; quiet village setting; balcony with mountain views', notes: 'Rose-friendly finishes. Book through Alpbachtal.at or direct. Alpbach\'s strict architectural code means even new builds look traditional.', url: 'https://www.alpbachtal.at/en/accommodation' },
      { name: 'Alpbach Juwel', type: 'apartment', tier: 'premium', priceUSDperNight: 310, bedroomConfig: '2BR family apartment, south-facing balcony, private sauna option',
        kidFriendly: 'Full kitchen; washing machine; mountain views; 5 min walk to gondola', notes: 'Excellent modern 2-bedroom in core village. Mountain views from every window.', url: 'https://www.alpbachtal.at/en/accommodation' },
      { name: 'Hotel Post Alpbach', type: 'hotel', tier: 'mid', priceUSDperNight: 240, bedroomConfig: 'Family room with separate kids\' alcove',
        kidFriendly: 'Central village square; traditional Gasthof with modern rooms; restaurant on-site; indoor pool', notes: 'Hotel-style convenience if you don\'t want to self-cater. Half-board available.', url: 'https://www.hotel-post-alpbach.at/en/' },
      { name: 'Alpbach apartments in Reith', type: 'apartment', tier: 'budget', priceUSDperNight: 165, bedroomConfig: '2BR apartment in next-village-over (Reith im Alpbachtal)',
        kidFriendly: 'Garden; mountain views; balcony; free Alpbachtal Card (gondolas + bus + pool included)', notes: 'Reith is 5 min drive from Alpbach village — identical valley access, ~30% cheaper. Alpbachtal Card is a genuine value-multiplier.', url: 'https://www.alpbachtal.at/en/accommodation/search' }
    ] }
  ],
  logistics: [
    { category: 'Vienna heat mitigation', note: 'July avg high 26-27°C (79°F) but 30-35°C spikes ~4x per summer. Book A/C apartments (not universal in Vienna). Front-load morning activities; nap during peak heat (2-5 PM); use air-conditioned museums (ZOOM, Schönbrunn interiors) as backup.' },
    { category: 'Alpbachtal Card', note: 'Included free with all Alpbach accommodations. Covers all gondolas, buses, swimming pools, museums. Worth ~€200/family over 5 days. Essential value-add.' },
    { category: 'Austrian vignette', note: 'Digital motorway toll sticker required. €10.80 for 10-day pass, buy online at asfinag.at before pickup. Paper vignettes also sold at gas stations near border.' },
    { category: 'ÖBB train booking', note: 'Book Railjet VIE-SBG 2-8 weeks ahead at oebb.at. Sparschiene fares from €19/adult. Family compartment reservation extra €4. Kids under 15 free with parent.' },
    { category: 'Language', note: 'German, but English is near-universal in tourism, hotels, restaurants, and transit. Zero friction for this itinerary.' },
    { category: 'Time zone', note: 'UTC+2 (CEST), 6h ahead of NYC. Moderate jet lag. Eastbound harder on night 1; westbound harder on the full post-trip week.' },
    { category: 'Hannah\'s seat', note: 'Turned 2 on Jul 1 — full ticket required on all flights. Factored into $4,100 RT estimate.' },
    { category: 'Car seats', note: 'Bring your own (airlines gate-check free) — more certain than rental-agency child seat reservations, which sometimes fall through. Rental agency option as backup, reserve 2+ weeks ahead.' },
    { category: 'Hallstatt strategy', note: 'Leave Salzburg by 7:30 AM to arrive 9 AM and beat tour-bus crowds. By 11 AM, village is mobbed. Do lake walk + boat ride + short Gosau Lakes hike; skip salt mine (Hannah under 4 cutoff).' },
    { category: 'TBE vaccination', note: 'Tick-borne encephalitis is endemic in Austrian forests. If doing the alpine valley hike, tuck pants into socks, do tick checks after, or discuss TBE vaccination with pediatrician (3-dose series, start 3+ months ahead — likely too late for July 2026).' },
    { category: 'Free admissions', note: 'Under-19s get free entry to all Austrian federal museums. Kids under 6 ride Vienna public transit free. Alpbachtal Card covers gondolas.' },
    { category: 'Medical', note: 'Excellent. English-speaking pediatricians in Vienna, Salzburg, and Innsbruck. Travel insurance still recommended — Austrian healthcare isn\'t free for visitors.' },
    { category: 'Food kid-fit', note: 'Highly kid-friendly cuisine (schnitzel, strudel, Kaiserschmarrn, bratwurst, dumplings). Highchairs universal. Zero dietary adjustment needed.' }
  ],
  updatedScore: {
    total: 43.25, previousTotal: 42.75, delta: 0.5,
    changes: [
      { category: 'Stress', from: 4.0, to: 4.25, reason: 'ÖBB Railjet family compartment makes the Vienna→Salzburg transit genuinely relaxing — no car, no driver stress, kids roam the cabin. Offsets some of the 3-base concern.' },
      { category: 'Cost', from: 3.0, to: 3.0, reason: 'Unchanged. Live Phase 1 estimate of $11,000-13,000 family of 4 holds up. Austrian nonstop $4,100 + mid-range lodging + modest activities.' },
      { category: 'Accommodations', from: 4.5, to: 4.5, reason: 'Unchanged — strong modern inventory confirmed across all 3 bases.' }
    ],
    recommendation: 'strong',
    summary: 'Moves up half a point to 43.25/52.5. The big Phase 2 finding is that ÖBB Railjet makes one of the three "hotel transitions" feel like a fun train ride instead of a travel day, closing much of the 3-base stress gap. Still below the Scandinavian top tier but a genuine strong-recommend — especially appealing if urban-culture weight is high.'
  },
  risks: [
    { name: 'Central European heat wave', detail: 'Vienna had 4 heat waves in summer 2024; 30-35°C multi-day spells are now ~15-20% probable in a 2-week July window. A sustained 35°C+ spell could confine indoor activities for 2-3 Vienna days. Mitigation: front-load Vienna (days 1-5), A/C lodging non-negotiable, Tyrol leg guarantees cool escape.', severity: 'medium' },
    { name: 'Salzburg rain (17 rain-days avg in July)', detail: 'Rainiest leg of the trip. Expect at least one full rain day in 4 nights. Mitigation: Haus der Natur science museum, Toy Museum, Hohensalzburg (funicular covered), Sacher café.', severity: 'low' },
    { name: 'Alpine thunderstorms in Tyrol', detail: 'July 2025 was Austria\'s wettest July since 2012 (+42% rainfall). Afternoon storms can close gondolas for a day. Mitigation: front-load gondola mornings (before 1 PM); indoor pool at hotel; chalet Netflix days.', severity: 'low' },
    { name: 'Three hotel transitions', detail: 'Rubric prefers 2. Mitigation: ÖBB Railjet makes the first transition genuinely pleasant; the second (Salzburg→Alpbach) is a short 1h 45m drive. Net cognitive load ~same as 2-base trips with a day-trip structure.', severity: 'low' },
    { name: 'Hallstatt crowding', detail: 'Peak July tour-bus volume turns the village into a squeeze by 11 AM. Mitigation: 7:30 AM depart from Salzburg, out by noon. Or skip — the Wolfgangsee and Fuschlsee lakes offer similar scenery without crowds.', severity: 'low' },
    { name: 'Hannah excluded from Hallstatt salt mine', detail: 'Age 4+ minimum. Naomi (5) can do it, Hannah cannot. Split-shift parent coverage required, or skip the salt mine entirely (lake day still delivers).', severity: 'low' },
    { name: 'Open-jaw MUC return pricing surprise', detail: 'MUC return fare sometimes spikes above VIE by $300+ close to departure. Check both options at booking time; don\'t assume $200 premium holds.', severity: 'low' }
  ],
  specialFindings: [
    'ÖBB Railjet Vienna→Salzburg (2h 22m, family compartment) is the single-best intercity rail segment on the finalists list — converts one "hotel transition" into a cheap, relaxing experience rather than a logistics day.',
    'Open-jaw VIE-in/MUC-out saves 1h 45m of driving on departure day vs round-trip VIE (Alpbach→MUC is 1h 45m; Alpbach→VIE is 3.5h). ~$200 family-of-4 premium, usually worth it.',
    'Vienna A/C is NOT universal in older apartments — filter explicitly. July heat spikes make this non-negotiable in 2026.',
    'Alpbachtal Card (free with accommodation) includes gondolas, buses, pools, museums — ~€200/family of value over 5 days in Tyrol.',
    'Hallstatt salt mine excludes Hannah (age 4+ minimum). Not a trip-ruiner but worth knowing before sinking a full day.',
    'The 3-base plan (5+4+5) leaves one decent Hallstatt day trip from Salzburg rather than trying to fit Salzkammergut into Alpbach or Vienna.',
    'TBE vaccination is a meaningful consideration if doing alpine-valley hikes. 3-dose series takes months to complete — likely too late for July 2026; stick to cleared trails + tick checks.',
    'Under-19s get FREE entry to all Austrian federal museums (Kunsthistorisches, Albertina, Belvedere, etc.). Kids under 6 ride Vienna transit free. Real savings over 14 days.',
    'Austria scores below the Scandinavian top 3 on weather (Vienna heat risk) and stress (3 bases) but above them on cost (~$11-13k vs $13-14k) and cultural depth for Naomi.'
  ]
},

/* ========================= SPAIN NORTH (phase1 rank 10) ========================= */
{
    slug: 'spain-north',
    name: 'Spain — North Coast (Asturias + Basque)',
    phase1Rank: 10,
    status: 'researched',
    dataCapturedAt: '2026-04-16',
    summary: 'Josh\'s hypothesis holds up with a meaningful caveat: logistics work cleanly as a Bilbao-in/Bilbao-out loop using a rental car for the Asturias leg and buses inside the Basque Country. The FEVE coastal rail is a nostalgia train, not a practical family mover (Bilbao→Oviedo is a 7-8h trek with transfer; bus is 3.5h). Recommended structure is 3 bases (Asturias 5n + Bilbao 3n + San Sebastián 5n) flying United nonstop EWR-BIO, picking up a rental at the airport and returning it to the same airport via Bilbao, then busing to SS.',
    flights: {
      summary: 'EWR → BIO United nonstop 7h30m (summer 2026 new route, Wed/Fri/Sat/Sun). Round-trip Jul 4 → Jul 17 is the cleanest window; Jul 4 → Jul 19 extends to 15 nights. Nonstop unlocks this destination vs. Phase 1\'s assumed open-jaw via MAD.',
      origin: 'EWR (United nonstop) or JFK (1-stop via MAD)',
      options: [
        {
          label: 'Best overall — United nonstop EWR-BIO',
          airline: 'United',
          outbound: {
            route: 'EWR → BIO',
            departDate: 'Jul 4, 2026 (Sat)',
            departTime: '9:15 PM',
            arriveTime: '10:45 AM+1 (CEST)',
            duration: '7h 30m',
            layovers: [],
            notes: 'Brand-new summer 2026 route launched May 30, 2026. Boeing 757. Late-evening departure but not a red-eye start (9:15 PM is civilized); arrival 10:45 AM local is ideal — lunch, check in, nap. This is the single biggest logistical upgrade over Phase 1\'s assumption of Madrid connections.'
          },
          return: {
            route: 'BIO → EWR',
            departDate: 'Jul 17, 2026 (Fri)',
            departTime: '~12:30 PM (typical United schedule)',
            arriveTime: '~3:30 PM (ET)',
            duration: '~9h',
            layovers: [],
            notes: 'Returns Fri Jul 17, arriving same-day afternoon. Gives a full weekend buffer before Mon Jul 20. Trip becomes 13 nights (vs. target 14).'
          },
          priceUSD: 5324,
          painLevel: 'low',
          painReasons: ['late departure', '13 nights instead of 14'],
          bookingWindow: 'Book by mid-May 2026; inaugural-summer nonstop has limited capacity (4x/week) and is filling.',
          notes: 'Family of 4 @ $1,331/pax per Google Flights 2026-04-16. Hannah under 2 through July 1 — past her birthday, full fare required. No lap-infant discount available.'
        },
        {
          label: 'Extended 15-night nonstop',
          airline: 'United',
          outbound: {
            route: 'EWR → BIO',
            departDate: 'Jul 4, 2026 (Sat)',
            departTime: '9:15 PM',
            arriveTime: '10:45 AM+1',
            duration: '7h 30m',
            layovers: [],
            notes: 'Same outbound as best option.'
          },
          return: {
            route: 'BIO → EWR',
            departDate: 'Jul 19, 2026 (Sun)',
            departTime: '~12:30 PM',
            arriveTime: '~3:30 PM',
            duration: '~9h',
            layovers: [],
            notes: 'Sunday return — still gives one weekday buffer before Mon Jul 20. 15 nights total.'
          },
          priceUSD: 5876,
          painLevel: 'low',
          painReasons: ['returns Sunday — tighter pre-Monday buffer'],
          bookingWindow: 'Same as primary option.',
          notes: 'Family of 4 @ $1,469/pax. Extra $552 buys 2 more nights — good value if itinerary wants a slower Asturias phase.'
        },
        {
          label: 'Painful-but-cheap (JFK 1-stop via Barcelona)',
          airline: 'LEVEL / Vueling',
          outbound: {
            route: 'JFK → BCN → BIO',
            departDate: 'Jul 4, 2026',
            departTime: '11:25 PM',
            arriveTime: '5:55 PM+1',
            duration: '12h 30m',
            layovers: ['BCN|3h 20m'],
            notes: 'Red-eye JFK departure, but BCN layover is only 3h20m (manageable). LEVEL is Iberia\'s long-haul low-cost — budget feel; fees for bags/seats extra.'
          },
          return: {
            route: 'BIO → BCN → JFK',
            departDate: 'Jul 18, 2026',
            departTime: 'afternoon',
            arriveTime: 'late evening',
            duration: '~12h',
            layovers: ['BCN|~3h'],
            notes: 'Afternoon/evening return — tiring day.'
          },
          priceUSD: 4024,
          painLevel: 'high',
          painReasons: ['red-eye outbound', '1 stop', 'low-cost carrier with extra fees', '12h total'],
          bookingWindow: 'Prices volatile; book by May 15.',
          notes: 'Family of 4 @ $1,006/pax per Google Flights 2026-04-16. Saves ~$1,300 vs. United nonstop but the red-eye is a real cost with Hannah just turning 2.'
        }
      ]
    },
    groundTransport: {
      primary: 'Rental car from BIO airport for 9-10 days (Asturias + return to Bilbao), then ALSA/PESA bus Bilbao→San Sebastián (1h10m, $10/pp) for the final base. Return car at BIO airport before busing east.',
      options: [
        { type: 'car', commentary: 'Essential for Asturias. BIO airport pickup avoids downtown Bilbao traffic. A-8 motorway runs the full coast Bilbao↔Oviedo (2h15m), mostly toll-free. Picos de Europa access (Cangas de Onís, Fuente Dé, Llanes) requires a car — no practical public transit. Covadonga lakes shuttle from Cangas, Jun 1-Oct 18, €1.55 one-way, every 30 min — private cars banned in season.', kidFactor: 'Installed car seats via rental company ($8-12/day each) or bring own. A-8 is modern, well-signed, easy for American drivers. Mountain roads to Fuente Dé narrow but not dangerous.' },
        { type: 'bus', commentary: 'ALSA and PESA run Bilbao↔San Sebastián every 30-60 min; fastest 1h10m, ~$10-16/pp. ALSA Oviedo↔Bilbao 3h30m-4h30m, ~$25-55/pp, 5x/day. Intermodal terminals in both cities. This is the no-car alternative if you want to skip driving.', kidFactor: 'Modern coaches with WiFi, bathrooms, AC. Reserved seats. Much easier than FEVE train for tired kids on transit days.' },
        { type: 'train', commentary: 'FEVE (Renfe Cercanías AM) narrow-gauge Bilbao↔Santander↔Oviedo is notoriously slow: Santander→Oviedo ~5-6h (not the 82-minute local Moovit figure, which is only a short segment), Santander→Bilbao 3h10m. No direct Bilbao↔Oviedo; requires transfer at Santander with long wait. Free until 2026 while new rolling stock is delivered, but equipment is aging (series 433/435). Bilbao↔San Sebastián by Euskotren takes 2h40m-3h15m with transfer. Scenic but brutal with a 22-month-old. Skip for transit; consider a single short FEVE hop (e.g., Santander→Llanes ~2h) as a nostalgia experience only.', kidFactor: 'Aging trains, overhead storage limited, no reserved seating on FEVE, frequent stops. Not the way to move a tired family.' },
        { type: 'walk', commentary: 'Oviedo, Bilbao, and San Sebastián old towns all walkable and compact. La Concha promenade is flat and stroller-perfect.', kidFactor: 'Excellent — main zones largely pedestrianized.' },
        { type: 'taxi', commentary: 'Cheap and plentiful in all three cities. BIO airport to downtown Bilbao ~€25. Uber has limited presence; use Free Now or local taxi apps.', kidFactor: 'Car seats not standard — request in advance or use carry-on boosters (legal on the lap in taxis for short trips).' }
      ],
      americanDriverFriendly: 'yes',
      driverNotes: 'Right-hand-side driving like the US; road signs in Spanish (Basque signage is bilingual). International Driving Permit required by law but rarely checked. Tolls mostly absent on A-8 (Autovía del Cantábrico is free); some tolled tunnels. Diesel vs petrol pumps clearly labeled (Gasóleo = diesel; Gasolina = petrol) — misfueling is a real risk, double-check at pump. Narrow mountain roads in Picos require attention but are not technical. Parking: avoid driving into Parte Vieja in San Sebastián (resident-only); use Parking Boulevard or La Concha (€22/day max). Bilbao Casco Viejo similar — park at hotel or public lot. Oviedo has cheap underground lots.',
      verdict: 'Rent at BIO airport for 10 days, drive the Asturias loop, drop at BIO, bus to San Sebastián. Total transport cost ~$750 (car + tolls + fuel + parking) vs. ~$200 for buses-only, but buses-only forfeits Picos de Europa which is the trip\'s #1 attraction. Car is worth it.'
    },
    itinerary: {
      summary: '3 bases: Cangas de Onís / Picos base (5n) + Bilbao (3n) + San Sebastián (5n). Total 13 nights on the nonstop schedule.',
      pacing: 'Moderate. Asturias phase is the most active (mountain day, bike trail, dinosaur museum, beaches) but based out of one rural hotel. Bilbao is urban and relaxed (Guggenheim + Casco Viejo). San Sebastián is a flex base with beach mornings, pintxos evenings, and optional day trips. Two transit days (Bilbao→Asturias by car day 2; return to Bilbao day 7) — each ~2.5h drive with a lunch stop.',
      bases: [
        {
          name: 'Cangas de Onís / Picos de Europa (Asturias)',
          nights: 5,
          arrival: 'Jul 5',
          departure: 'Jul 10',
          whyThisLong: 'Picos de Europa is the trip\'s defining highlight and requires multiple days of good weather. 5 nights gives flexibility to pick the clear day for Fuente Dé cable car, a bear-trail cycling day, a dinosaur-coast day, and coastal beaches at Llanes — plus one rest/rain day. Jet lag recovery is better in a rural quiet base than an urban one.',
          transitFromPrevious: 'Pick up rental car at BIO airport Jul 5 morning. Drive A-8 west to Cangas de Onís (~2h15m). Stop in Castro Urdiales or Santillana del Mar for lunch if energy allows.',
          sampleDays: [
            { label: 'Day 1 (Jul 4)', activity: 'EWR 9:15 PM nonstop; sleep on plane.', pace: 'light' },
            { label: 'Day 2 (Jul 5)', activity: 'Land BIO 10:45 AM. Rental car pickup. Drive A-8 west ~2h15m. Arrive Cangas by 3 PM. Light walk, early dinner, crash.', pace: 'medium' },
            { label: 'Day 3 (Jul 6)', activity: 'Covadonga sanctuary + lakes (shuttle bus from Cangas, €1.55). Easy lake loop walk. Home by 4 PM.', pace: 'medium' },
            { label: 'Day 4 (Jul 7)', activity: 'Fuente Dé cable car (drive 1h15m; kids under 5 free, 12-and-under €4 one-way). 45-min gravel walk at 1,823m to Horcadina de Covarrobres. Picnic at top. Drive back.', pace: 'full' },
            { label: 'Day 5 (Jul 8)', activity: 'Senda del Oso bear trail cycling (bike + child trailer rental, ~11km easy family section). See Paca the rescued bear at Proaza enclosure.', pace: 'medium' },
            { label: 'Day 6 (Jul 9)', activity: 'Llanes: Paseo de San Pedro cliff walk, Playa de Poo lagoon (shallow, safe for Hannah), Gulpiyuri world\'s-smallest-beach curiosity. Lunch in old town.', pace: 'medium' },
            { label: 'Day 7 (Jul 10)', activity: 'Morning: MUJA dinosaur museum (Colunga, 1h drive) — life-size dinos, kid workshops. Afternoon: drive back to Bilbao (2h15m). Drop car at BIO airport. Taxi/Metro to hotel.', pace: 'full' }
          ]
        },
        {
          name: 'Bilbao',
          nights: 3,
          arrival: 'Jul 10',
          departure: 'Jul 13',
          whyThisLong: 'Bilbao is a great city but 3 nights is enough: Guggenheim (half day), Casco Viejo + Artxanda funicular (half day), Mercado de la Ribera + riverwalk (half day), and one slow day. More would be padding; less would feel rushed.',
          transitFromPrevious: 'Car drop at BIO airport (~10 min from rental return); taxi into Bilbao ~€25 / 20 min. Or Bizkaibus A3247 €3/pp.',
          sampleDays: [
            { label: 'Day 8 (Jul 11)', activity: 'Guggenheim morning (under-12 free, Jeff Koons Puppy outside; family "Baby Art" 2+). Playground behind museum. Lunch along ria.', pace: 'medium' },
            { label: 'Day 9 (Jul 12)', activity: 'Casco Viejo: Mercado de la Ribera, Plaza Nueva arcades. Artxanda funicular (3 min cable car, panoramic views — thrill for Naomi).', pace: 'light' },
            { label: 'Day 10 (Jul 13)', activity: 'Slow morning. Check out. Bus or train to San Sebastián (ALSA 1h10m, ~$10/pp). Arrive, settle, walk La Concha.', pace: 'light' }
          ]
        },
        {
          name: 'San Sebastián',
          nights: 5,
          arrival: 'Jul 13',
          departure: 'Jul 17',
          whyThisLong: 'World-class food culture, beaches as stress-reliever, optional Flysch Route and Getaria day trips, Eureka! science museum rainy-day backup. 5 nights lets the rhythm settle — beach mornings, siesta, pintxos evenings — without forcing daily excursions.',
          transitFromPrevious: 'ALSA/PESA bus Bilbao Intermodal → SS Plaza Pío XII 1h10m-1h20m, ~$10-16/pp. Walk or taxi to apartment.',
          sampleDays: [
            { label: 'Day 11 (Jul 14)', activity: 'La Concha beach morning (calm, shallow bay). Monte Igueldo vintage funicular + amusement park afternoon. Pintxos dinner in Gros (Bar Bergara).', pace: 'medium' },
            { label: 'Day 12 (Jul 15)', activity: 'Eureka! science museum (178 interactive exhibits, 3-5h easily). Ondarreta beach playground late afternoon.', pace: 'medium' },
            { label: 'Day 13 (Jul 16)', activity: 'Day trip: Getaria (25 min bus) fishing village, grilled fish lunch. Or Zumaia Flysch boat trip. Evening pintxos in Parte Vieja (go 6-7:30 PM to beat crush).', pace: 'medium' },
            { label: 'Day 14 (Jul 17)', activity: 'Morning: Aquarium Donostia + Monte Urgull walk. Pack. Bus BIO airport (1h30m via ALSA direct from SS bus station, hourly). United nonstop EWR 12:30 PM → arrive JFK area 3:30 PM.', pace: 'full' }
          ]
        }
      ],
      alternativeStructure: '2-base variant: skip Bilbao as a base, treat it as a Picos→SS transit-day stop (Guggenheim + lunch, then bus east). Gives 6n Asturias + 7n San Sebastián. Loses Artxanda funicular and a proper Bilbao evening, but saves one hotel transition. Viable if Rose wants fewer moves.'
    },
    lodging: [
      {
        base: 'Cangas de Onís / Picos',
        nights: 5,
        options: [
          { name: 'Hotel Mirador de la Cepada', type: 'hotel', tier: 'mid', priceUSDperNight: 165, bedroomConfig: 'Family room, sleeps 4', kidFriendly: 'Free parking, mountain views, 9.2/10 on Booking, walking distance to Cangas center.', notes: 'Booking.com undated "from $130/night"; peak July family room ~$160-180. Clean, modern, reliable.', url: 'https://www.booking.com/hotel/es/mirador-de-la-cepada-cangas-de-onis.html' },
          { name: 'Hotel Rural Entremontes (Corao)', type: 'hotel', tier: 'budget', priceUSDperNight: 110, bedroomConfig: 'Family room, sleeps 4', kidFriendly: 'Traditional Asturian country house 5km from Cangas; rural setting, 9.4/10 on Booking.', notes: '"From $77/night" undated; peak July ~$100-130. Best-reviewed budget option in area.', url: 'https://www.booking.com/hotel/es/rural-entremontes.html' },
          { name: 'Parador de Cangas de Onís', type: 'hotel', tier: 'premium', priceUSDperNight: 310, bedroomConfig: '2-room family suite option', kidFriendly: 'Government-run historic monastery hotel on the Sella river; playground, pool, grand setting.', notes: 'Iconic Parador experience. Premium but unforgettable for a family anchor.', url: 'https://paradores.es/en/parador-de-cangas-de-onis' },
          { name: 'Vrbo / Airbnb rural farmhouse', type: 'airbnb', tier: 'mid', priceUSDperNight: 180, bedroomConfig: '2-3BR, full kitchen', kidFriendly: 'Space for kids to run; cook breakfasts; animals on some farms.', notes: 'Filter for recent renovation and 4.8+ reviews. Rose-sensitive to dated decor — vet carefully.', url: 'https://www.vrbo.com/vacation-rentals/europe/spain/asturias' }
        ]
      },
      {
        base: 'Bilbao',
        nights: 3,
        options: [
          { name: 'Catalonia Gran Vía Bilbao', type: 'hotel', tier: 'mid', priceUSDperNight: 200, bedroomConfig: 'Family room with sofa bed, sleeps 4', kidFriendly: 'Central Ensanche location, pool, breakfast buffet, 9.1/10 Booking.', notes: '"From $142/night" undated; peak July ~$190-220. Modern, reliable chain.', url: 'https://www.booking.com/hotel/es/cataloniagranvia-bilbao.html' },
          { name: 'Hotel Tayko Bilbao', type: 'hotel', tier: 'premium', priceUSDperNight: 290, bedroomConfig: 'Junior suite sleeps 4', kidFriendly: 'Casco Viejo location in restored 1924 building; walkable to everything; 9.1/10.', notes: '"From $240/night" undated; peak July ~$280-330. Atmospheric old-town base.', url: 'https://www.booking.com/hotel/es/tayko-bilbao.html' },
          { name: 'Gran Hotel Domine Bilbao', type: 'hotel', tier: 'premium', priceUSDperNight: 380, bedroomConfig: 'Family room, sleeps 4', kidFriendly: 'Faces Guggenheim directly; rooftop terrace; Philippe Starck design.', notes: 'Landmark splurge — walk across street to Guggenheim each day. ~$350-420 peak.', url: 'https://www.hoteldominebilbao.com/' },
          { name: 'Apartment in Abando (Booking / Airbnb)', type: 'apartment', tier: 'mid', priceUSDperNight: 180, bedroomConfig: '2BR, full kitchen, washer', kidFriendly: 'More space than hotel room; cook breakfasts.', notes: 'Plenty of modern 2BR stock in Abando/Indautxu. ~$170-220 peak July.', url: 'https://www.booking.com/city/es/bilbao.html' }
        ]
      },
      {
        base: 'San Sebastián',
        nights: 5,
        options: [
          { name: 'Apartment in Gros neighborhood (Booking / Airbnb)', type: 'apartment', tier: 'mid', priceUSDperNight: 280, bedroomConfig: '2BR, AC, washer, kitchen', kidFriendly: 'Modern renovated stock; flat streets; 10-min flat walk to Parte Vieja; near Zurriola beach.', notes: 'Gros is the best family neighborhood. Peak July $260-320 for quality 2BR. Book by mid-May.', url: 'https://www.booking.com/district/es/donostia-san-sebastian/gros.html' },
          { name: 'Hotel Tres Reyes San Sebastián', type: 'hotel', tier: 'mid', priceUSDperNight: 220, bedroomConfig: 'Family room sleeps 4', kidFriendly: 'Fitness center, parking, garden, 9.0/10 Booking. 3.5mi from Victoria Eugenia Theater (not center — check location fit).', notes: '"From $134/night" undated; peak July ~$200-250.', url: 'https://www.booking.com/hotel/es/tres-reyes-san-sebastian.html' },
          { name: 'Catalonia Donosti', type: 'hotel', tier: 'mid', priceUSDperNight: 230, bedroomConfig: 'Family room, sleeps 4', kidFriendly: 'City-center, pool, 9.1/10 Booking, walkable everywhere.', notes: '"From $165/night" undated; peak July ~$220-270. Solid central option.', url: 'https://www.booking.com/hotel/es/catalonia-donosti.html' },
          { name: 'Hotel Arima & Spa (Small Luxury Hotels)', type: 'hotel', tier: 'premium', priceUSDperNight: 420, bedroomConfig: 'Family suite', kidFriendly: 'Scandinavian-style, pool, spa; in tech park — needs taxi to center (drawback with kids).', notes: '"From $358/night" undated; peak July ~$400-480. Splurge option; location trade-off.', url: 'https://www.booking.com/hotel/es/arima.html' }
        ]
      }
    ],
    logistics: [
      { category: 'Airport transfer BIO', note: 'Bizkaibus A3247 to city center: every 15 min, 20 min ride, €3/pp. Taxi €25-30. Both work with luggage + kids.' },
      { category: 'Car rental', note: 'Bilbao Airport pickup Jul 5 morning. SIXT, Hertz, Europcar all on-site. Expect $45-65/day for compact SUV (Kia Sportage / Peugeot 3008 class), total $550-750 for 9 days including CDW. Request 2 car seats ($8-12/day each). Return same-airport avoids one-way fee (~€100 if dropping elsewhere).' },
      { category: 'Driving fuel / tolls', note: 'A-8 Autovía del Cantábrico is toll-free. Total driving ~700km round-trip; gasoline ~€80-100 for the loop.' },
      { category: 'Covadonga access', note: 'Private cars banned Jun 1 – Oct 18. Mandatory shuttle bus from Cangas, El Repelao, Muñigo, or El Bosque parking. Runs 7:40 AM – 8 PM every 30 min. €1.55 one-way, kids under 12 free. Arrive before 10 AM or after 4 PM to avoid queue.' },
      { category: 'Fuente Dé cable car', note: '4-minute ride, 753m elevation gain. Kids under 5 free; 5-12 €4 one-way / €6 return; adults €13 return. Numbered-ticket queue system — get number and come back when displayed.' },
      { category: 'Picos with Hannah (22-24 months)', note: 'Cable car: fine (cabin ride). Top-station walk to Horcadina de Covarrobres: 45 min each way on gravel, carrier required. Cares Gorge: NOT suitable — steep drops, no guardrails. Senda del Oso cycling: excellent with child trailer rental.' },
      { category: 'Bilbao → San Sebastián bus', note: 'ALSA and PESA (now both operating). 1h10m-1h20m. Hourly-ish. €10-16/pp. Modern coaches, reserved seats, bathroom. Book ALSA.com or PESA.es.' },
      { category: 'San Sebastián parking', note: 'Parte Vieja is pedestrianized; resident-only access. Park at Parking Boulevard or La Concha (€22/day max). If staying in Gros in an apartment, confirm parking arrangement before booking — some buildings have garage spots, most don\'t.' },
      { category: 'Language', note: 'Spanish primary; Basque co-official in Basque Country. English solid in tourist zones (hotels, Guggenheim, SS restaurants). Weaker in rural Asturias. Google Translate handles the rest.' },
      { category: 'Cost estimate', note: 'Flights $5,324 (United nonstop) + lodging $3,100 (5n Cangas @$165 + 3n Bilbao @$200 + 5n SS apartment @$280) + car $650 + bus $40 + food $1,800 + activities $350 + parking/fuel/misc $400 = ~$11,650 total. ~$1,300 more than Phase 1 estimate due to confirmed United nonstop premium.' },
      { category: 'Medical', note: 'Hospital Universitario Central de Asturias (Oviedo), Hospital Universitario Cruces (Bilbao — one of Spain\'s top), Hospital Universitario Donostia (SS, with pediatric ER). All European-standard. US travel insurance recommended — EHIC not applicable.' },
      { category: 'Return timing', note: 'Jul 17 (Fri) 12:30 PM United nonstop → JFK/EWR area 3:30 PM ET same day. Full weekend buffer before Mon Jul 20. No red-eye return — big win.' }
    ],
    updatedScore: {
      total: 41.75,
      previousTotal: 40.25,
      delta: 1.5,
      changes: [
        { category: 'Stress', from: 3.5, to: 4.0, reason: 'United summer 2026 nonstop EWR-BIO (7h30m, confirmed) eliminates the connection penalty. No jet-lag multiplier of a layover with a 2-year-old.' },
        { category: 'Cost', from: 4.0, to: 3.5, reason: 'Nonstop flight premium ($1,331-1,469/pp vs. $800-1,000 connecting) pushes the total ~$1,300 higher than Phase 1 estimate. Still reasonable but no longer the bargain it looked.' },
        { category: 'Highlights', from: 4.5, to: 4.5, reason: 'No change — Picos de Europa, Guggenheim, pintxos, dinosaur coast all validated.' }
      ],
      recommendation: 'strong',
      summary: 'United nonstop unlocks this: the logistics concern from Phase 1 (no direct flight, open-jaw routing complexity) is now solved. A Bilbao-in/Bilbao-out loop with a rental car for Asturias is clean, and all three bases deliver.'
    },
    risks: [
      { name: 'United nonstop capacity', detail: 'New 4x/week route (May 30, 2026 launch) on a Boeing 757 — limited seats across the whole summer. Book by mid-May or lose the advantage and fall back to 1-stop.', severity: 'medium' },
      { name: 'Hannah flight fare', detail: 'Hannah turns 2 on Jul 1, 2026 — three days before outbound. Airlines require full fare (no lap infant) once 2. This was known at Phase 1 but confirmed here: full family-of-4 pricing applies.', severity: 'low' },
      { name: 'FEVE trap', detail: 'Multiple travel blogs romanticize the Cantabrian coastal train as a "scenic family journey" — it is not a practical transit mode. Santander→Oviedo is 5-6h realistically; aging rolling stock; standing-room risk on busy days. If someone suggests FEVE as the "no-car" solution, reject it.', severity: 'medium' },
      { name: 'Picos weather volatility', detail: 'Mountain weather in Asturias is less predictable than the coast — cable car can close for wind or low cloud. 5 nights gives flexibility. Have a backup day (Llanes beach / MUJA dinosaur museum) if Fuente Dé is socked in.', severity: 'low' },
      { name: 'Rural Asturias accommodation quality', detail: 'Inventory is mixed — farmhouse charm vs. dated decor. Rose-sensitive. Filter for 9.0+ on Booking and read recent reviews carefully; avoid anything with "rustic" or "traditional" in the name without confirming renovation.', severity: 'medium' }
    ],
    specialFindings: [
      'United\'s new EWR-BIO summer 2026 nonstop (7h30m, 4x/week) is the single biggest finding — it turns this from a "complex open-jaw via MAD" trip into a simple round-trip. Phase 1 assumed a Santiago de Compostela entry; drop Santiago entirely.',
      'Skip Santiago de Compostela from the original Phase 1 itinerary. Adding it requires either an extra flight (SCQ→BIO on Vueling ~$150/pp + time) or a 7h drive — both erase the nonstop win. Santiago becomes a separate future trip.',
      'FEVE narrow-gauge rail is NOT a viable family transit spine. Bilbao↔Oviedo by FEVE is 7-8h with transfer at Santander vs. 3.5h by bus or 2h15m by car. Use FEVE at most for a single short scenic hop (e.g., Llanes→Ribadesella 45 min).',
      '3-base structure beats 2-base here: Bilbao deserves 3 nights (Guggenheim + Casco Viejo + slow day), Picos needs 5 (weather flexibility), SS needs 5 (food rhythm). Skipping Bilbao-as-base would waste the Guggenheim and make the trip feel unbalanced.',
      'Cangas de Onís > Llanes > Oviedo as the Asturias sub-base. Cangas puts Covadonga shuttle on your doorstep and Fuente Dé 1h15m away; Llanes is coast-first but 1h further from mountains; Oviedo is urban and adds 40 min to every hike.',
      'July weather confirmed below 82°F ceiling. Asturias July average high 24-27°C (75-80°F); San Sebastián 72-76°F; Bilbao similar. Atlantic coast insulated from Spain\'s heat waves — 2025\'s record summer didn\'t meaningfully touch this zone. Expect 3-5 rain days in 13 nights — plan Eureka! science museum as rainy-day SS backup.',
      'Covadonga access plan for 2026 confirmed: regulated period Jun 1 – Oct 18, shuttle every 30 min 7:40 AM-8 PM, €1.55 kids under 12 free. No private car access — this is a solved problem, not a risk.',
      'Fuente Dé cable car is the single highest-impact Picos activity for this family. 4-min ride, toddler-free, 5-year-old loves it, top-station walk is carrier-doable for Hannah. Schedule on clearest forecast day.',
      'Cares Gorge hike (the "iconic" Picos hike) is NOT suitable with Hannah — steep unguarded drops. Do not attempt. Senda del Oso bear-trail cycling is the better "big nature" day.',
      'Bus Bilbao↔San Sebastián (ALSA/PESA, 1h10m, $10/pp, hourly) is a genuine easy-mode connection — easier than a train.',
      'Score moves 40.25 → 41.75 (+1.5). This now sits above Maui (38.25→38.75) and tied with Norway (41.75); still below the Scandinavian top three but comfortably in strong-contender territory.'
    ]
  },

/* ========================= DOLOMITES (phase1 rank 7) ========================= */
{
  slug: 'dolomites',
  name: 'Dolomites',
  phase1Rank: 7,
  status: 'researched',
  dataCapturedAt: '2026-04-16',
  summary: 'The Dolomites hold up as a Phase 2 finalist: a 2-base plan (Ortisei + Corvara, 30 min apart) gives gondola-accessed alpine scenery that genuinely works with a 22-month-old in a carrier and a 5-year-old walker, and the altitude puts July highs at 66–75°F — one of the best weather fits on the list. Two 2026 access-regulation wrinkles (Seceda cable car pre-booking, Lago di Braies traffic cap) are now confirmed and bookable. Flying into Venice VCE beats Munich on travel time; Venice itself is skipped because July heat/humidity violates the 82°F ceiling.',

  flights: {
    summary: 'JFK → VCE (Venice Marco Polo). Delta has the only nonstop; 1-stop options via BCN/FCO/FRA are notably cheaper.',
    origin: 'JFK',
    options: [
      {
        label: 'Best overall (Delta nonstop — recommended)',
        airline: 'Delta (codeshare Air France/KLM)',
        outbound: {
          route: 'JFK → VCE',
          departDate: 'Jul 4, 2026',
          departTime: '9:00 PM',
          arriveTime: '11:20 AM+1 (CEST)',
          duration: '8h 20m',
          layovers: [],
          notes: 'Overnight eastbound is standard Atlantic pattern — kids sleep, arrive mid-morning ready to drive north. Not a "red-eye" in the JFK-to-LAX sense; normal transatlantic.'
        },
        return: {
          route: 'VCE → JFK',
          departDate: 'Jul 18, 2026',
          departTime: '~1:00 PM (typical DL289)',
          arriveTime: '~4:30 PM EDT',
          duration: '~10h 30m',
          layovers: [],
          notes: 'Daytime westbound, home before bedtime. Return side of DL288/289 rotation. Lands well before Jul 20 Monday-home constraint.'
        },
        priceUSD: 7324,
        painLevel: 'low',
        painReasons: ['overnight outbound (standard Atlantic)', 'price premium for nonstop'],
        bookingWindow: 'Book by mid-May 2026 — Delta holds nonstop fares firm near summer.',
        notes: '$1,831/pax family of 4 per Google Flights 2026-04-16. Premium of ~$780/pax over cheapest 1-stop, but saves 2.5h each way and eliminates connection risk with toddler.'
      },
      {
        label: 'Cheapest (ITA via Rome)',
        airline: 'ITA Airways',
        outbound: {
          route: 'JFK → FCO → VCE',
          departDate: 'Jul 4, 2026',
          departTime: '5:35 PM',
          arriveTime: '10:30 AM+1',
          duration: '10h 55m',
          layovers: ['FCO|1h 5m'],
          notes: 'Tight 1h 5m Rome connection — risky with toddler if JFK delays. Evening departure civilized.'
        },
        return: {
          route: 'VCE → FCO → JFK',
          departDate: 'Jul 18, 2026',
          departTime: 'TBD similar profile',
          arriveTime: 'TBD',
          duration: '~11-12h',
          layovers: ['FCO|~1-2h'],
          notes: 'Same single-airline connection through Rome.'
        },
        priceUSD: 4404,
        painLevel: 'medium',
        painReasons: ['1 stop', 'tight 1h5m FCO connection'],
        bookingWindow: 'Book by late May — ITA pricing firms 30-60 days out.',
        notes: '$1,101/pax Google Flights 2026-04-16. Saves $2,920 vs Delta nonstop for family of 4. ITA service quality is mid-tier; kid meals on request.'
      },
      {
        label: 'Austrian via VIE (solid 1-stop alternative)',
        airline: 'Austrian / United (operated by Air Dolomiti on final leg)',
        outbound: {
          route: 'JFK → VIE → VCE',
          departDate: 'Jul 4, 2026',
          departTime: '9:45 PM',
          arriveTime: '1:55 PM+1',
          duration: '10h 10m',
          layovers: ['VIE|~1h 30m'],
          notes: 'Vienna is a kid-friendly transit hub. Lufthansa Group reliability.'
        },
        return: {
          route: 'VCE → VIE → JFK',
          departDate: 'Jul 18, 2026',
          departTime: 'TBD',
          arriveTime: 'TBD',
          duration: '~12h',
          layovers: ['VIE|~1-2h'],
          notes: 'Star Alliance itinerary; United miles accrue.'
        },
        priceUSD: 5900,
        painLevel: 'medium',
        painReasons: ['1 stop', 'overnight outbound'],
        bookingWindow: 'Book by mid-May.',
        notes: '$1,475/pax Google Flights 2026-04-16. Middle ground — cheaper than Delta nonstop, more reliable than ITA.'
      },
      {
        label: 'Alternative gateway: Munich MUC (Lufthansa nonstop)',
        airline: 'Lufthansa / United',
        outbound: {
          route: 'JFK → MUC',
          departDate: 'Jul 4, 2026',
          departTime: '5:30 PM',
          arriveTime: '7:20 AM+1 (CEST)',
          duration: '7h 50m',
          layovers: [],
          notes: 'Faster flight than VCE but longer drive (3h via Brenner). Scenic but border crossing adds friction.'
        },
        return: {
          route: 'MUC → JFK',
          departDate: 'Jul 18, 2026',
          departTime: '~10:30 AM (typical LH410)',
          arriveTime: '~1:30 PM EDT',
          duration: '~9h 30m',
          layovers: [],
          notes: 'Daytime westbound. Lands plenty early for Jul 20 home-by constraint.'
        },
        priceUSD: 7784,
        painLevel: 'low',
        painReasons: ['3h drive post-arrival via Brenner Pass'],
        bookingWindow: 'Book by mid-May.',
        notes: '$1,946/pax Google Flights 2026-04-16. Net slightly slower door-to-door than VCE despite shorter flight; only chosen if VCE nonstop sells out.'
      }
    ]
  },

  groundTransport: {
    primary: 'Rental car at VCE, kept for all 14 days. No realistic alternative for Val Gardena + Alta Badia combo.',
    options: [
      { type: 'car', commentary: 'Automatic transmission mid-size SUV from VCE. Book Sixt/Europcar/Hertz. Budget $1,000-1,400 for 14 days (July peak). Automatic surcharge ~30-40% over manual.', kidFactor: 'Essential: 2 car seats, stroller, luggage, mountain passes. Reserve Isofix car seats from the rental agency 2+ weeks ahead or bring your own (airlines gate-check free).' },
      { type: 'train', commentary: 'Trenitalia VCE → Bolzano: 3h 45m, $18-50/adult one-way, kids under 15 free on Intercity. Then BZ→Ortisei SAD bus (1h). Feasible but doubles transit time and makes day-trips to lakes/Corvara impossible without a car.', kidFactor: 'Single long segment with 2 kids + luggage is painful; strollers manageable on Frecciargento.' },
      { type: 'taxi', commentary: 'Private transfer VCE→Ortisei ~€350-450 one-way via ItalyShuttle / Dolomite Transfers. Zero-hassle arrival but 2x cost of rental and no mobility in region.', kidFactor: 'Child seats available on request. Viable for arrival only if skipping car; impractical otherwise.' },
      { type: 'bus', commentary: 'SüdtirolMobil bus network covers valleys well (Val Gardena Card includes it). Within a base, perfectly usable for car-free days (Ortisei ↔ Selva ↔ Santa Cristina).', kidFactor: 'Strollers fine; frequency every 15-30 min in season.' },
      { type: 'walk', commentary: 'Ortisei and Corvara village centers are fully walkable / pedestrianized. Gondolas are walk-up from village.', kidFactor: 'Stroller-friendly cobbles + paved paths.' }
    ],
    americanDriverFriendly: 'mostly',
    driverNotes: 'Right-side driving, Italian signage with German subtitles in South Tyrol. A22 autostrada (VCE → Bolzano) is easy; €30-40 tolls round-trip. Passo Gardena (Ortisei↔Corvara) is 2-lane with guardrails, 25 hairpin minutes — take it slow with kids, have ginger chews handy. No extreme mountain roads on the itinerary. Snow tires not needed in July. Vignette sticker not required in Italy (only Austria — only relevant if MUC routing).',
    verdict: 'Pick up automatic SUV at VCE; keep for all 14 days; drop at VCE on Jul 18. No alternative gives the lake + plateau + valley access this itinerary needs.'
  },

  itinerary: {
    summary: '2 bases: Ortisei, Val Gardena (8n) + Corvara, Alta Badia (5n) + 1n near VCE for departure. Minimal transitions.',
    pacing: 'Deliberately paced for 2-year-old nap rhythm. Gondola morning → village lunch → afternoon pool or rest → evening passeggiata. Maximum one "full" day per week. Afternoon thunderstorms are near-daily in July, so all mountain activities front-load before 1 PM.',
    bases: [
      {
        name: 'Ortisei, Val Gardena',
        nights: 8,
        arrival: 'Jul 5',
        departure: 'Jul 13',
        whyThisLong: 'Ortisei has the best mix of gondola access (Seceda, Alpe di Siusi, Resciesa all from village), walkable car-free center, and family-hotel infrastructure. 8 nights absorbs the 6h jet-lag + one rain-day buffer + the Bolzano day trip + 2 flex days without overpacking activities. Longer stay justifies booking a premium family hotel.',
        transitFromPrevious: 'VCE → Ortisei: 3.5h via A22 autostrada + SS242 (~230 km). Stop at Autogrill for lunch. Arrive mid-afternoon, settle in, early dinner, kids asleep by 8 PM local (2 PM EDT — bedtime easier than westbound).',
        sampleDays: [
          { label: 'Day 1 (Jul 4)', activity: 'JFK → VCE nonstop overnight. 9 PM departure, arrive 11:20 AM Jul 5. Drive Ortisei, arrive ~4 PM. Walk village, gelato, dinner at hotel, early bed.', pace: 'light' },
          { label: 'Day 2 (Jul 5)', activity: 'Jet-lag day: late breakfast, Ortisei village playground, Val d\'Anna short walk (1.5 km paved, stroller-friendly), hotel pool afternoon, dinner in hotel.', pace: 'light' },
          { label: 'Day 3 (Jul 6)', activity: 'Alpe di Siusi: Ortisei→Mont Sëuc gondola (pre-booked) up to 2,000m meadow. Compatsch→Malga Sanon loop 4 km stroller-friendly. Hut lunch (Knödel + strudel). Descend by 1 PM ahead of storms.', pace: 'medium' },
          { label: 'Day 4 (Jul 7)', activity: 'SECEDA DAY (requires pre-booked time slot — reserve online in April for mid-morning slot). Gondola up to 2,500m. Pieralongia route 4 km/190m gain — Hannah in carrier, Naomi walks. Playground at Malga Pieralongia. Descend by 1:30 PM.', pace: 'full' },
          { label: 'Day 5 (Jul 8)', activity: 'Low-key recovery: Ortisei town morning (farmers market if Friday, wood-carving shops, playground), hotel pool/spa afternoon.', pace: 'light' },
          { label: 'Day 6 (Jul 9)', activity: 'Lago di Carezza day trip (40 min drive). 15-min paved loop. Continue to Laghetto di Fie swimming lake + playground. Picnic. Back by 3 PM.', pace: 'medium' },
          { label: 'Day 7 (Jul 10)', activity: 'Vallunga valley walk from Selva (10 min drive). 4 km flat gravel valley through meadow surrounded by Dolomite walls. Picnic at hut. Easy stroller push. Afternoon pool.', pace: 'medium' },
          { label: 'Day 8 (Jul 11)', activity: 'Bolzano half-day (40 min drive). Ötzi Museum (1.5h, fascinating for adults, kids engaged by the "ice mummy"). Talvera Park playground. Market lunch. Return by 3 PM. NOTE: valley temperatures warmer — save for cooler/overcast day if possible.', pace: 'medium' },
          { label: 'Day 9 (Jul 12)', activity: 'Flex day. Options: Resciesa plateau funicular + short walk, revisit Alpe di Siusi, or total rest. Store energy for transition.', pace: 'light' }
        ]
      },
      {
        name: 'Corvara, Alta Badia',
        nights: 5,
        arrival: 'Jul 13',
        departure: 'Jul 18',
        whyThisLong: 'Alta Badia\'s amphitheater landscape and purpose-built mountain playgrounds (Pralonga plateau) are the right speed for the second half when everyone\'s trail-weary. 5 nights gives Lago di Braies day trip + 2 plateau days + 1 flex + departure day. Longer would start to feel repetitive; shorter loses Lago di Braies.',
        transitFromPrevious: 'Ortisei → Corvara: 30 min over Passo Gardena (SS242→SS243). Scenic 8-switchback drive — keep ginger chews handy. Arrive by lunch; use afternoon to settle.',
        sampleDays: [
          { label: 'Day 10 (Jul 13)', activity: 'Transit morning over Passo Gardena. Arrive Corvara by lunch. Afternoon: biotope lake walk + Corvara village playground. Dinner in apartment or hotel.', pace: 'light' },
          { label: 'Day 11 (Jul 14)', activity: 'Col Alto gondola to Pralonga plateau. Three Moviment mountain playgrounds (Active Park, Spaghettino Park, Bear Park). Rifugio lunch. Descend by 2 PM.', pace: 'medium' },
          { label: 'Day 12 (Jul 15)', activity: 'LAGO DI BRAIES DAY TRIP (1h drive). Arrive 7:30 AM to enter before 9:30 AM traffic regulation (Jul 1–Sep 15 requires advance reservation otherwise — book P2 €40 if arriving later). West-shore paved walk (no swimming allowed, strollers OK). Rowboat photo. Picnic. Back to Corvara by 2 PM via San Vigilio.', pace: 'full' },
          { label: 'Day 13 (Jul 16)', activity: 'La Crusc Summer Park (educational nature trail, 30 min drive). Afternoon: Colfosco village walk or Passo Gardena scenic drive stops.', pace: 'medium' },
          { label: 'Day 14 (Jul 17)', activity: 'Morning: final gondola ride (Boè or Piz Sorega) or rest. Pack. Drive Corvara → VCE airport area (4h). Stop for lunch in Verona (2h walkabout: arena exterior, Piazza Bra, gelato). Arrive airport hotel by 7 PM.', pace: 'full' }
        ]
      },
      {
        name: 'Venice Airport area (departure)',
        nights: 1,
        arrival: 'Jul 17',
        departure: 'Jul 18',
        whyThisLong: 'Single airport-hotel night eliminates the risk of a 5h morning drive + check-in rush on departure day. Skip Venice proper — July heat (82°F+ highs, 86°F heat index) violates the ceiling and the city is at peak overtourism. Verona on the drive down is the culture stop.',
        transitFromPrevious: 'Corvara → VCE area: 4h via A22 + A4. Optional 2h Verona stop adds 30-45 min total.',
        sampleDays: [
          { label: 'Day 15 (Jul 18)', activity: 'Return rental car by 10 AM. VCE → JFK daytime nonstop ~1 PM. Arrive JFK ~4:30 PM EDT. Home for Monday Jul 20.', pace: 'medium' }
        ]
      }
    ],
    alternativeStructure: 'Single-base 13n Ortisei with Corvara as a day trip (1.5h there, 1.5h back — too long for a day) is inferior. Better alternative: 7+6 split Ortisei/Corvara if the 8-night Ortisei feels too long. Do NOT add Venice as a base — heat + overtourism kill the appeal.'
  },

  lodging: [
    {
      base: 'Ortisei, Val Gardena',
      nights: 8,
      options: [
        {
          name: 'Cavallino Bianco Family Spa Grand Hotel',
          type: 'hotel',
          tier: 'premium',
          priceUSDperNight: 780,
          bedroomConfig: 'Family Suite sleeps 4 (separate kids area), Family Cavallino Suite sleeps 4-5',
          kidFriendly: 'Gold-standard Italian family hotel: supervised kids\' club ages 3mo-12y, 2,000m² water world, 3 pools, indoor playground, all-inclusive "all-in" board (breakfast buffet, lunch, snack buffet, 5-course dinner). TripAdvisor 4.9. Kids\' clothes laundry free. Village-center, car-free.',
          notes: '€650-750/night family suite "all-in" for July peak. 5% early-bird discount expired Mar 6. Book NOW — inventory tight for Jul 4 arrival. Rose\'s modernity bar: this property will clear it easily.',
          url: 'https://www.cavallino-bianco.com/en/'
        },
        {
          name: 'ADLER Spa Resort Dolomiti',
          type: 'resort',
          tier: 'premium',
          priceUSDperNight: 720,
          bedroomConfig: 'Family room or junior suite sleeps 4; adjoining configurations available',
          kidFriendly: '5-star spa resort in Ortisei center with ADLER Mini & Maxi Club (ages 3-14), indoor + outdoor pools, extensive spa, half-board included. Less kid-dominant than Cavallino Bianco — better if you want adult ambiance mixed with family amenities.',
          notes: '$623/night average per aggregate booking data; $712-$900/night July peak. Book by early May for family room. Eco-certified. Excellent for Rose.',
          url: 'https://www.adler-resorts.com/en/adler-spa-resort-dolomiti/'
        },
        {
          name: 'Hotel Angelo Engel',
          type: 'hotel',
          tier: 'mid',
          priceUSDperNight: 380,
          bedroomConfig: 'Family room sleeps 4, 35m²',
          kidFriendly: '4-star in Ortisei center with outdoor pool, free parking, kid-friendly amenities, half-board breakfast+dinner. Well-maintained, modern, eco-certified. 4.8 Google rating.',
          notes: 'Mid-tier value play. €320-380/night July 2026 family room estimated from 2025 pricing pattern + peak surcharge. Smaller than Cavallino but less resort-heavy.',
          url: 'https://www.hotel-engel.com/en/'
        },
        {
          name: 'Residence Digart / Garni apartments',
          type: 'apartment',
          tier: 'mid',
          priceUSDperNight: 272,
          bedroomConfig: '2BR apartment sleeps 4-5, full kitchen',
          kidFriendly: 'Self-catering flexibility for breakfast / kid snacks; in-unit kitchen eliminates picky-eater stress. Stroller-accessible. Hotel-like services with home-like space.',
          notes: '$272/night Google Hotels 2026-04-16 for Digart-style 2BR. Also consider Residence Granvara or Chalet Bec de Roces. Saves ~$400/night vs family hotels but no kids\' club.',
          url: 'https://www.val-gardena.com/en/accommodation/apartments/'
        }
      ]
    },
    {
      base: 'Corvara, Alta Badia',
      nights: 5,
      options: [
        {
          name: 'Movi Family Apart-Hotel',
          type: 'aparthotel',
          tier: 'mid',
          priceUSDperNight: 240,
          bedroomConfig: 'Sella Superior 55m² apartment (separate kids\' bathroom) or Sassongher Family 65m² — sleeps 4',
          kidFriendly: 'Purpose-built family aparthotel at foot of Sassongher. Waterslide, indoor pool, kids\' playground, playroom, full kitchens with dishwasher, barrier-free. Very new (2023).',
          notes: '€192/night base for Sassongher Family in shoulder; €220-250/night July peak estimated. Best single-price value for 2-kid family. Book directly at movifamily.it.',
          url: 'https://www.movifamily.it/en/'
        },
        {
          name: 'Hotel Col Alto',
          type: 'hotel',
          tier: 'premium',
          priceUSDperNight: 520,
          bedroomConfig: 'Family room or junior suite, sleeps 3-4',
          kidFriendly: '4-star Superior in Corvara center near Col Alto gondola (itinerary starting point). 2,000m² refurbished spa, indoor pool, kids\' playroom, half-board included, gourmet restaurant.',
          notes: '$307-520/night per Kayak/Booking July 2026. Best-location premium option. Slightly less kid-focused than Cavallino but higher design caliber.',
          url: 'https://www.colalto.it/en/hotel'
        },
        {
          name: 'Sporthotel Panorama',
          type: 'hotel',
          tier: 'mid',
          priceUSDperNight: 340,
          bedroomConfig: 'Family room sleeps 4',
          kidFriendly: '97/100 excellence rating. Spa facilities, half-board, 4-star family-focused, traditional Alpine feel. Good value mid-tier.',
          notes: 'Sleeper pick for families wanting Ortisei quality at Corvara prices. Book by late April.',
          url: 'https://www.sporthotel-panorama.com/'
        },
        {
          name: 'Hotel La Perla (Relais & Châteaux)',
          type: 'hotel',
          tier: 'premium',
          priceUSDperNight: 1100,
          bedroomConfig: 'Junior suite or family suite, sleeps 4',
          kidFriendly: 'Top-tier 5-star in Corvara. Pool, spa, 3 restaurants incl. Michelin-starred. Kid menu. Splurge option — not essential, but if flights come in low.',
          notes: 'Pricing firm at €950-1,100/night family suite July peak. Reserve 6+ months ahead. Luxury aesthetic Rose will love.',
          url: 'https://www.hotel-laperla.it/en/'
        }
      ]
    },
    {
      base: 'Venice Airport area (1n)',
      nights: 1,
      options: [
        {
          name: 'Courtyard Venice Airport by Marriott',
          type: 'hotel',
          tier: 'mid',
          priceUSDperNight: 260,
          bedroomConfig: 'Family room / 2 queen beds',
          kidFriendly: 'Modern 4-star, free shuttle to VCE, pool, restaurant. Painless departure-day logistics.',
          notes: '$220-280/night July 2026. Marriott Bonvoy accrual. Rental car return at same complex.',
          url: 'https://www.marriott.com/hotels/travel/vcecy-courtyard-venice-airport/'
        },
        {
          name: 'Hilton Garden Inn Venice Mestre',
          type: 'hotel',
          tier: 'mid',
          priceUSDperNight: 220,
          bedroomConfig: 'Family room, sleeps 4',
          kidFriendly: 'Modern chain, pool, 15 min from VCE, shuttle available.',
          notes: 'Slightly cheaper than Courtyard with similar quality.',
          url: 'https://www.hilton.com/en/hotels/vcemegi-hilton-garden-inn-venice-mestre-san-giuliano/'
        }
      ]
    }
  ],

  logistics: [
    { category: 'Flights', note: 'Delta nonstop JFK↔VCE $1,831/pax RT ($7,324 family of 4) per Google Flights 2026-04-16. ITA via FCO $1,101/pax (saves $2,920 family) with 1h5m tight connection. Austrian via VIE $1,475/pax is the middle-ground 1-stop. Munich MUC nonstop $1,946/pax — similar total journey time due to longer drive. Recommend Delta nonstop for the toddler tax.' },
    { category: 'Jet lag', note: '6h eastbound. Arrive Jul 5 mid-morning local = 4 AM EDT. Kids will crash by 8 PM local (2 PM EDT internal). Days 2-3 planned intentionally unstructured. Expect 3-4 days to fully adjust.' },
    { category: 'Rental car', note: 'Automatic mid-size SUV from VCE, 14 days: budget $1,200-1,500 incl. tolls + fuel. July is peak pricing (~$45-75/day automatic). Book Sixt/Europcar/Hertz 2+ months ahead. Reserve 2 ISOFIX car seats from agency or bring own (gate-check free).' },
    { category: 'Mountain passes', note: 'A22 autostrada is 90 mph and smooth. Passo Gardena (Ortisei↔Corvara) is 8 hairpins over 25 min — light nausea risk for Naomi/Hannah. Ginger chews + front-seat stares at horizon. No dangerous exposure, full guardrails.' },
    { category: 'Seceda pre-booking (NEW 2026)', note: 'Starting summer 2026, Ortisei-Furnes-Seceda cableway requires online time-slot booking. Tickets sold from April, tied to specific date/time, non-transferable, non-refundable. 2/3 of capacity online, 1/3 walk-up. Book mid-morning slot before May 2026.' },
    { category: 'Lago di Braies access (Jul 1–Sep 15)', note: 'Traffic regulation active during trip window. Between 9:30 AM–4 PM: either advance-reserve P2 parking (€40, 800m from lake) or park at P1 (5.5km) with shuttle. BEFORE 9:30 AM or AFTER 4 PM: drive freely. Plan: leave Corvara 6:30 AM, arrive 7:30 AM, explore, leave by 10 AM before crowds + restrictions peak.' },
    { category: 'Tre Cime di Lavaredo (if added)', note: 'NOT on this itinerary — too strenuous for Hannah. Access requires €40 parking reservation 30 days ahead via pass.auronzo.info. Skip it; Seceda gives equivalent iconic peaks with gondola access.' },
    { category: 'Gondola season passes', note: 'Val Gardena Card (€87 adult/€61 child for 3 days) covers unlimited gondolas + SüdtirolMobil buses; worth it for 3+ gondola days. Alta Badia SummerCard similar. Kids under 8 often free with paying adult on individual tickets — check daily.' },
    { category: 'Weather', note: 'Ortisei July: 66-75°F day, 50-55°F night. Alpe di Siusi 2,000m: 60-68°F day. Bolzano valley: 82-86°F — treat as overcast-day-only excursion. Afternoon thunderstorms 40-60% probability — all hikes before 1 PM. NO ceiling violations in the mountains.' },
    { category: 'Venice skip rationale', note: 'Venice July average high 82°F, heat index 86°F, 71% humidity, peak cruise-ship overtourism, no real shade. Directly violates 82°F ceiling; violates low-kid-stress goal. Verona 2h walkabout on drive down is the culture substitute.' },
    { category: 'Food', note: 'Outstanding family fit: pizza, pasta, Knödel (dumplings), Speck, Kaiserschmarren, apple strudel. Mountain huts serve hot meals. Supermarkets Despar/Eurospar in villages for self-catering.' },
    { category: 'Language', note: 'German + Italian official, Ladin vernacular. English universal in hotels/restaurants. Minimal friction.' },
    { category: 'Medical', note: 'Hospitals in Bolzano (40 min Ortisei, 1h Corvara) and Brunico (30 min Corvara). Pharmacies in every village. Ensure traveler medical insurance with air-evac coverage.' },
    { category: 'Rifugi with toddlers', note: 'Road-accessible family rifugi (Malga Sanon, Malga Pieralongia, Rifugio Emilio Comici) work great for lunch or a short visit. Overnight rifugi require 1-3h hike minimum — do not attempt with Hannah. Stick to hotels/apartments.' },
    { category: 'Booking urgency', note: 'July is absolute peak. Cavallino Bianco early-bird (120 days) window closed Mar 6 2026 — book full retail NOW. Flights: book by May 15. Car: book by June 1. Seceda + Lago di Braies: reserve once booking opens (monitor seceda.it and prags.bz).' },
    { category: 'Cost breakdown', note: 'Flights $7,324 (Delta nonstop) or $4,404 (ITA 1-stop) + Lodging ~$5,800-8,600 (mid-range) or $10,000+ (premium) + Car $1,300 + Fuel/tolls $300 + Food $2,200 + Activities/gondolas $1,300 + Airport hotel $240 + Misc $500 = $18,000-24,000 premium / $13,500-16,500 mid-range. Shifted up vs Phase 1 estimate due to higher observed flight prices.' }
  ],

  updatedScore: {
    total: 42.0,
    previousTotal: 42.25,
    delta: -0.25,
    changes: [
      { category: 'Stress', from: 3.0, to: 2.875, reason: 'Two new 2026 access-regulation regimes (Seceda timed tickets, Lago di Braies traffic cap) add minor planning burden. Both manageable with dawn arrivals and April booking, but offset the "show up and ride the gondola" ease that made Phase 1 feel low-stress.' },
      { category: 'Cost', from: 2.5, to: 2.5, reason: 'Live flights came in higher than the Phase 1 midpoint ($1,831/pax nonstop vs $1,000-1,375 assumed). Offset by competitive 1-stop ITA option at $1,101. Overall cost remains 2.5 — just slightly higher trust interval.' },
      { category: 'Highlights', from: 4.5, to: 4.5, reason: 'Confirmed: 2-base plan executes cleanly, Bolzano day trip adds real culture, Verona substitutes for Venice. No downgrade.' },
      { category: 'Weather', from: 5.0, to: 5.0, reason: 'Confirmed altitude ≈ AC. All bases stay below 75°F. Only risk is Bolzano day trip and Venice airport day — neither exceeds a 2-hour heat exposure. Ceiling holds.' },
      { category: 'Accommodations', from: 4.5, to: 4.5, reason: 'Verified inventory: Cavallino Bianco, ADLER Dolomiti, Movi Family, Col Alto all available for July 2026 with 4.7-4.9 ratings. Modernity meets Rose\'s bar.' }
    ],
    recommendation: 'strong',
    summary: 'Phase 2 confirms Dolomites as a top-4 realistic pick: weather + gondola infrastructure + family-hotel quality + 2-base simplicity all check out; the only true costs are flight premium (no nonstop to Bolzano region) and new 2026 booking discipline for Seceda and Lago di Braies.'
  },

  risks: [
    { name: 'Seceda cable car sells out', detail: 'New 2026 time-slot booking system releases tickets in April. With only 2/3 of capacity bookable online, July mornings will go fast. Mitigate by booking mid-morning Jul 7 slot in first week of May 2026. Fallback: shift to afternoon slot or use walk-up 1/3 pool.', severity: 'low' },
    { name: 'Lago di Braies access', detail: 'Jul 1–Sep 15 traffic regulation. 9:30 AM–4 PM requires P2 reservation (€40) or 5km P1 + shuttle. Mitigate: dawn arrival (leave Corvara 6:30 AM, enter valley before 9:30 AM).', severity: 'low' },
    { name: 'Afternoon thunderstorm pattern', detail: '40-60% probability most July afternoons. Compresses hiking windows to mornings. Routine not trip-ending; gondolas suspend but villages remain open. No score adjustment needed.', severity: 'low' },
    { name: 'Prolonged cold/rain system (3-4 days)', detail: '~5-8% probability of a multi-day low-pressure stall over the Alps. Mitigate: Bolzano museum, hotel pools/spas, village walks, shopping. Not trip-ruining.', severity: 'medium' },
    { name: 'European ATC / airport disruption', detail: '~3-5% probability of summer 2026 ATC strike or airport chaos (VCE or connection hub). Mitigate: Delta nonstop eliminates connection risk; 1-day pre-trip buffer and travel insurance.', severity: 'low' },
    { name: 'Passo Gardena closure after storm', detail: 'Rare; alternate routes (via Bolzano valley) add 1h but exist.', severity: 'low' },
    { name: 'Hannah tantrum on 3.5h drive from VCE', detail: 'Real risk Day 1 post-flight. Mitigate: stop at Autogrill lunch, tablets loaded, ginger chews, plan ~4 PM arrival not 2 PM.', severity: 'low' },
    { name: 'Flight price surge', detail: 'Delta nonstop currently $1,831/pax; could rise to $2,200+ if booked late. Book by May 15 2026 firm.', severity: 'medium' }
  ],

  specialFindings: [
    'Venice July violates 82°F heat ceiling (82°F avg high, 86°F heat index, 71% humidity, peak overtourism) — skipped as a base; airport-hotel night only.',
    'Verona is the better culture substitute (2h walkabout on drive down) — Josh/Rose appetite for urban depth is satisfied without heat exposure.',
    'Delta operates the only nonstop JFK↔VCE (DL288/289), 8h20m, $1,831/pax RT per Google Flights 2026-04-16. ITA 1-stop via FCO saves $780/pax but adds 2.5h + connection risk.',
    'Munich MUC nonstop (Lufthansa/United, 7h50m, $1,946/pax) is net slower door-to-door than VCE due to 3h Brenner Pass drive vs 3.5h A22. VCE wins unless flights sell out.',
    'SECEDA PRE-BOOKING (NEW 2026): Ortisei-Furnes-Seceda cableway requires online time-slot tickets starting summer 2026. Sold from April. Non-refundable, non-transferable. Book by early May for Jul 7 mid-morning slot.',
    'LAGO DI BRAIES (NEW 2026 regime): Jul 1–Sep 15 traffic regulation 9:30 AM–4 PM. Advance P2 parking €40 or P1 + shuttle 5km. Dawn arrival (7:30 AM) sidesteps restriction entirely.',
    'Tre Cime di Lavaredo: €40 parking reservation required since May 2025 via pass.auronzo.info. Not on itinerary — too strenuous for Hannah. Seceda substitutes.',
    'Cavallino Bianco early-bird discount (5%, 120 days ahead) deadline for Jul 4 was Mar 6 2026 — already passed. Book full retail immediately; inventory tight.',
    '2-base plan (Ortisei 8n + Corvara 5n) is optimal: Passo Gardena transit is 30 min, both bases are car-free village centers, gondolas walk-up from doorstep.',
    'Rifugi are NOT doable as overnights for Hannah (1-3h hike minimum) — stick to road-accessible hotels/apartments. Family rifugi for LUNCH (Malga Sanon, Malga Pieralongia) work great.',
    'Val di Funes, Val di Fassa, Cortina d\'Ampezzo considered and rejected: Funes lacks family infrastructure; Fassa duplicates Val Gardena; Cortina more expensive and less kid-focused than Alta Badia.',
    'Trenitalia VCE→Bolzano ($18-50/adult, 3h45m, kids under 15 free on Intercity) is feasible but car is still required for lakes + Corvara day trips. No car-free option.',
    'Phase 1 score nudges 42.25 → 42.0 (-0.25) due to new 2026 booking-discipline burden on Seceda + Braies. Destination remains strong; still ranks ~7 overall.'
  ]
},

/* ========================= FRENCH ALPS (phase1 rank 14) ========================= */
{
  slug: 'french-alps',
  name: 'French Alps (Chamonix + Annecy)',
  phase1Rank: 14,
  status: 'researched',
  dataCapturedAt: '2026-04-16',
  summary: "Chamonix (mountain base, ~1,035m) + Annecy (lake base, ~450m) pair beautifully across ~100km of easy driving. Weather is the strongest argument: Chamonix averages 67F/19C, Annecy 79F/26C — both under the 82F ceiling, with microclimate escape valves via gondolas on hot days. Flights are the weakest link: only SWISS flies JFK-GVA nonstop (4x/week) and current pulls show the nonstop at ~$8K for four in peak July. Bed bug risk is low in alpine tourist areas vs. urban France (Paris, Marseille, Lyon) — Chamonix/Annecy are not hotspots in 2025-2026 reporting.",

  flights: {
    summary: "JFK nonstop to Geneva (GVA) on SWISS is the target; connecting options cut cost ~45% but add a layover",
    origin: "JFK (preferred) / EWR",
    options: [
      {
        label: "Nonstop premium (recommended)",
        airline: "SWISS",
        outbound: {
          route: "JFK-GVA",
          departDate: "2026-07-04",
          departTime: "7:25 PM",
          arriveTime: "9:15 AM+1",
          duration: "7h 50m",
          layovers: [],
          notes: "Evening departure, morning arrival — gentlest schedule with toddler"
        },
        return: {
          route: "GVA-JFK",
          departDate: "2026-07-18",
          departTime: "mid-morning (LX22 typical)",
          arriveTime: "early afternoon",
          duration: "9h 30m",
          layovers: [],
          notes: "Morning departure from GVA — no red-eye return"
        },
        priceUSD: 7951,
        painLevel: "low",
        painReasons: ["peak July pricing", "SWISS nonstop operates only 4x/week (schedule rigidity)"],
        bookingWindow: "Book by mid-May 2026; SWISS rarely discounts peak-July nonstop inventory",
        notes: "Google Flights pull 2026-04-16 shows $7,951 for 4 adults on the 7:25pm JFK-GVA nonstop. This is the cleanest option — no layovers, evening departure, arrival at Geneva ready for a 1h drive/train to Annecy or Chamonix."
      },
      {
        label: "Best value (1 stop)",
        airline: "Aer Lingus",
        outbound: {
          route: "JFK-DUB-GVA",
          departDate: "2026-07-04",
          departTime: "4:55 PM",
          arriveTime: "9:30 AM+1",
          duration: "10h 35m",
          layovers: ["DUB | 105 min"],
          notes: "Dublin pre-clearance is a bonus on return leg; reasonable layover length"
        },
        return: {
          route: "GVA-DUB-JFK",
          departDate: "2026-07-18",
          departTime: "morning",
          arriveTime: "same-day afternoon",
          duration: "~12h",
          layovers: ["DUB | ~90 min"],
          notes: "US preclearance in Dublin means arrival at JFK is domestic"
        },
        priceUSD: 4719,
        painLevel: "medium",
        painReasons: ["1 layover (DUB)", "adds ~3h vs. nonstop"],
        bookingWindow: "Book by mid-May 2026",
        notes: "Saves ~$3,200 vs. SWISS nonstop. Dublin layover is manageable — big airport with kid amenities, and US preclearance on return simplifies JFK arrival. Strongest tradeoff option."
      },
      {
        label: "Cheapest nonstop-adjacent",
        airline: "Air Europa (via MAD)",
        outbound: {
          route: "JFK-MAD-GVA",
          departDate: "2026-07-04",
          departTime: "10:05 PM",
          arriveTime: "7:05 PM+1",
          duration: "15h total",
          layovers: ["MAD | 350 min"],
          notes: "Red-eye departure AND long Madrid layover — skip"
        },
        return: { route: "GVA-MAD-JFK", departDate: "2026-07-18", departTime: "varies", arriveTime: "varies", duration: "15h", layovers: ["MAD | 350 min"], notes: "Long layover both ways" },
        priceUSD: 4343,
        painLevel: "high",
        painReasons: ["red-eye departure", "5h50m layover in Madrid", "15h total travel"],
        bookingWindow: "—",
        notes: "Cheapest option Google surfaced, but violates 'no red-eyes' constraint and 5+ hour layovers with a 2-year-old are brutal. Listed only for cost reference — do NOT book."
      }
    ]
  },

  groundTransport: {
    primary: "Rental car from Geneva airport — flexibility + ease of moving kid gear between Annecy and Chamonix",
    options: [
      { type: "car", commentary: "GVA-Annecy: ~40min autoroute. Annecy-Chamonix: ~1h via A40. Chamonix-GVA return: 1h15. French autoroutes smooth; tolls ~$30-50 total. Border crossing Switzerland-France at GVA is typically a formality but carry passports; Swiss motorway vignette is NOT needed if you pick up in Geneva and exit immediately toward France.", kidFactor: "Control over schedule, car seats, snack stops — best for two small kids" },
      { type: "train", commentary: "Alternative: Léman Express Geneva-Cornavin to St-Gervais-Le-Fayet, transfer to Mont Blanc Express scenic cog train to Chamonix (~2.5h total). Geneva-Annecy by SNCF TER ~1h45. Free Mont Blanc Express within valley with hotel guest card.", kidFactor: "Mont Blanc Express is a highlight for Naomi (scenic cog railway); downside is GVA airport-to-train transfer adds friction with luggage" },
      { type: "bus", commentary: "Shared shuttle Geneva Airport-Chamonix ~1h15, ~$25-35/pp (Mountain Drop-offs, AlpyBus). Direct bus door-to-door.", kidFactor: "Fine but rigid schedule; no stop flexibility" },
      { type: "taxi", commentary: "Private transfer GVA-Chamonix: ~$200-300 one-way; GVA-Annecy: ~$120-180.", kidFactor: "Car seats must be requested in advance" }
    ],
    americanDriverFriendly: "yes",
    driverNotes: "Right-side driving, English-friendly signage on autoroutes, automatic rentals available but book early (most European rentals are manual). Toddler + booster car seats available from Europcar/Hertz for ~$12-15/day per seat, or bring your own. Tolls paid at booths (credit card works) — keep €50 in coins as backup. No mountain-pass drama on this routing; highest elevation is Chamonix town at 1,035m reached via flat valley road.",
    verdict: "Rental car wins. 3 drives totaling <3h over 14 days. Train is tempting for the Mont Blanc Express experience — do it as a day-trip within the Chamonix base (free with guest card), not as airport transport."
  },

  itinerary: {
    summary: "2 bases: Annecy (7n) + Chamonix (7n). Drops the Lyon bookend from the phase-1 card for simpler transitions and to keep everything under 82F.",
    pacing: "Deliberately light. One full mountain day every other day; alternating with lake/town rest days. Rain/thunderstorm flex days built in (alpine afternoons storm in July ~15-20% of days).",
    bases: [
      {
        name: "Annecy",
        nights: 7,
        arrival: "Jul 5",
        departure: "Jul 12",
        whyThisLong: "Softest landing after 6h jet lag — warm lake swimming, flat walking, pedestrianized old town, no altitude. Hannah's 2nd birthday (Jul 1 already passed) fits a lake-beach celebration. 7 nights absorbs jet lag + gives 5-6 activity days + one rain buffer.",
        transitFromPrevious: "GVA arrival 9:15am Jul 5 after SWISS nonstop; pick up rental, ~40min drive to Annecy. Kids nap in car.",
        sampleDays: [
          { label: "Day 1 (Jul 5, Sun)", activity: "Arrive GVA, drive to Annecy, check in, light lakeside lunch, naps, early dinner at apartment", pace: "light" },
          { label: "Day 2 (Jul 6, Mon)", activity: "Vieille Ville walk, Palais de l'Isle exterior, gelato, Jardins de l'Europe playground", pace: "light" },
          { label: "Day 3 (Jul 7, Tue)", activity: "Plage d'Albigny morning swim + pedal boat, market lunch, apartment rest afternoon", pace: "medium" },
          { label: "Day 4 (Jul 8, Wed)", activity: "Gorges du Fier excursion (15min drive) + Château de Montrottier + picnic", pace: "medium" },
          { label: "Day 5 (Jul 9, Thu)", activity: "Parc Animalier de la Grande Jeanne (petting + wildlife park), playground evening", pace: "medium" },
          { label: "Day 6 (Jul 10, Fri)", activity: "Lake cruise (Compagnie des Bateaux) morning; cycling path afternoon with kid trailer", pace: "medium" },
          { label: "Day 7 (Jul 11, Sat)", activity: "Sunday market (Jul 12 Sunday would be better but departure day) — flex/favorites day, early dinner, pack", pace: "light" }
        ]
      },
      {
        name: "Chamonix",
        nights: 7,
        arrival: "Jul 12",
        departure: "Jul 19 (return home)",
        whyThisLong: "6-day card was tight given thunderstorm flex need and that mountain mornings require early starts. 7 nights = 5 mountain activity days + 1 rest day + 1 travel/buffer day. Also: 82F ceiling essentially never tested here (record is 30°C rare).",
        transitFromPrevious: "1h drive Annecy→Chamonix via A41/A40. Scenic; last ~20min are valley approach with Mont Blanc views.",
        sampleDays: [
          { label: "Day 8 (Jul 12, Sun)", activity: "Drive, check in, walk town center, Parc de Loisirs playground, Centre Aquatique pool if weather permits", pace: "light" },
          { label: "Day 9 (Jul 13, Mon)", activity: "Montenvers cog railway to Mer de Glace (morning, beat crowds). Naomi will love the train; Hannah in carrier for ice grotto.", pace: "medium" },
          { label: "Day 10 (Jul 14, Tue — Bastille Day)", activity: "Planpraz gondola to 2,000m, meadow walk + picnic; town fireworks evening (check timing vs. kid bedtimes)", pace: "medium" },
          { label: "Day 11 (Jul 15, Wed)", activity: "REST DAY — Chamonix town, Maison de la Montagne, bakery crawl, afternoon at Centre Aquatique Richard Bozon indoor/outdoor pool", pace: "light" },
          { label: "Day 12 (Jul 16, Thu)", activity: "Flégère gondola, easy meadow trail; or Grand Balcon Sud partial if conditions good (Naomi walks, Hannah carrier)", pace: "full" },
          { label: "Day 13 (Jul 17, Fri)", activity: "Parc de Merlet wildlife park (chamois, ibex, deer, marmots — fantastic for kids), Les Houches village stroll", pace: "medium" },
          { label: "Day 14 (Jul 18, Sat)", activity: "Final morning activity (Tramway du Mont-Blanc from Le Fayet OR lazy town walk), drive GVA (1h15), flight home. Arrive NYC evening Jul 18, home Jul 19 for ≥1 day buffer before Mon Jul 20.", pace: "light" }
        ]
      }
    ],
    alternativeStructure: "If deciding to include Lyon: cut Chamonix to 5 nights, Annecy to 6, add Lyon 2 nights at the start. Not recommended — Lyon July avg high is 82F right at ceiling, frequently 90F+ in heat waves, and adds a transition. Phase-1 card's 3-base structure was weaker than 2-base."
  },

  lodging: [
    {
      base: "Annecy",
      nights: 7,
      options: [
        {
          name: "ibis Styles Annecy Gare Centre",
          type: "hotel",
          tier: "budget",
          priceUSDperNight: 241,
          bedroomConfig: "Family room 4 pax",
          kidFriendly: "Family rooms standard, 5min walk to old town, AC",
          notes: "ibis Styles is the Accor chain upgrade — modern renovations across the brand. Corporate brand discipline = near-zero bed bug risk. 4.1/5 on 1,100+ reviews (Google Hotels, pulled 2026-04-16). Best cleanliness assurance at the price.",
          url: "https://all.accor.com/hotel/ibis-styles-annecy-gare-centre"
        },
        {
          name: "ibis Annecy Centre Vieille Ville",
          type: "hotel",
          tier: "budget",
          priceUSDperNight: 279,
          bedroomConfig: "Family room 2A+2C, AC",
          kidFriendly: "Right in old town, stroller-friendly streets outside door",
          notes: "4.3/5 (1,900 reviews). Accor-managed, high cleanliness confidence. Location premium over ibis Styles — right in Vieille Ville. Source: Google Hotels 2026-04-16.",
          url: "https://all.accor.com/hotel/ibis-annecy-centre-vieille-ville"
        },
        {
          name: "Splendid Hotel",
          type: "hotel",
          tier: "mid",
          priceUSDperNight: 245,
          bedroomConfig: "Connecting rooms possible for family of 4",
          kidFriendly: "4-star lakefront-adjacent, AC, pet-friendly",
          notes: "4.5/5 (882 reviews), 'great price' badge on Google Hotels. Strong cleanliness reputation. Source: Google Hotels 2026-04-16.",
          url: "https://google.com/travel/hotels"
        },
        {
          name: "Les Trésoms Lake and Spa Resort",
          type: "hotel",
          tier: "premium",
          priceUSDperNight: 386,
          bedroomConfig: "Family rooms 4 pax available",
          kidFriendly: "Pools, lake views, spa, on-site restaurants; 4-star with kids' amenities",
          notes: "4.2/5 (1,900 reviews). Premium tier — lake views, pools, relaxed feel. Source: Google Hotels 2026-04-16.",
          url: "https://lestresoms.com"
        },
        {
          name: "La Roseraie — Apartment 100m from Lake",
          type: "apartment",
          tier: "mid",
          priceUSDperNight: 468,
          bedroomConfig: "1BR, sleeps 4, crib available",
          kidFriendly: "Crib, elevator, kitchen for toddler meals, walk to lake",
          notes: "4.7/5 (144 reviews). Price reflects peak July. Source: Google Hotels 2026-04-16. For apartments vet recent reviews for 'clean'/'new' — Annecy has higher Airbnb turnover than hotels."
        }
      ]
    },
    {
      base: "Chamonix",
      nights: 7,
      options: [
        {
          name: "RockyPop Chamonix - Les Houches",
          type: "hotel",
          tier: "budget",
          priceUSDperNight: 129,
          bedroomConfig: "Family room 4 pax (bunks + double), free parking",
          kidFriendly: "Explicitly family-designed: arcade, kids' menus, fun décor, free parking. 10min drive to Chamonix center.",
          notes: "4.6/5 (2,700 reviews). Purpose-built for families — the pick if budget is a priority. Source: Google Hotels 2026-04-16.",
          url: "https://www.rockypop.com/en/chamonix/"
        },
        {
          name: "Hôtel Les Aiglons Chamonix",
          type: "hotel",
          tier: "mid",
          priceUSDperNight: 189,
          bedroomConfig: "Family rooms, connecting options",
          kidFriendly: "Outdoor pool, hot tub, in Chamonix center, walk to Aiguille du Midi base station",
          notes: "4.2/5 (1,400 reviews). 4-star, outdoor pool is a huge family plus in July. In-town walkability. Source: Google Hotels 2026-04-16.",
          url: "https://aiglons.com"
        },
        {
          name: "Chalet Hôtel le Prieuré & Spa",
          type: "hotel",
          tier: "mid",
          priceUSDperNight: 150,
          bedroomConfig: "Family rooms available",
          kidFriendly: "Indoor pool + hot tub, center of town, eco-certified",
          notes: "4.5/5 (1,500 reviews). Strong value for 4-star with indoor pool (important if thunderstorms hit). Source: Google Hotels 2026-04-16.",
          url: "https://prieure-chamonix.com"
        },
        {
          name: "La Folie Douce Hotels Chamonix",
          type: "hotel",
          tier: "premium",
          priceUSDperNight: 288,
          bedroomConfig: "Family suites and connecting rooms",
          kidFriendly: "Kids' programming, Les Grands Montets base, design-forward",
          notes: "4.2/5 (3,400 reviews). Designed for families with young kids; includes an organized kids' club. Source: Google Hotels 2026-04-16.",
          url: "https://www.lafoliedoucehotels.com/en/chamonix/"
        },
        {
          name: "Auberge du Manoir",
          type: "hotel",
          tier: "mid",
          priceUSDperNight: 166,
          bedroomConfig: "Family suites available, traditional chalet style",
          kidFriendly: "Quiet location, hot tub, walking distance to town",
          notes: "4.5/5 (385 reviews). Classic Chamonix chalet but well-maintained. Verify recent reviews for any pest mentions before booking. Source: Google Hotels 2026-04-16."
        }
      ]
    }
  ],

  logistics: [
    { category: "Passports", note: "Both kids need valid US passports with >6 months validity beyond Jul 18, 2026. If renewing, allow 10-13 weeks. Hannah's first passport requires both parents present at appointment." },
    { category: "Border crossing", note: "Geneva Airport has a special French sector (Secteur France) — if renting from a French-side agency there, you can skip Swiss customs entirely. Confirm with rental agency. Otherwise standard passport check at France-Switzerland border (usually waved through by car; slower if bus)." },
    { category: "Power/plugs", note: "France uses Type E (same as most of EU). Bring 2-3 adapters + multi-port USB chargers." },
    { category: "SIM/data", note: "Google Fi works seamlessly in France and Switzerland at no extra charge. Alternative: Orange Holiday eSIM 10-day for ~€20." },
    { category: "Car seats", note: "French law requires booster/car seat until age 10 OR 135cm. Naomi needs a proper booster; Hannah needs a full harness. Rental agencies provide but bring your own if possible — rental seats are often worn." },
    { category: "Pharmacy/medical", note: "Chamonix has Hôpital de Chamonix (emergency care). Annecy has Centre Hospitalier Annecy Genevois (full-service, pediatrics). Pharmacies abundant; most pharmacists speak functional English. Bring pediatric Tylenol (paracétamol) in case — format/brand differs." },
    { category: "Bed bug prep", note: "Annecy/Chamonix are low-risk alpine tourist zones, NOT urban hotspots. Stick to Accor-brand hotels (ibis/Novotel/Mercure) or 4-star resort properties where protocols are strongest. Avoid budget hostels and sketchy Airbnbs. Preventive protocols: unpack suitcases onto luggage racks not beds, inspect mattress seams/headboards on arrival, keep suitcases closed, wash all clothes hot on return. Do NOT bring textile items you can't hot-wash." },
    { category: "Language", note: "Chamonix: extensive English in tourist-facing businesses. Annecy: good English in tourist zones, less in neighborhood shops. Google Translate camera mode for menus in both." },
    { category: "Food with kids", note: "Boulangeries everywhere (croissants, quiches, tartes). Chamonix has Super U and Carrefour Market for apartment self-catering. Annecy has a Monoprix in the center. French kids' menus (menu enfant) standard at lunch." },
    { category: "Altitude awareness", note: "Chamonix town = 1,035m (fine for 2yo). Planpraz = 2,000m, Flégère = 1,877m, Mer de Glace = 1,913m — all acceptable for brief exposure. Aiguille du Midi summit = 3,842m — forbidden for Hannah (under 3), not recommended for Naomi (under 5). SKIP THIS TRIP." },
    { category: "Booking timing", note: "Book flights by mid-May 2026 (SWISS nonstop rarely drops). Book hotels by late April to mid-May — July is peak Alps season and family rooms in Chamonix sell out first." }
  ],

  updatedScore: {
    total: 38.0,
    previousTotal: 37.5,
    delta: 0.5,
    changes: [
      { category: "Stress", from: 3.5, to: 3.5, reason: "Confirmed JFK-GVA nonstop viable but expensive at $7,951; 1-stop Aer Lingus via Dublin at $4,719 is a sensible alternative. 2-base structure (Chamonix + Annecy, dropping Lyon) simplifies transitions. Net neutral." },
      { category: "Show-stopper risks", from: 4.0, to: 4.0, reason: "Bed bug research confirms alpine tourist areas are low-risk — the French problem is concentrated in Paris, Marseille, Lyon urban zones. Hotel-sector infestations have fallen threefold since 2023 per Connexion France reporting. No adjustment." },
      { category: "Weather", from: 4.5, to: 4.5, reason: "Chamonix July avg high 62-67F (multiple sources 2025-2026); Annecy avg max 26.5C/79.7F with lake cooling effect. Heat-wave extreme in Annecy can hit 33-38C rarely, but dropping Lyon eliminates the only ceiling-buster. Confirmed 4.5." },
      { category: "Cost", from: 3.0, to: 3.5, reason: "With 1-stop Aer Lingus ($4,719) + mid-tier hotels ($150-250/night) + 2-base (no Lyon hotels), revised midpoint is ~$11,500 — edging toward the optimistic card estimate. If taking SWISS nonstop it's $14-15K." },
      { category: "Accommodations", from: 4.0, to: 4.0, reason: "Confirmed strong inventory: Accor-chain hotels (ibis, ibis Styles) offer bed-bug-hardened cleanliness assurance; 4-star options (Aiglons, Prieuré, Splendid) have 4.2-4.5 ratings on 1,000+ reviews. Apartments higher variance — vet individually." }
    ],
    recommendation: "moderate",
    summary: "A real contender for weather and scenery, but #14 rank holds — flights are the binding constraint ($8K nonstop or $4.7K with Dublin layover), and more flexible destinations above it (Denmark, Netherlands, Atlantic Canada) still outscore it."
  },

  risks: [
    { name: "SWISS nonstop sold out or grounded", detail: "Only 4x/week in summer 2026; loss of this option forces 1-stop routing. Mitigation: book early or accept Aer Lingus DUB connection.", severity: "medium" },
    { name: "Peak-July thunderstorms in Chamonix", detail: "15-20% of afternoons in July produce storms; built-in flex day plus Centre Aquatique indoor pool handle this.", severity: "low" },
    { name: "European heat wave in Annecy lowlands", detail: "Lakeside 450m altitude moderates vs. Lyon/Paris, but 30+C possible. Lake swimming + mountain day escape options keep this from being disruptive. Probability of ceiling bust: ~15%.", severity: "low" },
    { name: "Aiguille du Midi FOMO", detail: "The #1 marquee Chamonix experience is off-limits for Hannah (under 3). Naomi can technically go but altitude sickness risk at 3,842m is real for 5yo. Accept this trip as 'view from below' and plan to return when kids are 8-12.", severity: "low" },
    { name: "Rental car seat quality", detail: "French rental car seats often worn/undersized. Bringing own booster + toddler seat adds baggage but guarantees fit.", severity: "low" },
    { name: "Bed bugs (urban France)", detail: "Concentrated in Paris/Marseille/Lyon per 2025 data. Chamonix/Annecy not flagged. Sticking to Accor brands and 4-star hotels reduces to near-zero. NOT a showstopper for this itinerary.", severity: "low" }
  ],

  specialFindings: [
    "BED BUGS (Josh's specific question): The 2023 pre-Olympics panic was real but has largely subsided in hotel sector. Per Connexion France 2025 reporting, hotel-sector infestations have fallen threefold since widespread protocols introduced post-2023. Current hotspots are PARIS, MARSEILLE, LYON urban zones and the south-east (Côte d'Azur), NOT alpine tourist areas. Chamonix and Annecy are not flagged in 2025-2026 consumer reporting. Mitigation = stick to Accor-brand hotels (ibis/ibis Styles/Novotel/Mercure) or 4-star resort properties with modern housekeeping protocols. Dropping the Lyon bookend (a known hotspot) further reduces risk.",
    "CHAMONIX + ANNECY PAIRING: Excellent. ~100km/1h drive. True contrast: high alpine (1,035m base, gondolas to 2,500m) vs. lake prealpine (450m, swimming/cycling). Start Annecy for softer jet-lag landing (warmer, lower altitude, lake = easy toddler days), then transition to Chamonix for marquee mountain content. 7+7 nights with one drive is the sweet spot.",
    "ANNECY HEAT: Avg July max is 26.5C/79.7F — technically under 82F ceiling. BUT heat waves can push to 30-35C, with 38C record in 2019. Lake (21-27C water) is the built-in cooldown. Microclimate-wise, the 450m altitude + lake does real moderating work — Lyon 100km west is typically 3-5C hotter.",
    "CHAMONIX + KIDS: Aiguille du Midi summit = SKIP (forbidden under 3, not recommended under 5, 3,842m altitude). All other gondolas (Planpraz, Flégère, Brévent) fine for kids. Montenvers cog railway to Mer de Glace free under 5 — a highlight. Plenty of sub-2,000m hiking from gondola mid-stations.",
    "GATEWAY AIRPORT: Geneva (GVA) is clearly correct. JFK-GVA SWISS nonstop at 7h50m dominates any Lyon routing (all require a layover via CDG/AMS/LHR, 10-11h total, $4,000+). Lyon flights cheapest 1-stop options are ~$4K but offer no advantage over GVA 1-stops which also run ~$4.7K and land closer to both Annecy and Chamonix.",
    "ALTERNATIVE THIRD BASE: Not recommended. Lyon adds heat risk (82F avg / 90+F heat waves) and an extra transition. Megève or Megeve-Saint-Gervais could substitute for Chamonix but offers less marquee content. Val d'Isère is too remote (2h from any other base). Grenoble+Chartreuse is interesting but adds 2h drive each way. The 2-base structure is the right answer.",
    "HOME-BEFORE-MON-JUL-20 CONSTRAINT: SWISS GVA-JFK flights land JFK afternoon same-day Saturday Jul 18. This gives Sunday Jul 19 full day home before work on Monday Jul 20. Constraint satisfied.",
    "BOOKING URGENCY: July is peak season in the Alps. Family rooms in Chamonix start selling out by early May. Flights: book by mid-May for current fares."
  ]
},

/* ========================= MAUI (phase1 rank 11) ========================= */
{
    slug: 'maui',
    name: 'Maui',
    phase1Rank: 11,
    status: 'researched',
    dataCapturedAt: '2026-04-16',
    summary: 'Post-flood Maui is more viable than the March headlines suggest: leeward resort corridors (Kaanapali, Napili, Kapalua, Kihei, Wailea) were essentially unaffected, and the only meaningful losses for a family with young kids are Haleakala sunrise (road above mile 2.5 still intermittent) and Lahaina Front Street as a walkable destination. A two-base west-then-south plan gives beach/pool time, upcountry heat relief, and the aquarium without overpacking.',

    flights: {
      summary: 'JFK → OGG (Kahului); no nonstops exist — all routes require 1 stop. ~13-17h travel time.',
      origin: 'JFK',
      options: [
        {
          label: 'Cheapest (painful-but-cheap — long layover)',
          airline: 'Alaska Airlines',
          outbound: {
            route: 'JFK → SAN → OGG',
            departDate: 'Jul 4, 2026',
            departTime: '11:30 AM',
            arriveTime: '9:55 PM (HT)',
            duration: '16h 25m',
            layovers: ['SAN|4h 28m'],
            notes: 'Long SAN layover is actually tolerable with kids — time for a real meal, a walk, a nap. Daytime departure, no red-eye.'
          },
          return: {
            route: 'OGG → SAN → JFK',
            departDate: 'Jul 18, 2026',
            departTime: 'TBD (similar profile)',
            arriveTime: 'TBD',
            duration: '~15-16h',
            layovers: ['SAN|~3h'],
            notes: 'Return timing flexible within Alaska schedule.'
          },
          priceUSD: 3272,
          painLevel: 'medium',
          painReasons: ['1 stop', 'long 4h28m SAN layover', '16h door-to-door'],
          bookingWindow: 'Book by mid-May — Alaska prices firm as summer approaches',
          notes: 'Family of 4 @ $818/pax per Google Flights 2026-04-16. Best value despite layover length.'
        },
        {
          label: 'Best overall (Delta via SEA)',
          airline: 'Delta',
          outbound: {
            route: 'JFK → SEA → OGG',
            departDate: 'Jul 4, 2026',
            departTime: '7:00 AM',
            arriveTime: '5:49 PM (HT)',
            duration: '16h 49m',
            layovers: ['SEA|4h 48m'],
            notes: 'Early AM is brutal but kids likely to nap on JFK-SEA leg. SkyMiles family benefits.'
          },
          return: {
            route: 'OGG → SEA → JFK',
            departDate: 'Jul 18, 2026',
            departTime: 'TBD',
            arriveTime: 'TBD',
            duration: '~13-14h',
            layovers: ['SEA|~2-3h'],
            notes: 'Delta has best on-time record on this route.'
          },
          priceUSD: 4076,
          painLevel: 'medium',
          painReasons: ['1 stop', 'early AM departure', '4h48m SEA layover'],
          bookingWindow: 'Book by late May',
          notes: '$1,019/pax Google Flights 2026-04-16. Delta Comfort+ upsell ~$150/pax adds leg room — worth it for 6h JFK-SEA leg.'
        },
        {
          label: 'Fastest (American via DFW/PHX)',
          airline: 'American Airlines',
          outbound: {
            route: 'JFK → DFW → OGG',
            departDate: 'Jul 4, 2026',
            departTime: '6:30 AM',
            arriveTime: '2:10 PM (HT)',
            duration: '13h 40m',
            layovers: ['DFW|1h 51m'],
            notes: 'Shortest total duration. Tight-ish DFW connection but DFW is a single-terminal airport at AA — manageable with kids.'
          },
          return: {
            route: 'OGG → PHX → JFK',
            departDate: 'Jul 18, 2026',
            departTime: 'TBD',
            arriveTime: 'TBD',
            duration: '~12-13h',
            layovers: ['PHX|~1h'],
            notes: 'Short-layover itineraries carry missed-connection risk — rebook buffer recommended.'
          },
          priceUSD: 4128,
          painLevel: 'medium',
          painReasons: ['1 stop', 'very early AM (6:30)', 'tight layover'],
          bookingWindow: 'Book by late May',
          notes: '$1,032/pax Google Flights 2026-04-16. PHX alternate at same price if DFW not available.'
        }
      ]
    },

    groundTransport: {
      primary: 'Rental car at OGG — essentially mandatory for the whole trip.',
      options: [
        { type: 'car', commentary: 'Rental car booked at OGG (Alamo, Hertz, Enterprise, Budget all on-site). 14-day mid-size SUV or minivan ~$700-900 total. Post-flood inventory still tight — book early. Minivan preferred for 2 car seats + luggage.', kidFactor: 'Essential for 2 car seats, stroller, beach gear.' },
        { type: 'taxi', commentary: 'Uber/Lyft work at airport + resort corridors but sparse elsewhere. Not viable for primary transport.', kidFactor: 'Car seats not provided; do not rely on.' },
        { type: 'bus', commentary: 'Maui Bus exists (county-run) but sparse and slow. Not practical for families.', kidFactor: 'Effectively n/a.' }
      ],
      americanDriverFriendly: 'yes',
      driverNotes: 'US driving norms, English signage, right-side road. Traffic hotspots: Lahaina Bypass at rush hour, S. Kihei Rd (post-sinkhole repairs). Most drives 20-45 min between leeward destinations. Haleakala summit road has switchbacks and altitude — only relevant if attempting sunrise (not recommended with toddler).',
      verdict: 'Pick up minivan at OGG on arrival; keep for all 14 days. No alternative is realistic.'
    },

    itinerary: {
      summary: '2 bases: Kaanapali/Napili (7n) + Kihei/Wailea (7n). One mid-trip move.',
      pacing: 'Deliberately relaxed. Front-loads beach/pool jet-lag recovery (6h time shift for toddlers is real). Activity mornings, pool/nap afternoons. Max one "full" activity day per week.',
      bases: [
        {
          name: 'Kaanapali / Napili (West Maui)',
          nights: 7,
          arrival: 'Jul 4',
          departure: 'Jul 11',
          whyThisLong: '7 nights lets the first 2-3 days be pure pool/beach jet-lag recovery without wasted lodging spend. West side has calmest summer snorkel bays (Napili, Kapalua) and the best short scenic hike on the island (Kapalua Coastal Trail — stroller-friendly). Iao Valley is 30 min inland.',
          transitFromPrevious: 'OGG airport → Kaanapali via Lahaina Bypass, ~45 min in light traffic.',
          sampleDays: [
            { label: 'Day 1 (Jul 4)', activity: 'Arrive OGG mid-afternoon HT; pick up minivan; grocery stop at Lahaina Costco or Foodland; settle in; early dinner at condo; pool dip; kids asleep by 8 PM HT (2 AM EST — expect wake-ups).', pace: 'light' },
            { label: 'Day 2 (Jul 5)', activity: 'Jet-lag day: Napili Bay beach morning (calm, turtles), condo lunch + nap, pool afternoon, takeout dinner.', pace: 'light' },
            { label: 'Day 3 (Jul 6)', activity: 'Kapalua Coastal Trail (1.6 mi, stroller-friendly) early morning, tide pools at south end of Kapalua Bay. Lunch at The Sea House (Napili Kai). Pool afternoon.', pace: 'medium' },
            { label: 'Day 4 (Jul 7)', activity: 'Iao Valley State Park day trip (30 min drive, 0.6 mi paved loop, stroller-friendly). Lunch in Wailuku (Saigon Cafe). Back to pool. NOTE: Box jellyfish warning window Jul 7-9 — skip ocean.', pace: 'medium' },
            { label: 'Day 5 (Jul 8)', activity: 'Pool/resort day. Old Lahaina Luau evening (book months ahead — reopened). Under-2 free. 6pm-9pm.', pace: 'medium' },
            { label: 'Day 6 (Jul 9)', activity: 'Waihee Ridge Trail first mile (morning start mandatory — clouds roll by 10 AM). Toddler in carrier, 5yo on foot. Lunch in Wailuku. Pool afternoon.', pace: 'full' },
            { label: 'Day 7 (Jul 10)', activity: 'Free day. Option: Trilogy sunset catamaran from Kaanapali (2h, spinner dolphins) if ocean conditions clear. Otherwise: beach morning + farewell dinner at Merriman\'s Kapalua.', pace: 'light' }
          ]
        },
        {
          name: 'Kihei / Wailea (South Maui)',
          nights: 7,
          arrival: 'Jul 11',
          departure: 'Jul 18',
          whyThisLong: '7 nights for the south side: leeward, drier, easier access to Maui Ocean Center (Ma\'alaea), upcountry day trips, Paia + Twin Falls, and Kamaole beaches. Wailea resort pools are the island\'s best for kids.',
          transitFromPrevious: 'Kaanapali → Kihei/Wailea: ~45 min via Lahaina Bypass + Honoapiilani Hwy. One-move day, easy.',
          sampleDays: [
            { label: 'Day 8 (Jul 11)', activity: 'Transit morning. Settle into Kihei/Wailea condo. Grocery run. Kamaole III beach (playground adjacent) late afternoon.', pace: 'light' },
            { label: 'Day 9 (Jul 12)', activity: 'Maui Ocean Center (Ma\'alaea) — world-class Hawaiian marine aquarium, walk-through acrylic tunnel. 1.5-2h. Air-conditioned. Lunch at Ma\'alaea Harbor. Pool afternoon.', pace: 'medium' },
            { label: 'Day 10 (Jul 13)', activity: 'Upcountry day: Kula Botanical Garden (8-acre stroller-friendly), lavender farm, Makawao town + Komoda Bakery cream puffs, optional Surfing Goat Dairy. 3,000-4,000 ft = real heat relief (~75°F). Back by nap time.', pace: 'medium' },
            { label: 'Day 11 (Jul 14)', activity: 'Pool/beach recovery day. Wailea Beach Walk (1.5 mi paved, stroller-friendly). Dinner at Monkeypod Kitchen.', pace: 'light' },
            { label: 'Day 12 (Jul 15)', activity: 'Paia + Twin Falls half-day. Breakfast at Paia Fish Market. Twin Falls 15-min walk to waterfall + swimming hole. Back to Kihei by lunch. Pool afternoon. (Captures Road to Hana opening act without the 10h slog.)', pace: 'medium' },
            { label: 'Day 13 (Jul 16)', activity: 'Free day. Options: Keawakapu Beach morning snorkel, Kihei Farmers Market (Saturday), Ulupalakua Ranch + MauiWine if energy high. Final family dinner.', pace: 'light' },
            { label: 'Day 14 (Jul 17)', activity: 'Final pool morning. Pack. Last dinner. OGG return Jul 18 morning.', pace: 'light' }
          ]
        }
      ],
      alternativeStructure: 'Single-base 14-night in Wailea is viable if the mid-trip move feels stressful — gives up west-side hikes but eliminates one day of transit/unpacking. Scoring: slightly better on stress, slightly worse on highlights.'
    },

    lodging: [
      {
        base: 'Kaanapali / Napili',
        nights: 7,
        options: [
          {
            name: 'OUTRIGGER Honua Kai Resort & Spa',
            type: 'resort',
            tier: 'mid',
            priceUSDperNight: 400,
            bedroomConfig: '1-2BR suites with full kitchens, sleeps 4-6',
            kidFriendly: 'Huge multi-pool complex, kids\' pool with slides, direct Kaanapali Beach access, in-unit laundry, stroller-friendly grounds.',
            notes: 'Modern (2009+), consistently well-reviewed. $175-$427/night Google Hotels 2026-04-16. Use $400/night for 2BR July peak.',
            url: 'https://www.outrigger.com/hotels-resorts/hawaiian-islands/maui/outrigger-honua-kai-resort-spa'
          },
          {
            name: 'Aston Kaanapali Shores',
            type: 'aparthotel',
            tier: 'mid',
            priceUSDperNight: 320,
            bedroomConfig: '1-2BR condos with kitchens, sleeps 4',
            kidFriendly: 'Beachfront pool, in-unit kitchen + laundry, quieter than big resorts. Kid-friendly building layout.',
            notes: 'Aston/Aqua brand, dependable quality. $272-345/night July 2026. Older property but renovated units available — filter carefully.',
            url: 'https://www.astonkaanapalishores.com/'
          },
          {
            name: 'Napili Kai Beach Resort',
            type: 'resort',
            tier: 'mid',
            priceUSDperNight: 450,
            bedroomConfig: 'Studio or 1-2BR, most with kitchenettes',
            kidFriendly: 'Low-rise, directly on calmest family snorkel bay on Maui (Napili Bay), famous "Aloha Friday" kids\' hula program. Classic family pick.',
            notes: 'Dated but meticulously maintained. On Rose\'s modernity scale this may register as "charming" vs "worn" — read recent reviews.',
            url: 'https://www.napilikai.com/'
          },
          {
            name: 'Montage Kapalua Bay',
            type: 'resort',
            tier: 'premium',
            priceUSDperNight: 1400,
            bedroomConfig: '2-3BR residential suites with full kitchens',
            kidFriendly: 'Kids\' club (Paintbox), dedicated family pool, spacious suites, excellent kid menu at Cane & Canoe.',
            notes: 'Top-tier West Maui. Private Kapalua Bay access. If flights come in cheap, upgrade here.',
            url: 'https://www.montagehotels.com/kapaluabay/'
          }
        ]
      },
      {
        base: 'Kihei / Wailea',
        nights: 7,
        options: [
          {
            name: 'Kamaole Sands',
            type: 'apartment',
            tier: 'budget',
            priceUSDperNight: 234,
            bedroomConfig: '2BR condos with full kitchens, sleeps 4-6',
            kidFriendly: 'Across from Kamaole III (playground + calm swim beach), pool, BBQ, laundry. Best budget value in Kihei.',
            notes: '$234/night Google Hotels July 2026. Vrbo/Airbnb individual units vary in quality — filter for recent renovations.',
            url: 'https://www.astonkamaolesands.com/'
          },
          {
            name: 'Palms at Wailea by Outrigger',
            type: 'aparthotel',
            tier: 'mid',
            priceUSDperNight: 268,
            bedroomConfig: '1-2BR condos with full kitchens',
            kidFriendly: 'Full kitchen, pool, quiet grounds, 10-min walk to Wailea Beach Walk, shuttle to Wailea beaches.',
            notes: '$268/night July 2026. Best value for Wailea-adjacent location with kitchen.',
            url: 'https://www.outrigger.com/hotels-resorts/hawaiian-islands/maui/palms-at-wailea'
          },
          {
            name: 'Andaz Maui at Wailea',
            type: 'resort',
            tier: 'premium',
            priceUSDperNight: 1000,
            bedroomConfig: '1-2BR suites; residences available with kitchens',
            kidFriendly: 'Four-tier infinity pool, direct Mokapu Beach access, kids\' program, modern design (2013).',
            notes: '$1,000/night Google Hotels July 2026. Top-tier modern Wailea — Rose-friendly aesthetic.',
            url: 'https://www.hyatt.com/andaz/en-US/ogganandaz-maui-at-wailea-resort'
          },
          {
            name: 'Grand Wailea, A Waldorf Astoria Resort',
            type: 'resort',
            tier: 'premium',
            priceUSDperNight: 1119,
            bedroomConfig: 'Rooms + suites; 2BR suite sleeps 4-5',
            kidFriendly: 'The Canyon Activity Pool (9 pools + slides + rope swing) is the single best kid pool in Hawaii. Camp Grande kids\' program. Direct Wailea Beach.',
            notes: '$1,119/night Google Hotels July 2026. If splurging, Naomi age 5 will remember this specifically.',
            url: 'https://www.grandwailea.com/'
          }
        ]
      }
    ],

    logistics: [
      { category: 'Flights', note: 'No nonstops JFK↔OGG as of April 2026. Cheapest option: Alaska via SAN $818/pax RT ($3,272 family of 4). Delta via SEA $1,019/pax, American via DFW $1,032/pax. Book refundable or add CFAR insurance — unusual weather year.' },
      { category: 'Jet lag', note: '6h time shift. Expect 3-4 days of toddler 4 AM wake-ups and 6 PM meltdowns. First 2-3 days in Kaanapali intentionally zero-structure.' },
      { category: 'Rental car', note: 'Minivan strongly recommended (2 car seats + stroller + beach gear). $700-900 for 14 days. Book now — post-flood inventory still tight. Alamo/Hertz/Enterprise/Budget at OGG.' },
      { category: 'Post-flood damage — Haleakala', note: 'Summit District reopened but Crater Road above mile 2.5 status varies. Check nps.gov/hale and Maui County road closures in late May/June. Sunrise already off-plan for 22-month-old (10,023 ft altitude, 4 AM wake-up).' },
      { category: 'Post-flood damage — S. Kihei Rd', note: 'Sinkhole near Kamaole Beach Park II being repaired. On track for completion by July. Alternate routes exist.' },
      { category: 'Post-flood damage — Hana Hwy', note: 'Open with intermittent single-lane construction delays (15-20 min). Only relevant for Twin Falls half-day — Paia side unaffected.' },
      { category: 'Lahaina status', note: 'Historic Front Street still largely closed (wildfire rebuild, not flood). Cannery Mall, Old Lahaina Luau, Mala, Star Noodle, Lahaina Harbor all REOPENED. Sail Maui, Atlantis Submarines back in service. Lahaina resort corridor fully accessible via Lahaina Bypass.' },
      { category: 'Ethical tourism', note: 'Framing shifted from "stay away" (2024) to "regenerative travel" (2026). Maui Visitors Bureau actively welcoming; 70% of local economy is tourism. Respect: (1) no photos in burn zones, (2) support local-owned businesses, (3) conserve water.' },
      { category: 'Box jellyfish', note: 'Jul 7-9 warning window (8-10 days after full moon) overlaps arrival. Check HawaiiBeachSafety.com daily; skip ocean on warning days. Stick to protected bays with kids.' },
      { category: 'Weather', note: 'July highs 85-88°F leeward (above 82°F ceiling). Humidity 60-70%. Upcountry (3,000-4,000 ft) highs ~75°F — day-trip heat relief. Trade winds usually keep VOG away.' },
      { category: 'Heat ceiling', note: 'Coastal days will exceed 82°F. Mitigate with: mid-day pool/AC breaks, early-morning outdoor activities, upcountry day trip, ocean swims when jellyfish-clear.' },
      { category: 'Medical', note: 'Maui Memorial (Wailuku) has ER + pediatric services but NO pediatric ICU. Critical pediatric cases → air evac to Kapiolani (Oahu). Verify air-medical insurance coverage. Minit Medical urgent care in Kahului, Kihei, Lahaina.' },
      { category: 'Food', note: 'Excellent family-friendly culture. Book Lahaina Luau NOW for July (under-2 free). Grocery: Foodland Kihei/Lahaina, Costco Kahului. Plate lunch + poke everywhere.' },
      { category: 'Travel insurance', note: 'CFAR (Cancel For Any Reason) required for peace of mind given El Niño hurricane uncertainty. Standard trip insurance only triggers on named storms that actually disrupt travel.' },
      { category: 'Cost breakdown', note: 'Flights ~$3,300 + lodging 2BR $3,500-5,600 + rental car $800 + food $2,400 + activities $1,200 + misc $400 = $11,600-13,700. Can scale up to $18K+ with Grand Wailea or Montage.' }
    ],

    updatedScore: {
      total: 38.75,
      previousTotal: 38.25,
      delta: 0.5,
      changes: [
        { category: 'Show-stopper risks', from: 4.0, to: 4.25, reason: 'The weather event everyone feared already happened and won\'t recur in July — Kona Lows are a winter phenomenon. Minor uptick; hurricane/wildfire concerns unchanged.' },
        { category: 'Highlights', from: 3.5, to: 3.75, reason: 'Old Lahaina Luau, Atlantis Submarines, Sail Maui, Lahaina Harbor all reopened faster than expected. Trilogy sunset catamaran back online. Partially restores West Maui options.' },
        { category: 'Cost', from: 3.0, to: 3.0, reason: 'Flights lower than projected ($818-1,032/pax vs $600-800 assumed), but lodging peak pricing remains stiff. Net: roughly flat total but better value.' }
      ],
      recommendation: 'moderate',
      summary: 'Viable with eyes open: the leeward corridor is fine, flights are unexpectedly cheap, and the losses (Haleakala sunrise, Lahaina Front Street) don\'t matter at these ages — but the destination still over-delivers on beach/resort and under-delivers on Josh+Rose\'s hiking/culture preference.'
    },

    risks: [
      { name: 'Haleakala Crater Road closure', detail: 'Road above mile 2.5 intermittently closed since March 2026 storms. No firm reopen date. Check nps.gov/hale in late May/June. Low impact since sunrise isn\'t viable with toddler anyway.', severity: 'low' },
      { name: 'Box jellyfish Jul 7-9', detail: 'Warning window overlaps arrival. Stick to pools and watch HawaiiBeachSafety.com for day-of postings. Low-severity mitigation.', severity: 'low' },
      { name: 'El Niño-elevated hurricane season', detail: '61% El Niño odds per NOAA. Central Pacific cyclone count roughly doubles. July is early season (peak Aug-Sept). Absolute disruption probability ~3-5%.', severity: 'medium' },
      { name: 'Wildfire smoke / evacuation', detail: 'March rains produced fuel load now curing in summer heat. Mitigations since 2023 Lahaina fire are substantial. Risk to resort guests is indirect (smoke/evac), ~2-3% disruption probability.', severity: 'medium' },
      { name: 'Another Kona Low', detail: 'Negligible — Kona Lows are winter-only phenomena. July gets normal trade-wind weather.', severity: 'low' },
      { name: 'Pediatric ICU access', detail: 'No PICU on Maui. Critical cases require air evac to Oahu (~30 min). Verify air-medical insurance.', severity: 'medium' },
      { name: 'S. Kihei Rd repair delays', detail: 'Sinkhole near Kamaole II being repaired. On track for July but watch local news for delays. Alternate routes exist.', severity: 'low' },
      { name: 'Rental car supply', detail: 'Post-flood fleet still tight per Hawaii tourism reports. Book minivan now.', severity: 'low' }
    ],

    specialFindings: [
      'No nonstop JFK→OGG exists as of April 2026 — all routes require 1 stop. Contrary to pre-flood card notes.',
      'Flights $818/pax (Alaska via SAN) — well below Phase 1 $600-800 midpoint. Family of 4 flights as low as $3,272.',
      'Lahaina Harbor reopened December 2025; Sail Maui, Atlantis Subs, Kula Fishing Co back in service — meaningfully restores West Maui boat tour options.',
      'Maui Visitors Bureau framing has flipped from "stay away" (2024) to "regenerative travel" (2026). Tourism explicitly welcomed.',
      'March 2026 Kona Lows won\'t recur in July — these are exclusively winter-season storms. Removes the major new risk.',
      'Nat Geo named Maui to "Best of the World 2026" in December 2025, signaling confidence in recovery trajectory.',
      'Two-base plan (7n Kaanapali + 7n Kihei/Wailea) minimizes transitions. Single-base Wailea alternative viable if mid-trip move feels stressful.',
      'Road to Hana as a full trip is NOT recommended with kids under 5 — substitute Paia + Twin Falls half-day for the opening act without the 10h slog.',
      'Upcountry (Kula/Makawao at 3,000-4,000 ft, ~75°F highs) is the key heat-relief tool — day trip only, not viable as a base.',
      'Phase 1 score nudges 38.25 → 38.75 (+0.5). Still rank ~11; destination is viable but doesn\'t leap into top-tier.'
    ]
  }

];
