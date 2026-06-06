// config/areas.ts
// Service-area towns within Sogn Contracting's documented 50-mile radius of Bandon.
// CONTENT RULE: every fact here must be verifiable and true (county, permit jurisdiction,
// distance, public geographic and economic facts). No fabricated project claims. We do not
// assert that Sogn has built a specific project in a town unless that is documented in
// projects.ts. Per-town prose is intentionally unique so each page earns its place.

export interface AreaFaq {
  q: string;
  a: string;
}

export interface AreaData {
  slug: string;
  name: string;
  /** County the town sits in. Note: Port Orford is Curry County, the rest are Coos County. */
  county: string;
  /** Approximate road distance from the Bandon shop, in miles. */
  distanceFromBandonMi: number;
  zip: string;
  /** Building department / permit jurisdiction (verifiable). */
  permitJurisdiction: string;
  /** Short, true positioning line used as the page subtitle and in the meta description. */
  blurb: string;
  /** Per-town opening body paragraph. Fully unique, fact-grounded. */
  intro: string;
  /** Per-town lead sentence before the services list. */
  serviceLead: string;
  /** Verifiable local building context, rendered as prose paragraphs. No invented projects. */
  localContext: string[];
  /** One paragraph on what makes building in this town different (drive, exposure, stock, permits). */
  angle: string;
  /** Per-town gallery + estimate paragraph. */
  workNote: string;
  /** Service slugs most relevant to this town. */
  topServices: string[];
  /** Slugs of neighboring service-area towns, for internal linking. */
  nearby: string[];
  faq: AreaFaq[];
}

export const areas: AreaData[] = [
  {
    slug: "bandon",
    name: "Bandon",
    county: "Coos County",
    distanceFromBandonMi: 0,
    zip: "97411",
    permitJurisdiction: "City of Bandon and Coos County",
    blurb:
      "Bandon is home. Sogn Contracting has built and remodeled here, at the mouth of the Coquille River, since 1995.",
    intro:
      "Sogn Contracting is based right here in Bandon, at the mouth of the Coquille River where it meets the Pacific. We have built and remodeled homes across town since 1995, from Old Town and the established neighborhoods up the hill to newer construction out toward the beaches and the Bandon Dunes area. Because our shop is in town, Bandon jobs get the fastest response and no travel charge, and we already know how the City of Bandon and Coos County handle permits and inspections. We carry CCB# 257491.",
    serviceLead: "The work we take on most often in Bandon:",
    localContext: [
      "Bandon sits on the open coast, and its weather shapes how we build. This is one of the foggiest, most salt-sprayed stretches of the Oregon coast, with steady wind off the water and damp winters. On near-coast and oceanfront lots, that pushes us toward roofing, siding, decking, and fasteners chosen to hold up to salt and moisture rather than whatever is cheapest on the shelf.",
      "The town has a wide mix of building stock. Old Town runs about ten blocks along the river and is largely a rebuild after the 1936 gorse fire that took most of the original town, so many homes in the core date to the late 1930s and after. Up the hill are settled neighborhoods, and out toward the beaches and the resort there is newer and higher-end construction. That range means we work on everything from older-home remodels to ground-up custom homes.",
      "Bandon's economy leans on tourism, cranberries, fishing, and timber, with Bandon Dunes Golf Resort and the beaches drawing visitors and second-home owners. A fair amount of coastal property here is a vacation home or rental, which tends to mean kitchen and bath remodels, decks and outdoor living built for the view, and exterior upkeep that keeps a place rental-ready.",
    ],
    angle:
      "A Bandon project is the one with no travel time for us, so quick site visits and scheduling are easy. The trade-off is exposure: oceanfront wind and salt mean material choices and flashing details matter more here than on an inland job in Coquille or Myrtle Point. We plan for that in the estimate, not after the first winter.",
    workNote:
      "See before and after photos of our remodels, additions, and exterior work in the project gallery. When you are ready, request a free estimate and tell us about your Bandon home, whether it is an Old Town remodel, a deck for the view, or a new build near the dunes.",
    topServices: ["remodeling", "custom-homes", "additions", "decks", "roofing", "concrete"],
    nearby: ["coquille", "coos-bay", "port-orford", "north-bend"],
    faq: [
      {
        q: "Do you serve Bandon?",
        a: "Yes. Bandon is our home base. The shop is here, so local jobs get a quick response and there is no travel charge.",
      },
      {
        q: "Who pulls the permits for a Bandon project?",
        a: "We do. We handle permits through the City of Bandon and the Coos County building department and schedule the inspections as part of the job.",
      },
      {
        q: "Do you build near the coast and the Bandon Dunes area?",
        a: "Yes. We build and remodel on near-coast and oceanfront lots and out toward the dunes. On exposed sites we choose roofing, siding, and decking made to handle salt air and wind.",
      },
      {
        q: "Can you remodel an older Old Town home?",
        a: "Yes. Much of Old Town was rebuilt after the 1936 fire, so many homes there are mid-twentieth-century. We remodel kitchens, baths, and whole homes of that era and handle the permitting.",
      },
    ],
  },
  {
    slug: "coos-bay",
    name: "Coos Bay",
    county: "Coos County",
    distanceFromBandonMi: 24,
    zip: "97420",
    permitJurisdiction: "City of Coos Bay and Coos County",
    blurb:
      "Coos Bay is the largest city on the Oregon coast, about 24 miles north of our Bandon shop, and part of our regular service area.",
    intro:
      "Coos Bay is the largest city on the Oregon coast and the medical, retail, and professional hub for the south coast region. It sits about 24 miles north of our Bandon shop, an easy run up Highway 101 that we make regularly. Sogn Contracting has built and remodeled across Coos County since 1995, and we carry CCB# 257491. The city's size and variety mean we see a wider range of jobs here than almost anywhere else we work.",
    serviceLead: "The work we are called on for most in Coos Bay:",
    localContext: [
      "Coos Bay, known as Marshfield until 1944, grew up as a timber and shipping port and was once one of the busiest lumber ports in the world. That history shows in the housing: a lot of older homes from the port and mill era, a downtown commercial core in the Old Marshfield district along the bayfront boardwalk, and bayfront and hillside lots scattered through the city. We work on all of it, from kitchen and bath remodels in older homes to commercial tenant improvements downtown.",
      "Because Coos Bay is the regional center, with Bay Area Hospital, Southwestern Oregon Community College, and the main retail district, there is steady demand for both home work and light commercial work. The city is also short on housing and has new construction in the pipeline, including the planned Timber Cove subdivision on the west side, so remodels, additions, and new builds all have a place here.",
      "The terrain is the thing to plan for. Bayfront and hillside lots come with drainage and foundation considerations that a flat inland lot does not. We work those out up front, in the estimate, so a sloped or low-lying site does not turn into a surprise once the job is underway.",
    ],
    angle:
      "Coos Bay differs from the smaller towns we serve in two ways. First, it is the one place in our area with a real commercial core, so along with home remodels we take on tenant improvements and commercial work. Second, the bayfront and hillside lots mean drainage and foundations get more attention here than on a flat valley lot in Coquille. The 24-mile drive from Bandon is short and routine, so neither distance nor scheduling is an issue.",
    workNote:
      "Browse before and after photos of our remodels, additions, and exterior renovations in the project gallery. When you are ready, request a free estimate and tell us about your Coos Bay project, residential or commercial.",
    topServices: ["remodeling", "additions", "commercial", "roofing", "custom-homes", "concrete"],
    nearby: ["north-bend", "coquille", "bandon", "myrtle-point"],
    faq: [
      {
        q: "Do you work in Coos Bay?",
        a: "Yes. Coos Bay is about 24 miles north of our Bandon shop, a routine run up Highway 101, and is part of our regular service area.",
      },
      {
        q: "Do you take on commercial work in Coos Bay?",
        a: "Yes. Coos Bay has the area's main commercial core, so along with home remodels and additions we handle commercial construction and tenant improvements.",
      },
      {
        q: "Can you build on a bayfront or hillside lot?",
        a: "Yes. Those lots need drainage and foundation planning, which we work out in the estimate before the job starts.",
      },
      {
        q: "Who handles the permits?",
        a: "We do. Permits run through the City of Coos Bay and the Coos County building department, and we schedule the inspections as part of the job.",
      },
    ],
  },
  {
    slug: "north-bend",
    name: "North Bend",
    county: "Coos County",
    distanceFromBandonMi: 27,
    zip: "97459",
    permitJurisdiction: "City of North Bend and Coos County",
    blurb:
      "North Bend sits right next to Coos Bay, about 27 miles north of Bandon, and is part of our regular service area.",
    intro:
      "North Bend shares the bay with Coos Bay, and the two run together as one continuous community that locals call the Bay Area. It is about 27 miles north of our Bandon shop, just past Coos Bay on Highway 101. Sogn Contracting has built and remodeled across Coos County since 1995, and we carry CCB# 257491. North Bend has its own building department, and we handle that permitting along with the work.",
    serviceLead: "The jobs we handle most in North Bend:",
    localContext: [
      "North Bend is wrapped on three sides by the bay, and its housing reflects a long working history. A lot of the stock is midcentury, with older Craftsman and bungalow homes near downtown and the waterfront and newer single-family homes on larger lots toward the edges of town. That mix makes remodels, roof replacements, siding updates, and additions the steady work here.",
      "The city is more affordable than much of the coast, with a median home price below the Oregon average, so a lot of what we do is practical: re-roofing an older home, updating siding, opening up a dated floor plan, or adding space to a house a family already owns. North Bend is also home to the only commercial airport on the Oregon coast and to Pony Village Mall, and it shares the Bay Area Hospital and the Port of Coos Bay economy with its sister city.",
      "Bayfront and low-lying lots make drainage and foundation work worth planning carefully, the same as in Coos Bay. We account for that in the estimate so it is handled before framing, not discovered after.",
    ],
    angle:
      "North Bend feels a lot like Coos Bay to build in, since the two cities run together, but the housing skews a little older and more affordable, so the work leans toward remodels, re-roofs, and siding rather than commercial buildouts. Permits go through North Bend's own building department, which we are set up to handle. At 27 miles, the drive from Bandon is short and routine.",
    workNote:
      "See before and after photos of our remodels, roof and siding work, and additions in the project gallery. When you are ready, request a free estimate and tell us about your North Bend home.",
    topServices: ["remodeling", "roofing", "additions", "decks", "concrete", "repairs"],
    nearby: ["coos-bay", "coquille", "bandon"],
    faq: [
      {
        q: "Do you serve North Bend?",
        a: "Yes. North Bend is about 27 miles from our Bandon shop, right next to Coos Bay, and is part of our regular service area.",
      },
      {
        q: "Can you re-roof an older North Bend home?",
        a: "Yes. Re-roofing and roof repair on older and midcentury homes is some of our most common work in the North Bend and Coos Bay area.",
      },
      {
        q: "Do you do siding updates on coastal homes?",
        a: "Yes. Siding and exterior updates are steady work here. Near the bay we choose materials that hold up to damp, salty air.",
      },
      {
        q: "Is North Bend permitting separate from Coos Bay?",
        a: "Yes. North Bend has its own building department, so permits run through the City of North Bend and Coos County. We handle that as part of the job.",
      },
    ],
  },
  {
    slug: "coquille",
    name: "Coquille",
    county: "Coos County",
    distanceFromBandonMi: 18,
    zip: "97423",
    permitJurisdiction: "City of Coquille and Coos County",
    blurb:
      "Coquille is the Coos County seat, about 18 miles inland from Bandon along the Coquille River, and one of the closest towns we serve.",
    intro:
      "Coquille is the Coos County seat, set on the bank of the Coquille River in a broad inland valley about 18 miles from our Bandon shop. That makes it one of the closest towns we serve, and the county building department is based right here. Sogn Contracting has built and remodeled across Coos County since 1995, and we carry CCB# 257491.",
    serviceLead: "The work we are asked for most in Coquille:",
    localContext: [
      "Coquille grew up as a river and timber town, became the county seat in 1896, and has long been the valley's wood-products and government center. The result is a settled town of older homes on tree-lined streets, mixed with more recent builds, and it is generally the most affordable place to buy in the county. A lot of what we do here is what an established older neighborhood needs: kitchen and bath remodels, additions, roof replacements, and repairs.",
      "Being inland in the valley, Coquille runs warmer and drier than the coast, with less of the fog and salt air that drive material choices in Bandon or Port Orford. That shifts the priorities. Here it is more about practical, lasting work on existing homes than about fighting coastal exposure.",
      "The Coquille River is the feature to respect. Riverside lots can carry drainage and floodplain considerations, and we plan for those before the work starts. For the rest of the county, this is where the building department sits, which keeps permitting straightforward on a lot of Coos County jobs.",
    ],
    angle:
      "Coquille is close, warm, and inland, so a job here is different from a coastal one. There is far less concern about salt and wind than in Bandon, and more focus on solid, practical work for older homes. It is also the county seat, so the building department is in town, which is convenient on any Coos County project. At 18 miles, it is one of the shortest drives we make.",
    workNote:
      "Browse before and after photos of our remodels, additions, and exterior work in the project gallery. When you are ready, request a free estimate and tell us about your Coquille home.",
    topServices: ["remodeling", "additions", "custom-homes", "concrete", "roofing", "repairs"],
    nearby: ["myrtle-point", "coos-bay", "bandon", "north-bend"],
    faq: [
      {
        q: "Do you work in Coquille?",
        a: "Yes. Coquille is only about 18 miles from our Bandon shop, one of the closest towns we serve, and part of our regular service area.",
      },
      {
        q: "Is Coquille where the county permits come from?",
        a: "Coquille is the Coos County seat and home to the county building department. We handle the permits for your project, here or anywhere in the county.",
      },
      {
        q: "Do you build on riverside lots?",
        a: "Yes. Lots near the Coquille River can carry drainage or floodplain considerations, which we plan for in the estimate before any work begins.",
      },
      {
        q: "Is building in Coquille different from the coast?",
        a: "Yes. Coquille is inland and warmer, with less fog and salt air, so material choices are more about practical durability than fighting coastal exposure.",
      },
    ],
  },
  {
    slug: "myrtle-point",
    name: "Myrtle Point",
    county: "Coos County",
    distanceFromBandonMi: 22,
    zip: "97458",
    permitJurisdiction: "City of Myrtle Point and Coos County",
    blurb:
      "Myrtle Point is a Coquille River valley town about 22 miles from Bandon, and we serve it regularly.",
    intro:
      "Myrtle Point sits on a promontory above the Coquille River valley, about 22 miles from our Bandon shop and known locally as the Hub of Coos County for its spot on Highway 42. It is the most rural town we serve, and the work reflects that. Sogn Contracting has built and remodeled across Coos County since 1995, and we carry CCB# 257491.",
    serviceLead: "The work we take on most in Myrtle Point:",
    localContext: [
      "This is dairy and timber country. The valley around Myrtle Point has a long farming history, and the landscape is full of older homes, barns, and outbuildings on larger lots. That means we get called for the kind of work rural property needs: shop and garage builds, additions, repairs, and site work, alongside home remodels.",
      "Myrtle Point is also one of the best-preserved small towns in southern Oregon, with a historic downtown and a lot of traditional homes, some kept in fine shape and some mid-renovation. Careful remodeling and renovation of older homes is real, steady work here, and it rewards a contractor who respects how an old house is put together.",
      "Rural lots usually involve more than just the building. Grading, drainage, and concrete for driveways, pads, and foundations are often part of the job, and we handle that site work along with the structure. Sitting up on a promontory, the town itself has historically stayed clear of river flooding, though valley lots near the water still get the usual drainage planning.",
    ],
    angle:
      "Myrtle Point is the most rural and agricultural place we work, so the jobs skew toward shop and garage builds, additions, repairs, and the site work that comes with larger lots. It is inland and warmer than the coast, so salt and wind are not the concern they are in Bandon. Renovating its older and historic homes is its own kind of work, and we take the care those houses need. At 22 miles up the valley, it is a routine drive for us.",
    workNote:
      "See before and after photos of our remodels, additions, and exterior work in the project gallery. When you are ready, request a free estimate and tell us about your Myrtle Point home, shop, or renovation.",
    topServices: ["remodeling", "additions", "concrete", "repairs", "custom-homes", "roofing"],
    nearby: ["coquille", "coos-bay", "bandon"],
    faq: [
      {
        q: "Do you serve Myrtle Point?",
        a: "Yes. Myrtle Point is about 22 miles from our Bandon shop, up the Coquille River valley, and is part of our regular service area.",
      },
      {
        q: "Do you do site work on rural properties?",
        a: "Yes. Rural lots here often need grading, drainage, and concrete for driveways, pads, or foundations, and we handle that along with the rest of the build.",
      },
      {
        q: "Can you build a shop or garage on an acreage?",
        a: "Yes. Shop, garage, and outbuilding work is common on the larger lots around Myrtle Point, and we handle the build and the site work together.",
      },
      {
        q: "Do you renovate older and historic homes?",
        a: "Yes. Myrtle Point has a lot of well-kept older homes, and careful remodeling and renovation of houses like those is steady work for us.",
      },
    ],
  },
  {
    slug: "port-orford",
    name: "Port Orford",
    county: "Curry County",
    distanceFromBandonMi: 27,
    zip: "97465",
    permitJurisdiction: "City of Port Orford and Curry County",
    blurb:
      "Port Orford sits about 27 miles south of Bandon in Curry County, the westernmost incorporated city in the lower 48.",
    intro:
      "Port Orford is about 27 miles south of our Bandon shop and is the westernmost incorporated city in the contiguous United States. It is the one town we serve that sits in Curry County rather than Coos County, so permitting goes through a different jurisdiction, which we are set up to handle. Sogn Contracting has built and remodeled across the Southern Oregon Coast since 1995, and we carry CCB# 257491.",
    serviceLead: "The work we are called on for most in Port Orford:",
    localContext: [
      "Port Orford is about as exposed as the Oregon coast gets. Its harbor opens straight onto the Pacific with no natural protection, home to the dolly dock that lifts the fishing fleet out of the water by crane, and Cape Blanco, the westernmost point in Oregon, is just up the road. Wind, salt air, and winter storms are a constant, and that drives how we build here. Roofing, siding, decking, flashing, and fasteners all need to be chosen to take a beating, not just to look right on day one.",
      "It is a small town of a little over a thousand people, with a commercial fishing fleet, a strong artist community, and an economy that has shifted over the years toward retirement and services. The median age is past sixty, so a good share of the work is on existing homes: remodels, accessibility and aging-in-place updates, and the kind of exterior maintenance that keeps a coastal house weather-tight.",
      "Because Port Orford is in Curry County, permits run through the City of Port Orford and the Curry County building department rather than Coos County. We handle that paperwork and the inspections as part of the job, so the different jurisdiction is our concern, not yours.",
    ],
    angle:
      "Two things set Port Orford apart from the rest of our area. It is in Curry County, so the permit office is different from our Coos County towns, and it is the most weather-exposed town we serve, so material choices for roofs, siding, and decks matter even more than they do in Bandon. It is also our longest regular drive at 27 miles south, which we plan around so trips and material deliveries are scheduled efficiently rather than piecemeal.",
    workNote:
      "Browse before and after photos of our remodels, roofing, and exterior work in the project gallery. When you are ready, request a free estimate and tell us about your Port Orford home.",
    topServices: ["roofing", "remodeling", "decks", "additions", "repairs", "custom-homes"],
    nearby: ["bandon", "coquille", "coos-bay"],
    faq: [
      {
        q: "Do you serve Port Orford?",
        a: "Yes. Port Orford is about 27 miles south of our Bandon shop and is part of our service area.",
      },
      {
        q: "Is Port Orford permitting different from Bandon?",
        a: "Yes. Port Orford is in Curry County rather than Coos County, so permits go through a different building department. We handle that for you as part of the job.",
      },
      {
        q: "How do you handle the wind and salt exposure here?",
        a: "We choose roofing, siding, decking, and fasteners made to hold up to salt air, wind, and winter storms. On a site this exposed, those material choices are part of the plan from the estimate.",
      },
      {
        q: "Do you do accessibility or aging-in-place work?",
        a: "Yes. With many older homes and residents in Port Orford, remodels that improve access, such as walk-in showers and step-free entries, are common work for us.",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}
