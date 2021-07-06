import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { AnchorButton } from "./Button/Button";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      bioImage: file(relativePath: { eq: "bio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  console.log(data);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  const bioImage = data?.bioImage?.childImageSharp?.fluid;

  return (
    <figure className="flex flex-row justify-center align-center py-32 w-9/12 h-screen">
      <div className="flex flex-col justify-center items-center flex-1">
        <Img
          fluid={bioImage}
          alt="Bio image"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <figcaption className="flex flex-col justify-evenly items-center ml-10 flex-1">
        <h3 className="text-3xl">Some Cool Stuff About Michael</h3>
        {author?.summary?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <AnchorButton>More About Me</AnchorButton>
      </figcaption>
    </figure>
  );
};

export default Bio;
