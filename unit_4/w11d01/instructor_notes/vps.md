![ga](../../../ga_cog.png)


<hr>
Title: An Ocean of Possibility <br>
Type: Lesson<br>
Duration: 2hrs <br>
Creator: Arthur Bernier Jr<br>
Topics: VPS, SSH etc<br>
<hr>

# Setting Up A VPS with Digital Ocean
1. Sign Up For Digital Ocean with this [__link__](https://try.digitalocean.com/frontend-masters/) to get 100$ in credits
1. A VPS at DO costs $5/month minimum
1. Next after you have set that up we will create a Droplet
![](https://lh3.googleusercontent.com/PS533bjwQ0nPWSulktOEkGUExq7jPqujF5Rb8gsagMQ5SUttf5PK-JL-IuXlSHZ0invi-O3cl3bRJElkZp0c9XSHMlJnlW3z1fEjbYBj4DqGPmlxbqr-BKJCyinBxZTjCmVIXg4uo64)
1. We will be creating our Droplets with Ubuntu because it is the Server Industry standard and the most user friendly
1. Next we will create an SSH key or use one that we have to log in to our Server
we need this to be able to log in to our server from our computer
    ```bash
        cd ~/.ssh
        ls
        ssh-keygen
        ```
1. Below is an example of what you'll see
![](https://lh6.googleusercontent.com/tFeJ1WhUv6-mB_4Cp9OtmFZIHtdR5-5TJaouszQIvyUfEz64vc-CtcXwXyeUUt_pJZImXuGIZIp0NFToUn0WRQJbI6a79BlM0GFEDm6dSfMEXaQMa1cztnSPhXMbr0XZamY93QT_FpI)
1. You'll want to make a unique key name and not overwrite any keys that previously existed so take your time don't press enter
to fast, read the steps

    ```bash
    ls | grep keyname
    keyname 
    keyname.pub
    ```
1. Once you've set up your server we need to log in with that ssh key
    ```bash
    ssh -i ~/.ssh/keyname root@YOUR_IP
   ```
1. Add 2 A Records with your IP address @ and www
1. Use digital ocean to add domain and update nameserver on godaddy

1. now we need to install the proper software on our machine
    ```bash
    apt update
    apt -y upgrade
    python3 -v
    apt install -y python3-pip
    apt install build-essential libssl-dev libffi-dev python3-dev ranger neovim
    mkdir github.com
    mkdir github.com/username
    apt install git
    apt install nodejs
    apt install npm
    npm i -g n yarn gulp-cli semistandard snazzy jest
    n latest
    apt install nginx
    ufw allow 'Nginx Full'
    systemctl status nginx
    ```

1. At this point Nginx should work and you should be able to go to your website in the browser
    ```bash
    # stop the server
      systemctl stop nginx
    # start the server
      systemctl start nginx
    # to restart  
      systemctl restart nginx
    # Just to reload you ca
      systemctl reload nginx
    ```
  1. Nginx does 3 things 
  Reverse proxy
  Web server
 1. Nginx config is located here `/etc/nginx/sites-available/default`
1. we want it to point to our localhost 3000 right now we only need 1 location but if you take your learning
further with nginx you can host 100s of sites all from this one nginx installation
for now 
    ```
        location / {
        proxy_pass http://127.0.0.1:3000/;
        }
    ```
1. Lastly we will set up a process manager `npm i -g pm2`
we will talk about how to use that 

Now we are ready to use git to pull in our backend api and our frontend we'll encrypt etc later
