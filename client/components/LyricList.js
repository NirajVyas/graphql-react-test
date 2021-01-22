import React from 'react';
import { graphql } from 'react-apollo';
import likeLyric from '../queries/likeLyric';

const LyricList = ({lyrics, mutate}) => {

  if (!lyrics.length) return null;

  const onLike = (id, likes) => {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
  }
  return (
    <ul className="collection">
      {lyrics.map(({content, id, likes}) => {
        return (
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i onClick={() => onLike(id, likes)} className="material-icons">thumb_up</i>
              {likes}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default graphql(likeLyric)(LyricList);