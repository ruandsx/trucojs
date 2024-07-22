FROM nginx:alpine

WORKDIR /etc/nginx
# COPY ./nginx.conf ./conf.d/default.conf

# Remove any existing config files
RUN rm ./conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf ./conf.d/

EXPOSE 80
ENTRYPOINT [ "nginx" ]
CMD [ "-g", "daemon off;" ]