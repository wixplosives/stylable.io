# stylable.io Site and Documentation

This is the source of the [Stylable site](https://stylable.io/) and is not intended to be directly read here. 

## Installation

The site is build using [Jekyll](http://jekyllrb.com/). To modify the site, you have to have the following:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [RubyGems](https://rubygems.org/pag
es/download) 
* Jekyll, bundler installed: `gem install jekyll bundler` 
* gh-pages installed: `npm i -g gh-pages`

## Development

Run 
```
bundle exec jekyll serve
```

Deploy

```
bundle install

bundle exec jekyll build 

gh-pages -d ./_site

```
After deployment you can view the site at [Github pages URL](https://wixplosives.github.io/stylable.io/)


## UNLICENSED

Copyright (C) Wix.com, Inc - All Rights Reserved January 2018  
Unauthorized copying of this file, via any medium is strictly prohibited  
Proprietary and confidential  