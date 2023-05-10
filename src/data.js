import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing confort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugiat laboriosam voluptates animi, a repudiandae. Tenetur fuga consequuntur mollitia. Natus illo, praesentium voluptate exercitationem odio rem doloremque laboriosam corrupti voluptates!',
    location: 'china',
    duration: 6,
    cost: 1400,
    image: tour1,
  },
  {
    id: 2,
    date: 'october 1th, 2023',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugiat laboriosam voluptates animi, a repudiandae. Tenetur fuga consequuntur mollitia. Natus illo, praesentium voluptate exercitationem odio rem doloremque laboriosam corrupti voluptates!',
    location: 'indonesia',
    duration: 11,
    cost: 2100,
    image: tour2,
  },
  {
    id: 3,
    date: 'september 15th, 2023',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugiat laboriosam voluptates animi, a repudiandae. Tenetur fuga consequuntur mollitia. Natus illo, praesentium voluptate exercitationem odio rem doloremque laboriosam corrupti voluptates!',
    location: 'hong kong',
    duration: 8,
    cost: 5000,
    image: tour3,
  },
  {
    id: 4,
    date: 'august 26th, 2023',
    title: 'Beautiful Africa',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugiat laboriosam voluptates animi, a repudiandae. Tenetur fuga consequuntur mollitia. Natus illo, praesentium voluptate exercitationem odio rem doloremque laboriosam corrupti voluptates!',
    location: 'Kenya',
    duration: 6,
    cost: 2100,
    image: tour4,
  },
  {
    id: 5,
    date: 'december 5th, 2023',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugiat laboriosam voluptates animi, a repudiandae. Tenetur fuga consequuntur mollitia. Natus illo, praesentium voluptate exercitationem odio rem doloremque laboriosam corrupti voluptates!',
    location: 'china',
    duration: 20,
    cost: 3300,
    image: tour5,
  },
  {
    id: 6,
    date: 'august 26th, 2023',
    title: 'Visit the Taj Mahal',
    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugiat laboriosam voluptates animi, a repudiandae. Tenetur fuga consequuntur mollitia. Natus illo, praesentium voluptate exercitationem odio rem doloremque laboriosam corrupti voluptates!',
    location: 'India',
    duration: 2,
    cost: 1500,
    image: tour6,
  },
]
