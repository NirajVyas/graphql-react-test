import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'
import { Link, useHistory } from 'react-router-dom';
import fetchSongsQuery from '../queries/fetchSongs'

const SongCreate = ({ mutate }) => {

  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        title: value
      },
      refetchQueries: [{ query: fetchSongsQuery }]
    }).then(() => {
      setDisabled(true);
      history.push('/');
    })
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={onSubmit}>
        <label>Song title</label>
        <input disabled={disabled} value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  )
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);