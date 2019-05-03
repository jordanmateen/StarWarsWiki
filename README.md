## Star Wars Wiki

Light weight wiki app that displays the details about the characters, planets, and vehicles in the Star wars universe.

## Technologies 

- React
- Redux
- ES6
- NPM 
- LESS
- Node
- SWAPI (Star Wars Api)


## Future Features

- Ability to have user logins 
- Allow the user to like characters they have visited
- implement a small database to better retain data from state changes
- Add a bio to each character card.  


## Assumptions Thoughts and Notes.

Working on this project strecthed my thinking in alot of different ways. NOTE: SWAPI is a paginated api so it took a little thinking to get the endpoints to hit the correct location with in the api. The way the data appears when you access the data there are a few chracters that are not in the order of there id. EX: Chracter number 35 appears at the end of the list.  When I first took on the project I had a rough idea about what I was going to do to acheive this goal. It hit a fe road blocks in getting the links to other pages because of the way the api delivers the data. My planning stages involved kind of drawing out what I want to happen throughout the user story and how what kind of data structures I wand to represent in my state tree. Also type of actions where would trigger a state change and so on.