module.exports = function(eleventyConfig) {
  // Add date filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('en-US', options);
  });

  eleventyConfig.addFilter("dateDayMonth", function(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    return `${day}.${month}`;
  });

  eleventyConfig.addFilter("dateYear", function(date) {
    return new Date(date).getFullYear().toString();
  });

  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy("src/**/*.css");
  eleventyConfig.addPassthroughCopy("src/**/*.ico");
  // All images live under src/assets/ and are copied to /assets/
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.url !== "/posts/" && item.url.includes("/posts/"))
      .sort((a, b) => (b.data.date || 0) - (a.data.date || 0))
      .slice(0, 5);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};