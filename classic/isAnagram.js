function isAnagram(str1, str2) {
  const normalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return normalize(str1) === normalize(str2);
}

// Example usage:

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
