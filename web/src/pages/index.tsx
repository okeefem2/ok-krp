import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Bio from "../components/Bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { AnchorButton } from "../components/Button/Button";
import FeaturedPosts from '../components/FeaturedPosts';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Michael OKeefe Photography" />
      <div className="banner-image">
        <Img
          fluid={data.headerImage.childImageSharp.fluid}
          style={{ height: "100%", width: "100%" }}
          alt="header image"
        />
      </div>
      <div className={"flex flex-column justify-center mx-10"}>
        <Bio />
      </div>
      <div className="banner-image">
        <Img
          fluid={data.bannerImage.childImageSharp.fluid}
          style={{ height: "100%", width: "100%" }}
          alt="banner image"
        />
      </div>
      <div className={"flex flex-row justify-center align-center py-32"}>
        <h2 className="font-normal text-6xl">Featured Posts</h2>
      </div>

      <div className={"flex flex-row justify-center align-center"}>
        <FeaturedPosts />
      </div>

      <div className={"flex flex-row justify-center align-center py-32"}>
        <AnchorButton>View More</AnchorButton>
      </div>

      <div className={"flex flex-row justify-center align-center py-32"}>
        <h3 className="font-normal text-4xl">Michigan Based Photographer</h3>
      </div>
    </Layout>
  );
};

export default BlogIndex;

// Setting the maxWidth so high was needed for the image to be a high enough quality at that size (100% width)
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(relativePath: { eq: "banner-krp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bannerImage: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 100) {
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
`;
