import {Button,Swipe,SwipeItem,Popup,Form, Field, CellGroup} from 'vant'
//放入数组中
let plugins = [
    Button,Swipe,SwipeItem,Popup,Form, Field, CellGroup
]
export default function getVant(app) {
    plugins.forEach((item)=>{
        return app.use(item)
    })
}