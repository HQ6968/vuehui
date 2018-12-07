
import {store} from "../../store";

window.onresize = function (e) {

  store.commit("app/setMedia" , {
    winWidth:window.innerWidth,
    winHeight:window.innerHeight,
  })
}

export const getMediaType = (width) => {
  if(width < 700 ){
    return 'sm'
  }

  if(width > 1600 ){
    return 'lg'
  }

  return 'md'
}

export {default as Media} from './Media'