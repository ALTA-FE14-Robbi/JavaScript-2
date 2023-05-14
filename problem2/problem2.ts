// Cetak Tabel Perkalian

function cetakTablePerkalian(num: number): void {
  let output: string = '';
  for (let i: number = 1; i <= num; i++) {
    for (let j: number = 1; j <= num; j++) {
      output += (i * j).toString().padEnd(3, ' ') + ' ';
    }
    output += '\n';
  }
  console.log(output);
}

cetakTablePerkalian(9);