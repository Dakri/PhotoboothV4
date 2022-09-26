#!/bin/bash

npm install
while true; do
  node index.js --ignore config/*.json
done;

