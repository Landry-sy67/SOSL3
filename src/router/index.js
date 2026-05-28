import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/home.vue"
import About from "../components/About.vue"
import Contact from "../components/Contact.vue"
import Services from "../components/Services.vue"
import Destinations from "../components/Destinations.vue"
import Photos from "../components/photos.vue"
import Videos from "../components/videos.vue"
import North from "../components/north.vue"
import South from "../components/south.vue"
import West from "../components/west.vue"
import East from "../components/east.vue"
import Kigali from "../components/Kigali.vue"

const routes = [
  {
    path: '/',
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/services",
    name: "services",
    component: Services
  },
  {
    path: "/destinations",
    name: "destinations",
    component: Destinations
  },
  {
    path: "/north",
    name: "north",
    component: North
  },
  {
    path: "/south",
    name: "south",
    component: South
  },
  {
    path: "/west",
    name: "west",
    component: West
  },
  {
    path: "/east",
    name: "east",
    component: East
  },
  {
    path: "/kigali",
    name: "kigali",
    component: Kigali
  },
  {
    path: "/photos",
    name: "photos",
    component: Photos
  },
  {
    path: "/videos",
    name: "videos",
    component: Videos
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;