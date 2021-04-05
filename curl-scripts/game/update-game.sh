#!/bin/bash

# ID=606b0ed0643b05001796dfa0 TOKEN=559232a03766042193cf0d2321011a7d INDEX=0 VALUE="x" OVER=false sh curl-scripts/game/update-game.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
