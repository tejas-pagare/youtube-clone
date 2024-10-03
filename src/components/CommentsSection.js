import React from 'react'
import Comments from './Comments.js'

const CommentsSection = ({commentData}) => {
//  const comments = [
//     {
//       "username": "@Kristoff458",
//       "time": "1 month ago (edited)",
//       "comment": "\"As developers we don't do things because they are easy. We do things because we thought they would be easy\" -Fireship said it right. 😂 Plan for extensive features, and at the end, bas kaam chal jaye.",
//       "likes": 203,
//       "replies": [
//         {
//           "username": "@ramnikTDM",
//           "time": "1 month ago",
//           "comment": "true!",
//           "likes": 12,
//           "replies": []
//         },
//         {
//           "username": "@okyash007",
//           "time": "1 month ago",
//           "comment": "Very much relatable 😂",
//           "likes": 5,
//           "replies": []
//         }
//       ]
//     },
//     {
//       "username": "@DevMaster93",
//       "time": "2 weeks ago",
//       "comment": "This is the story of every developer's life. We always underestimate the effort 😂",
//       "likes": 180,
//       "replies": [
//         {
//           "username": "@codeNinja007",
//           "time": "2 weeks ago",
//           "comment": "The real struggle is when the easy part becomes the most complex one 😅",
//           "likes": 15,
//           "replies": []
//         },
//         {
//           "username": "@buildItBetter",
//           "time": "1 week ago",
//           "comment": "Every time I think something will take 30 minutes, it takes 3 hours 😂",
//           "likes": 65,
//           "replies": []
//         }
//       ]
//     },
//     {
//       "username": "@techGuru21",
//       "time": "3 weeks ago",
//       "comment": "Haha! So true, I planned a simple feature, and here I am debugging for hours 😂",
//       "likes": 98,
//       "replies": [
//         {
//           "username": "@debugger404",
//           "time": "3 weeks ago",
//           "comment": "The debugging never ends 🤦‍♂️",
//           "likes": 30,
//           "replies": [
//             {
//               "username": "@devLife",
//               "time": "3 weeks ago",
//               "comment": "Tell me about it!",
//               "likes": 20,
//               "replies": []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "username": "@buildItBetter",
//       "time": "1 week ago",
//       "comment": "Every time I think something will take 30 minutes, it takes 3 hours 😂",
//       "likes": 65,
//       "replies": [
//         {
//           "username": "@projectManager",
//           "time": "1 week ago",
//           "comment": "That's why estimates are always wrong 😂",
//           "likes": 25,
//           "replies": []
//         }
//       ]
//     },
//     {
//       "username": "@frontendFreak",
//       "time": "5 days ago",
//       "comment": "The amount of bugs found in something so simple is incredible.",
//       "likes": 120,
//       "replies": [
//         {
//           "username": "@cssWizard",
//           "time": "5 days ago",
//           "comment": "Frontend bugs are the worst! Especially when it's just a missing semicolon 😤",
//           "likes": 45,
//           "replies": []
//         }
//       ]
//     }
//   ]

const subdata =  [
        {
          "username": "@debugger404",
          "time": "3 weeks ago",
          "comment": "The debugging never ends 🤦‍♂️",
          "likes": 30,
          "replies": [
            {
              "username": "@devLife",
              "time": "3 weeks ago",
              "comment": "Tell me about it!",
              "likes": 20,
              "replies": []
            }
          ]
        }
        ,
        {
                "username": "@frontendFreak",
                "time": "5 days ago",
                "comment": "The amount of bugs found in something so simple is incredible.",
                "likes": 120,
                "replies": [
                  {
                    "username": "@cssWizard",
                    "time": "5 days ago",
                    "comment": "Frontend bugs are the worst! Especially when it's just a missing semicolon 😤",
                    "likes": 45,
                    "replies": []
                  }
                ]
              }
      ]

  
  return (
    <div>
     
      {/* {
        comments.map((data)=><Comments data={data}/>)
      } */}
      {
        commentData.map((data)=><Comments data={data} subdata={subdata}/>)
      }
      
    </div>
  )
}

export default CommentsSection
