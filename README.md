## asana quiz
### MERN stack

Check it out [here](https://asanaquiz.onrender.com/).  
*... it might take a bit for the server to wake up* 😅

The aim of this project was purely personal tbh... but it helped to practice a bit more programming as well ;)  
As a new yoga teacher, I'm finding it difficult to learn all the poses (more than 200!) in Sanskrit. So instead of making the traditional hand-written cards to learn them, I developed a quiz app to make it more fun :)
<br>

There are 3 different levels of difficulty. On each try, you'll be tested on twelve different asanas. When an answer is failed, it is stored so you can review and replay all the failed ones at some other time.
<br>

<div style="display: flex; justify-content: center; align-items: center; width: 100%">
    <img src="/public/images/5.png" alt="this.project.home" style="width: 23%; margin-right: 5px"/>
    <img src="/public/images/7.png" alt="this.project.question" style="width: 23%; margin-right: 5px"/>
    <img src="/public/images/6.png" alt="this.project.question" style="width: 23%; margin-right: 5px"/>
    <img src="/public/images/3.png" alt="this.project.home" style="width: 23%; margin-top: 25px"/>
</div>


<br>
<h2>TECH STACK</h2>

The *frameworks*, *libraries*, and other tools used:

| front-end | back-end | DB |
| --------- | -------- | -- |
| `React.js` | `Expres.js` | `MongoDB` |
| `Material UI` |  | `Mongoose (ODM)` |


<h3>Back-end endpoints and expected data</h3>

<h4>/api/addAsana</h4>

description: add a yoga posture to the collection  
method: POST  
input: 

```
body: {
    nameEnglish: string,
    nameSanskrit: string,
    level: number,
    imageUrl: string
}
```

output: 

```
status: 200,
body: {"created"}
```

<br>

<h4>/api/searchAsana/:id</h4>

description: get a certain yoga pose based on id  
method: GET  

input: 

```
params:  id
```

output: 

```
status: 200,
body: {
    nameEnglish: string,
    nameSanskrit: string,
    level: number,
    imageUrl: string,
    _id: object,
    createdAt: object,
    updatedAt: object
}
```
<br>

<h4>/api/randomSet/:level</h4>

description: generate a **random ($sample)** set of 12 asanas based on level  
method: GET  
input: 

```
params: level
```

output: 

```
status: 200,
body: [{
    nameEnglish: string,
    nameSanskrit: string,
    level: number,
    imageUrl: string,
    _id: object,
    createdAt: object,
    updatedAt: object
},
...]
```

<br>

<h4>/api/randomNames/:id</h4>

description: find a set of 3 **random ($sample)** names different to the one from the id provided  
method: GET  
input: 

```
params: id
```

output:

```
status: 200,
body: [ nameSanskrit: string, nameSanskrit: string, nameSanskrit: string ]
```



