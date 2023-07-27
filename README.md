# Escape NYC API


The Escape NYC API is the API created and used for the <a target="_blank" rel="noopener" href="https://github.com/Darnycya/Escape-NYC">Escape NYC</a> full CRUD React App. It's hosted on Heroku and stored using MongoDB. 


## Link To API

<a href="https://escape-nyc-api-0c842ac3c094.herokuapp.com/trails">Click Here</a>

## Schema of API 

```
const Trail = new Schema(
  {
    name: { type: String, required: true },
    trailUrl: { type: String, required: true },
    difficulty: { type: String, required: true },
    distanceFromNyc: { type: Number, required: true },
    climbingTime: { type: Number, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)
```