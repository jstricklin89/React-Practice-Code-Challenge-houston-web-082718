import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushi.map(sushi => {
          return  <Sushi key={sushi.id} sushi={sushi} eatenSushis={props.eatenSushis} eatSushi={props.eatSushi} />
          })
        }
        <MoreButton updateSushi={props.updateSushi}  />
      </div>
    </Fragment>
  )
}

export default SushiContainer