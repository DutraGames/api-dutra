const fetch = require('node-fetch')
const express = require('express')
const router = express.Router();

/* Variables Github */

let name = ""
let avatar = ""
let youtube = ""
let github = ""
let followers = 0
let following = 0
let bio = ""


fetch('https://api.github.com/users/DutraGames')
    .then(res => res.json())
    .then((body) =>{
        name = body.name
        avatar = body.avatar_url
        youtube = body.blog
        github = body.html_url
        followers = body.followers
        following = body.following
        bio = body.bio
})

router.get('/', (req, res) => {
    res.send({
        name: name,
        avatar: avatar,
        youtube: youtube,
        github: github,
        followers: followers,
        following: following,
        bio: bio
    })
})

module.exports = router