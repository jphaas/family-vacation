/* ==========================================================================
   ITINERARIES — Phase 2 finalist deep dives
   ==========================================================================
   One entry per finalist with detailed flights, transport, itinerary,
   lodging, logistics, and updated scoring. Stubs are populated by per-
   destination research agents (see workflow in project overview).

   SCHEMA
   ------
   {
     slug: string                       // matches PHOTOS and destinations.js
     name: string                       // display name
     phase1Rank: number                 // rank from Phase 1 (1-22)
     status: 'pending' | 'researched'   // gates rendering
     dataCapturedAt: 'YYYY-MM-DD'       // date prices/availability pulled
     summary: string                    // 2-3 sentences framing this destination as a finalist

     flights: {
       summary: string                  // one-line route overview
       origin: string                   // e.g. 'JFK/EWR/LGA'
       options: [{
         label: string                  // e.g. 'Best overall', 'Cheapest', 'Nonstop premium'
         airline: string
         outbound: { route, departDate, departTime, arriveTime, duration, layovers: ['name|mins'|...], notes? }
         return:   { route, departDate, departTime, arriveTime, duration, layovers, notes? }
         priceUSD: number               // family of 4, total
         painLevel: 'low'|'medium'|'high'
         painReasons: string[]          // e.g. 'red-eye', '1 layover', 'early AM'
         bookingWindow: string          // e.g. 'Book by mid-May for these fares'
         notes: string
       }]
     }

     groundTransport: {
       primary: string                  // the recommended mode summary
       options: [{ type: 'train'|'car'|'taxi'|'walk'|'ferry'|'bus', commentary: string, kidFactor: string }]
       americanDriverFriendly: 'yes'|'mostly'|'challenging'|'n/a'
       driverNotes: string              // licenses, traffic sides, quirks
       verdict: string                  // final recommendation
     }

     itinerary: {
       summary: string                  // e.g. '3 bases: CPH (7n) + Odense (3n) + Aarhus (4n)'
       pacing: string                   // commentary on density
       bases: [{
         name: string
         nights: number
         arrival: 'MMM D'
         departure: 'MMM D'
         whyThisLong: string            // justification for the night count
         transitFromPrevious?: string   // e.g. '1.5h train, kids free'
         sampleDays: [{
           label: string                // 'Day 1 (Jul 4)'
           activity: string
           pace: 'light'|'medium'|'full'
         }]
       }]
       alternativeStructure?: string    // e.g. 'Drop Odense; 8+6 split'
     }

     lodging: [{
       base: string                     // e.g. 'Copenhagen'
       nights: number
       options: [{
         name: string
         type: 'hotel'|'apartment'|'airbnb'|'aparthotel'|'resort'
         tier: 'budget'|'mid'|'premium'
         priceUSDperNight: number
         bedroomConfig: string          // e.g. '2BR, sleeps 4'
         kidFriendly: string            // one-line strength
         notes: string
         url?: string
       }]
     }]

     logistics: [{ category: string, note: string }]

     updatedScore: {
       total: number
       previousTotal: number
       delta: number
       changes: [{ category: string, from: number, to: number, reason: string }]
       recommendation: 'strong'|'moderate'|'cautious'
       summary: string                  // one-sentence takeaway
     }

     risks: [{ name: string, detail: string, severity: 'low'|'medium'|'high' }]  // new risks found during research
     specialFindings: string[]          // research-specific callouts (e.g. 'Bornholm feasible via 3h train+ferry')
   }
   ========================================================================== */

const ITINERARIES = [
  { slug: 'denmark',          name: 'Denmark',          phase1Rank: 1,  status: 'pending', dataCapturedAt: null },
  { slug: 'netherlands',      name: 'Netherlands',      phase1Rank: 2,  status: 'pending', dataCapturedAt: null },
  { slug: 'sweden',           name: 'Sweden',           phase1Rank: 3,  status: 'pending', dataCapturedAt: null },
  { slug: 'atlantic-canada',  name: 'Atlantic Canada',  phase1Rank: 4,  status: 'pending', dataCapturedAt: null },
  { slug: 'spain-north',      name: 'Spain — North Coast (Asturias + Basque)', phase1Rank: 10, status: 'pending', dataCapturedAt: null },
  { slug: 'dolomites',        name: 'Dolomites',        phase1Rank: 7,  status: 'pending', dataCapturedAt: null },
  { slug: 'french-alps',      name: 'French Alps (Chamonix + Annecy)', phase1Rank: 14, status: 'pending', dataCapturedAt: null },
  { slug: 'maui',             name: 'Maui',             phase1Rank: 11, status: 'pending', dataCapturedAt: null }
];
