const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// Define the URLs of your routes
const routes = [
  "/",
  "/signup",
  "/search-property",
  // Add any additional routes here
];

// Create a stream for the sitemap
const sitemap = new SitemapStream({
  hostname: "https://real-e-state-website.vercel.app",
});

// Convert the array of routes to a stream (the SitemapStream needs a readable stream)
const xmlStream = Readable.from(
  routes.map((route) => ({ url: route, changefreq: "daily", priority: 0.7 }))
);

// Pipe the XML stream to generate the sitemap
streamToPromise(xmlStream.pipe(sitemap))
  .then((sm) => {
    // Write the generated sitemap to the public folder
    fs.writeFileSync(
      path.join(__dirname, "public", "sitemap.xml"),
      sm.toString()
    );
    console.log("Sitemap generated and saved to public/sitemap.xml");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
