# TOKEN=04c82f97012dc96ab1f41157876025f1 sh curl-scripts/game/view-games.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"

echo
