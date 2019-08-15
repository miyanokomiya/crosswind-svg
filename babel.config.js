module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: "> 1%",
          ie: 11,
          uglify: true
        },
        useBuiltIns: "entry"
      }
    ]
  ]
};
