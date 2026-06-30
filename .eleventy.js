module.exports = function(eleventyConfig) {
  // YAML date-only values (YYYY-MM-DD) parse as UTC midnight; format as calendar dates.
  function toLocalDate(input) {
    if (!input) return new Date();

    if (input instanceof Date) {
      return new Date(input.getUTCFullYear(), input.getUTCMonth(), input.getUTCDate());
    }

    const match = String(input).match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      const [, year, month, day] = match;
      return new Date(Number(year), Number(month) - 1, Number(day));
    }

    return new Date(input);
  }

  // Add date filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return toLocalDate(date).toLocaleDateString('en-US', options);
  });

  eleventyConfig.addFilter("dateDayMonth", function(date) {
    const d = toLocalDate(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    return `${day}.${month}`;
  });

  eleventyConfig.addFilter("dateYear", function(date) {
    return toLocalDate(date).getFullYear().toString();
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