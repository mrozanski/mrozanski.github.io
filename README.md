# README

## Note to myself

Local environment (9-9-25)
Installed Ruby 3.3.0 with Brew and rvenv.
Then,

`brew install chruby ruby-install`

`ruby-install ruby 3.4.1`

```
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.4.1" >> ~/.zshrc # run 'chruby' to see actual version
```

`gem install jekyll`

From: https://jekyllrb.com/docs/installation/macos/