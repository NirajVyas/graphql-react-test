import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import addLyricsQuery from '../queries/addLyrics'

const LyricCreate = (props) => {

  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setDisabled(true);

    props.mutate({
      variables: {
        content: value,
        songId: props.songId
      }
    }).then(() => {
      setValue('');
      setDisabled(false);
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Add lyrcis</label>
      <input disabled={disabled} value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  )
}

export default graphql(addLyricsQuery)(LyricCreate);