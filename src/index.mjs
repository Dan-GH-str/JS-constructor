import {model} from './models.mjs'
import { Site } from './classes/site.mjs'
import { SideBar } from './classes/sidebar.mjs'

const site = new Site('#site')

site.render(model)

const sidebar = new SideBar('#panel')

