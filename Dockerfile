FROM circleci/node:latest-browsers

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn

COPY ./ ./

RUN npm run test:e2e

RUN npm run fetch:blocks

CMD ["npm", "run", "build"]