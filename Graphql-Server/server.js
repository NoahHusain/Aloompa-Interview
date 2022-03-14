const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type App {
    id: String
    name: String
  }

  type Stage {
    id: String
    name: String
  }

  type Event {
    id: String
    appId: String
    stageId: String
    name: String
    description: String
    image: String
    startsAt: Int
    endsAt: Int
  }

  type Query {
    Apps: [App]
  }
  type Query {
    Stages: [Stage]
  }
  type Query {
    Events: [Event]
  }
`;

const Apps = [
  {
    id: "b810bf6d-d81d-4104-bc1a-3b21d5154076",
    name: "HipHopFest 2020",
  },
];

const Stages = [
  {
    id: "a4087686-ee6c-49d8-a4f0-d67f5931df3a",
    name: "Rizzle Stage",
  },
  {
    id: "89be560f-6905-471a-8096-102e29a84e77",
    name: "Tizzle Stage",
  },
  {
    id: "a6bb97dc-224c-4f8f-9af7-fd8b5731840f",
    name: "Fo’shizzle Stage",
  },
];

const Events = [
  {
    id: "b4781407-da92-475e-8d87-596aee0d7f2d",
    appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076",
    stageId: "a4087686-ee6c-49d8-a4f0-d67f5931df3a",
    name: "Kanye West",
    description:
      "Kanye Omari West is an American rapper, singer, songwriter, record producer, fashion designer, and entrepreneur.",
    image: "http://assets.aloompa.com.s3.amazonaws.com/rappers/KanyeWest.jpeg",
    startsAt: 1577916000,
    endsAt: 1577919600,
  },
  {
    id: "b471f99a-0942-4e4f-be26-344fe5f7e88d",
    appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076",
    stageId: "a4087686-ee6c-49d8-a4f0-d67f5931df3a",
    name: "Drake",
    description:
      "Aubrey Drake Graham is a Canadian rapper, singer, songwriter, record producer, actor, and entrepreneur. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s.",
    image: "http://assets.aloompa.com.s3.amazonaws.com/rappers/Drake.jpeg",
    startsAt: 1577919600,
    endsAt: 1577923200,
  },
  {
    id: "0161c438-21ca-4112-a166-91cff2a3e1b3",
    appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076",
    stageId: "89be560f-6905-471a-8096-102e29a84e77",
    name: "Kendrick Lamar",
    description:
      "Kendrick Lamar Duckworth is an American rapper and songwriter. Raised in Compton, California, Lamar embarked on his musical career as a teenager under the stage name K-Dot, releasing a mixtape that garnered local attention and led to his signing with indie record label Top Dawg Entertainment (TDE)",
    image: "http://assets.aloompa.com.s3.amazonaws.com/rappers/Kendrick.jpeg",
    startsAt: 1577916000,
    endsAt: 1577919600,
  },
  {
    id: "4867d1ca-cabe-485f-aef8-daac15c1f998",
    appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076",
    stageId: "89be560f-6905-471a-8096-102e29a84e77",
    name: "Future",
    description:
      "Nayvadius DeMun Wilburn, known professionally as Future, is an American rapper, singer, songwriter, and record producer.",
    image: "http://assets.aloompa.com.s3.amazonaws.com/rappers/Future.jpeg",
    startsAt: 1577919600,
    endsAt: 1577923200,
  },
  {
    id: "d4cec773-c287-4efe-aca5-4274accb6656",
    appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076",
    stageId: "a6bb97dc-224c-4f8f-9af7-fd8b5731840f",
    name: "J. Cole",
    description:
      "Jermaine Lamarr Cole, better known by his stage name J. Cole, is an American hip hop recording artist and record producer.",
    image: "http://assets.aloompa.com.s3.amazonaws.com/rappers/JCole.jpeg",
    startsAt: 1577923200,
    endsAt: 1577930400,
  },
];

const resolvers = {
  Query: {
    Apps: () => Apps,
  },
  Query: {
    Stages: () => Stages,
  },
  Query: {
    Events: () => Events,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// List all apps

//Query single app

//List all stages

//Query single stage

//Search stage by name

//List all events

//query single event

//Search events by name

//Query events between two dates

//List all events in an app

//Get the stage in an event

//List events at a stage

//Add, Update, Remove all entities (App, Stage, Event)
