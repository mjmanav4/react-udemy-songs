import React, { Component } from "react";
import { selectSong } from "../actions";

import { connect } from "react-redux";
class SongList extends Component {
  renderList() {
    // console.log(this.props.songs);
    return this.props.songs.map(song => {
      //console.log(song);
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Selectx`
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong
  }
)(SongList);
