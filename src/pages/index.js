import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./index.module.scss"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo
        title="Home"
        image={data.image.childImageSharp.gatsbyImageData.images.fallback.src}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={150}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p className={styles.test}>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/test-1/">Go to test 1</Link> <br />
        <Link to="/test-2/">Go to test 2</Link> <br />
        <Link to="/test-3/">Go to test 3</Link> <br />
        <Link to="/test-4/">Go to test 4</Link> <br />
        <Link to="/test-5/">Go to test 5</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

export const StoriesQuery = graphql`
  query Index {
    image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
  }
`
