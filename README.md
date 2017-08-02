# Meeto Client

A web interface built in React for interacting with the [Meeto API](https://github.com/Kynosaur/meeto).
This app is designed for travellers looking to group together with others, for the purpose of having cheaper fares and/or safety in numbers.
Users can view the list of trips, and add their own by entering the to/from locations and their contact details.

## How do I use this?

- First, follow the instructions in the README for the [Meeto API](https://github.com/Kynosaur/meeto) (this app will not work before doing so)
- Clone this repo to your local machine
- If you haven't already, install node and npm: `$ brew install node`
- Install the required packages: `$ npm install`
- To run the tests: `$ npm test`
- To run the app: `$ npm start`

## Who made this?

- [Jade Alvares](https://github.com/jjadeseravla)
- [Kye Bracey](https://github.com/Kynosaur)
- [Mário Ribeiro](https://github.com/marioribeiro)
- [Prabu Sathan](https://github.com/prSathan)

## What's this made from?

- JavaScript, ReactJS (client)
- Ruby, Sinatra (API)
- Jest, Enzyme (unit and feature tests)
- CSS (mandatory for making it look presentable)

## That's cool and everything, but what's the story?

This project was carried out in week 9 of Makers Academy - "Practice Project Week".

After deciding what we wanted to build, we talked about what technologies we wanted to use - we could have used full-stack JavaScript or Ruby, but settled on this setup with a React front end designed to work with a Sinatra API which is something none of us had done before.  We used React because it is an exciting and (relatively) new technology that we were eager to try out, and the component-based format was different to anything we had previously worked with (we also liked the fact that it was built from the ground up to be very efficient, this is something that resonated well with us).  We were all fairly comfortable with Sinatra at this point, so we knew we'd be able to build the API endpoints fairly quickly and put more time into learning React.

After deciding our MVP would be a page which displays all the trips in one place, and has a form for creating a new trip, we built the two necessary API endpoints in the space of about 90 minutes.  We made sure to stick to RESTful conventions and TDD best practices.

After spending some time individually learning to use React, we began making our first component, the `Welcome` header (this felt like a good starting point because it would get something on the page, and not have any 'moving parts' so would be easier to test - having an easy-to-test component to start out with would mean we could be sure that we had understood the basics).  Next, we built the `MeetripsList` component and had it make a GET request to the API to show all the trips, then built a form into that component to make the POST request to create trips.  Once the functionality was behaving as expected (which took longer than anticipated due to some troublesome asynchronicity issues!) we refactored this massive component - each item in the list became a `Meetrip` component, and the form became its own component (`NewMeetripForm`).
