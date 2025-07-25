import view from '../utils/views.js';
import store from '../store.js';
import Story from '../components/Story.js';
import checkFavorite from '../utils/checkFavorite.js';



export default function Favorites(){

    const { favorites } = store.getState();

    const hasFavorites = favorites.length > 0;


   view.innerHTML =  `<div>
   ${hasFavorites ? favorites.map(story => Story({
    ...story, isFavorite: checkFavorite(favorites, story)
   })).join('') : "Add Favorites to see them here" }
   
   </div>`


   document.querySelectorAll(".favorite").forEach(favoriteButton => {
           favoriteButton.addEventListener('click',  function() {
               
   
               const story = JSON.parse(this.dataset.story);
               const isFavorited = checkFavorite(favorites, story);
   
               if(isFavorited){
                   store.dispatch({type: "REMOVE_FAVORITE", payload: { favorite: story }})
   
               }
               else{
                  store.dispatch({type: "ADD_FAVORITE", payload: { favorite: story }})
               }
   
               
               Favorites();
           });
       });


}