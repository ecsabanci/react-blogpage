export function readingTime(articleText, wordsPerMinute = 200) {
  // Assuming articleText is the text content of your article
  const wordCount = articleText.split(/\s+/).length;

  // Calculate the reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
