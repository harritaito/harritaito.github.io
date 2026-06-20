# DIY Local Materials Planner

## Purpose

This document captures an extended product plan for supporting DIY projects with localized
shopping for materials, consumables, and tools. The core idea is to help a person move from a
vague project intent to a concrete, safe, localized, shoppable plan.

The planning question is:

> I want to build, fix, install, or make this. What exactly do I need, what can I use
> instead, where can I get it near me, what will it cost, and what should I do first?

DIY shopping is fragmented because instructions, videos, store inventory, tool requirements,
regional terminology, quantities, and safety constraints rarely live in one place. A useful
planner should become the translation layer between project intent and real-world procurement.

## Product Thesis

Build a local-first DIY planning experience that creates project-specific material lists, explains
required tools, suggests safe substitutions, and helps users buy, borrow, rent, or schedule what
they need nearby.

The most valuable wedge is not a generic marketplace. The wedge is a project-to-shopping-list
engine that understands the difference between an idea, a bill of materials, a safe alternative,
a local store result, and a tool decision.

## Positioning

### Short Positioning

A local-first DIY project planner that builds a materials list, checks nearby availability,
suggests substitutions, and helps people buy, borrow, rent, or schedule what they need.

### Emotional Positioning

The calm shopping companion for DIY projects: from inspiration to exact materials, local stock,
tool options, and a plan that can actually be executed this weekend.

### Strategic Wedge

Start as a planning and procurement layer rather than a full marketplace. Marketplaces,
inventory integrations, local store partnerships, and checkout flows are all hard. A planning
layer can create immediate value through:

- Accurate bills of materials.
- Store-specific shopping lists.
- Price and availability comparisons where possible.
- Tool buy, rent, or borrow recommendations.
- Substitution rules.
- Pickup-route planning.
- Project-specific buying guidance.

## Target Users

### Beginner Homeowner or Renter

This user wants to fix, decorate, improve, or build something but is overwhelmed by terminology,
store aisles, incompatible parts, and tool requirements.

Needs:

- Plain-language material lists.
- Beginner-safe instructions.
- Tool alternatives.
- Confidence that they are buying the right thing.
- Budget estimates.
- Nearby availability.

Common pain points:

- Not knowing whether screw, anchor, adhesive, lumber, paint, or finish types are interchangeable.
- Buying too much or too little.
- Discovering halfway through that a tool or consumable is missing.
- Not knowing when a project crosses into professional territory.

### Practical Weekend DIYer

This user is comfortable with basic tools and wants fast, reliable shopping support.

Needs:

- Fast materials lists.
- Store pickup optimization.
- Substitution suggestions.
- Reusable project templates.
- Cost optimization.

Common pain points:

- Wasting time visiting multiple stores.
- Needing the useful parts of a long tutorial without watching the whole thing.
- Wanting good enough, safe, available-today recommendations.

### Maker or Hobbyist

This user builds custom items across hardware, craft, electronics, furniture, and fabrication
categories.

Needs:

- Cross-category shopping.
- Cut lists.
- Quantity calculation by dimensions.
- Compatibility constraints.
- Repeatable project plans.

Common pain points:

- Hardware stores do not understand multi-domain projects.
- Materials may come from hardware stores, craft stores, electronics suppliers, lumber yards,
  fabric shops, and online vendors.

### Contractor-Adjacent Advanced User

This user may be a side hustler, handyman, small renovation worker, or skilled DIYer who cares
about time, reliability, repeatability, and margins.

Needs:

- Pro-grade alternatives.
- Unit-cost comparison.
- Bulk quantities.
- Supplier preferences.
- Repeatable estimates.

Common pain points:

- Consumer DIY apps are too simplistic.
- Store sites are poor at project-level planning.
- Estimates need to become repeatable client-ready artifacts.

## Jobs To Be Done

### Functional Jobs

1. Convert a project idea into a concrete plan.
2. Estimate quantity and cost.
3. Find local availability.
4. Choose whether to buy, rent, borrow, substitute, or skip a tool.
5. Avoid incorrect or unsafe purchases.
6. Sequence the project so the user knows what to buy before starting.

### Emotional Jobs

1. Make the user feel competent.
2. Reduce fear of buying the wrong thing.
3. Help the user avoid embarrassing questions in the store.
4. Make a weekend project feel doable.
5. Give the user confidence that money will not be wasted.

### Social Jobs

1. Help the user show a partner, roommate, or client what the plan costs.
2. Help the user share a shopping list with someone going to the store.
3. Help the user justify why a tool should be bought, rented, borrowed, or skipped.
4. Help the user document the project afterward.

## Product Principles

### Local First, Not Generic

A material list that ignores local availability is incomplete. The product should understand:

- User location.
- Nearby stores.
- Delivery times.
- Pickup windows.
- Regional product names.
- Metric and imperial units.
- Local code or safety differences where relevant.
- Climate and seasonality.

### Project First, Not SKU First

Most shopping sites are SKU catalogs, while DIYers think in projects. The planner should model:

- Project type.
- Space and context.
- Constraints.
- Dimensions.
- Skill level.
- Tools already available.
- Materials needed.
- Substitutions.
- Steps.
- Safety notes.
- Store availability.
- Post-project leftovers.

### Confidence Over Maximal Choice

Beginners do not need dozens of similar screws, anchors, paints, or adhesives. They need:

- The recommended option.
- Why it is recommended.
- What to avoid.
- Acceptable alternatives.

### Explicit Uncertainty

DIY advice can become unsafe when it is overconfident. The product should say things like:

- I need one more measurement.
- This depends on wall type.
- Do not use this for load-bearing applications.
- Check local code.
- This may require a licensed electrician or plumber.
- I can estimate this, but verify in store.

### Human-Readable Expertise

The planner should translate expertise into clear language:

- Good beginner option.
- Cheaper, but less durable.
- Better outdoors.
- Avoid in bathrooms.
- Worth renting, not buying.
- Buy extra because cuts waste material.

## Core User Journey

### Phase 1: Capture Intent

The user can start with:

1. A text prompt such as "I want to build a raised garden bed."
2. A photo of a wall, room, broken item, garden patch, or inspiration object.
3. A saved inspiration URL from a blog, video, social post, or store page.
4. A template such as paint a room, build garage shelves, or patch drywall.
5. A measurement-first flow for rooms, walls, cuts, or object dimensions.

### Phase 2: Clarify Constraints

The app should ask only the minimum useful questions, progressively:

- Where are you located?
- What is your skill level?
- What tools do you already own?
- Are you renting or owning?
- Is the project indoor or outdoor?
- Is it permanent or temporary?
- Is budget or quality more important?
- Are there constraints involving pets, kids, humidity, load, or apartment rules?
- What are the dimensions?
- What is the surface type: drywall, brick, concrete, tile, wood, or plaster?
- What is the timeline: today, this weekend, or flexible?

### Phase 3: Generate Project Plan

The planner should output:

- Project summary.
- Difficulty.
- Time estimate.
- Cost estimate.
- Required materials.
- Optional upgrades.
- Required tools.
- Safety warnings.
- Steps.
- Quantities.
- Waste margin.
- Substitutions.
- Local shopping list.
- Pickup or delivery options.

### Phase 4: Localize Shopping

The user can select preferred shopping sources:

- Home Depot.
- Lowe's.
- Ace.
- Menards.
- Harbor Freight.
- Local hardware stores.
- Lumber yards.
- Garden centers.
- IKEA.
- Target or Walmart.
- Amazon.
- Facebook Marketplace.
- Tool libraries.
- Rental centers.
- Makerspaces.
- Municipal reuse centers.
- Craft stores.
- Electronics suppliers.
- Local classifieds.

The system should optimize for different modes:

- Cheapest.
- Fewest stops.
- Available today.
- Best quality.
- Delivery.
- Low waste.
- Sustainable or reused.
- Local independent stores.
- Rental instead of purchase.

### Phase 5: Review and Edit

The user should be able to change:

- Dimensions.
- Style.
- Budget.
- Stores.
- Quality tier.
- Colors or finishes.
- Tool ownership.
- Skill level.
- Quantity.
- Substitutions.

Every meaningful edit should recalculate the plan.

### Phase 6: Execute

The app can support:

- Checklist mode.
- Step-by-step mode.
- Before-you-start checklist.
- Shopping checklist.
- In-store aisle grouping.
- Barcode scanning.
- Receipt capture.
- Leftover tracking.
- Project notes.
- Issue troubleshooting.
- Photo progress.

### Phase 7: Learn From Outcome

After completion, the app should ask:

- What did you actually buy?
- What was missing?
- What was unused?
- What did it cost?
- Did substitutions work?
- Were instructions accurate?
- Would you recommend this plan?

This feedback can improve future estimates and local recommendations.

## Feature Architecture

### Project Intake Engine

Inputs can include:

- Text prompts.
- Photos.
- Links.
- Measurements.
- Project templates.
- Voice notes.
- Uploaded plans.
- Previous shopping receipts.

A structured project object might look like this:

```json
{
  "project_type": "raised_garden_bed",
  "location_context": "outdoor",
  "dimensions": {
    "length": 96,
    "width": 48,
    "height": 18,
    "unit": "in"
  },
  "skill_level": "beginner",
  "constraints": ["food_safe", "weather_resistant"],
  "timeline": "this_weekend",
  "budget_preference": "balanced"
}
```

The intake system should distinguish:

- Project category.
- Material domain.
- Risk level.
- Required measurements.
- Open questions.
- Local dependencies.
- Regulatory or safety concerns.

### Bill Of Materials Engine

The bill of materials engine is central. It should calculate:

- Quantities.
- Unit conversions.
- Waste allowance.
- Compatible sizes.
- Fastener counts.
- Adhesive or paint coverage.
- Lumber dimensions.
- Sheet goods.
- Finish materials.
- Consumables.
- Personal protective equipment.
- Cleanup supplies.
- Tool requirements.

It should separate:

1. Materials consumed, such as wood, screws, paint, glue, anchors, soil, wire, or pipe.
2. Consumables, such as sandpaper, blades, drill bits, tape, brushes, or gloves.
3. Tools, such as drills, saws, clamps, levels, stud finders, or ladders.
4. Safety equipment, such as glasses, masks, hearing protection, gloves, or respirators.
5. Optional upgrades, such as premium finishes, better fasteners, weatherproofing, or trim.
6. Contingency items, such as extra paint, spare boards, or extra anchors.

Each item can have quality tiers:

- Cheapest viable.
- Recommended.
- Premium.
- Pro-grade.
- Eco or reclaimed.
- Renter-safe.
- Kid or pet-safe.
- Outdoor or weatherproof.

Every estimate should include confidence:

- High confidence: direct formula with low uncertainty.
- Medium confidence: depends on surface or condition.
- Low confidence: user must verify measurements or material.

Example:

> Paint: 1 gallon, medium confidence. Assumes two coats on roughly 320 square feet of
> wall area. Add another quart if the existing color is dark.

### Tool Intelligence

Tool planning is a major differentiator. Every tool should support these states:

- Already owned.
- Can borrow.
- Can rent.
- Should buy.
- Not necessary with an alternative method.
- Available as a manual version.
- Available as a store service.

The product should answer:

- Is this tool required or just convenient?
- How many times will the user likely use it?
- Is it safe for beginners?
- Does renting make sense?
- Is there a low-cost alternative?
- Can the store cut material instead?
- Can a local makerspace, library, or tool library provide it?

Examples:

- Miter saw: buy for repeated woodworking, rent or borrow for one project, or ask the
  store to cut simple boards.
- Stud finder: usually worth buying because it is low cost, beginner-friendly, and useful
  across many projects.
- Hammer drill: rent for one concrete project; buy only if masonry projects are frequent.
- Paint sprayer: often not beginner-recommended for one room because masking, cleanup,
  and ventilation can outweigh speed.

### Local Inventory Layer

Potential data sources include:

1. Retailer APIs where available.
2. Affiliate or product feeds.
3. Public product pages.
4. Search APIs.
5. Store availability scraping where legally permitted.
6. Local store partnerships.
7. User-submitted confirmations.
8. Manual fallback search terms.
9. Browser extension mode.
10. Receipt and barcode matching.

Localization dimensions include:

- Country.
- Postal code.
- Distance.
- Store type.
- Stock availability.
- Price.
- Pickup or delivery.
- Regional names.
- Units.
- Product standards.
- Code or safety notes.
- Climate and season.

Store grouping should optimize more than SKU price. It should consider:

- Total cost.
- Drive time.
- Stock confidence.
- Return convenience.
- Item compatibility.
- Store cut services.
- Rental availability.
- Opening hours.
- Urgency.
- Delivery fees.

Example:

> Best plan: one stop at Lowe's, $142 estimated, all available for pickup today except
> cedar boards, which have low stock.
>
> Cheaper plan: Home Depot plus Harbor Freight, $119, two stops, adds 28 minutes.
>
> Local plan: Ace Hardware plus neighborhood lumber yard, $158, better fasteners and
> cut-to-size lumber.

### Substitution Engine

Substitutions are where trust is won or lost. Types include:

1. Equivalent: same function, different brand.
2. Acceptable: slight tradeoff, still safe.
3. Conditional: works only if project constraints match.
4. Not recommended: common mistake.
5. Unsafe: should block or strongly warn.

Examples:

- Drywall anchors: same wall type and load rating can be equivalent; toggle bolts may be
  conditional; plastic anchors can be wrong for heavy shelves.
- Outdoor screws: exterior-rated deck screws may be acceptable; untreated indoor screws
  are not suitable outside.
- Paint: bathroom paint may be needed in humid areas; flat paint is often a poor choice
  for high-touch hallways.

The system should explain substitutions in plain language.

## Project Templates

### Home Repair

- Patch a small drywall hole.
- Patch a large drywall hole.
- Fix a squeaky door.
- Replace a door handle.
- Recaulk a bathtub.
- Unclog a sink at a basic level.
- Weatherstrip a door.
- Repair a screen.
- Replace an outlet cover.
- Touch up paint.

### Home Improvement

- Paint a room.
- Install curtain rods.
- Hang shelves.
- Install floating shelves.
- Install a TV mount.
- Build closet shelves.
- Add under-cabinet lighting.
- Install peel-and-stick backsplash.
- Upgrade cabinet hardware.

### Furniture And Woodworking

- Build a workbench.
- Build a simple bookshelf.
- Build garage shelves.
- Build a planter box.
- Refinish a table.
- Make a desktop.
- Assemble a pipe shelf.
- Build a cat wall.
- Build a shoe rack.

### Outdoor And Garden

- Raised garden bed.
- Planter box.
- Trellis.
- Compost bin.
- Drip irrigation starter.
- Balcony garden setup.
- Patio string lights.
- Garden path.
- Mulch bed refresh.

### Craft And Maker

- LED sign.
- Cosplay prop.
- Pegboard tool wall.
- Bike storage rack.
- Acoustic panels.
- Simple electronics enclosure.
- Custom storage bins.

### Moving And Rental-Friendly

- Renter-safe shelves.
- Command-strip planning.
- Temporary room divider.
- No-drill curtain solution.
- Removable backsplash.
- Cable management.
- Furniture anchoring options.

## MVP Strategy

The full vision requires project understanding, measurement math, inventory availability,
substitution logic, tool rental logic, safety constraints, localization, and commerce. That is too
much for a first launch.

The MVP should prove this claim:

> Users trust a generated material and tool list enough to take it shopping.

### MVP Project Types

Start with 5 to 10 common and tractable project templates:

1. Paint a room.
2. Install curtain rods.
3. Hang wall shelves.
4. Build a raised garden bed.
5. Patch drywall.
6. Build garage shelves.
7. Recaulk a bathtub or sink.
8. Install peel-and-stick backsplash.
9. Build a simple planter box.
10. Mount a pegboard or tool wall.

### MVP Inputs

- Location or postal code.
- Dimensions.
- Skill level.
- Existing tools.
- Preferred store.
- Quality or budget preference.

### MVP Outputs

- Material list.
- Tool list.
- Estimated cost.
- Local search links.
- Store-specific query links.
- Substitution notes.
- Safety notes.
- Printable and shareable checklist.

### Local Shopping Version 1

Instead of requiring real-time inventory integrations on day one, the MVP can generate:

- Store-specific search links.
- Exact product specs to look for.
- Acceptable alternatives.
- Items to avoid.
- A way for the user to mark found, not found, or substituted.

Example:

> Search Home Depot for: "#8 x 2 in exterior deck screws 1 lb star drive."
>
> Acceptable: exterior-rated, corrosion-resistant, 1.5 to 2.5 inches depending on board
> thickness.
>
> Avoid: drywall screws and interior screws.

## V1 After MVP

### Local Inventory Confidence

Add soft availability:

- Nearby stores.
- Product pages.
- Estimated price.
- Pickup availability if accessible.
- Last checked time.
- Confidence score.

Avoid claiming certainty if stock data is unreliable.

### Shopping Route Optimization

Let users choose:

- Cheapest.
- One-stop.
- Fastest pickup.
- Best quality.
- Local independent.
- Low-waste.
- Delivery-only.

### Receipt Learning

After shopping, the user can upload a receipt or mark purchased items. The system learns:

- Actual price.
- Actual substitutions.
- Missing recommendations.
- Over- or under-estimated quantities.
- Local naming differences.

### Project Memory

The app can remember:

- Tools owned.
- Favorite stores.
- Previous materials.
- Leftovers.
- Home details.
- Room dimensions.
- Wall types.
- Preferred brands.
- Skill level growth.

### Collaboration

DIY is often collaborative. Add:

- Share list with partner.
- Assign shopping to someone.
- Approve budget.
- Comment on project.
- Contractor or helper mode.

## V2 And Ambitious Features

### Computer Vision For Project Context

Use photos to detect clues such as wall type, room scale, existing fixtures, object dimensions,
damage type, material type, missing parts, and likely project category. Image-based inference
should be framed as "looks like," not certain.

### AR Measurement And Placement

Useful for shelves, art, curtain rods, furniture layout, garden beds, tile, wallpaper, acoustic
panels, and similar projects. Users can preview placement, dimensions, quantity, spacing, and cut
layout.

### Cut-List Optimizer

For wood, pipe, trim, fabric, wire, tile, and similar materials, support:

- Waste minimization.
- Board-size selection.
- Saw kerf.
- Cut grouping by material.
- Printable cut diagrams.
- Store-cut instructions.
- Buy-this-many 8-foot boards versus 10-foot boards guidance.

### Rental And Borrowing Network

Integrate with or reference:

- Home improvement store rentals.
- Local rental shops.
- Tool libraries.
- Makerspaces.
- Neighbor sharing.
- Community groups.

Example:

> Rent a hammer drill for $28 per day instead of buying a $119 model, unless you plan
> three or more masonry projects this year.

### Local Expert Layer

Add optional escalation:

- Ask a local handyman.
- Book a consultation.
- Verify shopping list.
- Request a quote.
- Get professional review for structural, electrical, or plumbing risks.

### Project Marketplace

Eventually, the platform could host:

- Creator-made DIY plans.
- Local material packs.
- Affiliate shopping bundles.
- Expert-verified plans.
- Seasonal project collections.
- Localized versions.

## Data Model

### User

```ts
type User = {
  id: string;
  postalCode?: string;
  country?: string;
  skillLevel?: "beginner" | "intermediate" | "advanced" | "pro";
  preferredUnits: "imperial" | "metric";
  preferredStores: StorePreference[];
  ownedTools: ToolOwnership[];
  homeProfile?: HomeProfile;
};
```

### Project

```ts
type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: "draft" | "shopping" | "in_progress" | "complete";
  locationContext:
    | "indoor"
    | "outdoor"
    | "wet_area"
    | "structural"
    | "electrical"
    | "plumbing";
  dimensions: MeasurementSet;
  constraints: Constraint[];
  skillLevel: SkillLevel;
  riskLevel: "low" | "medium" | "high";
  steps: ProjectStep[];
  billOfMaterials: BOMItem[];
  tools: ToolRequirement[];
  safetyNotes: SafetyNote[];
};
```

### Bill Of Materials Item

```ts
type BOMItem = {
  id: string;
  name: string;
  category: "material" | "consumable" | "fastener" | "finish" | "safety" | "cleanup";
  quantity: number;
  unit: string;
  wasteFactor?: number;
  required: boolean;
  specs: ProductSpec[];
  acceptableSubstitutions: SubstitutionRule[];
  avoid: string[];
  confidence: "low" | "medium" | "high";
  rationale: string;
};
```

### Tool Requirement

```ts
type ToolRequirement = {
  id: string;
  name: string;
  requiredness: "required" | "recommended" | "optional" | "alternative";
  buyRentBorrow: "buy" | "rent" | "borrow" | "already_owned" | "store_service";
  beginnerSafety: "easy" | "moderate" | "caution";
  alternatives: string[];
  rationale: string;
};
```

### Store

```ts
type Store = {
  id: string;
  name: string;
  type:
    | "big_box"
    | "local_hardware"
    | "lumber_yard"
    | "craft"
    | "garden"
    | "online"
    | "rental"
    | "reuse";
  location?: GeoPoint;
  services: StoreService[];
};
```

### Product Candidate

```ts
type ProductCandidate = {
  id: string;
  retailer: string;
  name: string;
  price?: number;
  currency?: string;
  url?: string;
  availability?: "in_stock" | "low_stock" | "out_of_stock" | "unknown";
  pickupAvailable?: boolean;
  deliveryAvailable?: boolean;
  matchQuality: "exact" | "acceptable" | "conditional" | "poor";
  warnings: string[];
};
```

## Trust And Safety Model

### Low-Risk Projects

Examples:

- Painting.
- Organizing.
- Basic decor.
- Simple furniture.
- Garden planters.

The product can provide direct guidance.

### Medium-Risk Projects

Examples:

- Wall mounting.
- Tile.
- Light plumbing fixtures.
- Power tool use.
- Outdoor structures.

The product should include warnings and verification steps.

### High-Risk Projects

Examples:

- Electrical wiring.
- Gas.
- Structural changes.
- Roofing.
- Load-bearing walls.
- Major plumbing.
- Code-regulated work.
- Child-safety installations.
- Fire safety.

The product should limit itself to planning, education, and referral to a licensed professional.

### Safety Behavior

The product should:

- Detect risk early.
- Ask clarifying questions.
- Avoid overconfident instructions.
- Include personal protective equipment.
- Include stop conditions.
- Cite code or manufacturer requirements where possible.
- Route users to professionals when needed.

Example stop condition:

> Stop and get professional help if the outlet box is not rated for a ceiling fan, if wiring
> colors do not match expected patterns, or if you are not able to fully shut off power at
> the breaker.

## Localization Challenges

### Product Naming

Terms vary by region:

- Drywall, plasterboard, and gypsum board.
- Spackle and filler.
- Rawlplug and wall anchor.
- Nominal lumber sizes and actual dimensions.
- Treated timber and pressure-treated lumber.
- Masonry bits and SDS bits.

### Units

Support:

- Inches, feet, millimeters, centimeters, and meters.
- Gallons and liters.
- Board feet and linear meters.
- Wire gauge systems.
- Screw gauge systems.
- Pipe sizes.

### Regulations And Norms

Localization can involve:

- Electrical code.
- Plumbing code.
- Rental limitations.
- Fire safety.
- Building permits.
- HOA rules.
- Waste disposal.
- Paint or chemical restrictions.

### Climate

Climate affects recommendations for:

- Freeze and thaw.
- Humidity.
- UV exposure.
- Coastal corrosion.
- Termites.
- Snow load.
- Drought restrictions.
- Indoor moisture.

### Store Ecosystems

In the United States, users might expect support for Home Depot, Lowe's, Ace, Menards,
Harbor Freight, Tractor Supply, local lumber yards, and local hardware stores. Other markets can
have completely different retailer ecosystems.

### Availability Behavior

Stock data is often unreliable. The app should distinguish:

- Confirmed by retailer API.
- Shown on product page.
- Last seen.
- Likely available.
- Manual check needed.

## Commerce Strategy

### Affiliate Revenue

Affiliate revenue can come from outbound product links.

Pros:

- Easy to start.
- Aligns with shopping.

Cons:

- Can bias recommendations.
- Varies by retailer.
- Often low margin.

### Lead Generation

The app can send users to local hardware stores, rental shops, contractors, handymen, or
makerspaces.

Pros:

- Creates local value.
- Can monetize high-intent users.

Cons:

- Requires relationships and quality control.

### Subscription

A subscription can support power-user features:

- Saved home profiles.
- Advanced estimating.
- Cut-list optimization.
- Unlimited projects.
- PDF export.
- Collaboration.
- Pro templates.

### Pro Tier

A pro tier can support handymen, designers, and contractors:

- Client estimates.
- Branded shopping lists.
- Margin calculations.
- Repeat templates.
- Supplier preferences.

### Marketplace Take Rate

Later, the platform can sell or broker:

- Project kits.
- Tool rentals.
- Local bundles.
- Expert reviews.

### Sponsored Placements

Sponsored placements are risky for trust. If used, they must be clearly labeled and must never
override safety or compatibility.

## UX Structure

### Primary Screens

1. Project start.
2. Project brief.
3. Measurements.
4. Plan overview.
5. Materials list.
6. Shopping optimizer.
7. Step-by-step execution.
8. Post-project review.

### Project Start

The screen asks:

> What are you trying to make, fix, or install?

Example chips:

- Paint a room.
- Build a raised bed.
- Hang shelves.
- Patch drywall.
- Mount TV.
- Build a workbench.

### Project Brief

The project brief shows:

- Interpreted project.
- Missing information.
- Risk level.
- Required measurements.
- Recommended next question.

### Measurements

Measurements can be gathered through:

- Manual fields.
- Photo-assisted input.
- Common presets.
- Room calculators.
- An "I don't know" fallback.

### Plan Overview

Cards can summarize:

- Difficulty.
- Time.
- Estimated cost.
- Tools needed.
- Store options.
- Safety notes.

### Materials List

Materials can be grouped by:

- Buy now.
- Maybe needed.
- Already owned.
- Rent or borrow.
- Safety and cleanup.

Each row can show:

- Name.
- Quantity.
- Why it is needed.
- Acceptable specs.
- Local matches.
- Substitution rules.

### Shopping Optimizer

Modes can include:

- Cheapest.
- One-stop.
- Available today.
- Best quality.
- Local stores.
- Delivery only.
- No new tools.

### Step-By-Step Execution

Execution can be organized into:

- Before you start.
- Shop.
- Prep.
- Build or install.
- Finish.
- Clean up.
- Troubleshoot.

### Post-Project Review

The user can record:

- Actual cost.
- Leftover materials.
- Missing items.
- Photos.
- Notes.
- Whether to save the project as a template.

## Interaction Design Details

### Shopping-List Row

A strong shopping-list row includes:

- Checkbox.
- Item name.
- Required or optional badge.
- Quantity.
- Confidence.
- Why this matters.
- Acceptable alternatives.
- What to avoid.
- Local product candidates.

Example:

> Exterior deck screws, 2.5 in, 1 lb box.
>
> Required. Confidence: high. Use: fastening cedar boards. Acceptable: exterior-rated,
> corrosion-resistant, 2 to 3 inches depending on board thickness. Avoid: drywall screws
> and indoor wood screws. Local options: Ace, Home Depot, or Lowe's.

### Beginner Mode

Beginner mode explains:

- What the thing is.
- Where it is used.
- What mistake to avoid.

### Advanced Mode

Advanced mode compresses copy into:

- Specs.
- Units.
- Price.
- Stock.
- Alternatives.
- Formula.

### Explain Why

Every item needs rationale. Users trust a list more when they understand why the item exists.

### Can I Skip This?

For each item, the planner should explain:

- Yes, no, or maybe.
- Consequence of skipping.
- Safe alternative.

## AI System Behavior

### Suggested Pipeline

1. Parse user intent.
2. Classify project type and risk.
3. Identify required measurements.
4. Generate a structured project plan.
5. Calculate material quantities.
6. Resolve tool requirements.
7. Apply safety constraints.
8. Localize product terminology.
9. Match product candidates.
10. Rank shopping plans.
11. Explain tradeoffs.
12. Collect user corrections.

### Guardrails

The system should not:

- Generate high-risk instructions without warnings.
- Claim code compliance.
- Imply stock certainty unless verified.
- Bury safety items.
- Recommend unsafe substitutions.
- Optimize only for price.
- Recommend expensive tools when renting or borrowing is sensible.
- Assume wall or material type.
- Assume measurements.
- Recommend structural loads without proper verification.

### Structured Output

The AI should not merely produce prose. It should produce structured objects that the UI can
verify, edit, price, and localize.

## Example Flow: Raised Garden Bed

User input:

> I want to build a raised garden bed in my backyard, about 8 by 4 feet.

Clarifying questions:

1. Is this for edible plants?
2. Preferred height: 12, 18, or 24 inches?
3. Do you want cedar, pressure-treated, or budget lumber?
4. What is your postal code?
5. Do you own a drill and saw?

Plan output:

- Project: 8 ft by 4 ft raised garden bed, 18 inches high, beginner-friendly.
- Difficulty: beginner to intermediate.
- Time: 3 to 5 hours excluding shopping.
- Materials: cedar boards or alternative lumber, corner posts, exterior screws, optional
  landscape fabric, optional cardboard, soil and compost mix, gloves, drill bits, optional
  exterior-safe finish.
- Tools: drill or driver, saw or store-cut service, tape measure, square, level, shovel,
  rake, and optional clamps.
- Shopping: one-stop plan, cheaper two-store plan, local lumber-yard plan, and store-cut
  plan if the user has no saw.
- Substitutions: cedar is rot-resistant but expensive; untreated pine is cheaper but shorter
  lived; concrete blocks can be a tool-light alternative.
- Safety: wear gloves, confirm no underground utilities if digging, and consider soil
  contamination if placing directly on questionable ground.

## Example Flow: Hanging Shelves

User input:

> I want to install two shelves above my desk.

Clarifying questions:

1. What wall type: drywall, plaster, brick, concrete, or unknown?
2. What are the approximate shelf length and depth?
3. What will sit on the shelves?
4. Do you know where studs are?
5. Do you rent?

Plan output:

- Materials: shelves, brackets, screws, anchors if not mounting into studs, optional wall-safe
  patch kit, pencil, and tape.
- Tools: drill, level, stud finder, tape measure, screwdriver, and safety glasses.
- Key warning: recommended fasteners depend on wall type and expected load.
- Shopping: recommend load-appropriate anchors rather than merely linking to generic wall
  anchors.

## Competitive Landscape

### Retailer Project Guides

Strengths:

- Direct shopping.
- Product catalog.
- Local stores.

Weaknesses:

- Biased to one retailer's inventory.
- Generic instructions.
- Limited cross-store optimization.
- Less personalized.

### Content Platforms

Strengths:

- Inspiration.
- Personality.
- Visual learning.

Weaknesses:

- Inconsistent quality.
- Hard to turn into a shopping list.
- Poor localization.
- Hidden missing tools or materials.

### Project Apps

Strengths:

- Project organization.

Weaknesses:

- Often weak commerce and material intelligence.

### AI Assistants

Strengths:

- Flexible planning.

Weaknesses:

- Hallucination risk.
- Weak connection to local availability.
- Often not structured enough for shopping or execution.

### Differentiation

The strongest differentiators are:

1. Structured project-to-BOM conversion.
2. Local shopping optimization.
3. Tool buy, rent, or borrow intelligence.
4. Safe substitution engine.
5. Feedback loop from actual purchases.
6. Beginner-friendly explanations.
7. Store-agnostic trust.

## Go-To-Market

### Wedge Audience

Start with weekend DIYers and new homeowners or renters because they have high pain, frequent
projects, many beginner mistakes, search-driven behavior, and limited loyalty to professional
systems.

### Content Wedge

Create project landing pages such as:

- What to buy to paint a room.
- Raised garden bed shopping list.
- Tools needed to hang shelves.
- Drywall patch kit list.
- Beginner workbench materials.
- Curtain rod installation shopping list.

Each page can include:

- Calculator.
- Local shopping links.
- Substitutions.
- Printable checklist.
- Email capture.

### SEO Strategy

Target high-intent searches:

- Materials needed for a project.
- Project shopping list.
- Tools needed to do a task.
- How many screws for a project.
- How much paint for a room size.
- What anchors for floating shelves.
- What wood for raised garden bed.

### Viral And Sharing Loops

Support:

- Shareable shopping lists.
- Partner approval links.
- Sending a list to someone going to the store.
- Project completion photos.
- Creator plan templates.

### Partnerships

Potential partners:

- Local hardware stores.
- Tool libraries.
- Makerspaces.
- DIY creators.
- Community gardens.
- Apartment communities.
- Homeowner associations.
- Real estate agents.
- Home inspectors.

## Metrics

### Activation

- Project started.
- Project plan generated.
- Measurements completed.
- Material list viewed.
- Store selected.
- Shopping list exported.

### Trust

- User accepts generated list.
- User edits list.
- User marks items as useful.
- User reports a wrong item.
- Substitution accepted.
- Safety warning engagement.

### Commerce

- Outbound clicks.
- Affiliate conversion.
- Estimated cart value.
- Local store route selected.
- Rental recommendation accepted.

### Completion

- Project marked complete.
- Actual cost entered.
- Receipt uploaded.
- Photos uploaded.
- Leftover materials tracked.

### Retention

- Second project created.
- Tools saved.
- Home profile completed.
- Seasonal project engagement.
- Repeat store preferences.

### Quality

- Estimate accuracy.
- Quantity overage or underage.
- Product match quality.
- Stock accuracy.
- Project completion rate.
- Support or escalation rate.

## Risk Analysis

### Inventory Data Is Unreliable

Mitigations:

- Show confidence.
- Provide specs, not just SKUs.
- Allow manual replacement.
- Do not promise stock unless verified.
- Build retailer integrations gradually.

### DIY Safety Liability

Mitigations:

- Risk classifier.
- Conservative warnings.
- Stop conditions.
- Professional referral.
- Code or manufacturer references where possible.
- Avoid high-risk procedural guidance.

### AI Hallucination

Mitigations:

- Structured templates.
- Deterministic calculators.
- Product spec validation.
- Known-safe substitution rules.
- Expert-reviewed templates.
- Source-backed knowledge base.

### Too Many Project Categories

Mitigations:

- Start with limited templates.
- Route unsupported projects to planning-only mode.
- Collect demand data.
- Expand based on repeated use.

### Local Complexity

Mitigations:

- Start in one country or region.
- Support one or two major retailers.
- Allow generic search-link fallback.
- Localize terminology over time.

### Monetization Conflicts Trust

Mitigations:

- Disclose affiliate links.
- Rank by fit and safety first.
- Explain why recommendations appear.
- Provide non-sponsored alternatives.

## Technical Implementation Plan

### Phase 0: Research Prototype

Goal: validate that users want project-specific shopping lists.

Build:

- Five project templates.
- Calculator forms.
- Generated shopping list.
- Export and share.
- Manual local search links.

No inventory API is required.

Success:

- Users save or export lists.
- Users say the list helped them shop.
- Users complete projects.
- Users report fewer missing items.

### Phase 1: Structured MVP

Build:

- Project template system.
- BOM schema.
- Tool schema.
- Substitution schema.
- Simple local store preference.
- Shopping-list UI.
- PDF, print, and share.
- Post-project feedback.

Potential technical approach:

- Next.js app.
- Server-side project generation.
- Database for projects, users, and templates.
- Deterministic calculators.
- AI-assisted text where safe.
- Analytics events.

### Phase 2: Product Matching

Build:

- Product search abstraction.
- Retailer adapters.
- SKU matching.
- Availability confidence.
- Price comparison.
- Local store selector.

Example adapter interface:

```ts
interface RetailerAdapter {
  search(query: ProductSearchQuery): Promise<ProductCandidate[]>;
  getAvailability(productId: string, location: Location): Promise<AvailabilityResult>;
  getPrice(productId: string): Promise<PriceResult>;
}
```

### Phase 3: Personalization

Build:

- Owned tools.
- Saved home profile.
- Preferred stores.
- Past projects.
- Leftover inventory.
- Skill progression.

### Phase 4: Marketplace And Local Layer

Build:

- Tool rental integrations.
- Local store partnerships.
- Expert review.
- Creator templates.
- Pro accounts.

## UX Tone And Brand Fit

The product should not sound like:

> AI-powered hyperlocal marketplace optimization platform.

It should sound like:

> Tell me what you're making. I'll help you figure out what to buy, what to borrow, what
> to skip, and where to find it nearby.

The tone should be practical, calm, and specific. The interface should prioritize trust,
legibility, and useful project artifacts over generic SaaS polish.

## Suggested Case-Study Framing

### Possible Title

Local Materials Planner for DIY Projects

### Subtitle

Turning vague home-project intent into a safe, localized, shoppable plan.

### Story Arc

1. The problem: DIY inspiration is abundant, but shopping is fragmented and intimidating.
2. The insight: the hard part is translating a project into correct, local, compatible things
   to buy or rent.
3. The product idea: a project-first planning layer that creates material and tool lists,
   explains substitutions, and localizes shopping.
4. The design challenge: balance beginner confidence with safety and uncertainty.
5. The system: intake, constraints, BOM, tools, substitutions, local shopping, execution.
6. The prototype: common templates and store-search fallback.
7. The outcome: fewer wrong purchases, fewer store trips, and more confidence.

### Visual Artifacts

- Project intake screen.
- Measurement flow.
- Material list card.
- Substitution explanation.
- Tool buy, rent, or borrow decision.
- Local shopping optimizer.
- Step-by-step project mode.
- Post-project receipt feedback.

## Concrete MVP Feature List

### Must Have

- Project templates for 5 to 10 projects.
- Dimension intake.
- Skill-level intake.
- Existing-tools intake.
- Material list with quantities.
- Tool list with buy, rent, or borrow guidance.
- Safety notes.
- Substitution rules.
- Store preference.
- Local search links.
- Printable and shareable checklist.
- Feedback after shopping or project completion.

### Should Have

- Price estimate ranges.
- Quantity confidence.
- Shopping mode: cheapest versus one-stop.
- Already-own-this controls.
- Leftover materials tracking.
- Project duplication.
- Mobile-first shopping checklist.
- Notes and photos.

### Could Have

- Product page matching.
- Affiliate links.
- Barcode scan.
- Receipt upload.
- Route planning.
- Tool rental integrations.
- AR measurement.
- Creator templates.

### Not For MVP

- Real-time inventory across all stores.
- Structural project approval.
- Complex permitting guidance.
- In-app checkout across retailers.
- Fully general AI for every possible DIY task.
- Marketplace logistics.
- Pro contractor estimating suite.

## Open Questions

### Product Scope

1. Is the target beginner DIYers, advanced makers, or pro-adjacent users?
2. Which region should launch first?
3. Is this a standalone product, portfolio concept, or feature inside another product?
4. Should it bias toward big-box stores, local independents, or both?
5. Should the business optimize affiliate revenue or user trust first?

### Safety

1. Which project categories are excluded?
2. What requires professional referral?
3. How will safety guidance be reviewed?
4. How will uncertainty be communicated?

### Data

1. Which retailers can be integrated legally and reliably?
2. Can product feeds be accessed?
3. How will store availability be verified?
4. How will substitutions be validated?

### UX

1. How much can the user edit?
2. Should the interface be beginner-simple or expert-dense?
3. Is the primary mode mobile in-store use or desktop planning?
4. Should the app require account creation?

## Recommended First Experiment

Create a landing or prototype for one project:

> Build an 8 by 4 foot raised garden bed: local materials and tool planner.

Inputs:

- Postal code.
- Bed size.
- Height.
- Material preference.
- Tools owned.
- Store preference.

Outputs:

- Exact list.
- Tool options.
- Store search links.
- Cut list.
- Soil calculator.
- Substitution notes.
- Printable checklist.

This project is a strong starting point because it is common, seasonal, material-heavy,
tool-relevant, local-availability-dependent, substitution-friendly, and manageable from a safety
perspective.

Success criteria:

- Users complete the form.
- Users export or share the list.
- Users click store links.
- Users report fewer missing items.
- Users say they would use the planner for another project.

## Bottom-Line Recommendation

Start narrow with project templates and excellent shopping lists rather than a giant AI
marketplace.

The wedge is:

> Give me your project and location. I will produce a practical list of what to buy, what
> to rent or borrow, what can be substituted, what to avoid, and where to start shopping
> nearby.

Build trust through accurate quantities, plain-language explanations, safe uncertainty, local
usefulness, and post-project learning.

The strongest long-term moat is the structured knowledge graph connecting:

- Project types.
- Measurements.
- Material specs.
- Tools.
- Substitutions.
- Local product availability.
- User-owned tools.
- Regional terminology.
- Safety constraints.
- Real-world completion feedback.
