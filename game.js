
//ROOMS ___________________________________________________________


// Define Room as a class
class Room {
    constructor(name, descript, ) {
        this._name = name
        this._descript = descript
        this._linkedRooms = {}
        this.linkedCharacter = ""
    }
        // set char(characterObject) {
        //     this.linkedCharacter = characterObject;
        // }

        setCharacter(characterToLink) {
            this.linkedCharacter = characterToLink
        }



    linkRooms(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink
    }


    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms [direction];
        } else {
            alert("Ouch! You cant go through that way",);
            return this;
        }
    }


}


// Defining all the objects (available rooms)
const entrance = new Room("Entrance", "is the only way into the school from the South of the building")
const hallway = new Room("Hallway", "connects most of the school's rooms together. But, it looks like the bullies have blocked the main door to the Sports Hall!!")
const classRoom = new Room("Classroom", "has an outdated chalkboard")
const glassCorridor = new Room("Glass Corridor", "leads outs towards the playground using the door to the East. There's a staff room at the opposite end which is out of bounds to students. It looks like the bullies have blocked another door, this time its the main access to the Science Lab - there is a back entrance through the Sports Hall though.")
const library = new Room("Library", "is filled with books and resources. Maybe there is a map of the school in here!")
const sportsHall = new Room("Sports Hall", "has plenty of sports equipment in here")
const scienceLab = new Room("Science Lab", "is where lots of clever experiments happen")
const playground = new Room("Playground", "there are lots of swings to play on")
const artStudio = new Room ("Art Studio", "there's paintings and portraits everywhere")


// Linking the Rooms together
entrance.linkRooms("north", hallway)
hallway.linkRooms("south", entrance)

hallway.linkRooms("east", classRoom)
classRoom.linkRooms("west", hallway)

hallway.linkRooms("north", glassCorridor)
glassCorridor.linkRooms("south", hallway)

hallway.linkRooms("west", library)
library.linkRooms("east", hallway)

library.linkRooms("west", sportsHall)
sportsHall.linkRooms("east", library)

sportsHall.linkRooms("north", scienceLab)
scienceLab.linkRooms("south", sportsHall)

glassCorridor.linkRooms("east", playground)
playground.linkRooms("west", glassCorridor)

playground.linkRooms("east", artStudio)
artStudio.linkRooms("west", playground)




// CHARACTERS ________________________________________________________


// Define Character Class
class Character {
    constructor (charName, charDescript, charConvo) {
        this._charName = charName
        this._charDescript = charDescript
        this._charConvo = charConvo
    }
}

// Defining all the objects (available Characters)

const char0 = new Character (
    "","",""
)
const char1 = new Character (
    "Lil' Billy:", 
    'has just had his packed lunch stolen by bullies. Help him get it back! Type "talk" to hear what Lil Billy has to say', 
    "Hi, you must be new here! Just to give you a warning, this school is filled with bullies! Can you help me get my packed lunch back, I had it stolen from me in the Art Studio? If you go to the Library first I think there is a leaflet with the map of the school",
)
const char2 = new Character (
    "Mrs Crafty:", 
    "friendly and enthusiastic art teacher", 
    "Hi, do you think you can help me with this problem? I am trying to paint my canvas the colour purple but, I only have three primary colours: red, blue and yellow. Do you know the answer",
)
const char3 = new Character(
    "Big Bully:",
    "strong and aggressive",
    "So you're the one trying to claim back that weak kid's lunch!"
)
const char4 = new Character(
    "Headmaster:",
    'strict and stern',
    'Make sure you stay out of trouble on your first day'
)


// char1.char = char1

entrance.setCharacter(char0) 
sportsHall.setCharacter(char0) 
scienceLab.setCharacter(char0) 
library.setCharacter(char0)
classRoom.setCharacter(char0)
playground.setCharacter(char3) 
hallway.setCharacter(char1)
artStudio.setCharacter(char2)
glassCorridor.setCharacter(char4)




// GAME ___________________________________________________________


// Define function for displaying Room Name and Room Description
function displayRoomInfo (room) {
    console.log(room.linkedCharacter)
    document.getElementById("descriptionBoxRoom").innerHTML = `The ${room._name} ${room._descript}`;
    displayCharacterInfo(room.linkedCharacter)
}


// Define function for displaying Character Name and Character Description
function displayCharacterInfo (char) {
    if (!char) {
        console.log("there is noone here")
    } else {
        console.log(`my char ${char}`)
        document.getElementById("descriptionBoxChar").innerHTML = `${char._charName} ${char._charDescript}`;
        displayCharacterConvo(char);
    }

}

function displayCharacterConvo(char) {
    if (!char) {
        console.log("no character here")
    } else {
        document.getElementById("descriptionBoxChar").innerHTML = `${char._charName} "${char._charConvo}"`;

    }
}






// Run start of Game

//  Set what room the game starts in
function startGame() {
    let currentRoom;
    currentRoom = entrance // This sets current room to the entrance when start game function is run (on browser refresh)
    displayRoomInfo(currentRoom)

    // Navigational Directions --  using textbox input
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"]
        if (directions.includes(command.toLowerCase())) {
            currentRoom = currentRoom.move(command)
            displayRoomInfo(currentRoom);
        } else {
            document.getElementById("usertext").value = ""
            alert('Invalid entry. Please try "north", "east", "south", or "west" and hit Enter')
        }
    }
});





}

startGame()




// if(currentRoom === entrance) {
// displayCharacterInfo(char1);
// } else {displayCharacterInfo(char0);
// }








