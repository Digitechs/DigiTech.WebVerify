import parse from 'url';

// const getList = (current, pageSize) => {
//   const listReportStatus = [];

//   for(let i = 0; i < pageSize; i+=1) {
//     const index = (current - 1) * 10 + i;
//     listReportStatus.push({
//       key:index,
//       businessRoom:`Business room ${index}`,
//       number:`Number ${index}`,
//       contractNumber: Math.floor(Math.random() * 1000),
//       effectDate: new Date(),
//       licensePlates: Math.floor(Math.random() * 100),
//       createdAt: new Date(),
//       statusIoC: `STATUS ${index}`,
//       note: `Note ${index} about this report...`
//     });
//   }
//   listReportStatus.reverse();
//   return listReportStatus;
// };

// let listReportStatus = getList(1,50);

// function getListReportStatus(req, res, u) {
//   let realUrl = u;

//   if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
//     realUrl = req.url;
//   }

//   const { current = 1, pageSize = 10 } = req.query
//   const params = parse(realUrl, true).query;
//   let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);

//   if (params.sorter) {
//     const s = params.sorter.split('_');
//     dataSource = dataSource.sort((prev, next) => {
//       if (s[1] === 'descend') {
//         return next[s[0]] - prev[s[0]];
//       }

//       return prev[s[0]] - next[s[0]];
//     });
//   }

//   if (params.status) {
//     const status = params.status.split(',');
//     let filterDataSource = [];
//     status.forEach(s => {
//       filterDataSource = filterDataSource.concat(
//         dataSource.filter(item => {
//           if (parseInt(`${item.status}`, 10) === parseInt(s.split('')[0], 10)) {
//             return true;
//           }

//           return false;
//         }),
//       );
//     });
//     dataSource = filterDataSource;
//   }

//   if (params.name) {
//     dataSource = dataSource.filter(data => data.name.includes(params.name || ''));
//   }

//   const result = {
//     data: dataSource,
//     total: listReportStatus.length,
//     success: true,
//     pageSize,
//     current: parseInt(`${params.currentPage}`, 10) || 1,
//   };
//   return res.json(result);
// };

export default {
  'GET /api/report-status': [
    {
      key: '1',
      businessRoom: `Business room 1`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '2',
      businessRoom: `Business room 2`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '3',
      businessRoom: `Business room 3`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '4',
      businessRoom: `Business room 4`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '5',
      businessRoom: `Business room 5`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '6',
      businessRoom: `Business room 6`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '7',
      businessRoom: `Business room 7`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '8',
      businessRoom: `Business room 8`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '9',
      businessRoom: `Business room 9`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '10',
      businessRoom: `Business room 10`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '11',
      businessRoom: `Business room 11`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
    {
      key: '12',
      businessRoom: `Business room 12`,
      number: `Number 1`,
      contractNumber: '345622342',
      effectDate: '22/12/2020',
      licensePlates: '65B-98928',
      createdAt: '22/11/2020',
      statusIoC: 'COMPLETED',
      note: `Note 1 about this report...`,
    },
  ],
};
