echo '************killing the app from server*********'

set -x
kill $(cat .pidfile)
