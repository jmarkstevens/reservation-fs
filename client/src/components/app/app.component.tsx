import * as React from 'react'

interface Props {
  showAddReservation: boolean;
}

const AppComponent: React.FunctionComponent<Props> = ({
  showAddReservation,
}) => {
  console.log(
    'AppComponent showAddReservation:',
    showAddReservation ? 'show' : 'hide'
  )
  return <div className="app-container">AppComponent</div>
}

export default AppComponent
