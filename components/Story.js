export default function Story(story){

    
    return `<div class="story">
    <div>
    <span class="gray">${story.index ? story.index : ''}</span>
    <span class="upvote">▲</span>
    <a href="${story.url}"> ${story.title}</a>
    <span>(${story.domain})</span>
    </div>
    <div>
    <div class="gray">
    ${story.points} points by ${story.user} ${story.time_ago}
    |
    <a href="#/item?id=${story.id}">
    ${story.comments_count} comments
    </a>
    |
    <span class="favorite" data-story='${JSON.stringify(story)}'>
    <img class="heart" src="https://w7.pngwing.com/pngs/860/512/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon.png">
    ${story.isFavorite ? "Remove From Favorites" : "Add to Favorites"}
    
    </span>

    </div>
    </div>

    </div>`;

}