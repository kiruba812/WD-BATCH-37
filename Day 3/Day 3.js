//Task 1
const teamBasketball = [
    {
        name: "Mohan",
        position : "Power Forward",
        department : "Civil Engineering",
        year : 2
    },
    {
        name: "Harish",
        position: "Shooting Guard",
        department: "Civil Engineering",
        year : 4
    },
    {
        name: "Ragu",
        position: "Center",
        department: "Civil Engineering",
        year : 4
    },
    {
        name: "Kishore",
        position: "Shooting Guard",
        department: "Civil Engineering",
        year: 1
    },
    {
        name: "Logesh",
        position: "Center",
        department: "Civil Engineering",
        year: 4
    },
    {
        name:"Shitto",
        position:"Small Forward",
        department:"Architecture",
        year: 2
    },
    {
        name:"Naveen",
        position:"Shooting Guard",
        department:"Architecture",
        year: 2
    },
    {
        name:"Immanuel Leon",
        position:"Small Forward",
        department:"Architecture",
        year: 2
    },
    {
        name:"Sudharsan",
        position:"Point Guard",
        department:"Architecture",
        year: 3
    },
    {
        name:"Karan",
        position:"Power Forward",
        department:"Architecture",
        year: 3
    },
    {
        name:"Gopal",
        position:"Point Guard",
        department:"Chemical Engineering",
        year: 2
    },
    {
        name:"Elanchezhiyan",
        position:"Center",
        department:"Chemical Engineering",
        year: 2
    },
    {
        name:"Aravind",
        position:"Small Forward",
        department:"Bio-tech Engineering",
        year: 1
    },
    {
        name:"Jagdesh",
        position:"Power Forward",
        department:"Bio-tech Engineering",
        year: 1
    }
]



//1.for loop - selecting only 2nd year students


for (i=0; i <teamBasketball.length; i++){
    if (teamBasketball[i].year === 2){
        console.log(teamBasketball[i].name + "-" + teamBasketball[i].position);
    }
}

//2.for-in loop - player details

for(let players in teamBasketball){
    console.log("Player details" , teamBasketball[players]);
}

//3. for-of loop - player and their department
for (let players of teamBasketball){
    console.log(`${players.name} from ${players.department} department `)
}

//4. forEach loop - player and his position

teamBasketball.forEach(function(players){
  console.log(`${players.name} as ${players.position}`);
});
//Task 2
const resume = [
    {
        jobApplication: {
            role: "Full-Stack Developer"
        },
        personalInfo: {
            name: {
                firstName: "T.",
                lastName: "Kirubagaran",
                age: 24,
                fullName: this.firstName + " " + this.lastName
            },
            contact: {
                state: "Tamil Nadu",
                district: "cuddalore",
                address: `xyz street, ${this.district}, ${this.state}`,
                mail: "email@gmail.com",
                mobile: "********78"
            },
            languages: {
                tam: "Tamil",
                eng: "English"
            }
        },
       interest: {
            interest_1 :"Watching Movies",
            interest_2 :"playing Basketball",
            interest_3 :"Reading Books",
            interest_4 :"Painting" 
        },
  
    }
]

console.log(resume);





