import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>SelectSong</div>;
  }
  return (
    <div>
      <h3>Detail for</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
