// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Home from './components/Home'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import Header from './components/shared/Header'

const App = () => {

		return (
			<Fragment>
				<Header />
				<Routes>
					<Route path='/' element={<Home/>} />
          			<Route
          			/>
          			<Route
          			/>
				</Routes>
			</Fragment>
		)
}

export default App
