const { Router } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res) {
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
//})


// Example 1 for path params
//router.get('/students/:studentName', function (req, res) {
// ':' denotes that the following part of route is a variable
// The value of this variable is what we are sending in the request url after /students
// This value is set in the form of an object inside req.params
// The object contain key value pairs
// key is the variable in the route
// value is whatever dynamic value sent in the request url
//let myParams = req.params

// params attribute is fixed in a request object
// params contains the path parameters object
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName)
// })

// Example 2 for path params
// router.get('/student-details/:name', function (req, res) {
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })
// router.get('/movies', function (req, res) {
//     let movies = ['3 idiots', 'James bond', 'American sniper', 'Batman begins']
//     res.send(movies)

// })
// router.get('/moviesArr/:indexnumber', function (req, res) {
//     let moviesArr = ['3 idiots', 'James bond', 'American sniper', 'Batman begins']
//     const index = req.params.indexnumber
//     if (index > (moviesArr.length - 1)) {
//         res.send("Index is invalid")
//     } else {
//         res.send(moviesArr[index])
//     }
// })
// router.get('/Films', function (req, res) {
//     let Films = [{
//         "id": 1,
//         "name": "The Shining"
//     }, {
//         "id": 2,
//         "name": "Incendies"
//     }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//     }, {
//         "id": 4,
//         "name": "Finding Nemo"
//     }]
//     res.send(Films)
// })
// router.get('/Films/:FilmId', function (req, res) {
//     let Films = [{
//         "id": 1,
//         "name": "The Shining"
//     }, {
//         "id": 2,
//         "name": "Incendies"
//     }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//     }, {
//         "id": 4,
//         "name": "Finding Nemo"
//     }]
//     const FilmId = req.params.id
//     if (FilmId > 4) {
//         res.send("No movie exists with this id")
//     } else {
//         res.send(Films)

//     }
// })
// router.get("/sol1", function (req, res) {
//     let array = [1, 2, 3, 5, 6, 7]
//     function missingNum(array) {
//         let p = array.lenth;
//         let total = ((p + 2) * (p + 1)) / 2;
//         for (let i = 0; i < p; i++) {
//             total = total - array[i]
//         }
//         return total;
//     }
//     console.log(missingNum(array));
//     res.send({ data: missingNum });

// })
// router.get("/sol2", function(req , res){
//     let arr = [33,34, 35, 37, 38]
//     function findnum(arr){
//        let b = arr.length;
//        let total = ((b + 1) * (b + 2)) / 2;
//        let sum = arr.reduce((p,q) => p + q, 0);
//        return total - sum;
//      } 
//         //console.log(total);
//         res.send({data : findnum()  });
// })
// router.get('/solution', function (req, res) {
//     const num = [1, 2, 3, 5, 6, 7]
//     const num1 = (num[num.length - 1] * (num[num.length - 1] + 1)) / 2 //num1=sum of consecutive numbers
//     const num2 = num.reduce((pre, cur) => pre + cur) //num2=sum of numbers present in declared array
//     // by finding difference between the num1 and num2 we will get the missing number
//     const num3 = num1 - num2
//     console.log(num3)
//     res.send(`missing num: ${num3}`)
// })
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    const Newplayer = players.find(p => p.name === body.name)

    if (Newplayer) {
        res.send({ msg: "Player already exist with the given Name" })
    } else {
        players.push(body)
        res.send(players)
    }

})

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]
router.post('/Votingage', function (req, res) {
    const voting = req.query.voting
    const arr = []
    for (i = 0; i < persons.length; i++) {
        let indx = persons[index];
        if (indx.age > voting) {
            indx.votingStatus = true
            arr.push(indx)
        }
    }
    res.send({ message: arr })


})

module.exports = router;



