import _ from 'lodash';

// BEGIN
export default function normalizeLesson(lesson) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  
  if (lesson.name) {
      lesson.name = capitalize(lesson.name.trim());
  }
  if (lesson.description) {
      lesson.description = lesson.description.trim().toLowerCase();
  }
}
  // END