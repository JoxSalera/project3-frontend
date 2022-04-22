import axios from "axios";
import { API_URL } from "../consts";

async function DeleteItinerary(itineraryId) {
  try {
    await axios.delete(`${API_URL}/delete-itinerary/:itineraryId`);
  } catch (err) {
    console.log(err);
  }
}
export { DeleteItinerary };
