
mysql -D tinman72_rest_api_demo -u tinman72_4a4e_cg --password='th3RIver0fL1F3Data$toraGePl@ce' -h americansjewelry.com -e "delete from monitored_objects;"
mysql -D awmstag2_car -u awmstag2_car --password='.&#CL=}2W$EO' -h floridascarwash.com -e "DELETE FROM wp_mcba_users WHERE first_name != 'Steve';"
mysql -D awmstag2_car -u awmstag2_car --password='.&#CL=}2W$EO' -h floridascarwash.com -e "DELETE FROM debug_log;"
mysql -D awmstag2_car -u awmstag2_car --password='.&#CL=}2W$EO' -h floridascarwash.com -e "DELETE FROM wp_mcba_chat_messages;"
mysql -D awmstag2_car -u awmstag2_car --password='.&#CL=}2W$EO' -h floridascarwash.com -e "DELETE FROM wp_mcba_chat_conversations;"



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

ftp -in << EOF
open ftp.mycustombusinessapp.com
user mycustom f7Jh1jv27O
cd /public_html
delete error_log
cd /public_html/wp-admin
delete error_log
cd /public_html/wp-includes
delete error_log
cd /public_html/wp-content/plugins/MCBA-Wordpress
delete error_log
bye
EOF

# thanks chatgpt for showing the non-interactive version.  this is great, we don't even need expect.



