user {
  id
  name {
    first
    last
  }
  company
  email
  registered
  picture
  reputation
  aboutMe
  password
}

tag {
  id
  title
  description
  questions
  followers
}

answers {
  id
  content
  votes
  hasOwnAnswers // answer cấp 1 có hasOwnAnswers > 0
  creator
  createdAt
}

question {
  id
  title
  content
  votes
  views
  creator
  createdAt
  lastEdited
  tags
  answers
}

topic {
  id
  title
  content
  creator
  createdAt
  questions
}