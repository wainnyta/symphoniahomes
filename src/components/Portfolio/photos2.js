const HOUSE_FRONT = 'Front Yard';
const HOUSE_BACK = 'Back Yard';
const BEDROOM = 'Bedroom';
const LIVING_ROOM = 'Living Room';
const BATHROOM = 'Bathroom';
const DINING_ROOM = 'Dining Room';
const KITCHEN = 'Kitchen';
const UTILITY_ROOM = 'Utility Room';
const LAUNDRY_ROOM = 'Laundry Room';
const GARAGE = 'Garage';
const DECK = 'Deck';
const OFFICE_ROOM = 'Office Room';
const BASEMENT = 'Basement';
const PROJECT_CRESTVIEW_2020 = 'Crestview 2020';
const PROJECT_STBONIFACE_2019 = 'St. Boniface 2019';
const TAGS = [
  'All',
  HOUSE_FRONT,
  HOUSE_BACK,
  LIVING_ROOM,
  KITCHEN,
  DINING_ROOM,
  //OFFICE_ROOM,
  BEDROOM,
  BATHROOM,
  BASEMENT,
  //UTILITY_ROOM,
  LAUNDRY_ROOM,
  GARAGE,
  // DECK,
];

const photos = [
  // 59 Capulet
  // FRONT
  {
    src: '/images/ProjectCapulet/2-Front2.jpg',
    src2: '/images/BeforeProjectCapulet/Front_copy.jpg',
    width: 6,
    height: 4,
    displayTag: HOUSE_FRONT,
    description:
      "Sitting on a nice, quiet and organized neighbourhood in Crestview, this eyesore property needed a lot of love and work to bring back its beauty. The transformation of the front yard doesn't only increase the value of the home itself, but we believe it also improves the value of the properties next door.",
    tag: ['outdoor', 'front'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/3-Front3.jpg',
    src2: '/images/BeforeProjectCapulet/Front_copy.jpg',
    width: 4.6,
    height: 3,
    displayTag: HOUSE_FRONT,
    description:
      "We added new gravels, new stepping stones, new exterior paint, new front door and new shrubs and that made a huge impact on this house's curb appeal.",
    tag: ['outdoor', 'front'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/4-Front4.jpg',
    src2: '/images/BeforeProjectCapulet/Front2.jpg',
    width: 6,
    height: 4,
    displayTag: HOUSE_FRONT,
    description:
      'This house was not properly maintained for long, so when we took ownership and worked on landscaping, we also regarding the whole house. We also put landscape fabric around the house to offer better weed and erosion control.',
    tag: ['outdoor', 'front'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/front 2.jpg',
    src2: '/images/BeforeProjectDumoulin/houseFront1.jpg',
    width: 6,
    height: 4,
    displayTag: HOUSE_FRONT,
    description:
      "Homebuyers' first impression probably starts the second they step out of their car. For that reason, curb appeal is key to making your home look inviting and attractive to potential homebuyers. For every project we work on, we always set a portion of budget on the curb appeal. For this project, we had the trees removed, created two cute flower beds and put gravels around the house and it totally made a huge impact on how the house looks from the outside.",
    tag: ['outdoor', 'front'],
    project: PROJECT_STBONIFACE_2019,
  },

  //LIVING ROOM
  {
    src: '/images/ProjectCapulet/7-Living2.jpg',
    src2: '/images/BeforeProjectCapulet/LivingRoom.jpg',
    width: 6,
    height: 4,
    displayTag: LIVING_ROOM,
    description:
      'This house was listed in September/October, we love how the stagers used these burnt orange sofas to bring the spirit of Fall. The huge window provides the room with lots of natural lights. Its generous size also makes the room a great space for having fun during any occasions.',
    tag: ['living'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/livingroom 1.jpg',
    src2: '/images/BeforeProjectDumoulin/livingroom2.JPG',
    width: 6,
    height: 4,
    displayTag: LIVING_ROOM,
    description:
      'We are glad that we were able to save the hardwood floors of this house by having them refinished. By keeping the floors, we not only save the renovation costs, but also help keep the original charm of the home, if not making it even more shine.',
    tag: ['living'],
    project: PROJECT_STBONIFACE_2019,
  },

  // KITCHEN
  {
    src: '/images/ProjectCapulet/10-Kitchen1.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen.jpg',
    displayTag: KITCHEN,
    description:
      "With this house's floor plan, we decided it made more sense to remove some walls and completely open up space between living room, kitchen and dining room. You need to swipe left to see the before picture of this kitchen to fully appreciate it. We are very happy on how the space was transformed. The whole living space benefits from more natural light which makes the space more entertaining and inviting.",
    tag: ['kitchen'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/10-Kitchen2.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen5.jpg',
    displayTag: KITCHEN,
    description:
      'This is the first project that we opted for glossy kitchen cabinets and we totally loved how the new kitchen looked. A white shiny kitchen in combination with white cabinet hardware, grey marble mosaic tile, stainless steel and quartz looks sleek and extremely elegant.',
    tag: ['kitchen'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/10-Kitchen3.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen3.jpg',
    displayTag: KITCHEN,
    description:
      'The completely open space allows homeowners to stay in contact and interact with guests and other family members while they are preparing the meals.',
    tag: ['kitchen'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/10-Kitchen4.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen2.jpg',
    displayTag: KITCHEN,
    description:
      'Another view of this modern, open kitchen where you can better visualize what are the two walls that got removed.',
    tag: ['kitchen'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/kitchen 2.jpg',
    src2: '/images/BeforeProjectDumoulin/kitchen1.JPG',
    width: 6,
    height: 4,
    displayTag: KITCHEN,
    description:
      'The classic L-shape kitchen worked great in this pretty small space. Despite the limited size, we were still able to provide this kitchen with a double sink, four stainless steel appliance (fridge, dishwasher, stove and microwave), plenty of counter space and storage.',
    tag: ['kitchen'],
    project: PROJECT_STBONIFACE_2019,
  },

  // DINING
  {
    src: '/images/ProjectCapulet/8-Dining1.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/DiningRoom.jpg',
    displayTag: DINING_ROOM,
    description:
      'Behind the glass door in this dining space is the pantry that we added during our renovation. We always think a lot about how we can add more storage to every house that we worked on.',
    tag: ['kitchen', 'dining room'],
    project: PROJECT_CRESTVIEW_2020,
  },

  // BATH
  {
    src: '/images/ProjectCapulet/12-MainBath.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/MainBath2.jpg',
    displayTag: BATHROOM,
    description:
      'When we first took over the house, this bathroom had a weird layout where the toilet positioned that it was facing the bathroom door. We relocated the vanity to where the toilet had been, and moved the toilet to the left of the vanity. With this simple switch, the vanity is now facing at the entrance and that made a huge impact on the flow and also offered a nice view when someone accesses the bathroom entrance.',
    tag: ['bathroom'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/15-HalfBath.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/HalfBath2.jpg',
    displayTag: BATHROOM,
    description:
      'We love this bathroom a lot. Even though the space is small, the grey feature wall in combination with the staging wall art and the stylish mirror definitely gives this small bathroom a more interesting look without breaking the budget.',
    tag: ['bathroom', 'ensuite bathroom'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/25-BasementBathroom1.jpg',
    width: 6,
    height: 4,
    displayTag: BATHROOM,
    src2: '/images/BeforeProjectCapulet/BasementBathroom.jpg',
    description:
      'This spacious and like-spa bathroom got major updates with new flooring, new vanity, new toilet, new lighting, refinished jetted tub and deck-mounted tub faucet with diverter and hand-shower.',
    tag: ['bathroom'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/bathroom1.jpg',
    src2: '/images/BeforeProjectDumoulin/bathroom3.jpg',
    width: 6,
    height: 4,
    displayTag: BATHROOM,
    description:
      "Swipe left to see how rough this bathroom's condition was when we first bought the house. The toilet had been squeezed next to the small vanity (not visible in the before picture but you can just image there was a toilet positioned on the right of the vanity). We flipped the toilet to the opposite wall , and that allows us to go with a bigger vanity with more drawer storage.",
    tag: ['bathroom'],
    project: PROJECT_STBONIFACE_2019,
  },

  // BEDROOM
  {
    src: '/images/ProjectCapulet/13-Master1.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/MasterBedroom.jpg',
    displayTag: BEDROOM,
    tag: ['bedroom', 'master bedroom'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/18-Room2.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/Bedroom3.jpg',
    displayTag: BEDROOM,
    tag: ['bedroom'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/24-BasementBedroom.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/BasementBedroom.jpg',
    displayTag: BEDROOM,
    tag: ['bedroom'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/bedroomA 1.jpg',
    src2: '/images/BeforeProjectDumoulin/bedroom1.jpg',
    width: 6,
    height: 4,
    displayTag: BEDROOM,
    tag: ['bedroom'],
    project: PROJECT_STBONIFACE_2019,
  },
  {
    src: '/images/ProjectDumoulin/bedroomB 2.jpg',
    width: 6,
    height: 4,
    displayTag: BEDROOM,
    tag: ['bedroom'],
    project: PROJECT_STBONIFACE_2019,
  },
  {
    src: '/images/ProjectDumoulin/bedroomC 1.jpg',
    src2: '/images/BeforeProjectDumoulin/bedroomBasement.JPG',
    width: 6,
    height: 4,
    displayTag: BEDROOM,
    tag: ['bedroom'],
    project: PROJECT_STBONIFACE_2019,
  },

  // OFFICE
  {
    src: '/images/ProjectCapulet/17-Room1_1.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/Bedroom2.jpg',
    displayTag: OFFICE_ROOM,
    tag: ['bedroom', 'office'],
    project: PROJECT_CRESTVIEW_2020,
  },

  // BASEMENT
  {
    src: '/images/ProjectCapulet/20-Basement2.jpg',
    width: 6,
    height: 4,
    displayTag: BASEMENT,
    description:
      'Basements are not necessarily dark, cold and creepy. This house had a huge full unfinished basement and we were excited to unfold its potential through renovation. We are happy to create additional family gathering space in this basement.',
    tag: ['basement'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/21-Basement3.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/BasementFireplace.jpg',
    displayTag: BASEMENT,
    description:
      'The fireplace that you saw in this picture just stopped working before the house was listed for sale. We decided to have the fireplace fixed because we wanted to keep the gas fireplace, even though replacing it with an electric fireplace is more cost-saving option, because we give function and design than profit if we have to choose.',
    tag: ['basement'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/22-Basement4.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Basement.jpg',
    displayTag: BASEMENT,
    description:
      'This basement comes with a new family room, full bathroom, legal bedroom and a wet bar. We also try to bring more value to a house as much as we can so that the new owner are worried-free about renovation.',
    tag: ['basement'],
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/basement 6.jpg',
    src2: '/images/BeforeProjectDumoulin/basement6.JPG',
    width: 6,
    height: 4,
    displayTag: BASEMENT,
    description:
      "In all of our flipping houses, we always try to make the basement a livable space more than just a storage space. We did't have enough budget to completely finish this basement, but we are happy that we were able to transform it form a dark, scary basement to a bright and functional space.",
    tag: ['basement', 'dumoulin'],
    project: PROJECT_STBONIFACE_2019,
  },
  {
    src: '/images/ProjectDumoulin/basement 1.jpg',
    src2: '/images/BeforeProjectDumoulin/basement6.JPG',
    width: 6,
    height: 4,
    displayTag: BASEMENT,
    description:
      'We love the rustic look of this basement. Thank to our stager for the advice of painting the ceiling beams in black. The high contrast between the black beams and the white walls makes this basement a perfect man cave for its new owner.',
    tag: ['basement', 'dumoulin'],
    project: PROJECT_STBONIFACE_2019,
  },

  // UTILITY
  {
    src: '/images/ProjectCapulet/27-BasementLaundryRoom.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/BasementUtilB.jpg',
    displayTag: LAUNDRY_ROOM,
    tag: ['basement', 'utility'],
    description:
      "Fresh starts can't happen with dirty clothes. As big of a deal as the laundry is, we aim to turn the laundry room in all our flipping projects to a bright and tidy space so that you no longer have annoying or scary feeling to visit the room.",
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/laundryroom 1.jpg',
    src2: '/images/BeforeProjectDumoulin/basement3.jpg',
    width: 6,
    height: 4,
    displayTag: LAUNDRY_ROOM,
    tag: ['basement', 'utility', 'dumoulin'],
    description:
      'This functional laundry space with wire shelves and a big countertop installed will definitely helps your laundry task easier.',
    project: PROJECT_STBONIFACE_2019,
  },

  // BACKYARD
  {
    src: '/images/ProjectCapulet/32-Backyard1.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Backyard.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
    description:
      'The former backyard was not regularly maintained, which made it a jungle with tons of big and small tress and overcrowded decorative items. We removed all trees, reused the bricks from the front yard and turn them into a brick patio at the back yard. We also laid new sod and grass and those updates completely made this back yard a fabulous entertaining space for the new homeowners.',
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectCapulet/28-Deck1.jpg',
    width: 6,
    height: 4,
    // src2: '/images/BeforeProjectDumoulin/Rear.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
    description:
      'The functional outdoor living space is enhanced with a big deck attached to the back of the house. We believe this deck will become a hub of activity. It adds extra space for the new family owners to host parties for friends and family get-togethers.',
    project: PROJECT_CRESTVIEW_2020,
  },

  // dumoulin
  {
    src: '/images/ProjectDumoulin/backyard 1.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/Rear.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
    description:
      'This backyard used to be very dull and boring but got a huge transformation to a fun, functional and welcoming space where the homeowners can entertain and relax.',
    project: PROJECT_STBONIFACE_2019,
  },
  {
    src: '/images/ProjectDumoulin/backyard 3.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/Backyard.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
    description:
      'Can you even recognize it is the same backyard? We added a complete new fence and gate to provide increase privacy and security to the house.',
    project: PROJECT_STBONIFACE_2019,
  },
  {
    src: '/images/ProjectDumoulin/hammock.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/backyard6.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
    description:
      'So far, this hammock is our most favourite decorative item on all of our flipping house projects. When we decided to build the fence at the back yard of this project, we debated whether we should position the fence before or after the trees (those trees that you easily identify in after picture). Because we wanted to keep the side door of the garage between the back wall of the house and the fence, we decided to move the fence to behind those trees. While it creates easier access to the house from the garage, the trees just look so odd standing there. Then we googled for some ideas and found those trees will make a perfect spot to hang hammock. Imaging yourself reading a book lying in the hammock in a sunny day… what a comfortable reading position.',
    project: PROJECT_STBONIFACE_2019,
  },

  // GARAGE
  {
    src: '/images/ProjectCapulet/34-Backyard4.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Garage.jpg',
    displayTag: GARAGE,
    tag: ['outdoor', 'backyard', 'garage'],
    description:
      'At Symphonia Homes, we understand garage provides better safety and convenience, as well as extra storage space. For many homebuyers, garage can be a great workshop for a variety of projects. Therefore, regardless how rough condition the garage is in our flipping house projects, we always set aside a portion of our renovation budget to have it repaired. We want to make sure we deliver a complete whole package to the homebuyers. ',
    project: PROJECT_CRESTVIEW_2020,
  },
  {
    src: '/images/ProjectDumoulin/garage.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/garage.jpg',
    displayTag: GARAGE,
    tag: ['outdoor', 'backyard', 'garage'],
    description:
      "This garage was in very bad shape when we took over the house. The garage floor was also sloped. We gave it a brand-new roof, new garage door, new remote opener, new paint and our great contractor was able to fix the sloping floor. The garage not only got a new look, but we are extremely happy that it was 'rescued' and be functional again.",
    project: PROJECT_STBONIFACE_2019,
  },
];

export {
  HOUSE_FRONT,
  HOUSE_BACK,
  BEDROOM,
  LIVING_ROOM,
  BATHROOM,
  DINING_ROOM,
  KITCHEN,
  UTILITY_ROOM,
  LAUNDRY_ROOM,
  OFFICE_ROOM,
  GARAGE,
  DECK,
  BASEMENT,
  photos,
  TAGS,
};
