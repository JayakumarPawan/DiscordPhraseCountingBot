class Leaderboard {
  constructor() {
    this.leaderboard = new Map();
  }

  update(item) {
    if (this.leaderboard.has(item)) {
      this.leaderboard.set(item, this.leaderboard.get(item) + 1);
    } else {
      this.leaderboard.set(item, 1);
    }
  }

  toString() {
    //return message if leaderboard is empty
    if (this.leaderboard.size === 0) {
      return "Looks like she's not real yet...";
    }
    // Convert the Map entries to an array and sort them in descending order by count
    const sortedEntries = [...this.leaderboard.entries()].sort(
      (a, b) => b[1] - a[1]
    );
    let result = "";

    // Iterate through the Map entries and format them
    for (const [item, count] of sortedEntries) {
      result += `${item}: ${count} time${count > 1 ? "s" : ""}\n`;
    }

    return result;
  }

  wipe() {
    this.leaderboard.clear();
  }
}

module.exports = Leaderboard;
