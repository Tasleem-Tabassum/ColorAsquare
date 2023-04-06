echo '************killing the app from server*********'

set -e
set -x
kill $(cat .pidfile)
