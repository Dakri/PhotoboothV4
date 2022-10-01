FROM dpeters/photobooth_base
WORKDIR /src
COPY . .
RUN apt-get update
RUN ["apt-get", "install", "-y", "vim", "libexecs-dev", "libjpeg-dev", "libgphoto2-dev", "gphoto2", "libudev-dev"]


WORKDIR /src/epeg
RUN ./autogen.sh
RUN ./configure
RUN make
RUN make install
RUN ldconfig
RUN npm -g install nodemon


