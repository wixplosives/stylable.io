# stylable.io Site and Documentation

This is the source of the [Stylable site](https://stylable.io/) and is not intended to be directly read here. 

## Installation

The site is build using [Jekyll](http://jekyllrb.com/). To modify the site, you have to have the following:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [RubyGems](https://rubygems.org/pages/download) 
* Jekyll, bundler installed: `gem install jekyll bundler` 
* gh-pages installed: `npm i -g gh-pages`

### git module

After cloning this repo, init and fetch [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules#_cloning_submodules):

 - `git submodule init`
 - `git submodule update`

## Development

Run 
```
bundle exec jekyll serve
```

Build

```
jekyll build
```

## UNLICENSED

Copyright (C) Wix.com, Inc - All Rights Reserved January 2018  
Unauthorized copying of this file, via any medium is strictly prohibited  
Proprietary and confidential  