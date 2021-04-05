# TOKEN=559232a03766042193cf0d2321011a7d sh curl-scripts/game/new-game.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"

echo
