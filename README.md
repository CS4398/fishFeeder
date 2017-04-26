# Fish Feeder

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/coverImg.png?raw=true)

---

## Authors
- Kayla Saythongkham
- Michael Robertson
- David Rouse
- Adriana Rios

---

## Project Description
Our project is an automated fish feeder targeted for users who are forgetful or have a busy schedule that prevents timely feeding of their pet fish. This is ideal for users who spend lots of time away from home for travel or have busy work or school schedules.

We will implement a web app that allows users to set a time that may be repeated twice daily. Upon app interaction, the device will feed the fish. Users will also be able to see when the fish has been fed.

---

## Functionalities

- Feeding fish automatically
- Display a history of feedings
- Livestream of fish

---

## End Users

Our target users are people who want to manage and maintain their pet fish while maintaining a busy schedule.

---

## Technologies

#### Backend

- Server is housed in Raspberry Pi B
- 1080p HD camera (currently set on low resolution for testing)
- High torque servo rigged up to drill feeder (custom designed for this application)
- Python

#### Front End
- Node.js
- Express Server
- Pug templates

#### Unit Tests

- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/api/bdd/)

---

## Running Front End Locally

1. Download and install [node](https://nodejs.org/en/)
2. From your console or terminal clone the repo
   ```
   git clone https://github.com/CS4398/fishFeeder.git
   ```
3. Install by running
   ```
   npm install
   ```
4. Start the front end by running
   ```
   npm start
   ```
5. Open a browser to [http://localhost:8088/](http://localhost:8088/)

---

## Run Tests

1. From your console or terminal globally install mocha
   ```
   npm install -g mocha
   ```
2. Move to the test directory
   ```
   cd test
   ```
3. Finally run the tests
   ```
   mocha --reporter nyan test.js
   ```

[View test code](https://github.com/CS4398/fishFeeder/blob/master/test/test.js)

---

## Class Diagram

![Class Diagram](https://github.com/CS4398/fishFeeder/blob/master/resources/img/class_diagram.png?raw=true)

---

## State Diagram

![State Diagram](https://github.com/CS4398/fishFeeder/blob/master/resources/img/State%20Chart.png?raw=true)
[Edit](https://www.draw.io/#HCS4398%2FfishFeeder%2Fmaster%2FState%20Chart.xml)

---

## SRS Doc

[Software Requirements Specifications](https://github.com/CS4398/fishFeeder/blob/master/resources/SRSgroup4SM.docx.pdf)

---

## User Acceptance Tests

[Download Documentation](https://github.com/CS4398/fishFeeder/blob/master/resources/User%20Acceptance%20Testing%20for%20Fishyfeeder.docx)

---

## Raspberry Pi Autofeeder and Fish Surveillance System

Our system is built around a raspberry pi, a webcam, and an auto-feeder.  The idea is that you can log in from anywhere and monitor and feed your fish.  Various shell scripts are used to ensure the fish is fed in a timely manner.  

Set up:

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture1.png?raw=true)

When you first use the raspberry pi, it is necessary to set it up and download the latest software.  My raspberry pi came with a wireless internet adaptor, so I didn’t have to plug it in to my Ethernet.  Once everything is plugged in, you are greeted with a screen like this.  

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture2.png?raw=true)

Lots of very important things to remember to do, setup a password, change boot_behavior and enable SSH.  It was really important to enable SSH because that allowed us to log in remotely at any time and make changes to our code.  We ssh’d into the raspberry pi on this address ssh pi@192.168.2.10


Configuring the router:
Type ifconfig into the raspberry pi terminal to get your local ip address.  This number gets plugged into your router on the virtual server page.  It is important to check this number frequently, as some ISPs have dynamic IP allocation.

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture3.png?raw=true)

Then go to google and type ‘what’s my ip’ this will get you your public IP.  This is what you type into your web-browser along with the port number to access your raspberry pi website.

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture4.png?raw=true)

This number can shift very frequently or not at all depending on your ISP.  For about 3 months during this project, we had a different public IP.  About a week ago during a service outage, the IP address changed.

The camera:
After installing various motion.conf files, we had a working camera feed for our raspberry pi.  I tested it by typing sudo service motion start and the feed works on port 8081.  This picture shows up in my firefox browser.  For some reason, chrome does not interact nicely with our web service.  A daemon file ensures the camera is running and we start the script with json.  You can test the daemon by typing ‘sudo service motion start’

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture5.png?raw=true)

The setup:
I have the raspberry pi fish feeder setup in my kitchen.  I used the box that it came in as a case to protect it from the occasional splash.  I cut a hole in the front of the box to allow the camera a way to view the outside world.  I purchased an autofeeder from Petco and using some EE knowledge and google, figured out how to fire signals from the GPIO pins on the raspberry pi to make the feeder work.  The feeder is quite small and is attached to the underside of the protective cover.  The food requirements for this fish are very minimal and I calculated that it needs to be refilled about every two months. I made my own script to fire the GPIO pins and I activate it twice a day with crontab a Unix utility.  All that code is included in our main packet.  

This is a very rough setup, but I believe this system could be ruggedized and commercialized and sold to the general public.  The only reqirement on the users part would be to refill the food once every two months, occasionally partially change the water and to change the filter as necessary.  As long as you have power, your fish will thrive.  

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture6.png?raw=true)

The fish:  
When I purchased Ruby (my 4 year old daughter picked her and named her) from Petco, she was not this vibrant.  I believe that she has gotten healthier under the care of this system.  I picked an expensive beta food and I think the regular feedings have contributed to her health.  Obviously, this is a good system for taking care of pets with low interaction requirements.  I would not recommend any variation of this system for dogs or cats.  The beta is especially suitable for this system because of its low care requirements which are even lower than that of a goldfish.        

![](https://github.com/CS4398/fishFeeder/blob/master/resources/img/Picture7.png?raw=true)

---

## Git Workflow Guide

[Git Workflow Guide](https://github.com/CS4398/fishFeeder/wiki)
