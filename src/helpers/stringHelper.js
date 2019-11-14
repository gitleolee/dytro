export function changeStringToEmojis(message) {
  let result = '';
  result = threeLetterEmoji(message);
  result = twoLetterEmoji(result);
  result = advancedEmoji(result);
  return result;
}

export function twoLetterEmoji(message) {
  return message
    .replace(/(:D)/gi, '😀')
    .replace(/(:\))/gi, '😀')
    .replace(/(:P)/gi, '😛');
}

export function threeLetterEmoji(message) {
  return message.replace(/(>:D)/gi, '😈').replace(/(>:O)/gi, '😡');
}

export function advancedEmoji(message) {
  return message.replace(/(:happy:)/gi, '😀').replace(/(:tounge:)/gi, '😛');
}
