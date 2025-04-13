import React from "react";


function getReadTimeEmojiString(minutes) {
  if (!minutes) return ""; 

  let emoji = "";
  let interval = 0;

  if (minutes < 30) {
    emoji = "☕️";
    interval = 5;
  } else {
    emoji = "🍱";
    interval = 10;
  }

  const numEmojis = Math.ceil(minutes / interval);
  const emojiString = emoji.repeat(numEmojis);

  return `${emojiString} ${minutes} min read`;
}


function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readTimeInfo = getReadTimeEmojiString(minutes); 

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        
        {readTimeInfo && ` • ${readTimeInfo}`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;