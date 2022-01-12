import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        react-babylonjs
      </p>
      <h2>React for Babylon 3D engine</h2>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/brianzinn/react-babylonjs"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
