/*
dataSorting 
dataSorting adalah sebuah function yang akan menerima sebuah array of object.
object dalam array terebut akan memiliki berapa key yaitu
log_id, ads_id, transactionType, profit, dan timestamp
Hasil dari function dataSorting ini adalah sebuah array of object, yang menggabungkon transaksi-transaksi
yang memiliki tanggal dan transactionType yang sama, sedangkan untuk log_id dan ads_id akan disimpan
dalam bentuk array, sehingga dapat berisi beberapa id.
Contoh output dari function ini ada di test case.
Do not overthink, good luck, and have fun! 🐼🚀
*/


//transaksi sesuai tanggal
//and transaction type

function dataSorting(logs) {
  var obj = {};
  for (var i = 0; i < logs.length; i++) {
    if (obj[logs[i].timestamp] === undefined) {
      obj[logs[i].timestamp] = {};
    }
    if (obj[logs[i].timestamp][logs[i].transactionType] === undefined) {
      obj[logs[i].timestamp][logs[i].transactionType] = {
        date: logs[i].timestamp,
        transaction_type: logs[i].transactionType,
        profit: 0,
        log_ids: [],
        ad_ids: []
      }
    }

    //log IDs
    obj[logs[i].timestamp][logs[i].transactionType].log_ids.push(logs[i].log_id);
    //ad IDs
    obj[logs[i].timestamp][logs[i].transactionType].ad_ids.push(logs[i].ads_id);
    //profit
    obj[logs[i].timestamp][logs[i].transactionType].profit += logs[i].profit;
  }


  // KHUSUS OBJECT
  // var result = [];
  // for (var date in obj) {
  //   for (var type in obj[date]) {
  //     result.push(obj[date][type]);
  //   }
  // }

  // var result = [];
  // var dates = Object.keys(obj);
  // for (var j = 0; j < dates.length; j++) {
  //   var types = Object.keys(obj[dates[j]]);
  //   for (var k = 0; k < types.length; k++) {
  //     result.push(obj[dates[j]][types[k]]);
  //   }
  // }

  var result = [];
  var dates = Object.values(obj);
  for (var j = 0; j < dates.length; j++) {
    var types = Object.values(dates[j]);
    for (var k = 0; k < types.length; k++) {
      result.push(types[k]);
    }
  }
  
  console.log(result);
 // for (var j = 0; j < )
  
}





let dummy1 = [
  { "log_id": "001", "ads_id": "ad_01", "transactionType": "1", "profit": 10000, "timestamp": "2018-08-03" },
  { "log_id": "002", "ads_id": "ad_02", "transactionType": "1", "profit": 50000, "timestamp": "2018-08-03" },
  { "log_id": "003", "ads_id": "ad_03", "transactionType": "1", "profit": 10000, "timestamp": "2018-08-03" },
  { "log_id": "004", "ads_id": "ad_04", "transactionType": "2", "profit": 33333, "timestamp": "2018-08-05" },
  { "log_id": "005", "ads_id": "ad_05", "transactionType": "2", "profit": 66666, "timestamp": "2018-08-04" },
  { "log_id": "006", "ads_id": "ad_06", "transactionType": "1", "profit": 77777, "timestamp": "2018-08-06" },
  { "log_id": "007", "ads_id": "ad_07", "transactionType": "1", "profit": 12321, "timestamp": "2018-08-07" },
  { "log_id": "008", "ads_id": "ad_08", "transactionType": "2", "profit": 33213, "timestamp": "2018-08-07" },
  { "log_id": "009", "ads_id": "ad_09", "transactionType": "1", "profit": 89384, "timestamp": "2018-08-07" },
  { "log_id": "010", "ads_id": "ad_10", "transactionType": "1", "profit": 92039, "timestamp": "2018-08-08" },
  { "log_id": "011", "ads_id": "ad_11", "transactionType": "1", "profit": 32903, "timestamp": "2018-08-08" },
  { "log_id": "012", "ads_id": "ad_12", "transactionType": "3", "profit": 21312, "timestamp": "2018-08-08" },
  { "log_id": "013", "ads_id": "ad_13", "transactionType": "3", "profit": 90231, "timestamp": "2018-08-09" },
  { "log_id": "014", "ads_id": "ad_14", "transactionType": "3", "profit": 90329, "timestamp": "2018-08-09" },
  { "log_id": "015", "ads_id": "ad_15", "transactionType": "1", "profit": 99921, "timestamp": "2018-08-09" },
  { "log_id": "016", "ads_id": "ad_16", "transactionType": "1", "profit": 10000, "timestamp": "2018-08-01" },
  { "log_id": "017", "ads_id": "ad_17", "transactionType": "2", "profit": 32131, "timestamp": "2018-08-02" },
  { "log_id": "018", "ads_id": "ad_18", "transactionType": "2", "profit": 90909, "timestamp": "2018-08-03" },
  { "log_id": "019", "ads_id": "ad_19", "transactionType": "1", "profit": 12310, "timestamp": "2018-08-04" },
  { "log_id": "020", "ads_id": "ad_20", "transactionType": "1", "profit": 999999, "timestamp": "2018-08-05" },
]
let dummy2 = [
  { "log_id": "001", "ads_id": "ad_01", "transactionType": "2", "profit": 13221, "timestamp": "2006-06-06" },
  { "log_id": "002", "ads_id": "ad_02", "transactionType": "2", "profit": 90123, "timestamp": "2006-06-06" },
  { "log_id": "003", "ads_id": "ad_03", "transactionType": "2", "profit": 281903, "timestamp": "2006-06-06" },
  { "log_id": "004", "ads_id": "ad_04", "transactionType": "4", "profit": 19283, "timestamp": "2006-06-06" },
  { "log_id": "005", "ads_id": "ad_05", "transactionType": "5", "profit": 90231, "timestamp": "2006-06-06" },
  { "log_id": "006", "ads_id": "ad_06", "transactionType": "7", "profit": 9023912, "timestamp": "2006-06-06" },
  { "log_id": "007", "ads_id": "ad_07", "transactionType": "1", "profit": 123666, "timestamp": "2006-06-06" },
  { "log_id": "008", "ads_id": "ad_08", "transactionType": "2", "profit": 321666, "timestamp": "2006-06-06" },
  { "log_id": "009", "ads_id": "ad_09", "transactionType": "2", "profit": 890122, "timestamp": "2006-06-06" },
  { "log_id": "010", "ads_id": "ad_10", "transactionType": "3", "profit": 931028, "timestamp": "2006-06-06" },
  { "log_id": "011", "ads_id": "ad_11", "transactionType": "6", "profit": 890123, "timestamp": "2006-06-06" },
  { "log_id": "012", "ads_id": "ad_12", "transactionType": "6", "profit": 382910, "timestamp": "2006-06-06" },
  { "log_id": "013", "ads_id": "ad_13", "transactionType": "3", "profit": 930122, "timestamp": "2006-06-06" },
  { "log_id": "014", "ads_id": "ad_14", "transactionType": "3", "profit": 389102, "timestamp": "2006-06-06" },
  { "log_id": "015", "ads_id": "ad_15", "transactionType": "3", "profit": 839101, "timestamp": "2020-06-08" },
  { "log_id": "016", "ads_id": "ad_16", "transactionType": "4", "profit": 929212, "timestamp": "2020-06-08" },
  { "log_id": "017", "ads_id": "ad_17", "transactionType": "1", "profit": 903291, "timestamp": "2020-06-08" },
  { "log_id": "018", "ads_id": "ad_18", "transactionType": "6", "profit": 909123, "timestamp": "2020-06-08" },
  { "log_id": "019", "ads_id": "ad_19", "transactionType": "6", "profit": 909122, "timestamp": "2020-06-08" },
  { "log_id": "020", "ads_id": "ad_20", "transactionType": "6", "profit": 192301, "timestamp": "2020-06-08" },
]

console.log(dataSorting(dummy1))
/* OUTPUT
[ { date: '2018-08-03',
    transaction_type: '1',
    profit: 70000,
    log_ids: [ '001', '002', '003' ],
    ad_ids: [ 'ad_01', 'ad_02', 'ad_03' ] },
  { date: '2018-08-05',
    transaction_type: '2',
    profit: 33333,
    log_ids: [ '004' ],
    ad_ids: [ 'ad_04' ] },
  { date: '2018-08-04',
    transaction_type: '2',
    profit: 66666,
    log_ids: [ '005' ],
    ad_ids: [ 'ad_05' ] },
  { date: '2018-08-06',
    transaction_type: '1',
    profit: 77777,
    log_ids: [ '006' ],
    ad_ids: [ 'ad_06' ] },
  { date: '2018-08-07',
    transaction_type: '1',
    profit: 101705,
    log_ids: [ '007', '009' ],
    ad_ids: [ 'ad_07', 'ad_09' ] },
  { date: '2018-08-07',
    transaction_type: '2',
    profit: 33213,
    log_ids: [ '008' ],
    ad_ids: [ 'ad_08' ] },
  { date: '2018-08-08',
    transaction_type: '1',
    profit: 124942,
    log_ids: [ '010', '011' ],
    ad_ids: [ 'ad_10', 'ad_11' ] },
  { date: '2018-08-08',
    transaction_type: '3',
    profit: 21312,
    log_ids: [ '012' ],
    ad_ids: [ 'ad_12' ] },
  { date: '2018-08-09',
    transaction_type: '3',
    profit: 180560,
    log_ids: [ '013', '014' ],
    ad_ids: [ 'ad_13', 'ad_14' ] },
  { date: '2018-08-09',
    transaction_type: '1',
    profit: 99921,
    log_ids: [ '015' ],
    ad_ids: [ 'ad_15' ] },
  { date: '2018-08-01',
    transaction_type: '1',
    profit: 10000,
    log_ids: [ '016' ],
    ad_ids: [ 'ad_16' ] },
  { date: '2018-08-02',
    transaction_type: '2',
    profit: 32131,
    log_ids: [ '017' ],
    ad_ids: [ 'ad_17' ] },
  { date: '2018-08-03',
    transaction_type: '2',
    profit: 90909,
    log_ids: [ '018' ],
    ad_ids: [ 'ad_18' ] },
  { date: '2018-08-04',
    transaction_type: '1',
    profit: 12310,
    log_ids: [ '019' ],
    ad_ids: [ 'ad_19' ] },
  { date: '2018-08-05',
    transaction_type: '1',
    profit: 999999,
    log_ids: [ '020' ],
    ad_ids: [ 'ad_20' ] } ] */


//console.log(dataSorting(dummy2))
/*
[ { date: '2006-06-06',
    transaction_type: '2',
    profit: 1597035,
    log_ids: [ '001', '002', '003', '008', '009' ],
    ad_ids: [ 'ad_01', 'ad_02', 'ad_03', 'ad_08', 'ad_09' ] },
  { date: '2006-06-06',
    transaction_type: '4',
    profit: 19283,
    log_ids: [ '004' ],
    ad_ids: [ 'ad_04' ] },
  { date: '2006-06-06',
    transaction_type: '5',
    profit: 90231,
    log_ids: [ '005' ],
    ad_ids: [ 'ad_05' ] },
  { date: '2006-06-06',
    transaction_type: '7',
    profit: 9023912,
    log_ids: [ '006' ],
    ad_ids: [ 'ad_06' ] },
  { date: '2006-06-06',
    transaction_type: '1',
    profit: 123666,
    log_ids: [ '007' ],
    ad_ids: [ 'ad_07' ] },
  { date: '2006-06-06',
    transaction_type: '3',
    profit: 2250252,
    log_ids: [ '010', '013', '014' ],
    ad_ids: [ 'ad_10', 'ad_13', 'ad_14' ] },
  { date: '2006-06-06',
    transaction_type: '6',
    profit: 1273033,
    log_ids: [ '011', '012' ],
    ad_ids: [ 'ad_11', 'ad_12' ] },
  { date: '2020-06-08',
    transaction_type: '3',
    profit: 839101,
    log_ids: [ '015' ],
    ad_ids: [ 'ad_15' ] },
  { date: '2020-06-08',
    transaction_type: '4',
    profit: 929212,
    log_ids: [ '016' ],
    ad_ids: [ 'ad_16' ] },
  { date: '2020-06-08',
    transaction_type: '1',
    profit: 903291,
    log_ids: [ '017' ],
    ad_ids: [ 'ad_17' ] },
  { date: '2020-06-08',
    transaction_type: '6',
    profit: 2010546,
    log_ids: [ '018', '019', '020' ],
    ad_ids: [ 'ad_18', 'ad_19', 'ad_20' ] } ]
*/