echo '**************Enter deploy*************'

npm run build

npm start &
sleep 1

echo '**************Deployment successful*********'