function findLongestWordLength(str) {
    let st = str.split(' ')
    st.sort((a, b) => a.length - b.length)
    return st[st.length-1].length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");