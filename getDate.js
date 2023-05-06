function getLastWeeksDate() {
      const now = new Date();

      return new Date(now.getFullYear(), now.getMonth(), now.getUTCDate());
}

console.log(getLastWeeksDate());