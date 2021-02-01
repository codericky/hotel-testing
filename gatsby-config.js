module.exports = {
  siteMetadata: {
    siteUrl: "https://hotel.victorycorp.co.id",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/hotel`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  
  
 
{
  resolve: "gatsby-plugin-load-script",
  options: {
    id: "s9-sdk",
    async: true,
    defer: true,
    content: "97907560d61a4043a0a830a77ae7453f",
    src: "socialshare.min.js"
  },
}


      
  ],
//  pathPrefix: "github.com/syukrie77/victory-booking-hotel",
}
