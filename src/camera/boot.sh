#!/bin/bash

npm install -g nodemon
npm install
while true; do
  node index.js --ignore config/*.json
done;

