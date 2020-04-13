FROM jekyll/jekyll:latest

ENV APP_HOME /srv/jekyll

# Create Type-on-strap Gemfile
#COPY [".", "$APP_HOME"]

#WORKDIR "$APP_HOME"

# Install the theme
#RUN gem install bundler
#RUN bundle install

#RUN chown -R root:root "$APP_HOME"/_site/
#RUN chmod -R 777 "$APP_HOME"
#RUN chown -R $(whoami) "$APP_HOME"/_site/
# Make it accessible from outside
#EXPOSE 4000


CMD [ "jekyll", "serve" ]
