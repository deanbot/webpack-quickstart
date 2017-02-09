# Overview

This is a simple webpack V2 build example using yarn, react, bootstrap, sass, and quite a number of plugins.

## Features

* Separate dev and prod configs
* React and es2015 babel presets
* External vendor css (bootstrap) from node_modules
* Vendor styles separated from app styles using extract-text-webkit-plugin
* Html template using html-webkit-plugin
* sass compliation, autoprefixing and source maps
* UglifyJS and CommonsChunking
* Image compression and image inlining

# Setup

install yarn
run `yarn` to install dependencies

# Commands

run `yarn start` to launch dev server. 
run `yarn build` to rebuild the dist folder.
run `yarn dev` to rebuild dev version of dist artifacts automatically.