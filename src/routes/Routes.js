import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'

import { publicRoutes } from './pathUrls'
import RouteWithTemplate from './RouteWithTemplate'
import NotFoundPage from '../pages/NotFoundPage'

const Routes = ({ location }) => {
  const setRoute = route =>
    route.template ? (
      <RouteWithTemplate {...route} key={route.path} exact />
    ) : (
      <Route key={route.path} {...route} exact />
    )

  const routes = [
    publicRoutes.map(setRoute)
  ]

  return (
    <Switch>
      {routes}
      <Route component={NotFoundPage} />
    </Switch>
  )
}

Routes.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(Routes)
