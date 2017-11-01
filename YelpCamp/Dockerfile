FROM node:8.8
MAINTAINER Petar Ivanov <pepincho95@gmail.com>

ENV INSTALL_PATH /YelpCamp
RUN mkdir -p ${INSTALL_PATH}

WORKDIR ${INSTALL_PATH}

COPY package.json package.json
RUN npm install

COPY . .

CMD ["npm", "start"]