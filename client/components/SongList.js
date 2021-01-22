import React from 'react';
import { graphql } from 'react-apollo';
import  { Link } from 'react-router-dom';
import fetchSongsQuery from '../queries/fetchSongs'
import deleteSongQuery from '../queries/deleteSong'

const SongList = ({ data, mutate }) => {

  if (data.loading) return <div>Loading...</div>

  const deleteSong = (id) => {
    mutate({
      variables: {
        id
      }
    }).then(() => data.refetch())
  }

  return (
    <div>
      <ul className="collection">
        {data.songs.map(({id, title}) => {
          return (
            <li key={id} className="collection-item">
              <Link to={`/songs/${id}`}>
                {title}
              </Link>
              <i className="material-icons" onClick={() => deleteSong(id)}>delete</i>
            </li>
          )
        })}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

export default graphql(deleteSongQuery) (
  graphql(fetchSongsQuery)(SongList)
);
