export interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface Social {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface POI {
  img: string;
  address: string;
  phone: number;
}

export interface WidgetData {
  poi: POI;
  weather: Weather;
  social: Social;
  type: string;
}


export const data: WidgetData[] = [
  {
    poi: {
      img: 'https://c1.staticflickr.com/1/25/56555767_b330d663f6_b.jpg',
      address: 'Abu Dhabi, UAE',
      phone: 12345678908
    },
    weather: {
      icon: 'cloud',
      temperature: 34,
      title: 'Super weather!',
      water: 24
    },
    social: {
      followers: 1234,
      following: 543,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSYICa6uGE79L1BGgFBOevyvHzcpf83fbuJi-OU1xEFHfjipqVQ',
      title: 'Mosque'
    },
    type: 'hotel'
  },
  {
    poi: {
      img: 'https://c1.staticflickr.com/2/1893/42618960230_a5b208ee4f_b.jpg',
      address: 'Kiev, Ukraine, Radisson Blu',
      phone: 5012345675
    },
    weather: {
      icon: 'sunny',
      temperature: 25,
      title: 'Super weather!',
      water: 11
    },
    social: {
      followers: 1000,
      following: 999,
      img: 'https://torange.biz/photo/41/IMAGE/cathedral-european-cathedrals-kiev-41138.jpg',
      title: 'Kiev'
    },
    type: 'hotel'
  },
  {
    poi: {
      img: 'https://www.maxpixel.net/static/photo/1x/Irkutsk-Lake-Baikal-Siberia-3229214.jpg',
      address: 'Baikal, Russia',
      phone: 790393939393
    },
    weather: {
      icon: 'cloud',
      temperature: 14,
      title: 'It`s a Fishing weather',
      water: 12
    },
    social: {
      followers: 3456,
      following: 2121,
      img: 'https://thumb.maxpixel.net/48/Boat-Sea-Sunset-Against-Day-Beach-1798264.jpg',
      title: 'Baikal Lake'
    },
    type: 'fishing'
  },
  {
    poi: {
      img: 'https://www.ncl.com/au/en/sites/default/files/Joy%20in%20Alaska.jpg',
      address: 'Alaska',
      phone: 3456778542
    },
    weather: {
      icon: 'sunny',
      temperature: 15,
      title: 'Brrr!',
      water: 3
    },
    social: {
      followers: 675,
      following: 211,
      img: 'https://www.maxpixel.net/static/photo/1x/Trailer-Ice-Alaska-Winter-Cold-Snow-672521.jpg',
      title: 'Fishing Lake'
    },
    type: 'fishing'
  },
  {
    poi: {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'München, Bayern',
      phone: 123123123

    },
    weather: {
      icon: 'cloud',
      temperature: 22,
      title: 'Normal weather for Germany!',
      water: 15
    },
    social: {
      followers: 6743,
      following: 1234,
      img: 'https://www.publicdomainpictures.net/pictures/160000/nahled/old-town-hall-munich.jpg',
      title: 'München'
    },
    type: 'tour'
  },
  {
    poi: {
      img: 'https://media.fshoq.com/images/418/panorama-of-barcelona-418-small.jpg',
      address: 'Barcelona, Spain',
      phone: 123452232

    },
    weather: {
      icon: 'sunny',
      temperature: 29,
      title: 'Super weather!',
      water: 24
    },
    social: {
      followers: 3333,
      following: 2222,
      img: 'https://s.iha.com/2282900011454/Ferienwohnungen-Barcelona-Rodriguez-House_11.jpeg',
      title: 'Barcelona'
    },
    type: 'tour'
  }
];
