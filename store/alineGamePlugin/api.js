import axios from "axios"
import {
  ALINE_GAME_PLUGIN_USERNAME,
  ALINE_GAME_PLUGIN_PASSWORD
} from "react-native-dotenv"
const alineGamePlugin = axios.create({
  baseURL: "https://alaisgomes.info/api",
  auth: {
    username: ALINE_GAME_PLUGIN_USERNAME,
    password: ALINE_GAME_PLUGIN_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_games_list(payload) {
  return alineGamePlugin.get(`/games`)
}
function get_games_read(payload) {
  return alineGamePlugin.get(`/games/`)
}
export const apiService = { get_games_list, get_games_read }
