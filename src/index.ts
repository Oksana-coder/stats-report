import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reportTargets/consoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

// Example of the composition usage 1 - static methods
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United', 'report3.html');
summary.buildAndPrintReport(matchReader.matches);

/*
// Example of the composition usage 2 - regular
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader ad pass in smth satisfying the 'DataReader' interface;
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('manUnitedWins.html')
);
summary.buildAndPrintReport(matchReader.matches);
*/

/* 
// Example of the inheritance usage
const reader = new MatchReader('football.csv');
reader.read();

const dateOfMatch = reader.data[0][0];

let manUnitedWins = 0;

for(let match of reader.data) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
*/
