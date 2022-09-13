const { gql } = require("apollo-server");

const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage cardds"
    tracksForHome: [Track!]!
}

"A track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks main author"
    author: Author!
    "the tracks main illustration to display in track card or track page details"
    thumbnail: String
    "the tracks approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
}

"Author of a complete track"
type Author {
    id: ID!
    "The authors name"
    name: String!
    "A url to a photo of the author"
    photo: String
}
`;

module.exports = typeDefs;