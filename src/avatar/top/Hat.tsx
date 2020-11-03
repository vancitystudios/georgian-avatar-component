import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'

export default class Hat extends React.Component {
  static optionValue = 'Hat'

  private filter1 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { filter1, mask1, mask2, path1, path2 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
      <defs>
          <rect id={path1} x='0' y='0' width='264' height='280'></rect>
          <path d='M264,5.68434189e-14 L264,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L160,199 L156,199 L156.001014,180.610469 C173.531251,172.282329 186.048207,155.114429 187.791415,134.867236 C193.568906,134.002616 198,129.018777 198,123 L198,123 L198,110 C198,104.05429 193.675838,99.1185422 188.000809,98.1660527 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,92 L76.0001873,98.1658855 C70.3246685,99.1179645 66,104.053942 66,110 L66,110 L66,123 C66,129.018777 70.4310943,134.002616 76.2090181,134.867253 C77.9518263,155.114813 90.4692242,172.28298 107.999984,180.610943 L108,199 L104,199 C64.633143,199 32.6454629,230.594012 32.0096459,269.809348 L32,271 L32,280 L0,280 L0,5.68434189e-14 L264,5.68434189e-14 Z'
              id={path2}></path>
      </defs>
      <mask id={mask1} fill='white'>
          <use xlinkHref={ '#' + path1}></use>
      </mask>
      <g id='Mask'></g>
      <g id='Top/Accesories/Hat' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
              <g id='Hat' strokeWidth='1' fillRule='evenodd' transform='translate(1.000000, 0.000000)'>
                  <mask id={mask2} fill='white'>
                      <use xlinkHref={ '#' + path2}></use>
                  </mask>
                  <g id='Mask-Hair'></g>
                  <path d='M123.182388,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L190,75 L75,75 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z' fill='#1F333C' mask={`url(#${mask2})`}></path>
                  <ellipse id='Hipster' fill='#1F333C' mask={`url(#${mask2})`} cx='132' cy='87.5' rx='122' ry='57.5'></ellipse>
                  <ellipse id='Very' fill='#15232A' mask={`url(#${mask2})`} cx='132' cy='82' rx='62' ry='25'></ellipse>
              </g>
              <FacialHair />{this.props.children}</g>
      </g>
  </g>
    )
  }
}
