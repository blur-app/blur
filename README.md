# Setup 

1. create a postgres db on your platform of choice 
2. create a database.json with the data described in database.conf.json 
3. set create list.env, and fill it with the environment variables described in list.conf.env
4. run db-migrate up 

* If using google cloud for postgres, don't forget to whitelist everyone's URLs when running locally.