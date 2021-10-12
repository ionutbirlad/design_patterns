import Task from './Task'

export default class GenerateReportTask extends Task {
  protected override doExecute(): void {
    console.log('Generate report')
  }
}