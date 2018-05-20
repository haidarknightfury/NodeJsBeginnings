# Setting SSH and GITHUB

1. ls -al ~/ .ssh -Check if there is any ssh generated
2. ssh-keygen -t rsa -b 4096 -C 'haidardargaye@gmail.com'
3. ls -al ~/ .ssh - id_rsa(private key) , id_rsa_pub (public)
4. add ssh agent : eval "$(ssh-agent -s)" -Agent PID
5. tell ssh agent where file live: ssh-add  ~/.ssh/id_rsa
6. github account : settings/ssh/ - add public key : name
                    - copy content of file to key
7. ssh -T git@github.com - test connection - yes
8. new repository - git remote add, git push -u origin master
 
HEROKU

- toolbelt.heroku.com download
- heroku --help
- heroku login - email password
- add ssh on heroku:
    - heroku keys:add 
- heroku keys
- ssh -v git@heroku.com [authentication succeeeded]
- env, SET [environment variables]
- replace port by PORT of heroku
    - const port = process.env.PORT|| 3000;
- need to specify script in package.json 
- add in scripts "start":"node server.js"
- npm start - to start
- heroku create 
- git push heroku - to push heroku
- heroku open - open heroku app in browser
- 