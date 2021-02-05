var HOUSE_FRONT = 'Front yard';
var HOUSE_BACK = 'Back Yard';
var BEDROOM = 'Bedroom';
var LIVING_ROOM = 'Living Room';
var BATHROOM = 'Bathroom';
var DINING_ROOM = 'Dining Room';
var KITCHEN = 'Kitchen';
var UTILITY_ROOM = 'Utility Room';
var LAUNDRY_ROOM = 'Laundry Room';
var GARAGE = 'Garage';
var DECK = 'Deck';
var OFFICE_ROOM = 'Office Room';
var BASEMENT = 'Basement';

export const photos = [
  // 59 Capulet
  // FRONT
  {
    src: '/images/ProjectCapulet/2-Front2.jpg',
    src2: '/images/BeforeProjectCapulet/Front_copy.jpg',
    width: 6,
    height: 4,
    displayTag: HOUSE_FRONT,
    tag: ['outdoor', 'front'],
  },
  {
    src: '/images/ProjectCapulet/3-Front3.jpg',
    width: 4.6,
    height: 3,
    displayTag: HOUSE_FRONT,
    tag: ['outdoor', 'front'],
  },
  {
    src: '/images/ProjectCapulet/4-Front4.jpg',
    src2: '/images/BeforeProjectCapulet/Front2.jpg',
    width: 6,
    height: 4,
    displayTag: HOUSE_FRONT,
    tag: ['outdoor', 'front'],
  },
  {
    src: '/images/ProjectDumoulin/front 2.jpg',
    src2: '/images/BeforeProjectDumoulin/houseFront1.png',
    width: 6,
    height: 4,
    displayTag: HOUSE_FRONT,
    tag: ['outdoor', 'front'],
  },

  //LIVING ROOM
  {
    src: '/images/ProjectCapulet/7-Living2.jpg',
    src2: '/images/BeforeProjectCapulet/LivingRoom.jpg',
    width: 6,
    height: 4,
    displayTag: LIVING_ROOM,
    tag: ['living'],
  },
  {
    src: '/images/ProjectDumoulin/livingroom 1.jpg',
    src2: '/images/BeforeProjectDumoulin/livingroom2.JPG',
    width: 6,
    height: 4,
    displayTag: LIVING_ROOM,
    tag: ['living'],
  },

  // KITCHEN
  {
    src: '/images/ProjectCapulet/10-Kitchen1.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen.jpg',
    displayTag: KITCHEN,
    tag: ['kitchen'],
  },
  {
    src: '/images/ProjectCapulet/10-Kitchen2.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen5.jpeg',
    displayTag: KITCHEN,
    tag: ['kitchen'],
  },
  {
    src: '/images/ProjectCapulet/10-Kitchen3.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen3.jpeg',
    tag: ['kitchen'],
  },
  {
    src: '/images/ProjectCapulet/10-Kitchen4.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Kitchen2.jpeg',
    displayTag: KITCHEN,
    tag: ['kitchen'],
  },
  {
    src: '/images/ProjectDumoulin/kitchen 2.jpg',
    src2: '/images/BeforeProjectDumoulin/kitchen1.JPG',
    width: 6,
    height: 4,
    displayTag: KITCHEN,
    tag: ['kitchen'],
  },

  // DINING
  {
    src: '/images/ProjectCapulet/8-Dining1.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/DiningRoom.jpeg',
    displayTag: DINING_ROOM,
    tag: ['kitchen', 'dining room'],
  },

  // BATH
  {
    src: '/images/ProjectCapulet/12-MainBath.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/MainBath2.jpeg',
    displayTag: BATHROOM,
    tag: ['bathroom'],
  },
  {
    src: '/images/ProjectCapulet/15-HalfBath.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/HalfBath2.jpeg',
    displayTag: BATHROOM,
    tag: ['bathroom', 'ensuite bathroom'],
  },
  {
    src: '/images/ProjectCapulet/25-BasementBathroom1.jpg',
    width: 6,
    height: 4,
    displayTag: BATHROOM,
    src2: '/images/BeforeProjectCapulet/BasementBathroom.jpg',
    tag: ['bathroom'],
  },
  {
    src: '/images/ProjectDumoulin/bathroom1.jpg',
    src2: '/images/BeforeProjectDumoulin/bathroom3.png',
    width: 6,
    height: 4,
    displayTag: BATHROOM,
    tag: ['bathroom'],
  },

  // BEDROOM
  {
    src: '/images/ProjectCapulet/13-Master1.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/MasterBedroom.jpeg',
    displayTag: BEDROOM,
    tag: ['bedroom', 'master bedroom'],
  },
  {
    src: '/images/ProjectCapulet/18-Room2.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/Bedroom3.jpeg',
    displayTag: BEDROOM,
    tag: ['bedroom'],
  },
  {
    src: '/images/ProjectCapulet/24-BasementBedroom.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/BasementBedroom.jpg',
    displayTag: BEDROOM,
    tag: ['bedroom'],
  },
  {
    src: '/images/ProjectDumoulin/bedroomA 1.jpg',
    src2: '/images/BeforeProjectDumoulin/bedroom1.png',
    width: 6,
    height: 4,
    displayTag: BEDROOM,
    tag: ['bedroom'],
  },
  {
    src: '/images/ProjectDumoulin/bedroomB 2.jpg',
    width: 6,
    height: 4,
    displayTag: BEDROOM,
    tag: ['bedroom'],
  },
  {
    src: '/images/ProjectDumoulin/bedroomC 1.jpg',
    src2: '/images/BeforeProjectDumoulin/bedroomBasement.JPG',
    width: 6,
    height: 4,
    displayTag: BEDROOM,
    tag: ['bedroom'],
  },

  // OFFICE
  {
    src: '/images/ProjectCapulet/17-Room1_1.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/Bedroom2.jpeg',
    displayTag: OFFICE_ROOM,
    tag: ['bedroom', 'office'],
  },

  // BASEMENT
  {
    src: '/images/ProjectCapulet/20-Basement2.jpg',
    width: 6,
    height: 4,
    displayTag: BASEMENT,
    tag: ['basement'],
  },
  {
    src: '/images/ProjectCapulet/21-Basement3.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/BasementFireplace.jpeg',
    displayTag: BASEMENT,
    tag: ['basement'],
  },
  {
    src: '/images/ProjectCapulet/22-Basement4.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/Basement.jpg',
    displayTag: BASEMENT,
    tag: ['basement'],
  },
  {
    src: '/images/ProjectDumoulin/basement 6.jpg',
    src2: '/images/BeforeProjectDumoulin/basement6.JPG',
    width: 6,
    height: 4,
    displayTag: BASEMENT,
    tag: ['basement', 'dumoulin'],
  },
  {
    src: '/images/ProjectDumoulin/basement 1.jpg',
    src2: '/images/BeforeProjectDumoulin/basement6.JPG',
    width: 6,
    height: 4,
    displayTag: BASEMENT,
    tag: ['basement', 'dumoulin'],
  },

  // UTILITY
  {
    src: '/images/ProjectCapulet/27-BasementLaundryRoom.jpg',
    width: 4.5,
    height: 3,
    src2: '/images/BeforeProjectCapulet/BasementUtilB.jpeg',
    displayTag: UTILITY_ROOM,
    tag: ['basement', 'utility'],
  },
  {
    src: '/images/ProjectDumoulin/laundryroom 1.jpg',
    src2: '/images/BeforeProjectDumoulin/basement3.png',
    width: 6,
    height: 4,
    displayTag: UTILITY_ROOM,
    tag: ['basement', 'utility', 'dumoulin'],
  },

  // BACKYARD
  {
    src: '/images/ProjectCapulet/32-Backyard1.jpg',
    width: 6,
    height: 4,
    // src2: '/images/BeforeProjectDumoulin/Rear.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
  },
  {
    src: '/images/ProjectCapulet/28-Deck1.jpg',
    width: 6,
    height: 4,
    // src2: '/images/BeforeProjectDumoulin/Rear.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
  },

  // dumoulin
  {
    src: '/images/ProjectDumoulin/backyard 1.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/Rear.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
  },
  {
    src: '/images/ProjectDumoulin/backyard 3.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/Backyard.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
  },
  {
    src: '/images/ProjectDumoulin/hammock.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/backyard6.jpg',
    displayTag: HOUSE_BACK,
    tag: ['outdoor', 'backyard'],
  },

  // GARAGE
  {
    src: '/images/ProjectCapulet/34-Backyard4.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectCapulet/garage.png',
    displayTag: GARAGE,
    tag: ['outdoor', 'backyard', 'garage'],
  },
  {
    src: '/images/ProjectDumoulin/garage.jpg',
    width: 6,
    height: 4,
    src2: '/images/BeforeProjectDumoulin/garage.png',
    displayTag: GARAGE,
    tag: ['outdoor', 'backyard', 'garage'],
  },
];
