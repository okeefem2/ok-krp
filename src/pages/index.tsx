import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Michael O'Keefe Photography" />
      <div
        className="full-width-image"
        style={{
          backgroundImage: `url(${
            data.headerImage.childImageSharp.fluid.src
          })`,
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`,
        }}
        >
        {/* <Img
          fluid={data.headerImage.childImageSharp.fluid}
          alt="dust and disquiet" /> */}
      </div>
      <Bio />
      {/* <div className="w-full max-h-80 object-cover"> */}
        <Img fixed={data.bannerImage.childImageSharp.fluid} alt="mountains" />
      {/* </div> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(relativePath: { eq: "dust-and-disquiet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bannerImage: file(relativePath: { eq: "mountains.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
