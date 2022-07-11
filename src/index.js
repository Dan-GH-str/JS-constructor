import {model} from './models'
import './styles/main.css'
import { Site } from './classes/site'
import { SideBar } from './classes/sidebar'

const site = new Site('#site')

site.render(model)

const sidebar = new SideBar('#panel')

