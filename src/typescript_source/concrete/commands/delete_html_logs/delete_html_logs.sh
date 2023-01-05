ftp -in << EOF
open ftp.floridascarwash.com
user mycustom@awmstaging3.com f7Jh1jv27O
cd /floridascarwash.com
delete error_log
cd /floridascarwash.com/wp-admin
delete error_log
cd /floridascarwash.com/wp-includes
delete error_log
cd /floridascarwash.com/wp-content/plugins/MCBA-Wordpress
delete error_log

bye
EOF
