import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "ABC", duration: "2:05" },
    { title: "m2", duration: "5:05" },
    { title: "m3", duration: "1:05" },
    { title: "m4", duration: "2:25" },
    { title: "m5", duration: "2:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
