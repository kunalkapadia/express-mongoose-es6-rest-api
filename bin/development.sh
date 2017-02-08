#!/usr/bin/env bash

# --abort-on-container-exit  Stops all containers if any container was stopped.
docker-compose up --build --abort-on-container-exit
