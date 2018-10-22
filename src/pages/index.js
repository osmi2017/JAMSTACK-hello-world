import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Gastby site for freecoodecamp hackathon</h1>
    <p>It's been a while since i want to participate, now it's time to build something.</p>
    <p>Hello world.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
