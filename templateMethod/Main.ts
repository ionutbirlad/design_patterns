import TransferMoneyTask from './TransferMoneyTask'
// import GenerateReportTask from './GenerateReportTask'

class Main {
  main(): void {
    let task = new TransferMoneyTask();
    task.execute();
  }
}

const run = new Main();
run.main();